import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { useConvex, useConvexConnectionState } from 'convex/react'
import IBACMIServerErrorModal from '../components/IBACMIServerErrorModal.jsx'
import { checkConnectivity } from './connectivity.js'
import { retryRead, validSessionToken } from './errorPolicy.js'
import { dismissErrors, getErrorSnapshot, getPendingFailures, reportError, resetErrors, resolveError, subscribeErrors } from './errorBus.js'
import { ServerRuntimeContext } from './runtimeContext.js'

export default function ServerErrorProvider({ session, onSignIn, children }) {
  const client = useConvex()
  const connection = useConvexConnectionState()
  const active = useSyncExternalStore(subscribeErrors, getErrorSnapshot, () => null)
  const [busy, setBusy] = useState(false)
  const recovering = useRef(false)
  const mounted = useRef(true)
  const token = validSessionToken(session?.sessionToken) ? session.sessionToken : null
  const previousToken = useRef(token)
  const runtime = useMemo(() => ({ sessionToken: token, coordinated: true }), [token])
  useEffect(() => { mounted.current = true; return () => { mounted.current = false } }, [])
  useEffect(() => { if (previousToken.current !== token) { previousToken.current = token; resetErrors() } }, [token])
  useEffect(() => {
    const offline = () => reportError(new TypeError('Network request failed while offline'), { source: 'connection.offline', operation: 'connection.monitor', canClose: true })
    const online = () => { /* An online browser signal alone does not prove server connectivity. */ }
    window.addEventListener('offline', offline)
    window.addEventListener('online', online)
    if (navigator.onLine === false) offline()
    return () => { window.removeEventListener('offline', offline); window.removeEventListener('online', online) }
  }, [])
  useEffect(() => {
    if (connection.isWebSocketConnected) { resolveError('connection.socket'); if (navigator.onLine !== false) resolveError('connection.offline'); return }
    // Do not call a normal initial handshake a disconnection.
    if (connection.connectionRetries < 2) return
    const timer = setTimeout(() => {
      if (navigator.onLine !== false) reportError(Object.assign(new Error('Connection failed'), { code: 'CONNECTION_FAILED' }), { source: 'connection.socket', operation: 'connection.monitor', canClose: true })
    }, 4000)
    return () => clearTimeout(timer)
  }, [connection.isWebSocketConnected, connection.connectionRetries])
  useEffect(() => {
    const rejection = event => { event.preventDefault(); reportError(event.reason, { operation: 'application.async', source: 'application.async', canClose: true }) }
    const exception = event => { if (event.error) { event.preventDefault(); reportError(event.error, { operation: 'application.event', source: 'application.event', canClose: true }) } }
    window.addEventListener('unhandledrejection', rejection)
    window.addEventListener('error', exception)
    return () => { window.removeEventListener('unhandledrejection', rejection); window.removeEventListener('error', exception) }
  }, [])

  const recover = useCallback(async () => {
    if (recovering.current) return
    recovering.current = true
    setBusy(true)
    let current = active
    const recoveryToken = token
    try {
      await retryRead(async () => {
        await checkConnectivity(client.url)
        if (!client.connectionState().isWebSocketConnected) throw Object.assign(new Error('Connection failed'), { code: 'CONNECTION_FAILED' })
      })
      // Only reads are automatically repeated. Mutations/actions need a deliberate user submission.
      for (const failure of getPendingFailures()) {
        if (previousToken.current !== recoveryToken) return
        current = failure
        if (failure.category === 'session') continue
        if (failure.kind === 'query' && failure.retry) {
          await retryRead(failure.retry)
        } else if (failure.kind === 'render' && failure.retry) {
          await failure.retry()
        }
        resolveError(failure.source)
      }
    } catch (error) {
      if (previousToken.current !== recoveryToken) return
      reportError(error, { source: current?.source || 'connection.recovery', operation: current?.operation || 'connection.recovery', kind: current?.kind || 'query', retry: current?.retry, canClose: current?.canClose || false })
    } finally {
      recovering.current = false
      if (mounted.current) setBusy(false)
    }
  }, [client, active, token])
  const signIn = () => { resetErrors(); onSignIn?.() }
  const category = active?.category || (navigator.onLine === false ? 'offline' : 'service')
  return <ServerRuntimeContext.Provider value={runtime}>
    {children}
    {active && <IBACMIServerErrorModal category={category} busy={busy} canClose={active.canClose} onRetry={recover} onSignIn={signIn} onClose={dismissErrors} />}
  </ServerRuntimeContext.Provider>
}
