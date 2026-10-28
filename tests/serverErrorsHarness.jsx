import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { api } from '../convex/_generated/api'
import ServerErrorProvider from '../src/errors/ServerErrorProvider.jsx'
import { useMutation, useQuery } from '../src/errors/convex.js'
import { logSanitizedError, userErrorMessage } from '../src/errors/errorBus.js'
import ErrorBoundary from '../src/ErrorBoundary.jsx'

function CrashProbe({ fail }) {
  if (fail) throw new Error('Internal render error SECRET-TOKEN SECRET-STUDENT private@example.invalid')
  return null
}

function ProfileForm() {
  const [ready, setReady] = useState(false)
  const [draft, setDraft] = useState('Original unsaved information')
  const [notice, setNotice] = useState('')
  const [crash, setCrash] = useState(false)
  // Intentionally omit the token at this call site: the adapter must use the authenticated context.
  const data = useQuery(api.studentProfile.get, ready ? {} : 'skip')
  const records = useQuery(api.allinfo.listByStudentId, ready ? { studentId: 'TEST-0001' } : 'skip')
  const submit = useMutation(api.studentProfile.save)
  return <main style={{ maxWidth: 800, margin: 'auto', padding: 24 }}>
    <CrashProbe fail={crash} />
    <h1>Authenticated profile recovery</h1>
    <button type="button" onClick={() => setReady(true)}>Load student information</button>
    <button type="button" onClick={() => window.dispatchEvent(new Event('billing-refresh'))}>Refresh information</button>
    <label>Unsaved profile information<textarea aria-label="Unsaved profile information" value={draft} onChange={event => setDraft(event.target.value)} /></label>
    <output aria-label="Loaded profile">{data?.profile.firstName || 'Waiting for authenticated query'}</output>
    <output aria-label="Loaded records">{records?.length ?? 'Waiting'}</output>
    <button type="button" onClick={async () => { try { await submit({ schoolYear: '2025-2026', expectedVersion: 0 }) } catch (error) { setNotice(userErrorMessage(error)) } }}>Run unsafe submission</button>
    <p role="status">{notice}</p>
    <button type="button" onClick={() => setCrash(true)}>Trigger render failure</button>
  </main>
}
export default function Harness() {
  const [signedOut, setSignedOut] = useState(false)
  return <ServerErrorProvider session={signedOut ? null : { id: 'student-account', role: 'student', schoolId: 'TEST-0001', sessionToken: 'student-token' }} onSignIn={() => setSignedOut(true)}>
    <ErrorBoundary>{signedOut ? <p>Sign-in requested</p> : <ProfileForm />}</ErrorBoundary>
  </ServerErrorProvider>
}
createRoot(document.getElementById('root'), { onCaughtError: error => logSanitizedError(error, 'test.render') }).render(<Harness />)
