// Read-only negative check against the configured development deployment.
import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'

const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud')
const args = { sessionToken: 'invalid-billing-access-check-session', schoolYear: '2025-2026', semester: '1st Semester' }
await Promise.all([
  assert.rejects(() => client.query(api.billing.options, { sessionToken: args.sessionToken }), /session expired|administrator/i),
  assert.rejects(() => client.query(api.billing.workspace, args), /session expired|administrator/i),
  assert.rejects(() => client.mutation(api.billing.preview, { ...args, batches: [] }), /session expired|administrator/i),
])
console.log('PASS development deployment: billing options, workspace and preview deny an invalid administrator session. No student data was read or changed.')
