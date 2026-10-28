import { test } from 'node:test'
import assert from 'node:assert/strict'
import { batchFixture, handlers } from './batchExportFixtures.mjs'
import { batchCsvHeaders, batchFilename } from '../convex/batchExportRules.js'
import { createBatchCsv, prepareBatchCsvFile } from '../src/admin/batchDownload.js'

test('batch options and preparation require an active administrator and make no unauthorized writes', async () => {
  for (const mode of ['missing', 'expired', 'student', 'inactive']) {
    const data = batchFixture()
    if (mode === 'expired') data.tables.supportSessions[0].expiresAt = 1
    if (mode === 'student') data.tables.supportSessions[0].role = 'student'
    if (mode === 'inactive') data.tables.admins[0].status = 'inactive'
    const sessionToken = mode === 'missing' ? '' : data.args.sessionToken
    await assert.rejects(() => handlers.options.handler(data.ctx, { sessionToken }))
    await assert.rejects(() => handlers.prepare.handler(data.ctx, { sessionToken, schoolYear: '2025-2026', batches: ['13'] }))
    assert.equal(data.tables.activityLogs.length, 0)
  }
})

test('options use actual years, naturally sorted batches, and counts with exact duplicates removed', async () => {
  const data = batchFixture()
  const result = await handlers.options.handler(data.ctx, { sessionToken: data.args.sessionToken })
  assert.deepEqual(result, [{ schoolYear: '2025-2026', batches: ['13', '13.1', '14', '15'].map(id => ({ id, count: 2 })) }, { schoolYear: '2024-2025', batches: [{ id: '99', count: 1 }] }])
  assert.doesNotMatch(JSON.stringify(result), /SYNTHETIC|studentId|email|password/)
})

test('single, multiple and all exports retain the original 13-column mapping and correct year, batches and semesters', async () => {
  const data = batchFixture(), before = structuredClone(data.tables.allinfo)
  for (const batches of [['13'], ['13', '14', '13'], ['13', '13.1', '14', '15']]) {
    const result = await handlers.prepare.handler(data.ctx, { sessionToken: data.args.sessionToken, schoolYear: '2025-2026', batches })
    assert.deepEqual(result.rows[0], batchCsvHeaders)
    // Golden compatibility contract captured from the original batch CSV export.
    assert.deepEqual(result.rows[0], ['Batch No.', 'Student ID', 'TES Award Number', 'Last Name', 'First Name', 'MI.', 'School Year', 'Semester', 'Status', 'Email Account', 'Phone No.', 'Current Address', 'Account Status'])
    assert.equal(result.count, new Set(batches).size * 2)
    assert.equal(result.rows.length, result.count + 1)
    assert.deepEqual(result.rows[1], ['13', 'TEST-0001', 'TEST-AWARD-0', 'Family 0000', 'Synthetic', 'T', '2025-2026', '1st Semester', 'Grantee', 'synthetic-0@example.invalid', '09000000000', 'SYNTHETIC ADDRESS', 'active'])
    for (const row of result.rows.slice(1)) {
      assert.equal(row.length, 13)
      assert.ok(batches.includes(row[0]))
      assert.equal(row[6], '2025-2026')
      assert.match(row[9], /^synthetic-\d@example.invalid$/)
      assert.equal(row[12], 'active')
    }
    assert.deepEqual(new Set(result.rows.slice(1).map(row => row[7])), new Set(['1st Semester', '2nd Semester']))
    assert.equal(new Set(result.rows.map(JSON.stringify)).size, result.rows.length)
    assert.doesNotMatch(JSON.stringify(result), /DO-NOT-EXPORT/)
  }
  assert.deepEqual(data.tables.allinfo, before)
  assert.equal(data.tables.activityLogs.length, 3)
  assert.doesNotMatch(JSON.stringify(data.tables.activityLogs), /TEST-000|example.invalid|SYNTHETIC ADDRESS|test-session/)
})

test('invalid years, unknown batches and empty selections fail before creating activity logs', async () => {
  const data = batchFixture()
  for (const change of [{ schoolYear: '1900-1901' }, { batches: [] }, { batches: ['13', '99'] }, { batches: [''] }]) {
    await assert.rejects(() => handlers.prepare.handler(data.ctx, { sessionToken: data.args.sessionToken, schoolYear: '2025-2026', batches: ['13'], ...change }))
  }
  assert.equal(data.tables.activityLogs.length, 0)
})

test('filenames are sanitized, deterministic and concise for single, multiple and all batches', () => {
  assert.equal(batchFilename('2025-2026', ['15'], false), 'IBACMI_Batch_15_SY2025-2026.csv')
  assert.equal(batchFilename('2025-2026', ['15', '13', '14'], false), 'IBACMI_Batches_13-14-15_SY2025-2026.csv')
  assert.equal(batchFilename('2025-2026', ['15'], true), 'IBACMI_All_Batches_SY2025-2026.csv')
  const batches = Array.from({ length: 50 }, (_, i) => `very-long-${i}`)
  const filename = batchFilename('../2025/2026', batches, false)
  assert.ok(filename.length < 160)
  assert.match(filename, /^IBACMI_[a-zA-Z0-9_.-]+\.csv$/)
  assert.equal(filename, batchFilename('../2025/2026', [...batches].reverse(), false))
})

test('CSV quotes commas, quotes, newlines and empty fields without changing existing values or column order', async () => {
  const row = Array(13).fill('')
  row[0] = '13'; row[3] = 'Family, "Quoted"\nSecond line'
  const csv = createBatchCsv([batchCsvHeaders, row])
  assert.ok(csv.includes('"Family, ""Quoted""\nSecond line"'))
  assert.equal(csv.split('\n')[0], batchCsvHeaders.map(value => `"${value}"`).join(','))
  const file = prepareBatchCsvFile('IBACMI_Batch_13_SY2025-2026.csv', [batchCsvHeaders, row])
  assert.equal(await file.blob.text(), csv)
  assert.throws(() => prepareBatchCsvFile('../unsafe.csv', [batchCsvHeaders, row]))
  assert.throws(() => createBatchCsv([batchCsvHeaders]))
})
