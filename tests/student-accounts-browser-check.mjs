import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { handlers, accountsFixture } from './studentAccountsFixtures.mjs'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data = accountsFixture(), out = 'tmp/student-accounts-check', base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office'
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block' }), errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.exposeFunction('billingCall', async (name, args) => {
    if (name.startsWith('adminAuth:') && handlers[name.split(':')[1]]) return handlers[name.split(':')[1]].handler(data.ctx, args)
    if (name === 'allinfo:list') return []
    if (name === 'applicantPortal:get') return { isReceivingApplicants: false }
    if (['quickActions:list', 'activityLogs:list', 'applicants:list', 'support:listConversations'].includes(name)) return []
    throw new Error(`Unexpected isolated operation ${name}`)
  })
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQuery,useQueries,useConvex,useConvexConnectionState,useMutation,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';" }))
  await page.route('**/__student-accounts-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/batchDownloadHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__student-accounts-check')
  await page.getByRole('button', { name: 'User Management', exact: true }).click()
  const modal = page.getByRole('dialog', { name: 'Student Accounts', exact: true }), table = modal.locator('.admin-users-table'), search = modal.getByRole('searchbox')
  await table.getByRole('button', { name: 'View student account 000001', exact: true }).waitFor()
  assert.deepEqual(await table.locator('th').allTextContents(), ['No.', 'Student ID', 'Last Name', 'First Name', 'Middle Name', 'Complete Permanent Address', 'Email Address', 'Phone Number', 'Facebook Profile', 'Actions'])
  assert.equal(await table.locator('tbody tr').count(), 5)
  await modal.getByRole('button', { name: 'Next users page' }).click()
  await table.getByRole('button', { name: 'View student account 000006', exact: true }).waitFor()
  await modal.getByRole('button', { name: 'Next users page' }).click()
  assert.equal(await table.locator('tbody tr').count(), 2)
  for (const value of ['000001', 'FAMILY 1', 'Given 1 Middle Family 1', 'Family 1 Given 1 Middle', 'Purok 1, Test', 'student1@', 'synthetic.account']) {
    await search.fill(value)
    await table.getByRole('button', { name: 'View student account 000001', exact: true }).waitFor()
    assert.equal(await table.locator('tbody tr').count(), value === 'FAMILY 1' ? 4 : 1)
  }
  await search.fill('09123456789'); assert.equal(await table.locator('tbody tr').count(), 5)
  await search.fill('no-such-student'); await table.getByText('No student accounts found.').waitFor()
  await search.fill('000001')
  await table.locator('tbody tr').first().click()
  const details = page.getByRole('dialog', { name: 'Student Account Details', exact: true })
  await details.waitFor()
  assert.equal(await details.getByText('Given 1 Middle Family 1', { exact: true }).count(), 1)
  await page.keyboard.press('Escape'); await details.waitFor({ state: 'hidden' })
  await table.getByRole('button', { name: 'Edit student1@example.invalid', exact: true }).click()
  assert.equal(await details.count(), 0)
  const edit = page.getByRole('dialog', { name: 'Update Account' })
  await edit.getByLabel('Email Address').fill('updated@example.invalid')
  await edit.getByRole('button', { name: 'Save Changes' }).click()
  await edit.waitFor({ state: 'hidden' })
  await table.getByText('updated@example.invalid', { exact: true }).waitFor()
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    if (width < 768) await page.locator('.admin-sidebar').waitFor({ state: 'hidden' })
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
    assert.equal(await modal.locator('.admin-users-table-wrap').evaluate(el => el.scrollWidth > el.clientWidth), true)
    assert.equal(await table.locator('thead').evaluate(el => getComputedStyle(el).position), 'sticky')
    assert.equal(await modal.locator('section.admin-modal-card--users').evaluate(el => el.getBoundingClientRect().height <= innerHeight * .9 + 1), true)
    await table.getByRole('button', { name: 'View student account 000001', exact: true }).click()
    await details.waitFor()
    await page.screenshot({ path: `${out}/${width}px-details.png` })
    await details.getByRole('button', { name: 'Close', exact: true }).click()
    await table.getByRole('button', { name: 'Delete updated@example.invalid', exact: true }).scrollIntoViewIfNeeded()
    await page.screenshot({ path: `${out}/${width}px.png` })
  }
  await table.getByRole('button', { name: 'Delete updated@example.invalid', exact: true }).click()
  assert.equal(await details.count(), 0)
  const confirm = page.getByRole('alertdialog', { name: 'Delete user account?' })
  await confirm.getByRole('button', { name: 'Delete User', exact: true }).click()
  await confirm.waitFor({ state: 'hidden' })
  await table.getByText('No student accounts found.').waitFor()
  assert.equal(data.tables.archive.length, 1)
  assert.equal(data.tables.allinfo.length, 12)
  assert.deepEqual(errors, [])
  console.log('Student Accounts browser flow passed: real handlers, 10 columns, 5-row pagination, expanded search, details, edit/archive, 5 responsive widths.')
} finally { await browser.close() }
