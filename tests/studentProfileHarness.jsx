import { createRoot } from 'react-dom/client'
import Student from '../src/student/student.jsx'

createRoot(document.getElementById('root')).render(<Student studentSession={{ schoolId: 'TEST-0001', sessionToken: 'student-token' }} onLogout={() => { window.profileLoggedOut = true }} />)
