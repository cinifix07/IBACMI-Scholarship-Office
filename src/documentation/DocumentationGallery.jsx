import { useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState } from 'react'
import { flushSync } from 'react-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import DocumentationImage from './DocumentationImage'
import DocumentationViewer from './DocumentationViewer'
import { createDocumentationImageCache } from './imageCache'
import { documentationImageUrl } from './api'
import './documentation.css'

const mod=(number,count)=>((number%count)+count)%count
const offsets=[-2,-1,0,1,2]

function Carousel({images,imageCache}){
  const stage=useRef(null),cards=useRef([]),position=useRef(0),motion=useRef(null),pivotRef=useRef(0),gesture=useRef(null),ignoreClick=useRef(false)
  const [pivot,setPivot]=useState(0),[paused,setPaused]=useState(false),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false),[visible,setVisible]=useState(true),[hidden,setHidden]=useState(()=>document.hidden),[tick,setTick]=useState(0),[viewerId,setViewerId]=useState(null)
  const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const count=images.length
  const stopped=paused||hovered||focused||!visible||hidden||reduced||images.some(image=>image._id===viewerId)
  useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)'),change=()=>{if(query.matches)motion.current=null;setReduced(query.matches)},visibility=()=>setHidden(document.hidden);query.addEventListener('change',change);document.addEventListener('visibilitychange',visibility);const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.1});observer.observe(stage.current);return()=>{query.removeEventListener('change',change);document.removeEventListener('visibilitychange',visibility);observer.disconnect()}},[])
  const paint=useCallback(progress=>{const angle=window.innerWidth<=600?8:window.innerWidth<=900?18:26;cards.current.forEach((card,i)=>{if(!card)return;const distance=offsets[i]-progress,depth=Math.abs(distance);if(count===2){card.style.transform=`translate(-50%, -50%) translateX(${distance*108}%)`;card.style.opacity=depth>1.25?'0':'1'}else{card.style.transform=`translate(-50%, -50%) translateX(${distance*78}%) translateZ(${-depth*125}px) rotateY(${Math.max(-38,Math.min(38,-distance*angle))}deg) scale(${Math.max(.62,1-depth*.12)})`;card.style.opacity=String(Math.max(0,Math.min(1,2.4-depth)))}card.style.zIndex=String(30-Math.round(depth*5))})},[count])
  useEffect(()=>{const resize=()=>paint(position.current-Math.floor(position.current));window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize)},[paint])
  useLayoutEffect(()=>{paint(position.current-Math.floor(position.current))})
  useEffect(()=>{
    if(count<2)return
    let frame,last=0
    const animate=time=>{
      const delta=last?Math.min(50,time-last):0;last=time
      if(motion.current){const m=motion.current;if(!m.start)m.start=time;const p=Math.min(1,(time-m.start)/480),ease=1-Math.pow(1-p,3);position.current=m.from+(m.to-m.from)*ease;if(p===1)motion.current=null}
      else if(!stopped)position.current+=delta/5500
      const next=mod(Math.floor(position.current),count)
      if(next!==pivotRef.current){pivotRef.current=next;flushSync(()=>setPivot(next))}
      paint(position.current-Math.floor(position.current))
      if(!stopped||motion.current)frame=requestAnimationFrame(animate)
    }
    if(!stopped||motion.current)frame=requestAnimationFrame(animate)
    return()=>cancelAnimationFrame(frame)
  },[count,stopped,tick,paint])
  const advance=direction=>{const target=Math.floor(position.current)+direction;if(reduced){position.current=target;pivotRef.current=mod(target,count);setPivot(pivotRef.current);setTick(t=>t+1)}else{motion.current={from:position.current,to:target,start:0};setTick(t=>t+1)}}
  const open=id=>{if(ignoreClick.current){ignoreClick.current=false;return}motion.current=null;setViewerId(id)}
  const viewerIndex=images.findIndex(image=>image._id===viewerId)
  const logical=mod(pivot,count)
  return <>
    <div ref={stage} className={`documentation-stage ${count===1?'is-single':count===2?'is-pair':''}`} aria-roledescription="carousel" aria-label="Published Scholarship Office documentation" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}} onKeyDown={e=>{if(count>1&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();advance(e.key==='ArrowRight'?1:-1)}}} onPointerDown={e=>{gesture.current={x:e.clientX,y:e.clientY};ignoreClick.current=false}} onPointerUp={e=>{const start=gesture.current;gesture.current=null;if(start&&count>1&&Math.abs(e.clientX-start.x)>40&&Math.abs(e.clientX-start.x)>Math.abs(e.clientY-start.y)){ignoreClick.current=true;advance(e.clientX<start.x?1:-1)}}} onPointerCancel={()=>{gesture.current=null}}>
      {count===1?<button type="button" className="documentation-card documentation-single-card" aria-label={`View ${images[0].title||'documentation image'}`} onClick={()=>open(images[0]._id)}><DocumentationImage image={images[0]} imageCache={imageCache} loading="eager" /><span className="documentation-card-caption">{images[0].title||'Scholarship Office documentation'}</span></button>:offsets.map((offset,slot)=>{
        const image=images[mod(logical+offset,count)],interactive=count===2?offset===0:Math.abs(offset)<=1
        return <button key={slot} ref={el=>{cards.current[slot]=el}} type="button" className="documentation-card" tabIndex={interactive?0:-1} aria-hidden={!interactive} aria-label={`View ${image.title||'documentation image'}`} style={{pointerEvents:interactive?'auto':'none'}} onClick={()=>open(image._id)}><DocumentationImage key={`${image._id}-${image.updatedAt}`} image={image} imageCache={imageCache} loading={Math.abs(offset)<=1?'eager':'lazy'} /><span className="documentation-card-caption">{image.title||'Scholarship Office documentation'}</span></button>
      })}
    </div>
    {count>1&&<div className="documentation-controls" onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}><button type="button" className="documentation-icon-button" aria-label="Previous documentation" onClick={()=>advance(-1)}>←</button><span>{logical+1} <span aria-hidden="true">/</span><span className="documentation-sr-only">of</span> {count}</span><button type="button" className="documentation-icon-button" aria-label="Next documentation" onClick={()=>advance(1)}>→</button>{!reduced&&<button type="button" className="documentation-pause" aria-label={paused?'Play documentation carousel':'Pause documentation carousel'} onClick={()=>setPaused(p=>!p)}>{paused?'Play':'Pause'}</button>}</div>}
    {viewerIndex>=0&&<DocumentationViewer images={images} index={viewerIndex} imageCache={imageCache} onIndex={index=>setViewerId(images[index]._id)} onClose={()=>setViewerId(null)} />}
  </>
}
export default function DocumentationGallery(){
  const images=useQuery(api.documentation.published,{})
  const imageCache=useMemo(()=>createDocumentationImageCache(),[])
  useEffect(()=>()=>imageCache.destroy(),[imageCache])
  useEffect(()=>{imageCache.retain((images||[]).map(documentationImageUrl))},[images,imageCache])
  if(!images?.length)return null
  return <section className="documentation-gallery" aria-labelledby="documentation-gallery-title"><header className="documentation-gallery-heading"><span>IBACMI · Scholarship Office</span><h2 id="documentation-gallery-title">Scholarship Office Documentation</h2><p>Explore official activities, announcements, and memorable moments from the Scholarship Office.</p></header><Carousel images={images} imageCache={imageCache} /></section>
}
