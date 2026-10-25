import fs from 'node:fs'
import { v } from 'convex/values'
import { internal } from '../convex/_generated/api.js'
import { getFunctionName } from 'convex/server'
import { handlers as billing } from './billingFixtures.mjs'
const strip=path=>fs.readFileSync(new URL(path,import.meta.url),'utf8').replace(/^import .*$/gm,'').replace(/export /g,'')
export const rules=new Function('v',strip('../convex/documentationRules.js')+';return {MAX_IMAGE_BYTES,imageTypes,documentationFields,validateDocumentation,inspectDocumentationImage};')(v)
export const docs=new Function('v','internalMutation','internalQuery','mutation','query','internal','requireAdmin',...Object.keys(rules),strip('../convex/documentation.js')+';return {published,list,beginUpload,claimUpload,attachUpload,finishUpload,expireUpload,failUpload,resolveImage,edit,remove};')(v,x=>x,x=>x,x=>x,x=>x,internal,billing.requireAdmin,...Object.values(rules))
export const http=new Function('httpAction','internal',...Object.keys(rules),strip('../convex/documentationHttp.js')+';return {documentationOptions,uploadDocumentation,readDocumentation};')(x=>x,internal,...Object.values(rules))
export const png=fs.readFileSync(new URL('../src/assets/IBACMI.png',import.meta.url))
export const metadata={title:'Test-only image',description:'Isolated test record',eventDate:'2026-10-01',displayOrder:0,status:'draft'}
export function documentationFixture(){
 const tables={admins:[{_id:'admin-1',name:'Test administrator',role:'admin',status:'active'},{_id:'admin-2',name:'Other administrator',role:'admin',status:'active'}],supportSessions:[{_id:'s1',token:'test-session',adminId:'admin-1',role:'admin',expiresAt:Date.now()+1000000},{_id:'s2',token:'other-session',adminId:'admin-2',role:'admin',expiresAt:Date.now()+1000000}],documentation:[],documentationUploads:[],activityLogs:[],allinfo:[],applicants:[],archive:[]}
 const files=new Map(),scheduled=[];let counter=0
 const get=id=>Object.values(tables).flat().find(r=>r._id===id)||null
 const ctx={db:{
  get:async id=>get(id),system:{get:async id=>{const blob=files.get(id);return blob?{_id:id,size:blob.size,contentType:blob.type}:null}},
  query(table){let predicates=[],index='',direction='asc';const chain={withIndex(name,callback){index=name;if(callback)callback({eq(key,value){predicates.push(row=>row[key]===value);return this},gte(key,value){predicates.push(row=>row[key]>=value);return this}});return chain},order(value){direction=value;return chain},filter(callback){const field=key=>({field:key}),read=(r,value)=>value&&typeof value==='object'&&value.field?r[value.field]:value;predicates.push(callback({field,eq:(a,b)=>r=>read(r,a)===read(r,b),or:(...items)=>r=>items.some(fn=>fn(r))}));return chain},collect:async()=>select(),first:async()=>select()[0]||null,take:async n=>select().slice(0,n)};const select=()=>tables[table].filter(r=>predicates.every(p=>p(r))).sort((a,b)=>(index==='by_status_order'?(a.displayOrder-b.displayOrder)||(a.createdAt-b.createdAt):(a.createdAt-b.createdAt)||0)*(direction==='desc'?-1:1));return chain},
  insert:async(table,value)=>{const id=`${table}-${counter++}`;tables[table].push({_id:id,...structuredClone(value)});return id},
  patch:async(id,value)=>Object.assign(get(id),structuredClone(value)),delete:async id=>{for(const rows of Object.values(tables)){const index=rows.findIndex(r=>r._id===id);if(index>=0){rows.splice(index,1);return}}},
 },storage:{store:async blob=>{const id=`file-${counter++}`;files.set(id,blob);return id},get:async id=>files.get(id)||null,delete:async id=>{files.delete(id)}},scheduler:{runAfter:async(delay,ref,args)=>{scheduled.push({delay,ref,args});return 'job'}}}
 ctx.runMutation=async(ref,args)=>docs[getFunctionName(ref).split(':')[1]].handler(ctx,args)
 ctx.runQuery=ctx.runMutation
 const args={sessionToken:'test-session'}
 const upload=async(values=metadata,bytes=png)=>{
  const ticket=await docs.beginUpload.handler(ctx,{...args,...values,mimeType:'image/png',fileSize:bytes.length})
  const response=await http.uploadDocumentation(ctx,new Request(`http://test/documentation/upload?ticket=${ticket}`,{method:'POST',headers:{Authorization:'Bearer test-session','Content-Type':'image/png'},body:bytes}))
  if(!response.ok)throw new Error((await response.json()).message)
  return (await response.json()).id
 }
 return {tables,files,scheduled,ctx,args,upload}
}
