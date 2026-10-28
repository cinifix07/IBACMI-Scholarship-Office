import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { profileHandlers, studentFixture, completeInput } from './studentProfileFixtures.mjs'

const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data = studentFixture()
data.tables.billingProfiles = []
const base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office'
const out = 'tmp/student-profile-check'
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.exposeFunction('billingCall', (name, args) => {
    const [module, fn] = name.split(':')
    if (module === 'support') return fn === 'listStudentConversations' ? [] : { success: true }
    if (module !== 'studentProfile') throw new Error(`Unexpected call: ${name}`)
    return profileHandlers[fn].handler(data.ctx, args)
  })
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQuery,useMutation} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';" }))
  await page.route('**/__student-profile-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/studentProfileHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__student-profile-check')
  const warning = page.getByRole('dialog', { name: 'Incomplete Student Information' })
  await warning.waitFor()
  assert.match(await warning.innerText(), /Missing Information \(5\)/)
  await page.screenshot({ path: `${out}/desktop-warning.png` })
  for (const size of [{ width: 390, height: 844 }, { width: 320, height: 568 }]) {
    await page.setViewportSize(size)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
    const box = await warning.boundingBox()
    assert.ok(box.x >= 0 && box.y >= 0 && box.x + box.width <= size.width + 1 && box.y + box.height <= size.height + 1)
  }
  await page.screenshot({ path: `${out}/mobile-warning.png` })
  await page.getByRole('button', { name: 'Complete My Information' }).click()
  assert.equal(await page.evaluate(() => document.activeElement.name), 'course')
  assert.equal(await page.locator('.profile-grid [aria-invalid="true"]').count(), 5)
  assert.equal(await page.locator('#profile-firstName').inputValue(), 'Synthetic')
  for (const key of ['lastName', 'firstName', 'middleInitial']) assert.equal(await page.locator(`#profile-${key}`).getAttribute('readonly'), '')
  assert.equal(await page.getByLabel('TES Award No.', { exact: true }).count(), 1)
  assert.equal(await page.getByLabel('Student ID', { exact: false }).count(), 1)
  assert.equal(await page.locator('#profile-tesAwardNumber').inputValue(), 'TEST-AWARD-0')
  const order = await page.locator('.profile-record-fields input').evaluateAll(inputs => inputs.map(input => input.id))
  assert.deepEqual(order, ['profile-tesAwardNumber', 'profile-studentId', 'profile-batchId', 'profile-recordStatus', 'profile-semester', 'profile-schoolYear', 'profile-lastName', 'profile-firstName', 'profile-middleInitial'])
  await page.locator('#profile-course').selectOption(completeInput.course)
  await page.locator('#profile-yearLevelCode').selectOption('2')
  await page.locator('#profile-sexCode').selectOption('0')
  await page.locator('#profile-birthDate').fill('2004-02-29')
  await page.locator('#profile-zipCode').fill('123')
  await page.getByRole('button', { name: 'Save Student Information', exact: true }).click()
  assert.equal(data.account.studentInformation, undefined)
  assert.equal(await page.evaluate(() => document.activeElement.name), 'zipCode')
  await page.locator('#profile-zipCode').fill('0123')
  await page.locator('#profile-emailAddress').fill(' CONTACT@Example.Invalid ')
  await page.getByRole('button', { name: 'Save Student Information', exact: true }).click()
  await page.getByRole('status').filter({ hasText: 'Successfully updated!' }).waitFor()
  await page.getByText('Profile Completion — 100%', { exact: true }).waitFor()
  assert.equal(data.account.email, 'login@example.invalid')
  assert.equal(data.account.studentInformation.zipCode, '0123')
  assert.equal(data.account.studentInformation.sexCode, 0)
  assert.equal(data.account.studentInformation.emailAddress, 'contact@example.invalid')
  assert.equal(await page.getByRole('dialog').count(), 0)
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  await page.locator('.profile-completion').scrollIntoViewIfNeeded()
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: `${out}/mobile-complete.png`, fullPage: true })
  await page.reload()
  await page.getByText('Profile Completion — 100%', { exact: true }).waitFor()
  assert.equal(await page.locator('#profile-zipCode').inputValue(), '0123')
  assert.equal(await page.getByRole('dialog').count(), 0)
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: `${out}/desktop-complete.png`, fullPage: true })
  // An incomplete profile is warned once for this login, including after remount/reload.
  data.account.studentInformation.birthDate = ''
  await page.reload()
  await page.getByText('Profile Completion — 91%', { exact: true }).waitFor()
  assert.equal(await page.getByRole('dialog').count(), 0)
  assert.equal(await page.locator('.profile-grid [aria-invalid="true"]').count(), 0)
  await page.getByRole('button', { name: 'Save Student Information', exact: true }).click()
  assert.equal(await page.evaluate(() => document.activeElement.name), 'birthDate')
  assert.equal(await page.locator('#profile-birthDate').getAttribute('aria-invalid'), 'true')
  assert.deepEqual(errors, [])
  console.log('PASS desktop/mobile: authenticated profile load → missing-fields warning → focus/highlight → invalid-save prevention → real server save → refreshed completion → persisted values after reload; no repeat warning or browser errors.')
} finally { await browser.close() }
