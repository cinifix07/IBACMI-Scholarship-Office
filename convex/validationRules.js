export const VALIDATION_STATUSES = ['MATCHED', 'MISMATCHED', 'NOT FOUND', 'DUPLICATE', 'MISSING FROM UPLOAD', 'INVALID DATA', 'AMBIGUOUS MATCH']
export const cleanValidationText = value => String(value ?? '').trim().replace(/\s+/g, ' ')
const normal = value => cleanValidationText(value).toUpperCase()
const ext = value => normal(value).replace(/\.$/, '')
export const validStudentId = value => /^[\p{L}\p{N}][\p{L}\p{N}._/-]{0,79}$/u.test(value)
const keyFor = (studentId, batchId) => JSON.stringify([normal(studentId), cleanValidationText(batchId)])
const officialFields = record => ({ studentId: cleanValidationText(record.studentId), batchId: cleanValidationText(record.batchId), lastName: cleanValidationText(record.lastName), firstName: cleanValidationText(record.firstName), extensionName: record.extensionName === undefined ? null : cleanValidationText(record.extensionName), middleName: record.middleName === undefined && record.middleInitial === undefined ? null : cleanValidationText(record.middleName ?? record.middleInitial) })

export function compareValidation(uploaded, officialRecords, schoolYear, batches) {
  const selected = new Set(batches), official = officialRecords.filter(record => cleanValidationText(record.schoolYear) === schoolYear && selected.has(cleanValidationText(record.batchId)))
  const byKey = new Map(), frequency = new Map(), present = new Set()
  for (const record of official) { const key = keyFor(record.studentId, record.batchId); if (!byKey.has(key)) byKey.set(key, []); byKey.get(key).push(record) }
  for (const row of uploaded) {
    if (validStudentId(row.studentId) && selected.has(row.batchId)) { const key = keyFor(row.studentId, row.batchId); frequency.set(key, (frequency.get(key) || 0) + 1); present.add(key) }
  }
  const results = uploaded.map(row => {
    const issues = [...(row.issues || [])]
    if (!validStudentId(row.studentId)) issues.push('Student ID is missing or invalid.')
    if (!row.batchId || !selected.has(row.batchId)) issues.push('Batch is missing or outside the selected scope.')
    if (!row.lastName || !row.firstName) issues.push('Last Name and First Name are required.')
    const key = keyFor(row.studentId, row.batchId), candidates = byKey.get(key) || []
    let status, remarks, officialValue = null, differences = []
    if (issues.length) { status = 'INVALID DATA'; remarks = [...new Set(issues)].join(' ') }
    else if (frequency.get(key) > 1) { status = 'DUPLICATE'; remarks = 'Student ID appears more than once in this uploaded batch.' }
    else if (!candidates.length) { status = 'NOT FOUND'; remarks = 'No official Student ID and batch match in the selected school year.' }
    else if (candidates.length > 1) { status = 'AMBIGUOUS MATCH'; remarks = `${candidates.length} official records match this Student ID and batch. Review is required.` }
    else {
      officialValue = officialFields(candidates[0])
      const labels = { lastName: 'Last Name', firstName: 'First Name', extensionName: 'Extension Name', middleName: 'Middle Name' }
      differences = Object.keys(labels).filter(field => officialValue[field] !== null && (field === 'extensionName' ? ext(row[field]) !== ext(officialValue[field]) : normal(row[field]) !== normal(officialValue[field])))
      const unavailable = Object.keys(labels).filter(field => officialValue[field] === null || (['lastName', 'firstName'].includes(field) && !officialValue[field]))
      if (unavailable.length) { status = 'INVALID DATA'; remarks = `Official ${unavailable.map(field => labels[field]).join(', ')} not recorded; comparison requires review.` }
      else { status = differences.length ? 'MISMATCHED' : 'MATCHED'; remarks = differences.length ? `${differences.map(field => labels[field]).join(', ')} differs.` : 'Student ID, batch, and all available name components match.' }
    }
    return { sourceRow: row.sourceRow, schoolYear, studentId: row.studentId, batchId: row.batchId, uploaded: { studentId: row.studentId, batchId: row.batchId, lastName: row.lastName, firstName: row.firstName, extensionName: row.extensionName, middleName: row.middleName }, official: officialValue, status, remarks, differences, ...(status === 'AMBIGUOUS MATCH' ? { candidates: candidates.map(officialFields) } : {}) }
  })
  for (const record of official) {
    if (!present.has(keyFor(record.studentId, record.batchId))) results.push({ sourceRow: null, schoolYear, studentId: cleanValidationText(record.studentId), batchId: cleanValidationText(record.batchId), uploaded: null, official: officialFields(record), status: 'MISSING FROM UPLOAD', remarks: 'Official grantee is absent from the uploaded file.', differences: [] })
  }
  const counts = Object.fromEntries(VALIDATION_STATUSES.map(status => [status, results.filter(row => row.status === status).length]))
  return { schoolYear, batches, summary: { uploaded: uploaded.length, official: official.length, ...counts }, rows: results }
}

export function validationFilename(year, batches, all) {
  const safe = value => String(value).replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^[.-]+|[.-]+$/g, '').slice(0, 70)
  return `IBACMI_VALIDATION_${all ? 'ALL_BATCHES' : batches.length === 1 ? `BATCH_${safe(batches[0])}` : 'SELECTED_BATCHES'}_SY${safe(year)}.xlsx`
}
