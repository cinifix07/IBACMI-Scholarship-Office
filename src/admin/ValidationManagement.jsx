import { useEffect, useRef, useState } from 'react'
import { useAction, useQuery } from '../errors/convex.js'
import { api } from '../../convex/_generated/api'
import { VALIDATION_STATUSES } from '../../convex/validationRules.js'
import IBACMILoader from '../components/IBACMILoader.jsx'
import { userErrorMessage } from '../errors/errorBus.js'
import { createValidationWorkbook, saveValidationWorkbook } from './validationExport.js'
import './validation-management.css'

const columns = [['lastName', 'Last Name'], ['firstName', 'First Name'], ['extensionName', 'Ext Name'], ['middleName', 'Middle Name']]
const display = value => value === null ? 'Not recorded' : value || '—'
function Details({ row, onClose }) {
  const ref = useRef(null)
  useEffect(() => { const dialog = ref.current, previous = document.activeElement; dialog.showModal(); return () => { dialog.close(); if (previous?.isConnected) previous.focus() } }, [])
  return <dialog ref={ref} className="validation-details" aria-labelledby="validation-details-title" onCancel={event => { event.preventDefault(); event.stopPropagation(); onClose() }}><header><h2 id="validation-details-title">Student Validation Details</h2><button type="button" onClick={onClose} aria-label="Close comparison details">×</button></header><div className="validation-details__body"><p><strong>{row.status}</strong> · {row.schoolYear}</p><p>{row.remarks}</p><div className="validation-details__columns">{[['uploaded', 'UPLOADED EXCEL DATA'], ['official', 'OFFICIAL CONVEX GRANTEE DATA']].map(([side, label]) => <section key={side}><h3>{label}</h3><dl>{[['studentId', 'Student ID'], ['batchId', 'Batch'], ...columns].map(([field, title]) => <div key={field} className={row.differences.includes(field) ? 'is-different' : ''}><dt>{title}</dt><dd>{row[side] ? display(row[side][field]) : '—'}</dd></div>)}</dl></section>)}</div>{row.candidates && <section><h3>Official candidates — no record selected automatically</h3>{row.candidates.map((candidate, index) => <p key={index}>{candidate.studentId} · {candidate.batchId} · {candidate.lastName}, {candidate.firstName} {candidate.middleName}</p>)}</section>}</div><footer><button type="button" onClick={onClose}>Close</button></footer></dialog>
}

export default function ValidationManagement({ sessionToken }) {
  const options = useQuery(api.validation.options, sessionToken ? { sessionToken } : 'skip')
  const validate = useAction(api.validationActions.run), loadResults = useAction(api.validationActions.results)
  const [year, setYear] = useState(''), [selected, setSelected] = useState([]), [batchSearch, setBatchSearch] = useState(''), [file, setFile] = useState(null), [busy, setBusy] = useState(''), [message, setMessage] = useState(''), [error, setError] = useState(''), [progress, setProgress] = useState(undefined)
  const [runId, setRunId] = useState(''), [response, setResponse] = useState(null), [lastRun, setLastRun] = useState(null), [search, setSearch] = useState(''), [debounced, setDebounced] = useState(''), [status, setStatus] = useState(''), [batch, setBatch] = useState(''), [sort, setSort] = useState('batch'), [page, setPage] = useState(1), [details, setDetails] = useState(null), [historySearch, setHistorySearch] = useState('')
  const history = useQuery(api.validation.history, sessionToken ? { sessionToken, search: historySearch.slice(0, 200) } : 'skip')
  const worker = useRef(null), generation = useRef(0), running = useRef(false), alive = useRef(true), fileInput = useRef(null)
  const batches = options?.find(option => option.schoolYear === year)?.batches || [], validSelected = selected.filter(id => batches.some(value => value.id === id))
  const run = history?.find(value => value._id === runId) || (lastRun?._id === runId ? lastRun : null)
  const requestKey = JSON.stringify([sessionToken, runId, debounced, status, batch, sort, page])
  const report = response?.key === requestKey ? response.report : null
  const resultsError = response?.key === requestKey ? response.error : ''
  useEffect(() => { alive.current = true; return () => { alive.current = false; worker.current?.terminate() } }, [])
  useEffect(() => { const timer = setTimeout(() => setDebounced(search), 250); return () => clearTimeout(timer) }, [search])
  useEffect(() => {
    if (!runId) return
    let active = true
    loadResults({ sessionToken, runId, search: debounced, status, batch, sort, page }).then(report => { if (active) setResponse({ key: requestKey, report }) }).catch(caught => { if (active) setResponse({ key: requestKey, error: userErrorMessage(caught, 'Unable to load validation results.', 'validation.results') }) })
    return () => { active = false }
  }, [sessionToken, runId, debounced, status, batch, sort, page, requestKey, loadResults])
  const chooseFile = async event => {
    const chosen = event.target.files?.[0]
    if (!chosen || running.current) return
    worker.current?.terminate(); const id = ++generation.current
    setFile(null); setError(''); setMessage('')
    if (!/\.(xlsx|xls|csv)$/i.test(chosen.name) || !chosen.size || chosen.size > 5 * 1024 * 1024) { setError('Choose a nonempty .xlsx, .xls, or .csv file no larger than 5 MB.'); return }
    setBusy('Reading uploaded Excel file...')
    try {
      const bytes = await chosen.arrayBuffer()
      if (!alive.current || id !== generation.current) return
      const parser = new Worker(new URL('./validationWorker.js', import.meta.url), { type: 'module' }); worker.current = parser
      const parsed = await new Promise((resolve, reject) => {
        const timer = setTimeout(() => { parser.terminate(); reject(new Error('Reading took too long. Simplify the workbook or save it as CSV.')) }, 15000)
        parser.onmessage = event => { clearTimeout(timer); parser.terminate(); event.data.ok ? resolve(event.data.parsed) : reject(new Error(event.data.message)) }
        parser.onerror = () => { clearTimeout(timer); parser.terminate(); reject(new Error('The spreadsheet could not be read.')) }
        parser.postMessage({ bytes, filename: chosen.name })
      })
      if (alive.current && id === generation.current) setFile({ filename: chosen.name, bytes, parsed })
    } catch (caught) { if (alive.current && id === generation.current) setError(caught.message) }
    finally { if (alive.current && id === generation.current) { setBusy(''); if (fileInput.current) fileInput.current.value = '' } }
  }
  const resetResultsFilter = () => { setSearch(''); setDebounced(''); setStatus(''); setBatch(''); setPage(1) }
  const start = async () => {
    if (running.current || !file || !year || !validSelected.length) return
    running.current = true; setError(''); setMessage(''); setBusy('Checking official grantee records...')
    try {
      const result = await validate({ sessionToken, schoolYear: year, batches: validSelected, filename: file.filename, bytes: file.bytes })
      if (!alive.current) return
      if (!result.ok) { setError(result.message); return }
      setBusy('Preparing validation results...'); resetResultsFilter(); setLastRun({ _id: result.runId, schoolYear: year, batches: validSelected, summary: result.summary, retained: true }); setRunId(result.runId)
      setMessage('Validation completed. Official grantee records were preserved.')
    } catch (caught) { if (alive.current) setError(userErrorMessage(caught, 'Unable to validate the spreadsheet.', 'validation.run')) }
    finally { running.current = false; if (alive.current) setBusy('') }
  }
  const download = async id => {
    if (running.current) return
    running.current = true; setError(''); setMessage(''); setProgress(undefined); setBusy('Generating Excel report...')
    try {
      const report = await loadResults({ sessionToken, runId: id, download: true })
      const bytes = await createValidationWorkbook(report, percent => { if (alive.current) setProgress(percent < 100 ? percent : undefined) })
      if (!alive.current) return
      saveValidationWorkbook(report.exportFilename, bytes); setMessage('Your validation report is ready!')
    } catch (caught) { if (alive.current) setError(userErrorMessage(caught, 'Unable to prepare the Excel report.', 'validation.download')) }
    finally { running.current = false; if (alive.current) { setBusy(''); setProgress(undefined) } }
  }
  const summary = report?.summary || run?.summary
  const cards = summary ? [['Uploaded Records', summary.uploaded], ['Official Grantee Records', summary.official], ['Matched', summary.MATCHED], ['Mismatched', summary.MISMATCHED], ['Not Found', summary['NOT FOUND']], ['Duplicate', summary.DUPLICATE], ['Missing from Upload', summary['MISSING FROM UPLOAD']], ['Invalid / Ambiguous', summary['INVALID DATA'] + summary['AMBIGUOUS MATCH']]] : []
  return <div className="validation-page admin-container"><header className="validation-heading"><span>IBACMI Scholarship Office</span><h1>Validation Management</h1><p>Upload and verify student records against the official grantee database.</p></header>
    {busy && <IBACMILoader variant="compact" message={busy} detail={busy === 'Checking official grantee records...' ? 'Comparing student information...' : undefined} progress={progress} />}{error && <p className="validation-notice is-error" role="alert">{error}</p>}{message && <p className="validation-notice" role="status">{message}</p>}
    <div className="validation-setup"><section className="validation-card"><h2>Excel Upload</h2><label className="validation-upload">Choose Excel or CSV file<input ref={fileInput} type="file" accept=".xlsx,.xls,.csv" disabled={Boolean(busy)} onChange={chooseFile} /><span>{file?.filename || 'XLSX, XLS, or CSV · up to 5 MB and 10,000 rows'}</span></label><p>Required columns: BATCH NO., STUDENT ID, LAST NAME, FIRST NAME, EXT NAME, MIDDLE NAME.</p><p>Use text cells for Student IDs. Formulas and ambiguous column mappings require correction.</p>{file && <p><strong>{file.parsed.rows.length.toLocaleString()} records</strong> · {file.parsed.sheetName}</p>}{file?.parsed.warnings.map(warning => <p className="validation-warning" key={warning}>{warning}</p>)}</section>
    <section className="validation-card"><h2>Official Grantee Scope</h2><label>Select School Year<select value={year} aria-label="Select School Year" disabled={!options || Boolean(busy)} onChange={event => { setYear(event.target.value); setSelected([]); setBatchSearch('') }}><option value="">Choose school year</option>{options?.map(option => <option key={option.schoolYear}>{option.schoolYear}</option>)}</select></label><h3>Select Batch Numbers <span>{validSelected.length} selected</span></h3><label>Search Batch<input type="search" disabled={Boolean(busy)} value={batchSearch} onChange={event => setBatchSearch(event.target.value)} /></label><div className="validation-actions"><button type="button" disabled={!batches.length || Boolean(busy)} onClick={() => setSelected(batches.map(batch => batch.id))}>Select All</button><button type="button" disabled={Boolean(busy)} onClick={() => setSelected([])}>Deselect All</button></div><div className="validation-batches">{batches.filter(batch => batch.id.toLowerCase().includes(batchSearch.trim().toLowerCase())).map(batch => <label key={batch.id}><input type="checkbox" disabled={Boolean(busy)} checked={validSelected.includes(batch.id)} onChange={event => setSelected(event.target.checked ? [...new Set([...validSelected, batch.id])] : validSelected.filter(id => id !== batch.id))} /><span>Batch {batch.id}</span><strong>{batch.count} records</strong></label>)}{!year && <p>Choose a school year to load official batches.</p>}</div><p>Select All includes batches hidden by search.</p><p>Official name components that are not recorded require review. Full middle names are never inferred from initials.</p><button type="button" className="validation-primary" disabled={Boolean(busy) || !file || !year || !validSelected.length} onClick={start}>Start Validation</button></section></div>
    {file && <section className="validation-card"><h2>Uploaded File Preview</h2><p>First 10 rows · the server validates the original file again before comparison.</p><div className="validation-table-scroll" role="region" aria-label="Uploaded file preview" tabIndex="0"><table><thead><tr>{['Source Row', 'Batch No.', 'Student ID', 'Last Name', 'First Name', 'Ext Name', 'Middle Name', 'Input Issues'].map(label => <th key={label}>{label}</th>)}</tr></thead><tbody>{file.parsed.rows.slice(0, 10).map(row => <tr key={row.sourceRow}>{[row.sourceRow, row.batchId, row.studentId, row.lastName, row.firstName, row.extensionName, row.middleName, row.issues.join(' ')].map((value, index) => <td key={index}>{display(value)}</td>)}</tr>)}</tbody></table></div></section>}
    {summary && <section className="validation-summary" aria-label="Validation summary">{cards.map(([title, value]) => <div key={title}><span>{title}</span><strong>{Number(value || 0).toLocaleString()}</strong></div>)}</section>}
    {runId && <section className="validation-card"><div className="validation-section-heading"><div><h2>Comparison Results</h2><p>Run {runId} · {run?.schoolYear} · {run?.batches.join(', ')}</p></div><button type="button" className="validation-primary" disabled={Boolean(busy) || !run?.retained} onClick={() => download(runId)}>Download Excel Report</button></div><div className="validation-filters"><label>Search Student ID or Name<input type="search" value={search} onChange={event => { setSearch(event.target.value); setPage(1) }} /></label><label>Status<select value={status} onChange={event => { setStatus(event.target.value); setPage(1) }}><option value="">All statuses</option>{VALIDATION_STATUSES.map(value => <option key={value}>{value}</option>)}</select></label><label>Batch<select value={batch} onChange={event => { setBatch(event.target.value); setPage(1) }}><option value="">All selected batches</option>{run?.batches.map(value => <option key={value}>{value}</option>)}</select></label><label>Sort by<select value={sort} onChange={event => setSort(event.target.value)}><option value="batch">Batch</option><option value="status">Status</option></select></label></div>
      {!report && !resultsError && <IBACMILoader variant="compact" message="Preparing validation results..." />}{resultsError && <p role="alert">{resultsError}</p>}{report?.warnings.map(warning => <p className="validation-warning" key={warning}>{warning}</p>)}{report && <><div className="validation-table-scroll" role="region" aria-label="Comparison results" tabIndex="0"><table className="validation-comparison"><thead><tr><th>No.</th><th>Batch Number</th><th>Student ID</th>{columns.flatMap(([, label]) => [<th key={`u${label}`}>Uploaded {label}</th>, <th key={`o${label}`}>Official {label}</th>])}<th>Validation Status</th><th>Remarks</th></tr></thead><tbody>{report.rows.map((row, index) => <tr key={`${report.page}-${index}`}><td>{(report.page - 1) * 10 + index + 1}</td><td>{row.batchId}</td><td>{row.studentId}</td>{columns.flatMap(([field]) => ['uploaded', 'official'].map(side => <td key={`${field}-${side}`} className={row.differences.includes(field) ? 'is-different' : ''}>{row[side] ? display(row[side][field]) : '—'}</td>))}<td><button type="button" className={`validation-status status-${row.status.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setDetails(row)} title="View detailed comparison">{row.status}</button></td><td>{row.remarks}</td></tr>)}{!report.rows.length && <tr><td colSpan="13">No comparison results match these filters.</td></tr>}</tbody></table></div><div className="validation-pagination"><button type="button" disabled={report.page <= 1} onClick={() => setPage(report.page - 1)}>Previous</button><span>{report.total} results · Page {report.page} of {report.pages}</span><button type="button" disabled={report.page >= report.pages} onClick={() => setPage(report.page + 1)}>Next</button></div><p>Excel exports the complete validation run, including all pages and result categories.</p></>}
    </section>}
    <section className="validation-card"><h2>Validation History</h2><p>Detailed results are retained for 30 days; summary metadata is retained for 12 months.</p><label>Search History<input type="search" value={historySearch} onChange={event => setHistorySearch(event.target.value)} /></label>{history === undefined && <IBACMILoader variant="compact" message="Loading validation history..." />}<div className="validation-history">{history?.filter(item => [item._id, item.filename, item.schoolYear, item.batches.join(' '), item.uploadedBy].join(' ').toLowerCase().includes(historySearch.toLowerCase())).map(item => <article key={item._id}><div><strong>{item.filename}</strong><span>{item.schoolYear} · {item.batches.join(', ')} · {item.uploadedBy}</span><span>{new Date(item.createdAt).toLocaleString('en-PH', { timeZone: 'Asia/Manila' })} · {item.status}</span><span>{item.summary.uploaded} uploaded · {item.summary.MATCHED} matched · {item.summary.MISMATCHED} mismatched · {item.summary['NOT FOUND']} not found · {item.summary.DUPLICATE} duplicate · {item.summary['MISSING FROM UPLOAD']} missing</span><small>Run {item._id}{!item.retained ? ' · Detailed results expired' : ''}</small></div><div className="validation-actions"><button type="button" disabled={!item.retained || Boolean(busy)} onClick={() => { resetResultsFilter(); setRunId(item._id) }}>View results</button><button type="button" disabled={!item.retained || Boolean(busy)} onClick={() => download(item._id)}>Download report</button></div></article>)}{history?.length === 0 && <p>No validation runs yet.</p>}</div></section>
    {details && <Details row={details} onClose={() => setDetails(null)} />}
  </div>
}
