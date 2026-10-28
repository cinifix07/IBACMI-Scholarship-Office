import { useEffect, useRef, useState } from 'react'
import ibacmiLogo from '../assets/IBACMI.png'
import './account-verification.css'

export default function AccountVerification({ onDismiss, onLogin, onRegister, onSearch }) {
  const [step, setStep] = useState(1)
  const dialogRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => { headingRef.current?.focus() }, [step])

  return (
    <dialog ref={dialogRef} className="account-verification" lang="ceb" aria-labelledby="account-verification-title" aria-describedby="account-verification-description" onCancel={(event) => { event.preventDefault(); onDismiss() }} onKeyDown={(event) => {
      if (event.key !== 'Tab') return
      const buttons = [...event.currentTarget.querySelectorAll('button:not([disabled])')]
      const first = buttons[0]
      const last = buttons.at(-1)
      if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }} onClick={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) onDismiss()
    }}>
      <div className="verification-topline">
        <div className="verification-brand"><img src={ibacmiLogo} alt="IBACMI" /><div><strong>IBACMI</strong><span>Scholarship Office</span></div></div>
        <button className="verification-icon-button" type="button" aria-label="Sirad-i ang verification" onClick={onDismiss}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
      </div>
      <div className="verification-progress" aria-label={`Lakang ${step} sa 2`}>
        <span className={step === 1 ? 'is-current' : 'is-complete'} aria-current={step === 1 ? 'step' : undefined}>1</span><i aria-hidden="true" /><span className={step === 2 ? 'is-current' : ''} aria-current={step === 2 ? 'step' : undefined}>2</span>
        <p>Lakang {step} sa 2</p>
      </div>
      <div className="verification-question" key={step}>
        <span className="verification-kicker">Tabangan ka namo</span>
        <h2 id="account-verification-title" ref={headingRef} tabIndex={-1}>{step === 1 ? 'Naa na kay account?' : 'Naa ba imong pangalan sa official grantee list?'}</h2>
        <p id="account-verification-description">{step === 1 ? 'Palihog pili sa imong tubag aron matabangan ka namo sa sunod nga proseso.' : 'Na-search ug nakumpirma na ba nimo imong pangalan gamit ang Student ID, Batch Number, o Apelyido?'}</p>
        <div className="verification-options">
          <button className="verification-option verification-option--primary" type="button" onClick={step === 1 ? onLogin : onRegister}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>
            <span>{step === 1 ? 'Oo, naa na koy account' : 'Oo, naa ko sa list'}</span>
            <span aria-hidden="true">→</span>
          </button>
          <button className="verification-option" type="button" onClick={step === 1 ? () => setStep(2) : onSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{step === 1 ? <path d="M12 5v14M5 12h14" /> : <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>}</svg>
            <span>{step === 1 ? 'Wala pa koy account' : 'Wala pa nako na-check'}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <footer className="verification-footer">
        <button type="button" className="verification-back" onClick={step === 1 ? onDismiss : () => setStep(1)}><span aria-hidden="true">←</span> Balik</button>
        <span>IBACMI · Student access</span>
      </footer>
    </dialog>
  )
}
