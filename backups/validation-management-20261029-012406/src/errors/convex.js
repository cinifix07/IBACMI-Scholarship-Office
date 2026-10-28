import { useCallback, useContext, useEffect, useId, useMemo, useState } from 'react'
import { useQueries, useConvex, useMutation as useRawMutation, useAction as useRawAction } from 'convex/react'
import { getFunctionName, makeFunctionReference } from 'convex/server'
import { ServerRuntimeContext } from './runtimeContext.js'
import { freshQuery } from './connectivity.js'
import { reportError, resolveError } from './errorBus.js'
import { safeErrorMessage, validSessionToken } from './errorPolicy.js'

const protectedQueries = new Set([
  'batchExport:options',
  'noIdList:options',
  'noIdList:progress',
  'allinfo:listByStudentId', 'studentProfile:get', 'studentProfile:checkUploadAccess', 'applicants:list', 'applicants:getCourseCounts',
  'billing:options', 'billing:workspace', 'form2:settings', 'documentation:list', 'support:listConversations', 'support:listStudentConversations', 'quickActions:list',
])

export function useQuery(reference, args = {}) {
  const client = useConvex()
  const runtime = useContext(ServerRuntimeContext)
  const source = useId()
  const name = getFunctionName(reference)
  const stableReference = useMemo(() => makeFunctionReference(name), [name])
  const serialized = JSON.stringify(args)
  const request = useMemo(() => {
    if (serialized === '"skip"') return { skip: true, args: {} }
    const values = JSON.parse(serialized)
    if (protectedQueries.has(name)) {
      const token = values.sessionToken ?? runtime.sessionToken
      if (!validSessionToken(token)) return { skip: true, missingSession: true, args: {} }
      values.sessionToken = token
    }
    return { skip: false, args: values }
  }, [serialized, name, runtime.sessionToken])
  const key = name + ':' + JSON.stringify(request)
  const queries = useMemo(() => request.skip ? {} : { result: { query: stableReference, args: request.args } }, [request, stableReference])
  const result = useQueries(queries).result
  const [cache, setCache] = useState({ key, value: undefined, recoveredError: null })
  const healthy = result !== undefined && !(result instanceof Error)
  // A guarded render adjustment keeps cached data scoped to the exact request/account.
  if (cache.key !== key) setCache({ key, value: healthy ? result : undefined, recoveredError: null })
  else if (healthy && result !== cache.value) setCache({ key, value: result, recoveredError: null })
  const retry = useCallback(async () => {
    const value = await freshQuery(client.url, stableReference, request.args)
    setCache({ key, value, recoveredError: result })
  }, [client.url, stableReference, request.args, key, result])
  useEffect(() => {
    if (request.missingSession) reportError(Object.assign(new Error('Session expired'), { code: 'SESSION_EXPIRED' }), { source, operation: name, kind: 'query', canClose: false })
    else if (result instanceof Error && cache.recoveredError !== result) reportError(result, { source, operation: name, retry, kind: 'query', canClose: cache.key === key && cache.value !== undefined })
    else if (healthy || request.skip || cache.recoveredError === result) resolveError(source)
  }, [result, request.missingSession, request.skip, healthy, cache.recoveredError, cache.key, cache.value, key, name, source, retry])
  useEffect(() => () => resolveError(source), [source])
  if (request.skip) return undefined
  return healthy ? result : cache.key === key ? cache.value : undefined
}

function useSafeOperation(reference, rawOperation, kind) {
  const operation = getFunctionName(reference)
  return useCallback(async (...args) => {
    try {
      const result = await rawOperation(...args)
      resolveError(operation)
      if (result?.success === false && typeof result.message === 'string') return { ...result, message: safeErrorMessage(result.message, 'Please check your information and try again.') }
      return result
    } catch (error) {
      // No original request body or unsafe mutation retry is retained by the global coordinator.
      throw reportError(error, { operation, source: operation, kind, canClose: true })
    }
  }, [rawOperation, operation, kind])
}
export function useMutation(reference) { return useSafeOperation(reference, useRawMutation(reference), 'mutation') }
export function useAction(reference) { return useSafeOperation(reference, useRawAction(reference), 'action') }
