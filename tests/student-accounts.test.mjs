import { test } from 'node:test'
import assert from 'node:assert/strict'
import { studentAccountView } from '../convex/studentAccountRules.js'
import { handlers, accountsFixture } from './studentAccountsFixtures.mjs'

test('account list joins exact string IDs, preserves zeros, excludes credentials and never writes', async () => {
  const data = accountsFixture(), before = structuredClone(data.tables)
  const rows = await handlers.listStudentAccounts.handler(data.ctx, { sessionToken: 'test-session' })
  assert.equal(rows.length, 12)
  assert.equal(rows[0].schoolId, '000001')
  assert.equal(rows[0].completeName, 'Given 1 Middle Family 1')
  assert.equal(rows[0].currentAddress, 'Purok 1, Test Barangay, Test City')
  assert.equal(rows[0].password, undefined)
  assert.deepEqual(data.tables, before)
})
test('all three endpoints reject missing, expired, student and inactive administrator sessions before accessing student data', async () => {
  for (const mode of ['missing', 'expired', 'student', 'inactive']) {
    const data = accountsFixture(), session = data.tables.supportSessions[0]
    if (mode === 'expired') session.expiresAt = 0
    if (mode === 'student') session.role = 'student'
    if (mode === 'inactive') data.tables.admins[0].status = 'inactive'
    const before = structuredClone(data.tables), args = { sessionToken: mode === 'missing' ? '' : 'test-session', id: 'student-1', email: 'changed@example.invalid', phoneNumber: '09123456789' }
    for (const handler of Object.values(handlers)) await assert.rejects(() => handler.handler(data.ctx, args))
    assert.deepEqual(data.tables, before)
  }
})
test('saved profile wins; mismatched IDs/names, conflicting rows and unavailable middle names remain safe', () => {
  const account = { _id: 'a', schoolId: '001', currentAddress: 'Saved address', studentInformation: { lastName: 'Saved', firstName: 'First', middleInitial: 'J.' } }
  const records = [{ studentId: '1', lastName: 'Wrong' }, { studentId: '001', lastName: 'Saved', firstName: 'First', schoolYear: '2026-2027' }]
  const applicants = [{ studentId: '001', lastName: 'Different', firstName: 'Person', middleName: 'Jane', address: 'Wrong address' }]
  const row = studentAccountView(account, records, applicants)
  assert.equal(row.lastName, 'Saved'); assert.equal(row.middleName, 'J.'); assert.equal(row.currentAddress, 'Saved address')
  assert.equal(studentAccountView({ schoolId: '001' }, [{ studentId: '001', lastName: 'One' }, { studentId: '001', lastName: 'Two' }]).lastName, '')
  assert.equal(studentAccountView({ schoolId: '001' }, [{ studentId: '001', lastName: 'One' }, { studentId: '001', lastName: 'Two' }], [{ studentId: '001', lastName: 'One', address: 'Uncertain' }]).currentAddress, '')
  assert.equal(studentAccountView({ schoolId: '' }, [{ studentId: '', lastName: 'Wrong' }]).lastName, '')
})
test('authorized edit retains existing validation and delete archives only the account', async () => {
  const data = accountsFixture(), official = structuredClone(data.tables.allinfo), args = { sessionToken: 'test-session', id: 'student-1', email: 'updated@example.invalid', phoneNumber: '09123456789' }
  assert.equal((await handlers.updateStudentAccount.handler(data.ctx, args)).success, true)
  assert.equal((await handlers.updateStudentAccount.handler(data.ctx, { ...args, email: 'bad' })).success, false)
  assert.equal((await handlers.deleteStudentAccount.handler(data.ctx, args)).success, true)
  assert.equal(data.tables.archive.length, 1)
  assert.equal(data.tables.admins.some(row => row._id === 'student-1'), false)
  assert.deepEqual(data.tables.allinfo, official)
})
