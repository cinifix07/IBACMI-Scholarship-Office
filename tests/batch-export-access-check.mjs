// Negative authorization checks only; never read or export live student records.
import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'

const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud', { logger: false })
try {
  await Promise.all([
    assert.rejects(() => client.query(api.batchExport.options, { sessionToken: '' }), /Sign in as an administrator/),
    assert.rejects(() => client.mutation(api.batchExport.prepare, { sessionToken: '', schoolYear: '2026-2027', batches: ['AUTHORIZATION-PROBE'] }), /Sign in as an administrator/),
  ])
  console.log('PASS development deployment: batch options and export preparation deny missing administrator credentials before reading records or creating logs.')
} catch {
  console.error('Development batch-export authorization check could not be verified.')
  process.exitCode = 1
}
