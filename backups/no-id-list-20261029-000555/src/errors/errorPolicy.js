export const ERROR_MESSAGES = {
  connection: { title: 'The Server Is Not Connected', description: "We couldn't connect to the server right now. Please check your internet connection or try again in a moment.", action: 'Retry Connection' },
  session: { title: 'Session Expired', description: 'Your session has expired. Please sign in again.', action: 'Sign In Again' },
  validation: { title: 'Unable to Load Information', description: "We couldn't process your request. Please try again or contact the administrator.", action: 'Try Again' },
  service: { title: 'Service Temporarily Unavailable', description: 'Something went wrong while processing your request.', action: 'Try Again' },
  offline: { title: 'No Internet Connection', description: 'Please check your internet connection and reconnect.', action: 'Retry Connection' },
}

export function validSessionToken(value) { return typeof value === 'string' && value.trim().length > 0 && value.length <= 100 }
export function validStoredSession(value, role) { return Boolean(value && value.role === role && validSessionToken(value.sessionToken) && (role !== 'student' || (typeof value.schoolId === 'string' && value.schoolId.trim()))) }

export function classifyError(error, { online = typeof navigator === 'undefined' || navigator.onLine !== false } = {}) {
  if (error?.isUserFacing && ERROR_MESSAGES[error.category]) return error.category
  const code = error?.data?.code || error?.code
  const message = String(error?.message || '')
  if (code === 'SESSION_EXPIRED') return 'session'
  if (code === 'INVALID_REQUEST' || /ArgumentValidationError|missing (?:the )?required field|Could not find public function|does not match the validator|Object contains extra field|InvalidArgument/i.test(message)) return 'validation'
  if (/start a new conversation/i.test(message)) return 'validation'
  if (/(?:session.{0,30}(?:expired|invalid)|please sign in again|sign in as an administrator|account is no longer active|active (?:student|administrator) account is required)/i.test(message)) return 'session'
  if (/only (?:update|upload|access) your own|not authorized|permission denied/i.test(message)) return 'validation'
  if (/^(?:Select |Choose |Enter |Use a valid |Please (?:select|choose|enter|complete)|Only (?:PDF|PNG)|Each file|Your profile changed|Submitted na)/i.test(message)) return 'validation'
  if (!online) return 'offline'
  // A backend exception mentioning its own failed fetch is not proof the app server is unreachable.
  if (/\[CONVEX [QMA]|\[Request ID:|Uncaught Error:|Server Error|ConvexError/i.test(message)) return 'service'
  if (code === 'CONNECTION_FAILED' || /Failed to fetch|fetch failed|NetworkError|Network request failed|ERR_(?:CONNECTION|NETWORK|INTERNET|NAME_NOT_RESOLVED)|ECONN(?:REFUSED|RESET)|ENOTFOUND/i.test(message)) return 'connection'
  return 'service'
}

export class UserFacingError extends Error {
  constructor(category) {
    super(ERROR_MESSAGES[category]?.description || ERROR_MESSAGES.service.description)
    this.name = 'UserFacingError'
    this.category = category
    this.isUserFacing = true
  }
}

// Only fixed, reviewed validation messages may pass through. Arbitrary server messages never do.
const SAFE_MESSAGES = new Set([
  'Select at least one batch.', 'Select a school year.', 'Generate a billing preview first.', 'Generate and review Form 2 first.',
  'No grantee records match these filters.', 'Choose at least one documentation image.', 'Invalid admin credentials.',
  'Email or School ID and password are required.', 'Your profile changed in another tab. Reload before saving.',
  'Upload cancelled.', 'Image upload cancelled.',
])
export function safeErrorMessage(error, fallback = ERROR_MESSAGES.service.description) {
  if (error?.isUserFacing) return ERROR_MESSAGES[error.category]?.description || fallback
  const message = typeof error === 'string' ? error : error?.message
  return SAFE_MESSAGES.has(message) ? message : fallback
}

export function diagnosticFor(error, operation = 'application') {
  const category = classifyError(error)
  const safeOperation = /^[a-zA-Z0-9_.:-]{1,100}$/.test(operation) ? operation : 'application'
  const match = String(error?.message || '').match(/\[Request ID: ([a-f0-9-]{8,64})\]/i)
  return { category, operation: safeOperation, timestamp: new Date().toISOString(), diagnostic: `${category.toUpperCase()}_ERROR`, ...(match ? { requestId: match[1] } : {}) }
}

export async function retryRead(action, { attempts = 3, delay = ms => new Promise(resolve => setTimeout(resolve, ms)), shouldRetry = error => ['connection', 'offline', 'service'].includes(classifyError(error)) } = {}) {
  let lastError
  for (let attempt = 0; attempt < Math.min(3, Math.max(1, attempts)); attempt++) {
    if (attempt) await delay(300 * 2 ** (attempt - 1))
    try { return await action(attempt) } catch (error) { lastError = error; if (!shouldRetry(error)) throw error }
  }
  throw lastError
}
