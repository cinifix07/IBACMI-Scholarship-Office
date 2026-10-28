import { useCallback } from 'react'
import { getFunctionName } from 'convex/server'
export { useQuery, useQueries, useConvex, useConvexConnectionState } from './billingBridge.jsx'
export function useMutation(reference) {
  const name = getFunctionName(reference)
  return useCallback(async args => {
    const payload = args?.bytes instanceof ArrayBuffer ? { ...args, bytes: Array.from(new Uint8Array(args.bytes)) } : args
    const result = await window.billingCall(name, payload)
    window.dispatchEvent(new Event('billing-refresh'))
    return result
  }, [name])
}
