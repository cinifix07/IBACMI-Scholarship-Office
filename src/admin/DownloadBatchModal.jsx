import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from '../errors/convex.js'
import { api } from '../../convex/_generated/api'
import IBACMILoader from '../components/IBACMILoader.jsx'
import { downloadBatchCsv, prepareBatchCsvFile } from './batchDownload.js'
import { userErrorMessage } from '../errors/errorBus.js'
import './download-batch.css'

const paint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
const downloadIcon = <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" strokeLinecap="round" strokeLinejoin="round" /></svg>

export default function DownloadBatchModal({ sessionToken, onClose }) {
  const dialogRef = useRef(null), running = useRef(false), alive = useRef(true)
  const [year, setYear] = useState(''), [selected, setSelected] = useState([]), [search, setSearch] = useState('')
  const [state, setState] = useState('idle'), [stage, setStage] = useState(''), [notice, setNotice] = useState('')
  const options = useQuery(api.batchExport.options, sessionToken ? { sessionToken } : 'skip')
  const prepare = useMutation(api.batchExport.prepare)
  const batches = options?.find(option => option.schoolYear === year)?.batches || []
  const validSelected = selected.filter(id => batches.some(batch => batch.id === id))
  const count = batches.reduce((total, batch) => total + (validSelected.includes(batch.id) ? batch.count : 0), 0)
  const batchSignature = JSON.stringify([year, batches.map(batch => batch.id)])
  const [previousBatches, setPreviousBatches] = useState(batchSignature)
  // Forget removed batches permanently when a reactive database update changes the options.
  if (options && batchSignature !== previousBatches) {
    setPreviousBatches(batchSignature)
    if (validSelected.length !== selected.length) setSelected(validSelected)
  }
  const busy = state === 'loading'
  const clearFeedback = () => { setState('idle'); setNotice('') }
  useEffect(() => {
    const dialog = dialogRef.current, previous = document.activeElement, overflow = document.body.style.overflow
    alive.current = true
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { alive.current = false; dialog.close(); document.body.style.overflow = overflow; if (previous?.isConnected) previous.focus({ preventScroll: true }) }
  }, [])

  const download = async () => {
    if (running.current) return
    if (!year || !validSelected.length) { setNotice('Select a school year and at least one batch.'); return }
    running.current = true
    setState('loading'); setNotice(''); setStage('Validating Selection')
    try {
      await paint()
      setStage('Fetching Grantee Records')
      const result = await prepare({ sessionToken, schoolYear: year, batches: validSelected })
      if (!alive.current) return
      setStage('Generating File'); await paint()
      const file = prepareBatchCsvFile(result.filename, result.rows)
      // CSV generation and the browser handoff must both succeed before reporting readiness.
      setStage('Preparing Download'); await paint()
      if (!alive.current) return
      downloadBatchCsv(file)
      setState('success'); setStage('Completed')
      setNotice(`${result.count.toLocaleString()} records prepared. Your selected batch records have been prepared successfully.`)
    } catch (error) {
      if (alive.current) { userErrorMessage(error, 'We couldn’t prepare the file. Please try again.', 'batchExport.download'); setState('error'); setNotice("We couldn't prepare the file. Please try again.") }
    } finally { running.current = false }
  }

  return <dialog ref={dialogRef} className="download-batch" aria-labelledby="download-batch-title" aria-describedby="download-batch-description" onCancel={event => { event.preventDefault(); event.stopPropagation(); if (!running.current) onClose() }}>
    <header className="download-batch__header">
      <div><span className="download-batch__eyebrow">Official grantee records</span><h2 id="download-batch-title">Download Batch</h2><p id="download-batch-description">Select a school year and batches to download official grantee records.</p></div>
      <button className="download-batch__close" type="button" aria-label="Close Download Batch" disabled={busy} onClick={onClose}>×</button>
    </header>
    <div className="download-batch__body" aria-busy={busy}>
      <fieldset disabled={busy || options === undefined}>
        <label className="download-batch__field">Select School Year<select value={year} onChange={event => { setYear(event.target.value); setSelected([]); setSearch(''); clearFeedback() }}><option value="">Choose a school year</option>{options?.map(option => <option key={option.schoolYear} value={option.schoolYear}>{option.schoolYear}</option>)}</select></label>
        <div className="download-batch__section-title"><h3>Select Batches</h3><span>{validSelected.length} selected</span></div>
        <label className="download-batch__field">Search Batch<input type="search" placeholder="Search batch number…" value={search} onChange={event => setSearch(event.target.value)} disabled={!year} /></label>
        <div className="download-batch__selection-actions"><button type="button" disabled={!batches.length} onClick={() => { setSelected(batches.map(batch => batch.id)); clearFeedback() }}>Select All</button><button type="button" disabled={!validSelected.length} onClick={() => { setSelected([]); clearFeedback() }}>Deselect All</button><span>All batches in the selected year</span></div>
        <div className="download-batch__list" role="group" aria-label="Available batches">
          {batches.filter(batch => batch.id.toLowerCase().includes(search.trim().toLowerCase())).map(batch => <label className="download-batch__row" key={batch.id}><input type="checkbox" checked={validSelected.includes(batch.id)} onChange={event => { setSelected(event.target.checked ? [...new Set([...validSelected, batch.id])] : validSelected.filter(id => id !== batch.id)); clearFeedback() }} /><span>Batch {batch.id}</span><span>{batch.count.toLocaleString()} {batch.count === 1 ? 'grantee record' : 'grantee records'}</span></label>)}
          {!options && <IBACMILoader variant="compact" message="Loading school years and batches…" />}
          {options && !options.length && <p className="download-batch__empty">No grantee batches with a school year are available.</p>}
          {options?.length > 0 && !year && <p className="download-batch__empty">Choose a school year to see its batches.</p>}
          {year && !batches.length && <p className="download-batch__empty">No batches are available for this school year.</p>}
          {batches.length > 0 && !batches.some(batch => batch.id.toLowerCase().includes(search.trim().toLowerCase())) && <p className="download-batch__empty">No batches match your search.</p>}
        </div>
      </fieldset>
      <section className="download-batch__summary" aria-label="Export summary" aria-live="polite"><h3>Export Summary</h3><dl><div><dt>School Year</dt><dd>{year || 'Not selected'}</dd></div><div><dt>Selected Batches</dt><dd>{validSelected.length}</dd></div><div><dt>Matching Grantees</dt><dd>{count.toLocaleString()}</dd></div><div><dt>File Format</dt><dd>CSV (.csv)</dd></div></dl><p>Includes each matching record’s semester. Identical duplicate records are included once.</p></section>
      {notice && <div className={`download-batch__notice is-${state}`} role={state === 'error' ? 'alert' : 'status'}>{state === 'success' && <strong>Download Ready!</strong>}{state === 'error' && <strong>Download Failed</strong>}<p>{notice}</p></div>}
    </div>
    <footer className="download-batch__footer"><button className="download-batch__secondary" type="button" disabled={busy} onClick={onClose}>Close</button><button className="download-batch__primary" type="button" disabled={busy || !year || !validSelected.length || count === 0} onClick={download}>{downloadIcon}{state === 'error' ? 'Retry' : 'Download Batch'}</button></footer>
    {busy && <div className="download-batch__preparing" role="status">{downloadIcon}<h3>Preparing Your Download</h3><p>Please wait while we prepare your selected grantee records.</p><IBACMILoader variant="compact" message={stage} /></div>}
  </dialog>
}
