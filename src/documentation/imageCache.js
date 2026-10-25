// Memory-only display cache. Convex Storage remains the permanent source.
export function createDocumentationImageCache(){
  const entries=new Map()
  const remove=key=>{const entry=entries.get(key);if(!entry)return;entry.abort.abort();if(entry.url)URL.revokeObjectURL(entry.url);entries.delete(key)}
  return {
    get(key){
      const cached=entries.get(key);if(cached){cached.used=Date.now();return cached.promise}
      const entry={abort:new AbortController(),used:Date.now(),size:0,url:null,promise:null}
      entry.promise=fetch(key,{cache:'no-store',signal:entry.abort.signal}).then(response=>{if(!response.ok)throw new Error('Image unavailable');return response.blob()}).then(blob=>{
        if(entry.abort.signal.aborted)throw new Error('Image request cancelled')
        entry.size=blob.size;entry.url=URL.createObjectURL(blob)
        let size=[...entries.values()].reduce((sum,value)=>sum+value.size,0)
        for(const [old,value] of [...entries].sort((a,b)=>a[1].used-b[1].used)){if(entries.size<=20&&size<=40*1024*1024)break;if(old!==key&&value.url){size-=value.size;remove(old)}}
        return entry.url
      }).catch(error=>{if(entries.get(key)===entry)entries.delete(key);throw error})
      entries.set(key,entry);return entry.promise
    },
    retain(keys){const valid=new Set(keys);for(const key of entries.keys())if(!valid.has(key))remove(key)},
    destroy(){for(const key of entries.keys())remove(key)},
  }
}
