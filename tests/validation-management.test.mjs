import { test } from 'node:test'
import assert from 'node:assert/strict'
import * as XLSX from 'xlsx'
import JSZip from 'jszip'
import { parseValidationFile } from '../convex/validationParser.js'
import { compareValidation, VALIDATION_STATUSES } from '../convex/validationRules.js'
import { createValidationWorkbook } from '../src/admin/validationExport.js'
import { actions, backend, validationFixture } from './validationFixtures.mjs'
const headers = ['BATCH NO.', 'STUDENT ID', 'LAST NAME', 'FIRST NAME', 'EXT NAME', 'MIDDLE NAME']
const fileBytes = (rows, type = 'xlsx') => { const book = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(book, XLSX.utils.aoa_to_sheet([headers, ...rows]), 'Students'); return XLSX.write(book, { type: 'array', bookType: type }) }
const csv = rows => new TextEncoder().encode([headers, ...rows].map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n')).buffer
const uploadRow = (studentId, batchId = '13.1', change = {}) => ({ sourceRow: 2, studentId, batchId, lastName: 'Dela Cruz', firstName: 'Juan', extensionName: '', middleName: 'Middle', issues: [], ...change })
const officialRow = (id, change = {}) => ({ _id: id, ...uploadRow(id), schoolYear: '2026-2027', ...change })

test('XLSX, legacy XLS and UTF-8 CSV parse the same six columns and preserve leading zeros', async () => {
  const rows = [['13.1', '0000123', 'Peña', 'Juan', 'JR.', 'Middle']]
  for (const [extension, bytes] of [['xlsx', fileBytes(rows)], ['xls', fileBytes(rows, 'xls')], ['csv', csv(rows)]]) {
    const result = await parseValidationFile(bytes, `students.${extension}`)
    assert.equal(result.rows[0].studentId, '0000123'); assert.equal(result.rows[0].lastName, 'Peña'); assert.equal(result.rows[0].batchId, '13.1')
  }
})

test('parser rejects ambiguous/missing headers, corrupted/binary/malformed/oversized data and flags formulas', async () => {
  const make = values => { const book = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(book, XLSX.utils.aoa_to_sheet(values), 'Students'); return XLSX.write(book, { type: 'array', bookType: 'xlsx' }) }
  await assert.rejects(() => parseValidationFile(make([headers.slice(0, 5), ['1', '001', 'A', 'B', '']]), 'bad.xlsx'), /MIDDLE NAME/)
  await assert.rejects(() => parseValidationFile(make([[...headers, 'School ID'], ['1', '001', 'A', 'B', '', '', '002']]), 'bad.xlsx'), /ambiguous/)
  await assert.rejects(() => parseValidationFile(new Uint8Array([1, 2, 3]).buffer, 'bad.xlsx'), /valid XLSX/)
  await assert.rejects(() => parseValidationFile(new TextEncoder().encode('"unclosed').buffer, 'bad.csv'), /unclosed/)
  await assert.rejects(() => parseValidationFile(new Uint8Array(5 * 1024 * 1024 + 1).buffer, 'big.csv'), /5 MB/)
  const book = XLSX.utils.book_new(), sheet = XLSX.utils.aoa_to_sheet([headers, ['13.1', '001', 'A', 'B', '', 'C']]); sheet.C2 = { t: 'str', f: 'HYPERLINK("unsafe")', v: 'A' }; XLSX.utils.book_append_sheet(book, sheet, 'Students')
  const parsed = await parseValidationFile(XLSX.write(book, { type: 'array', bookType: 'xlsx' }), 'formulas.xlsx')
  assert.match(parsed.rows[0].issues.join(' '), /formula/)
})

test('comparison produces all seven exclusive categories without name-only matching or official writes', () => {
  const official = [officialRow('001'), officialRow('002'), officialRow('003'), officialRow('003', { _id: 'duplicate-official' }), officialRow('004'), officialRow('005'), officialRow('006'), officialRow('007', { batchId: 'OUTSIDE' })]
  const before = structuredClone(official)
  const input = [uploadRow('001', '13.1', { firstName: '  juan  ' }), uploadRow('002', '13.1', { lastName: 'DE LA CRUZ' }), uploadRow('003'), uploadRow('004'), uploadRow('004'), uploadRow('NOTFOUND'), uploadRow('bad id'), uploadRow('007', 'OUTSIDE')]
  const report = compareValidation(input, official, '2026-2027', ['13.1'])
  for (const status of VALIDATION_STATUSES) assert.ok(report.rows.some(row => row.status === status), `Missing ${status}`)
  assert.equal(report.summary.MATCHED, 1); assert.equal(report.summary.MISMATCHED, 1); assert.equal(report.summary.DUPLICATE, 2); assert.equal(report.summary['AMBIGUOUS MATCH'], 1)
  assert.equal(report.rows.filter(row => row.uploaded).length, input.length)
  assert.deepEqual(official, before)
})

test('extensions normalize JR punctuation; missing official fields and differently spelled middle names require review', () => {
  const input = [uploadRow('001', '13.1', { extensionName: 'jr.' }), uploadRow('002'), uploadRow('003', '13.1', { middleName: 'Different' })]
  const records = [officialRow('001', { extensionName: 'JR' }), officialRow('002', { extensionName: undefined }), officialRow('003')]
  const result = compareValidation(input, records, '2026-2027', ['13.1'])
  assert.equal(result.rows[0].status, 'MATCHED'); assert.equal(result.rows[1].status, 'INVALID DATA'); assert.equal(result.rows[2].status, 'MISMATCHED')
})

test('offset worksheet headers and formatted numeric IDs preserve text while formula fields remain invalid', async () => {
  const book = XLSX.utils.book_new(), sheet = XLSX.utils.aoa_to_sheet([])
  XLSX.utils.sheet_add_aoa(sheet, [headers, ['13.1', 123, 'Peña', 'Juan', '', 'Middle']], { origin: 'B3' })
  sheet.C4.z = '0000000'; sheet.D4 = { t: 'str', f: 'HYPERLINK("unsafe")', v: 'Peña' }
  XLSX.utils.book_append_sheet(book, sheet, 'Students')
  const parsed = await parseValidationFile(XLSX.write(book, { type: 'array', bookType: 'xlsx' }), 'offset.xlsx')
  assert.equal(parsed.rows[0].studentId, '0000123'); assert.equal(parsed.rows[0].sourceRow, 4); assert.match(parsed.rows[0].issues.join(' '), /formula/)
})

test('eight-sheet export preserves leading zeros and treats formula-like user values as literal XML text', async () => {
  const report = { ...compareValidation([uploadRow('0000123', '13.1', { lastName: '=HYPERLINK("unsafe")' })], [officialRow('0000123')], '2026-2027', ['13.1']), generatedAt: Date.now() }
  const zip = await JSZip.loadAsync(await createValidationWorkbook(report)), sheet = await zip.file('xl/worksheets/sheet2.xml').async('string')
  assert.match(sheet, /0000123/); assert.match(sheet, /=HYPERLINK\(&quot;unsafe&quot;\)/); assert.doesNotMatch(sheet, /<f[ >]/)
})

test('all validation access requires active administrators before parsing, viewing or persisting reports', async () => {
  for (const mode of ['missing', 'student', 'expired', 'inactive']) {
    const data = validationFixture(1)
    if (mode === 'student') data.tables.supportSessions[0].role = 'student'
    if (mode === 'expired') data.tables.supportSessions[0].expiresAt = 1
    if (mode === 'inactive') data.tables.admins[0].status = 'inactive'
    const sessionToken = mode === 'missing' ? '' : data.args.sessionToken
    await assert.rejects(() => backend.options.handler(data.ctx, { sessionToken }))
    await assert.rejects(() => backend.history.handler(data.ctx, { sessionToken }))
    await assert.rejects(() => actions.run.handler(data.ctx, { sessionToken, schoolYear: data.args.schoolYear, batches: ['13.1'], filename: 'students.csv', bytes: csv([['13.1', '001', 'A', 'B', '', 'C']]) }))
    assert.equal(data.tables.validationRuns.length, 0); assert.equal(data.storage.size, 0)
  }
})

test('real actions save retained reports, paginate/filter all results, audit without student data and enforce retention', async () => {
  const data = validationFixture(24), before = structuredClone(data.tables.allinfo)
  const rows = data.tables.allinfo.map(row => [row.batchId, row.studentId, row.lastName, row.firstName, '', row.middleName])
  const result = await actions.run.handler(data.ctx, { sessionToken: data.args.sessionToken, schoolYear: data.args.schoolYear, batches: ['13.1', 'LISTAHAN 2'], filename: 'students.xlsx', bytes: fileBytes(rows) })
  assert.equal(result.ok, true); assert.equal(result.summary.MATCHED, 24)
  const args = { sessionToken: data.args.sessionToken, runId: result.runId }
  const first = await actions.results.handler(data.ctx, args), last = await actions.results.handler(data.ctx, { ...args, page: 3 })
  assert.equal(first.rows.length, 10); assert.equal(last.rows.length, 4); assert.equal(first.total, 24)
  assert.equal((await actions.results.handler(data.ctx, { ...args, search: 'TEST-0001' })).total, 1)
  const complete = await actions.results.handler(data.ctx, { ...args, download: true })
  assert.equal(complete.rows.length, 24)
  const zip = await JSZip.loadAsync(await createValidationWorkbook(complete))
  assert.equal(Object.keys(zip.files).filter(name => /xl\/worksheets\/sheet\d+\.xml/.test(name)).length, 8)
  assert.match(await zip.file('xl/workbook.xml').async('string'), /INVALID - AMBIGUOUS/)
  assert.doesNotMatch(await zip.file('xl/worksheets/sheet2.xml').async('string'), /<f[ >]/)
  assert.deepEqual(data.tables.allinfo, before)
  assert.doesNotMatch(JSON.stringify(data.tables.activityLogs), /TEST-000|test-session/)
  const history = await backend.history.handler(data.ctx, { sessionToken: args.sessionToken }); assert.equal(history[0].retained, true)
  data.tables.validationRuns[0].resultExpiresAt = 1
  await assert.rejects(() => actions.results.handler(data.ctx, args))
  await backend.expireResults.handler(data.ctx, { runId: result.runId }); assert.equal(data.storage.size, 0)
  data.tables.validationRuns[0].metadataExpiresAt = 1
  await backend.expireMetadata.handler(data.ctx, { runId: result.runId }); assert.equal(data.tables.validationRuns.length, 0)
})
