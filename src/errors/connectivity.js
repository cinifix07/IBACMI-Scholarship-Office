import { ConvexHttpClient } from 'convex/browser'
import { api } from '../../convex/_generated/api'

export function freshQuery(url, reference, args) {
  const client = new ConvexHttpClient(url, { logger: false, fetch: (input, options) => fetch(input, { ...options, signal: AbortSignal.timeout(8000) }) })
  return client.query(reference, args)
}
export async function checkConnectivity(url) {
  if (navigator.onLine === false) throw new TypeError('Network request failed while offline')
  const result = await freshQuery(url, api.connectionHealth.check, {})
  if (result?.ok !== true) throw new Error('Health check failed')
  return true
}
