import { v } from 'convex/values'
import { internalMutation,internalQuery,mutation,query } from './_generated/server'
import { internal } from './_generated/api'
import { requireAdmin } from './billing'
import { documentationFields,imageTypes,MAX_IMAGE_BYTES,validateDocumentation } from './documentationRules'

const session={sessionToken:v.string()}
async function audit(ctx,admin,action,summary,id){await ctx.db.insert('activityLogs',{action,actorRole:'admin',actorId:String(admin._id),actorName:admin.name,targetType:'documentation',...(id?{targetId:String(id)}:{}),summary,createdAt:Date.now()})}
const display=record=>({_id:record._id,title:record.title,description:record.description,eventDate:record.eventDate,displayOrder:record.displayOrder,status:record.status,createdAt:record.createdAt,updatedAt:record.updatedAt,width:record.width,height:record.height,mimeType:record.mimeType,fileSize:record.fileSize})
export const published=query({args:{},handler:async ctx=>{
  const records=await ctx.db.query('documentation').withIndex('by_status_order',q=>q.eq('status','published')).collect()
  return records.map(display)
}})
export const list=query({args:{...session,search:v.string(),status:v.union(v.literal('all'),v.literal('draft'),v.literal('published')),sort:v.union(v.literal('asc'),v.literal('desc')),page:v.number()},handler:async(ctx,args)=>{
  await requireAdmin(ctx,args.sessionToken)
  if(args.search.length>120||!Number.isInteger(args.page)||args.page<1)throw new Error('Invalid documentation filters.')
  const query=args.status==='all'?ctx.db.query('documentation').withIndex('by_created'):ctx.db.query('documentation').withIndex('by_status_created',q=>q.eq('status',args.status))
  const records=(await query.order(args.sort).collect()).filter(r=>r.title.toLocaleLowerCase().includes(args.search.trim().toLocaleLowerCase()))
  const pages=Math.max(1,Math.ceil(records.length/10)),page=Math.min(args.page,pages)
  return {rows:records.slice((page-1)*10,page*10).map(display),total:records.length,page,pages}
}})
export const beginUpload=mutation({args:{...session,...documentationFields,mimeType:v.string(),fileSize:v.number()},handler:async(ctx,{sessionToken,...values})=>{
  const admin=await requireAdmin(ctx,sessionToken);validateDocumentation(values)
  if(!imageTypes.includes(values.mimeType)||!Number.isInteger(values.fileSize)||values.fileSize<=0||values.fileSize>MAX_IMAGE_BYTES)throw new Error('Choose a PNG, JPEG or WebP image up to 10 MB.')
  const recent=await ctx.db.query('documentationUploads').withIndex('by_admin_created',q=>q.eq('adminId',admin._id).gte('createdAt',Date.now()-60000)).take(20)
  if(recent.length>=20)throw new Error('Upload limit reached. Please wait one minute before uploading more images.')
  const id=await ctx.db.insert('documentationUploads',{...values,title:values.title.trim(),description:values.description.trim(),adminId:admin._id,createdAt:Date.now(),expiresAt:Date.now()+15*60*1000,state:'pending'})
  await ctx.scheduler.runAfter(15*60*1000,internal.documentation.expireUpload,{ticketId:id})
  return id
}})
export const claimUpload=internalMutation({args:{...session,ticketId:v.id('documentationUploads')},handler:async(ctx,args)=>{
  const admin=await requireAdmin(ctx,args.sessionToken),ticket=await ctx.db.get(args.ticketId)
  if(!ticket||ticket.adminId!==admin._id||ticket.state!=='pending'||ticket.expiresAt<Date.now())throw new Error('This upload has expired or has already been used.')
  await ctx.db.patch(ticket._id,{state:'uploading'})
  return {fileSize:ticket.fileSize,mimeType:ticket.mimeType}
}})
export const attachUpload=internalMutation({args:{ticketId:v.id('documentationUploads'),storageId:v.id('_storage')},handler:async(ctx,args)=>{
  const ticket=await ctx.db.get(args.ticketId)
  if(!ticket||ticket.state!=='uploading'||ticket.expiresAt<Date.now())throw new Error('Upload expired before it could be saved.')
  await ctx.db.patch(ticket._id,{storageId:args.storageId})
}})
export const finishUpload=internalMutation({args:{...session,ticketId:v.id('documentationUploads'),width:v.number(),height:v.number()},handler:async(ctx,args)=>{
  const admin=await requireAdmin(ctx,args.sessionToken),ticket=await ctx.db.get(args.ticketId)
  if(!ticket||ticket.adminId!==admin._id||ticket.state!=='uploading'||!ticket.storageId||ticket.expiresAt<Date.now())throw new Error('Upload expired. Please try again.')
  const file=await ctx.db.system.get(ticket.storageId)
  if(!file||file.size!==ticket.fileSize||file.contentType!==ticket.mimeType)throw new Error('Stored image validation failed.')
  const id=await ctx.db.insert('documentation',{storageId:ticket.storageId,title:ticket.title,description:ticket.description,eventDate:ticket.eventDate,displayOrder:ticket.displayOrder,status:ticket.status,mimeType:ticket.mimeType,fileSize:ticket.fileSize,width:args.width,height:args.height,uploadedBy:admin._id,createdAt:Date.now(),updatedAt:Date.now()})
  await ctx.db.patch(ticket._id,{state:'completed'})
  await audit(ctx,admin,'documentation_uploaded',`Documentation image saved as ${ticket.status}.`,id)
  return id
}})
export const expireUpload=internalMutation({args:{ticketId:v.id('documentationUploads')},handler:async(ctx,args)=>{
  const ticket=await ctx.db.get(args.ticketId)
  if(!ticket||ticket.state==='completed')return
  if(ticket.storageId){const reference=await ctx.db.query('documentation').withIndex('by_storage',q=>q.eq('storageId',ticket.storageId)).first();if(!reference&&await ctx.db.system.get(ticket.storageId))await ctx.storage.delete(ticket.storageId)}
  await ctx.db.delete(ticket._id)
}})
export const failUpload=internalMutation({args:{ticketId:v.id('documentationUploads')},handler:async(ctx,args)=>{
  const ticket=await ctx.db.get(args.ticketId)
  if(!ticket||ticket.state==='completed')return
  if(ticket.storageId&&await ctx.db.system.get(ticket.storageId))await ctx.storage.delete(ticket.storageId)
  await ctx.db.patch(ticket._id,{state:'failed',storageId:undefined})
}})
export const discardUnattached=internalMutation({args:{storageId:v.id('_storage')},handler:async(ctx,args)=>{
  const reference=await ctx.db.query('documentation').withIndex('by_storage',q=>q.eq('storageId',args.storageId)).first()
  if(!reference&&await ctx.db.system.get(args.storageId))await ctx.storage.delete(args.storageId)
}})
export const resolveImage=internalQuery({args:{id:v.id('documentation'),sessionToken:v.optional(v.string())},handler:async(ctx,args)=>{
  const record=await ctx.db.get(args.id)
  if(!record)return null
  if(record.status!=='published'){if(!args.sessionToken)return null;await requireAdmin(ctx,args.sessionToken)}
  return {storageId:record.storageId,mimeType:record.mimeType,fileSize:record.fileSize}
}})
export const edit=mutation({args:{...session,id:v.id('documentation'),...documentationFields},handler:async(ctx,{sessionToken,id,...values})=>{
  const admin=await requireAdmin(ctx,sessionToken);validateDocumentation(values)
  const record=await ctx.db.get(id);if(!record)throw new Error('Documentation image no longer exists.')
  await ctx.db.patch(id,{...values,title:values.title.trim(),description:values.description.trim(),updatedAt:Math.max(Date.now(),record.updatedAt+1)})
  await audit(ctx,admin,'documentation_updated',`Documentation details updated; status ${values.status}.`,id)
}})
export const remove=mutation({args:{...session,id:v.id('documentation')},handler:async(ctx,args)=>{
  const admin=await requireAdmin(ctx,args.sessionToken),record=await ctx.db.get(args.id)
  if(!record)throw new Error('Documentation image no longer exists.')
  const other=await ctx.db.query('documentation').withIndex('by_storage',q=>q.eq('storageId',record.storageId)).collect()
  const student=await ctx.db.query('allinfo').filter(q=>q.eq(q.field('frontIdStorageId'),record.storageId)).first()
  const applicant=await ctx.db.query('applicants').filter(q=>q.or(...['psaFileStorageId','schoolIdFileStorageId','corFileStorageId','pwdIdFileStorageId','fourPsFileStorageId'].map(key=>q.eq(q.field(key),record.storageId)))).first()
  const archive=await ctx.db.query('archive').take(1001)
  const shared=other.some(r=>r._id!==record._id)||Boolean(student||applicant)||archive.length>1000||archive.some(row=>JSON.stringify(row.data).includes(record.storageId))
  if(!shared&&await ctx.db.system.get(record.storageId))await ctx.storage.delete(record.storageId)
  await ctx.db.delete(record._id)
  await audit(ctx,admin,'documentation_deleted',shared?'Documentation record removed; a referenced or uncertain storage file was retained.':'Documentation record and owned storage file deleted.',record._id)
  return {retainedFile:shared}
}})
