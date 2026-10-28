import { useEffect, useRef, useState } from 'react'
import { useAction, useMutation, useQuery } from '../errors/convex.js'
import { api } from '../../convex/_generated/api'
import IBACMILoader from '../components/IBACMILoader.jsx'
import logo from '../assets/IBACMI.png'
import { createNoIdWorkbook, saveNoIdWorkbook } from './noIdExport.js'
import { matchesNoIdSearch } from '../../convex/noIdRules.js'
import { userErrorMessage } from '../errors/errorBus.js'
import './download-batch.css'
import './no-id-list.css'

const paint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
export default function NoIdListModal({ sessionToken, onClose }) {
  const ref = useRef(null), running = useRef(false), alive = useRef(true)
  const [year, setYear] = useState(''), [selected, setSelected] = useState([]), [batchSearch, setBatchSearch] = useState(''), [search, setSearch] = useState(''), [page, setPage] = useState(1)
  const [result, setResult] = useState(null), [retry, setRetry] = useState(0), [operation, setOperation] = useState(null)
  const options = useQuery(api.noIdList.options, sessionToken ? { sessionToken } : 'skip')
  const optionsReady = options !== undefined
  const start = useMutation(api.noIdList.start), prepare = useAction(api.noIdList.prepare)
  const key = JSON.stringify([sessionToken, year, options?.revision, retry])
  const jobId = result?.key === key ? result.jobId : null
  const progress = useQuery(api.noIdList.progress, jobId ? { sessionToken, jobId } : 'skip')
  const report = progress?.report || null
  const error = (result?.key === key ? result.error : '') || (progress?.state === 'failed' ? 'Some School ID files could not be verified. Retry verification to finish the list.' : progress?.state === 'stale' ? 'School ID records changed. Refresh verification to gather the updated list.' : '')
  const checking = Boolean(year && !error && (!progress || progress.state === 'running'))
  const batches = report?.batches || [], validSelected = selected.filter(id => batches.some(batch => batch.id === id))
  const signature = JSON.stringify([year, batches.map(batch => batch.id)])
  const [previous, setPrevious] = useState(signature)
  if (report && signature !== previous) { setPrevious(signature); if (validSelected.length !== selected.length) setSelected(validSelected) }
  const totals = batches.filter(batch => validSelected.includes(batch.id)).reduce((sum, batch) => ({ total: sum.total + batch.total, withId: sum.withId + batch.withId, withoutId: sum.withoutId + batch.withoutId }), { total: 0, withId: 0, withoutId: 0 })
  const filtered = (report?.rows || []).filter(row => validSelected.includes(row.batchId) && matchesNoIdSearch(row, search))
  const pageCount = Math.max(1, Math.ceil(filtered.length / 10)), currentPage = Math.min(page, pageCount), visible = filtered.slice((currentPage - 1) * 10, currentPage * 10)
  const busy = operation?.state === 'loading'
  useEffect(() => {
    const dialog = ref.current, previousFocus = document.activeElement, overflow = document.body.style.overflow
    alive.current = true; dialog.showModal(); document.body.style.overflow = 'hidden'
    return () => { alive.current = false; dialog.close(); document.body.style.overflow = overflow; if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true }) }
  }, [])
  useEffect(() => {
    if (!year || !optionsReady) return
    let active = true
    start({ sessionToken, schoolYear: year }).then(data => { if (active) setResult({ key, jobId: data.jobId }) }).catch(caught => { if (active) setResult({ key, error: userErrorMessage(caught, 'Unable to verify School ID submissions.', 'noIdList.start') }) })
    return () => { active = false }
  }, [key, year, sessionToken, optionsReady, start])
  const reset = () => { setOperation(null); setPage(1) }
  const download = async () => {
    if (running.current || !year || !validSelected.length || !report || progress?.state !== 'complete') return
    running.current = true; setOperation({ state: 'loading', message: 'Checking School ID submissions...' })
    try {
      await paint()
      const exported = await prepare({ sessionToken, schoolYear: year, batches: validSelected, search: search.trim(), jobId })
      if (!alive.current) return
      setOperation({ state: 'loading', message: 'Preparing missing student records...' }); await paint()
      setOperation({ state: 'loading', message: 'Generating Excel report...' }); await paint()
      const bytes = await createNoIdWorkbook(exported, percent => { if (alive.current) setOperation({ state: 'loading', message: 'Generating Excel report...', progress: percent < 100 ? percent : undefined }) })
      if (!alive.current) return
      saveNoIdWorkbook(exported.filename, bytes)
      setOperation({ state: 'success', message: 'Your file is ready!', detail: `${exported.rows.length} missing-ID records prepared and handed to your browser.` })
    } catch (caught) {
      if (alive.current) { userErrorMessage(caught, 'Unable to prepare the Excel report.', 'noIdList.export'); setOperation({ state: 'error', message: 'Unable to prepare the Excel report. Please try again.' }) }
    } finally { running.current = false }
  }
  return <dialog ref={ref} className="download-batch no-id-list" aria-label="NO ID LIST — Missing School ID Submissions" onCancel={event => { event.preventDefault(); event.stopPropagation(); if (!running.current) onClose() }}>
    <header className="download-batch__header"><img src={logo} width="42" height="42" alt="IBACMI" /><div><span className="download-batch__eyebrow">School ID Monitoring</span><h2>NO ID LIST</h2><p>View and download the list of grantees who have not submitted their School ID.</p></div><button className="download-batch__close" aria-label="Close NO ID LIST" disabled={busy} onClick={onClose}>×</button></header>
    <div className="download-batch__body" aria-busy={checking || busy}>
      <fieldset disabled={busy}>
        <label className="download-batch__field">School Year<select aria-label="School Year" value={year} disabled={!options} onChange={event => { setYear(event.target.value); setSelected([]); setBatchSearch(''); setSearch(''); reset() }}><option value="">Select school year</option>{options?.years.map(value => <option key={value}>{value}</option>)}</select></label>
        {!options && <IBACMILoader variant="compact" message="Loading school years..." />}
        {options && !options.years.length && <p>No official grantee records with a school year are available.</p>}
        {checking && <IBACMILoader variant="compact" message="Checking School ID submissions..." detail={progress ? `${progress.checked} of ${progress.total} uploaded files checked. Confirmed missing records appear below while verification continues.` : 'Gathering grantee records and saved School ID references...'} progress={progress?.total ? progress.checked / progress.total * 100 : undefined} />}
        {error && <div className="download-batch__notice is-error" role="alert"><p>{error}</p><button type="button" onClick={() => setRetry(value => value + 1)}>Retry verification</button></div>}
        {report && <>
          <div className="download-batch__selection-actions"><button type="button" onClick={() => { setRetry(value => value + 1); reset() }}>Refresh submissions</button><span>Verified {new Date(report.checkedAt).toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' })} (Philippines)</span></div>
          <div className="download-batch__section-title"><h3>Select Batches</h3><span>{validSelected.length} selected</span></div>
          <label className="download-batch__field">Search Batch<input type="search" value={batchSearch} onChange={event => setBatchSearch(event.target.value)} placeholder="Search batch number…" /></label>
          <div className="download-batch__selection-actions"><button type="button" onClick={() => { setSelected(batches.map(batch => batch.id)); reset() }}>Select All</button><button type="button" onClick={() => { setSelected([]); reset() }}>Deselect All</button><span>Select All includes batches hidden by search.</span></div>
          <div className="download-batch__list" role="group" aria-label="Batches and School ID counts">{batches.filter(batch => batch.id.toLowerCase().includes(batchSearch.trim().toLowerCase())).map(batch => <label className="no-id-list__batch" key={batch.id}><input type="checkbox" checked={validSelected.includes(batch.id)} onChange={event => { setSelected(event.target.checked ? [...new Set([...validSelected, batch.id])] : validSelected.filter(id => id !== batch.id)); reset() }} /><strong>Batch {batch.id}</strong><span>{batch.total} total · {batch.withId} with ID · <b>{batch.withoutId} without ID</b>{batch.pending > 0 ? ` · ${batch.pending} pending verification` : ''}</span></label>)}</div>
          <section className="no-id-list__stats" aria-label="School ID summary" aria-live="polite">{[['TOTAL GRANTEES', totals.total], ['WITH SCHOOL ID', totals.withId], ['WITHOUT SCHOOL ID', totals.withoutId], ['SELECTED BATCHES', validSelected.length]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value.toLocaleString()}</strong></div>)}</section>
          <label className="download-batch__field">Search Missing Students<input type="search" placeholder="Name, Student ID, or TES Award Number…" value={search} onChange={event => { setSearch(event.target.value); reset() }} /></label>
          <p className="no-id-list__count">{filtered.length} matching missing-ID records · {totals.withoutId} without School ID in selected batches</p>
          <div className="no-id-list__table" tabIndex="0" role="region" aria-label="Missing School ID records"><table><thead><tr>{['No.', 'Student ID', 'TES Award Number', 'Last Name', 'First Name', 'Middle Name / Initial', 'Batch Number', 'School Year', 'School ID Status'].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead><tbody>{visible.map((row, index) => <tr key={`${row.studentId}|${row.batchId}`}><td>{(currentPage - 1) * 10 + index + 1}</td>{[row.studentId, row.tesAwardNumber, row.lastName, row.firstName, row.middleName, row.batchId, row.schoolYear, row.status].map((value, i) => <td key={i}>{value || '—'}</td>)}</tr>)}{!visible.length && <tr><td colSpan="9">{validSelected.length ? 'No missing-ID records match your selection.' : 'Select batches to view missing School ID submissions.'}</td></tr>}</tbody></table></div>
          <nav className="no-id-list__pagination" aria-label="Missing ID pages"><button type="button" disabled={currentPage === 1} onClick={() => setPage(value => value - 1)}>Previous</button><span>Page {currentPage} of {pageCount}</span><button type="button" disabled={currentPage >= pageCount} onClick={() => setPage(value => value + 1)}>Next</button></nav>
          <p>Excel includes all matching records across every page. Your student search and selected batches apply to the export.</p>
        </>}
      </fieldset>
      {operation && !busy && <div className={`download-batch__notice is-${operation.state}`} role={operation.state === 'error' ? 'alert' : 'status'}><strong>{operation.message}</strong><p>{operation.detail}</p></div>}
    </div>
    <footer className="download-batch__footer"><button type="button" className="download-batch__secondary" disabled={busy} onClick={onClose}>Close</button><button type="button" className="download-batch__primary" disabled={busy || progress?.state !== 'complete' || !report || !validSelected.length || !filtered.length} onClick={download}>{operation?.state === 'error' ? 'Retry Excel Download' : 'Download NO ID List'}</button></footer>
    {busy && <div className="download-batch__preparing"><IBACMILoader variant="compact" message={operation.message} progress={operation.progress} /></div>}
  </dialog>
}
