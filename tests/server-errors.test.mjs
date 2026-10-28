import { test } from 'node:test'
import assert from 'node:assert/strict'
import { classifyError, diagnosticFor, ERROR_MESSAGES, retryRead, safeErrorMessage, validSessionToken, validStoredSession } from '../src/errors/errorPolicy.js'
import { getErrorSnapshot, getSanitizedDiagnostics, reportError, resetErrors, resolveError } from '../src/errors/errorBus.js'
import { studentFixture, uploadHandlers } from './studentProfileFixtures.mjs'

test('validation, expired session, offline, transport failure and unexpected errors remain distinct', () => {
  assert.equal(classifyError(new Error('ArgumentValidationError: Object is missing the required field sessionToken.')), 'validation')
  assert.equal(classifyError(new Error('Could not find public function allinfo:listByStudentId')), 'validation')
  assert.equal(classifyError(new Error('Your student session has expired. Please sign in again.')), 'session')
  assert.equal(classifyError(new TypeError('Failed to fetch'), { online: false }), 'offline')
  assert.equal(classifyError(new TypeError('Failed to fetch'), { online: true }), 'connection')
  assert.equal(classifyError(new Error('Unexpected internal failure'), { online: true }), 'service')
  assert.equal(classifyError(new Error('ArgumentValidationError: sessionToken invalid'), { online: false }), 'validation')
  assert.equal(classifyError(new Error('Your profile changed in another tab. Reload before saving.')), 'validation')
  assert.equal(classifyError(new Error('[CONVEX Q] Server Error: Uncaught Error: Failed to fetch third party data')), 'service')
  assert.equal(classifyError(new Error('Your account is no longer active.')), 'session')
  assert.equal(classifyError(new Error('This chat session has expired. Start a new conversation to continue.')), 'validation')
})

test('restored sessions require the right role, a real nonempty token and the linked student ID', () => {
  for (const token of [null, undefined, '', ' ', 1234, {}, 'x'.repeat(101)]) assert.equal(validSessionToken(token), false)
  assert.equal(validStoredSession({ role: 'student', schoolId: 'TEST-1', sessionToken: 'synthetic-session' }, 'student'), true)
  assert.equal(validStoredSession({ role: 'admin', sessionToken: 'synthetic-session' }, 'admin'), true)
  assert.equal(validStoredSession({ role: 'admin', sessionToken: 'synthetic-session' }, 'student'), false)
  assert.equal(validStoredSession({ role: 'student', sessionToken: 'synthetic-session' }, 'student'), false)
})

test('the originally failing query requires the actual student session and enforces ownership', async () => {
  const data = studentFixture()
  const records = await uploadHandlers.listByStudentId.handler(data.ctx, { sessionToken: data.token, studentId: data.account.schoolId })
  assert.equal(records.length, 1)
  await assert.rejects(() => uploadHandlers.listByStudentId.handler(data.ctx, { studentId: data.account.schoolId }))
  await assert.rejects(() => uploadHandlers.listByStudentId.handler(data.ctx, { sessionToken: data.token, studentId: 'ANOTHER-STUDENT' }))
})

test('diagnostics and public errors never contain exception payloads, credentials or student information', () => {
  resetErrors()
  const raw = new Error('[Request ID: aabbccddeeff0011] Internal failure: sessionToken=SECRET-TOKEN password=SECRET-PASSWORD studentId=SECRET-STUDENT email=private@example.invalid')
  const publicError = reportError(raw, { operation: 'studentProfile.get' })
  const publicData = JSON.stringify({ message: publicError.message, snapshot: getErrorSnapshot(), diagnostics: getSanitizedDiagnostics(), direct: diagnosticFor(raw, 'operation contains SECRET-TOKEN') })
  assert.doesNotMatch(publicData, /SECRET-|private@example|Internal failure|sessionToken|password|studentId=/)
  assert.equal(diagnosticFor(raw).requestId, 'aabbccddeeff0011')
  assert.equal(safeErrorMessage(raw), ERROR_MESSAGES.service.description)
  assert.equal(safeErrorMessage(new Error('Select at least one batch.')), 'Select at least one batch.')
  resolveError('studentProfile.get')
  assert.equal(getErrorSnapshot(), null)
})

test('retry backoff is bounded to three safe read attempts and stops on validation or session errors', async () => {
  let calls = 0
  const delays = []
  await assert.rejects(() => retryRead(async () => { calls++; throw new TypeError('Failed to fetch') }, { delay: async value => delays.push(value) }))
  assert.equal(calls, 3)
  assert.deepEqual(delays, [300, 600])
  for (const message of ['ArgumentValidationError: missing field', 'Your session has expired. Please sign in again.']) {
    calls = 0
    await assert.rejects(() => retryRead(async () => { calls++; throw new Error(message) }, { delay: async () => assert.fail('No delay for nonretryable errors') }))
    assert.equal(calls, 1)
  }
  calls = 0
  assert.equal(await retryRead(async () => { if (++calls < 3) throw new Error('temporary service error'); return 'restored' }, { delay: async () => {} }), 'restored')
})
