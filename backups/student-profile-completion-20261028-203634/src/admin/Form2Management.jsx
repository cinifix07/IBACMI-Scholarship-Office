import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import './billing-management.css'
import './form2-management.css'

const pesos=value=>new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP'}).format(value/100)
function MappingSettings({mapping,configured,busy,onSave}) {
  const [verified,setVerified]=useState(mapping?.applicationNumberVerified||false)
  const [mode,setMode]=useState(mapping?.batchColumnMode||'')
  const [designation,setDesignation]=useState(mapping?.designation||'')
  const [authority,setAuthority]=useState(mapping?.authority||'')
  return <details className="billing-rules" open={!mapping}><summary>Official field mappings {mapping?'· verified':'· confirmation required'}</summary><form onSubmit={e=>{e.preventDefault();onSave({applicationNumberVerified:verified,batchColumnMode:mode,designation,authority})}}>
    <p className="billing-hint">The workbook calls column D “TES Application Number” and its sample column N contains “LISTAHANAN 2”. Confirm the school’s official meanings before export.</p>
    <label className="billing-check"><input type="checkbox" checked={verified} onChange={e=>setVerified(e.target.checked)} />I verified that Convex tesAwardNumber contains the official TES Application Number required in column D.</label>
    <div className="billing-form-grid"><label className="billing-field"><span>Column N — TES Batch</span><select aria-label="Column N — TES Batch" required value={mode} onChange={e=>setMode(e.target.value)}><option value="">Confirm the official mapping</option><option value="databaseBatch">Use actual database batch numbers</option><option value="designation">Use an authorized designation</option></select></label>
    {mode==='designation'&&<label className="billing-field"><span>Authorized designation</span><input aria-label="Authorized designation" required maxLength={80} value={designation} onChange={e=>setDesignation(e.target.value)} placeholder="Enter the approved designation" /></label>}
    <label className="billing-field"><span>Mapping approval / documentary reference</span><input aria-label="Mapping approval / documentary reference" required maxLength={500} value={authority} onChange={e=>setAuthority(e.target.value)} /></label></div>
    {!configured&&<p className="billing-notice">Configure the verified semester rates and eligibility rules in Billing Management first.</p>}
    <button type="submit" className="billing-primary" disabled={busy||!configured||!verified||!mode}>Save verified mappings</button>
  </form></details>
}
function ContinuingReview({row,busy,onSave}) {
  const [verified,setVerified]=useState(row.continuingVerified)
  const [evidence,setEvidence]=useState(row.continuingEvidence)
  return <details className="form2-review"><summary>Review continuing eligibility</summary><form onSubmit={e=>{e.preventDefault();onSave(verified,evidence)}}><label className="billing-check"><input type="checkbox" checked={verified} onChange={e=>setVerified(e.target.checked)} />Verified continuing TES grantee for this period</label><label className="billing-field"><span>Evidence / review reason</span><textarea aria-label={`Continuing evidence for ${row.studentId}`} required maxLength={500} rows={3} value={evidence} onChange={e=>setEvidence(e.target.value)} /></label><button type="submit" disabled={busy} className="billing-secondary">Save continuing review</button></form></details>
}
export default function Form2Management({sessionToken,onClose,onOpenBilling}) {
  const ref=useRef(null)
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement,overflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=overflow;if(previous?.isConnected)previous.focus({preventScroll:true})}},[])
  const options=useQuery(api.billing.options,{sessionToken})
  const [year,setYear]=useState(''),[semester,setSemester]=useState('1st Semester')
  const [mode,setMode]=useState('all'),[batches,setBatches]=useState([]),[batchSearch,setBatchSearch]=useState('')
  const [sourceId,setSourceId]=useState(''),[search,setSearch]=useState(''),[page,setPage]=useState(1)
  const [refresh,setRefresh]=useState(0),[response,setResponse]=useState(null)
  const [busy,setBusy]=useState(false),[error,setError]=useState(''),[message,setMessage]=useState('')
  const [reference,setReference]=useState(''),[billingDate,setBillingDate]=useState(()=>new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Manila'}))
  const [reportId,setReportId]=useState(null)
  const workspace=useQuery(api.billing.workspace,year?{sessionToken,schoolYear:year,semester}:'skip')
  const settings=useQuery(api.form2.settings,year?{sessionToken,schoolYear:year,semester}:'skip')
  const makePreview=useMutation(api.form2.preview),saveMapping=useMutation(api.form2.saveMapping),reviewContinuing=useMutation(api.form2.reviewContinuing),generate=useMutation(api.form2.generate),authorizeDownload=useMutation(api.form2.download)
  const requestKey=JSON.stringify({year,semester,mode,batches,sourceId,refresh,mapping:settings?.mapping||null})
  useEffect(()=>{
    let active=true
    const selection=JSON.parse(requestKey)
    if(!selection.year)return
    const request=selection.mode==='specific'&&!selection.batches.length?Promise.reject(new Error('Select at least one batch.')):makePreview({sessionToken,schoolYear:selection.year,semester:selection.semester,batches:selection.mode==='all'?[]:selection.batches,...(selection.sourceId?{billingReportId:selection.sourceId}:{})})
    request.then(data=>{if(active){setResponse({key:requestKey,data});setPage(1);setReportId(null);if(data.reference)setReference(data.reference);else if(data.config)setReference(data.config.referenceFormat.replaceAll('{YEAR}',selection.year.slice(0,4)).replaceAll('{TERM}',selection.semester==='1st Semester'?'1':'2').replaceAll('{TRANCHE}',String(data.nextTranche)))}}).catch(err=>{if(active)setResponse({key:requestKey,error:err.message})})
    return()=>{active=false}
  },[requestKey,makePreview,sessionToken])
  const preview=response?.key===requestKey?response.data:null
  const loading=Boolean(year&&response?.key!==requestKey)
  const filters={schoolYear:year,semester,batches:mode==='all'?[]:batches,...(sourceId?{billingReportId:sourceId}:{})}
  const reset=()=>{setPage(1);setReportId(null);setError('');setMessage('');setSearch('')}
  const attempt=async action=>{setBusy(true);setError('');try{await action()}catch(err){setError(err instanceof Error?err.message:'Form 2 operation failed. Please try again.')}finally{setBusy(false)}}
  const download=(format,savedId)=>attempt(async()=>{
    const exporter=await import('./form2Export');const template=await exporter.loadForm2Template()
    let id=savedId||reportId
    if(!id){if(!preview)throw new Error('Generate and review Form 2 first.');id=await generate({sessionToken,...filters,expectedVersion:preview.version,reference,billingDate});setReportId(id)}
    const report=await authorizeDownload({sessionToken,reportId:id,format})
    await exporter.downloadForm2(report,format,template);setMessage(`Downloaded Form 2 for ${report.reference}. Re-download from history without creating another bill.`)
  })
  const visible=(preview?.rows||[]).map((row,index)=>({...row,number:index+1})).filter(row=>`${row.studentId} ${row.tesAwardNumber} ${row.profile.lastName} ${row.profile.firstName} ${row.profile.program} ${row.batch}`.toLowerCase().includes(search.toLowerCase()))
  const pages=Math.max(1,Math.ceil(visible.length/10))
  const numberedPages=Array.from({length:pages},(_,i)=>i+1).filter(n=>n===1||n===pages||Math.abs(n-page)<=2)
  const exportDisabled=busy||loading||!preview||(!reportId&&preview.globalIssues.length>0)||(!sourceId&&(!reference.trim()||!billingDate))
  return <dialog ref={ref} className="billing-dialog billing-main-dialog form2-main-dialog" aria-labelledby="form2-title" onCancel={e=>{e.preventDefault();if(!busy)onClose()}} onKeyDown={e=>{if(e.key!=='Tab')return;const fields=[...e.currentTarget.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary')].filter(el=>el.getClientRects().length);if(e.shiftKey&&document.activeElement===fields[0]){e.preventDefault();fields.at(-1)?.focus()}else if(!e.shiftKey&&document.activeElement===fields.at(-1)){e.preventDefault();fields[0]?.focus()}}}>
    <header className="billing-header"><div><p className="billing-kicker">Scholarship operations · Listahanan 2</p><h2 id="form2-title">Form 2 List — TES Continuing Grantees</h2><p>Generate official TES Continuing Form 2 records from the Convex database.</p></div><button type="button" className="billing-close" aria-label="Close Form 2 List" disabled={busy} onClick={onClose}>×</button></header>
    <div className="billing-body">
      {error&&<p role="alert" className="billing-error">{error}</p>}{message&&<p role="status" className="billing-notice">{message}</p>}
      <section className="billing-card"><div className="billing-filters form2-filters">
        <label className="billing-field"><span>Select School Year</span><select aria-label="Select School Year" value={year} disabled={busy} onChange={e=>{setYear(e.target.value);setBatches([]);setSourceId('');reset()}}><option value="">Select school year</option>{options?.years.map(y=><option key={y}>{y}</option>)}</select></label>
        <label className="billing-field"><span>Select Semester</span><select aria-label="Select Semester" value={semester} disabled={busy} onChange={e=>{setSemester(e.target.value);setBatches([]);setSourceId('');reset()}}><option>1st Semester</option><option>2nd Semester</option></select></label>
        <label className="billing-field"><span>Report source</span><select aria-label="Report source" value={sourceId} disabled={busy} onChange={e=>{setSourceId(e.target.value);setMode('all');setBatches([]);reset()}}><option value="">Current Convex grantee records</option>{workspace?.reports.map(report=><option key={report._id} value={report._id}>Saved bill: {report.reference}</option>)}</select></label>
        <label className="billing-field"><span>Select Batches</span><select aria-label="Select Batches" value={mode} disabled={busy||Boolean(sourceId)} onChange={e=>{setMode(e.target.value);reset()}}><option value="all">All Batches</option><option value="specific">Specific Batches</option></select></label>
      </div>
      {mode==='specific'&&<div className="billing-batches"><div className="billing-toolbar"><input aria-label="Search Form 2 batches" placeholder="Search batch…" value={batchSearch} onChange={e=>setBatchSearch(e.target.value)} /><button type="button" className="billing-text-button" disabled={busy} onClick={()=>{setBatches(workspace?.batches.map(b=>b.id)||[]);reset()}}>Select All</button><button type="button" className="billing-text-button" disabled={busy} onClick={()=>{setBatches([]);reset()}}>Deselect All</button><span>{batches.length} selected</span></div><div className="billing-checks">{workspace?.batches.filter(b=>b.id.toLowerCase().includes(batchSearch.toLowerCase())).map(batch=><label className="billing-check" key={batch.id}><input type="checkbox" disabled={busy} checked={batches.includes(batch.id)} onChange={e=>{setBatches(e.target.checked?[...batches,batch.id]:batches.filter(b=>b!==batch.id));reset()}} />Batch {batch.id} <small>{batch.count} grantees</small></label>)}</div></div>}
      <div className="billing-toolbar"><p className="billing-hint">Filter changes refresh the preview automatically. Saved bills are exported in full to reconcile with their original statement.</p><button className="billing-primary" type="button" disabled={!year||busy||loading} onClick={()=>{reset();setRefresh(n=>n+1)}}>Generate Form 2</button></div>
      {!sourceId&&<div className="billing-form-grid form2-reference"><label className="billing-field"><span>Authorized billing reference</span><input aria-label="Authorized billing reference" maxLength={120} value={reference} disabled={busy||Boolean(reportId)} onChange={e=>setReference(e.target.value)} placeholder="From verified Billing Management rules" /></label><label className="billing-field"><span>Billing date</span><input aria-label="Form 2 billing date" type="date" value={billingDate} disabled={busy||Boolean(reportId)} onChange={e=>setBillingDate(e.target.value)} /></label></div>}
      </section>
      {settings&&<MappingSettings key={JSON.stringify(settings.mapping)} mapping={settings.mapping} configured={settings.configured} busy={busy} onSave={mapping=>attempt(async()=>{await saveMapping({sessionToken,schoolYear:year,semester,...mapping});reset();setRefresh(n=>n+1);setMessage('Official Form 2 field mappings saved.')})} />}
      {loading&&<p role="status">Loading the selected Convex records…</p>}
      {response?.key===requestKey&&response.error&&<p className="billing-error" role="alert">{response.error}</p>}
      {preview&&<>
        <div className="billing-summary form2-summary">{[['Matching grantees',preview.rows.length],['Complete / verified',preview.eligibleCount],['Missing data / review',preview.rows.filter(r=>!r.eligible&&!r.excluded).length],['TES benefits',pesos(preview.totals.tes1+preview.totals.tes2)],['TES-3A',pesos(preview.totals.tes3a)],['Total with authorized ASC',pesos(preview.totals.total)]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        {preview.globalIssues.length>0&&<div className="billing-error"><strong>Resolve before export</strong><ul>{preview.globalIssues.map(issue=><li key={issue}>{issue}</li>)}</ul><button className="billing-secondary" type="button" disabled={busy} onClick={onOpenBilling}>Review details and rates in Billing Management</button></div>}
        <section className="billing-card"><div className="billing-toolbar"><h3>Official grantee preview</h3><input aria-label="Search Form 2 grantees" value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}} placeholder="Student ID, application no., name, course or batch…" /></div>
        <p className="billing-hint">{visible.length} matching students · {preview.duplicateCount} duplicate source rows counted once. Export includes every validated matching record, not just this page. Amounts shown are the proposed or saved billing amounts; export stays blocked until all reviews pass.</p>
        <div className="billing-scroll"><table className="form2-preview-table"><thead><tr>{['No.','Student ID','TES Award No.','Full Name','Course','Year Level','Batch','Semester','School Year','Status','Validation'].map(title=><th key={title}>{title}</th>)}</tr></thead><tbody>{visible.slice((page-1)*10,page*10).map(row=><tr key={row.studentId}><td>{row.number}</td><td>{row.studentId}</td><td>{row.tesAwardNumber||'Missing'}</td><td>{[row.profile.lastName,row.profile.firstName,row.profile.middleInitial].filter(Boolean).join(', ')}</td><td>{row.profile.program||'Missing'}</td><td>{row.profile.yearLevel||'Missing'}</td><td>{row.batch}</td><td>{row.semester}</td><td>{row.schoolYear}</td><td>{row.sourceStatus}</td><td><span className={`billing-status ${row.eligible?'is-eligible':''}`}>{row.eligible?'Complete':row.excluded?'Excluded':'Missing Data'}</span>{row.issues.length>0&&<details><summary>{row.issues.length} validation issue(s)</summary><ul>{row.issues.map(issue=><li key={issue}>{issue}</li>)}</ul></details>}<ContinuingReview key={`${row.studentId}-${row.continuingVerified}-${row.continuingEvidence}`} row={row} busy={busy||Boolean(reportId)} onSave={(verified,evidence)=>attempt(async()=>{await reviewContinuing({sessionToken,schoolYear:year,semester,studentId:row.studentId,verified,evidence});setRefresh(n=>n+1);setMessage('Continuing-grantee review saved.')})} /></td></tr>)}</tbody></table></div>
        <nav className="billing-pagination form2-pagination" aria-label="Form 2 pagination"><span>{visible.length} matching · Page {page} of {pages}</span><button className="billing-secondary" type="button" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Previous</button>{numberedPages.map(n=><button className={`billing-secondary ${n===page?'form2-page-active':''}`} aria-current={n===page?'page':undefined} aria-label={`Page ${n}`} type="button" key={n} onClick={()=>setPage(n)}>{n}</button>)}<button className="billing-secondary" type="button" disabled={page>=pages} onClick={()=>setPage(p=>p+1)}>Next</button></nav>
        </section>
      </>}
      {settings?.history.length>0&&<section className="billing-card"><h3>Form 2 report history</h3>{settings.history.map(report=><div className="billing-history-row" key={report._id}><div><strong>{report.reference}</strong><span>{new Date(report.generatedAt).toLocaleString('en-PH',{timeZone:'Asia/Manila'})} · {report.schoolYear} · {report.semester} · {report.batches.length?report.batches.join(', '):'All matching batches'}</span><span>{report.granteeCount} grantees · {report.generatedBy} · {report.status}</span></div><div className="form2-history-buttons"><button type="button" className="billing-secondary" disabled={busy} onClick={()=>download('xlsx',report._id)}>Excel</button><button type="button" className="billing-secondary" disabled={busy} onClick={()=>download('pdf',report._id)}>PDF</button></div></div>)}</section>}
      {!year&&<p className="billing-notice">Select an academic period to retrieve actual Convex grantees. No sample students are loaded.</p>}
    </div>
    <footer className="billing-footer"><p className="billing-hint">{sourceId||reportId?'Supporting export reuses the saved bill; no duplicate charge.':'A new export finalizes the existing billing workflow and reserves its eligible students.'}</p><button className="billing-secondary" type="button" disabled={busy} onClick={onClose}>Close</button><button className="billing-secondary" type="button" disabled={exportDisabled} onClick={()=>download('pdf')}>{busy?'Preparing…':'Download PDF'}</button><button className="billing-primary" type="button" disabled={exportDisabled} onClick={()=>download('xlsx')}>Download Excel</button></footer>
  </dialog>
}
