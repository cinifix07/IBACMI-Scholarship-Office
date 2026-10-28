import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'
const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud', { logger: false })
try {
  await Promise.all([
    assert.rejects(() => client.query(api.validation.options, { sessionToken: '' }), /Sign in as an administrator/),
    assert.rejects(() => client.query(api.validation.history, { sessionToken: '' }), /Sign in as an administrator/),
    assert.rejects(() => client.action(api.validationActions.run, { sessionToken: '', schoolYear: '2026-2027', batches: ['ACCESS-PROBE'], filename: 'access-probe.csv', bytes: new ArrayBuffer(0) }), /Sign in as an administrator/),
  ])
  console.log('PASS live development options, history and Node spreadsheet action reject missing administrator credentials before accessing or persisting student records.')
} catch {
  console.error('Development validation access checks could not be verified.')
  process.exitCode = 1
}
