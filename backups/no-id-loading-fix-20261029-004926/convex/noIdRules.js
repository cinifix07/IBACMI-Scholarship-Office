export const text = value => String(value ?? '').trim()
export const identity = record => `${text(record.studentId).toUpperCase()}|${text(record.schoolYear)}`
export const isOfficial = record => Boolean(text(record.studentId) && text(record.schoolYear) && text(record.batchId) && !/applicant/i.test(text(record.status)))
export const safePart = value => text(value).replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^[.-]+|[.-]+$/g, '') || 'unknown'
export const matchesNoIdSearch = (row, search) => [row.studentId, row.tesAwardNumber, row.lastName, row.firstName, row.middleName, `${row.firstName} ${row.middleName} ${row.lastName}`, `${row.lastName} ${row.firstName} ${row.middleName}`].join(' ').toLowerCase().replace(/\s+/g, ' ').includes(text(search).toLowerCase().replace(/\s+/g, ' '))
export function snapshotSignature(value) {
  if (Array.isArray(value)) return `[${value.map(snapshotSignature).join(',')}]`
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${snapshotSignature(value[key])}`).join(',')}}`
  return JSON.stringify(value)
}
export function driveId(value) {
  try { const url = new URL(text(value)); return url.protocol === 'https:' && url.hostname === 'drive.google.com' ? url.pathname.match(/\/file\/d\/([\w-]+)/)?.[1] || url.searchParams.get('id') || null : null } catch { return null }
}
export function noIdFilename(year, batches, all) {
  return `IBACMI_NO_ID_LIST${all ? '' : batches.length === 1 ? `_BATCH_${safePart(batches[0]).slice(0, 65)}` : '_SELECTED_BATCHES'}_SY${safePart(year).slice(0, 40)}.xlsx`
}
export function buildNoIdReport(records, schoolYear, checks) {
  const groups = new Map(), attachments = new Map()
  for (const record of records.filter(isOfficial)) {
    const owner = identity(record)
    for (const file of [record.frontIdStorageId && `storage:${record.frontIdStorageId}`, driveId(record.frontIdUrl) && `drive:${driveId(record.frontIdUrl)}`].filter(Boolean)) {
      if (!attachments.has(file)) attachments.set(file, new Set())
      attachments.get(file).add(owner)
    }
    if (text(record.schoolYear) !== schoolYear) continue
    const key = `${owner}|${text(record.batchId)}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(record)
  }
  const batches = new Map(), rows = [], byOwner = new Map()
  for (const record of records.filter(record => isOfficial(record) && text(record.schoolYear) === schoolYear)) {
    const owner = identity(record)
    if (!byOwner.has(owner)) byOwner.set(owner, [])
    byOwner.get(owner).push(record)
  }
  for (const duplicates of groups.values()) {
    const record = [...duplicates].sort((a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0))[0]
    const owner = identity(record), candidates = byOwner.get(owner)
    let valid = false, uncertain = false
    for (const candidate of candidates) {
      const files = [candidate.frontIdStorageId && `storage:${candidate.frontIdStorageId}`, driveId(candidate.frontIdUrl) && `drive:${driveId(candidate.frontIdUrl)}`].filter(Boolean)
      for (const file of files) {
        const check = checks[file]
        if (!check || check.state === 'unknown') { uncertain = true; continue }
        if (check.state !== 'valid') continue
        if (check.year && check.year !== safePart(schoolYear)) continue
        if (check.studentId && text(check.studentId).toUpperCase() !== safePart(record.studentId).toUpperCase()) continue
        if (file.startsWith('drive:') && check.name && /-Batch-/i.test(check.name) && !check.name.toLowerCase().startsWith(`${safePart(record.studentId)}-`.toLowerCase())) continue
        if (attachments.get(file).size > 1) {
          const owners = [...attachments.get(file)]
          const sameYear = new Set(owners.map(value => value.split('|').at(-1))).size === 1
          const identifiedStudent = check.studentId || (check.name && /-Batch-/i.test(check.name) && check.name.toLowerCase().startsWith(`${safePart(record.studentId)}-`.toLowerCase()))
          if (!identifiedStudent || (!check.year && !sameYear)) { uncertain = true; continue }
        }
        valid = true
      }
    }
    if (!valid && uncertain) throw new Error('School ID verification is temporarily unavailable. Try again.')
    const batch = text(record.batchId)
    if (!batches.has(batch)) batches.set(batch, { id: batch, total: 0, withId: 0, withoutId: 0 })
    const totals = batches.get(batch); totals.total++; totals[valid ? 'withId' : 'withoutId']++
    if (!valid) rows.push({ studentId: text(record.studentId), tesAwardNumber: text(record.tesAwardNumber), lastName: text(record.lastName), firstName: text(record.firstName), middleName: text(record.middleInitial), batchId: batch, schoolYear, status: 'Not Submitted' })
  }
  rows.sort((a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) || a.studentId.localeCompare(b.studentId) || a.batchId.localeCompare(b.batchId, 'en', { numeric: true }))
  return { schoolYear, batches: [...batches.values()].sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true })), rows }
}
