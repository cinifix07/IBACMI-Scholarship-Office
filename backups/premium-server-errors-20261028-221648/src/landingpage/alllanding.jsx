import IBACMILoader from '../components/IBACMILoader.jsx'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import quickActionsData from '../../data.json'
import ibacmiLogo from '../assets/IBACMI.png'
import scholarshipOfficeBanner from '../assets/desktop.png'
import VisitorSupport from './VisitorSupport'
import AccountVerification from './AccountVerification'
import DocumentationGallery from '../documentation/DocumentationGallery'
import './lan.css'
import { DEGREE_PROGRAMS } from '../../convex/studentProfileRules'

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

function sanitizePhoneNumberInput(phoneNumber) {
  return phoneNumber.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
}

function sanitizeSingleParagraphInput(value) {
  return value.replace(/[\r\n]+/g, ' ').replace(/\s{2,}/g, ' ')
}

function normalizePortalText(value) {
  return String(value ?? '').toUpperCase().replace(/Ñ/g, 'N')
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

const applicantPdfMaxSize = 10 * 1024 * 1024
function isValidApplicantPdf(file) {
  if (!file) return false

  return file.type === 'application/pdf' || /\.pdf$/i.test(file.name)
}

function formatFileSize(size) {
  if (!size) return ''

  const megabytes = size / (1024 * 1024)
  return `${megabytes.toFixed(megabytes >= 10 ? 0 : 1)} MB`
}

function isValidPassword(password) {
  return password.length >= 6
}

function withTimeout(promise, timeoutMs, message) {
  let timeoutId
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs)
  })

  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutId))
}

const studentPortalFields = [
  { label: 'Student ID', name: 'studentId', autoComplete: 'off', required: true },
  { label: 'Last Name', name: 'lastName', autoComplete: 'family-name', required: true },
  { label: 'First Name', name: 'firstName', autoComplete: 'given-name', required: true },
  { label: 'Ext Name (JR)', name: 'extensionName', autoComplete: 'honorific-suffix' },
  { label: 'Middle Name', name: 'middleName', autoComplete: 'additional-name' },
  { label: 'Learner Reference Number (LRN)', name: 'lrn', autoComplete: 'off', inputMode: 'numeric', pattern: '\\d{12}', helper: 'Optional if not assigned' },
  { label: 'PhilSys ID Number', name: 'philSysIdNumber', autoComplete: 'off', helper: 'Optional' },
  { label: '4Ps ID Number', name: 'fourPsIdNumber', autoComplete: 'off', helper: 'Optional' },
]

const fatherPortalFields = [
  { label: 'Last Name', name: 'fatherLastName', autoComplete: 'family-name' },
  { label: 'First Name', name: 'fatherFirstName', autoComplete: 'given-name' },
  { label: 'Middle Name', name: 'fatherMiddleName', autoComplete: 'additional-name' },
]

const motherPortalFields = [
  { label: 'Last Name', name: 'motherLastName', autoComplete: 'family-name' },
  { label: 'First Name', name: 'motherFirstName', autoComplete: 'given-name' },
  { label: 'Middle Name', name: 'motherMiddleName', autoComplete: 'additional-name' },
]

const portalCourseOptions = DEGREE_PROGRAMS

const portalFormSteps = [
  'Student Information',
  'Parent Information',
  'Permanent Address',
  'Additional Information',
  'Required Documents',
  'Review & Submit',
]

const contactPortalFields = [
  {
    label: 'Street / Purok / Barangay',
    name: 'streetBarangay',
    autoComplete: 'address-line1',
    required: true,
  },
  { label: 'City / Municipality', name: 'cityMunicipality', required: true },
  { label: 'Province', name: 'province', required: true },
  { label: 'Region', name: 'region', required: true },
  { label: 'ZIP Code', name: 'zipCode', autoComplete: 'postal-code', inputMode: 'numeric', required: true },
  {
    label: 'Mobile No.',
    name: 'mobileNumber',
    autoComplete: 'tel',
    inputMode: 'tel',
    type: 'tel',
    pattern: '\\+?[0-9]*',
    required: true,
  },
  {
    label: 'Email Address',
    name: 'emailAddress',
    autoComplete: 'email',
    inputMode: 'email',
    type: 'email',
    required: true,
  },
]

function AllLanding({ onAdminLoginSuccess, onStudentRegistrationSuccess }) {
  const granteeSearchRef = useRef(null)
  const [isAccountVerificationOpen, setIsAccountVerificationOpen] = useState(false)
  const [granteeSearchGuidance, setGranteeSearchGuidance] = useState('')
  const portalFormRef = useRef(null)
  const installPromptRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [isAppInstalled, setIsAppInstalled] = useState(() => {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    )
  })

  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  const [isUnifastPortalOpen, setIsUnifastPortalOpen] = useState(false)
  const [isGranteeQuestionOpen, setIsGranteeQuestionOpen] = useState(false)
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isPortalPrivacyOpen, setIsPortalPrivacyOpen] = useState(false)
  const [isPortalSubmissionSuccessOpen, setIsPortalSubmissionSuccessOpen] = useState(false)

  const [adminLoginError, setAdminLoginError] = useState('')
  const [quickActionError, setQuickActionError] = useState('')
  const [quickActionSuccess, setQuickActionSuccess] = useState('')
  const [portalError, setPortalError] = useState('')
  const [portalSuccess, setPortalSuccess] = useState('')
  const [portalStatusMessage, setPortalStatusMessage] = useState('')
  const [portalDocumentFiles, setPortalDocumentFiles] = useState({
    psaFile: null,
    schoolIdFile: null,
    corFile: null,
    pwdIdFile: null,
    fourPsFile: null,
  })
  const [portalReviewData, setPortalReviewData] = useState(null)
  const [portalStep, setPortalStep] = useState(0)
  const [portalUploadProgress, setPortalUploadProgress] = useState({})
  const [hasAcknowledgedPortalApplication, setHasAcknowledgedPortalApplication] = useState(false)

  const [isSubmittingAdminLogin, setIsSubmittingAdminLogin] = useState(false)
  const [isSubmittingQuickAction, setIsSubmittingQuickAction] = useState(false)
  const [isSubmittingPortal, setIsSubmittingPortal] = useState(false)
  const [isRegisteringAccount, setIsRegisteringAccount] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [studentIdSearch, setStudentIdSearch] = useState('')
  const [debouncedStudentIdSearch, setDebouncedStudentIdSearch] = useState('')

  const [adminLoginIdentifier, setAdminLoginIdentifier] = useState('')
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

  const createApplicant = useMutation(api.applicants.create)
  const generateApplicantUploadUrl = useMutation(api.applicants.generateUploadUrl)
  const createQuickAction = useMutation(api.quickActions.create)
  const loginAdmin = useMutation(api.adminAuth.login)
  const registerAdmin = useMutation(api.adminAuth.register)
  const requestPasswordResetOtp = useMutation(api.adminAuth.requestPasswordResetOtp)
  const changePasswordWithOtp = useMutation(api.adminAuth.changePasswordWithOtp)
  const allInfoRecords = useQuery(
    api.allinfo.searchPublic,
    debouncedStudentIdSearch ? { searchValue: debouncedStudentIdSearch } : 'skip',
  )
  const applicantPortal = useQuery(api.applicantPortal.get)

  const granteeRows = useMemo(() => allInfoRecords ?? [], [allInfoRecords])
  const hasStudentIdSearch = studentIdSearch.trim().length > 0
  const isPortalStatusLoading = applicantPortal === undefined
  const isApplicantPortalOpen = applicantPortal?.isReceivingApplicants === true

  useEffect(() => {
    const handleInstallPrompt = (event) => {
      event.preventDefault()
      installPromptRef.current = event
    }
    const handleAppInstalled = () => {
      installPromptRef.current = null
      setIsAppInstalled(true)
    }

    window.addEventListener('beforeinstallprompt', handleInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleDownloadApp = async () => {
    if (isAppInstalled) {
      window.alert('The IBACMI Scholarship web app is already installed on this device.')
      return
    }

    const installPrompt = installPromptRef.current
    if (installPrompt) {
      await installPrompt.prompt()
      await installPrompt.userChoice
      installPromptRef.current = null
      return
    }

    window.alert(
      'To install the web app, open your browser menu and choose “Install app” or “Add to Home Screen”.',
    )
  }

  const filteredGranteeRows = granteeRows

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

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedStudentIdSearch(studentIdSearch.trim())
    }, 500)

    return () => window.clearTimeout(timeoutId)
  }, [studentIdSearch])

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
  }, [
    onStudentRegistrationSuccess,
    registeredStudentAccount,
    setSignUpSuccess,
    setRegisteredStudentAccount,
    setSignUpEmail,
    setSignUpSchoolId,
    setSignUpPassword,
    setSignUpConfirmPassword,
  ])

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
      !isUnifastPortalOpen &&
      !isGranteeQuestionOpen &&
      !isAdminLoginOpen &&
      !isForgotPasswordOpen &&
      !isSignUpOpen &&
      !isPortalPrivacyOpen &&
      !isPortalSubmissionSuccessOpen &&
      !portalStatusMessage &&
      !signUpSuccess &&
      !quickActionSuccess
    ) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isSubmittingPortal) return

        if (isPortalPrivacyOpen) {
          setIsPortalPrivacyOpen(false)
          return
        }

        if (isPortalSubmissionSuccessOpen) {
          setIsPortalSubmissionSuccessOpen(false)
          return
        }

        setIsQuickActionsOpen(false)
        setIsUnifastPortalOpen(false)
        setIsGranteeQuestionOpen(false)
        setPortalError('')
        setPortalSuccess('')
        setPortalReviewData(null)
        setPortalDocumentFiles({
          psaFile: null,
          schoolIdFile: null,
          corFile: null,
          pwdIdFile: null,
          fourPsFile: null,
        })
        setIsAdminLoginOpen(false)
        setIsSubmittingAdminLogin(false)
        setIsForgotPasswordOpen(false)
        setIsSignUpOpen(false)
        setPortalStatusMessage('')
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
    isUnifastPortalOpen,
    isGranteeQuestionOpen,
    isAdminLoginOpen,
    isForgotPasswordOpen,
    isSignUpOpen,
    isPortalPrivacyOpen,
    isPortalSubmissionSuccessOpen,
    isSubmittingPortal,
    portalStatusMessage,
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

  const openUnifastPortal = () => {
    if (applicantPortal === undefined) {
      setPortalStatusMessage('Please wait while the UNIFAST portal status is loading.')
      return
    }

    if (!applicantPortal.isReceivingApplicants) {
      setPortalStatusMessage(
        'The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.',
      )
      return
    }

    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setIsPortalSubmissionSuccessOpen(false)
    setIsGranteeQuestionOpen(true)
  }

  const openStudentInformationForm = () => {
    setIsGranteeQuestionOpen(false)
    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setIsPortalSubmissionSuccessOpen(false)
    setIsUnifastPortalOpen(true)
  }

  const openStudentLoginFromPortal = () => {
    setIsGranteeQuestionOpen(false)
    openAdminLogin()
  }

  const closeUnifastPortal = () => {
    if (isSubmittingPortal) return

    setIsGranteeQuestionOpen(false)
    setIsUnifastPortalOpen(false)
    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setPortalDocumentFiles({
      psaFile: null,
      schoolIdFile: null,
      corFile: null,
      pwdIdFile: null,
      fourPsFile: null,
    })
    setPortalReviewData(null)
  }

  const uploadApplicantPdf = async (file, documentKey) => {
    const uploadUrl = await generateApplicantUploadUrl({})
    setPortalUploadProgress((current) => ({ ...current, [documentKey]: 0 }))
    const result = await new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('POST', uploadUrl)
      request.timeout = 120000
      request.ontimeout = () => reject(new Error('Document upload timed out. Please try again.'))
      request.setRequestHeader('Content-Type', 'application/pdf')
      request.upload.onprogress = (event) => {
        if (event.lengthComputable) setPortalUploadProgress((current) => ({ ...current, [documentKey]: Math.round((event.loaded / event.total) * 100) }))
      }
      request.onload = () => {
        if (request.status < 200 || request.status >= 300) {
          try { reject(new Error(JSON.parse(request.responseText)?.message || `Unable to upload ${file.name}.`)) }
          catch { reject(new Error(`Unable to upload ${file.name}.`)) }
          return
        }
        try { resolve(JSON.parse(request.responseText)) }
        catch { reject(new Error('Upload service returned an invalid response.')) }
      }
      request.onerror = () => reject(new Error(`Unable to upload ${file.name}. Check your internet connection and try again.`))
      request.send(file)
    })
    if (!result.storageId) throw new Error(`Upload service did not return storage for ${file.name}.`)
    setPortalUploadProgress((current) => ({ ...current, [documentKey]: 100 }))
    return result.storageId
  }

  const previewApplicantPdf = (file) => {
    if (!file) return
    const previewUrl = URL.createObjectURL(file)
    window.open(previewUrl, '_blank', 'noopener,noreferrer')
    window.setTimeout(() => URL.revokeObjectURL(previewUrl), 60_000)
  }

  const removeApplicantPdf = (name) => {
    const input = portalFormRef.current?.elements.namedItem(name)
    if (input) input.value = ''
    setPortalDocumentFiles((current) => ({ ...current, [name]: null }))
    setPortalReviewData(null)
    setPortalError('')
  }

  const renderPortalPdfControls = (name) => {
    const file = portalDocumentFiles[name]
    if (!file && !isSubmittingPortal) return null
    return <span className="portal-document-controls">
      {file && <>
        <button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); previewApplicantPdf(file) }}>Preview</button>
        <button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); removeApplicantPdf(name) }}>Remove</button>
      </>}
      {isSubmittingPortal && portalUploadProgress[name] !== undefined && <IBACMILoader variant="compact" progress={portalUploadProgress[name]} message={portalUploadProgress[name] >= 100 ? "Saving uploaded document…" : "Uploading application document…"} />}
    </span>
  }

  const handlePortalDocumentChange = async (event) => {
    const { files, name } = event.target
    const file = files?.[0] ?? null

    setPortalError('')
    setPortalSuccess('')
    setPortalReviewData(null)

    if (!file) {
      setPortalDocumentFiles((currentFiles) => ({
        ...currentFiles,
        [name]: null,
      }))
      return
    }

    if (!isValidApplicantPdf(file)) {
      event.target.value = ''
      setPortalDocumentFiles((currentFiles) => ({
        ...currentFiles,
        [name]: null,
      }))
      setPortalError('Please upload PDF files only for all document requirements.')
      return
    }

    if (file.size > applicantPdfMaxSize) {
      event.target.value = ''
      setPortalDocumentFiles((currentFiles) => ({
        ...currentFiles,
        [name]: null,
      }))
      setPortalError('Each uploaded PDF must be 10MB or smaller.')
      return
    }

    const header = await file.slice(0, 5).text()
    if (header !== '%PDF-') {
      event.target.value = ''
      setPortalDocumentFiles((currentFiles) => ({ ...currentFiles, [name]: null }))
      setPortalError('This file does not appear to be a valid PDF. Choose a valid PDF document.')
      return
    }

    setPortalDocumentFiles((currentFiles) => ({
      ...currentFiles,
      [name]: file,
    }))
  }

  const handlePortalTextInput = (event) => {
    const input = event.target
    if (!(input instanceof HTMLInputElement) || input.name === 'emailAddress') return
    if (!['text', 'tel', 'search', 'url'].includes(input.type)) return

    const { selectionStart, selectionEnd } = input
    const normalizedValue = normalizePortalText(input.value)
    if (input.value === normalizedValue) return

    const normalizedStart = selectionStart === null
      ? null
      : normalizePortalText(input.value.slice(0, selectionStart)).length
    const normalizedEnd = selectionEnd === null
      ? null
      : normalizePortalText(input.value.slice(0, selectionEnd)).length
    input.value = normalizedValue
    if (normalizedStart !== null && normalizedEnd !== null) {
      input.setSelectionRange(normalizedStart, normalizedEnd)
    }
  }

  const handleUnifastPortalSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    form.querySelectorAll('input').forEach((input) => {
      if (input.name !== 'emailAddress' && ['text', 'tel', 'search', 'url'].includes(input.type)) {
        input.value = normalizePortalText(input.value)
      }
    })
    const formData = new FormData(form)
    const mobileNumber = normalizePhoneNumber(String(formData.get('mobileNumber') || ''))
    const emailAddress = String(formData.get('emailAddress') || '').trim().toLowerCase()
    const psaFile = formData.get('psaFile')
    const schoolIdFile = formData.get('schoolIdFile')
    const corFile = formData.get('corFile')
    const pwdIdFile = formData.get('pwdIdFile')
    const fourPsFile = formData.get('fourPsFile')
    setPortalError('')
    setPortalSuccess('')

    if (!applicantPortal?.isReceivingApplicants) {
      setPortalError('The UNIFAST portal is closed for applicants right now.')
      return
    }

    const requiredFields = [
      ['Student ID', 'studentId'], ['Last Name', 'lastName'], ['Given / First Name', 'firstName'],
      ['Birthdate', 'birthDate'], ['Program', 'course'], ['Year level', 'year'],
      ['Street / Purok / Barangay', 'streetBarangay'], ['City / Municipality', 'cityMunicipality'],
      ['Province', 'province'], ['Region', 'region'], ['ZIP Code', 'zipCode'],
    ]
    for (const [label, name] of requiredFields) {
      if (!String(formData.get(name) || '').trim()) {
        setPortalError(`${label} is required.`)
        const targetStep = ['streetBarangay', 'cityMunicipality', 'province', 'region', 'zipCode'].includes(name) ? 2 : 0
        setPortalStep(targetStep)
        window.setTimeout(() => form.elements.namedItem(name)?.focus(), 0)
        return
      }
    }
    const studentId = String(formData.get('studentId') || '').trim()
    if (!isValidSchoolId(studentId)) {
      setPortalStep(0)
      setPortalError('Student ID must be 4 to 30 letters, numbers, or hyphens.')
      return
    }
    const lrn = String(formData.get('lrn') || '').trim()
    if (lrn && !/^\d{12}$/.test(lrn)) {
      setPortalStep(0)
      setPortalError('LRN must contain exactly 12 digits.')
      return
    }
    const birthDate = String(formData.get('birthDate') || '')
    if (!birthDate || new Date(`${birthDate}T00:00:00`) > new Date()) {
      setPortalStep(0)
      setPortalError('Enter a valid birthdate that is not in the future.')
      return
    }
    if (!isValidPhoneNumber(mobileNumber)) {
      setPortalStep(2)
      setPortalError('Please enter a valid mobile number. Example: 09123456789 or +639123456789.')
      return
    }
    if (!isValidEmailAddress(emailAddress)) {
      setPortalStep(2)
      setPortalError('Please enter a valid email address.')
      return
    }
    if (formData.get('fatherInformationUnavailable') !== 'on' && (!String(formData.get('fatherLastName') || '').trim() || !String(formData.get('fatherFirstName') || '').trim())) {
      setPortalStep(1)
      setPortalError("Enter father's last and given name, or select Information unavailable.")
      return
    }
    if (formData.get('motherInformationUnavailable') !== 'on' && (!String(formData.get('motherLastName') || '').trim() || !String(formData.get('motherFirstName') || '').trim())) {
      setPortalStep(1)
      setPortalError("Enter mother's maiden last and given name, or select Information unavailable.")
      return
    }
    if (!(psaFile instanceof File) || !psaFile.size || !isValidApplicantPdf(psaFile)) {
      setPortalStep(4)
      setPortalError('Please upload a valid PSA Birth Certificate PDF.')
      return
    }
    if (!(schoolIdFile instanceof File) || !schoolIdFile.size || !isValidApplicantPdf(schoolIdFile)) {
      setPortalStep(4)
      setPortalError('Please upload a valid School ID or valid ID PDF.')
      return
    }
    const optionalFiles = [pwdIdFile, fourPsFile, corFile].filter((file) => file instanceof File && file.size)
    if ([psaFile, schoolIdFile, ...optionalFiles].some((file) => file.size > applicantPdfMaxSize)) {
      setPortalStep(4)
      setPortalError('Each uploaded PDF must be 10MB or smaller.')
      return
    }
    for (const file of [psaFile, schoolIdFile, ...optionalFiles]) {
      if (!isValidApplicantPdf(file) || await file.slice(0, 5).text() !== '%PDF-') {
        setPortalStep(4)
        setPortalError(`${file.name} is not a valid PDF document.`)
        return
      }
    }
    if (!formData.get('sexCode') || !formData.get('course') || !formData.get('year')) {
      setPortalStep(0)
      setPortalError('Select sex, program, and year level.')
      return
    }
    if (!formData.get('soloParentDependent') || !formData.get('firstGeneration')) {
      setPortalStep(3)
      setPortalError('Answer both additional information questions.')
      return
    }

    setPortalReviewData({
      studentId,
      lrn,
      philSysIdNumber: String(formData.get('philSysIdNumber') || '').trim(),
      fourPsIdNumber: String(formData.get('fourPsIdNumber') || '').trim(),
      lastName: String(formData.get('lastName') || '').trim(),
      firstName: String(formData.get('firstName') || '').trim(),
      extensionName: String(formData.get('extensionName') || '').trim(),
      middleName: String(formData.get('middleName') || '').trim(),
      gender: Number(formData.get('sexCode')) === 0 ? 'Male' : 'Female',
      sexCode: Number(formData.get('sexCode')),
      birthDate,
      course: String(formData.get('course') || ''),
      year: String(formData.get('year') || ''),
      yearLevelCode: Number(String(formData.get('year') || '').charAt(0)),
      fatherInformationUnavailable: formData.get('fatherInformationUnavailable') === 'on',
      motherInformationUnavailable: formData.get('motherInformationUnavailable') === 'on',
      fatherLastName: String(formData.get('fatherLastName') || '').trim(),
      fatherFirstName: String(formData.get('fatherFirstName') || '').trim(),
      fatherMiddleName: String(formData.get('fatherMiddleName') || '').trim(),
      motherLastName: String(formData.get('motherLastName') || '').trim(),
      motherFirstName: String(formData.get('motherFirstName') || '').trim(),
      motherMiddleName: String(formData.get('motherMiddleName') || '').trim(),
      streetBarangay: String(formData.get('streetBarangay') || '').trim(),
      cityMunicipality: String(formData.get('cityMunicipality') || '').trim(),
      province: String(formData.get('province') || '').trim(),
      region: String(formData.get('region') || '').trim(),
      address: ['streetBarangay', 'cityMunicipality', 'province', 'region'].map((key) => String(formData.get(key) || '').trim()).join(', '),
      zipCode: String(formData.get('zipCode') || '').trim(),
      pwdId: String(formData.get('pwdId') || '').trim(),
      mobileNumber,
      emailAddress,
      hasDisability: formData.get('hasDisability') === 'yes',
      disabilityType: String(formData.get('disabilityType') || '').trim(),
      soloParentDependent: Number(formData.get('soloParentDependent')),
      firstGeneration: Number(formData.get('firstGeneration')),
      isIndigenous: formData.get('isIndigenous') === 'yes',
      indigenousGroup: String(formData.get('indigenousGroup') || '').trim(),
      applicantClassification: 'TES Applicant',
      psaFile,
      schoolIdFile,
      corFile: corFile instanceof File && corFile.size ? corFile : null,
      pwdIdFile: pwdIdFile instanceof File && pwdIdFile.size ? pwdIdFile : null,
      fourPsFile: fourPsFile instanceof File && fourPsFile.size ? fourPsFile : null,
    })
    setPortalStep(5)
  }

  const validatePortalStep = (step) => {
    const panel = portalFormRef.current?.querySelector(`[data-portal-step="${step}"]`)
    if (!panel) return true
    const invalid = [...panel.querySelectorAll('input, select, textarea')].find((field) => field.required && !field.checkValidity())
    if (invalid) {
      invalid.reportValidity()
      invalid.focus()
      return false
    }
    return true
  }

  const movePortalStep = (nextStep) => {
    setPortalError('')
    if (nextStep > portalStep && !validatePortalStep(portalStep)) return
    setPortalStep(nextStep)
  }

  const handleEditPortalInformation = () => {
    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setPortalReviewData(null)
    setPortalStep(0)
  }

  const handleOpenPortalPrivacy = () => {
    if (!portalReviewData) return

    setPortalError('')
    setPortalSuccess('')

    if (!applicantPortal?.isReceivingApplicants) {
      setPortalError('The UNIFAST portal is closed for applicants right now.')
      return
    }

    if (!hasAcknowledgedPortalApplication) {
      setPortalError('Please certify that your information and documents are true and accurate.')
      return
    }

    setIsPortalPrivacyOpen(true)
  }

  const handleConfirmPortalSubmit = async () => {
    if (!portalReviewData) return

    setPortalError('')
    setPortalSuccess('')

    if (!applicantPortal?.isReceivingApplicants) {
      setPortalError('The UNIFAST portal is closed for applicants right now.')
      return
    }

    setIsSubmittingPortal(true)

    try {
      const [psaFileStorageId, schoolIdFileStorageId, corFileStorageId, pwdIdFileStorageId, fourPsFileStorageId] = await Promise.all([
        uploadApplicantPdf(portalReviewData.psaFile, 'psaFile'),
        uploadApplicantPdf(portalReviewData.schoolIdFile, 'schoolIdFile'),
        portalReviewData.corFile ? uploadApplicantPdf(portalReviewData.corFile, 'corFile') : Promise.resolve(undefined),
        portalReviewData.pwdIdFile ? uploadApplicantPdf(portalReviewData.pwdIdFile, 'pwdIdFile') : Promise.resolve(undefined),
        portalReviewData.fourPsFile ? uploadApplicantPdf(portalReviewData.fourPsFile, 'fourPsFile') : Promise.resolve(undefined),
      ])

      const applicantSubmission = {
        studentId: portalReviewData.studentId,
        lastName: portalReviewData.lastName,
        firstName: portalReviewData.firstName,
        extensionName: portalReviewData.extensionName,
        middleName: portalReviewData.middleName,
        gender: portalReviewData.gender,
        sexCode: portalReviewData.sexCode,
        birthDate: portalReviewData.birthDate,
        course: portalReviewData.course,
        year: portalReviewData.year,
        yearLevelCode: portalReviewData.yearLevelCode,
        lrn: portalReviewData.lrn,
        philSysIdNumber: portalReviewData.philSysIdNumber,
        fourPsIdNumber: portalReviewData.fourPsIdNumber,
        fatherLastName: portalReviewData.fatherLastName,
        fatherFirstName: portalReviewData.fatherFirstName,
        fatherMiddleName: portalReviewData.fatherMiddleName,
        motherLastName: portalReviewData.motherLastName,
        motherFirstName: portalReviewData.motherFirstName,
        motherMiddleName: portalReviewData.motherMiddleName,
        fatherInformationUnavailable: portalReviewData.fatherInformationUnavailable,
        motherInformationUnavailable: portalReviewData.motherInformationUnavailable,
        address: portalReviewData.address,
        streetBarangay: portalReviewData.streetBarangay,
        cityMunicipality: portalReviewData.cityMunicipality,
        province: portalReviewData.province,
        region: portalReviewData.region,
        zipCode: portalReviewData.zipCode,
        pwdId: portalReviewData.pwdId,
        mobileNumber: portalReviewData.mobileNumber,
        emailAddress: portalReviewData.emailAddress,
        hasDisability: portalReviewData.hasDisability,
        disabilityType: portalReviewData.disabilityType,
        soloParentDependent: portalReviewData.soloParentDependent,
        firstGeneration: portalReviewData.firstGeneration,
        isIndigenous: portalReviewData.isIndigenous,
        indigenousGroup: portalReviewData.indigenousGroup,
        applicantClassification: 'TES Applicant',
        psaFileStorageId,
        psaFileName: portalReviewData.psaFile.name,
        schoolIdFileStorageId,
        schoolIdFileName: portalReviewData.schoolIdFile.name,
        ...(corFileStorageId ? { corFileStorageId, corFileName: portalReviewData.corFile.name } : {}),
      }

      if (pwdIdFileStorageId && portalReviewData.pwdIdFile) {
        applicantSubmission.pwdIdFileStorageId = pwdIdFileStorageId
        applicantSubmission.pwdIdFileName = portalReviewData.pwdIdFile.name
      }

      if (fourPsFileStorageId && portalReviewData.fourPsFile) {
        applicantSubmission.fourPsFileStorageId = fourPsFileStorageId
        applicantSubmission.fourPsFileName = portalReviewData.fourPsFile.name
      }

      const result = await createApplicant(applicantSubmission)

      if (!result.success) {
        setIsPortalPrivacyOpen(false)
        setPortalError(result.message || 'Unable to submit applicant information.')
        return
      }

      portalFormRef.current?.reset()
      setPortalDocumentFiles({
        psaFile: null,
        schoolIdFile: null,
        corFile: null,
        pwdIdFile: null,
        fourPsFile: null,
      })
      setPortalUploadProgress({})
      setPortalStep(0)
      setHasAcknowledgedPortalApplication(false)
      setPortalReviewData(null)
      setPortalSuccess('')
      setIsPortalPrivacyOpen(false)
      setIsUnifastPortalOpen(false)
      setIsPortalSubmissionSuccessOpen(true)
    } catch (error) {
      setIsPortalPrivacyOpen(false)
      setPortalError(
        error instanceof Error ? error.message : 'Unable to submit applicant information right now.',
      )
    } finally {
      setIsSubmittingPortal(false)
    }
  }

  const openAdminLogin = () => {
    setAdminLoginError('')
    setAdminLoginIdentifier('')
    setAdminLoginPassword('')
    setIsAdminLoginOpen(true)
  }

  const continueAccountVerification = (destination) => {
    setIsAccountVerificationOpen(false)
    if (destination === 'login') openAdminLogin()
    else openSignUp()
    requestAnimationFrame(() => {
      document.querySelector(destination === 'login' ? '#admin-login-title' : '#sign-up-title')
        ?.closest('.modal-card')?.querySelector('input')?.focus()
    })
  }

  const returnToGranteeSearch = () => {
    setIsAccountVerificationOpen(false)
    setGranteeSearchGuidance('Palihog pangitaa una imong pangalan sa official grantee list sa dili pa mag-create og account.')
    requestAnimationFrame(() => {
      granteeSearchRef.current?.focus({ preventScroll: true })
      granteeSearchRef.current?.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    })
  }

  const closeAdminLogin = () => {
    setIsAdminLoginOpen(false)
    setIsSubmittingAdminLogin(false)
    setAdminLoginError('')
    setAdminLoginIdentifier('')
    setAdminLoginPassword('')
  }

  const openSignUp = () => {
    const identifier = adminLoginIdentifier.trim()
    const identifierIsEmail = identifier.includes('@')

    setIsAdminLoginOpen(false)
    setIsSignUpOpen(true)
    setSignUpError('')
    setSignUpSuccess('')
    setSignUpEmail(identifierIsEmail ? identifier.toLowerCase() : '')
    setSignUpSchoolId(identifierIsEmail ? '' : identifier)
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
    setAdminLoginIdentifier(signUpEmail || signUpSchoolId)
    setAdminLoginPassword('')
    setIsAdminLoginOpen(true)
  }

  const openForgotPassword = () => {
    const identifier = adminLoginIdentifier.trim()
    const identifierIsEmail = identifier.includes('@')

    setIsAdminLoginOpen(false)
    setIsForgotPasswordOpen(true)
    setForgotPasswordError('')
    setForgotPasswordSuccess('')
    setIsOtpRequested(false)
    setForgotEmail(identifierIsEmail ? identifier.toLowerCase() : '')
    setForgotSchoolId(identifierIsEmail ? '' : identifier)
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
    setDebouncedStudentIdSearch('')
    setCurrentPage(1)
  }

  const handleGranteeSearchChange = (event) => {
    setStudentIdSearch(event.target.value)
    setCurrentPage(1)
  }

  const handlePhoneInput = (event) => {
    event.target.value = sanitizePhoneNumberInput(event.target.value)
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
    setForgotPhoneNumber(sanitizePhoneNumberInput(event.target.value))
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

      setAdminLoginIdentifier(email || schoolId)
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

    const identifier = adminLoginIdentifier.trim()
    const password = adminLoginPassword
    const identifierIsEmail = identifier.includes('@')
    const email = identifierIsEmail ? identifier.toLowerCase() : ''
    const schoolId = identifierIsEmail ? '' : identifier

    setAdminLoginError('')

    if (!identifier) {
      setAdminLoginError('Enter your official registered email address or School ID.')
      return
    }

    if (identifierIsEmail && !isValidEmailAddress(email)) {
      setAdminLoginError('Please enter a valid registered email address.')
      return
    }

    if (!identifierIsEmail && !isValidSchoolId(schoolId)) {
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
      ...(identifierIsEmail ? { email } : { schoolId }),
    }

    setIsSubmittingAdminLogin(true)

    try {
      const result = await withTimeout(
        loginAdmin(loginPayload),
        15000,
        'Login is taking too long. Please check your internet connection is running, then try again.',
      )

      if (!result.success) {
        setAdminLoginError(result.message || 'Invalid admin credentials.')
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
        setSignUpError('Dili makompleto ang pagrehistro gamit niini nga mga detalye. Palihog i-check ang imong impormasyon, pag-login o gamita ang Forgot Password kung naa na kay account, o kontaka ang Scholarship Office.')
        return
      }

      setIsSignUpOpen(false)
      setRegisteredStudentAccount(result.admin ?? { email, schoolId, role: 'student' })
      setSignUpSuccess('Your account has been registered successfully.')
      setAdminLoginIdentifier(email || schoolId)
      setAdminLoginPassword('')
      setSignUpPhoneNumber('')
      setSignUpPassword('')
      setSignUpConfirmPassword('')
    } catch {
      setSignUpError('Dili makompleto ang pagrehistro karon. Palihog sulayi pag-usab o kontaka ang Scholarship Office.')
    } finally {
      setIsRegisteringAccount(false)
    }
  }

  const handleQuickActionSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '').trim().toLowerCase()
    const studentId = String(formData.get('studentId') || '').trim()
    const lastName = String(formData.get('lastName') || '').trim()
    const firstName = String(formData.get('firstName') || '').trim()
    const middleInitial = String(formData.get('middleInitial') || '').trim()
    const question = sanitizeSingleParagraphInput(
      String(formData.get('question') || ''),
    ).trim()

    setQuickActionError('')
    setQuickActionSuccess('')
    setIsSubmittingQuickAction(true)

    try {
      if (!isValidEmailAddress(email)) {
        throw new Error('Please enter a valid email account.')
      }

      if (!isValidSchoolId(studentId)) {
        throw new Error('Please enter a valid Student ID.')
      }

      if (!lastName || !firstName) {
        throw new Error('Last name and first name are required.')
      }

      if (middleInitial && !/^[A-Za-z. -]{1,10}$/.test(middleInitial)) {
        throw new Error('Please enter a valid middle initial.')
      }

      if (!question) {
        throw new Error('Please enter your question or request.')
      }

      if (question.length > 500) {
        throw new Error('Your question must be 500 characters or fewer.')
      }

      await createQuickAction({
        email,
        studentId,
        lastName,
        firstName,
        middleInitial,
        question,
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
          <button
            className="button button--compact button--admin"
            onClick={() => { setGranteeSearchGuidance(''); setIsAccountVerificationOpen(true) }}
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
              <h2 className="landing-office-title">
                <span className="landing-office-title__school">IBACMI</span>
                <span className="landing-office-title__separator" aria-hidden="true">
                  —
                </span>
                <span className="landing-office-title__office">Scholarship Office</span>
              </h2>

            </div>
          </section>

          <div role="status" aria-live="polite" lang="ceb">
            {granteeSearchGuidance && <p id="grantee-verification-guidance" className="grantee-verification-guidance">{granteeSearchGuidance}</p>}
          </div>
          <section className="filter-panel" aria-label="Grantee filters">
            <div className="search-field">
              <span className="material-symbols-outlined">search</span>
              <input
                ref={granteeSearchRef}
                aria-label="Search official grantee records"
                aria-describedby={granteeSearchGuidance ? 'grantee-verification-guidance' : undefined}
                placeholder="Enter School ID, Either Batch No., or Last Name..."
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
              <span className="material-symbols-outlined">restart_alt</span>
              <span className="filter-button__text">Reset</span>
            </button>
          </section>

          {!hasStudentIdSearch && (
            <section
              className="scholarship-showcase"
              aria-labelledby="scholarship-showcase-title"
            >
              <div className="scholarship-showcase__heading">
                <div>
                  <span className="eyebrow">Scholarship Office</span>

                </div>

                <span className="scholarship-showcase__status">
                  <span aria-hidden="true" />
                  Official Information
                </span>
              </div>

              <a
                className="scholarship-showcase__image-link"
                href={scholarshipOfficeBanner}
                rel="noreferrer"
                target="_blank"
                title="Open the Scholarship Office banner in full size"
              >
                <img
                  alt="IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant"
                  decoding="async"
                  src={scholarshipOfficeBanner}
                />
                <span className="scholarship-showcase__view">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    open_in_full
                  </span>
                  View full banner
                </span>
              </a>
            </section>
          )}

          {!hasStudentIdSearch && <DocumentationGallery />}

          {hasStudentIdSearch && (
            <section className="table-card" aria-label="Filtered grantee records">
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>TES Award Number</th>
                      <th>Student ID</th>
                      <th>Last Name</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Batch No.</th>
                      <th>Status</th>
                      <th>Semester</th>
                      <th>School Year</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allInfoRecords === undefined && debouncedStudentIdSearch && (
                      <tr>
                        <td className="empty-state" colSpan={10}>
                          <IBACMILoader variant="table" message="Fetching official grantee records…" />
                        </td>
                      </tr>
                    )}

                    {allInfoRecords && filteredGranteeRows.length === 0 && (
                      <tr>
                        <td className="empty-state" colSpan={10}>
                          No matching School ID, Batch No./ID, or name found.
                        </td>
                      </tr>
                    )}

                    {paginatedGranteeRows.map((grantee, index) => (
                      <tr key={grantee._id}>
                        <td data-label="No.">{grantee.no || startIndex + index + 1}</td>

                        <td className="award-cell" data-label="TES Award Number">
                          {grantee.tesAwardNumber}
                        </td>

                        <td data-label="Student ID">{grantee.studentId}</td>

                        <td data-label="Last Name">{grantee.lastName || 'â€”'}</td>

                        <td data-label="First Name">{grantee.firstName || 'â€”'}</td>

                        <td data-label="Middle Name">
                          {grantee.middleName || grantee.middleInitial || 'â€”'}
                        </td>

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
                <p>
                  Showing <strong>{totalRows === 0 ? 0 : startIndex + 1}</strong> to{' '}
                  <strong>{endIndex}</strong> of <strong>{totalRows}</strong> result
                  {totalRows === 1 ? '' : 's'}
                </p>

                <div className="pagination">
                  <button
                    className="page-button"
                    disabled={currentPage === 1 || totalRows === 0}
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
                        disabled={totalRows === 0}
                        onClick={() => setCurrentPage(pageItem)}
                        type="button"
                      >
                        {pageItem}
                      </button>
                    )
                  })}

                  <button
                    className="page-button"
                    disabled={currentPage === totalPages || totalRows === 0}
                    onClick={goToNextPage}
                    type="button"
                    aria-label="Next page"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {isPortalStatusLoading && <IBACMILoader variant="compact" message="Loading UniFAST information…" />}
          {isApplicantPortalOpen && <section className="portal-cta" aria-labelledby="portal-cta-title">
            <div className="portal-cta__icon" aria-hidden="true">
              <span className="material-symbols-outlined">assignment</span>
            </div>

            <div className="portal-cta__copy">
              <span className="eyebrow">Unified Student Financial Assistance System for Tertiary Education</span>
              <h3 id="portal-cta-title">UNIFAST APPLICATION</h3>
              <p>
                Complete the student, parent, address, and contact information form for UNIFAST
                applicant processing.
              </p>
            </div>

            <button
              aria-label={
                isPortalStatusLoading
                  ? 'Checking UNIFAST portal status'
                  : isApplicantPortalOpen
                    ? 'UNIFAST portal is open. Open application form'
                    : 'UNIFAST portal is closed'
              }
              className={`button button--portal ${
                isPortalStatusLoading
                  ? 'button--portal-loading'
                  : isApplicantPortalOpen
                    ? 'button--portal-open'
                    : 'button--portal-closed'
              }`}
              disabled={isPortalStatusLoading}
              onClick={openUnifastPortal}
              type="button"
            >
              {!isPortalStatusLoading && <span className="portal-status-dot" aria-hidden="true" />}
              {isPortalStatusLoading
                ? <IBACMILoader variant="inline" message="Loading UniFAST information…" />
                : isApplicantPortalOpen
                  ? 'PORTAL OPEN'
                  : 'PORTAL IS CLOSED'}
            </button>
          </section>}
        </div>
      </main>

      <footer className="landing-footer">
        <p>
          Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office |{' '}
          <button className="landing-footer__download" onClick={handleDownloadApp} type="button">
            {isAppInstalled ? 'App installed' : 'Download app'}
          </button>{' '}
          | Developed By CINIFIX Technology
        </p>
      </footer>

      {isGranteeQuestionOpen && (
        <div
          aria-labelledby="grantee-question-title"
          aria-modal="true"
          className="modal-overlay portal-confirmation-overlay"
          role="dialog"
        >
          <button
            aria-label="Close grantee question"
            className="modal-backdrop-button"
            onClick={() => setIsGranteeQuestionOpen(false)}
            type="button"
          />
          <section className="modal-card portal-grantee-modal">
            <div className="portal-grantee-icon" aria-hidden="true">
              <span className="material-symbols-outlined">school</span>
            </div>
            <p className="modal-kicker">UNIFAST APPLICATION</p>
            <h3 id="grantee-question-title">Grantee ka?</h3>
            <p className="portal-grantee-copy">Are you an existing UniFAST grantee?</p>
            <div className="portal-grantee-actions">
              <button className="button button--secondary" onClick={openStudentLoginFromPortal} type="button">
                Yes
              </button>
              <button className="button" onClick={openStudentInformationForm} type="button">
                No
              </button>
            </div>
          </section>
        </div>
      )}

      {isUnifastPortalOpen && (
        <div
          aria-labelledby="unifast-portal-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close UNIFAST portal modal"
            className="modal-backdrop-button"
            onClick={closeUnifastPortal}
            type="button"
          />

          <form
            className="modal-card portal-modal-card"
            noValidate
            ref={portalFormRef}
            onInput={handlePortalTextInput}
            onSubmit={handleUnifastPortalSubmit}
          >
            <div className="modal-header portal-modal-header">
              <div className="modal-title-row">
                <div>
                  <p className="modal-kicker">UNIFAST Portal</p>
                  <h3 id="unifast-portal-title">Student Information Form</h3>
                  <p>
                    Complete the student, parent, and contact information fields below
                    {applicantPortal?.applicationYear
                      ? ` for ${applicantPortal.applicationYear}.`
                      : '.'}
                  </p>
                </div>

                <button
                  aria-label="Close UNIFAST portal"
                  className="icon-button modal-close"
                  onClick={closeUnifastPortal}
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            <nav className="portal-stepper" aria-label="Application form progress">
              {portalFormSteps.map((step, index) => <button key={step} type="button" disabled={index >= 5 || index >= portalStep} className={`portal-stepper__step${portalStep === index ? ' is-active' : ''}${portalStep > index ? ' is-complete' : ''}`} aria-current={portalStep === index ? 'step' : undefined} onClick={() => {
                if (index >= 5) return
                if (portalReviewData) {
                  setPortalReviewData(null)
                  setHasAcknowledgedPortalApplication(false)
                  setPortalStep(index)
                  return
                }
                if (index < portalStep) movePortalStep(index)
              }}>
                <span>{portalStep > index ? '✓' : index + 1}</span><small>{step}</small>
              </button>)}
            </nav>

            <div
              className={`modal-body portal-form${
                portalReviewData ? ' portal-form--hidden' : ''
              }`}
            >
              <div className={`portal-step-panel${portalStep === 0 ? ' is-active' : ''}`} data-portal-step="0">
              <section className="portal-section" aria-labelledby="portal-student-heading">
                <h4 id="portal-student-heading">Student Information</h4>

                <div className="portal-grid">
                  {studentPortalFields.map((field) => (
                    <label className="form-field" key={field.name}>
                      <span>{field.label}</span>
                      <input
                        autoComplete={field.autoComplete}
                        maxLength={field.name === 'studentId' ? 30 : field.name === 'lrn' ? 12 : undefined}
                        name={field.name}
                        pattern={field.name === 'studentId' ? '[A-Za-z0-9-]{4,30}' : field.pattern}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        required={field.required}
                        type="text"
                      />
                      {field.helper && <small className="portal-field-helper">{field.helper}</small>}
                    </label>
                  ))}

                  <label className="form-field">
                    <span>Sex</span>
                    <select name="sexCode" defaultValue="" required>
                      <option value="" disabled>
                        Select sex
                      </option>
                      <option value="0">Male</option>
                      <option value="1">Female</option>
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Birth Date</span>
                    <input name="birthDate" max={new Date().toISOString().slice(0, 10)} required type="date" />
                  </label>

                  <label className="form-field">
                    <span>Year</span>
                    <select name="year" defaultValue="" required>
                      <option value="" disabled>
                        Select year
                      </option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="5th Year">5th Year</option>
                      <option value="6th Year">6th Year</option>
                    </select>
                  </label>

                  <fieldset className="portal-course-list">
                    <legend>Course</legend>
                    {portalCourseOptions.map((course) => (
                      <label className="portal-course-option" key={course}>
                        <input name="course" required type="radio" value={course} />
                        <span>{course}</span>
                      </label>
                    ))}
                  </fieldset>
                </div>
              </section>
              </div>

              <div className={`portal-step-panel${portalStep === 1 ? ' is-active' : ''}`} data-portal-step="1">
              <section className="portal-section" aria-labelledby="portal-parents-heading">
                <h4 id="portal-parents-heading">Parent Information</h4>

                <div className="portal-parent-group">
                  <p>Father&apos;s Name</p>
                  <label className="portal-unavailable"><input type="checkbox" name="fatherInformationUnavailable" /> Information unavailable</label>
                  <div className="portal-grid portal-grid--three">
                    {fatherPortalFields.map((field) => (
                      <label className="form-field" key={field.name}>
                        <span>{field.label}</span>
                        <input
                          autoComplete={field.autoComplete}
                          name={field.name}
                          placeholder={`Enter father's ${field.label.toLowerCase()}`}
                          type="text"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="portal-parent-group">
                  <p>Mother&apos;s Maiden Name</p>
                  <label className="portal-unavailable"><input type="checkbox" name="motherInformationUnavailable" /> Information unavailable</label>
                  <div className="portal-grid portal-grid--three">
                    {motherPortalFields.map((field) => (
                      <label className="form-field" key={field.name}>
                        <span>{field.label}</span>
                        <input
                          autoComplete={field.autoComplete}
                          name={field.name}
                          placeholder={`Enter mother's ${field.label.toLowerCase()}`}
                          type="text"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </section>
              </div>

              <div className={`portal-step-panel${portalStep === 2 ? ' is-active' : ''}`} data-portal-step="2">
              <section className="portal-section" aria-labelledby="portal-contact-heading">
                <h4 id="portal-contact-heading">Permanent Address & Contact</h4>

                <div className="portal-grid">
                  {contactPortalFields.map((field) => (
                    <label
                      className={`form-field ${field.className ?? ''}`.trim()}
                      key={field.name}
                    >
                      <span>{field.label}</span>
                      <input
                        autoComplete={field.autoComplete}
                        inputMode={field.inputMode}
                        name={field.name}
                        onInput={field.name === 'mobileNumber' ? handlePhoneInput : undefined}
                        pattern={field.pattern}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        required={field.required}
                        type={field.type ?? 'text'}
                      />
                    </label>
                  ))}
                </div>
              </section>
              </div>

              <div className={`portal-step-panel${portalStep === 3 ? ' is-active' : ''}`} data-portal-step="3">
                <section className="portal-section" aria-labelledby="portal-additional-heading">
                  <h4 id="portal-additional-heading">Additional Student Information</h4>
                  <div className="portal-grid">
                    <label className="form-field"><span>Do you have a disability?</span><select name="hasDisability" defaultValue="" required><option value="" disabled>Select one</option><option value="no">No</option><option value="yes">Yes</option></select></label>
                    <label className="form-field"><span>Please specify your disability type <small>(if applicable)</small></span><input name="disabilityType" maxLength={120} placeholder="Optional" /></label>
                    <fieldset className="portal-choice-field"><legend>Are you a dependent or child of a solo parent?</legend><label><input type="radio" name="soloParentDependent" value="1" required /> Yes</label><label><input type="radio" name="soloParentDependent" value="0" /> No</label></fieldset>
                    <fieldset className="portal-choice-field"><legend>Are you a first-generation college student?</legend><p>Neither of your parents or legal guardians attended college or completed a college degree.</p><label><input type="radio" name="firstGeneration" value="1" required /> Yes</label><label><input type="radio" name="firstGeneration" value="0" /> No</label></fieldset>
                    <label className="form-field"><span>Do you belong to an Indigenous Peoples (IP) group?</span><select name="isIndigenous" defaultValue="" required><option value="" disabled>Select one</option><option value="no">No</option><option value="yes">Yes</option></select></label>
                    <label className="form-field"><span>Please specify your IP group <small>(if applicable)</small></span><input name="indigenousGroup" maxLength={120} placeholder="Optional" /></label>
                    <div className="portal-classification"><span>Applicant Classification</span><strong>TES Applicant</strong><small>This classification is assigned by the Scholarship Office.</small></div>
                  </div>
                </section>
              </div>

              <div className={`portal-step-panel${portalStep === 4 ? ' is-active' : ''}`} data-portal-step="4">
              <section className="portal-section" aria-labelledby="portal-documents-heading">
                <div className="portal-section-heading">
                  <h4 id="portal-documents-heading">Document Requirements</h4>
                  <p>
                    Upload clear PDF copies up to 10MB each. Required and optional documents are
                    labeled below.
                  </p>
                </div>

                <div className="portal-document-grid">
                  <label
                    className={`portal-document-upload${
                      portalDocumentFiles.psaFile ? ' portal-document-upload--selected' : ''
                    }`}
                  >
                    <input
                      accept="application/pdf,.pdf"
                      name="psaFile"
                      onChange={handlePortalDocumentChange}
                      required
                      type="file"
                    />
                    <span className="portal-document-upload__icon">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                    </span>
                    <span className="portal-document-upload__copy">
                      <span className="portal-document-upload__title">
                        <strong>PSA Birth Certificate</strong>
                        <span className="portal-document-badge portal-document-badge--required">
                          Required
                        </span>
                      </span>
                      <span>
                        {portalDocumentFiles.psaFile
                          ? `${portalDocumentFiles.psaFile.name} (${formatFileSize(
                              portalDocumentFiles.psaFile.size,
                            )})`
                          : 'Select PSA PDF file'}
                      </span>
                      {renderPortalPdfControls('psaFile')}
                    </span>
                  </label>

                  <label
                    className={`portal-document-upload${
                      portalDocumentFiles.schoolIdFile ? ' portal-document-upload--selected' : ''
                    }`}
                  >
                    <input
                      accept="application/pdf,.pdf"
                      name="schoolIdFile"
                      onChange={handlePortalDocumentChange}
                      required
                      type="file"
                    />
                    <span className="portal-document-upload__icon">
                      <span className="material-symbols-outlined">badge</span>
                    </span>
                    <span className="portal-document-upload__copy">
                      <span className="portal-document-upload__title">
                        <strong>School ID / Valid ID with Three Signatures</strong>
                        <span className="portal-document-badge portal-document-badge--required">
                          Required
                        </span>
                      </span>
                      <span>
                        {portalDocumentFiles.schoolIdFile
                          ? `${portalDocumentFiles.schoolIdFile.name} (${formatFileSize(
                              portalDocumentFiles.schoolIdFile.size,
                            )})`
                          : 'Upload a clear School ID or valid ID showing three specimen signatures.'}
                      </span>
                      {renderPortalPdfControls('schoolIdFile')}
                    </span>
                  </label>

                  <label
                    className={`portal-document-upload${
                      portalDocumentFiles.corFile ? ' portal-document-upload--selected' : ''
                    }`}
                  >
                    <input
                      accept="application/pdf,.pdf"
                      name="corFile"
                      onChange={handlePortalDocumentChange}
                      type="file"
                    />
                    <span className="portal-document-upload__icon">
                      <span className="material-symbols-outlined">description</span>
                    </span>
                    <span className="portal-document-upload__copy">
                      <span className="portal-document-upload__title">
                        <strong>COR / Study Load</strong>
                        <span className="portal-document-badge">
                          Optional
                        </span>
                      </span>
                      <span>
                        {portalDocumentFiles.corFile
                          ? `${portalDocumentFiles.corFile.name} (${formatFileSize(
                              portalDocumentFiles.corFile.size,
                            )})`
                          : 'Attach a COR or Study Load PDF, if available.'}
                      </span>
                      {renderPortalPdfControls('corFile')}
                    </span>
                  </label>

                  <label
                    className={`portal-document-upload portal-document-upload--optional${
                      portalDocumentFiles.pwdIdFile ? ' portal-document-upload--selected' : ''
                    }`}
                  >
                    <input
                      accept="application/pdf,.pdf"
                      name="pwdIdFile"
                      onChange={handlePortalDocumentChange}
                      type="file"
                    />
                    <span className="portal-document-upload__icon">
                      <span className="material-symbols-outlined">accessible</span>
                    </span>
                    <span className="portal-document-upload__copy">
                      <span className="portal-document-upload__title">
                        <strong>PWD ID</strong>
                        <span className="portal-document-badge">Optional</span>
                      </span>
                      <span>
                        {portalDocumentFiles.pwdIdFile
                          ? `${portalDocumentFiles.pwdIdFile.name} (${formatFileSize(
                              portalDocumentFiles.pwdIdFile.size,
                            )})`
                          : 'Attach a clear PWD ID PDF, if applicable'}
                      </span>
                      {renderPortalPdfControls('pwdIdFile')}
                    </span>
                  </label>

                  <label
                    className={`portal-document-upload portal-document-upload--optional${
                      portalDocumentFiles.fourPsFile ? ' portal-document-upload--selected' : ''
                    }`}
                  >
                    <input
                      accept="application/pdf,.pdf"
                      name="fourPsFile"
                      onChange={handlePortalDocumentChange}
                      type="file"
                    />
                    <span className="portal-document-upload__icon">
                      <span className="material-symbols-outlined">family_restroom</span>
                    </span>
                    <span className="portal-document-upload__copy">
                      <span className="portal-document-upload__title">
                        <strong>4Ps ID</strong>
                        <span className="portal-document-badge">Optional</span>
                      </span>
                      <span>
                        {portalDocumentFiles.fourPsFile
                          ? `${portalDocumentFiles.fourPsFile.name} (${formatFileSize(
                              portalDocumentFiles.fourPsFile.size,
                            )})`
                          : 'Attach a clear 4Ps ID PDF, if applicable'}
                      </span>
                      {renderPortalPdfControls('fourPsFile')}
                    </span>
                  </label>
                </div>
              </section>
              </div>
            </div>

            {portalReviewData && (
              <div className="modal-body portal-review">
                <section className="portal-review-card" aria-labelledby="portal-review-heading">
                  <div className="portal-section-heading">
                    <h4 id="portal-review-heading">Review Information</h4>
                    <p>Please check every detail before final submission.</p>
                  </div>

                  <div className="portal-review-grid">
                    <div className="portal-review-group">
                      <h5>Student Information</h5>
                      <dl>
                        <div>
                          <dt>Student ID</dt>
                          <dd>{portalReviewData.studentId}</dd>
                        </div>
                        <div><dt>LRN</dt><dd>{portalReviewData.lrn || 'Not assigned / not provided'}</dd></div>
                        <div><dt>PhilSys ID</dt><dd>{portalReviewData.philSysIdNumber || 'Not provided'}</dd></div>
                        <div><dt>4Ps ID Number</dt><dd>{portalReviewData.fourPsIdNumber || 'Not provided'}</dd></div>
                        <div>
                          <dt>Full Name</dt>
                          <dd>
                            {[
                              portalReviewData.firstName,
                              portalReviewData.middleName,
                              portalReviewData.lastName,
                              portalReviewData.extensionName,
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          </dd>
                        </div>
                        <div>
                          <dt>Gender</dt>
                          <dd>{portalReviewData.gender}</dd>
                        </div>
                        <div>
                          <dt>Birth Date</dt>
                          <dd>{portalReviewData.birthDate}</dd>
                        </div>
                        <div>
                          <dt>Year</dt>
                          <dd>{portalReviewData.year}</dd>
                        </div>
                        <div>
                          <dt>Course</dt>
                          <dd>{portalReviewData.course}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="portal-review-group">
                      <h5>Parents Information</h5>
                      <dl>
                        <div>
                          <dt>Father</dt>
                          <dd>
                            {[
                              portalReviewData.fatherFirstName,
                              portalReviewData.fatherMiddleName,
                              portalReviewData.fatherLastName,
                            ]
                              .filter(Boolean)
                              .join(' ') || (portalReviewData.fatherInformationUnavailable ? 'Information unavailable' : 'Not provided')}
                          </dd>
                        </div>
                        <div>
                          <dt>Mother</dt>
                          <dd>
                            {[
                              portalReviewData.motherFirstName,
                              portalReviewData.motherMiddleName,
                              portalReviewData.motherLastName,
                            ]
                              .filter(Boolean)
                              .join(' ') || (portalReviewData.motherInformationUnavailable ? 'Information unavailable' : 'Not provided')}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="portal-review-group">
                      <h5>Address and Contact</h5>
                      <dl>
                        <div>
                          <dt>Permanent Address</dt>
                          <dd>{portalReviewData.address}</dd>
                        </div>
                        <div>
                          <dt>Zip Code</dt>
                          <dd>{portalReviewData.zipCode || 'Not provided'}</dd>
                        </div>
                        <div>
                          <dt>PWD ID</dt>
                          <dd>{portalReviewData.pwdId || 'Not provided'}</dd>
                        </div>
                        <div>
                          <dt>Mobile No.</dt>
                          <dd>{portalReviewData.mobileNumber}</dd>
                        </div>
                        <div>
                          <dt>Email Address</dt>
                          <dd>{portalReviewData.emailAddress}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="portal-review-group">
                      <h5>Additional Information</h5>
                      <dl>
                        <div><dt>Disability</dt><dd>{portalReviewData.hasDisability ? (portalReviewData.disabilityType || 'Yes — details not specified') : 'No'}</dd></div>
                        <div><dt>Solo Parent Dependent</dt><dd>{portalReviewData.soloParentDependent ? 'Yes (1)' : 'No (0)'}</dd></div>
                        <div><dt>First Generation</dt><dd>{portalReviewData.firstGeneration ? 'Yes (1)' : 'No (0)'}</dd></div>
                        <div><dt>Indigenous Peoples Group</dt><dd>{portalReviewData.isIndigenous ? (portalReviewData.indigenousGroup || 'Yes — group not specified') : 'No'}</dd></div>
                        <div><dt>Classification</dt><dd>TES Applicant</dd></div>
                      </dl>
                    </div>

                    <div className="portal-review-group">
                      <h5>Documents</h5>
                      <dl>
                        <div>
                          <dt>PSA Birth Certificate</dt>
                          <dd>
                            {portalReviewData.psaFile.name} (
                            {formatFileSize(portalReviewData.psaFile.size)})
                          </dd>
                        </div>
                        <div>
                          <dt>School ID Photocopy</dt>
                          <dd>
                            {portalReviewData.schoolIdFile.name} (
                            {formatFileSize(portalReviewData.schoolIdFile.size)})
                          </dd>
                        </div>
                        <div>
                          <dt>COR / Study Load</dt>
                          <dd>
                            {portalReviewData.corFile ? `${portalReviewData.corFile.name} (${formatFileSize(portalReviewData.corFile.size)})` : 'Not provided (optional)'}
                          </dd>
                        </div>
                        <div>
                          <dt>PWD ID (Optional)</dt>
                          <dd>
                            {portalReviewData.pwdIdFile
                              ? `${portalReviewData.pwdIdFile.name} (${formatFileSize(
                                  portalReviewData.pwdIdFile.size,
                                )})`
                              : 'Not provided'}
                          </dd>
                        </div>
                        <div>
                          <dt>4Ps ID (Optional)</dt>
                          <dd>
                            {portalReviewData.fourPsFile
                              ? `${portalReviewData.fourPsFile.name} (${formatFileSize(
                                  portalReviewData.fourPsFile.size,
                                )})`
                              : 'Not provided'}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <label className="portal-acknowledgment"><input type="checkbox" checked={hasAcknowledgedPortalApplication} onChange={(event) => setHasAcknowledgedPortalApplication(event.target.checked)} /> I certify that the information and documents I have submitted are true and accurate to the best of my knowledge.</label>
                  <p className="portal-review-privacy">Your information and supporting documents will be used by the Scholarship Office for TES application processing, eligibility verification, and related scholarship administration.</p>
                </section>
              </div>
            )}

            {(portalError || portalSuccess) && (
              <div className="portal-message-row">
                {portalError && <p className="form-error">{portalError}</p>}
                {portalSuccess && <p className="form-success">{portalSuccess}</p>}
              </div>
            )}

            <div className="modal-actions portal-actions">
              {portalReviewData ? (
                <>
                  <button
                    className="button button--secondary"
                    disabled={isSubmittingPortal}
                    onClick={() => { setPortalReviewData(null); setPortalStep(4); setHasAcknowledgedPortalApplication(false) }}
                    type="button"
                  >
                    Previous
                  </button>

                  <button
                    className="button button--secondary"
                    disabled={isSubmittingPortal}
                    onClick={handleEditPortalInformation}
                    type="button"
                  >
                    Edit Information
                  </button>

                  <button
                    className="button"
                    disabled={isSubmittingPortal}
                    onClick={handleOpenPortalPrivacy}
                    type="button"
                  >
                    Submit Application
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="button button--secondary"
                    disabled={isSubmittingPortal}
                    onClick={closeUnifastPortal}
                    type="button"
                  >
                    Cancel
                  </button>
                  {portalStep > 0 && <button className="button button--secondary" disabled={isSubmittingPortal} onClick={() => movePortalStep(portalStep - 1)} type="button">Previous</button>}
                  {portalStep < 4
                    ? <button className="button" disabled={isSubmittingPortal} onClick={() => movePortalStep(portalStep + 1)} type="button">Continue</button>
                    : <button className="button" disabled={isSubmittingPortal} onClick={() => handleUnifastPortalSubmit({ preventDefault() {}, currentTarget: portalFormRef.current })} type="button">Review & Submit</button>}
                </>
              )}
            </div>
          </form>
        </div>
      )}

      {isPortalPrivacyOpen && (
        <div
          aria-labelledby="portal-privacy-title"
          aria-modal="true"
          className="modal-overlay portal-confirmation-overlay"
          role="dialog"
        >
          <button
            aria-label="Return to application review"
            className="modal-backdrop-button"
            disabled={isSubmittingPortal}
            onClick={() => setIsPortalPrivacyOpen(false)}
            type="button"
          />

          <section className="modal-card portal-privacy-card">
            <div className="success-modal-body">
              <div className="portal-privacy-icon">
                <span className="material-symbols-outlined">privacy_tip</span>
              </div>

              <p className="modal-kicker">Data Privacy Notice</p>
              <h3 id="portal-privacy-title">Your Privacy Matters</h3>
              <p>
                I understand that the personal information I provide will be collected, stored,
                and processed by the Scholarship Office solely for scholarship administration,
                verification, monitoring, and related educational purposes. I am informed that my
                data will be kept confidential and protected in accordance with the Data Privacy
                Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized
                personnel when necessary.
              </p>
            </div>

            <div className="modal-actions modal-actions--single">
              <button
                className="button"
                disabled={isSubmittingPortal}
                onClick={handleConfirmPortalSubmit}
                type="button"
              >
                {isSubmittingPortal ? <IBACMILoader variant="inline" message="Submitting your application…" /> : 'I UNDERSTAND'}
              </button>
            </div>
          </section>
        </div>
      )}

      {isPortalSubmissionSuccessOpen && (
        <div
          aria-labelledby="portal-submission-success-title"
          aria-modal="true"
          className="modal-overlay portal-confirmation-overlay"
          role="dialog"
        >
          <button
            aria-label="Close application success modal"
            className="modal-backdrop-button"
            onClick={() => setIsPortalSubmissionSuccessOpen(false)}
            type="button"
          />

          <section className="modal-card modal-card--success">
            <div className="success-modal-body">
              <div className="success-icon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>

              <h3 id="portal-submission-success-title">Application Submitted Successfully</h3>
              <p>
                Please wait for the UNIFAST results. You will be notified through the Facebook
                page, <strong>Iba College of Mindanao Inc. - Scholarship Office</strong>.
              </p>
            </div>

            <div className="modal-actions modal-actions--single">
              <button
                className="button"
                onClick={() => setIsPortalSubmissionSuccessOpen(false)}
                type="button"
              >
                Done
              </button>
            </div>
          </section>
        </div>
      )}

      {portalStatusMessage && (
        <div
          aria-labelledby="portal-status-title"
          aria-modal="true"
          className="modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close portal status modal"
            className="modal-backdrop-button"
            onClick={() => setPortalStatusMessage('')}
            type="button"
          />

          <section className="modal-card portal-status-card">
            <div className="modal-header portal-modal-header">
              <div className="modal-title-row">
                <div>
                  
                  <h3 id="portal-status-title">Portal Status</h3>
                  <p>{portalStatusMessage}</p>
                </div>

                <button
                  aria-label="Close portal status"
                  className="icon-button modal-close"
                  onClick={() => setPortalStatusMessage('')}
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            <div className="modal-actions modal-actions--single">
              <button className="button" onClick={() => setPortalStatusMessage('')} type="button">
                OK
              </button>
            </div>
          </section>
        </div>
      )}

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

            <div className="modal-body quick-action-form-grid">
              <label className="form-field">
                <span>Student ID</span>
                <input
                  autoComplete="off"
                  name="studentId"
                  placeholder="Enter Student ID"
                  required
                />
              </label>

              <label className="form-field">
                <span>Email account</span>
                <input
                  autoComplete="email"
                  inputMode="email"
                  name="email"
                  placeholder={quickActionsData.quickActions.fields.email.placeholder}
                  required
                  type="email"
                />
              </label>

              <label className="form-field">
                <span>Last name</span>
                <input
                  autoComplete="family-name"
                  name="lastName"
                  placeholder="Enter last name"
                  required
                />
              </label>

              <label className="form-field">
                <span>First name</span>
                <input
                  autoComplete="given-name"
                  name="firstName"
                  placeholder="Enter first name"
                  required
                />
              </label>

              <label className="form-field quick-action-mi-field">
                <span>MI</span>
                <input
                  autoComplete="additional-name"
                  maxLength={10}
                  name="middleInitial"
                  placeholder="M"
                />
              </label>

              <label className="form-field auth-full-field">
                <span>Question</span>
                <textarea
                  aria-describedby="quick-action-question-help"
                  maxLength={500}
                  name="question"
                  onInput={(event) => {
                    event.currentTarget.value = sanitizeSingleParagraphInput(
                      event.currentTarget.value,
                    )
                  }}
                  placeholder={quickActionsData.quickActions.fields.question.placeholder}
                  required
                  rows={4}
                />
                <small className="form-field__help" id="quick-action-question-help">
                  One paragraph only, up to 500 characters.
                </small>
              </label>

              {quickActionError && <p className="form-error auth-full-field">{quickActionError}</p>}
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
                {isSubmittingQuickAction ? <IBACMILoader variant="inline" message="Submitting your request…" /> : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isAccountVerificationOpen && (
        <AccountVerification
          onDismiss={() => setIsAccountVerificationOpen(false)}
          onLogin={() => continueAccountVerification('login')}
          onRegister={() => continueAccountVerification('register')}
          onSearch={returnToGranteeSearch}
        />
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

              <p className="modal-kicker">UNIFAST Portal</p>
              <h3 id="admin-login-title">Sign in</h3>
            </div>

            <div className="modal-body admin-login-body auth-form-grid">
              <label className="form-field auth-full-field">
                <span>Official Registered Email or School ID</span>
                <input
                  autoCapitalize="none"
                  autoComplete="username"
                  maxLength={254}
                  name="adminIdentifier"
                  placeholder="Enter your official registered email or School ID"
                  required
                  spellCheck={false}
                  type="text"
                  value={adminLoginIdentifier}
                  onChange={(event) => setAdminLoginIdentifier(event.target.value)}
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
                  Enter either your official registered email address or your School ID. Your
                  password is still required.
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
                {isSubmittingAdminLogin ? <IBACMILoader variant="inline" message="Signing you in securely…" /> : 'Login'}
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
                  pattern="\+?[0-9]*"
                  placeholder="e.g. 09123456789"
                  required
                  type="tel"
                  value={signUpPhoneNumber}
                  onChange={(event) => setSignUpPhoneNumber(sanitizePhoneNumberInput(event.target.value))}
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

              {signUpError && <>
                <p className="form-error auth-full-field" role="alert" lang="ceb">{signUpError}</p>
                <div className="registration-help auth-full-field" lang="ceb">
                  <strong>Giya sa pagrehistro — mga posibleng hinungdan:</strong>
                  <p>Kung wala sa list: Wala makita ang imong Student ID sa official grantee list. Palihog i-check pag-usab o kontaka ang Scholarship Office.</p>
                  <p>Kung nakarehistro na: Naa na kay account nga nakarehistro niini nga Student ID. Palihog pag-login o gamita ang Forgot Password.</p>
                </div>
              </>}
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
                {isRegisteringAccount ? <IBACMILoader variant="inline" message="Creating your student account…" /> : 'Register Now'}
              </button>
            </div>
          </form>
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
                  pattern="\+?[0-9]*"
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
                {isRequestingOtp ? <IBACMILoader variant="inline" message="Sending your verification code…" /> : isOtpRequested ? 'Resend OTP' : 'Send OTP'}
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
                {isChangingPassword ? <IBACMILoader variant="inline" message="Updating your password…" /> : 'Change Password'}
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
              <p>
                {quickActionSuccess} The scholarship office can now review your request. Please
                always check your valid email. The TECH Scholarship Office will notify you when
                your account is updated.
              </p>
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
      <VisitorSupport onRequest={openQuickActions} />
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

.auth-modal-card.modal-card--wide {
  width: min(100%, 640px);
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

.quick-action-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.quick-action-mi-field {
  max-width: 160px;
}

.form-field__help {
  color: #76584a;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
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

.button--portal {
  min-width: 170px;
  border: 1px solid transparent;
  letter-spacing: 0.03em;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.button--portal-open {
  border-color: #15803d;
  background: #15803d;
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(21, 128, 61, 0.2);
}

.button--portal-open:hover {
  background: #166534;
  box-shadow: 0 12px 26px rgba(21, 128, 61, 0.28);
}

.button--portal-closed {
  border-color: #b91c1c;
  background: #b91c1c;
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(185, 28, 28, 0.18);
}

.button--portal-closed:hover {
  background: #991b1b;
  box-shadow: 0 12px 26px rgba(185, 28, 28, 0.26);
}

.button--portal-loading,
.button--portal-loading:disabled {
  border-color: #cbd5e1;
  background: #64748b;
  color: #ffffff;
  cursor: wait;
  opacity: 1;
}

.portal-status-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.82);
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.16);
}

.button--portal-open .portal-status-dot {
  background: #bbf7d0;
}

.button--portal-closed .portal-status-dot {
  background: #fecaca;
}

.button--portal-loading .portal-status-dot {
  background: #e2e8f0;
  animation: portal-status-pulse 1.2s ease-in-out infinite;
}

@keyframes portal-status-pulse {
  50% {
    opacity: 0.45;
    transform: scale(0.82);
  }
}

.portal-modal-card {
  width: min(100%, 1200px);
  height: min(94dvh, 920px);
  max-height: 94dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
}

.portal-status-card {
  width: min(100%, 520px);
}

.portal-modal-header {
  flex: 0 0 auto;
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
}

.portal-stepper{flex:0 0 auto;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;padding:12px 24px;border-bottom:1px solid #f2e5dc;background:#fff}
.portal-stepper__step{min-width:0;display:flex;align-items:center;gap:8px;border:0;background:transparent;color:#8d7b70;text-align:left;cursor:pointer}
.portal-stepper__step>span{width:27px;height:27px;flex:0 0 27px;display:grid;place-items:center;border:1px solid #e4d6ca;border-radius:50%;font-size:11px;font-weight:800}
.portal-stepper__step small{font-size:10px;line-height:1.25;font-weight:700}
.portal-stepper__step.is-active{color:#a4480b}.portal-stepper__step.is-active>span,.portal-stepper__step.is-complete>span{border-color:#d86b1d;background:#e87919;color:white}
.portal-step-panel{display:none}.portal-step-panel.is-active{display:block}

.portal-form {
  flex:1 1 auto;
  min-height:0;
  overflow-y:auto;
  gap: 18px;
}

.portal-form--hidden {
  display: none;
}

.portal-section {
  display: grid;
  gap: 14px;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  background: #fffaf5;
  padding: 16px;
}

.portal-section h4,
.portal-parent-group p {
  margin: 0;
  color: #431407;
}

.portal-unavailable{display:flex;align-items:center;gap:8px;color:#71594b;font-size:12px;font-weight:700}.portal-unavailable input{accent-color:#d66b1b}
.portal-choice-field{display:flex;grid-column:span 2;flex-wrap:wrap;align-items:center;gap:10px 18px;min-width:0;margin:0;padding:13px;border:1px solid #ead9cc;border-radius:12px;background:#fff}
.portal-choice-field legend{padding:0 5px;color:#4e382c;font-size:12px;font-weight:800}.portal-choice-field p{flex-basis:100%;margin:0;color:#86756a;font-size:11px}.portal-choice-field label{display:flex;align-items:center;gap:6px;color:#614a3c;font-size:12px}.portal-choice-field input{accent-color:#d66b1b}
.portal-classification{grid-column:span 2;display:grid;gap:5px;padding:14px;border:1px solid #f1d6bf;border-radius:12px;background:#fff6ee}.portal-classification span,.portal-classification small{color:#826d5f;font-size:11px}.portal-classification strong{color:#9f470b;font-size:15px}
.portal-field-helper{color:#8c7b70;font-size:10px}

.portal-section h4 {
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.portal-parent-group {
  display: grid;
  gap: 12px;
}

.portal-parent-group p {
  font-size: 13px;
  font-weight: 900;
}

.portal-section-heading {
  display: grid;
  gap: 6px;
}

.portal-section-heading p {
  margin: 0;
  color: #6b4f43;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
}

.portal-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.portal-grid--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.portal-full-field {
  grid-column: 1 / -1;
}

.portal-course-list {
  display: grid;
  grid-column: 1 / -1;
  gap: 10px;
  min-width: 0;
  border: 0;
  margin: 0;
  padding: 0;
}

.portal-course-list legend {
  color: var(--text);
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 2px;
}

.portal-course-option {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 54px;
  overflow: hidden;
  border: 1px solid #e9c6b5;
  border-radius: 12px;
  background: #ffffff;
  color: var(--text);
  cursor: pointer;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.35;
  padding: 14px 16px;
  text-transform: uppercase;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.portal-course-option:hover {
  border-color: var(--primary);
  background: #fffaf5;
}

.portal-course-option:has(input:checked) {
  border-color: var(--primary);
  background: #fff7ed;
  box-shadow: inset 4px 0 0 var(--primary);
}

.portal-course-option:has(input:focus-visible) {
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-course-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.portal-document-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.portal-document-upload {
  position: relative;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  border: 1px solid #e9c6b5;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  padding: 16px;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease,
    transform 160ms ease;
}

.portal-document-upload:hover,
.portal-document-upload--selected {
  border-color: var(--primary);
  background: #fff7ed;
}

.portal-document-upload:hover {
  transform: translateY(-1px);
}

.portal-document-upload:has(input:focus-visible) {
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-document-upload input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.portal-document-upload__icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ffedd5;
  color: #9a3412;
}

.portal-document-upload__icon .material-symbols-outlined {
  font-size: 28px;
}

.portal-document-upload__copy {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.portal-document-upload__copy strong {
  overflow-wrap: anywhere;
  color: #431407;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.3;
}

.portal-document-upload--optional {
  border-style: dashed;
}

.portal-document-upload__title {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.portal-document-upload__copy .portal-document-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #f1f5f9;
  color: #475569;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  text-transform: uppercase;
}

.portal-document-upload__copy .portal-document-badge--required {
  background: #ffedd5;
  color: #9a3412;
}

.portal-document-upload__copy span {
  overflow-wrap: anywhere;
  color: #6b4f43;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
}

.portal-review {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding-top: 18px;
}

.portal-review-card {
  display: grid;
  gap: 16px;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  background: #fffaf5;
  padding: 16px;
}

.portal-review-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.portal-review-group {
  display: grid;
  min-width: 0;
  gap: 10px;
  border: 1px solid #e9c6b5;
  border-radius: 8px;
  background: #ffffff;
  padding: 14px;
}

.portal-review-group h5 {
  margin: 0;
  color: #431407;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.portal-review-group dl {
  display: grid;
  gap: 10px;
  margin: 0;
}

.portal-review-group dl div {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.portal-review-group dt {
  color: #8b5e4a;
  font-size: 12px;
  font-weight: 900;
}

.portal-review-group dd {
  margin: 0;
  overflow-wrap: anywhere;
  color: var(--text);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
}

.portal-form .form-field select {
  width: 100%;
  border: 1px solid var(--outline-soft);
  border-radius: 8px;
  background: #ffffff;
  color: var(--text);
  font: inherit;
  font-size: 14px;
  padding: 12px 14px;
  box-shadow: inset 0 1px 0 rgba(28, 27, 27, 0.02);
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.portal-form .form-field select:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-actions {
  flex:0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.portal-acknowledgment{display:flex;align-items:flex-start;gap:10px;margin-top:16px;padding:14px;border:1px solid #f0d4bc;border-radius:12px;background:#fff7ef;color:#4f3b2e;font-size:12px;line-height:1.5;font-weight:700}.portal-acknowledgment input{flex:0 0 auto;margin-top:2px;accent-color:#d66b1b}.portal-review-privacy{margin:10px 0 0;color:#85766b;font-size:11px;line-height:1.5}
.portal-document-controls{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:6px}.portal-document-controls button{border:1px solid #efd1b7;border-radius:8px;padding:5px 9px;background:#fff;color:#a14c13;font-size:10px;font-weight:800;cursor:pointer}.portal-document-controls progress{width:100%;height:6px;accent-color:#d66b1b}

.portal-message-row {
  display: grid;
  gap: 8px;
  padding: 0 24px 16px;
}

.portal-message-row .form-error,
.portal-message-row .form-success {
  margin: 0;
}

.portal-actions .button {
  width: auto;
}

@media (max-width: 900px) {
  .portal-grid,
  .portal-grid--three {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .portal-document-grid {
    grid-template-columns: 1fr;
  }

  .portal-review-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .modal-overlay {
    align-items: flex-end;
    padding: 10px;
  }

  .auth-modal-card,
  .auth-modal-card--large,
  .portal-modal-card {
    width: 100%;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
  }

  .button--portal {
    width: 100%;
  }

  .auth-form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .quick-action-form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .quick-action-mi-field {
    max-width: none;
  }

  .portal-grid,
  .portal-grid--three {
    grid-template-columns: 1fr;
  }

  .portal-stepper{grid-template-columns:repeat(6,minmax(74px,1fr));overflow-x:auto;padding:10px 12px;gap:5px}
  .portal-stepper__step{align-items:flex-start;flex-direction:column;gap:4px}
  .portal-choice-field,.portal-classification{grid-column:1/-1}

  .portal-section {
    gap: 12px;
    padding: 12px;
  }

  .portal-review {
    padding: 12px 14px 14px;
  }

  .portal-review-card,
  .portal-review-group {
    padding: 12px;
  }

  .portal-document-upload {
    align-items: flex-start;
    min-height: auto;
    gap: 10px;
    padding: 12px;
  }

  .portal-document-upload__icon {
    width: 40px;
    height: 40px;
  }

  .portal-document-upload__icon .material-symbols-outlined {
    font-size: 23px;
  }

  .auth-link-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .auth-actions,
  .portal-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .auth-actions .button,
  .portal-actions .button {
    width: 100%;
  }

  .portal-actions{grid-template-columns:repeat(2,minmax(0,1fr));padding-bottom:max(14px,env(safe-area-inset-bottom))}
  .portal-actions .button:last-child{grid-column:1/-1}

  .admin-login-hero {
    padding: 24px 18px;
  }

  .admin-login-body {
    padding: 16px;
  }

  .modal-actions {
    padding: 12px 16px 16px;
  }

  .portal-form {
    gap: 12px;
  }

  .portal-grid,
  .portal-grid--three {
    gap: 12px;
  }

  .portal-course-option {
    min-height: 48px;
    padding: 11px 12px;
    font-size: 12px;
  }

  .portal-modal-header {
    padding-block: 16px;
  }
}
`

export default AllLanding
