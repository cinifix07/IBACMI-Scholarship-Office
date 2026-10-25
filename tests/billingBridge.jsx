// Browser-test adapter only. Production uses convex/react directly.
import { useCallback, useEffect, useState } from 'react'
import { getFunctionName } from 'convex/server'

export function useQuery(ref, args = {}) {
  const [result, setResult] = useState(undefined)
  const [revision, setRevision] = useState(0)
  const key = JSON.stringify(args)
  const name = getFunctionName(ref)
  useEffect(() => {
    const refresh = () => setRevision(value => value + 1)
    window.addEventListener('billing-refresh', refresh)
    return () => window.removeEventListener('billing-refresh', refresh)
  }, [])
  useEffect(() => {
    let active = true
    if (key !== '"skip"') window.billingCall(name, JSON.parse(key)).then(value => { if (active) setResult({ key, value }) })
    return () => { active = false }
  }, [name, key, revision])
  return args === 'skip' || result?.key !== key ? undefined : result.value
}
export function useMutation(ref) {
  const name = getFunctionName(ref)
  return useCallback(async (args) => {
    const result = await window.billingCall(name, args)
    window.dispatchEvent(new Event('billing-refresh'))
    return result
  },[name])
}
