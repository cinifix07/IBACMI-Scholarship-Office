import { createRoot } from 'react-dom/client'
import Admin from '../src/admin/admin.jsx'
import ServerErrorProvider from '../src/errors/ServerErrorProvider.jsx'
import '../src/index.css'

const session = { role: 'admin', name: 'Synthetic test administrator', sessionToken: 'test-session' }
createRoot(document.getElementById('root')).render(<ServerErrorProvider session={session}><Admin adminSession={session} /></ServerErrorProvider>)
