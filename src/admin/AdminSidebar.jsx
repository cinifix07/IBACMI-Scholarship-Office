import { useEffect, useRef, useState } from 'react'
import ibacmiLogo from '../assets/IBACMI.png'
import './admin-sidebar.css'

// Local vector icons keep navigation legible when the external icon font is unavailable.
const iconPaths = {
  dashboard: ['M3 3h7v7H3z M14 3h7v4h-7z M14 11h7v10h-7z M3 14h7v7H3z'],
  group: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M22 21v-2a4 4 0 0 0-3-3.87', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 3.13a4 4 0 0 1 0 7.75'],
  school: ['m2 9 10-6 10 6-10 6-10-6 M6 11.4V17q6 5 12 0v-5.6 M22 9v8'],
  archive: ['M3 3h18v5H3z M5 8v13h14V8 M10 12h4'],
  billing: ['M14 2H4v20h16V8l-6-6 M14 2v6h6 M7 12h10 M7 16h10 M11 12v8'],
  validation: ['M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4', 'm8 12 3 3 5-6'],
  images: ['M3 3h18v18H3z M3 16l6-6 5 5 3-3 4 4','M16 8h.01'],
  history: ['M3 11a9 9 0 1 1 2.6 7.4 M3 4v7h7 M12 7v5l3 2'],
  forum: ['M14 14H6l-4 4V3h16v7 M10 17v3h8l4 3V10h-4'],
  manage_accounts: ['M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 10v2m0 6v2m-5-5h2m6 0h-2m-4.5-3.5 1.5 1.5m4 4 1.5 1.5m0-7L20 13m-4 4-1.5 1.5', 'M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6'],
  logout: ['M9 21H3V3h6 M9 12h13 m-5-5 5 5-5 5'],
  menu: ['M4 6h16 M4 12h16 M4 18h16'],
  close: ['m6 6 12 12 M18 6 6 18'],
  left_panel_open: ['M3 3h18v18H3z M8 3v18 m5-12 3 3-3 3'],
  left_panel_close: ['M3 3h18v18H3z M8 3v18 m8-12-3 3 3 3'],
}

function SidebarIcon({ name }) {
  return <svg className="admin-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name].map((path, index) => <path key={index} d={path} />)}</svg>
}

const groups = [
  { label: 'Main dashboard', items: [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'records', label: 'Grantee Records', icon: 'group' },
  ] },
  { label: 'Scholarship operations', items: [
    { id: 'portal', label: 'UniFAST Portal', icon: 'school' },
    { id: 'archive', label: 'Archive', icon: 'archive' },
    { id: 'logs', label: 'Activity Logs', icon: 'history' },
    { id: 'billing', label: 'Billing Management', icon: 'billing' },
    { id: 'form2', label: 'Form 2 List', icon: 'billing' },
    { id: 'validation', label: 'Validation Management', icon: 'validation' },
  ] },
  { label: 'Student services', items: [
    { id: 'support', label: 'Student Support', icon: 'forum' },
  ] },
  { label: 'Administration', items: [
    { id: 'users', label: 'User Management', icon: 'manage_accounts' },
    { id: 'documentation', label: 'Documentation', icon: 'images' },
  ] },
]

export default function AdminSidebar({ activeItem, onNavigate, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pinned, setPinned] = useState(false)
  const sidebarRef = useRef(null)
  const menuRef = useRef(null)
  const activeLabel = groups.flatMap((group) => group.items).find((item) => item.id === activeItem)?.label || 'Dashboard'

  useEffect(() => {
    if (!mobileOpen) return
    const sidebar = sidebarRef.current
    const menuButton = menuRef.current
    const main = document.querySelector('.admin-main')
    const previousOverflow = document.body.style.overflow
    const previousInert = main?.inert
    document.body.style.overflow = 'hidden'
    if (main) main.inert = true
    sidebar.querySelector('button')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
      }
      if (event.key !== 'Tab') return
      const buttons = [...sidebar.querySelectorAll('button:not([disabled])')].filter((button) => button.getClientRects().length)
      const first = buttons[0]
      const last = buttons.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const handleResize = () => { if (desktop.matches) setMobileOpen(false) }
    document.addEventListener('keydown', handleKeyDown)
    desktop.addEventListener('change', handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      if (main) main.inert = previousInert
      document.removeEventListener('keydown', handleKeyDown)
      desktop.removeEventListener('change', handleResize)
      menuButton?.focus()
    }
  }, [mobileOpen])

  const navigate = (id) => {
    setMobileOpen(false)
    setPinned(false)
    onNavigate(id)
  }

  return (
    <>
      <header className="admin-mobile-bar">
        <img src={ibacmiLogo} alt="IBACMI" />
        <div><span>Scholarship Office</span><strong>{activeLabel}</strong></div>
        <button ref={menuRef} type="button" aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="admin-sidebar" onClick={() => setMobileOpen(true)}>
          <SidebarIcon name="menu" />
        </button>
      </header>
      {mobileOpen && <div className="admin-sidebar-backdrop" aria-hidden="true" onClick={() => setMobileOpen(false)} />}
      <aside id="admin-sidebar" ref={sidebarRef} className={`admin-sidebar${pinned ? ' is-pinned' : ''}${mobileOpen ? ' is-mobile-open' : ''}`} role={mobileOpen ? 'dialog' : undefined} aria-modal={mobileOpen ? true : undefined} aria-label="Scholarship Office navigation">
        <div className="admin-sidebar-brand">
          <img src={ibacmiLogo} alt="IBACMI" />
          <div className="admin-sidebar-reveal"><strong>IBACMI</strong><span>Scholarship Office</span></div>
          <button type="button" className="admin-sidebar-close" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <SidebarIcon name="close" />
          </button>
        </div>
        <button type="button" className="admin-sidebar-toggle" aria-label={pinned ? 'Collapse navigation' : 'Expand navigation'} aria-expanded={pinned} aria-controls="admin-sidebar-nav" onClick={() => setPinned((value) => !value)}>
          <SidebarIcon name={pinned ? 'left_panel_close' : 'left_panel_open'} />
          <span className="admin-sidebar-reveal">{pinned ? 'Collapse menu' : 'Expand menu'}</span>
        </button>
        <nav id="admin-sidebar-nav" className="admin-sidebar-nav" aria-label="Admin navigation">
          {groups.map((group) => (
            <div className="admin-sidebar-group" key={group.label} role="group" aria-label={group.label}>
              <p className="admin-sidebar-reveal">{group.label}</p>
              {group.items.map((item) => (
                <button key={item.id} type="button" className={`admin-sidebar-item${activeItem === item.id ? ' is-active' : ''}`} aria-label={item.label} title={item.label} aria-current={activeItem === item.id ? 'location' : undefined} onClick={() => navigate(item.id)}>
                  <SidebarIcon name={item.icon} />
                  <span className="admin-sidebar-reveal">{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="admin-sidebar-account">
          <p className="admin-sidebar-reveal">Account</p>
          <button type="button" className="admin-sidebar-item admin-sidebar-logout" aria-label="Logout" title="Logout" onClick={onLogout}>
            <SidebarIcon name="logout" />
            <span className="admin-sidebar-reveal">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
