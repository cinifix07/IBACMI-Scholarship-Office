import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import sampleSchoolIdFormat from '../assets/samp.jpg'
import './student.css'

const initialForm = {
  tesAwardNo: '',
  studentId: '',
  batchNo: '',
  status: '',
  semester: '',
  schoolYear: '',
}

function getUniqueOptions(options) {
  return [...new Set(options.filter(Boolean))]
}

function parseSchoolYearStart(schoolYear) {
  const match = String(schoolYear ?? '').match(/\d{4}/)
  return match ? Number(match[0]) : 0
}

function getCurrentSchoolYear() {
  const now = new Date()
  const year = now.getFullYear()
  const startYear = now.getMonth() >= 5 ? year : year - 1
  return `${startYear}-${startYear + 1}`
}

function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[\s-]/g, '').trim()
}

function sanitizePhoneNumberInput(phoneNumber) {
  return phoneNumber.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

function findCurrentStudentRecord(records) {
  const currentSchoolYear = getCurrentSchoolYear()
  const currentRecord = records.find((record) => record.schoolYear === currentSchoolYear)

  if (currentRecord) return currentRecord

  return [...records].sort((firstRecord, secondRecord) => {
    const schoolYearDifference =
      parseSchoolYearStart(secondRecord.schoolYear) - parseSchoolYearStart(firstRecord.schoolYear)

    if (schoolYearDifference !== 0) return schoolYearDifference

    return (secondRecord.uploadedAt ?? 0) - (firstRecord.uploadedAt ?? 0)
  })[0]
}

export default function StudentInfoForm({ studentSession, onLogout, onStudentSessionUpdate }) {
  const allInfoRecords = useQuery(api.allinfo.list)
  const generateUploadUrl = useMutation(api.allinfo.generateUploadUrl)
  const saveStudentIdUploads = useMutation(api.allinfo.saveStudentIdUploads)
  const updateStudentPhoneNumber = useMutation(api.adminAuth.updateStudentPhoneNumber)
  const [frontIdFile, setFrontIdFile] = useState(null)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState('')
  const [isSavingUploads, setIsSavingUploads] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(studentSession?.phoneNumber ?? '')
  const [phoneError, setPhoneError] = useState('')
  const [phoneSuccess, setPhoneSuccess] = useState('')
  const [isSavingPhoneNumber, setIsSavingPhoneNumber] = useState(false)
  const updateStudentCurrentAddress = useMutation(api.adminAuth.updateStudentCurrentAddress)
  const [currentAddress, setCurrentAddress] = useState(studentSession?.currentAddress ?? '')
  const [addressError, setAddressError] = useState('')
  const [addressSuccess, setAddressSuccess] = useState('')
  const [isSavingCurrentAddress, setIsSavingCurrentAddress] = useState(false)

  const studentSchoolId = String(studentSession?.schoolId ?? '').trim().toLowerCase()
  const savedPhoneNumber = studentSession?.phoneNumber ?? ''
  const hasPhoneNumberChanged = normalizePhoneNumber(phoneNumber) !== normalizePhoneNumber(savedPhoneNumber)
  const savedCurrentAddress = studentSession?.currentAddress ?? ''
  const hasCurrentAddressChanged = currentAddress.trim() !== savedCurrentAddress.trim()
  const studentRecord = useMemo(() => {
    if (!studentSchoolId || !allInfoRecords) return null

    const matchingRecords = allInfoRecords.filter((record) => {
      const recordStudentId = String(record.studentId ?? '').trim().toLowerCase()
      return recordStudentId === studentSchoolId
    })

    return findCurrentStudentRecord(matchingRecords) ?? null
  }, [allInfoRecords, studentSchoolId])

  const form = studentRecord
    ? {
        tesAwardNo: studentRecord.tesAwardNumber ?? '',
        studentId: studentRecord.studentId ?? '',
        lastName: studentRecord.lastName ?? '',
        firstName: studentRecord.firstName ?? '',
        middleInitial: studentRecord.middleInitial ?? '',
        batchNo: studentRecord.batchId ?? '',
        status: studentRecord.status ?? '',
        semester: studentRecord.semester ?? '',
        schoolYear: studentRecord.schoolYear ?? '',
      }
    : initialForm

  const isLoading = allInfoRecords === undefined
  const hasStudentSession = Boolean(studentSchoolId)
  const showMissingRecord = !isLoading && hasStudentSession && !studentRecord
  const statusOptions = getUniqueOptions([form.status, 'Validated', 'Pending', 'Rejected'])
  const semesterOptions = getUniqueOptions([form.semester, '1st Semester', '2nd Semester'])
  const schoolYearOptions = getUniqueOptions([form.schoolYear, '2023-2024', '2024-2025'])
  const hasSavedFrontId = Boolean(studentRecord?.frontIdStorageId)
  const uploadedIdUrl = studentRecord?.frontIdUrl ?? ''

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout()
    }
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(sanitizePhoneNumberInput(event.target.value))
    setPhoneError('')
    setPhoneSuccess('')
  }

  const handleCurrentAddressChange = (event) => {
    setCurrentAddress(event.target.value)
    setAddressError('')
    setAddressSuccess('')
  }

  const handleSavePhoneNumber = async () => {
    const nextPhoneNumber = normalizePhoneNumber(phoneNumber)

    setPhoneError('')
    setPhoneSuccess('')

    if (!studentSchoolId) {
      setPhoneError('Please sign in before updating your phone number.')
      return
    }

    if (!nextPhoneNumber) {
      setPhoneError('Phone number is required.')
      return
    }

    if (!isValidPhoneNumber(nextPhoneNumber)) {
      setPhoneError('Please enter a valid phone number. Example: 09123456789 or +639123456789.')
      return
    }

    if (!hasPhoneNumberChanged) {
      setPhoneSuccess('Phone number is already up to date.')
      return
    }

    setIsSavingPhoneNumber(true)

    try {
      const result = await updateStudentPhoneNumber({
        schoolId: studentSession.schoolId,
        phoneNumber: nextPhoneNumber,
      })

      if (!result.success) {
        setPhoneError(result.message || 'Unable to update phone number.')
        return
      }

      setPhoneNumber(result.admin?.phoneNumber ?? nextPhoneNumber)
      setPhoneSuccess(result.message || 'Phone number updated successfully.')

      if (typeof onStudentSessionUpdate === 'function') {
        onStudentSessionUpdate(result.admin)
      }
    } catch (error) {
      setPhoneError(error instanceof Error ? error.message : 'Unable to update phone number.')
    } finally {
      setIsSavingPhoneNumber(false)
    }
  }

  const handleSaveCurrentAddress = async () => {
    const nextCurrentAddress = currentAddress.trim()

    setAddressError('')
    setAddressSuccess('')

    if (!studentSchoolId) {
      setAddressError('Please sign in before updating your current address.')
      return
    }

    if (!nextCurrentAddress) {
      setAddressError('Current address is required.')
      return
    }

    if (nextCurrentAddress.length < 8) {
      setAddressError('Current address must be at least 8 characters.')
      return
    }

    if (!hasCurrentAddressChanged) {
      setAddressSuccess('Current address is already up to date.')
      return
    }

    setIsSavingCurrentAddress(true)

    try {
      const result = await updateStudentCurrentAddress({
        schoolId: studentSession.schoolId,
        currentAddress: nextCurrentAddress,
      })

      if (!result.success) {
        setAddressError(result.message || 'Unable to update current address.')
        return
      }

      setCurrentAddress(result.admin?.currentAddress ?? nextCurrentAddress)
      setAddressSuccess(result.message || 'Current address updated successfully.')

      if (typeof onStudentSessionUpdate === 'function') {
        onStudentSessionUpdate(result.admin)
      }
    } catch (error) {
      setAddressError(error instanceof Error ? error.message : 'Unable to update current address.')
    } finally {
      setIsSavingCurrentAddress(false)
    }
  }

  const handleFileChange = (setter) => (event) => {
    const selectedFile = event.target.files?.[0] ?? null

    setUploadError('')
    setUploadSuccess('')

    if (
      selectedFile &&
      selectedFile.type !== 'application/pdf' &&
      !/\.pdf$/i.test(selectedFile.name)
    ) {
      setUploadError('Only PDF files are allowed.')
      event.target.value = ''
      setter(null)
      return
    }

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      setUploadError('Each file must be 5MB or smaller.')
      event.target.value = ''
      setter(null)
      return
    }

    setter(selectedFile)
  }

  const uploadFileToStorage = async (file) => {
    const uploadUrl = await generateUploadUrl()
    const uploadResult = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Content-Type': file.type || 'application/octet-stream',
      },
      body: file,
    })

    if (!uploadResult.ok) {
      throw new Error(`Unable to upload ${file.name}.`)
    }

    const { storageId } = await uploadResult.json()
    return storageId
  }

  const handleSaveUploads = async () => {
    setUploadError('')
    setUploadSuccess('')

    if (!studentRecord) {
      setUploadError('No allinfo record is available for your Student ID.')
      return
    }

    if (!frontIdFile) {
      setUploadError('Choose a PDF file before saving.')
      return
    }

    setIsSavingUploads(true)

    try {
      const frontIdStorageId = await uploadFileToStorage(frontIdFile)

      const result = await saveStudentIdUploads({
        studentId: studentRecord.studentId,
        schoolYear: studentRecord.schoolYear,
        frontIdStorageId,
      })

      setFrontIdFile(null)
      setUploadSuccess(`ID file saved for School Year ${result.schoolYear || form.schoolYear}.`)
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Unable to save uploaded files.')
    } finally {
      setIsSavingUploads(false)
    }
  }

  return (
    <div className="student-page">
      <header className="student-topbar">
        <button
          aria-label="Log out and return to landing page"
          className="student-icon-button"
          onClick={handleLogout}
          type="button"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1>Student Information</h1>
      </header>

      <main className="student-main">
        <section className="student-hero" aria-labelledby="student-title">
          <div className="student-badge">Academic Year Update</div>
          <h2 id="student-title">Unifast Portal</h2>
          <p>Please ensure all details match your official documents for successful validation.</p>
        </section>

        {!hasStudentSession && (
          <div className="student-state-box">
            Please sign in with a student account to view your grantee information.
          </div>
        )}

        {isLoading && <div className="student-state-box">Loading your grantee information...</div>}

        {showMissingRecord && (
          <div className="student-state-box student-state-box--warning">
            No allinfo record was found for Student ID {studentSession?.schoolId}.
          </div>
        )}

        <form className="student-form" id="student-information-form">
          <div className="student-field">
            <label htmlFor="tes-award-no">TES Award No.</label>
            <input
              id="tes-award-no"
              placeholder="e.g. TES-2024-XXXX"
              readOnly
              type="text"
              value={form.tesAwardNo}
            />
          </div>

          <div className="student-field">
            <label htmlFor="student-id">Student ID</label>
            <input
              id="student-id"
              placeholder="Enter your University ID"
              readOnly
              type="text"
              value={form.studentId}
            />
          </div>

          <div className="student-field student-field--with-action">
            <label htmlFor="phone-number">Phone No.</label>
            <div className="student-inline-control">
              <input
                id="phone-number"
                inputMode="tel"
                pattern="\+?[0-9]*"
                placeholder="09123456789 or +639123456789"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />

              <button
                className="student-inline-button"
                disabled={!hasStudentSession || !hasPhoneNumberChanged || isSavingPhoneNumber}
                onClick={handleSavePhoneNumber}
                type="button"
              >
                {isSavingPhoneNumber ? 'Saving...' : 'Save'}
              </button>
            </div>

            {phoneError && (
              <p className="student-upload-message student-upload-message--error">{phoneError}</p>
            )}
            {phoneSuccess && (
              <p className="student-upload-message student-upload-message--success">{phoneSuccess}</p>
            )}
          </div>

          <div className="student-field student-field--with-action student-field--full">
            <label htmlFor="current-address">Current Address</label>
            <textarea
              id="current-address"
              placeholder="Enter your current address"
              rows={3}
              value={currentAddress}
              onChange={handleCurrentAddressChange}
            />

            <button
              className="student-inline-button student-inline-button--wide"
              disabled={!hasStudentSession || !hasCurrentAddressChanged || isSavingCurrentAddress}
              onClick={handleSaveCurrentAddress}
              type="button"
            >
              {isSavingCurrentAddress ? 'Saving Address...' : 'Save Current Address'}
            </button>

            {addressError && (
              <p className="student-upload-message student-upload-message--error">{addressError}</p>
            )}
            {addressSuccess && (
              <p className="student-upload-message student-upload-message--success">{addressSuccess}</p>
            )}
          </div>

          <div className="student-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              placeholder="Last Name"
              readOnly
              type="text"
              value={form.lastName}
            />
          </div>

          <div className="student-field">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              placeholder="First Name"
              readOnly
              type="text"
              value={form.firstName}
            />
          </div>

          <div className="student-field">
            <label htmlFor="middle-initial">MI.</label>
            <input
              id="middle-initial"
              placeholder="MI."
              readOnly
              type="text"
              value={form.middleInitial}
            />
          </div>

          <div className="student-field">
            <label htmlFor="batch-no">Batch No.</label>
            <input
              id="batch-no"
              placeholder="e.g. Batch 7"
              readOnly
              type="text"
              value={form.batchNo}
            />
          </div>

          <div className="student-select-grid">
            <div className="student-field">
              <label htmlFor="status">Status</label>
              <div className="student-select-wrap">
                <select disabled id="status" value={form.status}>
                  <option disabled value="">
                    Select Status
                  </option>
                  {statusOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>

            <div className="student-field">
              <label htmlFor="semester">Semester</label>
              <div className="student-select-wrap">
                <select disabled id="semester" value={form.semester}>
                  <option disabled value="">
                    Select Semester
                  </option>
                  {semesterOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>

            <div className="student-field">
              <label htmlFor="school-year">School Year</label>
              <div className="student-select-wrap">
                <select disabled id="school-year" value={form.schoolYear}>
                  <option disabled value="">
                    Select School Year
                  </option>
                  {schoolYearOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <section className="student-upload-section" aria-labelledby="student-upload-title">
            <div className="student-upload-copy">
              <h3 id="student-upload-title">
                Upload colored copy of School ID with 3 signatures and Batch No.
              </h3>
              <p>
                Files will be saved to your {form.schoolYear || 'current'} allinfo record. If you
                have records from other years, the portal automatically uses the current or latest
                School Year.
              </p>
            </div>

            <aside className="student-sample-card" aria-label="Sample School ID upload format">
              <div className="student-sample-card__header">
                <div>
                  <span className="student-sample-card__eyebrow">Sample Format</span>
                  <h4>Scan layout guide</h4>
                </div>
                <span className="student-sample-card__badge">Required</span>
              </div>
              <div className="student-sample-card__body">
                <a
                  className="student-sample-card__image-link"
                  href={sampleSchoolIdFormat}
                  rel="noreferrer"
                  target="_blank"
                  title="Open sample format"
                >
                  <img
                    alt="Sample scan format showing front and back School ID, three signatures, and Batch No."
                    src={sampleSchoolIdFormat}
                  />
                </a>
                <div className="student-sample-card__checklist">
                  <p>Before converting to PDF, make sure your scan includes:</p>
                  <ul>
                    <li>Colored front and back copy of your School ID</li>
                    <li>Three clear signatures below the ID copies</li>
                    <li>Readable Batch No. written on the same page</li>
                  </ul>
                  <span>Upload the final file as PDF only, maximum 5MB.</span>
                </div>
              </div>
            </aside>

            <div className="student-upload-field">
              <span className="student-upload-label">Upload File</span>
              <label
                className={`student-upload-card${
                  frontIdFile || hasSavedFrontId ? ' student-upload-card--selected' : ''
                }`}
                htmlFor="file-front"
              >
                <input
                  accept="application/pdf,.pdf"
                  disabled={!studentRecord || isSavingUploads}
                  id="file-front"
                  type="file"
                  onChange={handleFileChange(setFrontIdFile)}
                />
                <span className="student-upload-icon">
                  <span className="material-symbols-outlined">id_card</span>
                </span>
                <span className="student-upload-title">
                  {frontIdFile?.name ||
                    (hasSavedFrontId ? 'File already uploaded' : 'Tap to upload File')}
                </span>
                <span className="student-upload-note">PDF only up to 5MB</span>
              </label>
            </div>

            {uploadedIdUrl && (
              <div className="student-id-preview">
                <div className="student-id-preview__header">
                  <span>Uploaded School ID</span>
                  <a href={uploadedIdUrl} rel="noreferrer" target="_blank">
                    View full file
                  </a>
                </div>

                <a className="student-id-preview__file" href={uploadedIdUrl} rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                  Open uploaded PDF
                </a>
              </div>
            )}

            {uploadError && <p className="student-upload-message student-upload-message--error">{uploadError}</p>}
            {uploadSuccess && (
              <p className="student-upload-message student-upload-message--success">
                {uploadSuccess}
              </p>
            )}

            <button
              className="student-save-button"
              disabled={!studentRecord || isSavingUploads}
              onClick={handleSaveUploads}
              type="button"
            >
              <span>{isSavingUploads ? 'Saving Uploads...' : 'Save Uploaded ID'}</span>
              <span className="material-symbols-outlined">check_circle</span>
            </button>
          </section>
        </form>
      </main>
    </div>
  )
}
