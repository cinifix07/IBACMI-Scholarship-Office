// Negative development checks only: no uploads or records are created.
import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'

const client = new ConvexHttpClient('https://ideal-crane-292.convex.cloud')
const sessionToken = 'invalid-documentation-access-check-session'
await assert.rejects(() => client.query(api.documentation.list, {
  sessionToken, search: '', status: 'all', sort: 'desc', page: 1,
}), /session expired|administrator/i)
await assert.rejects(() => client.mutation(api.documentation.beginUpload, {
  sessionToken, title: 'Access check', description: '', eventDate: '',
  displayOrder: 0, status: 'draft', mimeType: 'image/png', fileSize: 100,
}), /session expired|administrator/i)
const published = await client.query(api.documentation.published, {})
for (const row of published) {
  assert.equal(row.status, 'published')
  assert.equal('storageId' in row, false)
  assert.equal('uploadedBy' in row, false)
}
const image = await fetch('https://ideal-crane-292.convex.site/documentation/image?id=invalid')
assert.equal(image.status, 404)
assert.match(image.headers.get('cache-control'), /no-store/)
const upload = await fetch('https://ideal-crane-292.convex.site/documentation/upload', { method: 'POST' })
assert.equal(upload.status, 401)
console.log('PASS development access checks: admin operations denied, public metadata restricted, invalid image unavailable, unauthenticated upload denied. No records or files created.')
