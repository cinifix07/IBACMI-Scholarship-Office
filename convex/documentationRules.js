import { v } from 'convex/values'

export const MAX_IMAGE_BYTES=10*1024*1024
export const imageTypes=['image/png','image/jpeg','image/webp']
export const documentationFields={title:v.string(),description:v.string(),eventDate:v.string(),displayOrder:v.number(),status:v.union(v.literal('draft'),v.literal('published'))}
export function validateDocumentation(values){
  if(values.title.length>120||values.description.length>2000)throw new Error('Title or description is too long.')
  if(!Number.isInteger(values.displayOrder)||values.displayOrder<0||values.displayOrder>1000000)throw new Error('Display order must be a whole number between 0 and 1,000,000.')
  if(values.eventDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(values.eventDate)||!Number.isFinite(Date.parse(values.eventDate))||new Date(values.eventDate).toISOString().slice(0,10)!==values.eventDate))throw new Error('Choose a valid event date.')
}
export function inspectDocumentationImage(bytes,claimedType){
  const length=bytes.length,view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength)
  if(!length||length>MAX_IMAGE_BYTES)throw new Error('Each image must be no larger than 10 MB.')
  let mimeType='',width=0,height=0
  if(length>=33&&[137,80,78,71,13,10,26,10].every((b,i)=>bytes[i]===b)){
    if(String.fromCharCode(...bytes.slice(12,16))!=='IHDR'||String.fromCharCode(...bytes.slice(-8,-4))!=='IEND')throw new Error('Invalid PNG image.')
    mimeType='image/png';width=view.getUint32(16);height=view.getUint32(20)
  }else if(length>10&&bytes[0]===255&&bytes[1]===216&&bytes[2]===255){
    if(bytes[length-2]!==255||bytes[length-1]!==217)throw new Error('Invalid JPEG image.')
    mimeType='image/jpeg';let offset=2
    while(offset+4<length){if(bytes[offset++]!==255)continue;while(bytes[offset]===255)offset++;const marker=bytes[offset++];if(marker===218||marker===217)break;if(marker===1||(marker>=208&&marker<=215))continue;const size=view.getUint16(offset);if(size<2||offset+size>length)throw new Error('Invalid JPEG segments.');if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(marker)){height=view.getUint16(offset+3);width=view.getUint16(offset+5);break}offset+=size}
  }else if(length>=30&&String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&String.fromCharCode(...bytes.slice(8,12))==='WEBP'){
    if(view.getUint32(4,true)+8!==length)throw new Error('Invalid WebP image length.')
    mimeType='image/webp';const kind=String.fromCharCode(...bytes.slice(12,16))
    if(kind==='VP8X'){width=1+bytes[24]+(bytes[25]<<8)+(bytes[26]<<16);height=1+bytes[27]+(bytes[28]<<8)+(bytes[29]<<16)}
    else if(kind==='VP8L'&&bytes[20]===47){const bits=view.getUint32(21,true);width=(bits&16383)+1;height=((bits>>>14)&16383)+1}
    else if(kind==='VP8 '&&bytes[23]===157&&bytes[24]===1&&bytes[25]===42){width=view.getUint16(26,true)&16383;height=view.getUint16(28,true)&16383}
  }
  if(!mimeType||mimeType!==claimedType||!imageTypes.includes(claimedType))throw new Error('Only valid PNG, JPEG and WebP image files are accepted.')
  if(!width||!height||width>16000||height>16000||width*height>40000000)throw new Error('Image dimensions exceed the supported 40-megapixel limit.')
  return {mimeType,width,height,fileSize:length}
}
