import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'
const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud', { logger: false })
try {
  await assert.rejects(() => client.query(api.adminAuth.listStudentAccounts, { sessionToken: '' }), /Sign in as an administrator/)
  await assert.rejects(() => client.query(api.adminAuth.listStudentAccounts, { sessionToken: 'invalid-access-probe' }), /Administrator session expired/)
  console.log('PASS live Student Accounts list rejects missing and invalid administrator sessions.')
} catch {
  console.error('Live Student Accounts access check could not be verified.')
  process.exitCode = 1
}
