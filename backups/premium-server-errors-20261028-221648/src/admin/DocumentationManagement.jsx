import IBACMILoader from '../components/IBACMILoader.jsx'
import { useEffect,useRef,useState } from 'react'
import { useMutation,useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { prepareDocumentationImage,uploadDocumentationImage } from '../documentation/api'
import DocumentationImage from '../documentation/DocumentationImage'
import DocumentationViewer from '../documentation/DocumentationViewer'
import './billing-management.css'
import './documentation-management.css'

const initialDetails={title:'',description:'',eventDate:'',displayOrder:0,status:'draft'}
function MetadataFields({values,onChange}){return <div className="billing-form-grid documentation-metadata">
  <label className="billing-field"><span>Documentation title (optional)</span><input aria-label="Documentation title" maxLength={120} value={values.title} onChange={e=>onChange({...values,title:e.target.value})} /></label>
  <label className="billing-field"><span>Event date (optional)</span><input aria-label="Documentation event date" type="date" value={values.eventDate} onChange={e=>onChange({...values,eventDate:e.target.value})} /></label>
  <label className="billing-field"><span>Display order</span><input aria-label="Documentation display order" type="number" min="0" max="1000000" step="1" value={values.displayOrder} onChange={e=>onChange({...values,displayOrder:Number(e.target.value)})} /></label>
  <label className="billing-field"><span>Publication status</span><select aria-label="Documentation publication status" value={values.status} onChange={e=>onChange({...values,status:e.target.value})}><option value="draft">Draft</option><option value="published">Published</option></select></label>
  <label className="billing-field documentation-description"><span>Description (optional)</span><textarea aria-label="Documentation description" maxLength={2000} rows={3} value={values.description} onChange={e=>onChange({...values,description:e.target.value})} /></label>
</div>}
function DetailsDialog({image,busy,error,onClose,onSave}){
  const ref=useRef(null),[values,setValues]=useState(()=>Object.fromEntries(Object.keys(initialDetails).map(key=>[key,image[key]])))
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement;dialog.showModal();return()=>{dialog.close();previous?.focus({preventScroll:true})}},[])
  return <dialog ref={ref} className="billing-dialog documentation-details-dialog" aria-labelledby="documentation-edit-title" onCancel={e=>{e.preventDefault();e.stopPropagation();if(!busy)onClose()}}><form onSubmit={e=>{e.preventDefault();onSave(values)}}><header className="billing-header"><h2 id="documentation-edit-title">Edit documentation details</h2><button type="button" className="billing-close" disabled={busy} aria-label="Close documentation details" onClick={onClose}>×</button></header><div className="billing-body">{error&&<p className="billing-error" role="alert">{error}</p>}<MetadataFields values={values} onChange={setValues} /></div><footer className="billing-footer"><button type="button" className="billing-secondary" disabled={busy} onClick={onClose}>Cancel</button><button type="submit" className="billing-primary" disabled={busy}>{busy?<IBACMILoader variant="inline" message="Saving documentation…" />:'Save details'}</button></footer></form></dialog>
}
function DeleteDialog({image,busy,error,onClose,onDelete}){
  const ref=useRef(null)
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement;dialog.showModal();return()=>{dialog.close();if(previous?.isConnected)previous.focus({preventScroll:true})}},[])
  return <dialog ref={ref} className="billing-dialog documentation-delete-dialog" aria-labelledby="documentation-delete-title" onCancel={e=>{e.preventDefault();e.stopPropagation();if(!busy)onClose()}}><header className="billing-header"><h2 id="documentation-delete-title">Delete documentation?</h2></header><div className="billing-body"><p>Delete “{image.title||'Untitled documentation'}” from the gallery? This action removes its record and deletes the image file when it is not referenced elsewhere.</p>{error&&<p className="billing-error" role="alert">{error}</p>}</div><footer className="billing-footer"><button type="button" className="billing-secondary" disabled={busy} onClick={onClose}>Cancel</button><button type="button" className="billing-primary" disabled={busy} onClick={onDelete}>{busy?<IBACMILoader variant="inline" message="Deleting image…" />:'Delete image'}</button></footer></dialog>
}

export default function DocumentationManagement({sessionToken,onClose}){
  const ref=useRef(null),fileRef=useRef(null),queueRef=useRef([]),alive=useRef(true),controller=useRef(null)
  const nextQueueKey=useRef(0)
  const [queue,setQueue]=useState([]),[details,setDetails]=useState(initialDetails),[dragging,setDragging]=useState(false),[preparing,setPreparing]=useState(false)
  const [busy,setBusy]=useState(false),[error,setError]=useState(''),[message,setMessage]=useState('')
  const [search,setSearch]=useState(''),[debounced,setDebounced]=useState(''),[status,setStatus]=useState('all'),[sort,setSort]=useState('desc'),[page,setPage]=useState(1)
  const [editing,setEditing]=useState(null),[deleting,setDeleting]=useState(null),[viewerId,setViewerId]=useState(null)
  const result=useQuery(api.documentation.list,{sessionToken,search:debounced,status,sort,page})
  const beginUpload=useMutation(api.documentation.beginUpload),edit=useMutation(api.documentation.edit),remove=useMutation(api.documentation.remove)
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement,overflow=document.body.style.overflow;alive.current=true;dialog.showModal();document.body.style.overflow='hidden';return()=>{alive.current=false;dialog.close();document.body.style.overflow=overflow;controller.current?.abort();queueRef.current.forEach(item=>URL.revokeObjectURL(item.url));if(previous?.isConnected)previous.focus({preventScroll:true})}},[])
  useEffect(()=>{const timer=setTimeout(()=>setDebounced(search),250);return()=>clearTimeout(timer)},[search])
  const updateQueue=next=>{queueRef.current=next;setQueue(next)}
  const addFiles=async files=>{
    if(busy||preparing)return
    const available=10-queueRef.current.length;if(!available){setError('Upload up to 10 images at a time.');return}
    setPreparing(true);setError('');setMessage('');const errors=[]
    for(const file of [...files].slice(0,available)){
      try{const blob=await prepareDocumentationImage(file);if(!alive.current)return;const item={key:`documentation-${nextQueueKey.current++}`,name:file.name,blob,url:URL.createObjectURL(blob),progress:0,state:'ready'};updateQueue([...queueRef.current,item])}catch(err){errors.push(err.message)}
    }
    if([...files].length>available)errors.push('Only the first available 10 images were selected.')
    if(alive.current){setPreparing(false);setError(errors.join(' '))}
  }
  const attempt=async action=>{setBusy(true);setError('');try{await action()}catch(err){setError(err instanceof Error?err.message:'Documentation operation failed.')}finally{if(alive.current)setBusy(false)}}
  const upload=()=>attempt(async()=>{
    if(!queueRef.current.length)throw new Error('Choose at least one documentation image.')
    controller.current=new AbortController();let saved=0;const failures=[]
    const uploads=[...queueRef.current]
    for(let i=0;i<uploads.length;i++){
      const item=uploads[i]
      if(controller.current.signal.aborted)break
      const patch=values=>updateQueue(queueRef.current.map(q=>q.key===item.key?{...q,...values}:q))
      try{patch({state:'uploading',error:''});const ticket=await beginUpload({sessionToken,...details,displayOrder:details.displayOrder+i,mimeType:item.blob.type,fileSize:item.blob.size});await uploadDocumentationImage(ticket,item.blob,sessionToken,progress=>patch({progress}),controller.current.signal);saved++;URL.revokeObjectURL(item.url);updateQueue(queueRef.current.filter(q=>q.key!==item.key))}catch(err){patch({state:'error',error:err.message});failures.push(`${item.name}: ${err.message}`)}
    }
    setMessage(`${saved} documentation image${saved===1?'':'s'} saved to Convex Storage.`);if(failures.length)setError(failures.join(' '));setPage(1)
  })
  const rows=result?.rows||[],viewerIndex=rows.findIndex(row=>row._id===viewerId)
  return <dialog ref={ref} className="billing-dialog billing-main-dialog documentation-admin-dialog" aria-labelledby="documentation-management-title" onCancel={e=>{if(e.target!==e.currentTarget)return;e.preventDefault();if(!busy&&!preparing)onClose()}} onKeyDown={e=>{if(e.key!=='Tab'||e.target.closest('dialog')!==e.currentTarget)return;const fields=[...e.currentTarget.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled)')].filter(el=>el.getClientRects().length&&el.closest('dialog')===e.currentTarget);if(e.shiftKey&&document.activeElement===fields[0]){e.preventDefault();fields.at(-1)?.focus()}else if(!e.shiftKey&&document.activeElement===fields.at(-1)){e.preventDefault();fields[0]?.focus()}}}>
    <header className="billing-header"><div><p className="billing-kicker">Administration</p><h2 id="documentation-management-title">Documentation Management</h2><p>Manage official Scholarship Office documentation and gallery images.</p></div><button type="button" className="billing-close" aria-label="Close Documentation Management" disabled={busy||preparing} onClick={onClose}>×</button></header>
    <div className="billing-body">
      {error&&<p className="billing-error" role="alert">{error}</p>}{message&&<p className="billing-notice" role="status">{message}</p>}
      <section className="billing-card" aria-labelledby="documentation-upload-title"><h3 id="documentation-upload-title">Upload Documentation</h3>
      <div className={`documentation-dropzone ${dragging?'is-dragging':''}`} onDragOver={e=>{e.preventDefault();setDragging(true)}} onDragLeave={()=>setDragging(false)} onDrop={e=>{e.preventDefault();setDragging(false);addFiles(e.dataTransfer.files)}}>
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 32v9h34v-9M24 34V7m-10 10L24 7l10 10" /></svg><strong>Drag your documentation images here</strong><p>PNG, JPG or WebP · up to 10 MB each · 10 images per upload. Images are optimized for web display.</p><button type="button" className="billing-secondary" disabled={busy||preparing} onClick={()=>fileRef.current?.click()}>{preparing?<IBACMILoader variant="inline" message="Preparing images…" />:'Browse files'}</button><input ref={fileRef} className="documentation-file-input" aria-label="Choose documentation images" type="file" accept="image/png,image/jpeg,image/webp" multiple disabled={busy||preparing} onChange={e=>{addFiles(e.target.files);e.target.value=''}} />
      </div>
      {queue.length>0&&<div className="documentation-upload-queue">{queue.map(item=><article key={item.key}><img src={item.url} alt={`Selected image ${item.name}`} /><div><strong>{item.name}</strong><small>{(item.blob.size/1024/1024).toFixed(2)} MB · {item.state==='uploading'?(item.progress >= 100 ? 'Saving uploaded image…' : `${item.progress}% transferred`):item.state==='error'?'Upload failed':'Ready'}</small>{item.state==='uploading'&&<IBACMILoader variant="compact" progress={item.progress} message={item.progress >= 100 ? "Saving uploaded image…" : "Uploading documentation…"} />}{item.error&&<IBACMILoader variant="compact" state="error" message="Image upload failed." detail={item.error} onRetry={busy ? undefined : upload} />}</div><button type="button" className="billing-text-button" disabled={busy} aria-label={`Remove ${item.name}`} onClick={()=>{URL.revokeObjectURL(item.url);updateQueue(queueRef.current.filter(q=>q.key!==item.key))}}>Remove</button></article>)}</div>}
      <MetadataFields values={details} onChange={setDetails} /><p className="billing-hint">These details apply to the selected images. Display order increments for each image; individual details can be edited after saving. Draft images remain private.</p><div className="billing-toolbar"><button type="button" className="billing-primary" disabled={busy||preparing||!queue.length} onClick={upload}>{busy?<IBACMILoader variant="inline" message="Saving documentation…" />:'Save Documentation'}</button>{busy&&queue.length>0&&<button type="button" className="billing-secondary" onClick={()=>controller.current?.abort()}>Cancel remaining uploads</button>}</div>
      </section>
      <section className="billing-card" aria-labelledby="documentation-manage-title"><h3 id="documentation-manage-title">Manage Uploaded Documentation</h3><div className="documentation-admin-filters"><label className="billing-field"><span>Search by title</span><input aria-label="Search documentation by title" value={search} maxLength={120} onChange={e=>{setSearch(e.target.value);setPage(1)}} /></label><label className="billing-field"><span>Publication status</span><select aria-label="Filter documentation status" value={status} onChange={e=>{setStatus(e.target.value);setPage(1)}}><option value="all">All statuses</option><option value="draft">Draft</option><option value="published">Published</option></select></label><label className="billing-field"><span>Sort by upload date</span><select aria-label="Sort documentation by date" value={sort} onChange={e=>{setSort(e.target.value);setPage(1)}}><option value="desc">Newest first</option><option value="asc">Oldest first</option></select></label></div>
      {!result?<IBACMILoader message="Loading documentation gallery…" />:!rows.length?<p className="billing-hint">No documentation matches these filters.</p>:<div className="documentation-admin-grid">{rows.map(image=><article className="documentation-admin-card" key={`${image._id}-${image.updatedAt}`}><button type="button" className="documentation-thumbnail" aria-label={`Preview ${image.title||'documentation image'}`} onClick={()=>setViewerId(image._id)}><DocumentationImage image={image} sessionToken={sessionToken} /></button><div className="documentation-admin-card-body"><div className="documentation-card-title"><h4>{image.title||'Untitled documentation'}</h4><span className={`billing-status ${image.status==='published'?'is-eligible':''}`}>{image.status==='published'?'Published':'Draft'}</span></div><p>Event: {image.eventDate||'Not specified'}</p><p>Uploaded: {new Date(image.createdAt).toLocaleDateString('en-PH',{timeZone:'Asia/Manila'})} · Order {image.displayOrder}</p><div className="documentation-card-actions"><button type="button" className="billing-secondary" disabled={busy} onClick={()=>{setError('');setEditing(image)}}>Edit details</button><button type="button" className="billing-secondary" disabled={busy} onClick={()=>attempt(async()=>{await edit({sessionToken,id:image._id,...Object.fromEntries(Object.keys(initialDetails).map(key=>[key,image[key]])),status:image.status==='published'?'draft':'published'});setMessage(image.status==='published'?'Image unpublished.':'Image published on the homepage.')})}>{image.status==='published'?'Unpublish':'Publish'}</button><button type="button" className="billing-text-button" disabled={busy} onClick={()=>{setError('');setDeleting(image)}}>Delete</button></div></div></article>)}</div>}
      {result&&<nav className="billing-pagination" aria-label="Documentation pagination"><span>{result.total} images · Page {result.page} of {result.pages}</span><button type="button" className="billing-secondary" disabled={busy||result.page<=1} onClick={()=>setPage(result.page-1)}>Previous</button><button type="button" className="billing-secondary" disabled={busy||result.page>=result.pages} onClick={()=>setPage(result.page+1)}>Next</button></nav>}
      </section>
    </div>
    <footer className="billing-footer"><span className="billing-hint">Only published documentation appears on the public homepage.</span><button type="button" className="billing-secondary" disabled={busy||preparing} onClick={onClose}>Close</button></footer>
    {editing&&<DetailsDialog image={editing} busy={busy} error={error} onClose={()=>setEditing(null)} onSave={values=>attempt(async()=>{await edit({sessionToken,id:editing._id,...values});setEditing(null);setMessage('Documentation details saved.')})} />}
    {deleting&&<DeleteDialog image={deleting} busy={busy} error={error} onClose={()=>setDeleting(null)} onDelete={()=>attempt(async()=>{const result=await remove({sessionToken,id:deleting._id});setDeleting(null);setMessage(result.retainedFile?'Documentation removed. Its referenced storage file was retained.':'Documentation and its image file deleted.')})} />}
    {viewerIndex>=0&&<DocumentationViewer images={rows} index={viewerIndex} sessionToken={sessionToken} onIndex={index=>setViewerId(rows[index]._id)} onClose={()=>setViewerId(null)} />}
  </dialog>
}
