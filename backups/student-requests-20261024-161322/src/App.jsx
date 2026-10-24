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
    return storedSession ? JSON.parse(storedSession) : null
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
    return storedSession ? JSON.parse(storedSession) : null
  } catch {
    return null
  }
}

function App() {
  const [adminSession, setAdminSession] = useState(getStoredAdminSession)
  const [studentSession, setStudentSession] = useState(getStoredStudentSession)
  const [isStudentViewOpen, setIsStudentViewOpen] = useState(getStoredStudentViewOpen)

  const handleAdminLogout = () => {
    setAdminSession(null)
  }

  const handleStudentLogout = () => {
    setStudentSession(null)
    setIsStudentViewOpen(false)
  }

  const handleLoginSuccess = (account) => {
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

  if (adminSession) {
    return (
      <ErrorBoundary>
        <Admin adminSession={adminSession} onLogout={handleAdminLogout} />
      </ErrorBoundary>
    )
  }

  if (isStudentViewOpen) {
    return (
      <ErrorBoundary>
        <Student
          key={studentSession?.schoolId ?? 'student'}
          studentSession={studentSession}
          onLogout={handleStudentLogout}
          onStudentSessionUpdate={handleStudentSessionUpdate}
        />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <AllLanding
        onAdminLoginSuccess={handleLoginSuccess}
        onStudentRegistrationSuccess={handleStudentRegistrationSuccess}
      />
    </ErrorBoundary>
  )
}

export default App
