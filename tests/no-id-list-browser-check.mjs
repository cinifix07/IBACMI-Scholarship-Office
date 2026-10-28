import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import JSZip from 'jszip'
import { noIdFixture } from './noIdFixtures.mjs'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data = noIdFixture(24), base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office', out = 'tmp/no-id-list-check'
await fs.mkdir(out, { recursive: true })
data.tables.allinfo[0].frontIdStorageId = 'legacy-valid'; data.storage.set('legacy-valid', { size: 100, contentType: 'application/pdf' })
data.tables.allinfo[1].studentId = '0000123'; data.tables.allinfo[1].tesAwardNumber = '0000456'; data.tables.allinfo[1].lastName = '=HYPERLINK("unsafe")'
data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'prior-year', frontIdStorageId: undefined, schoolYear: '2024-2025' })
const original = structuredClone(data.tables.allinfo)
let exports = 0, inspectionCalls = 0, gate, release, onPrepareStart, failInspect = false, failExport = false
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block', acceptDownloads: true }), errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.exposeFunction('billingCall', async (name, args) => {
    if (name === 'noIdList:options') return data.handlers.options.handler(data.ctx, args)
    if (name === 'noIdList:inspect') { inspectionCalls++; if (failInspect) throw new Error('Synthetic verification service failure'); return data.handlers.inspect.handler(data.ctx, args) }
    if (name === 'noIdList:start') { inspectionCalls++; if (failInspect) throw new Error('Synthetic verification service failure'); const result = await data.handlers.start.handler(data.ctx, args); void data.drain(); return result }
    if (name === 'noIdList:progress') return data.handlers.progress.handler(data.ctx, args)
    if (name === 'noIdList:prepare') { exports++; onPrepareStart?.(); onPrepareStart = null; if (gate) await gate; if (failExport) throw new Error('Synthetic export failure'); return data.handlers.prepare.handler(data.ctx, args) }
    if (name === 'allinfo:list') return data.tables.allinfo
    if (name === 'adminAuth:listStudentAccounts') return []
    if (name === 'applicantPortal:get') return { isReceivingApplicants: false }
    if (['quickActions:list', 'activityLogs:list', 'applicants:list', 'support:listConversations'].includes(name)) return []
    throw new Error(`Unexpected isolated operation ${name}`)
  })
  data.onProgress = () => page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQuery,useQueries,useConvex,useConvexConnectionState,useMutation,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';" }))
  await page.route('**/__no-id-list-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/batchDownloadHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__no-id-list-check')
  await page.getByRole('button', { name: 'Download School ID File', exact: true }).click()
  await page.getByRole('button', { name: 'NO ID LIST', exact: true }).click()
  const modal = page.getByRole('dialog', { name: 'NO ID LIST — Missing School ID Submissions', exact: true })
  assert.equal(exports, 0); assert.equal(inspectionCalls, 0)
  await modal.getByLabel('School Year', { exact: true }).selectOption('2025-2026')
  await modal.getByRole('checkbox').first().waitFor()
  await modal.getByLabel('Search Batch').fill('1')
  assert.equal(await modal.getByRole('checkbox').count(), 1)
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  await modal.getByText('2 selected', { exact: true }).waitFor()
  assert.equal(await modal.locator('tbody tr').count(), 10)
  assert.match(await modal.locator('.no-id-list__stats').innerText(), /TOTAL GRANTEES\s+24\s+WITH SCHOOL ID\s+1\s+WITHOUT SCHOOL ID\s+23\s+SELECTED BATCHES\s+2/)
  await modal.getByRole('button', { name: 'Next', exact: true }).click()
  assert.equal(await modal.locator('tbody tr').count(), 10)
  await modal.getByRole('button', { name: 'Next', exact: true }).click()
  assert.equal(await modal.locator('tbody tr').count(), 3)
  const exportFile = async (filename, count) => {
    const pending = page.waitForEvent('download')
    await modal.getByRole('button', { name: 'Download NO ID List', exact: true }).click()
    const file = await pending
    assert.equal(file.suggestedFilename(), filename)
    const bytes = await fs.readFile(await file.path()), zip = await JSZip.loadAsync(bytes)
    const sheet = await zip.file('xl/worksheets/sheet1.xml').async('string')
    assert.equal((sheet.match(/<row /g) || []).length, count + 7)
    assert.match(await zip.file('xl/workbook.xml').async('string'), /name="NO ID LIST"/)
    assert.doesNotMatch(sheet, /<f[ >]/)
    await modal.getByText('Your file is ready!', { exact: true }).waitFor()
    await fs.writeFile(`${out}/${filename}`, bytes)
    return sheet
  }
  await modal.getByLabel('Search Missing Students').fill('0000456')
  assert.equal(await modal.locator('tbody tr').count(), 1)
  const searched = await exportFile('IBACMI_NO_ID_LIST_SY2025-2026.xlsx', 1)
  assert.match(searched, /0000123/); assert.match(searched, /0000456/); assert.match(searched, /=HYPERLINK/)
  await modal.getByLabel('Search Missing Students').fill('')
  await modal.getByRole('button', { name: 'Deselect All', exact: true }).click()
  await modal.getByLabel('Search Batch').fill('2')
  await modal.getByRole('checkbox').check()
  await exportFile('IBACMI_NO_ID_LIST_BATCH_2_SY2025-2026.xlsx', 12)
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  await exportFile('IBACMI_NO_ID_LIST_SY2025-2026.xlsx', 23)
  await modal.getByLabel('School Year', { exact: true }).selectOption('2024-2025')
  await modal.getByRole('checkbox').first().waitFor()
  await modal.getByText('0 selected', { exact: true }).waitFor()
  assert.equal(await modal.getByRole('button', { name: 'Download NO ID List', exact: true }).isDisabled(), true)
  await modal.getByLabel('School Year', { exact: true }).selectOption('2025-2026')
  await modal.getByRole('checkbox').first().waitFor()
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  for (const width of [320, 375, 425, 768, 1024, 1440]) {
    const height = width < 500 ? 640 : 1000
    await page.setViewportSize({ width, height })
    assert.equal(await modal.evaluate(element => element.scrollWidth <= element.clientWidth), true)
    const bounds = await modal.boundingBox(), footer = await modal.locator('footer').boundingBox()
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= width + 1)
    assert.ok(footer.y + footer.height <= height)
    await modal.locator('.download-batch__body').evaluate(element => { element.scrollTop = 0 })
    await page.screenshot({ path: `${out}/${width}px-selection.png` })
    await modal.locator('.no-id-list__table').scrollIntoViewIfNeeded()
    assert.equal(await modal.locator('.no-id-list__table').evaluate(element => element.scrollWidth > element.clientWidth), true)
    await page.screenshot({ path: `${out}/${width}px.png` })
  }
  await page.setViewportSize({ width: 320, height: 568 })
  gate = new Promise(resolve => { release = resolve })
  const before = exports
  const started = new Promise(resolve => { onPrepareStart = resolve })
  const button = modal.getByRole('button', { name: 'Download NO ID List', exact: true })
  await button.click()
  await modal.getByText('Checking School ID submissions...', { exact: true }).waitFor()
  await started
  await button.evaluate(element => { element.click(); element.click() })
  assert.equal(exports, before + 1)
  assert.equal(await modal.locator('[aria-valuenow]').count(), 0)
  await page.keyboard.press('Escape'); assert.equal(await modal.evaluate(element => element.open), true)
  await page.screenshot({ path: out + '/loading-mobile.png' })
  const pending = page.waitForEvent('download'); release(); gate = null; await pending
  await modal.getByText('Your file is ready!', { exact: true }).waitFor()
  failExport = true
  await button.click()
  await page.locator('.ibacmi-server-error').getByRole('button', { name: 'Close', exact: true }).click()
  await modal.getByText('Unable to prepare the Excel report. Please try again.', { exact: true }).waitFor()
  failExport = false
  const retryDownload = page.waitForEvent('download')
  await modal.getByRole('button', { name: 'Retry Excel Download', exact: true }).click(); await retryDownload
  await modal.getByText('Your file is ready!', { exact: true }).waitFor()
  failInspect = true
  await modal.getByRole('button', { name: 'Refresh submissions', exact: true }).click()
  await page.locator('.ibacmi-server-error').getByRole('button', { name: 'Close', exact: true }).click()
  assert.equal(await button.isDisabled(), true)
  failInspect = false
  await modal.getByRole('button', { name: 'Retry verification', exact: true }).click()
  await modal.getByRole('checkbox').first().waitFor()
  // Reproduce a real year with pending Drive work: confirmed missing rows remain usable.
  let finishDrive
  const driveGate = new Promise(resolve => { finishDrive = resolve })
  data.beforeFetch = () => driveGate
  const driveRow = data.tables.allinfo[2]
  driveRow.frontIdUrl = 'https://drive.google.com/file/d/slow-verified-file/view'
  data.drive.set('slow-verified-file', { state: 'valid', year: driveRow.schoolYear, studentId: driveRow.studentId })
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByText('Checking School ID submissions...', { exact: true }).waitFor()
  await modal.getByText('1 pending verification', { exact: false }).waitFor()
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  assert.ok(await modal.locator('tbody tr').count() > 0, 'Known missing records must appear while uploaded files are pending')
  assert.equal(await button.isDisabled(), true)
  await page.screenshot({ path: out + '/background-gathering.png' })
  finishDrive()
  await modal.getByText('Checking School ID submissions...', { exact: true }).waitFor({ state: 'detached' })
  assert.equal(await button.isDisabled(), false)
  assert.match(await modal.locator('.no-id-list__stats').innerText(), /WITHOUT SCHOOL ID\s+22/)
  delete driveRow.frontIdUrl
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByRole('checkbox').first().waitFor()
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await modal.evaluate(element => getComputedStyle(element).animationName), 'none')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'NO ID LIST', exact: true }).waitFor()
  assert.deepEqual(data.tables.allinfo, original)
  assert.deepEqual(errors, [])
  console.log('PASS NO ID LIST: actual dashboard entry with no Drive uploads, verified legacy counts, single/multiple/all selections, 10-row pagination, search across all export pages, real styled XLSX downloads, leading-zero/formula safety, six viewports, pending operations/duplicate clicks, failure and Retry, verification failure blocking, keyboard/reduced motion, no grantee writes.')
} catch (error) {
  for (const page of browser.contexts().flatMap(context => context.pages())) { await page.screenshot({ path: out + '/failure.png' }).catch(() => {}); console.error((await page.locator('body').innerText()).slice(-2500)) }
  throw error
} finally { await browser.close() }
