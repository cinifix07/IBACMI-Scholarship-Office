import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import JSZip from 'jszip'
import { noIdFixture } from './noIdFixtures.mjs'
import { buildNoIdReport, noIdFilename, snapshotSignature } from '../convex/noIdRules.js'
import { createNoIdWorkbook } from '../src/admin/noIdExport.js'

test('NO ID endpoints reject invalid, expired, student-role and inactive-admin sessions', async () => {
  for (const kind of ['missing', 'expired', 'student', 'inactive']) {
    const data = noIdFixture()
    if (kind === 'expired') data.tables.supportSessions[0].expiresAt = 0
    if (kind === 'student') data.tables.supportSessions[0].role = 'student'
    if (kind === 'inactive') data.tables.admins[0].status = 'inactive'
    const args = { ...data.args, sessionToken: kind === 'missing' ? '' : data.args.sessionToken }
    await assert.rejects(() => data.handlers.options.handler(data.ctx, { sessionToken: args.sessionToken }))
    await assert.rejects(() => data.handlers.inspect.handler(data.ctx, args))
    await assert.rejects(() => data.handlers.prepare.handler(data.ctx, { ...args, batches: ['1'] }))
    assert.equal(data.tables.activityLogs.length, 0)
  }
})

test('snapshot validation tolerates transport object key order but rejects changes during verification', async () => {
  assert.equal(snapshotSignature({ records: [{ a: 1, b: 2 }], checks: {} }), snapshotSignature({ checks: {}, records: [{ b: 2, a: 1 }] }))
  const data = noIdFixture(1)
  let calls = 0
  const runQuery = data.ctx.runQuery
  data.ctx.runQuery = async (ref, args) => {
    if (++calls === 2) data.tables.allinfo[0].studentId = 'CHANGED'
    return structuredClone(await runQuery(ref, args))
  }
  await assert.rejects(() => data.handlers.inspect.handler(data.ctx, data.args))
})

test('checks missing, deleted, empty, valid legacy and Drive uploads, with duplicate and student/year isolation', async () => {
  const data = noIdFixture(8), rows = data.tables.allinfo
  rows[0].frontIdStorageId = 'valid-legacy'; data.storage.set('valid-legacy', { size: 100, contentType: 'application/pdf' })
  rows[1].frontIdStorageId = 'deleted-legacy'
  rows[2].frontIdUrl = 'https://drive.google.com/file/d/valid-drive/view'; data.drive.set('valid-drive', { state: 'valid', name: `${rows[2].studentId}-Synthetic-Batch-1-ID.pdf`, year: rows[2].schoolYear, studentId: rows[2].studentId })
  rows[3].frontIdUrl = 'https://drive.google.com/file/d/deleted-drive/view'
  rows[4].frontIdUrl = 'https://drive.google.com/file/d/wrong-owner/view'; data.drive.set('wrong-owner', { state: 'valid', studentId: 'OTHER-STUDENT', year: rows[4].schoolYear })
  rows[5].frontIdUrl = 'https://drive.google.com/file/d/wrong-year/view'; data.drive.set('wrong-year', { state: 'valid', studentId: rows[5].studentId, year: '2024-2025' })
  rows[6].frontIdStorageId = 'empty'; data.storage.set('empty', { size: 0 })
  rows[7].frontIdUrl = ' '
  rows.push({ ...rows[0], _id: 'duplicate-without-reference', frontIdStorageId: undefined, semester: '2nd Semester' })
  rows.push({ ...rows[0], _id: 'prior-year', studentId: 'PRIOR', schoolYear: '2024-2025', frontIdStorageId: undefined })
  rows.push({ ...rows[7], _id: 'unrelated-applicant', studentId: 'APPLICANT', status: 'Applicant' })
  const before = structuredClone(rows)
  const report = await data.handlers.inspect.handler(data.ctx, data.args)
  assert.equal(report.batches.reduce((sum, batch) => sum + batch.total, 0), 8)
  assert.equal(report.rows.length, 6)
  assert.ok(!report.rows.some(row => [rows[0].studentId, rows[2].studentId, 'PRIOR', 'APPLICANT'].includes(row.studentId)))
  assert.deepEqual(data.tables.allinfo, before)
  assert.equal(data.tables.activityLogs.length, 0)
})

test('annual submission legacy references count only for their authenticated account and matching year', async () => {
  const data = noIdFixture(2)
  data.tables.admins.push({ _id: 'student-owner', role: 'student', schoolId: data.tables.allinfo[0].studentId })
  data.tables.studentProfileSubmissions.push({ _id: 'submission', accountId: 'student-owner', schoolYear: data.args.schoolYear, schoolIdStorageId: 'saved-id' })
  data.storage.set('saved-id', { size: 100, contentType: 'application/pdf' })
  assert.equal((await data.handlers.inspect.handler(data.ctx, data.args)).rows.length, 1)
  data.tables.studentProfileSubmissions[0].schoolYear = '2024-2025'
  assert.equal((await data.handlers.inspect.handler(data.ctx, data.args)).rows.length, 2)
})

test('uncertain verification blocks reports and exports rather than marking all affected students missing', async () => {
  const data = noIdFixture(1), row = data.tables.allinfo[0]
  row.frontIdUrl = 'https://drive.google.com/file/d/uncertain/view'
  data.drive.set('uncertain', { state: 'unknown' })
  await assert.rejects(() => data.handlers.inspect.handler(data.ctx, data.args), /verification/)
  await assert.rejects(() => data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['1'] }))
  assert.equal(data.tables.activityLogs.length, 0)
  assert.throws(() => buildNoIdReport([{ ...row, frontIdUrl: '', frontIdStorageId: 'shared' }, { ...row, frontIdUrl: '', frontIdStorageId: 'shared', schoolYear: '2024-2025' }], data.args.schoolYear, { 'storage:shared': { state: 'valid' } }), /verification/)
})

test('exports include every matching page, correct batches/year, search, sanitized filenames and metadata-only audit logs', async () => {
  const data = noIdFixture(24)
  const report = await data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['1', '2', '1'] })
  assert.equal(report.rows.length, 24)
  assert.equal(report.filename, 'IBACMI_NO_ID_LIST_SY2025-2026.xlsx')
  assert.equal((await data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['1'] })).rows.length, 12)
  assert.equal((await data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['1', '2'], search: 'TEST-0001' })).rows.length, 1)
  await assert.rejects(() => data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['OTHER'] }))
  await assert.rejects(() => data.handlers.prepare.handler(data.ctx, { ...data.args, batches: [] }))
  assert.doesNotMatch(JSON.stringify(data.tables.activityLogs), /TEST-000|Synthetic|test-session/)
  assert.equal(noIdFilename('../2026/2027', ['1/2'], false), 'IBACMI_NO_ID_LIST_BATCH_1-2_SY2026-2027.xlsx')
})

test('workbook preserves text IDs, neutralizes formulas, formats the report and exports all 24 rows', async () => {
  const data = noIdFixture(24)
  data.tables.allinfo[0].studentId = '0000123'; data.tables.allinfo[0].tesAwardNumber = '0000456'; data.tables.allinfo[0].lastName = '=HYPERLINK("unsafe")'
  const report = await data.handlers.prepare.handler(data.ctx, { ...data.args, batches: ['1', '2'] })
  const percentages = [], bytes = await createNoIdWorkbook(report, value => percentages.push(value)), zip = await JSZip.loadAsync(bytes)
  const sheet = await zip.file('xl/worksheets/sheet1.xml').async('string'), workbook = await zip.file('xl/workbook.xml').async('string')
  assert.match(workbook, /name="NO ID LIST"/)
  assert.match(sheet, /0000123/); assert.match(sheet, /0000456/)
  assert.match(sheet, /=HYPERLINK\(&quot;unsafe&quot;\)/); assert.doesNotMatch(sheet, /<f[ >]/)
  assert.match(sheet, /state="frozen"/); assert.match(sheet, /autoFilter ref="A8:J32"/)
  assert.equal((sheet.match(/<row /g) || []).length, 31)
  assert.ok(percentages.length > 0 && percentages.at(-1) === 100)
})

test('Drive metadata bridge is read-only and handles trash, wrong folders, year and student ownership', () => {
  const source = fs.readFileSync(new URL('../google-apps-script/Code.gs', import.meta.url), 'utf8')
  const iterator = items => { let i = 0; return { hasNext: () => i < items.length, next: () => items[i++] } }
  const root = { getId: () => '18YvJEnt3MB0f1tcLzoCUDTDL5SS-AdUH' }
  const year = { getId: () => 'year', getName: () => '2025-2026', getParents: () => iterator([root]) }
  const owner = { getId: () => 'owner', getName: () => '0000123 - Test Student', getParents: () => iterator([year]) }
  const file = { isTrashed: () => false, getParents: () => iterator([owner]), getSize: () => 100, getMimeType: () => 'application/pdf', getName: () => '0000123-Test-Batch-1-ID.pdf' }
  const bridge = new Function('DriveApp', 'ContentService', source + ';return {inspectDriveFiles};')({ getFileById: () => file }, { createTextOutput: value => ({ setMimeType: () => JSON.parse(value) }), MimeType: { JSON: 'json' } })
  let result = bridge.inspectDriveFiles({ destination: 'students', fileIds: ['file'] })
  assert.equal(result.files[0].state, 'valid'); assert.equal(result.files[0].year, '2025-2026'); assert.equal(result.files[0].studentId, '0000123')
  file.isTrashed = () => true
  result = bridge.inspectDriveFiles({ destination: 'students', fileIds: ['file'] }); assert.equal(result.files[0].state, 'missing')
  assert.equal(bridge.inspectDriveFiles({ destination: 'applicants', fileIds: ['file'] }).success, false)
})
