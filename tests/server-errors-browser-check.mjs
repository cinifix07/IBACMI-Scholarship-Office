import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { profileHandlers, uploadHandlers, studentFixture } from './studentProfileFixtures.mjs'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office'
const out = 'tmp/server-errors-check'
await fs.mkdir(out, { recursive: true })
const data = studentFixture()
const sentinel = 'SECRET-TOKEN SECRET-PASSWORD SECRET-STUDENT private@example.invalid'
const calls = [], httpCalls = [], consoleText = []
let queryFailure = '', healthFails = false, restoreSocket = false, unsafeCalls = 0
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block' })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => consoleText.push(message.text()))
  const execute = async (name, args) => {
    if (name === 'connectionHealth:check') return { ok: true }
    if (name === 'support:listStudentConversations' || name === 'documentation:published') return []
    if (name === 'applicantPortal:get') return { isReceivingApplicants: false }
    if (name === 'studentProfile:save') { unsafeCalls++; throw new Error('Internal mutation failure ' + sentinel) }
    if (name === 'studentProfile:get' || name === 'allinfo:listByStudentId') {
      assert.equal(args.sessionToken, 'student-token')
      if (queryFailure) throw new Error(queryFailure + ' ' + sentinel)
      return name === 'studentProfile:get' ? profileHandlers.get.handler(data.ctx, args) : uploadHandlers.listByStudentId.handler(data.ctx, args)
    }
    throw new Error('Unexpected test operation ' + name)
  }
  await page.exposeFunction('billingCall', async (name, args) => { calls.push({ name, args }); return execute(name, args) })
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQueries,useConvex,useConvexConnectionState,useMutation,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';" }))
  await page.route('**/api/query', async route => {
    const body = route.request().postDataJSON(), name = body.path
    const args = Array.isArray(body.args) ? body.args[0] : body.args
    httpCalls.push(name)
    if (name === 'connectionHealth:check' && healthFails) { await route.abort('connectionrefused'); return }
    if (name === 'connectionHealth:check' && restoreSocket) await page.evaluate(() => { window.testConnectionState = { isWebSocketConnected: true, hasEverConnected: true, connectionRetries: 0 } })
    try {
      const value = await execute(name, args)
      await route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ status: 'success', value, logLines: [] }) })
    } catch (error) {
      await route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ status: 'error', errorMessage: error.message, logLines: [] }) })
    }
  })
  await page.route('**/__server-errors-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;font-family:system-ui;background:#fcf9f8}button,textarea{padding:12px;margin:8px;max-width:100%}label,output{display:block}</style></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/serverErrorsHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__server-errors-check')
  await page.getByRole('button', { name: 'Load student information' }).waitFor()
  assert.equal(calls.length, 0, 'Protected queries must skip while authentication/data are not ready')
  await page.getByRole('button', { name: 'Load student information' }).click()
  await page.getByLabel('Loaded profile').getByText('Synthetic', { exact: true }).waitFor()
  assert.equal(await page.getByLabel('Loaded records').innerText(), '1')
  const field = page.getByLabel('Unsaved profile information')
  await field.fill('Keep this draft through connection recovery')
  queryFailure = 'ArgumentValidationError: Object is missing the required field sessionToken.'
  await page.getByRole('button', { name: 'Refresh information' }).click()
  const validation = page.getByRole('dialog', { name: 'Unable to Load Information', exact: true })
  await validation.waitFor()
  assert.equal(await page.getByRole('dialog').count(), 1)
  assert.doesNotMatch(await page.locator('body').innerText(), /ArgumentValidationError|SECRET-|private@example|sessionToken|convex dev|VITE_/)
  assert.equal(await field.inputValue(), 'Keep this draft through connection recovery')
  await page.screenshot({ path: out + '/desktop-validation.png' })
  for (const viewport of [{ width: 390, height: 844 }, { width: 320, height: 568 }]) {
    await page.setViewportSize(viewport)
    const box = await validation.boundingBox()
    assert.ok(box.x >= 0 && box.y >= 0 && box.x + box.width <= viewport.width + 1 && box.y + box.height <= viewport.height + 1)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  }
  await page.screenshot({ path: out + '/mobile-validation.png' })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await page.locator('.ibacmi-server-error__symbol').evaluate(element => getComputedStyle(element).animationName), 'none')
  queryFailure = ''
  await validation.getByRole('button', { name: 'Try Again', exact: true }).click()
  await validation.waitFor({ state: 'detached' })
  assert.equal(await field.inputValue(), 'Keep this draft through connection recovery')
  assert.ok(httpCalls.includes('studentProfile:get') && httpCalls.includes('allinfo:listByStudentId'))
  await page.context().setOffline(true)
  const offline = page.getByRole('dialog', { name: 'No Internet Connection', exact: true })
  await offline.waitFor()
  await page.context().setOffline(false)
  await offline.getByRole('button', { name: 'Retry Connection', exact: true }).click()
  await offline.waitFor({ state: 'detached' })
  await page.evaluate(() => { window.testConnectionState = { isWebSocketConnected: false, hasEverConnected: true, connectionRetries: 2 }; window.dispatchEvent(new Event('test-connection')) })
  const disconnected = page.getByRole('dialog', { name: 'The Server Is Not Connected', exact: true })
  await disconnected.waitFor()
  healthFails = true
  const before = httpCalls.filter(name => name === 'connectionHealth:check').length
  await disconnected.getByRole('button', { name: 'Retry Connection', exact: true }).click()
  await page.getByText('Checking the connection and restoring information…', { exact: true }).waitFor()
  await disconnected.getByRole('button', { name: 'Retry Connection', exact: true }).waitFor()
  assert.equal(httpCalls.filter(name => name === 'connectionHealth:check').length - before, 3)
  healthFails = false; restoreSocket = true
  await disconnected.getByRole('button', { name: 'Retry Connection', exact: true }).click()
  await disconnected.waitFor({ state: 'detached' })
  await page.evaluate(() => window.dispatchEvent(new Event('test-connection')))
  await page.getByRole('button', { name: 'Run unsafe submission' }).click()
  const service = page.getByRole('dialog', { name: 'Service Temporarily Unavailable', exact: true })
  await service.waitFor()
  assert.equal(unsafeCalls, 1)
  await service.getByRole('button', { name: 'Try Again', exact: true }).click()
  await service.waitFor({ state: 'detached' })
  assert.equal(unsafeCalls, 1, 'Connection recovery must never replay a submission')
  assert.equal(await field.inputValue(), 'Keep this draft through connection recovery')
  data.tables.supportSessions.find(row => row.token === 'student-token').expiresAt = 0
  await page.getByRole('button', { name: 'Refresh information' }).click()
  const expired = page.getByRole('dialog', { name: 'Session Expired', exact: true })
  await expired.waitFor()
  await expired.getByRole('button', { name: 'Sign In Again', exact: true }).click()
  await page.getByText('Sign-in requested', { exact: true }).waitFor()
  assert.equal(await page.getByRole('dialog').count(), 0)
  data.tables.supportSessions.find(row => row.token === 'student-token').expiresAt = Date.now() + 1000000
  await page.reload()
  await page.getByRole('button', { name: 'Trigger render failure' }).click()
  await service.waitFor()
  assert.doesNotMatch(await page.locator('body').innerText(), /SECRET-|private@example|Internal render/)
  await service.getByRole('button', { name: 'Try Again', exact: true }).click()
  await service.waitFor({ state: 'detached' })
  await page.getByRole('button', { name: 'Load student information' }).waitFor()
  await page.route('**/__session-recovery-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/sessionRecoveryHarness.jsx"></script></body></html>' }))
  await page.evaluate(() => {
    localStorage.setItem('unifast.studentSession', JSON.stringify({ id: 'student-account', role: 'student', schoolId: 'TEST-0001', sessionToken: 'student-token' }))
    localStorage.setItem('unifast.studentViewOpen', 'true')
  })
  data.tables.supportSessions.find(row => row.token === 'student-token').expiresAt = 0
  await page.goto(base + '/__session-recovery-check')
  await expired.waitFor()
  await expired.getByRole('button', { name: 'Sign In Again', exact: true }).click()
  await page.getByRole('button', { name: 'Login', exact: true }).waitFor()
  assert.equal(await page.evaluate(() => localStorage.getItem('unifast.studentSession')), null)
  assert.equal(await page.evaluate(() => localStorage.getItem('unifast.studentViewOpen')), null)
  assert.doesNotMatch(consoleText.join('\n'), /SECRET-|private@example|sessionToken=|password=/)
  assert.deepEqual(errors, [])
  console.log('PASS authenticated queries (including missing-token caller fallback), auth-loading skip, validation/session/offline/connection/service classification, single responsive modal, sanitized UI/logs, bounded backoff, real HTTP read recovery preserving drafts, and no mutation replay.')
} finally { await browser.close() }
