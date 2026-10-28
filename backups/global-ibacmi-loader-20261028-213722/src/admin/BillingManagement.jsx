import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import './billing-management.css'

const pesos = cents => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(cents / 100)
const localDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())

function useBillingDialog(ref) {
  useEffect(() => {
    const dialog = ref.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; if (previous?.isConnected) previous.focus({ preventScroll: true }) }
  }, [ref])
}
function trapFocus(event) {
  if (event.key !== 'Tab') return
  const fields = [...event.currentTarget.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), summary')].filter(el => el.getClientRects().length && el.closest('dialog') === event.currentTarget)
  if (event.shiftKey && document.activeElement === fields[0]) { event.preventDefault(); fields.at(-1)?.focus() }
  else if (!event.shiftKey && document.activeElement === fields.at(-1)) { event.preventDefault(); fields[0]?.focus() }
}
function Field({ label, children }) { return <label className="billing-field"><span>{label}</span>{Children.map(children, child => isValidElement(child) && ['input','select','textarea'].includes(child.type) ? cloneElement(child, { 'aria-label': label }) : child)}</label> }
const emptyRate = () => ({ category: '', tes1Cap: 0, tes2: 0, tes3a: 0 })

function BillingRules({ config, statuses, onSave, busy }) {
  const [form, setForm] = useState(() => config ? {
    referenceFormat: config.referenceFormat, authority: config.authority, eligibleStatuses: config.eligibleStatuses, rates: config.rates, ascBasisPoints: config.ascBasisPoints, ascAuthorized: config.ascAuthorized, priorBillingReviewed: config.priorBillingReviewed, priorTranches: config.priorTranches, priorBilledStudentIds: config.priorBilledStudentIds.join('\n'),
  } : { referenceFormat: '', authority: '', eligibleStatuses: [], rates: [emptyRate()], ascBasisPoints: 0, ascAuthorized: false, priorBillingReviewed: false, priorTranches: 0, priorBilledStudentIds: '' })
  const set = (key,value) => setForm(f => ({ ...f, [key]: value }))
  return <details className="billing-rules" open={!config}>
    <summary>Verified billing rules & prior history {config ? '· configured' : '· setup required'}</summary>
    <form onSubmit={event => { event.preventDefault(); onSave({ ...form, priorBilledStudentIds: form.priorBilledStudentIds.split(/[\n,;]+/).map(s=>s.trim()).filter(Boolean) }) }}>
      <p className="billing-hint">Enter the school’s approved rules for this semester and school year. Sample workbook amounts are not rates. Existing grantee records are preserved.</p>
      <div className="billing-form-grid">
        <Field label="Approved policy / authorization reference"><input required maxLength={500} value={form.authority} onChange={e=>set('authority',e.target.value)} placeholder="Document or approval authorizing these rules" /></Field>
        <Field label="Authorized reference format"><input required maxLength={120} value={form.referenceFormat} onChange={e=>set('referenceFormat',e.target.value)} placeholder="Enter the school-approved format" /><small>Optional tokens: {'{YEAR}'} (AY start), {'{TERM}'} (1/2), {'{TRANCHE}'} (1/2). No official format is assumed.</small></Field>
        <Field label="Administrative support cost (%)"><input type="number" min="0" max="100" step="0.01" value={form.ascBasisPoints / 100} onChange={e=>set('ascBasisPoints',Math.round(Number(e.target.value)*100))} /></Field>
        <label className="billing-check"><input type="checkbox" checked={form.ascAuthorized} onChange={e=>set('ascAuthorized',e.target.checked)} />Administrative support is authorized for these benefits.</label>
      </div>
      <fieldset><legend>Eligible source statuses (explicit review is also required per student)</legend><div className="billing-checks">{statuses.map(status=><label className="billing-check" key={status}><input type="checkbox" checked={form.eligibleStatuses.includes(status)} onChange={e=>set('eligibleStatuses',e.target.checked?[...form.eligibleStatuses,status]:form.eligibleStatuses.filter(s=>s!==status))} />{status}</label>)}</div></fieldset>
      <div className="billing-scroll"><table className="billing-rate-table"><thead><tr><th>TES category</th><th>TES-1 cap (PHP)</th><th>TES-2 stipend (PHP)</th><th>TES-3A (PHP)</th><th /></tr></thead><tbody>{form.rates.map((rate,index)=><tr key={index}>{['category','tes1Cap','tes2','tes3a'].map(key=><td key={key}><input aria-label={`${key} for category ${index+1}`} required type={key==='category'?'text':'number'} min={key==='category'?undefined:0} step={key==='category'?undefined:'0.01'} value={rate[key]} onChange={e=>set('rates',form.rates.map((r,i)=>i===index?{...r,[key]:key==='category'?e.target.value:Number(e.target.value)}:r))} /></td>)}<td><button type="button" className="billing-text-button" disabled={form.rates.length===1} onClick={()=>set('rates',form.rates.filter((_,i)=>i!==index))}>Remove</button></td></tr>)}</tbody></table></div>
      <button type="button" className="billing-secondary" onClick={()=>set('rates',[...form.rates,emptyRate()])}>+ Add category</button>
      <p className="billing-hint">TES-1 is the lower of verified actual fees and the approved category cap. TES-2 uses the approved stipend. TES-3A applies only after disability eligibility is verified. ASC applies to the combined benefit subtotal when authorized.</p>
      <Field label="Previously billed Student IDs for this period (one per line)"><textarea rows={3} value={form.priorBilledStudentIds} onChange={e=>set('priorBilledStudentIds',e.target.value)} placeholder="Include billings issued before this system was introduced" /></Field>
      <Field label="Billing tranches issued before this system (0–2)"><input type="number" required min="0" max="2" step="1" value={form.priorTranches} onChange={e=>set('priorTranches',Number(e.target.value))} /><small>Previously saved billed IDs and tranche counts cannot be reduced. New reports count toward the two-tranche limit.</small></Field>
      <label className="billing-check"><input type="checkbox" checked={form.priorBillingReviewed} onChange={e=>set('priorBillingReviewed',e.target.checked)} />I checked the complete prior billing history for this period and entered previously billed students, if any.</label>
      <button className="billing-primary" disabled={busy} type="submit">{busy?'Saving…':'Save verified period rules'}</button>
    </form>
  </details>
}

function ReviewStudent({ row, categories, onSave, onClose, busy, error }) {
  const ref=useRef(null)
  useBillingDialog(ref)
  const [profile,setProfile]=useState(row.profile)
  const set=(key,value)=>setProfile(p=>({...p,[key]:value}))
  const fields=[['lastName','Last name'],['firstName','Given name'],['middleInitial','Middle initial (optional)'],['campus','Campus'],['college','College'],['program','Degree program'],['yearLevel','Year level'],['birthDate','Birthdate'],['units','Academic units'],['zip','ZIP code'],['email','Email'],['phone','Phone'],['actualFees','Verified tuition & other fees (PHP)']]
  return <dialog ref={ref} className="billing-dialog billing-review-dialog" aria-labelledby="billing-review-title" onKeyDown={trapFocus} onCancel={e=>{e.preventDefault();e.stopPropagation();if(!busy)onClose()}}>
    <header className="billing-header"><div><p className="billing-kicker">Student billing review</p><h2 id="billing-review-title">{row.studentId}</h2></div><button type="button" className="billing-close" aria-label="Close student billing review" disabled={busy} onClick={onClose}>×</button></header>
    <form className="billing-review-form" onSubmit={e=>{e.preventDefault();onSave(profile)}}>
      <div className="billing-body">{error&&<p className="billing-error" role="alert">{error}</p>}<p className="billing-hint">Verify against enrollment and financial records. Available applicant details are suggested only for a unique Student ID and school-year match. Changes are saved only to the billing profile.</p><div className="billing-form-grid">
        <Field label="Authoritative grantee source"><select value={profile.sourceRecordId} onChange={e=>set('sourceRecordId',e.target.value)}>{row.sourceChoices.map(r=><option key={r.id} value={r.id}>{r.label}</option>)}</select></Field>
        <Field label="TES benefit category"><select value={profile.category} onChange={e=>set('category',e.target.value)}><option value="">Select category</option>{categories.map(c=><option key={c.category}>{c.category}</option>)}</select></Field>
        {fields.map(([key,label])=><Field key={key} label={label}><input type={['units','actualFees'].includes(key)?'number':key==='birthDate'?'date':key==='email'?'email':'text'} step={['units','actualFees'].includes(key)?'0.01':undefined} min={['units','actualFees'].includes(key)?0:undefined} maxLength={500} value={profile[key]} onChange={e=>set(key,['units','actualFees'].includes(key)?Number(e.target.value):e.target.value)} /></Field>)}
        <Field label="Sex at birth"><select value={profile.sex} onChange={e=>set('sex',e.target.value)}><option value="">Select</option><option>M</option><option>F</option></select></Field>
      </div>
      <label className="billing-check"><input type="checkbox" checked={profile.disabilityVerified} onChange={e=>set('disabilityVerified',e.target.checked)} />TES-3A disability entitlement verified against supporting records.</label>
      <label className="billing-check"><input type="checkbox" checked={profile.eligible} onChange={e=>set('eligible',e.target.checked)} />Enrollment, TES category and billing entitlement verified for this period.</label>
      <Field label="Verification evidence or exclusion reason"><textarea required maxLength={500} rows={3} value={profile.reviewNote} onChange={e=>set('reviewNote',e.target.value)} /></Field>
      </div>
      <footer className="billing-footer"><button className="billing-secondary" type="button" disabled={busy} onClick={onClose}>Cancel</button><button className="billing-primary" disabled={busy} type="submit">{busy?'Saving…':'Save billing review'}</button></footer>
    </form>
  </dialog>
}

function FormatChooser({ onClose, onDownload, busy, finalized, error }) {
  const ref=useRef(null)
  useBillingDialog(ref)
  const [format,setFormat]=useState('xlsx')
  return <dialog ref={ref} className="billing-dialog billing-format-dialog" aria-labelledby="billing-format-title" onKeyDown={trapFocus} onCancel={e=>{e.preventDefault();e.stopPropagation();if(!busy)onClose()}}>
    <header className="billing-header"><div><p className="billing-kicker">Export billing forms</p><h2 id="billing-format-title">Choose Download Format</h2></div><button className="billing-close" type="button" aria-label="Close download formats" disabled={busy} onClick={onClose}>×</button></header>
    <div className="billing-body">{error&&<p className="billing-error" role="alert">{error}</p>}<label className="billing-format-option"><input type="radio" name="billing-format" checked={format==='xlsx'} onChange={()=>setFormat('xlsx')} /><div><strong>Excel Report</strong><p>Both original worksheets, editable details, formatting and formulas.</p></div></label><label className="billing-format-option"><input type="radio" name="billing-format" checked={format==='pdf'} onChange={()=>setFormat('pdf')} /><div><strong>PDF Report</strong><p>Printable statement and complete billing details with page breaks.</p></div></label><p className="billing-notice">{finalized?'This downloads the saved report again. No additional billing entries are created.':'Downloading finalizes this report and reserves its eligible students in the billing ledger. Review all amounts before proceeding.'}</p></div>
    <footer className="billing-footer"><button className="billing-secondary" type="button" disabled={busy} onClick={onClose}>Cancel</button><button className="billing-primary" disabled={busy} type="button" onClick={()=>onDownload(format)}>{busy?'Preparing…':`Download ${format==='xlsx'?'Excel':'PDF'}`}</button></footer>
  </dialog>
}

export default function BillingManagement({ sessionToken, onClose }) {
  const dialogRef=useRef(null)
  useBillingDialog(dialogRef)
  const options=useQuery(api.billing.options,{sessionToken})
  const [year,setYear]=useState('')
  const [semester,setSemester]=useState('1st Semester')
  const [mode,setMode]=useState('all')
  const [batches,setBatches]=useState([])
  const [batchSearch,setBatchSearch]=useState('')
  const [billingDate,setBillingDate]=useState(localDate)
  const [reference,setReference]=useState('')
  const [preview,setPreview]=useState(null)
  const [search,setSearch]=useState('')
  const [page,setPage]=useState(1)
  const [review,setReview]=useState(null)
  const [formatOpen,setFormatOpen]=useState(false)
  const [reportId,setReportId]=useState(null)
  const [historyReportId,setHistoryReportId]=useState(null)
  const [busy,setBusy]=useState(false)
  const [message,setMessage]=useState('')
  const [error,setError]=useState('')
  const workspace=useQuery(api.billing.workspace,year?{sessionToken,schoolYear:year,semester}:'skip')
  const saveConfig=useMutation(api.billing.saveConfig)
  const saveProfile=useMutation(api.billing.saveProfile)
  const makePreview=useMutation(api.billing.preview)
  const finalize=useMutation(api.billing.finalize)
  const authorizeDownload=useMutation(api.billing.download)
  const filters={schoolYear:year,semester,batches:mode==='all'?[]:batches}
  const invalidate=()=>{setPreview(null);setReportId(null);setError('');setMessage('')}
  const attempt=async action=>{setBusy(true);setError('');try{await action()}catch(err){setError(err instanceof Error?err.message:'Billing operation failed. Please try again.')}finally{setBusy(false)}}
  const generate=()=>attempt(async()=>{
    if(!year)throw new Error('Select a school year.')
    if(mode==='specific'&&!batches.length)throw new Error('Select at least one batch.')
    const result=await makePreview({sessionToken,...filters})
    setPreview(result);setPage(1);setSearch('');setReportId(null)
    if(result.config)setReference(result.config.referenceFormat.replaceAll('{YEAR}',year.slice(0,4)).replaceAll('{TERM}',semester==='1st Semester'?'1':'2').replaceAll('{TRANCHE}',String(result.nextTranche)))
  })
  const download=format=>attempt(async()=>{
    // Load exporter and the unmodified source before reserving any billing entries.
    const exporter=await import('./billingExport')
    const template=await exporter.loadBillingTemplate()
    let id=historyReportId||reportId
    if(!id){if(!preview)throw new Error('Generate a billing preview first.');id=await finalize({sessionToken,...filters,reference,billingDate,expectedVersion:preview.version});setReportId(id)}
    const report=await authorizeDownload({sessionToken,reportId:id,format})
    await exporter.downloadBilling(report,format,template)
    setFormatOpen(false);setHistoryReportId(null);setMessage(`Downloaded ${report.reference}. Saved in billing history for future downloads.`)
  })
  const visible=(preview?.rows||[]).filter(r=>`${r.studentId} ${r.tesAwardNumber} ${r.profile.lastName} ${r.profile.firstName} ${r.batch}`.toLowerCase().includes(search.toLowerCase()))
  const pages=Math.max(1,Math.ceil(visible.length/10))
  return <dialog ref={dialogRef} className="billing-dialog billing-main-dialog" aria-labelledby="billing-management-title" onKeyDown={trapFocus} onCancel={e=>{if(e.target!==e.currentTarget)return;e.preventDefault();if(!busy)onClose()}}>
    <header className="billing-header"><div><p className="billing-kicker">Scholarship operations</p><h2 id="billing-management-title">TES Billing Management</h2><p>Generate consolidated TES billing statements and reports.</p></div><button className="billing-close" type="button" aria-label="Close Billing Management" disabled={busy} onClick={onClose}>×</button></header>
    <div className="billing-body">
      {error&&<p className="billing-error" role="alert">{error}</p>}{message&&<p className="billing-notice" role="status">{message}</p>}
      <section className="billing-card" aria-label="Billing filters"><div className="billing-filters">
        <Field label="School year"><select value={year} disabled={busy} onChange={e=>{setYear(e.target.value);setBatches([]);invalidate()}}><option value="">Select school year</option>{options?.years.map(y=><option key={y}>{y}</option>)}</select></Field>
        <Field label="Semester"><select value={semester} disabled={busy} onChange={e=>{setSemester(e.target.value);setBatches([]);invalidate()}}><option>1st Semester</option><option>2nd Semester</option></select></Field>
        <Field label="Select Batch"><select value={mode} disabled={busy} onChange={e=>{setMode(e.target.value);invalidate()}}><option value="all">All Batches</option><option value="specific">Specific Batches</option></select></Field>
        <Field label="Billing date"><input type="date" required value={billingDate} disabled={busy||Boolean(reportId)} onChange={e=>setBillingDate(e.target.value)} /></Field>
        <Field label="Billing reference number"><input maxLength={120} value={reference} disabled={busy||Boolean(reportId)} onChange={e=>setReference(e.target.value)} placeholder="From approved period rules" /></Field>
      </div>
      {mode==='specific'&&<div className="billing-batches"><div className="billing-toolbar"><input aria-label="Search batches" placeholder="Search batch…" value={batchSearch} onChange={e=>setBatchSearch(e.target.value)} /><button className="billing-text-button" type="button" disabled={busy} onClick={()=>{setBatches(workspace?.batches.map(b=>b.id)||[]);invalidate()}}>Select All</button><button className="billing-text-button" type="button" disabled={busy} onClick={()=>{setBatches([]);invalidate()}}>Deselect All</button><span>{batches.length} batches selected</span></div><div className="billing-checks">{workspace?.batches.filter(b=>b.id.toLowerCase().includes(batchSearch.toLowerCase())).map(b=><label className="billing-check" key={b.id}><input type="checkbox" disabled={busy} checked={batches.includes(b.id)} onChange={e=>{setBatches(e.target.checked?[...batches,b.id]:batches.filter(id=>id!==b.id));invalidate()}} />Batch {b.id} <small>{b.count} grantees</small></label>)}</div></div>}
      <div className="billing-toolbar"><p className="billing-hint">Counts use unique Student IDs within the selected period. Missing data stays visible for review.</p><button type="button" className="billing-primary" disabled={busy||!workspace} onClick={generate}>{busy?'Please wait…':'Generate Billing Preview'}</button></div></section>
      {workspace&&<BillingRules key={`${year}-${semester}-${workspace.config?.updatedAt||0}`} config={workspace.config} statuses={options?.statuses||[]} busy={busy} onSave={values=>attempt(async()=>{await saveConfig({sessionToken,schoolYear:year,semester,...values});invalidate();setMessage('Verified period rules saved. Generate a new preview.')})} />}
      {preview&&<>
        <div className="billing-summary">{[['Total Selected Records',preview.selectedCount],['Eligible Grantees',preview.eligibleCount],['Records Needing Review',preview.reviewCount],['TES Benefit Subtotal',pesos(preview.totals.benefits)],['Administrative Support Cost',pesos(preview.totals.asc)],['Total Billing Amount',pesos(preview.totals.total)]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <p className="billing-hint">{preview.duplicateCount} duplicate source rows counted once. {preview.excludedCount} students explicitly excluded or already billed. Preview totals include eligible records only.</p>
        {preview.globalIssues.length>0&&<div className="billing-error"><strong>Resolve before export</strong><ul>{preview.globalIssues.map(issue=><li key={issue}>{issue}</li>)}</ul></div>}
        <section className="billing-card"><div className="billing-toolbar"><h3>Billing details</h3><input aria-label="Search billing records" placeholder="Student ID, name, award or batch…" value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}} /></div><div className="billing-scroll"><table className="billing-preview-table"><thead><tr>{['Student ID','TES Award Number','Full Name','Batch','Semester','School Year','TES Category','Billing Amount','Billing Eligibility','Review'].map(label=><th key={label}>{label}</th>)}</tr></thead><tbody>{visible.slice((page-1)*10,page*10).map(row=><tr key={row.studentId}><td>{row.studentId}</td><td>{row.tesAwardNumber||'Missing'}</td><td>{[row.profile.lastName,row.profile.firstName,row.profile.middleInitial].filter(Boolean).join(', ')||'Missing'}</td><td>{row.batch}</td><td>{row.semester}</td><td>{row.schoolYear}</td><td>{row.profile.category||'Unassigned'}</td><td>{row.eligible?pesos(row.total):'Pending review'}</td><td><span className={`billing-status ${row.eligible?'is-eligible':''}`}>{row.eligible?'Eligible':row.excluded?'Excluded':'Needs review'}</span>{row.issues.length>0&&<details><summary>{row.issues.length} issue(s)</summary><ul>{row.issues.map(issue=><li key={issue}>{issue}</li>)}</ul></details>}</td><td><button type="button" className="billing-secondary" disabled={busy||Boolean(reportId)} onClick={()=>setReview(row)}>Review</button></td></tr>)}</tbody></table></div><div className="billing-pagination"><span>{visible.length} students · Page {page} of {pages}</span><button type="button" className="billing-secondary" disabled={page===1} onClick={()=>setPage(p=>p-1)}>Previous</button><button type="button" className="billing-secondary" disabled={page>=pages} onClick={()=>setPage(p=>p+1)}>Next</button></div></section>
      </>}
      {workspace?.reports.length>0&&<section className="billing-card"><h3>Finalized billing history</h3><p className="billing-hint">These immutable reports can be downloaded again without billing students twice.</p>{workspace.reports.map(report=><div className="billing-history-row" key={report._id}><div><strong>{report.reference}</strong><span>{report.billingDate} · {report.granteeCount} grantees · {pesos(report.totals.total)}</span></div><button type="button" className="billing-secondary" disabled={busy} onClick={()=>{setHistoryReportId(report._id);setFormatOpen(true)}}>Download saved report</button></div>)}</section>}
      {!options&&<p role="status">Loading authorized billing options…</p>}
    </div>
    <footer className="billing-footer"><span className="billing-hint">Original grantee records remain unchanged.</span><button className="billing-secondary" type="button" disabled={busy} onClick={onClose}>Close</button><button className="billing-primary" type="button" disabled={busy||!preview||(!reportId&&preview.globalIssues.length>0)||!billingDate||!reference.trim()} onClick={()=>setFormatOpen(true)}>Download Billing Report</button></footer>
    {review&&<ReviewStudent error={error} key={review.studentId} row={review} categories={workspace?.config?.rates||[]} busy={busy} onClose={()=>setReview(null)} onSave={values=>attempt(async()=>{await saveProfile({sessionToken,schoolYear:year,semester,studentId:review.studentId,...values});const next=await makePreview({sessionToken,...filters});setPreview(next);setReportId(null);setReview(null);setMessage('Billing review saved.')})} />}
    {formatOpen&&<FormatChooser error={error} busy={busy} finalized={Boolean(reportId||historyReportId)} onClose={()=>{setFormatOpen(false);setHistoryReportId(null)}} onDownload={download} />}
  </dialog>
}
