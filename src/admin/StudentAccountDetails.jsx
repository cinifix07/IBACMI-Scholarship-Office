import { useEffect, useRef } from 'react'

export function StudentAccountIcon({ name }) {
  const paths = { edit: 'm16 3 5 5-13 13H3v-5L16 3 M13 6l5 5', delete: 'M3 6h18 M9 6V3h6v3 M5 6l1 15h12l1-15 M10 10v7 M14 10v7', close: 'm6 6 12 12 M18 6 6 18', search: 'M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0', previous: 'm15 6-6 6 6 6', next: 'm9 6 6 6-6 6' }
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
}

export default function StudentAccountDetails({ user, onClose, onEdit, onDelete }) {
  const dialog = useRef(null)
  useEffect(() => { dialog.current.showModal() }, [])
  const section = (title, fields) => <section><h3>{title}</h3><dl>{fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value?.trim() || 'Not provided'}</dd></div>)}</dl></section>
  return <dialog ref={dialog} className="student-account-details" aria-labelledby="student-account-details-title" onCancel={onClose} onClick={event => { if (event.target === dialog.current) { const rect = dialog.current.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose() } }}>
    <header><div><p>Student Accounts</p><h2 id="student-account-details-title">Student Account Details</h2></div><button type="button" aria-label="Close student account details" onClick={onClose}>×</button></header>
    <div className="student-account-details-body">
      {section('Personal Information', [['Student ID', user.schoolId], ['Last Name', user.lastName], ['First Name', user.firstName], ['Middle Name', user.middleName], ['Complete Name', user.completeName]])}
      {section('Contact Information', [['Complete Permanent Address', user.currentAddress], ['Email Address', user.email], ['Phone Number', user.phoneNumber], ['Facebook Profile', user.facebookProfileUrl]])}
    </div>
    <footer><button type="button" onClick={onClose}>Close</button><button type="button" onClick={() => onEdit(user)}>Edit Account</button><button type="button" className="student-account-delete" onClick={() => onDelete(user)}>Delete Account</button></footer>
  </dialog>
}
