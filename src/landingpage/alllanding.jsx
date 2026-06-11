import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import quickActionsData from '../../data.json'
import ibacmiLogo from '../assets/IBACMI.png'
import './lan.css'

function StatusBadge({ status, tone }) {
  return (
    <span className={`status-badge status-badge--${tone}`}>
      <span className="status-badge__dot" />
      {status}
    </span>
  )
}

function getStatusTone(status = '') {
  const normalizedStatus = status.toLowerCase()

  if (
    normalizedStatus.includes('grantee') ||
    normalizedStatus.includes('valid') ||
    normalizedStatus.includes('complete') ||
    normalizedStatus.includes('resolved') ||
    normalizedStatus.includes('approved')
  ) {
    return 'validated'
  }

  if (normalizedStatus.includes('reject') || normalizedStatus.includes('decline')) {
    return 'rejected'
  }

  return 'pending'
}

function getPaginationRange(currentPage, totalPages) {
  const pages = []

  if (totalPages <= 5) {
    for (let page = 1; page <= totalPages; page += 1) {
      pages.push(page)
    }

    return pages
  }

  pages.push(1)

  if (currentPage > 3) {
    pages.push('left-ellipsis')
  }

  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page)
  }

  if (currentPage < totalPages - 2) {
    pages.push('right-ellipsis')
  }

  pages.push(totalPages)

  return pages
}

function isValidEmailAddress(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)
}

function isValidSchoolId(schoolId) {
  return /^[A-Za-z0-9-]{4,30}$/.test(schoolId)
}

function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[\s-]/g, '').trim()
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

function isValidPassword(password) {
  return password.length >= 6
}

function AllLanding({ onAdminLoginSuccess, onStudentRegistrationSuccess }) {
  const [progress, setProgress] = useState(0)

  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignUpDeniedOpen, setIsSignUpDeniedOpen] = useState(false)

  const [adminLoginError, setAdminLoginError] = useState('')
  const [quickActionError, setQuickActionError] = useState('')
  const [quickActionSuccess, setQuickActionSuccess] = useState('')

  const [isSubmittingAdminLogin, setIsSubmittingAdminLogin] = useState(false)
  const [isSubmittingQuickAction, setIsSubmittingQuickAction] = useState(false)
  const [isRegisteringAccount, setIsRegisteringAccount] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [studentIdSearch, setStudentIdSearch] = useState('')

  const [adminLoginEmail, setAdminLoginEmail] = useState('')
  const [adminLoginSchoolId, setAdminLoginSchoolId] = useState('')
  const [adminLoginPassword, setAdminLoginPassword] = useState('')

  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpSchoolId, setSignUpSchoolId] = useState('')
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('')
  const [signUpError, setSignUpError] = useState('')
  const [signUpSuccess, setSignUpSuccess] = useState('')
  const [registeredStudentAccount, setRegisteredStudentAccount] = useState(null)

  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSchoolId, setForgotSchoolId] = useState('')
  const [forgotPhoneNumber, setForgotPhoneNumber] = useState('')
  const [forgotOtp, setForgotOtp] = useState('')
  const [forgotNewPassword, setForgotNewPassword] = useState('')
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState('')
  const [forgotPasswordError, setForgotPasswordError] = useState('')
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState('')
  const [isOtpRequested, setIsOtpRequested] = useState(false)
  const [isRequestingOtp, setIsRequestingOtp] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const rowsPerPage = 6

  const createQuickAction = useMutation(api.quickActions.create)
  const loginAdmin = useMutation(api.adminAuth.login)
  const registerAdmin = useMutation(api.adminAuth.register)
  const requestPasswordResetOtp = useMutation(api.adminAuth.requestPasswordResetOtp)
  const changePasswordWithOtp = useMutation(api.adminAuth.changePasswordWithOtp)
  const allInfoRecords = useQuery(api.allinfo.list)

  const granteeRows = useMemo(() => allInfoRecords ?? [], [allInfoRecords])
  const hasStudentIdSearch = studentIdSearch.trim().length > 0

  const filteredGranteeRows = useMemo(() => {
    const searchValue = studentIdSearch.trim().toLowerCase()
    if (!searchValue) return []
    return granteeRows.filter((grantee) => {
      const studentId = String(grantee.studentId ?? '').trim().toLowerCase()
      const batchId = String(grantee.batchId ?? '').trim().toLowerCase()

      return studentId === searchValue || batchId === searchValue
    })
  }, [granteeRows, studentIdSearch])

  const totalRows = filteredGranteeRows.length
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage))
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows)

  const paginatedGranteeRows = useMemo(() => {
    return filteredGranteeRows.slice(startIndex, endIndex)
  }, [filteredGranteeRows, startIndex, endIndex])

  const paginationRange = useMemo(() => {
    return getPaginationRange(currentPage, totalPages)
  }, [currentPage, totalPages])

  const isSchoolIdFoundInAllInfo = (schoolId) => {
    const normalizedSchoolId = schoolId.trim().toLowerCase()

    return granteeRows.some((grantee) => {
      const studentId = String(grantee.studentId ?? '').trim().toLowerCase()
      return studentId === normalizedSchoolId
    })
  }

  const continueToStudentFromRegistration = useCallback(() => {
    setSignUpSuccess('')
    setRegisteredStudentAccount(null)
    setSignUpEmail('')
    setSignUpSchoolId('')
    setSignUpPassword('')
    setSignUpConfirmPassword('')

    if (typeof onStudentRegistrationSuccess === 'function') {
      onStudentRegistrationSuccess(registeredStudentAccount)
    }
  }, [onStudentRegistrationSuccess, registeredStudentAccount])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollable =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      setProgress(scrollable > 0 ? scrollTop / scrollable : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (
      !isQuickActionsOpen &&
      !isAdminLoginOpen &&
      !isForgotPasswordOpen &&
      !isSignUpOpen &&
      !isSignUpDeniedOpen &&
      !signUpSuccess &&
      !quickActionSuccess
    ) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsQuickActionsOpen(false)
        setIsAdminLoginOpen(false)
        setIsForgotPasswordOpen(false)
        setIsSignUpOpen(false)
        setIsSignUpDeniedOpen(false)
        if (signUpSuccess) {
          continueToStudentFromRegistration()
        }
        setQuickActionSuccess('')
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    isQuickActionsOpen,
    isAdminLoginOpen,
    isForgotPasswordOpen,
    isSignUpOpen,
    isSignUpDeniedOpen,
    signUpSuccess,
    quickActionSuccess,
    continueToStudentFromRegistration,
  ])

  const openQuickActions = () => {
    setQuickActionSuccess('')
    setQuickActionError('')
    setIsQuickActionsOpen(true)
  }

  const closeQuickActions = () => {
    setIsQuickActionsOpen(false)
    setQuickActionError('')
  }

  const openAdminLogin = () => {
    setAdminLoginError('')
    setAdminLoginEmail('')
    setAdminLoginSchoolId('')
    setAdminLoginPassword('')
    setIsAdminLoginOpen(true)
  }

  const closeAdminLogin = () => {
    setIsAdminLoginOpen(false)
    setAdminLoginError('')
    setAdminLoginEmail('')
    setAdminLoginSchoolId('')
    setAdminLoginPassword('')
  }

  const openSignUp = () => {
    setIsAdminLoginOpen(false)
    setIsSignUpOpen(true)
    setSignUpError('')
    setSignUpSuccess('')
    setSignUpEmail(adminLoginEmail)
    setSignUpSchoolId(adminLoginSchoolId)
    setSignUpPassword('')
    setSignUpConfirmPassword('')
  }

  const closeSignUp = () => {
    setIsSignUpOpen(false)
    setSignUpError('')
    setSignUpSuccess('')
    setSignUpEmail('')
    setSignUpSchoolId('')
    setSignUpPhoneNumber('')
    setSignUpPassword('')
    setSignUpConfirmPassword('')
  }

  const backToLoginFromSignUp = () => {
    setIsSignUpOpen(false)
    setSignUpError('')
    setSignUpSuccess('')
    setRegisteredStudentAccount(null)
    setAdminLoginEmail(signUpEmail)
    setAdminLoginSchoolId(signUpSchoolId)
    setAdminLoginPassword('')
    setIsAdminLoginOpen(true)
  }

  const closeSignUpDenied = () => {
    setIsSignUpDeniedOpen(false)
    setIsSignUpOpen(true)
  }

  const openForgotPassword = () => {
    setIsAdminLoginOpen(false)
    setIsForgotPasswordOpen(true)
    setForgotPasswordError('')
    setForgotPasswordSuccess('')
    setIsOtpRequested(false)
    setForgotEmail(adminLoginEmail)
    setForgotSchoolId(adminLoginSchoolId)
    setForgotPhoneNumber('')
    setForgotOtp('')
    setForgotNewPassword('')
    setForgotConfirmPassword('')
  }

  const closeForgotPassword = () => {
    setIsForgotPasswordOpen(false)
    setForgotPasswordError('')
    setForgotPasswordSuccess('')
    setIsOtpRequested(false)
    setForgotEmail('')
    setForgotSchoolId('')
    setForgotPhoneNumber('')
    setForgotOtp('')
    setForgotNewPassword('')
    setForgotConfirmPassword('')
  }

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages))
  }

  const handleRefreshTable = () => {
    setStudentIdSearch('')
    setCurrentPage(1)
  }

  const handleGranteeSearchChange = (event) => {
    setStudentIdSearch(event.target.value)
    setCurrentPage(1)
  }

  const resetForgotPasswordStep = () => {
    setIsOtpRequested(false)
    setForgotPasswordSuccess('')
    setForgotOtp('')
    setForgotNewPassword('')
    setForgotConfirmPassword('')
  }

  const handleForgotEmailChange = (event) => {
    const nextEmail = event.target.value

    setForgotEmail(nextEmail)
    if (nextEmail.trim()) setForgotSchoolId('')
    resetForgotPasswordStep()
  }

  const handleForgotSchoolIdChange = (event) => {
    const nextSchoolId = event.target.value

    setForgotSchoolId(nextSchoolId)
    if (nextSchoolId.trim()) setForgotEmail('')
    resetForgotPasswordStep()
  }

  const handleForgotPhoneNumberChange = (event) => {
    setForgotPhoneNumber(event.target.value)
    resetForgotPasswordStep()
  }

  const validateForgotPasswordIdentity = () => {
    const email = forgotEmail.trim().toLowerCase()
    const schoolId = forgotSchoolId.trim()
    const phoneNumber = normalizePhoneNumber(forgotPhoneNumber)

    if (!email && !schoolId) return 'Email address or School ID is required.'

    if (email && schoolId) {
      return 'Use either email address or School ID, not both.'
    }

    if (email && !isValidEmailAddress(email)) return 'Please enter a valid email address.'

    if (schoolId && !isValidSchoolId(schoolId)) {
      return 'School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.'
    }

    if (!phoneNumber) return 'Phone number is required.'

    if (!isValidPhoneNumber(phoneNumber)) {
      return 'Please enter a valid phone number. Example: 09123456789 or +639123456789.'
    }

    return ''
  }

  const handleRequestOtp = async () => {
    const validationError = validateForgotPasswordIdentity()

    setForgotPasswordError('')
    setForgotPasswordSuccess('')

    if (validationError) {
      setForgotPasswordError(validationError)
      return
    }

    const email = forgotEmail.trim().toLowerCase()
    const schoolId = forgotSchoolId.trim()
    const phoneNumber = normalizePhoneNumber(forgotPhoneNumber)

    setIsRequestingOtp(true)

    try {
      const result = await requestPasswordResetOtp({
        email: email || undefined,
        schoolId: schoolId || undefined,
        phoneNumber,
      })

      if (!result.success) {
        setForgotPasswordError(result.message || 'Unable to send OTP.')
        return
      }

      setIsOtpRequested(true)
      setForgotPasswordSuccess(
        result.message || 'OTP generated successfully. Enter it below to change your password.',
      )
    } catch (error) {
      setForgotPasswordError(
        error instanceof Error ? error.message : 'Unable to request OTP right now.',
      )
    } finally {
      setIsRequestingOtp(false)
    }
  }

  const handleChangePassword = async (event) => {
    event.preventDefault()

    const validationError = validateForgotPasswordIdentity()
    const email = forgotEmail.trim().toLowerCase()
    const schoolId = forgotSchoolId.trim()
    const phoneNumber = normalizePhoneNumber(forgotPhoneNumber)
    const otp = forgotOtp.trim()
    const newPassword = forgotNewPassword
    const confirmPassword = forgotConfirmPassword

    setForgotPasswordError('')
    setForgotPasswordSuccess('')

    if (validationError) {
      setForgotPasswordError(validationError)
      return
    }

    if (!isOtpRequested) {
      setForgotPasswordError('Please request an OTP first.')
      return
    }

    if (!otp) {
      setForgotPasswordError('OTP is required.')
      return
    }

    if (!/^\d{4,8}$/.test(otp)) {
      setForgotPasswordError('OTP must be 4 to 8 digits.')
      return
    }

    if (!newPassword) {
      setForgotPasswordError('New password is required.')
      return
    }

    if (!isValidPassword(newPassword)) {
      setForgotPasswordError('New password must be at least 6 characters.')
      return
    }

    if (!confirmPassword) {
      setForgotPasswordError('Confirm password is required.')
      return
    }

    if (newPassword !== confirmPassword) {
      setForgotPasswordError('New password and confirm password do not match.')
      return
    }

    setIsChangingPassword(true)

    try {
      const result = await changePasswordWithOtp({
        email: email || undefined,
        schoolId: schoolId || undefined,
        phoneNumber,
        otp,
        newPassword,
      })

      if (!result.success) {
        setForgotPasswordError(result.message || 'Unable to change password.')
        return
      }

      setForgotPasswordSuccess(result.message || 'Password changed successfully.')
      setForgotOtp('')
      setForgotNewPassword('')
      setForgotConfirmPassword('')
      setIsOtpRequested(false)

      setAdminLoginEmail(email)
      setAdminLoginSchoolId(schoolId)
      setAdminLoginPassword('')
    } catch (error) {
      setForgotPasswordError(
        error instanceof Error ? error.message : 'Unable to change password right now.',
      )
    } finally {
      setIsChangingPassword(false)
    }
  }

  const handleAdminLoginSubmit = async (event) => {
    event.preventDefault()

    const email = adminLoginEmail.trim().toLowerCase()
    const schoolId = adminLoginSchoolId.trim()
    const password = adminLoginPassword
    const hasEmail = email.length > 0
    const hasSchoolId = schoolId.length > 0

    setAdminLoginError('')

    if (!hasEmail && !hasSchoolId) {
      setAdminLoginError('Enter either your valid email address or your School ID.')
      return
    }

    if (hasEmail && !isValidEmailAddress(email)) {
      setAdminLoginError('Please enter a valid email address.')
      return
    }

    if (hasSchoolId && !isValidSchoolId(schoolId)) {
      setAdminLoginError(
        'School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.',
      )
      return
    }

    if (!password) {
      setAdminLoginError('Password is required.')
      return
    }

    if (!isValidPassword(password)) {
      setAdminLoginError('Password must be at least 6 characters.')
      return
    }

    const loginPayload = {
      password,
      ...(hasEmail ? { email } : {}),
      ...(hasSchoolId ? { schoolId } : {}),
    }

    setIsSubmittingAdminLogin(true)

    try {
      const result = await loginAdmin(loginPayload)

      if (!result.success) {
        setAdminLoginError(result.message)
        return
      }

      setIsAdminLoginOpen(false)
      // Notify parent (App) that admin logged in so it can set session
      if (typeof onAdminLoginSuccess === 'function') {
        onAdminLoginSuccess(result.admin)
      }
    } catch (error) {
      setAdminLoginError(
        error instanceof Error ? error.message : 'Unable to login right now.',
      )
    } finally {
      setIsSubmittingAdminLogin(false)
    }
  }

  const handleSignUpSubmit = async (event) => {
    event.preventDefault()

    const email = signUpEmail.trim().toLowerCase()
    const schoolId = signUpSchoolId.trim()
    const phoneNumber = normalizePhoneNumber(signUpPhoneNumber)
    const password = signUpPassword
    const confirmPassword = signUpConfirmPassword

    setSignUpError('')
    setSignUpSuccess('')

    if (!email) {
      setSignUpError('Email account is required.')
      return
    }

    if (!isValidEmailAddress(email)) {
      setSignUpError('Please enter a valid email account.')
      return
    }

    if (!schoolId) {
      setSignUpError('School ID is required.')
      return
    }

    if (!isValidSchoolId(schoolId)) {
      setSignUpError(
        'School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.',
      )
      return
    }

    if (allInfoRecords === undefined) {
      setSignUpError('Please wait while we verify the School ID.')
      return
    }

    if (!isSchoolIdFoundInAllInfo(schoolId)) {
      setIsSignUpOpen(false)
      setIsSignUpDeniedOpen(true)
      return
    }

    if (!phoneNumber) {
      setSignUpError('Phone number is required.')
      return
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setSignUpError('Please enter a valid phone number. Example: 09123456789 or +639123456789.')
      return
    }

    if (!password) {
      setSignUpError('Password is required.')
      return
    }

    if (!isValidPassword(password)) {
      setSignUpError('Password must be at least 6 characters.')
      return
    }

    if (!confirmPassword) {
      setSignUpError('Confirm password is required.')
      return
    }

    if (password !== confirmPassword) {
      setSignUpError('Password and confirm password do not match.')
      return
    }

    setIsRegisteringAccount(true)

    try {
      const result = await registerAdmin({
        email,
        schoolId,
        phoneNumber,
        password,
      })

      if (!result.success) {
        if (result.reason === 'schoolIdNotFound') {
          setIsSignUpOpen(false)
          setIsSignUpDeniedOpen(true)
          return
        }

        setSignUpError(result.message || 'Unable to register account.')
        return
      }

      setIsSignUpOpen(false)
      setRegisteredStudentAccount(result.admin ?? { email, schoolId, role: 'student' })
      setSignUpSuccess('Your account has been registered successfully.')
      setAdminLoginEmail(email)
      setAdminLoginSchoolId(schoolId)
      setAdminLoginPassword('')
      setSignUpPhoneNumber('')
      setSignUpPassword('')
      setSignUpConfirmPassword('')
    } catch (error) {
      setSignUpError(error instanceof Error ? error.message : 'Unable to register account.')
    } finally {
      setIsRegisteringAccount(false)
    }
  }

  const handleQuickActionSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setQuickActionError('')
    setQuickActionSuccess('')
    setIsSubmittingQuickAction(true)

    try {
      await createQuickAction({
        email: String(formData.get('email') || ''),
        question: String(formData.get('question') || ''),
        source: quickActionsData.quickActions.source,
        status: quickActionsData.quickActions.defaultStatus,
      })

      form.reset()
      setIsQuickActionsOpen(false)
      setQuickActionSuccess('Your request has been submitted.')
    } catch (error) {
      setQuickActionError(
        error instanceof Error ? error.message : 'Unable to submit your request right now.',
      )
    } finally {
      setIsSubmittingQuickAction(false)
    }
  }

  return (
    <div className="landing-page">
      <style>{authResponsiveStyles}</style>

      <header className="landing-header">
        <div className="brand-lockup">
          <div className="brand-mark">
            <img alt="IBACMI" className="brand-mark__image" src={ibacmiLogo} />
          </div>

          <div className="brand-copy">
            <p className="brand-title">IBACMI - Scholarship Office</p>
           
          </div>
        </div>

        <div className="header-actions">
          <button className="button button--compact" onClick={openQuickActions} type="button">
            Quick Actions
          </button>

          <button
            className="button button--compact button--admin"
            onClick={openAdminLogin}
            type="button"
          >
            SIGN IN
          </button>
        </div>
      </header>

      <main className="landing-main">
        <div className="landing-container">
          <section className="page-heading">
            <div className="page-heading__copy">
              <span className="eyebrow">Grantee Records</span>
              <h2>SEARCH YOUR SCHOOL ID or BATCH NO./ID</h2>
              <p>
                Search a School ID or Batch No./ID to securely view grantee records. Records are
                hidden by default for privacy and controlled access.
              </p>
            </div>
          </section>

          <section className="filter-panel" aria-label="Grantee filters">
            <div className="search-field">
              <span className="material-symbols-outlined">search</span>
              <input
                placeholder="Enter exact School ID or Batch No./ID..."
                type="text"
                value={studentIdSearch}
                onChange={handleGranteeSearchChange}
              />
            </div>

            <button
              className="icon-button filter-button"
              type="button"
              aria-label="Clear search"
              title="Clear search"
              onClick={handleRefreshTable}
            >
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </section>

          <section className="table-card" aria-label="Grantee records">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>TES Award Number</th>
                    <th>Student ID</th>
                    <th>Batch No.</th>
                    <th>Status</th>
                    <th>Semester</th>
                    <th>School Year</th>
                  </tr>
                </thead>

                <tbody>
                  {!hasStudentIdSearch && (
                    <tr>
                      <td className="empty-state" colSpan={7}>
                        Enter a School ID or Batch No./ID in the search field to view records.
                      </td>
                    </tr>
                  )}

                  {hasStudentIdSearch && allInfoRecords === undefined && (
                    <tr>
                      <td className="empty-state" colSpan={7}>
                        Searching grantee record...
                      </td>
                    </tr>
                  )}

                  {hasStudentIdSearch && allInfoRecords && filteredGranteeRows.length === 0 && (
                    <tr>
                      <td className="empty-state" colSpan={7}>
                        No matching School ID or Batch No./ID found.
                      </td>
                    </tr>
                  )}

                  {hasStudentIdSearch &&
                    paginatedGranteeRows.map((grantee, index) => (
                      <tr key={grantee._id}>
                        <td data-label="No.">{grantee.no || startIndex + index + 1}</td>

                        <td className="award-cell" data-label="TES Award Number">
                          {grantee.tesAwardNumber}
                        </td>

                        <td data-label="Student ID">{grantee.studentId}</td>

                        <td className="batch-cell" data-label="Batch ID">
                          {grantee.batchId}
                        </td>

                        <td data-label="Status">
                          <StatusBadge
                            status={grantee.status}
                            tone={getStatusTone(grantee.status)}
                          />
                        </td>

                        <td data-label="Semester">{grantee.semester || '—'}</td>

                        <td data-label="School Year">{grantee.schoolYear || '—'}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              {hasStudentIdSearch ? (
                <p>
                  Showing <strong>{totalRows === 0 ? 0 : startIndex + 1}</strong> to{' '}
                  <strong>{endIndex}</strong> of <strong>{totalRows}</strong> result
                  {totalRows === 1 ? '' : 's'}
                </p>
              ) : (
                <p>
                  Search by <strong>School ID</strong> or <strong>Batch No./ID</strong> to display
                  grantee records.
                </p>
              )}

              <div className="pagination">
                <button
                  className="page-button"
                  disabled={!hasStudentIdSearch || currentPage === 1 || totalRows === 0}
                  onClick={goToPreviousPage}
                  type="button"
                  aria-label="Previous page"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {paginationRange.map((pageItem) => {
                  if (typeof pageItem === 'string') {
                    return (
                      <span className="pagination__ellipsis" key={pageItem}>
                        ...
                      </span>
                    )
                  }

                  return (
                    <button
                      key={pageItem}
                      className={`page-button ${
                        currentPage === pageItem ? 'page-button--active' : ''
                      }`}
                      disabled={!hasStudentIdSearch || totalRows === 0}
                      onClick={() => setCurrentPage(pageItem)}
                      type="button"
                    >
                      {pageItem}
                    </button>
                  )
                })}

                <button
                  className="page-button"
                  disabled={!hasStudentIdSearch || currentPage === totalPages || totalRows === 0}
                  onClick={goToNextPage}
                  type="button"
                  aria-label="Next page"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="landing-footer">
        <p>Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office | Developed By CINIFIX</p>
      </footer>

      {isQuickActionsOpen && (
        <div
          aria-labelledby="quick-actions-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close quick actions modal"
            className="modal-backdrop-button"
            onClick={closeQuickActions}
            type="button"
          />

          <form
            className="modal-card modal-card--wide auth-modal-card"
            onSubmit={handleQuickActionSubmit}
          >
            <div className="modal-header">
              <div className="modal-title-row">
                <div>
                  <p className="modal-kicker">Quick Actions</p>
                  <h3 id="quick-actions-title">Submit a Request</h3>
                </div>

                <button
                  aria-label="Close modal"
                  className="icon-button modal-close"
                  onClick={closeQuickActions}
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <p>Send a question or request to the scholarship office for review.</p>
            </div>

            <div className="modal-body">
              <label className="form-field">
                <span>Email account</span>
                <input
                  name="email"
                  placeholder={quickActionsData.quickActions.fields.email.placeholder}
                  required
                  type="email"
                />
              </label>

              <label className="form-field">
                <span>Question</span>
                <textarea
                  name="question"
                  placeholder={quickActionsData.quickActions.fields.question.placeholder}
                  required
                />
              </label>

              {quickActionError && <p className="form-error">{quickActionError}</p>}
            </div>

            <div className="modal-actions">
              <button
                className="button button--secondary"
                disabled={isSubmittingQuickAction}
                onClick={closeQuickActions}
                type="button"
              >
                Cancel
              </button>

              <button className="button" disabled={isSubmittingQuickAction} type="submit">
                {isSubmittingQuickAction ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isAdminLoginOpen && (
        <div
          aria-labelledby="admin-login-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close admin login modal"
            className="modal-backdrop-button"
            onClick={closeAdminLogin}
            type="button"
          />

          <form
            className="modal-card modal-card--admin auth-modal-card"
            onSubmit={handleAdminLoginSubmit}
          >
            <div className="admin-login-hero auth-modal-hero">
              <div className="admin-login-brand">
                <img alt="IBACMI" src={ibacmiLogo} />
              </div>

              <button
                aria-label="Close admin login"
                className="icon-button modal-close admin-login-close"
                onClick={closeAdminLogin}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <p className="modal-kicker">Administrator Access</p>
              <h3 id="admin-login-title">Sign in to Admin View</h3>
              <p>Use either your valid email address or School ID, then enter your password.</p>
            </div>

            <div className="modal-body admin-login-body auth-form-grid">
              <label className="form-field">
                <span>Email address</span>
                <input
                  autoComplete="email"
                  inputMode="email"
                  name="adminEmail"
                  placeholder="Enter email address"
                  type="email"
                  disabled={adminLoginSchoolId.trim().length > 0}
                  value={adminLoginEmail}
                  onChange={(event) => setAdminLoginEmail(event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>School ID</span>
                <input
                  autoComplete="off"
                  name="adminSchoolId"
                  placeholder="Enter School ID"
                  type="text"
                  minLength={4}
                  maxLength={30}
                  pattern="[A-Za-z0-9-]{4,30}"
                  title="School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens."
                  disabled={adminLoginEmail.trim().length > 0}
                  value={adminLoginSchoolId}
                  onChange={(event) => setAdminLoginSchoolId(event.target.value)}
                />
              </label>

              <label className="form-field auth-full-field">
                <span>Password</span>
                <input
                  autoComplete="current-password"
                  name="adminPassword"
                  placeholder="Enter password"
                  required
                  type="password"
                  minLength={6}
                  value={adminLoginPassword}
                  onChange={(event) => setAdminLoginPassword(event.target.value)}
                />
              </label>

              <div className="auth-note-box auth-full-field">
                <span className="material-symbols-outlined">info</span>
                <p>
                  You may sign in using either your registered email address or your School ID.
                  Password is still required.
                </p>
              </div>

              <div className="auth-link-row auth-full-field">
                <button
                  className="auth-text-button"
                  disabled={isSubmittingAdminLogin}
                  onClick={openForgotPassword}
                  type="button"
                >
                  Forgot Password?
                </button>

                <button
                  className="auth-text-button auth-text-button--strong"
                  disabled={isSubmittingAdminLogin}
                  onClick={openSignUp}
                  type="button"
                >
                  Create Account
                </button>
              </div>

              {adminLoginError && <p className="form-error auth-full-field">{adminLoginError}</p>}
            </div>

            <div className="modal-actions admin-login-actions auth-actions">
              <button
                className="button button--secondary"
                disabled={isSubmittingAdminLogin}
                onClick={closeAdminLogin}
                type="button"
              >
                Cancel
              </button>

              <button className="button" disabled={isSubmittingAdminLogin} type="submit">
                {isSubmittingAdminLogin ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isSignUpOpen && (
        <div
          aria-labelledby="sign-up-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close sign up modal"
            className="modal-backdrop-button"
            onClick={closeSignUp}
            type="button"
          />

          <form
            className="modal-card modal-card--admin auth-modal-card auth-modal-card--large"
            onSubmit={handleSignUpSubmit}
          >
            <div className="admin-login-hero auth-modal-hero">
              <div className="admin-login-brand">
                <img alt="IBACMI" src={ibacmiLogo} />
              </div>

              <button
                aria-label="Close sign up"
                className="icon-button modal-close admin-login-close"
                onClick={closeSignUp}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <p className="modal-kicker">Account Registration</p>
              <h3 id="sign-up-title">Create Account</h3>
              <p>
                Registration is only available for verified School IDs listed in the IBACMI
                Scholarship Office records.
              </p>
            </div>

            <div className="modal-body admin-login-body auth-form-grid">
              <label className="form-field">
                <span>Email account</span>
                <input
                  autoComplete="email"
                  inputMode="email"
                  name="signUpEmail"
                  placeholder="Enter email account"
                  required
                  type="email"
                  value={signUpEmail}
                  onChange={(event) => setSignUpEmail(event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>School ID</span>
                <input
                  autoComplete="off"
                  name="signUpSchoolId"
                  placeholder="Enter School ID"
                  required
                  type="text"
                  minLength={4}
                  maxLength={30}
                  pattern="[A-Za-z0-9-]{4,30}"
                  value={signUpSchoolId}
                  onChange={(event) => setSignUpSchoolId(event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Phone Number</span>
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  name="signUpPhoneNumber"
                  placeholder="e.g. 09123456789"
                  required
                  type="tel"
                  value={signUpPhoneNumber}
                  onChange={(event) => setSignUpPhoneNumber(event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Password</span>
                <input
                  autoComplete="new-password"
                  name="signUpPassword"
                  placeholder="Create password"
                  required
                  type="password"
                  minLength={6}
                  value={signUpPassword}
                  onChange={(event) => setSignUpPassword(event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Confirm Password</span>
                <input
                  autoComplete="new-password"
                  name="signUpConfirmPassword"
                  placeholder="Confirm password"
                  required
                  type="password"
                  minLength={6}
                  value={signUpConfirmPassword}
                  onChange={(event) => setSignUpConfirmPassword(event.target.value)}
                />
              </label>

              <div className="auth-note-box auth-full-field">
                <span className="material-symbols-outlined">verified_user</span>
                <p>
                  Your School ID will be checked against the official grantee information record
                  before account creation.
                </p>
              </div>

              {signUpError && <p className="form-error auth-full-field">{signUpError}</p>}
              {signUpSuccess && <p className="form-success auth-full-field">{signUpSuccess}</p>}
            </div>

            <div className="modal-actions admin-login-actions auth-actions">
              <button
                className="button button--secondary"
                disabled={isRegisteringAccount}
                onClick={backToLoginFromSignUp}
                type="button"
              >
                Back to Login
              </button>

              <button className="button" disabled={isRegisteringAccount} type="submit">
                {isRegisteringAccount ? 'Registering...' : 'Register Now'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isSignUpDeniedOpen && (
        <div
          aria-labelledby="sign-up-denied-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close sign up denied modal"
            className="modal-backdrop-button"
            onClick={closeSignUpDenied}
            type="button"
          />

          <section className="modal-card modal-card--success auth-modal-card auth-denied-card">
            <div className="success-modal-body auth-denied-body">
              <div className="auth-denied-icon">
                <span className="material-symbols-outlined">error</span>
              </div>

              <h3 id="sign-up-denied-title">Account Registration Not Approved</h3>
              <p>
                Sorry, you cannot proceed. Your School ID was not found in the official records.
                Please contact the IBACMI | Scholarship Office for assistance.
              </p>
            </div>

            <div className="modal-actions modal-actions--single">
              <button className="button" onClick={closeSignUpDenied} type="button">
                Back to Sign Up
              </button>
            </div>
          </section>
        </div>
      )}

      {signUpSuccess && (
        <div
          aria-labelledby="sign-up-success-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Continue to student page"
            className="modal-backdrop-button"
            onClick={continueToStudentFromRegistration}
            type="button"
          />

          <section className="modal-card modal-card--success auth-modal-card">
            <div className="success-modal-body">
              <div className="success-icon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>

              <h3 id="sign-up-success-title">Successfully Registered</h3>
              <p>{signUpSuccess} You can now continue to the student information page.</p>
            </div>

            <div className="modal-actions modal-actions--single">
              <button className="button" onClick={continueToStudentFromRegistration} type="button">
                Continue
              </button>
            </div>
          </section>
        </div>
      )}

      {isForgotPasswordOpen && (
        <div
          aria-labelledby="forgot-password-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close forgot password modal"
            className="modal-backdrop-button"
            onClick={closeForgotPassword}
            type="button"
          />

          <form
            className="modal-card modal-card--admin auth-modal-card auth-modal-card--large"
            onSubmit={handleChangePassword}
          >
            <div className="admin-login-hero auth-modal-hero">
              <div className="admin-login-brand">
                <img alt="IBACMI" src={ibacmiLogo} />
              </div>

              <button
                aria-label="Close forgot password"
                className="icon-button modal-close admin-login-close"
                onClick={closeForgotPassword}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <p className="modal-kicker">Account Recovery</p>
              <h3 id="forgot-password-title">Forgot Password</h3>
              <p>
                Verify your email or School ID with your registered phone number before changing
                your password.
              </p>
            </div>

            <div className="modal-body admin-login-body auth-form-grid">
              <label className="form-field">
                <span>Email address</span>
                <input
                  autoComplete="email"
                  inputMode="email"
                  name="forgotEmail"
                  placeholder="Enter valid email address"
                  required={!forgotSchoolId.trim()}
                  type="email"
                  disabled={forgotSchoolId.trim().length > 0 || isRequestingOtp || isChangingPassword}
                  value={forgotEmail}
                  onChange={handleForgotEmailChange}
                />
              </label>

              <label className="form-field">
                <span>School ID</span>
                <input
                  autoComplete="off"
                  name="forgotSchoolId"
                  placeholder="Enter School ID"
                  required
                  type="text"
                  minLength={4}
                  maxLength={30}
                  pattern="[A-Za-z0-9-]{4,30}"
                  title="School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens."
                  required={!forgotEmail.trim()}
                  disabled={forgotEmail.trim().length > 0 || isRequestingOtp || isChangingPassword}
                  value={forgotSchoolId}
                  onChange={handleForgotSchoolIdChange}
                />
              </label>

              <label className="form-field auth-full-field">
                <span>Phone number</span>
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  name="forgotPhoneNumber"
                  placeholder="09123456789 or +639123456789"
                  required
                  type="tel"
                  disabled={isRequestingOtp || isChangingPassword}
                  value={forgotPhoneNumber}
                  onChange={handleForgotPhoneNumberChange}
                />
              </label>

              <button
                className="button button--secondary auth-full-field"
                disabled={isRequestingOtp || isChangingPassword}
                onClick={handleRequestOtp}
                type="button"
              >
                {isRequestingOtp ? 'Sending OTP...' : isOtpRequested ? 'Resend OTP' : 'Send OTP'}
              </button>

              {isOtpRequested && (
                <>
                  <label className="form-field">
                    <span>OTP Code</span>
                    <input
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      name="forgotOtp"
                      placeholder="Enter OTP"
                      required
                      type="text"
                      maxLength={8}
                      value={forgotOtp}
                      onChange={(event) => setForgotOtp(event.target.value.replace(/\D/g, ''))}
                    />
                  </label>

                  <label className="form-field">
                    <span>New Password</span>
                    <input
                      autoComplete="new-password"
                      name="forgotNewPassword"
                      placeholder="Enter new password"
                      required
                      type="password"
                      minLength={6}
                      value={forgotNewPassword}
                      onChange={(event) => setForgotNewPassword(event.target.value)}
                    />
                  </label>

                  <label className="form-field auth-full-field">
                    <span>Confirm New Password</span>
                    <input
                      autoComplete="new-password"
                      name="forgotConfirmPassword"
                      placeholder="Confirm new password"
                      required
                      type="password"
                      minLength={6}
                      value={forgotConfirmPassword}
                      onChange={(event) => setForgotConfirmPassword(event.target.value)}
                    />
                  </label>
                </>
              )}

              {forgotPasswordError && (
                <p className="form-error auth-full-field">{forgotPasswordError}</p>
              )}
              {forgotPasswordSuccess && (
                <p className="form-success auth-full-field">{forgotPasswordSuccess}</p>
              )}
            </div>

            <div className="modal-actions admin-login-actions auth-actions">
              <button
                className="button button--secondary"
                disabled={isRequestingOtp || isChangingPassword}
                onClick={closeForgotPassword}
                type="button"
              >
                Cancel
              </button>

              <button
                className="button"
                disabled={!isOtpRequested || isRequestingOtp || isChangingPassword}
                type="submit"
              >
                {isChangingPassword ? 'Changing Password...' : 'Change Password'}
              </button>
            </div>
          </form>
        </div>
      )}

      {quickActionSuccess && (
        <div
          aria-labelledby="quick-action-success-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close success modal"
            className="modal-backdrop-button"
            onClick={() => setQuickActionSuccess('')}
            type="button"
          />

          <div className="modal-card modal-card--success">
            <div className="success-modal-body">
              <div className="success-icon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>

              <h3 id="quick-action-success-title">Submitted Successfully</h3>
              <p>{quickActionSuccess} The scholarship office can now review your request.</p>
            </div>

            <div className="modal-actions modal-actions--single">
              <button className="button" onClick={() => setQuickActionSuccess('')} type="button">
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="scroll-progress" style={{ '--scroll-progress': progress }} />
    </div>
  )
}

const authResponsiveStyles = `
.auth-modal-card {
  width: min(100%, 520px);
  max-height: min(760px, calc(100vh - 32px));
  overflow-y: auto;
}

.auth-modal-card--large {
  width: min(100%, 720px);
}

.auth-modal-hero {
  position: relative;
}

.auth-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.auth-full-field {
  grid-column: 1 / -1;
}

.auth-link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.auth-text-button {
  border: 0;
  background: transparent;
  color: #7c2d12;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  padding: 0;
  text-align: left;
}

.auth-text-button:hover {
  text-decoration: underline;
}

.auth-text-button--strong {
  color: #c2410c;
}

.auth-note-box {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid #fed7aa;
  border-radius: 12px;
  background: #fff7ed;
  color: #7c2d12;
  padding: 12px;
}

.auth-note-box .material-symbols-outlined {
  color: #f97316;
}

.auth-note-box p {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
}

.auth-denied-card {
  width: min(100%, 460px);
}

.auth-denied-body {
  padding: 32px 24px 20px;
}

.auth-denied-icon {
  display: inline-flex;
  width: 58px;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #fef2f2;
  color: #b91c1c;
  margin-bottom: 14px;
}

.auth-denied-icon .material-symbols-outlined {
  font-size: 34px;
}

.form-success {
  border: 1px solid #a7f3d0;
  border-radius: 10px;
  background: #ecfdf5;
  color: #047857;
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  padding: 10px 12px;
}

@media (max-width: 640px) {
  .modal-overlay {
    align-items: flex-end;
    padding: 10px;
  }

  .auth-modal-card,
  .auth-modal-card--large {
    width: 100%;
    max-height: calc(100vh - 20px);
    border-radius: 18px 18px 10px 10px;
  }

  .auth-form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .auth-link-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .auth-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .auth-actions .button {
    width: 100%;
  }

  .admin-login-hero {
    padding: 24px 18px;
  }

  .admin-login-body {
    padding: 18px;
  }

  .modal-actions {
    padding: 16px 18px;
  }
}
`

export default AllLanding
