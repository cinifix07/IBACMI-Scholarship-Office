import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { fixture } from './billingFixtures.mjs'
import JSZip from 'jszip'
import { jsPDF } from 'jspdf'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office'
const out = 'tmp/loader-check'
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block', acceptDownloads: true })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  let releaseMain, releasePortal, releaseLogin
  const mainGate = new Promise(resolve => { releaseMain = resolve })
  const portalGate = new Promise(resolve => { releasePortal = resolve })
  const loginGate = new Promise(resolve => { releaseLogin = resolve })
  const data = fixture(1)
  data.tables.allinfo[0].frontIdUrl = 'https://drive.google.com/synthetic-school-id'
  const pdf = new jsPDF()
  pdf.text('SYNTHETIC School ID fixture', 10, 10)
  const idBytes = Buffer.from(pdf.output('arraybuffer'))
  let failIdTransfer = true
  await page.route('**/google-drive/file?*', route => {
    if (failIdTransfer) return route.fulfill({ status: 503, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: '{}' })
    return route.fulfill({ contentType: 'application/pdf', headers: { 'Access-Control-Allow-Origin': '*' }, body: idBytes })
  })
  const account = { id: 'synthetic-account', schoolId: 'TEST-0001', email: 'synthetic@example.invalid', phoneNumber: '09123456789', role: 'student', status: 'active' }
  const routeBridge = "export {useQuery,useMutation,useQueries,useConvex,useConvexConnectionState,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';export function ConvexProvider({children}){return children}export class ConvexReactClient{constructor(url){this.url=url}}"
  await page.exposeFunction('billingCall', async (name) => {
    if (name === 'applicantPortal:get') { await portalGate; return { isReceivingApplicants: false } }
    if (name === 'adminAuth:login') { await loginGate; return { success: false, message: 'Synthetic test credentials rejected.' } }
    if (name === 'allinfo:list') return data.tables.allinfo
    if (name === 'adminAuth:listStudentAccounts') return [account]
    if (name === 'documentation:published' || name === 'activityLogs:list' || name === 'quickActions:list' || name === 'applicants:list' || name === 'allinfo:searchPublic') return []
    throw new Error(`Unexpected isolated test call: ${name}`)
  })
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: routeBridge }))
  await page.route('**/src/main.jsx*', async route => { await mainGate; await route.continue() })
  await page.goto(base + '/', { waitUntil: 'commit' })
  const boot = page.locator('#ibacmi-boot-loader')
  await boot.waitFor()
  assert.equal(await boot.getByRole('progressbar').count(), 0)
  await boot.locator('img').evaluate(img => img.decode())
  await page.screenshot({ path: out + '/initial-page.png' })
  releaseMain()
  await page.getByRole('button', { name: 'SIGN IN', exact: true }).waitFor()
  await boot.waitFor({ state: 'detached' })
  await page.getByText('Loading UniFAST information…', { exact: true }).waitFor()
  assert.equal(await page.locator('.landing-main .ibacmi-loader [role="progressbar"]').count(), 0)
  releasePortal()
  await page.getByText('Loading UniFAST information…', { exact: true }).waitFor({ state: 'detached' })
  assert.equal(await page.locator('.portal-cta').count(), 0)
  await page.getByRole('button', { name: 'SIGN IN', exact: true }).click()
  await page.getByRole('button', { name: /Oo, naa na koy account/ }).click()
  await page.getByPlaceholder('Enter your official registered email or School ID').fill('test@example.invalid')
  await page.locator('input[name="adminPassword"]').fill('synthetic-password')
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await page.getByText('Signing you in securely…', { exact: true }).waitFor()
  assert.equal(await page.locator('.admin-login-actions [role="progressbar"]').count(), 0)
  releaseLogin()
  await page.getByText('Please check your information and try again.', { exact: true }).waitFor()
  assert.equal(await page.getByPlaceholder('Enter your official registered email or School ID').inputValue(), 'test@example.invalid')
  assert.equal(await page.locator('input[name="adminPassword"]').inputValue(), 'synthetic-password')
  assert.equal(await page.getByRole('button', { name: 'Login', exact: true }).isDisabled(), false)
  await page.route('**/__loading-pages-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/loadingPagesHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__loading-pages-check')
  await page.getByRole('button', { name: /Export to CSV Batch Info/ }).click()
  await page.getByRole('dialog', { name: 'Choose Batch', exact: true }).locator('.admin-school-year-button').first().click()
  await page.getByRole('dialog', { name: 'Choose School Year', exact: true }).locator('.admin-school-year-button').first().click()
  await page.getByRole('dialog', { name: 'Choose Semester', exact: true }).locator('.admin-school-year-button').first().click()
  const download = page.waitForEvent('download').catch(() => null)
  await page.getByRole('alertdialog', { name: 'Download this batch information?', exact: true }).getByRole('button', { name: /Yes/ }).click()
  await page.locator('.ibacmi-file-dialog .ibacmi-loader--success,.ibacmi-file-dialog .ibacmi-loader--error').waitFor()
  const file = await download
  await file.saveAs(out + '/admin-batch-info.csv')
  const status = page.getByRole('dialog', { name: 'File preparation status' })
  await status.getByText('Your file is ready!', { exact: true }).waitFor()
  assert.equal(await status.getByRole('progressbar').getAttribute('aria-valuenow'), '100')
  assert.match(await fs.readFile(out + '/admin-batch-info.csv', 'utf8'), /TEST-0001/)
  await page.screenshot({ path: out + '/admin-csv-ready.png' })
  await status.getByRole('button', { name: 'Close', exact: true }).click()
  await page.getByRole('button', { name: /Download School ID File/ }).click()
  await page.getByRole('dialog', { name: 'Choose School Year', exact: true }).locator('.admin-school-year-button').first().click()
  await page.locator('.admin-school-year-button').filter({ hasText: /1 file/ }).last().click()
  await page.getByRole('dialog', { name: 'Manage School ID Files', exact: true }).getByRole('button', { name: /Download All IDs/ }).click()
  await status.getByRole('button', { name: 'Retry', exact: true }).waitFor()
  assert.equal(await status.getByRole('progressbar').count(), 0)
  failIdTransfer = false
  const zipDownload = page.waitForEvent('download')
  await status.getByRole('button', { name: 'Retry', exact: true }).click()
  await (await zipDownload).saveAs(out + '/school-id-batch.zip')
  await status.getByText('Your file is ready!', { exact: true }).waitFor()
  const zip = await JSZip.loadAsync(await fs.readFile(out + '/school-id-batch.zip'))
  assert.equal(Object.values(zip.files).filter(file => !file.dir).length, 1)
  assert.deepEqual(Buffer.from(await Object.values(zip.files).find(file => !file.dir).async('uint8array')), idBytes)
  await status.getByRole('button', { name: 'Close', exact: true }).click()
  const failedPage = await browser.newPage({ serviceWorkers: 'block' })
  await failedPage.route('**/src/main.jsx*', route => route.abort())
  await failedPage.goto(base + '/')
  await failedPage.locator('#ibacmi-boot-loader').getByRole('button', { name: 'Retry', exact: true }).waitFor()
  assert.equal(await failedPage.locator('#ibacmi-boot-loader').getAttribute('aria-busy'), 'false')
  await failedPage.close()
  assert.deepEqual(errors, [])
  console.log('PASS initial page and script-failure Retry; pending portal/login states and credential recovery; real admin CSV output; failed School ID batch transfer → branded Retry → valid ZIP containing the original synthetic PDF. All data and external transfers isolated.')
} finally { await browser.close() }
