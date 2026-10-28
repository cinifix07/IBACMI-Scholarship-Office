import IBACMILoader from '../components/IBACMILoader.jsx'
import { useEffect,useRef,useState } from 'react'
import { documentationImageUrl } from './api'

export default function DocumentationImage({image,sessionToken,imageCache,loading='lazy',className=''}){
  const ref=useRef(null)
  const url=documentationImageUrl(image)
  const [privateUrl,setPrivateUrl]=useState(null),[state,setState]=useState('loading')
  useEffect(()=>{
    if(!sessionToken&&!imageCache)return
    let objectUrl,observer;const abort=new AbortController()
    const load=()=>{
      const request=imageCache?imageCache.get(url):fetch(url,{headers:{Authorization:`Bearer ${sessionToken}`},signal:abort.signal,cache:'no-store'}).then(response=>{if(!response.ok)throw new Error('Image unavailable');return response.blob()}).then(blob=>{if(abort.signal.aborted)return null;objectUrl=URL.createObjectURL(blob);return objectUrl})
      request.then(value=>{if(!abort.signal.aborted)setPrivateUrl(value)}).catch(()=>{if(!abort.signal.aborted)setState('error')})
    }
    if(loading==='eager')load();else{observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){observer.disconnect();load()}},{rootMargin:'200px'});observer.observe(ref.current)}
    return()=>{abort.abort();observer?.disconnect();if(objectUrl)URL.revokeObjectURL(objectUrl)}
  },[url,sessionToken,imageCache,loading])
  const src=sessionToken||imageCache?privateUrl:url
  return <span ref={ref} className={`documentation-image ${className} ${state==='loading'?'is-loading':''}`}>
    {state==='loading'&&<IBACMILoader variant="image" message="Loading image…" />}
    {state==='error'?<span className="documentation-image-error" role="img" aria-label="Documentation image unavailable">Image unavailable</span>:src&&<img src={src} alt={image.title||'Scholarship Office documentation'} loading={loading} decoding="async" width={image.width} height={image.height} onLoad={()=>setState('ready')} onError={()=>setState('error')} />}
  </span>
}
