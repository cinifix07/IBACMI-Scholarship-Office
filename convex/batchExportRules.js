export const batchCsvHeaders = ['Batch No.', 'Student ID', 'TES Award Number', 'Last Name', 'First Name', 'MI.', 'School Year', 'Semester', 'Status', 'Email Account', 'Phone No.', 'Current Address', 'Account Status']
const sourceFields = ['batchId', 'studentId', 'tesAwardNumber', 'lastName', 'firstName', 'middleInitial', 'schoolYear', 'semester', 'status']
export const cleanBatchValue = value => String(value ?? '').trim()

// Remove identical export records, retaining distinct semesters and batch assignments.
export function uniqueBatchRecords(records) {
  const seen = new Set()
  return records.filter(record => {
    const key = JSON.stringify(sourceFields.map(field => String(record[field] ?? '')))
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function batchCsvRows(records, accounts) {
  const byStudent = new Map(accounts.filter(account => account.role === 'student').map(account => [cleanBatchValue(account.schoolId).toLowerCase(), account]))
  return [batchCsvHeaders, ...uniqueBatchRecords(records).map(record => {
    const account = byStudent.get(cleanBatchValue(record.studentId).toLowerCase())
    return [...sourceFields.map(field => record[field] ?? ''), account?.email ?? '', account?.phoneNumber ?? '', account?.currentAddress ?? '', account?.status ?? 'No student account']
  })]
}

const safePart = value => cleanBatchValue(value).replace(/[^a-zA-Z0-9.-]+/g, '-').replace(/^[.-]+|[.-]+$/g, '').slice(0, 50) || 'batch'
export function batchFilename(schoolYear, batches, all) {
  const sorted = [...new Set(batches)].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  let label = sorted.length === 1 ? `Batch_${safePart(sorted[0])}` : `Batches_${sorted.map(safePart).join('-')}`
  if (label.length > 110) {
    let hash = 2166136261
    for (const character of JSON.stringify(sorted)) hash = Math.imul(hash ^ character.charCodeAt(0), 16777619) >>> 0
    label = `Batches_${sorted.length}_${hash.toString(16)}`
  }
  return `IBACMI_${all ? 'All_Batches' : label}_SY${safePart(schoolYear)}.csv`
}
