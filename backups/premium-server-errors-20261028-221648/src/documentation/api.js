import { inspectDocumentationImage } from '../../convex/documentationRules'

const convexUrl=import.meta.env.VITE_CONVEX_URL||'https://ideal-crane-292.convex.cloud'
export const documentationSite=(import.meta.env.VITE_CONVEX_SITE_URL||convexUrl.replace(/\.convex\.cloud\/?$/,'.convex.site')).replace(/\/$/,'')
export const documentationImageUrl=image=>`${documentationSite}/documentation/image?id=${encodeURIComponent(image._id)}&v=${image.updatedAt}`

export async function prepareDocumentationImage(file){
  if(!['image/png','image/jpeg','image/webp'].includes(file.type)||!file.size||file.size>10*1024*1024)throw new Error(`${file.name}: choose a PNG, JPG or WebP image up to 10 MB.`)
  inspectDocumentationImage(new Uint8Array(await file.arrayBuffer()),file.type)
  const bitmap=await createImageBitmap(file).catch(()=>{throw new Error(`${file.name}: this image could not be decoded.`)})
  try{
    const ratio=Math.min(1,2560/Math.max(bitmap.width,bitmap.height))
    const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*ratio));canvas.height=Math.max(1,Math.round(bitmap.height*ratio))
    canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height)
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,file.type,.88))
    if(!blob||blob.type!==file.type||blob.size>10*1024*1024)throw new Error(`${file.name}: optimized image could not be saved within 10 MB.`)
    return blob
  }finally{bitmap.close()}
}
export function uploadDocumentationImage(ticket,blob,sessionToken,onProgress,signal){
  return new Promise((resolve,reject)=>{
    const request=new XMLHttpRequest()
    const abort=()=>request.abort()
    signal?.addEventListener('abort',abort,{once:true})
    request.open('POST',`${documentationSite}/documentation/upload?ticket=${encodeURIComponent(ticket)}`)
    request.setRequestHeader('Authorization',`Bearer ${sessionToken}`)
    request.setRequestHeader('Content-Type',blob.type)
    request.timeout=120000
    request.upload.onprogress=event=>{if(event.lengthComputable)onProgress(Math.round(event.loaded/event.total*100))}
    const cleanup=()=>signal?.removeEventListener('abort',abort)
    request.onload=()=>{cleanup();let result;try{result=JSON.parse(request.responseText)}catch{reject(new Error('The image server returned an invalid response.'));return}if(request.status>=200&&request.status<300)resolve(result.id);else reject(new Error(result.message||'Image upload failed.'))}
    request.onerror=()=>{cleanup();reject(new Error('Upload failed. Check your connection and try again.'))}
    request.ontimeout=()=>{cleanup();reject(new Error('Image upload timed out. Please try again.'))}
    request.onabort=()=>{cleanup();reject(new Error('Image upload cancelled.'))}
    if(signal?.aborted){reject(new Error('Image upload cancelled.'));return}
    request.send(blob)
  })
}
