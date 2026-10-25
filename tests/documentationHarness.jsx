import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import DocumentationManagement from '../src/admin/DocumentationManagement.jsx'
import AllLanding from '../src/landingpage/alllanding.jsx'
import '../src/index.css'

export function Harness(){const [admin,setAdmin]=useState(false);return <><button id="open-docs-test" style={{position:'fixed',top:80,right:12,zIndex:999}} onClick={()=>setAdmin(true)}>Open documentation test</button><AllLanding />{admin&&<DocumentationManagement sessionToken="test-session" onClose={()=>setAdmin(false)} />}</>}
createRoot(document.getElementById('root')).render(<Harness />)
window.documentationReady=true
