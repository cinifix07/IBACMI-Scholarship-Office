import { createRoot } from 'react-dom/client'
import Admin from '../src/admin/admin.jsx'
createRoot(document.getElementById('root')).render(<Admin adminSession={{ sessionToken: 'test-session', role: 'admin', name: 'Synthetic administrator' }} onLogout={() => {}} />)
