import ServerErrorProvider from './errors/ServerErrorProvider.jsx'
import { validStoredSession } from './errors/errorPolicy.js'
import { resetErrors } from './errors/errorBus.js'
import { useEffect, useState } from 'react'
import Admin from './admin/admin.jsx'
import AllLanding from './landingpage/alllanding.jsx'
import Student from './student/student.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

const ADMIN_SESSION_STORAGE_KEY = 'unifast.adminSession'
const STUDENT_VIEW_STORAGE_KEY = 'unifast.studentViewOpen'
const STUDENT_SESSION_STORAGE_KEY = 'unifast.studentSession'

function getStoredAdminSession() {
  try {
    const storedSession = window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY)
    const session = storedSession ? JSON.parse(storedSession) : null
    return validStoredSession(session, 'admin') ? session : null
  } catch {
    return null
  }
}

function getStoredStudentViewOpen() {
  try {
    return window.localStorage.getItem(STUDENT_VIEW_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function getStoredStudentSession() {
  try {
    const storedSession = window.localStorage.getItem(STUDENT_SESSION_STORAGE_KEY)
    const session = storedSession ? JSON.parse(storedSession) : null
    return validStoredSession(session, 'student') ? session : null
  } catch {
    return null
  }
}

function App() {
  const [adminSession, setAdminSession] = useState(getStoredAdminSession)
  const [studentSession, setStudentSession] = useState(getStoredStudentSession)
  const [isStudentViewOpen, setIsStudentViewOpen] = useState(
    () => getStoredStudentViewOpen() && Boolean(getStoredStudentSession()?.sessionToken),
  )

  const [initialSignIn,setInitialSignIn] = useState(false)
  const signInAgain = () => {
    resetErrors()
    for (const key of [ADMIN_SESSION_STORAGE_KEY, STUDENT_SESSION_STORAGE_KEY, STUDENT_VIEW_STORAGE_KEY]) { try { window.localStorage.removeItem(key) } catch { /* Storage may be unavailable. */ } }
    setAdminSession(null); setStudentSession(null); setIsStudentViewOpen(false); setInitialSignIn(true)
  }

  const handleAdminLogout = () => {
    resetErrors()
    setInitialSignIn(false)
    setAdminSession(null)
  }

  const handleStudentLogout = () => {
    resetErrors()
    setInitialSignIn(false)
    setStudentSession(null)
    setIsStudentViewOpen(false)
  }

  const handleLoginSuccess = (account) => {
    setInitialSignIn(false)
    if (account?.role === 'student') {
      setAdminSession(null)
      setStudentSession(account)
      setIsStudentViewOpen(true)
      return
    }

    setStudentSession(null)
    setIsStudentViewOpen(false)
    setAdminSession(account)
  }

  const handleStudentRegistrationSuccess = (account) => {
    setAdminSession(null)
    setStudentSession(account ?? null)
    setIsStudentViewOpen(true)
  }

  const handleStudentSessionUpdate = (account) => {
    setStudentSession((currentSession) => ({
      ...(currentSession ?? {}),
      ...(account ?? {}),
    }))
  }

  useEffect(() => {
    if (!adminSession) return undefined

    const adminUrl = window.location.href
    const adminHistoryState = {
      ...(window.history.state ?? {}),
      unifastAdminGuard: true,
    }

    window.history.pushState(adminHistoryState, '', adminUrl)

    const keepAdminInPlace = () => {
      window.history.pushState(adminHistoryState, '', adminUrl)
    }

    window.addEventListener('popstate', keepAdminInPlace)

    return () => window.removeEventListener('popstate', keepAdminInPlace)
  }, [adminSession])

  useEffect(() => {
    try {
      if (adminSession) {
        window.localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, JSON.stringify(adminSession))
        window.localStorage.removeItem(STUDENT_VIEW_STORAGE_KEY)
        window.localStorage.removeItem(STUDENT_SESSION_STORAGE_KEY)
        return
      }

      window.localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY)
    } catch {
      // Ignore storage errors so the app still works in restricted browser contexts.
    }
  }, [adminSession])

  useEffect(() => {
    try {
      if (isStudentViewOpen) {
        window.localStorage.setItem(STUDENT_VIEW_STORAGE_KEY, 'true')
        window.localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY)
        if (studentSession) {
          window.localStorage.setItem(STUDENT_SESSION_STORAGE_KEY, JSON.stringify(studentSession))
        }
        return
      }

      window.localStorage.removeItem(STUDENT_VIEW_STORAGE_KEY)
      window.localStorage.removeItem(STUDENT_SESSION_STORAGE_KEY)
    } catch {
      // Ignore storage errors so the app still works in restricted browser contexts.
    }
  }, [isStudentViewOpen, studentSession])

  const session=adminSession||studentSession
  const content=adminSession ? <Admin adminSession={adminSession} onLogout={handleAdminLogout} /> : isStudentViewOpen ? <Student key={studentSession?.schoolId} studentSession={studentSession} onLogout={handleStudentLogout} onStudentSessionUpdate={handleStudentSessionUpdate} /> : <AllLanding key={initialSignIn ? 'sign-in' : 'public'} initialSignIn={initialSignIn} onAdminLoginSuccess={handleLoginSuccess} onStudentRegistrationSuccess={handleStudentRegistrationSuccess} />
  return <ServerErrorProvider session={session} onSignIn={signInAgain}><ErrorBoundary key={session?.id||session?.schoolId||session?.role||'public'}>{content}</ErrorBoundary></ServerErrorProvider>
}
export default App
