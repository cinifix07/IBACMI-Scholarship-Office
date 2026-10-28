import { useEffect,useRef } from 'react'
import DocumentationImage from './DocumentationImage'
import './documentation.css'

export default function DocumentationViewer({images,index,onIndex,onClose,sessionToken,imageCache}){
  const ref=useRef(null),touch=useRef(null)
  const image=images[index]
  const move=direction=>onIndex((index+direction+images.length)%images.length)
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement,overflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=overflow;if(previous?.isConnected)previous.focus({preventScroll:true})}},[])
  return <dialog ref={ref} className="documentation-viewer" aria-label="Documentation image viewer" onCancel={e=>{e.preventDefault();e.stopPropagation();onClose()}} onKeyDown={e=>{
    if(e.key==='ArrowLeft'&&images.length>1){e.preventDefault();move(-1)}
    if(e.key==='ArrowRight'&&images.length>1){e.preventDefault();move(1)}
    if(e.key==='Tab'){const buttons=[...e.currentTarget.querySelectorAll('button')];if(e.shiftKey&&document.activeElement===buttons[0]){e.preventDefault();buttons.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===buttons.at(-1)){e.preventDefault();buttons[0].focus()}}
  }} onClick={e=>{const r=e.currentTarget.getBoundingClientRect();if(e.target===e.currentTarget&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))onClose()}}>
    <header><span>Scholarship Office Documentation</span><button type="button" className="documentation-icon-button" aria-label="Close image viewer" onClick={onClose}>×</button></header>
    <div className="documentation-viewer-stage" onPointerDown={e=>{touch.current={x:e.clientX,y:e.clientY}}} onPointerUp={e=>{const start=touch.current;touch.current=null;if(start&&images.length>1&&Math.abs(e.clientX-start.x)>50&&Math.abs(e.clientX-start.x)>Math.abs(e.clientY-start.y))move(e.clientX<start.x?1:-1)}} onPointerCancel={()=>{touch.current=null}}>
      <DocumentationImage key={`${image._id}-${image.updatedAt}`} image={image} sessionToken={sessionToken} imageCache={imageCache} loading="eager" />
    </div>
    <footer><div className="documentation-viewer-caption"><h2>{image.title||'Scholarship Office documentation'}</h2>{image.description&&<p>{image.description}</p>}{image.eventDate&&<time dateTime={image.eventDate}>{new Date(`${image.eventDate}T00:00:00`).toLocaleDateString('en-PH',{dateStyle:'long'})}</time>}</div>{images.length>1&&<nav aria-label="Image viewer controls"><button type="button" className="documentation-icon-button" aria-label="Previous image" onClick={()=>move(-1)}>←</button><span aria-live="polite">{index+1} / {images.length}</span><button type="button" className="documentation-icon-button" aria-label="Next image" onClick={()=>move(1)}>→</button></nav>}</footer>
  </dialog>
}
