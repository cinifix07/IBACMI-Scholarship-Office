import { classifyError, diagnosticFor, safeErrorMessage, UserFacingError } from './errorPolicy.js'

const listeners = new Set()
const failures = new Map()
const diagnostics = []
let snapshot = null
let sequence = 0
const priority = { session: 5, offline: 4, connection: 3, validation: 2, service: 1 }
function publish() {
  const visible = [...failures.values()].filter(item => !item.dismissed).sort((a, b) => priority[b.category] - priority[a.category])
  snapshot = visible[0] || null
  listeners.forEach(listener => listener())
}
export const subscribeErrors = listener => { listeners.add(listener); return () => listeners.delete(listener) }
export const getErrorSnapshot = () => snapshot
export const getPendingFailures = () => [...failures.values()].filter(item => !item.dismissed)
export const getSanitizedDiagnostics = () => diagnostics.map(item => ({ ...item }))
export function logSanitizedError(error, operation = 'application') { console.warn('[IBACMI]', diagnosticFor(error, operation)) }

export function reportError(error, { operation = 'application', source = operation, retry, kind = 'operation', canClose = true } = {}) {
  if (error?.isUserFacing) return error
  const category = classifyError(error)
  const existing = failures.get(source)
  const entry = { id: existing?.id || ++sequence, source, operation: diagnosticFor(error, operation).operation, category, kind, retry, canClose: category !== 'session' && canClose, dismissed: false }
  failures.set(source, entry)
  if (!existing || existing.category !== category) {
    const diagnostic = diagnosticFor(error, operation)
    diagnostics.push(diagnostic)
    if (diagnostics.length > 50) diagnostics.shift()
    // Never log an exception object, arguments, token, password, file name, or student data.
    console.warn('[IBACMI]', diagnostic)
  }
  publish()
  return new UserFacingError(category)
}
export function resolveError(source) { if (failures.delete(source)) publish() }
export function dismissErrors() { failures.forEach(item => { if (item.canClose) item.dismissed = true }); publish() }
export function resetErrors() { failures.clear(); publish() }
export function userErrorMessage(error, fallback, operation = 'application.operation') {
  const reviewed = safeErrorMessage(error, '')
  if (reviewed) return reviewed
  const publicError = reportError(error, { operation, canClose: true })
  return safeErrorMessage(publicError, fallback)
}
