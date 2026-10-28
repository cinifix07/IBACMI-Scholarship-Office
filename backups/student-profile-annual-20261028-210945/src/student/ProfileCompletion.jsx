import { useEffect, useRef, useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { DEGREE_PROGRAMS, normalizeProfile, profileCompleteness, REQUIRED_PROFILE_FIELDS, todayInPhilippines } from '../../convex/studentProfileRules'

function ProfileIcon({ warning = false }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">{warning ? <><path d="M12 3 2 21h20L12 3Z" strokeLinejoin="round" /><path d="M12 9v5m0 3v1" strokeLinecap="round" /></> : <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></>}</svg>
}

function warningWasShown(token) {
  try { return window.sessionStorage.getItem(`unifast.profileWarning.${token}`) === 'shown' } catch { return false }
}

function CompletionWarning({ data, sessionToken, onComplete }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    try { window.sessionStorage.setItem(`unifast.profileWarning.${sessionToken}`, 'shown') } catch { /* Storage may be disabled. */ }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = previousOverflow }
  }, [sessionToken])
  return (
    <dialog ref={dialogRef} className="profile-warning" aria-labelledby="profile-warning-title" aria-describedby="profile-warning-description" onCancel={event => { event.preventDefault(); onComplete() }}>
      <span className="profile-warning-icon"><ProfileIcon warning /></span>
      <span className="profile-eyebrow">Your UniFAST profile</span>
      <h2 id="profile-warning-title">Incomplete Student Information</h2>
      <strong>Kulang pa imong impormasyon!</strong>
      <p id="profile-warning-description">Palihog kompletoha ang imong required student information aron ma-update ug ma-validate ang imong UniFAST profile.</p>
      <progress max="100" value={data.percent} aria-label={`Profile completion ${data.percent}%`} />
      <p className="profile-progress-caption">{data.percent}% complete · Missing Information ({data.missing.length})</p>
      <ul>{data.missing.map(field => <li key={field.key}><ProfileIcon warning />{field.label}</li>)}</ul>
      <button type="button" className="student-save-button" onClick={onComplete}>Complete My Information <span aria-hidden="true">→</span></button>
    </dialog>
  )
}

export default function ProfileCompletion({ data, sessionToken, record }) {
  const save = useMutation(api.studentProfile.save)
  const [draft, setDraft] = useState({})
  const [baseVersion, setBaseVersion] = useState(null)
  const [validationTriggered, setValidationTriggered] = useState(false)
  const [showWarning, setShowWarning] = useState(() => data.missing.length > 0 && !warningWasShown(sessionToken))
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [saveError, setSaveError] = useState('')
  const formRef = useRef(null)
  const values = { ...data.profile, ...draft }
  const validation = profileCompleteness(normalizeProfile(values))
  const errors = validationTriggered ? validation.errors : {}
  const status = data.missing.length ? 'Incomplete' : data.needsOfficeReview ? 'Needs Review' : 'Complete'

  function focusFirst(missing) {
    const input = formRef.current?.elements.namedItem(missing[0]?.key)
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    input?.focus({ preventScroll: true })
  }
  function completeInformation() {
    setShowWarning(false)
    setValidationTriggered(true)
    requestAnimationFrame(() => focusFirst(validation.missing))
  }
  function change(key, value) {
    if (baseVersion === null) setBaseVersion(data.version)
    setDraft(current => ({ ...current, [key]: value }))
    setMessage('')
    setSaveError('')
  }
  async function submit(event) {
    event.preventDefault()
    setValidationTriggered(true)
    setMessage('')
    setSaveError('')
    if (validation.missing.length) { focusFirst(validation.missing); return }
    setSaving(true)
    try {
      const input = Object.fromEntries(Object.entries(normalizeProfile(values)).filter(([key]) => key !== 'studentId'))
      await save({ sessionToken, expectedVersion: baseVersion ?? data.version, ...input })
      setDraft({})
      setBaseVersion(null)
      setMessage('Successfully updated! Kumpleto na ang imong student information.')
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Dili ma-save karon. Palihog sulayi pag-usab.')
    } finally { setSaving(false) }
  }
  const labels = Object.fromEntries(REQUIRED_PROFILE_FIELDS)
  const recordInput = (key, label, value) => <div className="student-field" key={key}><label htmlFor={`profile-${key}`}>{label}</label><input id={`profile-${key}`} value={value || ''} readOnly /></div>
  const input = (key, options = {}) => (
    <div className={`student-field ${key === 'currentAddress' || key === 'course' || key === 'facebookProfileUrl' ? 'profile-field-wide' : ''}`} key={key}>
      <label htmlFor={`profile-${key}`}>{labels[key] || (key === 'middleInitial' ? 'Middle Name / Initial (optional)' : 'Facebook Profile Link (optional)')}{labels[key] && <span aria-hidden="true"> *</span>}</label>
      {options.options ? (
        <select id={`profile-${key}`} name={key} value={values[key]} required aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `profile-${key}-error` : undefined} onChange={event => change(key, ['sexCode', 'yearLevelCode'].includes(key) && event.target.value !== '' ? Number(event.target.value) : event.target.value)}>
          <option value="">Select {labels[key]}</option>
          {options.options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          {values[key] !== '' && !options.options.some(([value]) => value === values[key]) && <option value={values[key]}>Previously recorded: {values[key]} — please review</option>}
        </select>
      ) : key === 'currentAddress' ? (
        <textarea id={`profile-${key}`} name={key} value={values[key]} rows={3} required maxLength={500} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `profile-${key}-error` : undefined} onChange={event => change(key, event.target.value)} />
      ) : (
        <input id={`profile-${key}`} name={key} value={values[key]} required={Boolean(labels[key])} maxLength={500} {...options} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `profile-${key}-error` : key === 'birthDate' ? 'profile-date-hint' : undefined} onChange={event => change(key, event.target.value)} />
      )}
      {key === 'birthDate' && <small id="profile-date-hint">MM/DD/YYYY · Use the calendar to select your birthdate.</small>}
      {errors[key] && <small id={`profile-${key}-error`} className="profile-field-error">{errors[key]}</small>}
    </div>
  )
  return (
    <section className="profile-completion" aria-labelledby="profile-completion-title">
      <div className="profile-heading"><div><span className="profile-eyebrow">Student Information</span><h2 id="profile-completion-title">Make your profile complete</h2></div><span className={`profile-status ${data.missing.length ? '' : 'profile-status-complete'}`}>{status}</span></div>
      <div className="profile-progress-caption"><strong>Profile Completion — {data.percent}%</strong><span>{REQUIRED_PROFILE_FIELDS.length - data.missing.length} of {REQUIRED_PROFILE_FIELDS.length} required fields</span></div>
      <progress max="100" value={data.percent} aria-label={`Saved profile completion ${data.percent}%`} />
      <p className="profile-help">Fields marked * are required. Profile completion is separate from Scholarship Office verification.</p>
      {data.needsOfficeReview && <p className="profile-office-note">Needs Review: Palihog kontaka ang Scholarship Office aron ma-check ang imong grantee record o TES Award Number. Mahimo gihapon nimo ma-save ang imong impormasyon.</p>}
      <form ref={formRef} className="profile-grid" noValidate onSubmit={submit}>
        <fieldset disabled={saving}>
          <legend className="profile-sr-only">Required student information</legend>
          <div className="profile-record-fields profile-field-wide">
            {recordInput('tesAwardNumber', 'TES Award No.', record?.tesAwardNumber)}
            {input('studentId', { readOnly: true })}
            {recordInput('batchId', 'Batch No.', record?.batchId)}
            <div className="profile-record-status">
              {recordInput('recordStatus', 'Status', record?.status)}
              {recordInput('semester', 'Semester', record?.semester)}
              {recordInput('schoolYear', 'School Year', record?.schoolYear)}
            </div>
            {input('lastName', { readOnly: true, autoComplete: 'family-name' })}
            {input('firstName', { readOnly: true, autoComplete: 'given-name' })}
            {input('middleInitial', { readOnly: true, autoComplete: 'additional-name' })}
          </div>
          {['lastName', 'firstName'].some(key => !values[key]) && <p className="profile-office-note profile-field-wide">Palihog kontaka ang Scholarship Office aron makompleto ang imong opisyal nga ngalan.</p>}
          {input('course', { options: DEGREE_PROGRAMS.map(program => [program, program]) })}
          {input('yearLevelCode', { options: [1, 2, 3, 4, 5].map(year => [year, String(year)]) })}
          {input('sexCode', { options: [[0, 'Male'], [1, 'Female']] })}
          {input('birthDate', { type: 'date', lang: 'en-US', max: todayInPhilippines(), autoComplete: 'bday' })}
          {input('zipCode', { inputMode: 'numeric', pattern: '[0-9]{4}', maxLength: 4, autoComplete: 'postal-code' })}
          {input('emailAddress', { type: 'email', autoComplete: 'email' })}
          {input('phoneNumber', { type: 'tel', autoComplete: 'tel' })}
          {input('currentAddress', { autoComplete: 'street-address' })}
          {input('facebookProfileUrl', { type: 'url' })}
        </fieldset>
        <p className="profile-help profile-field-wide">This contact email is used for your student profile. Your login email stays unchanged.</p>
        {saveError && <p className="profile-field-error profile-field-wide" role="alert">{saveError}</p>}
        {message && <p className="profile-success profile-field-wide" role="status">{message}</p>}
        <button className="student-save-button profile-field-wide" type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Student Information'}<ProfileIcon /></button>
      </form>
      {showWarning && <CompletionWarning data={data} sessionToken={sessionToken} onComplete={completeInformation} />}
    </section>
  )
}
