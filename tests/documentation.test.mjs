import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { docs,http,rules,png,metadata,documentationFixture } from './documentationFixtures.mjs'

test('PNG and JPEG signatures/dimensions validate; unsupported, mismatched, oversized and excessive-dimension uploads reject',()=>{
 assert.equal(rules.inspectDocumentationImage(png,'image/png').mimeType,'image/png')
 assert.equal(rules.inspectDocumentationImage(fs.readFileSync('src/assets/samp.jpg'),'image/jpeg').mimeType,'image/jpeg')
 const webp=Buffer.from('UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA','base64')
 assert.equal(rules.inspectDocumentationImage(webp,'image/webp').mimeType,'image/webp')
 assert.throws(()=>rules.inspectDocumentationImage(png,'image/jpeg'))
 assert.throws(()=>rules.inspectDocumentationImage(new Uint8Array(20),'image/png'))
 assert.throws(()=>rules.inspectDocumentationImage(new Uint8Array(rules.MAX_IMAGE_BYTES+1),'image/png'))
 const bomb=new Uint8Array(png);new DataView(bomb.buffer).setUint32(16,100000);assert.throws(()=>rules.inspectDocumentationImage(bomb,'image/png'),/dimensions/)
})
test('administrative endpoints reject invalid sessions before changing data',async()=>{
 const {ctx,tables}=documentationFixture()
 for(const name of ['list','beginUpload','edit','remove'])await assert.rejects(()=>docs[name].handler(ctx,{...metadata,sessionToken:'invalid',id:'invalid',search:'',status:'all',sort:'desc',page:1}))
 assert.equal(tables.documentation.length,0);assert.equal(tables.documentationUploads.length,0)
})
test('real upload handler stores bytes, validates metadata, records ownership and logs the event',async()=>{
 const {ctx,tables,files,upload}=documentationFixture()
 const id=await upload()
 assert.equal(tables.documentation.length,1);assert.equal(files.size,1);assert.equal(tables.documentationUploads[0].state,'completed')
 assert.equal(tables.documentation[0].uploadedBy,'admin-1');assert.ok(tables.activityLogs.some(l=>l.action==='documentation_uploaded'))
 const publicRows=await docs.published.handler(ctx,{})
 assert.deepEqual(publicRows,[])
 const draft=await http.readDocumentation(ctx,new Request(`http://test/documentation/image?id=${id}`));assert.equal(draft.status,404)
 const preview=await http.readDocumentation(ctx,new Request(`http://test/documentation/image?id=${id}`,{headers:{Authorization:'Bearer test-session'}}));assert.equal(preview.status,200);assert.equal(preview.headers.get('Cache-Control'),'no-store')
})
test('publication and unpublication control both public metadata and image requests',async()=>{
 const {ctx,args,tables,upload}=documentationFixture();const id=await upload()
 await docs.edit.handler(ctx,{...args,id,...metadata,status:'published'})
 const rows=await docs.published.handler(ctx,{})
 assert.equal(rows.length,1);assert.equal(rows[0].storageId,undefined);assert.equal(rows[0].uploadedBy,undefined)
 assert.equal((await http.readDocumentation(ctx,new Request(`http://test/documentation/image?id=${id}`))).status,200)
 const version=tables.documentation[0].updatedAt
 await docs.edit.handler(ctx,{...args,id,...metadata,status:'draft'})
 assert.ok(tables.documentation[0].updatedAt>version)
 assert.equal((await docs.published.handler(ctx,{})).length,0)
 assert.equal((await http.readDocumentation(ctx,new Request(`http://test/documentation/image?id=${id}`))).status,404)
})
test('tickets are administrator-bound and cannot be replayed',async()=>{
 const {ctx,args,tables,upload}=documentationFixture();await upload()
 const completed=tables.documentationUploads[0]._id
 await assert.rejects(()=>docs.claimUpload.handler(ctx,{...args,ticketId:completed}),/already been used/)
 const ticketId=await docs.beginUpload.handler(ctx,{...args,...metadata,mimeType:'image/png',fileSize:png.length})
 await assert.rejects(()=>docs.claimUpload.handler(ctx,{sessionToken:'other-session',ticketId}))
 assert.equal(tables.documentationUploads.at(-1).state,'pending')
 const bad=await http.uploadDocumentation(ctx,new Request(`http://test/documentation/upload?ticket=${ticketId}`,{method:'POST',headers:{Authorization:'Bearer other-session','Content-Type':'image/png'},body:png}))
 assert.equal(bad.status,400);assert.equal(tables.documentationUploads.at(-1).state,'pending')
})
test('bad binary uploads never create documentation records and pending tickets expire safely',async()=>{
 const {ctx,args,tables,files}=documentationFixture(),bytes=new Uint8Array(33)
 const ticketId=await docs.beginUpload.handler(ctx,{...args,...metadata,mimeType:'image/png',fileSize:bytes.length})
 const response=await http.uploadDocumentation(ctx,new Request(`http://test/documentation/upload?ticket=${ticketId}`,{method:'POST',headers:{Authorization:'Bearer test-session','Content-Type':'image/png'},body:bytes}))
 assert.equal(response.status,400);assert.equal(files.size,0);assert.equal(tables.documentation.length,0)
 await docs.expireUpload.handler(ctx,{ticketId});assert.equal(tables.documentationUploads.length,0)
})
test('uploads are rate-limited per administrator',async()=>{
 const {ctx,args}=documentationFixture()
 for(let i=0;i<20;i++)await docs.beginUpload.handler(ctx,{...args,...metadata,mimeType:'image/png',fileSize:png.length})
 await assert.rejects(()=>docs.beginUpload.handler(ctx,{...args,...metadata,mimeType:'image/png',fileSize:png.length}),/limit/)
})
test('delete removes owned binary but retains files referenced by other documentation or archive',async()=>{
 const {ctx,args,tables,files,upload}=documentationFixture()
 const id=await upload(),storageId=tables.documentation[0].storageId
 tables.documentation.push({...tables.documentation[0],_id:'shared-record'})
 assert.equal((await docs.remove.handler(ctx,{...args,id})).retainedFile,true);assert.ok(files.has(storageId))
 tables.archive.push({_id:'archived-ref',data:{image:storageId}})
 assert.equal((await docs.remove.handler(ctx,{...args,id:'shared-record'})).retainedFile,true);assert.ok(files.has(storageId))
 const own=await upload({...metadata,title:'Owned image'})
 const ownStorage=tables.documentation.find(r=>r._id===own).storageId
 assert.equal((await docs.remove.handler(ctx,{...args,id:own})).retainedFile,false);assert.equal(files.has(ownStorage),false)
})
test('admin title search, status, date sort and pagination run before ten-record slicing',async()=>{
 const {ctx,args,tables}=documentationFixture()
 for(let i=0;i<23;i++)tables.documentation.push({_id:`record-${i}`,...metadata,title:`Photo ${i}`,status:i%2?'draft':'published',createdAt:i,updatedAt:i,width:100,height:100,mimeType:'image/png',fileSize:100,storageId:'not-public',uploadedBy:'admin-1'})
 const result=await docs.list.handler(ctx,{...args,search:'Photo',status:'published',sort:'desc',page:2})
 assert.equal(result.total,12);assert.equal(result.rows.length,2);assert.equal(result.rows[0]._id,'record-2');assert.equal(result.rows[0].storageId,undefined)
})
