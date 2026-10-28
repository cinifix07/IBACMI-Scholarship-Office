import { useEffect, useRef } from 'react'
import ibacmiLogo from '../assets/IBACMI.png'
import IBACMILoader from './IBACMILoader.jsx'
import { ERROR_MESSAGES } from '../errors/errorPolicy.js'
import './server-error.css'

export default function IBACMIServerErrorModal({ category = 'service', busy = false, canClose = false, onRetry, onSignIn, onClose }) {
  const ref = useRef(null)
  const message = ERROR_MESSAGES[category] || ERROR_MESSAGES.service
  useEffect(() => {
    const dialog = ref.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; if (previous?.isConnected) previous.focus({ preventScroll: true }) }
  }, [])
  return <dialog ref={ref} className="ibacmi-server-error" aria-labelledby="ibacmi-server-error-title" aria-describedby="ibacmi-server-error-description" onCancel={event => { event.preventDefault(); if (canClose) onClose?.() }}>
    <div className="ibacmi-server-error__brand"><img src={ibacmiLogo} alt="IBACMI" width="56" height="56" /><div><strong>IBACMI</strong><span>Scholarship Office</span></div></div>
    <div className="ibacmi-server-error__symbol" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="8" y="8" width="32" height="13" rx="4" /><rect x="8" y="27" width="32" height="13" rx="4" /><path d="M14 14h1m-1 19h1M30 14h5M30 33h5M5 43 43 5" strokeLinecap="round" /></svg></div>
    <span className="ibacmi-server-error__eyebrow">{category === 'session' ? 'Account access' : 'We’re here to help'}</span>
    <h2 id="ibacmi-server-error-title">{message.title}</h2>
    <p id="ibacmi-server-error-description">{message.description}</p>
    {busy ? <IBACMILoader variant="compact" message="Checking the connection and restoring information…" /> : <div className="ibacmi-server-error__actions">
      <button type="button" className="ibacmi-server-error__primary" onClick={category === 'session' ? onSignIn : onRetry}>{message.action}</button>
    </div>}
    {canClose && <div className="ibacmi-server-error__actions"><button type="button" className="ibacmi-server-error__secondary" onClick={onClose}>Close</button></div>}
  </dialog>
}
