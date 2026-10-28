import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import * as XLSX from 'xlsx'
import JSZip from 'jszip'
import { actions, backend, validationFixture } from './validationFixtures.mjs'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data = validationFixture(24), original = structuredClone(data.tables.allinfo), out = 'tmp/validation-check', base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office'
await fs.mkdir(out, { recursive: true })
const rows = data.tables.allinfo.map(row => [row.batchId, row.studentId, row.lastName, row.firstName, '', row.middleName]), headers = ['BATCH NO.', 'STUDENT ID', 'LAST NAME', 'FIRST NAME', 'EXT NAME', 'MIDDLE NAME']
const makeFile = (kind, values = [headers, ...rows]) => { const book = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(book, XLSX.utils.aoa_to_sheet(values), 'Students'); return Buffer.from(XLSX.write(book, { type: 'array', bookType: kind })) }
let validations = 0, release, gate
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block', acceptDownloads: true }), errors = []
  page.on('pageerror', error => { errors.push(error.message); console.error(error.message) })
  await page.exposeFunction('billingCall', async (name, args) => {
    if (name === 'validation:options') return backend.options.handler(data.ctx, args)
    if (name === 'validation:history') return backend.history.handler(data.ctx, args)
    if (name === 'validationActions:run') { validations++; if (gate) await gate; return actions.run.handler(data.ctx, { ...args, bytes: new Uint8Array(args.bytes).buffer }) }
    if (name === 'validationActions:results') return actions.results.handler(data.ctx, args)
    if (name === 'allinfo:list') return data.tables.allinfo
    if (name === 'adminAuth:listStudentAccounts') return []
    if (name === 'applicantPortal:get') return { isReceivingApplicants: false }
    if (['quickActions:list', 'activityLogs:list', 'applicants:list', 'support:listConversations'].includes(name)) return []
    throw new Error(`Unexpected isolated operation ${name}`)
  })
  data.onChange = () => page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQuery,useQueries,useConvex,useConvexConnectionState,useMutation,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/validationBridge.jsx';" }))
  await page.route('**/__validation-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/batchDownloadHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__validation-check')
  const nav = page.getByRole('button', { name: 'Validation Management', exact: true })
  await nav.click()
  const content = page.locator('.validation-page')
  await content.getByRole('heading', { name: 'Validation Management', exact: true }).waitFor()
  assert.equal(await content.evaluate(element => Boolean(element.closest('dialog'))), false)
  assert.equal(await nav.getAttribute('aria-current'), 'location')
  await content.locator('input[type=file]').setInputFiles({ name: 'students.xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', buffer: makeFile('xlsx') })
  await content.getByText('24 records', { exact: true }).waitFor()
  assert.equal(await content.locator('.validation-table-scroll').first().locator('tbody tr').count(), 10)
  await content.getByRole('combobox', { name: 'Select School Year', exact: true }).selectOption('2025-2026')
  await content.getByLabel('Search Batch', { exact: true }).fill('13.1')
  assert.equal(await content.getByRole('checkbox').count(), 1)
  await content.getByRole('button', { name: 'Select All', exact: true }).click()
  gate = new Promise(resolve => { release = resolve })
  await content.getByRole('button', { name: 'Start Validation', exact: true }).click()
  await content.getByText('Checking official grantee records...', { exact: true }).waitFor()
  assert.equal(await content.getByRole('button', { name: 'Start Validation', exact: true }).isDisabled(), true)
  await content.getByRole('button', { name: 'Start Validation', exact: true }).evaluate(element => element.click())
  release(); gate = null
  await content.getByText('Validation completed. Official grantee records were preserved.', { exact: true }).waitFor()
  await content.locator('.validation-comparison tbody tr').first().waitFor()
  assert.equal(validations, 1)
  assert.equal(await content.locator('.validation-comparison tbody tr').count(), 10)
  await content.getByRole('button', { name: 'Next', exact: true }).click()
  await content.getByText('24 results · Page 2 of 3', { exact: true }).waitFor()
  await content.getByRole('button', { name: 'Next', exact: true }).click()
  await content.getByText('24 results · Page 3 of 3', { exact: true }).waitFor()
  assert.equal(await content.locator('.validation-comparison tbody tr').count(), 4)
  await content.getByLabel('Search Student ID or Name', { exact: true }).fill('TEST-0001')
  await content.getByText('1 results · Page 1 of 1', { exact: true }).waitFor()
  await content.getByRole('button', { name: 'MATCHED', exact: true }).click()
  const details = page.getByRole('dialog', { name: 'Student Validation Details', exact: true })
  await details.waitFor(); assert.equal(await details.locator('input').count(), 0)
  await page.keyboard.press('Escape'); assert.equal(await details.count(), 0)
  await content.getByLabel('Search Student ID or Name', { exact: true }).fill('')
  await content.getByRole('combobox', { name: 'Status', exact: true }).selectOption('MISMATCHED')
  await content.getByText('No comparison results match these filters.', { exact: true }).waitFor()
  await content.getByRole('combobox', { name: 'Status', exact: true }).selectOption('')
  await content.getByText('24 results · Page 1 of 3', { exact: true }).waitFor()
  const pending = page.waitForEvent('download')
  await content.getByRole('button', { name: 'Download Excel Report', exact: true }).click()
  const download = await pending
  assert.equal(download.suggestedFilename(), 'IBACMI_VALIDATION_ALL_BATCHES_SY2025-2026.xlsx')
  await download.saveAs(out + '/validation-report.xlsx')
  const zip = await JSZip.loadAsync(await fs.readFile(out + '/validation-report.xlsx'))
  assert.equal(Object.keys(zip.files).filter(name => /worksheets\/sheet\d+\.xml/.test(name)).length, 8)
  assert.equal((await zip.file('xl/worksheets/sheet2.xml').async('string')).match(/<row /g).length, 31)
  await content.getByText('Your validation report is ready!', { exact: true }).waitFor()
  assert.equal(await content.locator('.validation-history article').count(), 1)
  await content.getByRole('button', { name: 'View results', exact: true }).click()
  for (const width of [320, 375, 425, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width < 500 ? 844 : 1100 })
    if (width < 768) await page.locator('.admin-sidebar').waitFor({ state: 'hidden' })
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
    await content.getByRole('heading', { name: 'Validation Management', exact: true }).scrollIntoViewIfNeeded()
    await page.screenshot({ path: `${out}/${width}px.png` })
    await content.locator('.validation-comparison').scrollIntoViewIfNeeded()
    await page.screenshot({ path: `${out}/${width}px-results.png` })
  }
  for (const kind of ['xls', 'csv']) {
    await content.locator('input[type=file]').setInputFiles({ name: `students.${kind}`, mimeType: 'application/octet-stream', buffer: makeFile(kind) })
    await content.getByText('24 records', { exact: true }).waitFor()
  }
  await content.locator('input[type=file]').setInputFiles({ name: 'missing-columns.xlsx', mimeType: 'application/octet-stream', buffer: makeFile('xlsx', [['Student ID'], ['00001']]) })
  await content.getByText('Required column BATCH NO is missing.', { exact: true }).waitFor()
  assert.deepEqual(data.tables.allinfo, original)
  assert.deepEqual(errors, [])
  console.log('PASS Validation Management: real sidebar and dedicated page, Worker parsing XLSX/XLS/CSV, server validation, exact-scope Select All, duplicate-click protection, 10/10/4 pagination, search/status/details, eight-sheet all-row XLSX, retained history, helpful import errors, six viewport sizes and no official writes.')
} catch (error) {
  for (const page of browser.contexts().flatMap(context => context.pages())) { await page.screenshot({ path: out + '/failure.png' }).catch(() => {}); console.error((await page.locator('body').innerText()).slice(-3500)) }
  throw error
} finally { await browser.close() }
