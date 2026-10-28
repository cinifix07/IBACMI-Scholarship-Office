import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { profileHandlers as api, profileAuth, authHandlers, studentFixture, completeInput } from './studentProfileFixtures.mjs'
import { profileCompleteness, validBirthDate, todayInPhilippines } from '../convex/studentProfileRules.js'
import { handlers as billing } from './billingFixtures.mjs'

test('profile queries and saves require an active, unexpired student session', async () => {
  for (const kind of ['missing', 'expired', 'admin', 'inactive']) {
    const data = studentFixture()
    const session = data.tables.supportSessions.at(-1)
    if (kind === 'expired') session.expiresAt = Date.now()
    if (kind === 'admin') session.role = 'admin'
    if (kind === 'inactive') data.account.status = 'inactive'
    const sessionToken = kind === 'missing' ? 'missing' : data.token
    await assert.rejects(() => api.get.handler(data.ctx, { sessionToken }))
    await assert.rejects(() => api.save.handler(data.ctx, { sessionToken, expectedVersion: 0, ...completeInput }))
    assert.equal(data.account.studentInformation, undefined)
  }
})

test('existing login and new registration issue sessions that can complete the profile', async () => {
  for (const mode of ['existing', 'new']) {
    const data = studentFixture()
    data.account.password = 'test-password'
    if (mode === 'new') data.tables.admins = data.tables.admins.filter(a => a.role !== 'student')
    const credentials = { schoolId: 'TEST-0001', password: 'test-password' }
    const login = mode === 'existing' ? await authHandlers.login.handler(data.ctx, credentials) : await authHandlers.register.handler(data.ctx, { ...credentials, email: 'new@example.invalid', phoneNumber: '09123456789' })
    assert.equal(login.success, true)
    const before = await api.get.handler(data.ctx, { sessionToken: login.admin.sessionToken })
    assert.ok(before.missing.length > 0)
    await api.save.handler(data.ctx, { sessionToken: login.admin.sessionToken, expectedVersion: 0, ...completeInput })
    assert.equal((await api.get.handler(data.ctx, { sessionToken: login.admin.sessionToken })).percent, 100)
    const failed = await authHandlers.login.handler(data.ctx, { ...credentials, password: 'incorrect' })
    assert.equal(failed.success, false)
  }
})

test('legacy contact update endpoints reject a different student and accept their authenticated owner', async () => {
  for (const [fn, field, value] of [['updateStudentPhoneNumber', 'phoneNumber', '09999999999'], ['updateStudentCurrentAddress', 'currentAddress', 'Another barangay, Test City'], ['updateStudentFacebookProfile', 'facebookProfileUrl', 'https://facebook.com/test-student']]) {
    const data = studentFixture()
    await assert.rejects(() => authHandlers[fn].handler(data.ctx, { sessionToken: data.token, schoolId: 'OTHER-STUDENT', [field]: value }))
    const result = await authHandlers[fn].handler(data.ctx, { sessionToken: data.token, schoolId: data.account.schoolId, [field]: value })
    assert.equal(result.success, true)
    assert.equal(data.account[field], value)
  }
})

test('profile ownership comes from the token and legacy endpoints enforce the same ownership', async () => {
  const data = studentFixture()
  await assert.rejects(() => profileAuth.requireStudentOwnership(data.ctx, data.token, 'SOMEONE-ELSE'))
  const profile = await api.get.handler(data.ctx, { sessionToken: data.token, studentId: 'SOMEONE-ELSE' })
  assert.equal(profile.profile.studentId, data.account.schoolId)
  for (const name of ['updateStudentPhoneNumber', 'updateStudentCurrentAddress', 'updateStudentFacebookProfile']) {
    const source = fs.readFileSync(new URL('../convex/adminAuth.js', import.meta.url), 'utf8')
    const section = source.slice(source.indexOf(`export const ${name}`)).split('\nexport const ')[0]
    assert.match(section, /sessionToken: v.string\(\)/)
    assert.match(section, /await requireStudentOwnership/)
  }
})

test('older billing and applicant values prepopulate without changing stored records', async () => {
  const data = studentFixture()
  const before = JSON.stringify(data.tables)
  const result = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(result.profile.yearLevelCode, 2)
  assert.equal(result.profile.sexCode, 0)
  assert.equal(result.profile.birthDate, '2004-01-02')
  assert.equal(result.profile.emailAddress, 'synthetic0@example.invalid')
  assert.equal(JSON.stringify(data.tables), before)
  assert.deepEqual(result.missing.map(f => f.key), ['course'])
  data.tables.billingProfiles = []
  data.tables.applicants.push({ _id: 'applicant', studentId: data.account.schoolId, applicationYear: '2025-2026', course: completeInput.course, yearLevelCode: 3, sexCode: 1, birthDate: completeInput.birthDate, zipCode: '0001', emailAddress: 'application@example.invalid' })
  const applicant = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(applicant.profile.zipCode, '0001')
  assert.equal(applicant.profile.sexCode, 1)
  assert.equal(applicant.percent, 100)
})

test('validation handles real dates, future dates, leading zero ZIP, code zero and optional fields', () => {
  assert.equal(validBirthDate('2004-02-29'), true)
  for (const date of ['2003-02-29', '2024-04-31', '2999-01-01', '02/12/2004', '']) assert.equal(validBirthDate(date), false)
  const complete = { ...completeInput, studentId: 'TEST-1', middleInitial: '', facebookProfileUrl: '' }
  assert.equal(profileCompleteness(complete).percent, 100)
  const invalid = profileCompleteness({ ...complete, zipCode: '123', sexCode: '', yearLevelCode: 6, emailAddress: 'invalid', course: '' })
  assert.deepEqual(invalid.missing.map(f => f.key), ['course', 'yearLevelCode', 'zipCode', 'emailAddress', 'sexCode'])
})

test('invalid saves are rejected before writes and stale edits cannot overwrite newer values', async () => {
  for (const change of [{ zipCode: '123' }, { birthDate: '2004-02-30' }, { emailAddress: 'bad' }, { sexCode: 2 }, { yearLevelCode: 6 }, { course: 'fake' }, { facebookProfileUrl: 'https://evil.example' }]) {
    const data = studentFixture(), before = JSON.stringify(data.tables)
    await assert.rejects(() => api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput, ...change }))
    assert.equal(JSON.stringify(data.tables), before)
  }
  const data = studentFixture()
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput })
  await assert.rejects(() => api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput, firstName: 'Overwrite' }), /another tab/)
})

test('save preserves credentials, other accounts, historical records, applications and bills; refresh completes profile', async () => {
  const data = studentFixture()
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'historical', schoolYear: '2024-2025' })
  data.tables.billingReports.push({ _id: 'finalized', reference: 'IMMUTABLE' })
  const historical = structuredClone(data.tables.allinfo.at(-1)), bills = structuredClone(data.tables.billingReports), admin = structuredClone(data.tables.admins[0])
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput, emailAddress: ' CONTACT@Example.Invalid ' })
  assert.equal(data.account.email, 'login@example.invalid')
  assert.equal(data.account.studentInformation.emailAddress, 'contact@example.invalid')
  assert.equal(data.account.studentInformation.zipCode, '0123')
  assert.deepEqual(data.tables.allinfo.at(-1), historical)
  assert.deepEqual(data.tables.billingReports, bills)
  assert.deepEqual(data.tables.admins[0], admin)
  assert.equal(data.tables.admins.length, 2)
  const result = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(result.percent, 100)
  assert.deepEqual(result.missing, [])
  assert.equal(data.tables.activityLogs.length, 1)
})

test('student reporting changes invalidate existing billing review and provide updated details for review', async () => {
  const data = studentFixture()
  const stored = JSON.stringify(data.tables.billingProfiles)
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput })
  const preview = await billing.preview.handler(data.ctx, data.args)
  assert.equal(preview.eligibleCount, 0)
  assert.match(preview.rows[0].issues.join(' '), /changed after review/)
  assert.equal(preview.rows[0].profile.program, completeInput.course)
  assert.equal(preview.rows[0].profile.zip, '0123')
  assert.equal(JSON.stringify(data.tables.billingProfiles), stored)
})

test('missing grantee or TES award requires office review but never blocks profile completion', async () => {
  const data = studentFixture()
  data.tables.allinfo = []
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput })
  const result = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(result.percent, 100)
  assert.equal(result.needsOfficeReview, true)
  assert.equal(data.tables.allinfo.length, 0)
})

test('duplicate grantee records retain shared School ID uploads without rewriting either record', async () => {
  const data = studentFixture()
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'duplicate-with-upload', frontIdUrl: 'https://drive.google.com/test-only', idFilesUploadedAt: 20, uploadedAt: 0 })
  const before = JSON.stringify(data.tables.allinfo)
  const result = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(result.records.length, 2)
  assert.ok(result.records.every(r => r.frontIdUrl === 'https://drive.google.com/test-only'))
  assert.equal(JSON.stringify(data.tables.allinfo), before)
})

test('current academic year is preferred over a future record in both profile lookup and save', async () => {
  const data = studentFixture()
  const [year, month] = todayInPhilippines().split('-').map(Number)
  const start = month >= 6 ? year : year - 1
  data.tables.allinfo[0].schoolYear = `${start}-${start + 1}`
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'future-record', schoolYear: `${start + 1}-${start + 2}`, firstName: 'Future', uploadedAt: Date.now() })
  const future = structuredClone(data.tables.allinfo.at(-1))
  const result = await api.get.handler(data.ctx, { sessionToken: data.token })
  assert.equal(result.recordId, data.tables.allinfo[0]._id)
  assert.equal(result.profile.firstName, 'Synthetic')
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput })
  assert.deepEqual(data.tables.allinfo.at(-1), future)
})

test('saving unchanged information preserves an existing billing review version', async () => {
  const data = studentFixture()
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: 0, ...completeInput })
  const sourceVersion = data.tables.allinfo[0].studentInformationUpdatedAt
  await api.save.handler(data.ctx, { sessionToken: data.token, expectedVersion: data.account.studentInformationUpdatedAt, ...completeInput })
  assert.equal(data.tables.allinfo[0].studentInformationUpdatedAt, sourceVersion)
})
