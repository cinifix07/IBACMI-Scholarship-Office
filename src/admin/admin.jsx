import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import ibacmiLogo from '../assets/IBACMI.png'

const granteesPerPage = 5
const quickActionsPerPage = 5
const logsPerPage = 5

function formatLogDate(timestamp) {
  if (!timestamp) return '—'

  return new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(timestamp))
}

const granteeTemplateHeaders = [
  'No.',
  'TES Award Number',
  'Student ID',
  'Last Name',
  'First Name',
  'MI.',
  'batch No.',
  'Status',
  'Semester',
  'School Year',
]

function AdminStatusBadge({ status, tone }) {
  return (
    <span className={`admin-status admin-status--${tone}`}>
      <span className="admin-status__dot" />
      {status || '—'}
    </span>
  )
}

function getQuickActionStatusTone(status = '') {
  const normalizedStatus = status.toLowerCase()

  if (normalizedStatus.includes('grantee')) return 'grantee'
  if (normalizedStatus.includes('applicant')) return 'applicant'

  if (
    normalizedStatus.includes('complete') ||
    normalizedStatus.includes('resolved') ||
    normalizedStatus.includes('valid') ||
    normalizedStatus.includes('approved')
  ) {
    return 'validated'
  }

  if (normalizedStatus.includes('reject') || normalizedStatus.includes('decline')) {
    return 'rejected'
  }

  return 'pending'
}

function formatSubmittedAt(timestamp) {
  if (!timestamp) return '—'

  return new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(timestamp))
}

function escapeCsvValue(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`
}

function downloadCsvFile(filename, rows) {
  const csvMarkup = rows.map((row) => row.map(escapeCsvValue).join(',')).join('\n')
  const blob = new Blob([csvMarkup], { type: 'text/csv;charset=utf-8' })
  const downloadUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = downloadUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(downloadUrl)
}

function downloadGranteeTemplate() {
  const templateRows = [
    granteeTemplateHeaders,
    [
      '1',
      'TES-2024-0001',
      '2024-UNI-0001',
      'Dela Cruz',
      'Juan',
      'P',
      '2024-01',
      'Pending',
      '1st Semester',
      '2024-2025',
    ],
  ]

  const templateMarkup = templateRows
    .map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([templateMarkup], { type: 'text/csv;charset=utf-8' })
  const downloadUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = downloadUrl
  link.download = 'tdp-grantee-template.csv'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(downloadUrl)
}

function sanitizeDownloadPart(value, fallback) {
  const sanitizedValue = String(value ?? '')
    .trim()
    .replace(/[^a-z0-9-]+/gi, '-')
    .replace(/^-+|-+$/g, '')

  return sanitizedValue || fallback
}

function getFileExtension(contentType, url) {
  if (contentType === 'application/pdf') return '.pdf'
  if (contentType === 'image/png') return '.png'
  if (contentType === 'image/jpeg') return '.jpg'

  try {
    const extensionMatch = new URL(url).pathname.match(/\.(pdf|png|jpe?g)$/i)
    return extensionMatch ? `.${extensionMatch[1].toLowerCase().replace('jpeg', 'jpg')}` : ''
  } catch {
    return ''
  }
}

async function getZipFileFromGrantee(grantee, index) {
  const response = await fetch(grantee.frontIdUrl)

  if (!response.ok) {
    throw new Error(`Unable to download School ID file for ${grantee.studentId || 'student'}.`)
  }

  const blob = await response.blob()
  const bytes = new Uint8Array(await blob.arrayBuffer())
  const studentId = sanitizeDownloadPart(grantee.studentId, `student-${index + 1}`)
  const lastName = sanitizeDownloadPart(grantee.lastName, 'no-last-name')
  const firstName = sanitizeDownloadPart(grantee.firstName, 'no-first-name')
  const middleInitial = sanitizeDownloadPart(grantee.middleInitial, 'no-mi')
  const selectedYear = sanitizeDownloadPart(grantee.schoolYear, 'school-year')
  const extension = getFileExtension(blob.type, grantee.frontIdUrl)

  return {
    bytes,
    name: `school-id-${lastName}-${firstName}-${middleInitial}-${studentId}-${selectedYear}-${index + 1}${extension}`,
  }
}

function createCrc32Table() {
  return Array.from({ length: 256 }, (_, index) => {
    let value = index

    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1
    }

    return value >>> 0
  })
}

const crc32Table = createCrc32Table()
const zipTextEncoder = new TextEncoder()

function calculateCrc32(bytes) {
  let crc = 0xffffffff

  for (const byte of bytes) {
    crc = crc32Table[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  }

  return (crc ^ 0xffffffff) >>> 0
}

function getZipTimestamp() {
  const now = new Date()
  const time =
    (now.getHours() << 11) | (now.getMinutes() << 5) | Math.floor(now.getSeconds() / 2)
  const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate()

  return { date, time }
}

function writeZipValue(view, offset, byteLength, value) {
  if (byteLength === 2) {
    view.setUint16(offset, value, true)
    return
  }

  view.setUint32(offset, value >>> 0, true)
}

function createStoredZipBlob(files) {
  const { date, time } = getZipTimestamp()
  const chunks = []
  const centralDirectoryChunks = []
  let offset = 0

  files.forEach((file) => {
    const fileNameBytes = zipTextEncoder.encode(file.name)
    const crc = calculateCrc32(file.bytes)
    const localHeader = new Uint8Array(30 + fileNameBytes.length)
    const localView = new DataView(localHeader.buffer)

    writeZipValue(localView, 0, 4, 0x04034b50)
    writeZipValue(localView, 4, 2, 20)
    writeZipValue(localView, 8, 2, 0)
    writeZipValue(localView, 10, 2, time)
    writeZipValue(localView, 12, 2, date)
    writeZipValue(localView, 14, 4, crc)
    writeZipValue(localView, 18, 4, file.bytes.length)
    writeZipValue(localView, 22, 4, file.bytes.length)
    writeZipValue(localView, 26, 2, fileNameBytes.length)
    localHeader.set(fileNameBytes, 30)

    chunks.push(localHeader, file.bytes)

    const centralHeader = new Uint8Array(46 + fileNameBytes.length)
    const centralView = new DataView(centralHeader.buffer)

    writeZipValue(centralView, 0, 4, 0x02014b50)
    writeZipValue(centralView, 4, 2, 20)
    writeZipValue(centralView, 6, 2, 20)
    writeZipValue(centralView, 10, 2, 0)
    writeZipValue(centralView, 12, 2, time)
    writeZipValue(centralView, 14, 2, date)
    writeZipValue(centralView, 16, 4, crc)
    writeZipValue(centralView, 20, 4, file.bytes.length)
    writeZipValue(centralView, 24, 4, file.bytes.length)
    writeZipValue(centralView, 28, 2, fileNameBytes.length)
    writeZipValue(centralView, 42, 4, offset)
    centralHeader.set(fileNameBytes, 46)
    centralDirectoryChunks.push(centralHeader)

    offset += localHeader.length + file.bytes.length
  })

  const centralDirectorySize = centralDirectoryChunks.reduce((total, chunk) => total + chunk.length, 0)
  const endHeader = new Uint8Array(22)
  const endView = new DataView(endHeader.buffer)

  writeZipValue(endView, 0, 4, 0x06054b50)
  writeZipValue(endView, 8, 2, files.length)
  writeZipValue(endView, 10, 2, files.length)
  writeZipValue(endView, 12, 4, centralDirectorySize)
  writeZipValue(endView, 16, 4, offset)

  return new Blob([...chunks, ...centralDirectoryChunks, endHeader], { type: 'application/zip' })
}

function normalizeSpreadsheetValue(value) {
  return value.replaceAll('\u00a0', ' ').trim()
}

function parseDelimitedRows(text) {
  const rows = []
  let row = []
  let cell = ''
  let isQuoted = false

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index]
    const nextCharacter = text[index + 1]

    if (character === '"' && isQuoted && nextCharacter === '"') {
      cell += '"'
      index += 1
    } else if (character === '"') {
      isQuoted = !isQuoted
    } else if (character === ',' && !isQuoted) {
      row.push(normalizeSpreadsheetValue(cell))
      cell = ''
    } else if ((character === '\n' || character === '\r') && !isQuoted) {
      if (character === '\r' && nextCharacter === '\n') {
        index += 1
      }

      row.push(normalizeSpreadsheetValue(cell))

      if (row.some(Boolean)) {
        rows.push(row)
      }

      row = []
      cell = ''
    } else {
      cell += character
    }
  }

  row.push(normalizeSpreadsheetValue(cell))

  if (row.some(Boolean)) {
    rows.push(row)
  }

  return rows
}

function parseGranteeUpload(text) {
  const rows = parseDelimitedRows(text)

  return rows
    .filter((row) => row.some(Boolean))
    .filter((row) => !row.join(' ').toLowerCase().includes('tes award number'))
    .map((row) => ({
      no: row[0] ?? '',
      tesAwardNumber: row[1] ?? '',
      studentId: row[2] ?? '',
      lastName: row[3] ?? '',
      firstName: row[4] ?? '',
      middleInitial: row[5] ?? '',
      batchId: row[6] ?? '',
      status: row[7] ?? '',
      semester: row[8] ?? '',
      schoolYear: row[9] ?? '',
    }))
    .filter(
      (record) =>
        record.no &&
        record.tesAwardNumber &&
        record.studentId &&
        record.lastName &&
        record.firstName &&
        record.batchId &&
        record.status &&
        record.semester &&
        record.schoolYear,
    )
}

function Admin({ onLogout }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLogsOpen, setIsLogsOpen] = useState(false)
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  const [isAddRecordOpen, setIsAddRecordOpen] = useState(false)
  const [isBatchExportOpen, setIsBatchExportOpen] = useState(false)
  const [isSchoolIdDownloadOpen, setIsSchoolIdDownloadOpen] = useState(false)
  const [isDownloadingSchoolIdFiles, setIsDownloadingSchoolIdFiles] = useState(false)
  const [selectedUploadFile, setSelectedUploadFile] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const [deleteMessage, setDeleteMessage] = useState('')
  const [isUploadingRecords, setIsUploadingRecords] = useState(false)
  const [isDeletingRecords, setIsDeletingRecords] = useState(false)
  const [currentGranteePage, setCurrentGranteePage] = useState(1)
  const [currentQuickActionPage, setCurrentQuickActionPage] = useState(1)
  const [selectedGranteeIds, setSelectedGranteeIds] = useState([])
  const [selectedGranteeRecord, setSelectedGranteeRecord] = useState(null)
  const [editGranteeForm, setEditGranteeForm] = useState(null)
  const [editMessage, setEditMessage] = useState('')
  const [isSavingEdit, setIsSavingEdit] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBatch, setSelectedBatch] = useState('')
  const [currentLogPage, setCurrentLogPage] = useState(1)

  const quickActions = useQuery(api.quickActions.list)
  const activityLogs = useQuery(api.activityLogs.list)
  const allInfoRecords = useQuery(api.allinfo.list)
  const studentAccounts = useQuery(api.adminAuth.listStudentAccounts)
  const createAllInfoRecords = useMutation(api.allinfo.bulkCreate)
  const updateAllInfoRecord = useMutation(api.allinfo.update)
  const deleteAllInfoRecords = useMutation(api.allinfo.deleteMany)

  const isAnyModalOpen =
    isLogsOpen ||
    isQuickActionsOpen ||
    isAddRecordOpen ||
    isBatchExportOpen ||
    isSchoolIdDownloadOpen ||
    Boolean(selectedGranteeRecord)

  const granteeRows = allInfoRecords ?? []
  const quickActionRows = quickActions ?? []
  const activityLogRows = activityLogs ?? []
  const studentAccountRows = studentAccounts ?? []

  const availableBatches = useMemo(() => {
    return Array.from(
      new Set(
        granteeRows
          .map((record) => String(record.batchId ?? '').trim())
          .filter(Boolean),
      ),
    ).sort()
  }, [granteeRows])

  const filteredGranteeRows = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const batch = selectedBatch.trim().toLowerCase()

    return granteeRows.filter((record) => {
      const searchableText = [
        record.no,
        record.tesAwardNumber,
        record.studentId,
        record.lastName,
        record.firstName,
        record.middleInitial,
        record.batchId,
        record.status,
        record.semester,
        record.schoolYear,
      ]
        .map((value) => String(value ?? '').toLowerCase())
        .join(' ')

      const matchesSearch = query ? searchableText.includes(query) : true
      const matchesBatch = batch
        ? String(record.batchId ?? '').trim().toLowerCase() === batch
        : true

      return matchesSearch && matchesBatch
    })
  }, [granteeRows, searchQuery, selectedBatch])

  const totalGranteePages = Math.max(1, Math.ceil(filteredGranteeRows.length / granteesPerPage))
  const activeGranteePage = Math.min(currentGranteePage, totalGranteePages)
  const firstGranteeIndex = (activeGranteePage - 1) * granteesPerPage

  const currentGrantees = filteredGranteeRows.slice(
    firstGranteeIndex,
    firstGranteeIndex + granteesPerPage,
  )
  const granteesWithSchoolIdFiles = filteredGranteeRows.filter((grantee) => grantee.frontIdUrl)
  const schoolIdFileYears = useMemo(() => {
    return Array.from(
      new Set(
        granteesWithSchoolIdFiles
          .map((grantee) => String(grantee.schoolYear ?? '').trim())
          .filter(Boolean),
      ),
    ).sort((firstYear, secondYear) => secondYear.localeCompare(firstYear))
  }, [granteesWithSchoolIdFiles])

  const showingStart = filteredGranteeRows.length === 0 ? 0 : firstGranteeIndex + 1
  const showingEnd = firstGranteeIndex + currentGrantees.length

  const totalQuickActionPages = Math.max(1, Math.ceil(quickActionRows.length / quickActionsPerPage))
  const activeQuickActionPage = Math.min(currentQuickActionPage, totalQuickActionPages)
  const firstQuickActionIndex = (activeQuickActionPage - 1) * quickActionsPerPage

  const currentQuickActions = quickActionRows.slice(
    firstQuickActionIndex,
    firstQuickActionIndex + quickActionsPerPage,
  )

  const quickActionShowingStart = quickActionRows.length === 0 ? 0 : firstQuickActionIndex + 1
  const quickActionShowingEnd = firstQuickActionIndex + currentQuickActions.length

  const totalLogPages = Math.max(1, Math.ceil(activityLogRows.length / logsPerPage))
  const activeLogPage = Math.min(currentLogPage, totalLogPages)
  const firstLogIndex = (activeLogPage - 1) * logsPerPage
  const currentActivityLogs = activityLogRows.slice(firstLogIndex, firstLogIndex + logsPerPage)
  const logShowingStart = activityLogRows.length === 0 ? 0 : firstLogIndex + 1
  const logShowingEnd = firstLogIndex + currentActivityLogs.length

  const goToGranteePage = (pageNumber) => {
    setCurrentGranteePage(Math.min(Math.max(pageNumber, 1), totalGranteePages))
  }

  const goToQuickActionPage = (pageNumber) => {
    setCurrentQuickActionPage(Math.min(Math.max(pageNumber, 1), totalQuickActionPages))
  }

  const goToLogPage = (pageNumber) => {
    setCurrentLogPage(Math.min(Math.max(pageNumber, 1), totalLogPages))
  }

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedBatch('')
    setCurrentGranteePage(1)
  }

  const downloadSchoolIdFiles = async (schoolYear) => {
    const matchingFiles = granteesWithSchoolIdFiles.filter((grantee) => {
      return String(grantee.schoolYear ?? '').trim() === schoolYear
    })

    if (matchingFiles.length === 0) return

    setIsDownloadingSchoolIdFiles(true)

    try {
      const zipFiles = []

      for (const [index, grantee] of matchingFiles.entries()) {
        try {
          const zipFile = await getZipFileFromGrantee(grantee, index)
          zipFiles.push(zipFile)
        } catch (error) {
          console.warn(error)
        }
      }

      if (zipFiles.length === 0) {
        throw new Error('No School ID files could be downloaded for this School Year.')
      }

      const zipBlob = createStoredZipBlob(zipFiles)
      const zipUrl = URL.createObjectURL(zipBlob)
      const link = document.createElement('a')
      const selectedYear = sanitizeDownloadPart(schoolYear, 'school-year')

      link.href = zipUrl
      link.download = `school-id-files-${selectedYear}.zip`
      link.rel = 'noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(zipUrl)

      setIsSchoolIdDownloadOpen(false)
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Unable to download School ID files.')
    } finally {
      setIsDownloadingSchoolIdFiles(false)
    }
  }

  const exportBatchInfoCsv = (batchId) => {
    if (studentAccounts === undefined) {
      window.alert('Please wait while student account data is loading.')
      return
    }

    const selectedBatch = String(batchId ?? '').trim()
    const batchRecords = granteeRows.filter((record) => {
      return String(record.batchId ?? '').trim() === selectedBatch
    })

    if (batchRecords.length === 0) {
      window.alert('No records found for this batch.')
      return
    }

    const accountBySchoolId = new Map(
      studentAccountRows.map((account) => [
        String(account.schoolId ?? '').trim().toLowerCase(),
        account,
      ]),
    )

    const csvRows = [
      [
        'Batch No.',
        'Student ID',
        'TES Award Number',
        'Last Name',
        'First Name',
        'MI.',
        'School Year',
        'Status',
        'Email Account',
        'Phone No.',
        'Current Address',
        'Account Status',
      ],
      ...batchRecords.map((record) => {
        const account = accountBySchoolId.get(String(record.studentId ?? '').trim().toLowerCase())

        return [
          record.batchId ?? '',
          record.studentId ?? '',
          record.tesAwardNumber ?? '',
          record.lastName ?? '',
          record.firstName ?? '',
          record.middleInitial ?? '',
          record.schoolYear ?? '',
          record.status ?? '',
          account?.email ?? '',
          account?.phoneNumber ?? '',
          account?.currentAddress ?? '',
          account?.status ?? 'No student account',
        ]
      }),
    ]

    const safeBatch = sanitizeDownloadPart(selectedBatch, 'batch')
    downloadCsvFile(`batch-info-${safeBatch}.csv`, csvRows)
    setIsBatchExportOpen(false)
  }

  const openQuickActions = () => {
    setCurrentQuickActionPage(1)
    setIsQuickActionsOpen(true)
  }

  const openAddRecordModal = () => {
    setSelectedUploadFile(null)
    setUploadMessage('')
    setDeleteMessage('')
    setIsUploadingRecords(false)
    setIsAddRecordOpen(true)
  }

  const closeAddRecordModal = () => {
    if (isUploadingRecords) return

    setIsAddRecordOpen(false)
    setSelectedUploadFile(null)
    setUploadMessage('')
    setIsUploadingRecords(false)
  }

  const closeEditModal = () => {
    if (isSavingEdit) return
    setSelectedGranteeRecord(null)
    setEditGranteeForm(null)
    setEditMessage('')
  }

  const handleEditGrantee = (grantee) => {
    setSelectedGranteeRecord(grantee)
    setEditGranteeForm({
      no: grantee.no ?? '',
      tesAwardNumber: grantee.tesAwardNumber ?? '',
      studentId: grantee.studentId ?? '',
      lastName: grantee.lastName ?? '',
      firstName: grantee.firstName ?? '',
      middleInitial: grantee.middleInitial ?? '',
      batchId: grantee.batchId ?? '',
      status: grantee.status ?? '',
      semester: grantee.semester ?? '',
      schoolYear: grantee.schoolYear ?? '',
    })
    setEditMessage('')
  }

  const handleEditFieldChange = (fieldName) => (event) => {
    setEditMessage('')
    setEditGranteeForm((currentForm) => ({
      ...currentForm,
      [fieldName]: event.target.value,
    }))
  }

  const handleSaveEdit = async (event) => {
    event.preventDefault()

    if (!selectedGranteeRecord || !editGranteeForm) return

    const requiredFields = [
      'no',
      'tesAwardNumber',
      'studentId',
      'lastName',
      'firstName',
      'batchId',
      'status',
      'semester',
      'schoolYear',
    ]
    const hasMissingRequiredField = requiredFields.some((fieldName) => {
      return !String(editGranteeForm[fieldName] ?? '').trim()
    })

    if (hasMissingRequiredField) {
      setEditMessage('Please complete all required fields before saving.')
      return
    }

    setIsSavingEdit(true)
    setEditMessage('Saving changes...')

    try {
      await updateAllInfoRecord({
        id: selectedGranteeRecord._id,
        ...editGranteeForm,
      })

      setEditMessage('Record updated successfully.')
      setSelectedGranteeRecord(null)
      setEditGranteeForm(null)
    } catch (error) {
      setEditMessage(error instanceof Error ? error.message : 'Unable to update record.')
    } finally {
      setIsSavingEdit(false)
    }
  }

  const handleSelectGrantee = (granteeId) => {
    setDeleteMessage('')

    setSelectedGranteeIds((currentIds) => {
      if (currentIds.includes(granteeId)) {
        return currentIds.filter((id) => id !== granteeId)
      }

      return [...currentIds, granteeId]
    })
  }

  const handleDeleteCheckedGrantees = async () => {
    if (selectedGranteeIds.length === 0) {
      setDeleteMessage('Please check at least one record before deleting.')
      return
    }

    const confirmed = window.confirm(
      `Delete ${selectedGranteeIds.length} checked record${
        selectedGranteeIds.length === 1 ? '' : 's'
      }?`,
    )

    if (!confirmed) return

    setIsDeletingRecords(true)
    setDeleteMessage('Deleting checked record...')

    try {
      const result = await deleteAllInfoRecords({
        ids: selectedGranteeIds,
      })

      setSelectedGranteeIds([])
      setDeleteMessage(
        `${result?.deleted ?? selectedGranteeIds.length} record${
          (result?.deleted ?? selectedGranteeIds.length) === 1 ? '' : 's'
        } deleted successfully.`,
      )
    } catch (error) {
      setDeleteMessage(error instanceof Error ? error.message : 'Unable to delete records.')
    } finally {
      setIsDeletingRecords(false)
    }
  }

  const handleUploadFileChange = (event) => {
    const file = event.target.files?.[0] ?? null

    setSelectedUploadFile(file)
    setUploadMessage(file ? `${file.name} is ready to upload.` : '')
  }

  const handleUploadSubmit = async (event) => {
    event.preventDefault()

    if (!selectedUploadFile) {
      setUploadMessage('Select a CSV file before uploading.')
      return
    }

    if (!selectedUploadFile.name.toLowerCase().endsWith('.csv')) {
      setUploadMessage('Please upload the downloaded CSV template file.')
      return
    }

    setIsUploadingRecords(true)
    setUploadMessage('Reading file...')

    try {
      const fileText = await selectedUploadFile.text()
      const records = parseGranteeUpload(fileText)

      if (records.length === 0) {
        setUploadMessage(
          'No valid rows found. Use the CSV template headers and add record values.',
        )
        return
      }

      const result = await createAllInfoRecords({ records })

      setUploadMessage(
        `${result.inserted} record${result.inserted === 1 ? '' : 's'} saved to allinfo.`,
      )

      setSelectedUploadFile(null)
    } catch (error) {
      setUploadMessage(error instanceof Error ? error.message : 'Unable to upload records.')
    } finally {
      setIsUploadingRecords(false)
    }
  }

  useEffect(() => {
    setCurrentGranteePage(1)
  }, [searchQuery, selectedBatch])

  useEffect(() => {
    if (currentGranteePage > totalGranteePages) {
      setCurrentGranteePage(totalGranteePages)
    }
  }, [currentGranteePage, totalGranteePages])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollable =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      setScrollProgress(scrollable > 0 ? scrollTop / scrollable : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isAnyModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsQuickActionsOpen(false)
        setIsAddRecordOpen(false)
        setIsSchoolIdDownloadOpen(false)
        setSelectedUploadFile(null)
        setUploadMessage('')
        setIsUploadingRecords(false)
        setSelectedGranteeRecord(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isAnyModalOpen])

  return (
    <div className="admin-page">
      <style>{adminStyles}</style>

      <header className="admin-topbar">
        <div className="brand-lockup">
          <div className="brand-mark">
            <img alt="IBACMI" className="brand-mark__image" src={ibacmiLogo} />
          </div>

          <div className="brand-copy">
            <p className="brand-title">IBACMI</p>
            <p className="brand-subtitle">Scholarship Office</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="admin-button admin-button--ghost"
            onClick={() => {
              setCurrentLogPage(1)
              setIsLogsOpen(true)
            }}
            type="button"
          >
            <span className="material-symbols-outlined">history</span>
            Logs
          </button>

          <button className="admin-button admin-button--ghost" onClick={openQuickActions} type="button">
            <span className="material-symbols-outlined">task_alt</span>
            Quick Actions
          </button>

          <button className="admin-button admin-button--admin" onClick={onLogout} type="button">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-container">
          <section className="admin-heading">
            <div className="admin-heading__copy">
              <span className="admin-eyebrow">Grantee Management</span>
              <h1>Grantee Management</h1>
              <p>
                Manage TES grantee records, review student requests, upload CSV records, and monitor
                scholarship information in one responsive workspace.
              </p>
            </div>

            <div className="admin-heading__actions">
              <button
                className="admin-button admin-button--secondary"
                disabled={availableBatches.length === 0}
                onClick={() => setIsBatchExportOpen(true)}
                title={
                  availableBatches.length === 0
                    ? 'No batches available to export'
                    : 'Choose a batch to export student account info'
                }
                type="button"
              >
                <span className="material-symbols-outlined">table_view</span>
                Export to CSV Batch Info
              </button>

              <button
                className="admin-button admin-button--secondary"
                disabled={granteesWithSchoolIdFiles.length === 0}
                onClick={() => setIsSchoolIdDownloadOpen(true)}
                title={
                  granteesWithSchoolIdFiles.length === 0
                    ? 'No School ID files available to download'
                    : 'Choose a School Year to download School ID files'
                }
                type="button"
              >
                <span className="material-symbols-outlined">download</span>
                Download School ID File
              </button>

              <button
                className="admin-button admin-button--primary"
                onClick={openAddRecordModal}
                type="button"
              >
                <span className="material-symbols-outlined">add</span>
                Add New Record
              </button>
            </div>
          </section>

          <section className="admin-stats-grid" aria-label="Grantee summary">
            <div className="admin-stat-card">
              <span>Total Records</span>
              <strong>{granteeRows.length}</strong>
            </div>

            <div className="admin-stat-card">
              <span>Filtered Results</span>
              <strong>{filteredGranteeRows.length}</strong>
            </div>

            <div className="admin-stat-card">
              <span>Checked Records</span>
              <strong>{selectedGranteeIds.length}</strong>
            </div>

            <div className="admin-stat-card">
              <span>Student Requests</span>
              <strong>{quickActionRows.length}</strong>
            </div>
          </section>

          <section className="admin-filter-panel" aria-label="Grantee filters">
            <div className="admin-search-field">
              <span className="material-symbols-outlined">search</span>
              <input
                placeholder="Search by Student ID, award number, status, semester..."
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>

            <select value={selectedBatch} onChange={(event) => setSelectedBatch(event.target.value)}>
              <option value="">All Batches</option>
              {availableBatches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>

            <button
              className="admin-filter-button"
              type="button"
              aria-label="Reset filters"
              title="Reset filters"
              onClick={resetFilters}
            >
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </section>

          <section className="admin-table-card" aria-label="TDP grantee records">
            <div className="admin-table-header">
              <div>
                <h2>Grantee Records</h2>
                <p>Review, check, edit, or delete selected records.</p>
              </div>
            </div>

            <div className="admin-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>TES Award Number</th>
                    <th>Student ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>MI.</th>
                    <th>Batch No.</th>
                    <th>Status</th>
                    <th>Semester</th>
                    <th>School Year</th>
                    <th>School ID File</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {allInfoRecords === undefined && (
                    <tr>
                      <td className="admin-empty-state" colSpan={12}>
                        Loading grantee records...
                      </td>
                    </tr>
                  )}

                  {allInfoRecords?.length === 0 && (
                    <tr>
                      <td className="admin-empty-state" colSpan={12}>
                        No grantee records yet. Upload a CSV file to add records.
                      </td>
                    </tr>
                  )}

                  {allInfoRecords && allInfoRecords.length > 0 && filteredGranteeRows.length === 0 && (
                    <tr>
                      <td className="admin-empty-state" colSpan={12}>
                        No matching record found.
                      </td>
                    </tr>
                  )}

                  {currentGrantees.map((grantee, index) => (
                    <tr key={grantee._id}>
                      <td data-label="No.">{firstGranteeIndex + index + 1}</td>

                      <td className="admin-award-cell" data-label="TES Award Number">
                        {grantee.tesAwardNumber}
                      </td>

                      <td data-label="Student ID">{grantee.studentId}</td>

                      <td data-label="Last Name">{grantee.lastName || '—'}</td>

                      <td data-label="First Name">{grantee.firstName || '—'}</td>

                      <td data-label="MI.">{grantee.middleInitial || '—'}</td>

                      <td className="admin-batch-cell" data-label="Batch No.">
                        {grantee.batchId}
                      </td>

                      <td data-label="Status">
                        <AdminStatusBadge
                          status={grantee.status}
                          tone={getQuickActionStatusTone(grantee.status)}
                        />
                      </td>

                      <td data-label="Semester">{grantee.semester || '—'}</td>

                      <td data-label="School Year">{grantee.schoolYear || '—'}</td>

                      <td data-label="School ID File">
                        {grantee.frontIdUrl ? (
                          <a
                            className="admin-file-link"
                            href={grantee.frontIdUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View file
                          </a>
                        ) : (
                          <span className="admin-file-empty">No file</span>
                        )}
                      </td>

                      <td data-label="Actions">
                        <div className="admin-row-actions">
                          <button
                            className="admin-edit-button"
                            type="button"
                            onClick={() => handleEditGrantee(grantee)}
                          >
                            Edit
                          </button>

                          <label className="admin-checkbox-control">
                            <input
                              type="checkbox"
                              checked={selectedGranteeIds.includes(grantee._id)}
                              onChange={() => handleSelectGrantee(grantee._id)}
                            />
                            <span>Check</span>
                          </label>

                          <button
                            className="admin-delete-button"
                            type="button"
                            disabled={isDeletingRecords || !selectedGranteeIds.includes(grantee._id)}
                            onClick={handleDeleteCheckedGrantees}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination">
              <div>
                <p>
                  Showing <strong>{showingStart}</strong> to <strong>{showingEnd}</strong> of{' '}
                  <strong>{filteredGranteeRows.length}</strong> results
                </p>

                {deleteMessage && <p className="admin-delete-message">{deleteMessage}</p>}
              </div>

              <div className="admin-pagination__buttons">
                <button
                  type="button"
                  disabled={activeGranteePage === 1 || filteredGranteeRows.length === 0}
                  aria-label="Previous page"
                  onClick={() => goToGranteePage(activeGranteePage - 1)}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {Array.from({ length: totalGranteePages }, (_, index) => {
                  const pageNumber = index + 1

                  return (
                    <button
                      className={
                        activeGranteePage === pageNumber ? 'admin-page-button--active' : undefined
                      }
                      disabled={filteredGranteeRows.length === 0}
                      key={pageNumber}
                      onClick={() => goToGranteePage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  )
                })}

                <button
                  type="button"
                  disabled={
                    activeGranteePage === totalGranteePages || filteredGranteeRows.length === 0
                  }
                  aria-label="Next page"
                  onClick={() => goToGranteePage(activeGranteePage + 1)}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {isLogsOpen && (
        <div
          aria-labelledby="admin-logs-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close logs modal"
            className="admin-modal-backdrop"
            onClick={() => setIsLogsOpen(false)}
            type="button"
          />

          <section className="admin-modal-card admin-modal-card--wide">
            <div className="admin-modal-header">
              <div>
                <p className="admin-modal-kicker">Activity Logs</p>
                <h2 id="admin-logs-title">System Activity Records</h2>
                <p>Review recent uploads, edits, deletes, student updates, and page actions.</p>
              </div>

              <button
                aria-label="Close logs"
                className="admin-modal-close"
                onClick={() => setIsLogsOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-logs-table-wrap">
              <table className="admin-logs-table">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Action</th>
                    <th>Actor</th>
                    <th>Target</th>
                    <th>Summary</th>
                  </tr>
                </thead>

                <tbody>
                  {activityLogs === undefined && (
                    <tr>
                      <td className="admin-empty-state" colSpan={5}>
                        Loading activity logs...
                      </td>
                    </tr>
                  )}

                  {activityLogs && activityLogRows.length === 0 && (
                    <tr>
                      <td className="admin-empty-state" colSpan={5}>
                        No activity logs recorded yet.
                      </td>
                    </tr>
                  )}

                  {currentActivityLogs.map((log) => (
                    <tr key={log._id}>
                      <td data-label="Date & Time">{formatLogDate(log.createdAt)}</td>
                      <td data-label="Action">
                        <span className="admin-log-action">{log.action}</span>
                      </td>
                      <td data-label="Actor">
                        <strong>{log.actorName || log.actorId || log.actorRole}</strong>
                        <span>{log.actorRole}</span>
                      </td>
                      <td data-label="Target">
                        <strong>{log.targetLabel || log.targetType}</strong>
                        <span>{log.targetType}</span>
                      </td>
                      <td data-label="Summary">{log.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination admin-logs-pagination">
              <p>
                Showing <strong>{logShowingStart}</strong> to <strong>{logShowingEnd}</strong> of{' '}
                <strong>{activityLogRows.length}</strong> logs
              </p>

              <div className="admin-pagination__buttons">
                <button
                  type="button"
                  disabled={activeLogPage === 1 || activityLogRows.length === 0}
                  aria-label="Previous logs page"
                  onClick={() => goToLogPage(activeLogPage - 1)}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {Array.from({ length: totalLogPages }, (_, index) => {
                  const pageNumber = index + 1

                  return (
                    <button
                      className={
                        activeLogPage === pageNumber ? 'admin-page-button--active' : undefined
                      }
                      disabled={activityLogRows.length === 0}
                      key={pageNumber}
                      onClick={() => goToLogPage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  )
                })}

                <button
                  type="button"
                  disabled={activeLogPage === totalLogPages || activityLogRows.length === 0}
                  aria-label="Next logs page"
                  onClick={() => goToLogPage(activeLogPage + 1)}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {isBatchExportOpen && (
        <div
          aria-labelledby="admin-batch-export-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close batch export modal"
            className="admin-modal-backdrop"
            onClick={() => setIsBatchExportOpen(false)}
            type="button"
          />

          <section className="admin-modal-card">
            <div className="admin-modal-header">
              <div>
                <p className="admin-modal-kicker">Batch CSV Export</p>
                <h2 id="admin-batch-export-title">Choose Batch</h2>
                <p>Export student account information for a specific batch using allinfo Student IDs.</p>
              </div>

              <button
                aria-label="Close batch export"
                className="admin-modal-close"
                onClick={() => setIsBatchExportOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-school-year-downloads">
              {availableBatches.map((batchId) => {
                const batchRecords = granteeRows.filter((record) => {
                  return String(record.batchId ?? '').trim() === batchId
                })
                const batchStudentIds = new Set(
                  batchRecords.map((record) => String(record.studentId ?? '').trim().toLowerCase()),
                )
                const accountCount = studentAccountRows.filter((account) => {
                  return batchStudentIds.has(String(account.schoolId ?? '').trim().toLowerCase())
                }).length

                return (
                  <button
                    className="admin-school-year-button"
                    disabled={studentAccounts === undefined}
                    key={batchId}
                    onClick={() => exportBatchInfoCsv(batchId)}
                    type="button"
                  >
                    <span>{batchId}</span>
                    <strong>
                      {studentAccounts === undefined
                        ? 'Loading accounts...'
                        : `${batchRecords.length} records / ${accountCount} accounts`}
                    </strong>
                  </button>
                )
              })}
            </div>

            <div className="admin-upload-actions">
              <button
                className="admin-button admin-button--secondary"
                onClick={() => setIsBatchExportOpen(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      )}

      {isSchoolIdDownloadOpen && (
        <div
          aria-labelledby="admin-school-id-download-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close School ID download modal"
            className="admin-modal-backdrop"
            onClick={() => setIsSchoolIdDownloadOpen(false)}
            type="button"
          />

          <section className="admin-modal-card">
            <div className="admin-modal-header">
              <div>
                <p className="admin-modal-kicker">School ID Files</p>
                <h2 id="admin-school-id-download-title">Choose School Year</h2>
                <p>Download all uploaded School ID files for a specific School Year.</p>
              </div>

              <button
                aria-label="Close School ID download"
                className="admin-modal-close"
                disabled={isDownloadingSchoolIdFiles}
                onClick={() => setIsSchoolIdDownloadOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-school-year-downloads">
              {schoolIdFileYears.map((schoolYear) => {
                const fileCount = granteesWithSchoolIdFiles.filter((grantee) => {
                  return String(grantee.schoolYear ?? '').trim() === schoolYear
                }).length

                return (
                  <button
                    className="admin-school-year-button"
                    disabled={isDownloadingSchoolIdFiles}
                    key={schoolYear}
                    onClick={() => downloadSchoolIdFiles(schoolYear)}
                    type="button"
                  >
                    <span>{schoolYear}</span>
                    <strong>
                      {isDownloadingSchoolIdFiles
                        ? 'Preparing...'
                        : `${fileCount} ${fileCount === 1 ? 'file' : 'files'}`}
                    </strong>
                  </button>
                )
              })}
            </div>

            <div className="admin-upload-actions">
              <button
                className="admin-button admin-button--secondary"
                disabled={isDownloadingSchoolIdFiles}
                onClick={() => setIsSchoolIdDownloadOpen(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      )}

      {selectedGranteeRecord && (
        <div
          aria-labelledby="admin-edit-record-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close edit record modal"
            className="admin-modal-backdrop"
            onClick={closeEditModal}
            type="button"
          />

          <form className="admin-modal-card admin-modal-card--edit" onSubmit={handleSaveEdit}>
            <div className="admin-modal-header admin-modal-header--edit">
              <div>
                <p className="admin-modal-kicker">Edit Record</p>
                <h2 id="admin-edit-record-title">Edit Grantee Information</h2>
                <p>Update the selected grantee record details.</p>
              </div>

              <button
                aria-label="Close edit record"
                className="admin-modal-close"
                disabled={isSavingEdit}
                onClick={closeEditModal}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-edit-summary">
              <div className="admin-edit-summary__icon">
                <span className="material-symbols-outlined">person</span>
              </div>

              <div className="admin-edit-summary__text">
                <span>Selected Record</span>
                <strong>{selectedGranteeRecord.studentId || 'No Student ID'}</strong>
                <AdminStatusBadge
                  status={selectedGranteeRecord.status}
                  tone={getQuickActionStatusTone(selectedGranteeRecord.status)}
                />
              </div>
            </div>

            <div className="admin-record-details admin-record-details--responsive">
              <label>
                <span>No.</span>
                <input value={editGranteeForm?.no ?? ''} onChange={handleEditFieldChange('no')} />
              </label>

              <label>
                <span>TES Award Number</span>
                <input
                  value={editGranteeForm?.tesAwardNumber ?? ''}
                  onChange={handleEditFieldChange('tesAwardNumber')}
                />
              </label>

              <label>
                <span>Student ID</span>
                <input
                  value={editGranteeForm?.studentId ?? ''}
                  onChange={handleEditFieldChange('studentId')}
                />
              </label>

              <label>
                <span>Last Name</span>
                <input
                  value={editGranteeForm?.lastName ?? ''}
                  onChange={handleEditFieldChange('lastName')}
                />
              </label>

              <label>
                <span>First Name</span>
                <input
                  value={editGranteeForm?.firstName ?? ''}
                  onChange={handleEditFieldChange('firstName')}
                />
              </label>

              <label>
                <span>MI.</span>
                <input
                  value={editGranteeForm?.middleInitial ?? ''}
                  onChange={handleEditFieldChange('middleInitial')}
                />
              </label>

              <label>
                <span>Batch No.</span>
                <input
                  value={editGranteeForm?.batchId ?? ''}
                  onChange={handleEditFieldChange('batchId')}
                />
              </label>

              <label>
                <span>Status</span>
                <select
                  value={editGranteeForm?.status ?? ''}
                  onChange={handleEditFieldChange('status')}
                >
                  <option value="">Select Status</option>
                  <option>Grantee</option>
                  <option>Validated</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </label>

              <label>
                <span>Semester</span>
                <input
                  value={editGranteeForm?.semester ?? ''}
                  onChange={handleEditFieldChange('semester')}
                />
              </label>

              <label>
                <span>School Year</span>
                <input
                  value={editGranteeForm?.schoolYear ?? ''}
                  onChange={handleEditFieldChange('schoolYear')}
                />
              </label>
            </div>

            {editMessage && <p className="admin-edit-message">{editMessage}</p>}

            <div className="admin-upload-actions admin-upload-actions--sticky">
              <button
                className="admin-button admin-button--secondary"
                disabled={isSavingEdit}
                onClick={closeEditModal}
                type="button"
              >
                Cancel
              </button>

              <button className="admin-button admin-button--primary" disabled={isSavingEdit} type="submit">
                {isSavingEdit ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isAddRecordOpen && (
        <div
          aria-labelledby="admin-add-record-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close add record modal"
            className="admin-modal-backdrop"
            onClick={closeAddRecordModal}
            type="button"
          />

          <form className="admin-modal-card" onSubmit={handleUploadSubmit}>
            <div className="admin-modal-header">
              <div>
                <p className="admin-modal-kicker">Add New Record</p>
                <h2 id="admin-add-record-title">Upload CSV File</h2>
                <p>Use the required template format before uploading grantee records.</p>
              </div>

              <button
                aria-label="Close add record"
                className="admin-modal-close"
                disabled={isUploadingRecords}
                onClick={closeAddRecordModal}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-upload-body">
              <button
                className="admin-button admin-button--secondary"
                onClick={downloadGranteeTemplate}
                type="button"
              >
                <span className="material-symbols-outlined">download</span>
                Download CSV Template
              </button>

              <label className="admin-upload-dropzone">
                <span className="material-symbols-outlined">upload_file</span>
                <strong>{selectedUploadFile ? selectedUploadFile.name : 'Choose CSV file'}</strong>
                <span>Accepted format: downloaded CSV template</span>
                <input
                  accept=".csv,text/csv"
                  disabled={isUploadingRecords}
                  onChange={handleUploadFileChange}
                  type="file"
                />
              </label>

              <div className="admin-template-preview" aria-label="CSV template headers">
                {granteeTemplateHeaders.map((header) => (
                  <span key={header}>{header}</span>
                ))}
              </div>

              {uploadMessage && <p className="admin-upload-message">{uploadMessage}</p>}
            </div>

            <div className="admin-upload-actions">
              <button
                className="admin-button admin-button--secondary"
                disabled={isUploadingRecords}
                onClick={closeAddRecordModal}
                type="button"
              >
                Cancel
              </button>

              <button
                className="admin-button admin-button--primary"
                disabled={isUploadingRecords}
                type="submit"
              >
                <span className="material-symbols-outlined">upload</span>
                {isUploadingRecords ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isQuickActionsOpen && (
        <div
          aria-labelledby="admin-quick-actions-title"
          aria-modal="true"
          className="admin-modal-overlay"
          role="dialog"
        >
          <button
            aria-label="Close quick actions modal"
            className="admin-modal-backdrop"
            onClick={() => setIsQuickActionsOpen(false)}
            type="button"
          />

          <section className="admin-modal-card admin-modal-card--wide">
            <div className="admin-modal-header">
              <div>
                <p className="admin-modal-kicker">Quick Actions</p>
                <h2 id="admin-quick-actions-title">Student Requests</h2>
                <p>Review submitted questions and requests from the student portal.</p>
              </div>

              <button
                aria-label="Close quick actions"
                className="admin-modal-close"
                onClick={() => setIsQuickActionsOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="admin-quick-actions-summary">
              <div>
                <span>Total Requests</span>
                <strong>{quickActions?.length ?? 0}</strong>
              </div>

              <div>
                <span>Source</span>
                <strong>Student Portal</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>Live Data</strong>
              </div>
            </div>

            <div className="admin-quick-actions-table-wrap">
              <table className="admin-quick-actions-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Email Account</th>
                    <th>Question</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Submitted</th>
                  </tr>
                </thead>

                <tbody>
                  {quickActions === undefined && (
                    <tr>
                      <td className="admin-empty-state" colSpan={6}>
                        Loading quick actions...
                      </td>
                    </tr>
                  )}

                  {quickActions?.length === 0 && (
                    <tr>
                      <td className="admin-empty-state" colSpan={6}>
                        No quick action requests yet.
                      </td>
                    </tr>
                  )}

                  {currentQuickActions.map((request, index) => (
                    <tr key={request._id}>
                      <td data-label="No.">{firstQuickActionIndex + index + 1}</td>

                      <td className="admin-request-email" data-label="Email Account">
                        {request.email}
                      </td>

                      <td className="admin-request-question" data-label="Question">
                        {request.question}
                      </td>

                      <td data-label="Source">{request.source}</td>

                      <td data-label="Status">
                        <AdminStatusBadge
                          status={request.status}
                          tone={getQuickActionStatusTone(request.status)}
                        />
                      </td>

                      <td data-label="Submitted">{formatSubmittedAt(request.submittedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination admin-quick-actions-pagination">
              <p>
                Showing <strong>{quickActionShowingStart}</strong> to{' '}
                <strong>{quickActionShowingEnd}</strong> of{' '}
                <strong>{quickActionRows.length}</strong> requests
              </p>

              <div className="admin-pagination__buttons">
                <button
                  type="button"
                  disabled={activeQuickActionPage === 1 || quickActionRows.length === 0}
                  aria-label="Previous quick actions page"
                  onClick={() => goToQuickActionPage(activeQuickActionPage - 1)}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {Array.from({ length: totalQuickActionPages }, (_, index) => {
                  const pageNumber = index + 1

                  return (
                    <button
                      className={
                        activeQuickActionPage === pageNumber
                          ? 'admin-page-button--active'
                          : undefined
                      }
                      disabled={quickActionRows.length === 0}
                      key={pageNumber}
                      onClick={() => goToQuickActionPage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  )
                })}

                <button
                  type="button"
                  disabled={
                    activeQuickActionPage === totalQuickActionPages || quickActionRows.length === 0
                  }
                  aria-label="Next quick actions page"
                  onClick={() => goToQuickActionPage(activeQuickActionPage + 1)}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      <div className="admin-scroll-progress" style={{ '--admin-scroll': scrollProgress }} />
    </div>
  )
}

const adminStyles = `
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

.admin-page {
  --admin-background: #fcf9f8;
  --admin-surface: #ffffff;
  --admin-surface-low: #f7f2ef;
  --admin-surface-mid: #f0e7e1;
  --admin-text: #1c1917;
  --admin-muted: #665348;
  --admin-primary: #f97316;
  --admin-primary-dark: #9d4300;
  --admin-outline: #e7cfc2;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(249, 115, 22, 0.14), transparent 34rem),
    var(--admin-background);
  color: var(--admin-text);
  font-family: 'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.admin-page *,
.admin-page *::before,
.admin-page *::after {
  box-sizing: border-box;
}

.admin-page .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}

.admin-topbar {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid rgba(231, 207, 194, 0.88);
  background: rgba(255, 255, 255, 0.92);
  padding: 12px clamp(16px, 3vw, 32px);
  box-shadow: 0 8px 24px rgba(28, 25, 23, 0.06);
  backdrop-filter: blur(14px);
}

.brand-lockup {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(224, 192, 177, 0.9);
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(28, 25, 23, 0.08);
}

.brand-mark__image {
  width: 42px;
  height: 42px;
  object-fit: cover;
}

.brand-copy {
  min-width: 0;
  line-height: 1.1;
}

.brand-title,
.brand-subtitle {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.brand-title {
  color: var(--admin-text);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-subtitle {
  margin-top: 3px;
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 700;
}

.header-actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.admin-button,
.admin-filter-button,
.admin-pagination__buttons button {
  border: 0;
  cursor: pointer;
  font: inherit;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.admin-button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-button:hover {
  transform: translateY(-1px);
}

.admin-button--primary {
  background: var(--admin-primary);
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(249, 115, 22, 0.22);
}

.admin-button--primary:hover {
  background: #c2410c;
}

.admin-button--secondary,
.admin-button--ghost,
.admin-button--admin {
  border: 1px solid var(--admin-outline);
  background: #ffffff;
  color: var(--admin-text);
}

.admin-button--secondary:hover,
.admin-button--ghost:hover,
.admin-button--admin:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-button:disabled,
.admin-modal-close:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  transform: none;
}

.admin-main {
  min-height: calc(100vh - 72px);
  padding: clamp(24px, 4vw, 40px) clamp(14px, 3vw, 32px) 40px;
}

.admin-container {
  width: min(100%, 1440px);
  margin: 0 auto;
}

.admin-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 24px;
  margin-bottom: 24px;
}

.admin-heading__copy {
  display: grid;
  gap: 8px;
}

.admin-eyebrow {
  width: fit-content;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.12);
  color: var(--admin-primary-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 6px 10px;
  text-transform: uppercase;
}

.admin-heading h1,
.admin-heading p,
.admin-pagination p,
.admin-table-header h2,
.admin-table-header p {
  margin: 0;
}

.admin-heading h1 {
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 800;
  line-height: 1.05;
}

.admin-heading p {
  max-width: 700px;
  color: var(--admin-muted);
  font-size: 16px;
  line-height: 1.6;
}

.admin-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.admin-stat-card {
  display: grid;
  gap: 6px;
  border: 1px solid rgba(231, 207, 194, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  padding: 18px;
  box-shadow: 0 12px 28px rgba(28, 25, 23, 0.05);
}

.admin-stat-card span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-stat-card strong {
  color: var(--admin-text);
  font-size: 26px;
  font-weight: 800;
}

.admin-filter-panel {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) minmax(180px, 260px) 48px;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  border: 1px solid rgba(231, 207, 194, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  padding: 14px;
  box-shadow: 0 12px 28px rgba(28, 25, 23, 0.05);
}

.admin-search-field {
  position: relative;
  min-width: 0;
}

.admin-search-field .material-symbols-outlined {
  position: absolute;
  top: 50%;
  left: 14px;
  color: var(--admin-muted);
  transform: translateY(-50%);
}

.admin-search-field input,
.admin-filter-panel select {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-text);
  font: inherit;
  font-size: 14px;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.admin-search-field input {
  padding: 10px 14px 10px 46px;
}

.admin-filter-panel select {
  padding: 10px 14px;
}

.admin-search-field input:focus,
.admin-filter-panel select:focus {
  border-color: var(--admin-primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.16);
}

.admin-filter-button {
  display: inline-flex;
  width: 48px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: var(--admin-surface-low);
  color: var(--admin-muted);
}

.admin-filter-button:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-table-card {
  overflow: hidden;
  border: 1px solid rgba(231, 207, 194, 0.95);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 16px 38px rgba(28, 25, 23, 0.08);
}

.admin-table-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: linear-gradient(135deg, #ffffff, #fff7ed);
  padding: 18px 22px;
}

.admin-table-header h2 {
  font-size: 18px;
  font-weight: 800;
}

.admin-table-header p {
  margin-top: 4px;
  color: var(--admin-muted);
  font-size: 14px;
}

.admin-table-scroll {
  overflow-x: auto;
  overscroll-behavior-x: contain;
}

.admin-table-scroll::-webkit-scrollbar {
  height: 10px;
}

.admin-table-scroll::-webkit-scrollbar-track {
  background: var(--admin-surface-low);
}

.admin-table-scroll::-webkit-scrollbar-thumb {
  border: 2px solid var(--admin-surface-low);
  border-radius: 999px;
  background: rgba(102, 83, 72, 0.45);
}

.admin-table-card table {
  width: 100%;
  min-width: 1460px;
  border-collapse: collapse;
  text-align: left;
}

.admin-table-card thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-table-card tbody tr {
  border-bottom: 1px solid rgba(231, 207, 194, 0.75);
  transition: background-color 160ms ease;
}

.admin-table-card tbody tr:hover {
  background: #fffaf5;
}

.admin-table-card tbody tr:last-child {
  border-bottom: 0;
}

.admin-table-card th,
.admin-table-card td {
  padding: 16px 22px;
  color: var(--admin-muted);
  font-size: 14px;
  vertical-align: middle;
}

.admin-table-card th {
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-award-cell,
.admin-batch-cell {
  color: var(--admin-text);
  font-weight: 700;
}

.admin-award-cell {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.admin-file-link {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  border: 1px solid var(--admin-primary);
  border-radius: 12px;
  color: var(--admin-primary-dark);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease;
}

.admin-file-link:hover {
  background: #fff7ed;
  color: var(--admin-primary);
}

.admin-file-empty {
  color: var(--admin-muted);
  font-size: 13px;
  font-weight: 700;
}

.admin-status {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-status__dot {
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
}

.admin-status--grantee,
.admin-status--validated {
  background: #ecfdf5;
  color: #047857;
  box-shadow: inset 0 0 0 1px #a7f3d0;
}

.admin-status--grantee .admin-status__dot,
.admin-status--validated .admin-status__dot {
  background: #10b981;
}

.admin-status--applicant,
.admin-status--pending {
  background: #fff7ed;
  color: #c2410c;
  box-shadow: inset 0 0 0 1px #fed7aa;
}

.admin-status--applicant .admin-status__dot,
.admin-status--pending .admin-status__dot {
  background: #f97316;
}

.admin-status--rejected {
  background: #fef2f2;
  color: #b91c1c;
  box-shadow: inset 0 0 0 1px #fecaca;
}

.admin-status--rejected .admin-status__dot {
  background: #ef4444;
}

.admin-row-actions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: max-content;
}

.admin-edit-button,
.admin-delete-button {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  padding: 7px 12px;
  transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease;
}

.admin-edit-button {
  border: 1px solid var(--admin-primary);
  background: #ffffff;
  color: var(--admin-primary-dark);
}

.admin-edit-button:hover {
  background: rgba(249, 115, 22, 0.1);
}

.admin-delete-button {
  border: 1px solid #b91c1c;
  background: #ffffff;
  color: #b91c1c;
}

.admin-delete-button:hover:not(:disabled) {
  background: #fef2f2;
}

.admin-delete-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.admin-checkbox-control {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--admin-muted);
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-checkbox-control input {
  width: 16px;
  height: 16px;
  accent-color: var(--admin-primary);
  cursor: pointer;
}

.admin-delete-message {
  margin-top: 6px !important;
  color: var(--admin-primary-dark) !important;
  font-size: 13px !important;
  font-weight: 800;
}

.admin-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  padding: 16px 22px;
}

.admin-pagination p {
  color: var(--admin-muted);
  font-size: 14px;
}

.admin-pagination p strong {
  color: var(--admin-text);
  font-weight: 800;
}

.admin-pagination__buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
}

.admin-pagination__buttons button {
  display: inline-flex;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-muted);
  font-size: 14px;
  font-weight: 800;
}

.admin-pagination__buttons button:disabled {
  cursor: not-allowed;
  opacity: 0.35;
}

.admin-pagination__buttons .admin-page-button--active {
  border-color: var(--admin-primary);
  background: var(--admin-primary);
  color: #ffffff;
}

.admin-empty-state {
  height: 160px;
  color: var(--admin-muted);
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
}

.admin-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(28, 25, 23, 0.52);
  padding: 24px;
  backdrop-filter: blur(8px);
}

.admin-modal-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  cursor: default;
}

.admin-modal-card {
  position: relative;
  width: min(100%, 720px);
  max-height: min(760px, calc(100vh - 48px));
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(28, 25, 23, 0.25);
}

.admin-modal-card--edit {
  display: flex;
  width: min(100%, 860px);
  max-height: calc(100vh - 48px);
  flex-direction: column;
}

.admin-modal-card--wide {
  width: min(100%, 1120px);
}

.admin-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--admin-outline);
  background: linear-gradient(135deg, #ffffff, #fff7ed);
  padding: 22px 24px;
}

.admin-modal-kicker,
.admin-modal-header h2,
.admin-modal-header p {
  margin: 0;
}

.admin-modal-kicker {
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.admin-modal-header h2 {
  margin-top: 4px;
  color: var(--admin-text);
  font-size: 24px;
  font-weight: 800;
  line-height: 1.15;
}

.admin-modal-header p {
  margin-top: 8px;
  color: var(--admin-muted);
  font-size: 14px;
  line-height: 1.55;
}

.admin-modal-close {
  display: inline-flex;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-muted);
  cursor: pointer;
}

.admin-modal-close:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-school-year-downloads {
  display: grid;
  gap: 12px;
  padding: 22px 24px;
}

.admin-school-year-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 58px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #ffffff;
  color: var(--admin-text);
  cursor: pointer;
  font: inherit;
  padding: 0 16px;
  text-align: left;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.admin-school-year-button:hover {
  border-color: var(--admin-primary);
  background: #fff7ed;
  transform: translateY(-1px);
}

.admin-school-year-button:disabled {
  cursor: wait;
  opacity: 0.7;
  transform: none;
}

.admin-school-year-button:disabled:hover {
  border-color: var(--admin-outline);
  background: #ffffff;
}

.admin-school-year-button span {
  font-size: 16px;
  font-weight: 800;
}

.admin-school-year-button strong {
  color: var(--admin-primary-dark);
  font-size: 13px;
  font-weight: 800;
}

.admin-edit-summary {
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 18px 24px;
}

.admin-edit-summary__icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 999px;
  background: #ffffff;
  color: var(--admin-primary-dark);
}

.admin-edit-summary__icon .material-symbols-outlined {
  font-size: 30px;
}

.admin-edit-summary__text {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.admin-edit-summary__text span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-edit-summary__text strong {
  color: var(--admin-text);
  font-size: 18px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-record-details {
  display: grid;
  gap: 12px;
  padding: 24px;
}

.admin-record-details--responsive {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-height: min(50vh, 420px);
  overflow-y: auto;
}

.admin-record-details div,
.admin-record-details label {
  display: grid;
  gap: 4px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: var(--admin-surface-low);
  padding: 14px;
}

.admin-record-details span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-record-details strong {
  color: var(--admin-text);
  font-size: 15px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-record-details input,
.admin-record-details select {
  width: 100%;
  min-height: 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #ffffff;
  color: var(--admin-text);
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  padding: 8px 10px;
}

.admin-record-details input:focus,
.admin-record-details select:focus {
  border-color: var(--admin-primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.14);
}

.admin-edit-message {
  margin: 0;
  padding: 0 24px 18px;
  color: var(--admin-primary-dark);
  font-size: 14px;
  font-weight: 800;
}

.admin-upload-body {
  display: grid;
  gap: 18px;
  padding: 24px;
}

.admin-upload-dropzone {
  position: relative;
  display: grid;
  min-height: 170px;
  place-items: center;
  gap: 8px;
  border: 1px dashed var(--admin-outline);
  border-radius: 16px;
  background: var(--admin-surface-low);
  color: var(--admin-muted);
  cursor: pointer;
  padding: 28px;
  text-align: center;
}

.admin-upload-dropzone:hover {
  border-color: var(--admin-primary);
  background: #fffaf5;
  color: var(--admin-primary-dark);
}

.admin-upload-dropzone .material-symbols-outlined {
  color: var(--admin-primary);
  font-size: 38px;
}

.admin-upload-dropzone strong {
  color: var(--admin-text);
  font-size: 16px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-upload-dropzone span:last-child {
  font-size: 13px;
  font-weight: 700;
}

.admin-upload-dropzone input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.admin-template-preview {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
}

.admin-template-preview span {
  min-width: 0;
  border-right: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  overflow-wrap: anywhere;
  padding: 12px;
}

.admin-template-preview span:last-child {
  border-right: 0;
}

.admin-upload-message {
  margin: 0;
  color: var(--admin-muted);
  font-size: 14px;
  font-weight: 700;
}

.admin-upload-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  padding: 16px 24px;
}

.admin-quick-actions-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-outline);
}

.admin-quick-actions-summary div {
  display: grid;
  gap: 4px;
  background: #ffffff;
  padding: 16px 20px;
}

.admin-quick-actions-summary span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-quick-actions-summary strong {
  color: var(--admin-text);
  font-size: 18px;
  font-weight: 800;
}

.admin-quick-actions-table-wrap {
  max-height: calc(100vh - 290px);
  overflow: auto;
  background: #ffffff;
}

.admin-logs-table-wrap {
  max-height: calc(100vh - 240px);
  overflow: auto;
  background: #ffffff;
}

.admin-quick-actions-table {
  width: 100%;
  min-width: 920px;
  border-collapse: collapse;
  text-align: left;
}

.admin-logs-table {
  width: 100%;
  min-width: 980px;
  border-collapse: collapse;
  text-align: left;
}

.admin-quick-actions-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.admin-logs-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.admin-quick-actions-table thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-logs-table thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-quick-actions-table tbody tr {
  border-bottom: 1px solid var(--admin-outline);
}

.admin-logs-table tbody tr {
  border-bottom: 1px solid var(--admin-outline);
}

.admin-quick-actions-table tbody tr:hover {
  background: #fffaf5;
}

.admin-logs-table tbody tr:hover {
  background: #fffaf5;
}

.admin-quick-actions-table th,
.admin-quick-actions-table td,
.admin-logs-table th,
.admin-logs-table td {
  padding: 15px 18px;
  color: var(--admin-muted);
  font-size: 14px;
  vertical-align: top;
}

.admin-quick-actions-table th,
.admin-logs-table th {
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-logs-table td strong,
.admin-logs-table td span {
  display: block;
}

.admin-logs-table td strong {
  color: var(--admin-text);
  font-weight: 800;
}

.admin-log-action {
  width: fit-content;
  border-radius: 999px;
  background: #fff7ed;
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 800;
  padding: 4px 9px;
}

.admin-request-email {
  color: var(--admin-text);
  font-weight: 800;
  white-space: nowrap;
}

.admin-request-question {
  max-width: 360px;
  color: var(--admin-text);
  line-height: 1.45;
}

.admin-scroll-progress {
  position: fixed;
  inset: 0 0 auto;
  z-index: 80;
  height: 3px;
  background: var(--admin-primary);
  transform: scaleX(var(--admin-scroll));
  transform-origin: left;
  transition: transform 75ms ease;
}

@media (max-width: 980px) {
  .admin-topbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .header-actions {
    margin-left: 0;
  }

  .admin-heading {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .admin-heading__actions {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-filter-panel {
    grid-template-columns: 1fr;
  }

  .admin-filter-button {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .admin-topbar {
    align-items: stretch;
    flex-direction: column;
    position: relative;
    min-height: 0;
    padding: 12px;
  }

  .brand-lockup,
  .brand-copy {
    min-width: 0;
  }

  .brand-title,
  .brand-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-actions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    margin-left: 0;
  }

  .header-actions .admin-button {
    width: 100%;
    min-height: 40px;
    padding: 9px 10px;
    font-size: 12px;
  }

  .admin-main {
    padding: 18px 12px 28px;
  }

  .admin-heading h1 {
    font-size: 30px;
  }

  .admin-heading p {
    font-size: 14px;
  }

  .admin-heading__actions,
  .admin-heading__actions .admin-button {
    width: 100%;
  }

  .admin-heading__actions {
    grid-template-columns: 1fr;
  }

  .admin-stats-grid {
    grid-template-columns: 1fr;
  }

  .admin-filter-panel {
    padding: 12px;
  }

  .admin-table-card {
    border-radius: 18px;
  }

  .admin-table-scroll {
    overflow: visible;
  }

  .admin-table-card table {
    min-width: 0;
    border-collapse: separate;
    border-spacing: 0 12px;
  }

  .admin-table-card thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .admin-table-card tbody {
    display: grid;
    gap: 12px;
    padding: 12px;
  }

  .admin-table-card tbody tr,
  .admin-table-card tbody tr:hover {
    display: grid;
    gap: 12px;
    border: 1px solid var(--admin-outline);
    border-radius: 16px;
    background: #ffffff;
    padding: 14px;
  }

  .admin-table-card th,
  .admin-table-card td {
    display: grid;
    grid-template-columns: minmax(126px, 42%) minmax(0, 1fr);
    align-items: center;
    gap: 12px;
    padding: 0;
    color: var(--admin-text);
    font-size: 13px;
  }

  .admin-table-card td::before {
    content: attr(data-label);
    color: var(--admin-muted);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .admin-status,
  .admin-row-actions {
    justify-self: end;
  }

  .admin-row-actions {
    flex-wrap: wrap;
    justify-content: flex-end;
    min-width: 0;
  }

  .admin-edit-button,
  .admin-delete-button,
  .admin-checkbox-control {
    min-height: 40px;
  }

  .admin-pagination {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px;
  }

  .admin-pagination__buttons {
    width: 100%;
    gap: 6px;
  }

  .admin-pagination__buttons button {
    width: 36px;
    height: 36px;
  }

  .admin-modal-overlay {
    align-items: flex-end;
    padding: 10px;
  }

  .admin-modal-card {
    width: 100%;
    max-height: calc(100vh - 20px);
    overflow-y: auto;
    border-radius: 18px 18px 10px 10px;
  }

  .admin-modal-header {
    gap: 16px;
    padding: 18px;
  }

  .admin-modal-header h2 {
    font-size: 22px;
  }

  .admin-school-year-downloads {
    padding: 18px;
  }

  .admin-school-year-button {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 14px;
  }

  .admin-edit-summary {
    align-items: flex-start;
    padding: 16px 18px;
  }

  .admin-record-details {
    padding: 18px;
  }

  .admin-record-details--responsive {
    grid-template-columns: 1fr;
    max-height: none;
    overflow: visible;
  }

  .admin-upload-actions {
    position: sticky;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr;
    padding: 14px 18px;
  }

  .admin-upload-actions .admin-button {
    width: 100%;
  }

  .admin-template-preview {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-quick-actions-summary {
    grid-template-columns: 1fr;
  }

  .admin-quick-actions-table-wrap,
  .admin-logs-table-wrap {
    max-height: none;
    overflow: visible;
    padding: 12px;
  }

  .admin-quick-actions-table,
  .admin-logs-table {
    min-width: 0;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .admin-quick-actions-table thead,
  .admin-logs-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .admin-quick-actions-table tbody,
  .admin-logs-table tbody {
    display: grid;
    gap: 10px;
  }

  .admin-quick-actions-table tbody tr,
  .admin-logs-table tbody tr {
    display: grid;
    gap: 10px;
    border: 1px solid var(--admin-outline);
    border-radius: 16px;
    background: #ffffff;
    padding: 14px;
  }

  .admin-quick-actions-table th,
  .admin-quick-actions-table td,
  .admin-logs-table th,
  .admin-logs-table td {
    display: grid;
    grid-template-columns: minmax(112px, 42%) 1fr;
    align-items: start;
    gap: 12px;
    padding: 0;
    color: var(--admin-text);
    font-size: 13px;
  }

  .admin-quick-actions-table td::before,
  .admin-logs-table td::before {
    content: attr(data-label);
    color: var(--admin-muted);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .admin-quick-actions-table .admin-empty-state,
  .admin-logs-table .admin-empty-state {
    display: block;
    height: auto;
    padding: 28px 14px;
  }

  .admin-quick-actions-table .admin-empty-state::before,
  .admin-logs-table .admin-empty-state::before {
    content: none;
  }

  .admin-request-email,
  .admin-request-question {
    max-width: none;
    overflow-wrap: anywhere;
    white-space: normal;
  }
}

@media (max-width: 420px) {
  .admin-page {
    min-width: 0;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
  }

  .brand-mark__image {
    width: 36px;
    height: 36px;
  }

  .brand-title {
    font-size: 13px;
  }
a
  .brand-subtitle {
    font-size: 11px;
  }

  .admin-table-card th,
  .admin-table-card td,
  .admin-quick-actions-table th,
  .admin-quick-actions-table td,
  .admin-logs-table th,
  .admin-logs-table td {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .admin-status,
  .admin-row-actions {
    justify-self: start;
  }

  .admin-row-actions {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
  }

  .admin-row-actions > button,
  .admin-row-actions .admin-checkbox-control {
    width: 100%;
    justify-content: center;
  }

  .admin-modal-overlay {
    padding: 6px;
  }

  .admin-modal-card {
    max-height: calc(100vh - 12px);
  }
}
`

export default Admin
