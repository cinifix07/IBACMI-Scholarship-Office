import { createRoot } from 'react-dom/client'
import Form2Management from '../src/admin/Form2Management.jsx'

const root=createRoot(document.getElementById('root'))
document.getElementById('open').onclick=()=>root.render(<Form2Management sessionToken="test-session" onClose={()=>root.render(null)} onOpenBilling={()=>{window.openedBilling=true}} />)
window.form2Ready=true
