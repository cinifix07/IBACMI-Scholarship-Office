import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { batchFixture, handlers } from './batchExportFixtures.mjs'
const { chromium } = await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data = batchFixture(), base = 'http://127.0.0.1:5174/IBACMI-Scholarship-Office', out = 'tmp/batch-download-check'
await fs.mkdir(out, { recursive: true })
const originalRecords = structuredClone(data.tables.allinfo)
let prepareCalls = 0, gate, release, fail = false
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'block', acceptDownloads: true }), errors = []
  page.on('pageerror', error => { errors.push(error.message); console.error(error.message) })
  page.on('console', message => { if (message.type() === 'error') console.error(message.text()) })
  await page.exposeFunction('billingCall', async (name, args) => {
    if (name === 'batchExport:options') return handlers.options.handler(data.ctx, args)
    if (name === 'batchExport:prepare') { prepareCalls++; if (gate) await gate; if (fail) throw new Error('Synthetic backend export failure'); return handlers.prepare.handler(data.ctx, args) }
    if (name === 'allinfo:list') return data.tables.allinfo
    if (name === 'adminAuth:listStudentAccounts') return data.tables.admins.filter(row => row.role === 'student')
    if (name === 'applicantPortal:get') return { isReceivingApplicants: false }
    if (['quickActions:list', 'activityLogs:list', 'applicants:list', 'support:listConversations'].includes(name)) return []
    throw new Error(`Unexpected isolated operation ${name}`)
  })
  await page.route('**/node_modules/.vite/deps/convex_react.js*', route => route.fulfill({ contentType: 'text/javascript', body: "export {useQuery,useQueries,useConvex,useConvexConnectionState,useMutation,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';" }))
  await page.route('**/__batch-download-check', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/batchDownloadHarness.jsx"></script></body></html>' }))
  await page.goto(base + '/__batch-download-check')
  const opener = page.getByRole('button', { name: 'Download Batch', exact: true })
  await opener.click()
  const modal = page.locator('.download-batch'), download = modal.getByRole('button', { name: 'Download Batch', exact: true })
  await modal.getByLabel('Select School Year').selectOption('2025-2026')
  assert.equal(prepareCalls, 0, 'Opening the modal must not export immediately')
  assert.equal(await download.isDisabled(), true)
  assert.equal(await modal.getByRole('checkbox').count(), 4)
  const exportFile = async (expectedFilename, expectedCount) => {
    const pending = page.waitForEvent('download')
    await download.click()
    const file = await pending
    assert.equal(file.suggestedFilename(), expectedFilename)
    const bytes = await fs.readFile(await file.path(), 'utf8')
    const rows = bytes.split('\n').map(line => line.split(',').map(value => value.slice(1, -1)))
    assert.equal(rows.length, expectedCount + 1)
    for (const row of rows.slice(1)) { assert.equal(row.length, 13); assert.equal(row[6], '2025-2026'); assert.notEqual(row[0], '99') }
    await modal.getByText('Download Ready!', { exact: true }).waitFor()
    return rows
  }
  await modal.getByRole('checkbox').first().check()
  const single = await exportFile('IBACMI_Batch_13_SY2025-2026.csv', 2)
  assert.deepEqual(new Set(single.slice(1).map(row => row[7])), new Set(['1st Semester', '2nd Semester']))
  await modal.getByRole('checkbox').nth(2).check()
  const multi = await exportFile('IBACMI_Batches_13-14_SY2025-2026.csv', 4)
  assert.deepEqual(new Set(multi.slice(1).map(row => row[0])), new Set(['13', '14']))
  await modal.getByRole('button', { name: 'Deselect All', exact: true }).click()
  await modal.getByLabel('Search Batch').fill('13.1')
  assert.equal(await modal.getByRole('checkbox').count(), 1)
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  await modal.getByText('4 selected', { exact: true }).waitFor()
  await exportFile('IBACMI_All_Batches_SY2025-2026.csv', 8)
  const removed = data.tables.allinfo.filter(row => row.batchId === '15')
  data.tables.allinfo = data.tables.allinfo.filter(row => row.batchId !== '15')
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByText('3 selected', { exact: true }).waitFor()
  data.tables.allinfo.push(...removed)
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByLabel('Search Batch').fill('15')
  await modal.getByRole('checkbox').waitFor()
  assert.equal(await modal.getByRole('checkbox').isChecked(), false, 'Removed batches must not silently become selected again')
  await modal.getByLabel('Select School Year').selectOption('2024-2025')
  assert.equal(await modal.getByRole('checkbox').count(), 1)
  await modal.getByText('0 selected', { exact: true }).waitFor()
  assert.equal(await download.isDisabled(), true)
  await modal.getByLabel('Select School Year').selectOption('2025-2026')
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  for (const width of [320, 375, 425, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width < 500 ? 568 : 900 })
    assert.equal(await modal.evaluate(element => element.scrollWidth <= element.clientWidth), true)
    const bounds = await modal.boundingBox(), footer = await modal.locator('footer').boundingBox()
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= width + 1)
    assert.ok(footer.y >= 0 && footer.y + footer.height <= (width < 500 ? 568 : 900))
    await page.screenshot({ path: `${out}/${width}px.png` })
  }
  const extra = Array.from({ length: 35 }, (_, i) => ({ ...data.tables.allinfo[0], _id: `long-list-${i}`, batchId: `Extra ${i}` }))
  data.tables.allinfo.push(...extra)
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByLabel('Search Batch').fill('Extra 1')
  await modal.getByRole('button', { name: 'Select All', exact: true }).click()
  await modal.getByText('39 selected', { exact: true }).waitFor()
  await modal.getByLabel('Search Batch').fill('')
  assert.equal(await modal.locator('.download-batch__list').evaluate(element => element.scrollHeight > element.clientHeight), true)
  data.tables.allinfo = originalRecords.map(row => structuredClone(row))
  await page.evaluate(() => window.dispatchEvent(new Event('billing-refresh')))
  await modal.getByText('4 selected', { exact: true }).waitFor()
  // Exercise actual pending work, repeated clicks, safe failures and deliberate retries.
  await page.setViewportSize({ width: 320, height: 568 })
  gate = new Promise(resolve => { release = resolve })
  const beforeCalls = prepareCalls
  await download.click()
  await modal.getByRole('heading', { name: 'Preparing Your Download' }).waitFor()
  await page.waitForFunction(() => document.querySelector('.download-batch__preparing .ibacmi-loader__message')?.textContent === 'Fetching Grantee Records')
  assert.equal(await download.isDisabled(), true)
  await download.evaluate(element => { element.click(); element.click() })
  assert.equal(prepareCalls, beforeCalls + 1)
  assert.equal(await modal.locator('[aria-valuenow]').count(), 0, 'No invented percentage during indeterminate generation')
  await page.keyboard.press('Escape')
  assert.equal(await modal.evaluate(element => element.open), true)
  await page.screenshot({ path: out + '/loading-mobile.png' })
  const completed = page.waitForEvent('download'); release(); gate = null
  await completed; await modal.getByText('Download Ready!', { exact: true }).waitFor()
  fail = true
  await download.click()
  await page.locator('.ibacmi-server-error').getByRole('button', { name: 'Close', exact: true }).click()
  await modal.getByText('Download Failed', { exact: true }).waitFor()
  assert.equal(await modal.getByText('Download Ready!', { exact: true }).count(), 0)
  fail = false
  const retried = page.waitForEvent('download')
  await modal.getByRole('button', { name: 'Retry', exact: true }).click()
  await retried
  await modal.getByText('Download Ready!', { exact: true }).waitFor()
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await modal.evaluate(element => getComputedStyle(element).animationName), 'none')
  await page.keyboard.press('Escape')
  assert.equal(await modal.count(), 0)
  assert.equal(await opener.evaluate(element => element === document.activeElement), true)
  assert.deepEqual(data.tables.allinfo, originalRecords)
  assert.deepEqual(errors, [])
  assert.equal(data.tables.activityLogs.length, 5)
  console.log('PASS Download Batch: actual admin entry, original CSV mapping, single/multiple/all selections, cross-year isolation, exact-duplicate removal, global Select All during search, six viewport sizes, pending work/duplicate clicks, no fake progress, safe failure and retry, keyboard/focus/reduced motion, activity logs and no grantee writes.')
} catch (error) {
  for (const page of browser.contexts().flatMap(context => context.pages())) {
    await page.screenshot({ path: out + '/failure.png' }).catch(() => {})
    console.error((await page.locator('body').innerText()).slice(0, 1600))
  }
  throw error
} finally { await browser.close() }
