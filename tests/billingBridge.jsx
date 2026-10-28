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

// The production safe-query adapter uses Convex's supported error-as-value API.
export function useQueries(queries) {
  const encoded = JSON.stringify(Object.fromEntries(Object.entries(queries).map(([key, value]) => [key, { name: getFunctionName(value.query), args: value.args }])))
  const [snapshot, setSnapshot] = useState(null)
  const [revision, setRevision] = useState(0)
  useEffect(() => {
    const refresh = () => setRevision(value => value + 1)
    window.addEventListener('billing-refresh', refresh)
    return () => window.removeEventListener('billing-refresh', refresh)
  }, [])
  useEffect(() => {
    let active = true
    const entries = Object.entries(JSON.parse(encoded))
    Promise.all(entries.map(async ([key, request]) => {
      try { return [key, await window.billingCall(request.name, request.args)] } catch (error) { return [key, new Error(error.message)] }
    })).then(results => { if (active) setSnapshot({ encoded, values: Object.fromEntries(results) }) })
    return () => { active = false }
  }, [encoded, revision])
  return snapshot?.encoded === encoded ? snapshot.values : {}
}
const testClient = { url: 'https://isolated-test.convex.cloud', connectionState: () => window.testConnectionState || { isWebSocketConnected: true, hasEverConnected: true, connectionRetries: 0 } }
export function useConvex() { return testClient }
export function useConvexConnectionState() {
  const [state, setState] = useState(() => window.testConnectionState || { isWebSocketConnected: true, hasEverConnected: true, connectionRetries: 0 })
  useEffect(() => { const update = () => setState({ ...window.testConnectionState }); window.addEventListener('test-connection', update); return () => window.removeEventListener('test-connection', update) }, [])
  return state
}
