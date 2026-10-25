import { httpAction } from './_generated/server'
import { internal } from './_generated/api'
import { inspectDocumentationImage,MAX_IMAGE_BYTES } from './documentationRules'

const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}
const tokenFor=request=>request.headers.get('Authorization')?.replace(/^Bearer\s+/i,'')||''
const json=(body,status)=>new Response(JSON.stringify(body),{status,headers:{...cors,'Content-Type':'application/json'}})
export const documentationOptions=httpAction(async()=>new Response(null,{status:204,headers:cors}))
export const uploadDocumentation=httpAction(async(ctx,request)=>{
  let ticketId,storageId,attached=false
  try{
    ticketId=new URL(request.url).searchParams.get('ticket')
    if(!ticketId||!tokenFor(request))return json({message:'An authorized upload ticket is required.'},401)
    const ticket=await ctx.runMutation(internal.documentation.claimUpload,{ticketId,sessionToken:tokenFor(request)})
    const type=request.headers.get('Content-Type')?.split(';')[0]
    if(type!==ticket.mimeType)throw new Error('The image type does not match its upload ticket.')
    if(Number(request.headers.get('Content-Length'))>MAX_IMAGE_BYTES)throw new Error('Each image must be no larger than 10 MB.')
    const reader=request.body?.getReader();if(!reader)throw new Error('Image content is required.')
    const chunks=[];let size=0
    while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>MAX_IMAGE_BYTES){await reader.cancel();throw new Error('Each image must be no larger than 10 MB.')}chunks.push(value)}
    if(size!==ticket.fileSize)throw new Error('Uploaded image size does not match the selected file.')
    const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length}
    const verified=inspectDocumentationImage(bytes,ticket.mimeType)
    storageId=await ctx.storage.store(new Blob([bytes],{type:verified.mimeType}))
    await ctx.runMutation(internal.documentation.attachUpload,{ticketId,storageId});attached=true
    const id=await ctx.runMutation(internal.documentation.finishUpload,{ticketId,sessionToken:tokenFor(request),width:verified.width,height:verified.height})
    return json({id},201)
  }catch(error){
    // A ticket belonging to another administrator must never be mutated on failure.
    if(attached){await ctx.runMutation(internal.documentation.failUpload,{ticketId}).catch(()=>{})}
    else if(storageId){await ctx.scheduler.runAfter(0,internal.documentation.discardUnattached,{storageId})}
    return json({message:error instanceof Error?error.message:'Image upload failed.'},400)
  }
})
export const readDocumentation=httpAction(async(ctx,request)=>{
  try{
    const id=new URL(request.url).searchParams.get('id');if(!id)return new Response(null,{status:404,headers:cors})
    const sessionToken=tokenFor(request)
    const image=await ctx.runQuery(internal.documentation.resolveImage,{id,...(sessionToken?{sessionToken}:{})})
    if(!image)return new Response(null,{status:404,headers:cors})
    const file=await ctx.storage.get(image.storageId)
    if(!file)return new Response(null,{status:404,headers:cors})
    return new Response(file,{headers:{...cors,'Content-Type':image.mimeType,'Content-Length':String(file.size),'Content-Security-Policy':"default-src 'none'; sandbox"}})
  }catch{return new Response(null,{status:404,headers:cors})}
})
