import { createRoot } from 'react-dom/client'
import BillingManagement from '../src/admin/BillingManagement.jsx'

const root = createRoot(document.getElementById('root'))
document.getElementById('open').onclick = () => root.render(<BillingManagement sessionToken="test-session" onClose={() => root.render(null)} />)
window.billingReady = true
