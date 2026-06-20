import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import quickActionsData from '../../data.json'
import ibacmiLogo from '../assets/IBACMI.png'
import scholarshipOfficeBanner from '../assets/desktop.png'
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

function sanitizePhoneNumberInput(phoneNumber) {
  return phoneNumber.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
}

function sanitizeSingleParagraphInput(value) {
  return value.replace(/[\r\n]+/g, ' ').replace(/\s{2,}/g, ' ')
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

const applicantPdfMaxSize = 5 * 1024 * 1024

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

const portalCourseOptions = [
  'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
  'BACHELOR OF SCIENCE IN ENTREPRENEURSHIP',
  'BACHELOR OF SCIENCE IN CRIMINOLOGY',
  'BACHELOR OF ELEMENTARY EDUCATION',
  'BACHELOR OF EARLY CHILDHOOD EDUCATION',
  'BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT',
  'BACHELOR OF PUBLIC ADMINISTRATION',
]

const contactPortalFields = [
  {
    label: 'Address',
    name: 'address',
    autoComplete: 'street-address',
    className: 'portal-full-field',
    required: true,
  },
  { label: 'Zip Code', name: 'zipCode', autoComplete: 'postal-code', inputMode: 'numeric' },
  { label: 'PWD ID', name: 'pwdId', autoComplete: 'off' },
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
  const portalFormRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  const [isUnifastPortalOpen, setIsUnifastPortalOpen] = useState(false)
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignUpDeniedOpen, setIsSignUpDeniedOpen] = useState(false)
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
    pwdIdFile: null,
    fourPsFile: null,
  })
  const [portalReviewData, setPortalReviewData] = useState(null)

  const [isSubmittingAdminLogin, setIsSubmittingAdminLogin] = useState(false)
  const [isSubmittingQuickAction, setIsSubmittingQuickAction] = useState(false)
  const [isSubmittingPortal, setIsSubmittingPortal] = useState(false)
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

  const createApplicant = useMutation(api.applicants.create)
  const generateApplicantUploadUrl = useMutation(api.applicants.generateUploadUrl)
  const createQuickAction = useMutation(api.quickActions.create)
  const loginAdmin = useMutation(api.adminAuth.login)
  const registerAdmin = useMutation(api.adminAuth.register)
  const requestPasswordResetOtp = useMutation(api.adminAuth.requestPasswordResetOtp)
  const changePasswordWithOtp = useMutation(api.adminAuth.changePasswordWithOtp)
  const allInfoRecords = useQuery(api.allinfo.list)
  const applicantPortal = useQuery(api.applicantPortal.get)

  const granteeRows = useMemo(() => allInfoRecords ?? [], [allInfoRecords])
  const hasStudentIdSearch = studentIdSearch.trim().length > 0
  const isPortalStatusLoading = applicantPortal === undefined
  const isApplicantPortalOpen = applicantPortal?.isReceivingApplicants === true

  const filteredGranteeRows = useMemo(() => {
    const searchValue = studentIdSearch.trim().toLowerCase()
    if (!searchValue) return []
    return granteeRows.filter((grantee) => {
      const studentId = String(grantee.studentId ?? '').trim().toLowerCase()
      const batchId = String(grantee.batchId ?? '').trim().toLowerCase()
      const lastName = String(grantee.lastName ?? '').trim().toLowerCase()
      const firstName = String(grantee.firstName ?? '').trim().toLowerCase()
      const middleName = String(grantee.middleName ?? grantee.middleInitial ?? '').trim().toLowerCase()
      const fullName = [lastName, firstName, middleName].filter(Boolean).join(' ')

      return (
        studentId === searchValue ||
        batchId === searchValue ||
        lastName.includes(searchValue) ||
        firstName.includes(searchValue) ||
        middleName.includes(searchValue) ||
        fullName.includes(searchValue)
      )
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
      !isUnifastPortalOpen &&
      !isAdminLoginOpen &&
      !isForgotPasswordOpen &&
      !isSignUpOpen &&
      !isSignUpDeniedOpen &&
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
        setPortalError('')
        setPortalSuccess('')
        setPortalReviewData(null)
        setPortalDocumentFiles({
          psaFile: null,
          schoolIdFile: null,
          pwdIdFile: null,
          fourPsFile: null,
        })
        setIsAdminLoginOpen(false)
        setIsSubmittingAdminLogin(false)
        setIsForgotPasswordOpen(false)
        setIsSignUpOpen(false)
        setIsSignUpDeniedOpen(false)
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
    isAdminLoginOpen,
    isForgotPasswordOpen,
    isSignUpOpen,
    isSignUpDeniedOpen,
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
    setIsUnifastPortalOpen(true)
  }

  const closeUnifastPortal = () => {
    if (isSubmittingPortal) return

    setIsUnifastPortalOpen(false)
    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setPortalDocumentFiles({
      psaFile: null,
      schoolIdFile: null,
      pwdIdFile: null,
      fourPsFile: null,
    })
    setPortalReviewData(null)
  }

  const uploadApplicantPdfToStorage = async (file) => {
    const uploadUrl = await generateApplicantUploadUrl()
    const uploadResult = await fetch(uploadUrl, {
      body: file,
      headers: {
        'Content-Type': file.type || 'application/pdf',
      },
      method: 'POST',
    })

    if (!uploadResult.ok) {
      throw new Error(`Unable to upload ${file.name}.`)
    }

    const { storageId } = await uploadResult.json()
    return storageId
  }

  const handlePortalDocumentChange = (event) => {
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
      setPortalError('Each uploaded PDF must be 5MB or smaller.')
      return
    }

    setPortalDocumentFiles((currentFiles) => ({
      ...currentFiles,
      [name]: file,
    }))
  }

  const handleUnifastPortalSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const mobileNumber = normalizePhoneNumber(String(formData.get('mobileNumber') || ''))
    const emailAddress = String(formData.get('emailAddress') || '').trim().toLowerCase()
    const psaFile = formData.get('psaFile')
    const schoolIdFile = formData.get('schoolIdFile')
    const pwdIdFile = formData.get('pwdIdFile')
    const fourPsFile = formData.get('fourPsFile')

    setPortalError('')
    setPortalSuccess('')

    if (!applicantPortal?.isReceivingApplicants) {
      setPortalError('The UNIFAST portal is closed for applicants right now.')
      return
    }

    if (!isValidPhoneNumber(mobileNumber)) {
      setPortalError('Please enter a valid mobile number. Example: 09123456789 or +639123456789.')
      return
    }

    if (!isValidEmailAddress(emailAddress)) {
      setPortalError('Please enter a valid email address.')
      return
    }

    if (!(psaFile instanceof File) || !psaFile.name || !isValidApplicantPdf(psaFile)) {
      setPortalError('Please upload your PSA as a PDF file.')
      return
    }

    if (
      !(schoolIdFile instanceof File) ||
      !schoolIdFile.name ||
      !isValidApplicantPdf(schoolIdFile)
    ) {
      setPortalError('Please upload your colored School ID photocopy as a PDF file.')
      return
    }

    if (psaFile.size > applicantPdfMaxSize || schoolIdFile.size > applicantPdfMaxSize) {
      setPortalError('Each uploaded PDF must be 5MB or smaller.')
      return
    }

    const optionalFiles = [pwdIdFile, fourPsFile].filter(
      (file) => file instanceof File && file.name,
    )

    if (optionalFiles.some((file) => !isValidApplicantPdf(file))) {
      setPortalError('Optional PWD ID and 4Ps ID documents must be PDF files.')
      return
    }

    if (optionalFiles.some((file) => file.size > applicantPdfMaxSize)) {
      setPortalError('Each uploaded PDF must be 5MB or smaller.')
      return
    }

    setPortalReviewData({
      studentId: String(formData.get('studentId') || '').trim(),
      lastName: String(formData.get('lastName') || '').trim(),
      firstName: String(formData.get('firstName') || '').trim(),
      extensionName: String(formData.get('extensionName') || '').trim(),
      middleName: String(formData.get('middleName') || '').trim(),
      gender: String(formData.get('gender') || ''),
      birthDate: String(formData.get('birthDate') || ''),
      course: String(formData.get('course') || ''),
      year: String(formData.get('year') || ''),
      fatherLastName: String(formData.get('fatherLastName') || '').trim(),
      fatherFirstName: String(formData.get('fatherFirstName') || '').trim(),
      fatherMiddleName: String(formData.get('fatherMiddleName') || '').trim(),
      motherLastName: String(formData.get('motherLastName') || '').trim(),
      motherFirstName: String(formData.get('motherFirstName') || '').trim(),
      motherMiddleName: String(formData.get('motherMiddleName') || '').trim(),
      address: String(formData.get('address') || '').trim(),
      zipCode: String(formData.get('zipCode') || '').trim(),
      pwdId: String(formData.get('pwdId') || '').trim(),
      mobileNumber,
      emailAddress,
      psaFile,
      schoolIdFile,
      pwdIdFile: optionalFiles.includes(pwdIdFile) ? pwdIdFile : null,
      fourPsFile: optionalFiles.includes(fourPsFile) ? fourPsFile : null,
    })
  }

  const handleEditPortalInformation = () => {
    setPortalError('')
    setPortalSuccess('')
    setIsPortalPrivacyOpen(false)
    setPortalReviewData(null)
  }

  const handleOpenPortalPrivacy = () => {
    if (!portalReviewData) return

    setPortalError('')
    setPortalSuccess('')

    if (!applicantPortal?.isReceivingApplicants) {
      setPortalError('The UNIFAST portal is closed for applicants right now.')
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
      const [psaFileStorageId, schoolIdFileStorageId, pwdIdFileStorageId, fourPsFileStorageId] =
        await Promise.all([
          uploadApplicantPdfToStorage(portalReviewData.psaFile),
          uploadApplicantPdfToStorage(portalReviewData.schoolIdFile),
          portalReviewData.pwdIdFile
            ? uploadApplicantPdfToStorage(portalReviewData.pwdIdFile)
            : Promise.resolve(undefined),
          portalReviewData.fourPsFile
            ? uploadApplicantPdfToStorage(portalReviewData.fourPsFile)
            : Promise.resolve(undefined),
        ])

      const applicantSubmission = {
        studentId: portalReviewData.studentId,
        lastName: portalReviewData.lastName,
        firstName: portalReviewData.firstName,
        extensionName: portalReviewData.extensionName,
        middleName: portalReviewData.middleName,
        gender: portalReviewData.gender,
        birthDate: portalReviewData.birthDate,
        course: portalReviewData.course,
        year: portalReviewData.year,
        fatherLastName: portalReviewData.fatherLastName,
        fatherFirstName: portalReviewData.fatherFirstName,
        fatherMiddleName: portalReviewData.fatherMiddleName,
        motherLastName: portalReviewData.motherLastName,
        motherFirstName: portalReviewData.motherFirstName,
        motherMiddleName: portalReviewData.motherMiddleName,
        address: portalReviewData.address,
        zipCode: portalReviewData.zipCode,
        pwdId: portalReviewData.pwdId,
        mobileNumber: portalReviewData.mobileNumber,
        emailAddress: portalReviewData.emailAddress,
        psaFileStorageId,
        psaFileName: portalReviewData.psaFile.name,
        schoolIdFileStorageId,
        schoolIdFileName: portalReviewData.schoolIdFile.name,
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
        pwdIdFile: null,
        fourPsFile: null,
      })
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
    setAdminLoginEmail('')
    setAdminLoginSchoolId('')
    setAdminLoginPassword('')
    setIsAdminLoginOpen(true)
  }

  const closeAdminLogin = () => {
    setIsAdminLoginOpen(false)
    setIsSubmittingAdminLogin(false)
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
          <button className="button button--compact" onClick={openQuickActions} type="button">
            SUPPORT
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
              <h2 className="landing-office-title">
                <span className="landing-office-title__school">IBACMI</span>
                <span className="landing-office-title__separator" aria-hidden="true">
                  —
                </span>
                <span className="landing-office-title__office">Scholarship Office</span>
              </h2>

            </div>
          </section>

          <section className="filter-panel" aria-label="Grantee filters">
            <div className="search-field">
              <span className="material-symbols-outlined">search</span>
              <input
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
                    {allInfoRecords === undefined && (
                      <tr>
                        <td className="empty-state" colSpan={10}>
                          Searching grantee record...
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

          <section className="portal-cta" aria-labelledby="portal-cta-title">
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
              <span className="portal-status-dot" aria-hidden="true" />
              {isPortalStatusLoading
                ? 'CHECKING PORTAL'
                : isApplicantPortalOpen
                  ? 'PORTAL OPEN'
                  : 'PORTAL IS CLOSED'}
            </button>
          </section>
        </div>
      </main>

      <footer className="landing-footer">
        <p>Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office | Developed By CINIFIX</p>
      </footer>

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
            ref={portalFormRef}
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

            <div
              className={`modal-body portal-form${
                portalReviewData ? ' portal-form--hidden' : ''
              }`}
            >
              <section className="portal-section" aria-labelledby="portal-student-heading">
                <h4 id="portal-student-heading">Student Information</h4>

                <div className="portal-grid">
                  {studentPortalFields.map((field) => (
                    <label className="form-field" key={field.name}>
                      <span>{field.label}</span>
                      <input
                        autoComplete={field.autoComplete}
                        name={field.name}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        required={field.required}
                        type="text"
                      />
                    </label>
                  ))}

                  <label className="form-field">
                    <span>Gender</span>
                    <select name="gender" defaultValue="" required>
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Birth Date</span>
                    <input name="birthDate" required type="date" />
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

              <section className="portal-section" aria-labelledby="portal-parents-heading">
                <h4 id="portal-parents-heading">Parents Information</h4>

                <div className="portal-parent-group">
                  <p>Father Information</p>
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
                  <p>Mother Information</p>
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

              <section className="portal-section" aria-labelledby="portal-contact-heading">
                <h4 id="portal-contact-heading">Address and Contact Information</h4>

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

              <section className="portal-section" aria-labelledby="portal-documents-heading">
                <div className="portal-section-heading">
                  <h4 id="portal-documents-heading">Document Requirements</h4>
                  <p>
                    Upload clear PDF copies up to 5MB each. Required and optional documents are
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
                        <strong>Colored School ID Photocopy</strong>
                        <span className="portal-document-badge portal-document-badge--required">
                          Required
                        </span>
                      </span>
                      <span>
                        {portalDocumentFiles.schoolIdFile
                          ? `${portalDocumentFiles.schoolIdFile.name} (${formatFileSize(
                              portalDocumentFiles.schoolIdFile.size,
                            )})`
                          : 'Select colored School ID photocopy PDF'}
                      </span>
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
                    </span>
                  </label>
                </div>
              </section>
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
                              .join(' ') || 'Not provided'}
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
                              .join(' ') || 'Not provided'}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="portal-review-group">
                      <h5>Address and Contact</h5>
                      <dl>
                        <div>
                          <dt>Address</dt>
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
                    Submit Information
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

                  <button className="button" disabled={isSubmittingPortal} type="submit">
                    Review Information
                  </button>
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
                {isSubmittingPortal ? 'Submitting...' : 'I UNDERSTAND'}
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

              <p className="modal-kicker">UNIFAST Portal</p>
              <h3 id="admin-login-title">Sign in </h3>
             
            </div>

            <div className="modal-body admin-login-body auth-form-grid">
              
              <label className="form-field">
                <span>Valid Email address</span>
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
  width: min(100%, 960px);
  max-height: min(860px, calc(100vh - 32px));
  overflow-y: auto;
}

.portal-status-card {
  width: min(100%, 520px);
}

.portal-modal-header {
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
}

.portal-form {
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

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
    max-height: calc(100vh - 20px);
    border-radius: 18px 18px 10px 10px;
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
