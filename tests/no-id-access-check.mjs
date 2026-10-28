// No credentials, file IDs, or real student records are supplied by this negative check.
import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'
const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud', { logger: false })
try {
  await Promise.all([
    assert.rejects(() => client.query(api.noIdList.options, { sessionToken: '' }), /Sign in as an administrator/),
    assert.rejects(() => client.mutation(api.noIdList.start, { sessionToken: '', schoolYear: '2026-2027' }), /Sign in as an administrator/),
    assert.rejects(() => client.action(api.noIdList.inspect, { sessionToken: '', schoolYear: '2026-2027' }), /Sign in as an administrator/),
    assert.rejects(() => client.action(api.noIdList.prepare, { sessionToken: '', schoolYear: '2026-2027', batches: ['ACCESS-PROBE'] }), /Sign in as an administrator/),
  ])
  console.log('PASS development deployment: NO ID options, verification and export require administrator authorization. No student records or files accessed.')
} catch {
  console.error('Development NO ID authorization checks could not be verified.')
  process.exitCode = 1
}
