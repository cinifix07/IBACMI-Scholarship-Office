import { internal } from './_generated/api'
import { action, internalMutation, internalQuery, mutation, query } from './_generated/server'
import { v } from 'convex/values'
import { archiveRecord } from './archiveHelpers'

async function logActivity(ctx, log) {
  await ctx.db.insert('activityLogs', {
    actorRole: 'system',
    ...log,
    createdAt: Date.now(),
  })
}

const PORTAL_SETTINGS_KEY = 'unifast-applicants'
const APPLICANT_PDF_MAX_SIZE = 10 * 1024 * 1024
const TES_PROGRAM_OPTIONS = [
  'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
  'BACHELOR OF SCIENCE IN ENTREPRENEURSHIP',
  'BACHELOR OF SCIENCE IN CRIMINOLOGY',
  'BACHELOR OF ELEMENTARY EDUCATION',
  'BACHELOR OF EARLY CHILDHOOD EDUCATION',
  'BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT',
  'BACHELOR OF PUBLIC ADMINISTRATION',
]
const TES_PROGRAMS = new Set(TES_PROGRAM_OPTIONS)

async function requireAdminSession(ctx, token) {
  if (!token || token.length > 100) throw new Error('Please sign in again to continue.')
  const session = await ctx.db.query('supportSessions').withIndex('by_token', (q) => q.eq('token', token)).first()
  if (!session || session.role !== 'admin' || session.expiresAt < Date.now()) throw new Error('Your administrator session is invalid or expired.')
  const admin = await ctx.db.get(session.adminId)
  if (!admin || admin.status !== 'active' || admin.role !== 'admin') throw new Error('Your administrator account is no longer active.')
  return admin
}

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value && value <= new Date().toISOString().slice(0, 10)
}

async function validateStoredPdf(ctx, storageId, required) {
  if (!storageId) {
    if (required) throw new Error('PSA Birth Certificate and School ID PDF are required.')
    return
  }
  const file = await ctx.storage.get(storageId)
  if (!file || !file.size || file.size > APPLICANT_PDF_MAX_SIZE) throw new Error('Each PDF must be between 1 byte and 10 MB.')
  const header = new Uint8Array(await file.slice(0, 5).arrayBuffer())
  if (String.fromCharCode(...header) !== '%PDF-') throw new Error('Uploaded documents must contain a valid PDF file signature.')
}
async function getPortalSettings(ctx) {
  return await ctx.db
    .query('applicantPortalSettings')
    .withIndex('by_key', (queryBuilder) => queryBuilder.eq('key', PORTAL_SETTINGS_KEY))
    .first()
}

function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[\s-]/g, '').trim()
}

function isValidEmailAddress(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

function isValidSchoolId(studentId) {
  return /^[A-Za-z0-9-]{4,30}$/.test(studentId)
}

function getGoogleDriveFileId(fileUrl) {
  const value = String(fileUrl ?? '')
  const pathMatch = value.match(/\/file\/d\/([^/?#]+)/i)
  if (pathMatch) return pathMatch[1]

  try {
    return new URL(value).searchParams.get('id')
  } catch {
    return null
  }
}

function trimApplicant(args) {
  return {
    studentId: String(args.studentId ?? '').trim(),
    lastName: String(args.lastName ?? '').trim(),
    firstName: String(args.firstName ?? '').trim(),
    extensionName: String(args.extensionName ?? '').trim(),
    middleName: String(args.middleName ?? '').trim(),
    gender: String(args.gender ?? '').trim(),
    birthDate: String(args.birthDate ?? '').trim(),
    course: String(args.course ?? '').trim(),
    year: String(args.year ?? '').trim(),
    fatherLastName: String(args.fatherLastName ?? '').trim(),
    fatherFirstName: String(args.fatherFirstName ?? '').trim(),
    fatherMiddleName: String(args.fatherMiddleName ?? '').trim(),
    motherLastName: String(args.motherLastName ?? '').trim(),
    motherFirstName: String(args.motherFirstName ?? '').trim(),
    motherMiddleName: String(args.motherMiddleName ?? '').trim(),
    address: String(args.address ?? '').trim(),
    zipCode: String(args.zipCode ?? '').trim(),
    pwdId: String(args.pwdId ?? '').trim(),
    mobileNumber: normalizePhoneNumber(String(args.mobileNumber ?? '')),
    emailAddress: String(args.emailAddress ?? '').trim().toLowerCase(),
    psaFileName: String(args.psaFileName ?? '').trim(),
    schoolIdFileName: String(args.schoolIdFileName ?? '').trim(),
    corFileName: String(args.corFileName ?? '').trim(),
    pwdIdFileName: args.pwdIdFileName?.trim() ?? '',
    fourPsFileName: args.fourPsFileName?.trim() ?? '',
  }
}

function addOptionalField(record, fieldName, value) {
  if (value) {
    record[fieldName] = value
  }
}

function createApplicantFormDataJson(applicant, applicationYear) {
  const student = {
    studentId: applicant.studentId,
    lastName: applicant.lastName,
    firstName: applicant.firstName,
    gender: applicant.gender,
    birthDate: applicant.birthDate,
    course: applicant.course,
    year: applicant.year,
  }
  const father = {}
  const mother = {}
  const contact = {
    address: applicant.address,
    mobileNumber: applicant.mobileNumber,
    emailAddress: applicant.emailAddress,
  }

  addOptionalField(student, 'extensionName', applicant.extensionName)
  addOptionalField(student, 'middleName', applicant.middleName)
  addOptionalField(student, 'sexCode', applicant.sexCode)
  addOptionalField(student, 'yearLevelCode', applicant.yearLevelCode)
  addOptionalField(student, 'lrn', applicant.lrn)
  addOptionalField(student, 'philSysIdNumber', applicant.philSysIdNumber)
  addOptionalField(student, 'fourPsIdNumber', applicant.fourPsIdNumber)
  addOptionalField(contact, 'streetBarangay', applicant.streetBarangay)
  addOptionalField(contact, 'cityMunicipality', applicant.cityMunicipality)
  addOptionalField(contact, 'province', applicant.province)
  addOptionalField(contact, 'region', applicant.region)
  addOptionalField(father, 'lastName', applicant.fatherLastName)
  addOptionalField(father, 'firstName', applicant.fatherFirstName)
  addOptionalField(father, 'middleName', applicant.fatherMiddleName)
  addOptionalField(mother, 'lastName', applicant.motherLastName)
  addOptionalField(mother, 'firstName', applicant.motherFirstName)
  addOptionalField(mother, 'middleName', applicant.motherMiddleName)
  addOptionalField(contact, 'zipCode', applicant.zipCode)
  addOptionalField(contact, 'pwdId', applicant.pwdId)

  const documents = {}

  if (applicant.psaFileName) {
    documents.psa = {
      fileName: applicant.psaFileName,
    }
  }

  if (applicant.schoolIdFileName) {
    documents.schoolId = {
      fileName: applicant.schoolIdFileName,
    }
  }

  if (applicant.corFileName) {
    documents.cor = {
      fileName: applicant.corFileName,
    }
  }

  if (applicant.pwdIdFileName) {
    documents.pwdId = {
      fileName: applicant.pwdIdFileName,
    }
  }

  if (applicant.fourPsFileName) {
    documents.fourPs = {
      fileName: applicant.fourPsFileName,
    }
  }

  return {
    applicationYear,
    student,
    parents: {
      fatherInformationUnavailable: applicant.fatherInformationUnavailable,
      motherInformationUnavailable: applicant.motherInformationUnavailable,
      father,
      mother,
    },
    contact,
    additional: {
      hasDisability: applicant.hasDisability,
      ...(applicant.disabilityType ? { disabilityType: applicant.disabilityType } : {}),
      soloParentDependent: applicant.soloParentDependent,
      firstGeneration: applicant.firstGeneration,
      isIndigenous: applicant.isIndigenous,
      ...(applicant.indigenousGroup ? { indigenousGroup: applicant.indigenousGroup } : {}),
      applicantClassification: applicant.applicantClassification,
    },
    documents,
  }
}

export const list = query({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    await requireAdminSession(ctx, args.sessionToken)
    const applicants = await ctx.db.query('applicants').collect()
    const sortedApplicants = applicants.sort((firstApplicant, secondApplicant) => {
      return secondApplicant.submittedAt - firstApplicant.submittedAt
    })
    return await Promise.all(sortedApplicants.map(async (applicant) => ({
      ...applicant,
      psaFileUrl: applicant.psaFileUrl ?? (applicant.psaFileStorageId ? await ctx.storage.getUrl(applicant.psaFileStorageId) : null),
      schoolIdFileUrl: applicant.schoolIdFileUrl ?? (applicant.schoolIdFileStorageId ? await ctx.storage.getUrl(applicant.schoolIdFileStorageId) : null),
      corFileUrl: applicant.corFileUrl ?? (applicant.corFileStorageId ? await ctx.storage.getUrl(applicant.corFileStorageId) : null),
      pwdIdFileUrl: applicant.pwdIdFileUrl ?? (applicant.pwdIdFileStorageId ? await ctx.storage.getUrl(applicant.pwdIdFileStorageId) : null),
      fourPsFileUrl: applicant.fourPsFileUrl ?? (applicant.fourPsFileStorageId ? await ctx.storage.getUrl(applicant.fourPsFileStorageId) : null),
    })))
  },
})

function getApplicantYearForExport(applicant) {
  const applicationYear = String(applicant.applicationYear ?? '').trim()
  if (applicationYear) return applicationYear
  return applicant.submittedAt ? String(new Date(applicant.submittedAt).getFullYear()) : ''
}

function getApplicantCourseForExport(applicant) {
  return String(applicant.course ?? applicant.program ?? applicant.degreeProgram ?? '').trim()
}

function getApplicantExportCourseMap(courses) {
  const selected = new Set(courses.map((course) => String(course ?? '').trim().toLowerCase()))
  const canonicalCourses = TES_PROGRAM_OPTIONS.filter((course) => selected.has(course.toLowerCase()))
  if (!canonicalCourses.length || canonicalCourses.length !== selected.size || courses.length !== selected.size) {
    throw new Error('Choose one or more valid TES courses to export.')
  }
  return new Map(canonicalCourses.map((course) => [course.toLowerCase(), course]))
}

export const getCourseCounts = query({
  args: { sessionToken: v.string(), applicationYear: v.string() },
  handler: async (ctx, args) => {
    await requireAdminSession(ctx, args.sessionToken)
    const applicationYear = args.applicationYear.trim()
    if (!/^\d{4}$/.test(applicationYear)) throw new Error('Choose a valid application year.')
    const counts = Object.fromEntries(TES_PROGRAM_OPTIONS.map((course) => [course, 0]))
    const applicants = await ctx.db.query('applicants').collect()
    for (const applicant of applicants) {
      const course = getApplicantCourseForExport(applicant)
      const canonicalCourse = TES_PROGRAM_OPTIONS.find((option) => option.toLowerCase() === course.toLowerCase())
      if (getApplicantYearForExport(applicant) === applicationYear && canonicalCourse) counts[canonicalCourse] += 1
    }
    return {
      counts,
      totalCount: Object.values(counts).reduce((total, count) => total + count, 0),
    }
  },
})

export const exportApplicantRows = internalQuery({
  args: {
    sessionToken: v.string(),
    applicationYear: v.string(),
    courses: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdminSession(ctx, args.sessionToken)
    const applicationYear = args.applicationYear.trim()
    if (!/^\d{4}$/.test(applicationYear)) throw new Error('Choose a valid application year.')
    if (!Array.isArray(args.courses) || args.courses.length > TES_PROGRAM_OPTIONS.length) {
      throw new Error('Choose valid courses to export.')
    }
    const courseMap = getApplicantExportCourseMap(args.courses)
    const applicants = await ctx.db.query('applicants').collect()
    return applicants
      .filter((applicant) => {
        return getApplicantYearForExport(applicant) === applicationYear &&
          courseMap.has(getApplicantCourseForExport(applicant).toLowerCase())
      })
      .sort((first, second) => second.submittedAt - first.submittedAt)
      .map((applicant) => ({
        applicationYear: getApplicantYearForExport(applicant),
        course: getApplicantCourseForExport(applicant),
        studentId: applicant.studentId,
        lrn: applicant.lrn,
        philSysIdNumber: applicant.philSysIdNumber,
        fourPsIdNumber: applicant.fourPsIdNumber,
        lastName: applicant.lastName,
        firstName: applicant.firstName,
        extensionName: applicant.extensionName,
        middleName: applicant.middleName,
        gender: applicant.gender,
        sexCode: applicant.sexCode,
        birthDate: applicant.birthDate,
        year: applicant.year,
        yearLevelCode: applicant.yearLevelCode,
        fatherLastName: applicant.fatherLastName,
        fatherFirstName: applicant.fatherFirstName,
        fatherMiddleName: applicant.fatherMiddleName,
        motherLastName: applicant.motherLastName,
        motherFirstName: applicant.motherFirstName,
        motherMiddleName: applicant.motherMiddleName,
        address: applicant.address,
        streetBarangay: applicant.streetBarangay,
        cityMunicipality: applicant.cityMunicipality,
        province: applicant.province,
        region: applicant.region,
        zipCode: applicant.zipCode,
        pwdId: applicant.pwdId,
        hasDisability: applicant.hasDisability,
        disabilityType: applicant.disabilityType,
        soloParentDependent: applicant.soloParentDependent,
        firstGeneration: applicant.firstGeneration,
        isIndigenous: applicant.isIndigenous,
        indigenousGroup: applicant.indigenousGroup,
        applicantClassification: applicant.applicantClassification,
        pwdIdFileName: applicant.pwdIdFileName,
        fourPsFileName: applicant.fourPsFileName,
        corFileName: applicant.corFileName,
        mobileNumber: applicant.mobileNumber,
        emailAddress: applicant.emailAddress,
        status: applicant.status,
        submittedAt: applicant.submittedAt,
      }))
  },
})

export const exportCourseApplicants = action({
  args: {
    sessionToken: v.string(),
    applicationYear: v.string(),
    courses: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.runQuery(internal.applicants.exportApplicantRows, args)
  },
})

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const portalSettings = await getPortalSettings(ctx)
    if (!portalSettings?.isReceivingApplicants) throw new Error('The UNIFAST portal is closed for applicants right now.')
    return await ctx.storage.generateUploadUrl()
  },
})

export const listCourseDeletionCandidates = internalQuery({
  args: {
    applicationYear: v.string(),
    course: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('applicants')
      .withIndex('by_application_year_course', (queryBuilder) =>
        queryBuilder.eq('applicationYear', args.applicationYear).eq('course', args.course),
      )
      .collect()
  },
})

export const deleteCourseApplicants = internalMutation({
  args: {
    ids: v.array(v.id('applicants')),
    applicationYear: v.string(),
    course: v.string(),
  },
  handler: async (ctx, args) => {
    for (const id of args.ids) {
      const applicant = await ctx.db.get(id)
      if (!applicant) continue

      await archiveRecord(ctx, {
        record: applicant,
        sourceLabel: `${applicant.studentId} / ${applicant.firstName} ${applicant.lastName}`,
        sourceTable: 'applicants',
      })
      await ctx.db.delete(applicant._id)
    }

    await logActivity(ctx, {
      action: 'course_applicants_deleted',
      actorRole: 'admin',
      targetType: 'applicants',
      targetLabel: `${args.applicationYear} / ${args.course}`,
      summary: `Deleted ${args.ids.length} applicant record${args.ids.length === 1 ? '' : 's'} and associated Drive files for ${args.course}, application year ${args.applicationYear}.`,
    })

    return args.ids.length
  },
})

export const deleteAllByCourse = action({
  args: {
    applicationYear: v.string(),
    course: v.string(),
  },
  handler: async (ctx, args) => {
    const applicants = await ctx.runQuery(internal.applicants.listCourseDeletionCandidates, {
      applicationYear: args.applicationYear.trim(),
      course: args.course.trim(),
    })

    if (applicants.length === 0) return { deleted: 0, filesDeleted: 0 }

    const fileIds = applicants.flatMap((applicant) => {
      return [
        applicant.psaFileUrl,
        applicant.schoolIdFileUrl,
        applicant.corFileUrl,
        applicant.pwdIdFileUrl,
        applicant.fourPsFileUrl,
      ]
        .map(getGoogleDriveFileId)
        .filter(Boolean)
    })

    const deleted = await ctx.runMutation(internal.applicants.deleteCourseApplicants, {
      applicationYear: args.applicationYear.trim(),
      course: args.course.trim(),
      ids: applicants.map((applicant) => applicant._id),
    })

    return { deleted, filesDeleted: fileIds.length }
  },
})

function sanitizeFilePart(value, fallback) {
  const sanitized = String(value ?? '')
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return sanitized || fallback
}

function bytesToBase64(bytes) {
  const chunkSize = 0x8000
  let binary = ''

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, Math.min(offset + chunkSize, bytes.length))
    binary += String.fromCharCode(...chunk)
  }

  return btoa(binary)
}

async function uploadMigratedApplicantPdf(appsScriptUrl, uploadSecret, file) {
  const initialResponse = await fetch(appsScriptUrl, {
    body: JSON.stringify({
      contentType: 'application/pdf',
      destination: 'applicants',
      fileBase64: bytesToBase64(file.bytes),
      fileName: file.fileName,
      secret: uploadSecret,
    }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    method: 'POST',
    redirect: 'manual',
  })
  let googleResponse = initialResponse

  if (initialResponse.status >= 300 && initialResponse.status < 400) {
    const redirectUrl = initialResponse.headers.get('location')
    if (!redirectUrl) throw new Error('Google Apps Script redirect is missing.')
    googleResponse = await fetch(redirectUrl, { method: 'GET', redirect: 'follow' })
  }

  const googleResult = await googleResponse.json().catch(() => null)
  if (!googleResponse.ok || !googleResult?.success || !googleResult?.fileUrl) {
    throw new Error(googleResult?.message || 'Google Drive rejected the applicant PDF.')
  }

  return googleResult.fileUrl
}

export const listFileMigrationCandidates = internalQuery({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    const applicants = await ctx.db.query('applicants').collect()
    const candidates = []

    for (const applicant of applicants) {
      const files = [
        ['psa', applicant.psaFileStorageId],
        ['schoolId', applicant.schoolIdFileStorageId],
        ['cor', applicant.corFileStorageId],
        ['pwdId', applicant.pwdIdFileStorageId],
        ['fourPs', applicant.fourPsFileStorageId],
      ]

      for (const [documentType, storageId] of files) {
        if (!storageId) continue
        candidates.push({
          applicantId: applicant._id,
          applicationYear: applicant.applicationYear,
          documentType,
          firstName: applicant.firstName,
          lastName: applicant.lastName,
          middleName: applicant.middleName,
          storageId,
          storageUrl: await ctx.storage.getUrl(storageId),
          studentId: applicant.studentId,
        })
        if (candidates.length >= Math.max(1, Math.min(args.limit, 25))) {
          return candidates
        }
      }
    }

    return candidates
  },
})

export const finalizeFileMigration = internalMutation({
  args: {
    applicantId: v.id('applicants'),
    documentType: v.string(),
    driveUrl: v.string(),
    storageId: v.id('_storage'),
  },
  handler: async (ctx, args) => {
    const fieldMap = {
      fourPs: ['fourPsFileStorageId', 'fourPsFileUrl'],
      psa: ['psaFileStorageId', 'psaFileUrl'],
      pwdId: ['pwdIdFileStorageId', 'pwdIdFileUrl'],
      schoolId: ['schoolIdFileStorageId', 'schoolIdFileUrl'],
      cor: ['corFileStorageId', 'corFileUrl'],
    }
    const fields = fieldMap[args.documentType]
    if (!fields) throw new Error('Unsupported applicant document type.')

    const applicant = await ctx.db.get(args.applicantId)
    if (!applicant || applicant[fields[0]] !== args.storageId) {
      throw new Error('Applicant file changed during migration.')
    }

    await ctx.db.patch(args.applicantId, {
      [fields[0]]: undefined,
      [fields[1]]: args.driveUrl,
    })
    await ctx.storage.delete(args.storageId)
  },
})

export const migrateFilesToGoogleDrive = action({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
    const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET
    if (!appsScriptUrl || !uploadSecret) {
      throw new Error('Google Drive upload is not configured.')
    }

    const candidates = await ctx.runQuery(internal.applicants.listFileMigrationCandidates, {
      limit: args.limit ?? 10,
    })
    const failures = []
    let migrated = 0

    for (const candidate of candidates) {
      try {
        if (!candidate.storageUrl) throw new Error('Convex Storage URL is unavailable.')
        const response = await fetch(candidate.storageUrl)
        if (!response.ok) throw new Error(`Unable to download PDF (HTTP ${response.status}).`)
        const bytes = new Uint8Array(await response.arrayBuffer())
        if (!bytes.length) throw new Error('The stored PDF is empty.')

        const documentLabel = {
          fourPs: '4Ps-ID',
          psa: 'PSA',
          pwdId: 'PWD-ID',
          schoolId: 'School-ID',
          cor: 'COR-or-Study-Load',
        }[candidate.documentType]
        const fullName = sanitizeFilePart(
          [candidate.lastName, candidate.firstName, candidate.middleName]
            .filter(Boolean)
            .join(' '),
          'no-name',
        )
        const fileName = `${sanitizeFilePart(candidate.studentId, 'applicant')}-${fullName}-Application-${sanitizeFilePart(candidate.applicationYear, 'unknown')}-${documentLabel}-migrated.pdf`
        const driveUrl = await uploadMigratedApplicantPdf(appsScriptUrl, uploadSecret, {
          bytes,
          fileName,
        })

        await ctx.runMutation(internal.applicants.finalizeFileMigration, {
          applicantId: candidate.applicantId,
          documentType: candidate.documentType,
          driveUrl,
          storageId: candidate.storageId,
        })
        migrated += 1
      } catch (error) {
        failures.push({
          documentType: candidate.documentType,
          message: error instanceof Error ? error.message : 'Unknown migration error.',
          studentId: candidate.studentId,
        })
      }
    }

    return { attempted: candidates.length, failures, migrated }
  },
})

export const create = mutation({
  args: {
    studentId: v.string(),
    lastName: v.string(),
    firstName: v.string(),
    extensionName: v.optional(v.string()),
    middleName: v.optional(v.string()),
    gender: v.string(),
    sexCode: v.optional(v.union(v.literal(0), v.literal(1))),
    birthDate: v.string(),
    course: v.string(),
    year: v.string(),
    yearLevelCode: v.optional(v.union(v.literal(1), v.literal(2), v.literal(3), v.literal(4), v.literal(5), v.literal(6))),
    lrn: v.optional(v.string()),
    philSysIdNumber: v.optional(v.string()),
    fourPsIdNumber: v.optional(v.string()),
    fatherLastName: v.optional(v.string()),
    fatherFirstName: v.optional(v.string()),
    fatherMiddleName: v.optional(v.string()),
    motherLastName: v.optional(v.string()),
    motherFirstName: v.optional(v.string()),
    motherMiddleName: v.optional(v.string()),
    fatherInformationUnavailable: v.optional(v.boolean()),
    motherInformationUnavailable: v.optional(v.boolean()),
    address: v.string(),
    streetBarangay: v.optional(v.string()),
    cityMunicipality: v.optional(v.string()),
    province: v.optional(v.string()),
    region: v.optional(v.string()),
    zipCode: v.optional(v.string()),
    pwdId: v.optional(v.string()),
    hasDisability: v.optional(v.boolean()),
    disabilityType: v.optional(v.string()),
    soloParentDependent: v.optional(v.union(v.literal(0), v.literal(1))),
    firstGeneration: v.optional(v.union(v.literal(0), v.literal(1))),
    isIndigenous: v.optional(v.boolean()),
    indigenousGroup: v.optional(v.string()),
    applicantClassification: v.optional(v.string()),
    mobileNumber: v.string(),
    emailAddress: v.string(),
    psaFileStorageId: v.id('_storage'),
    psaFileName: v.string(),
    schoolIdFileStorageId: v.id('_storage'),
    schoolIdFileName: v.string(),
    corFileStorageId: v.optional(v.id('_storage')),
    corFileName: v.optional(v.string()),
    pwdIdFileStorageId: v.optional(v.id('_storage')),
    pwdIdFileName: v.optional(v.string()),
    fourPsFileStorageId: v.optional(v.id('_storage')),
    fourPsFileName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const applicant = {
      ...trimApplicant({ ...args, extensionName: args.extensionName ?? '', middleName: args.middleName ?? '', fatherLastName: args.fatherLastName ?? '', fatherFirstName: args.fatherFirstName ?? '', fatherMiddleName: args.fatherMiddleName ?? '', motherLastName: args.motherLastName ?? '', motherFirstName: args.motherFirstName ?? '', motherMiddleName: args.motherMiddleName ?? '', zipCode: args.zipCode ?? '', pwdId: args.pwdId ?? '', corFileName: args.corFileName ?? '', pwdIdFileName: args.pwdIdFileName ?? '', fourPsFileName: args.fourPsFileName ?? '' }),
      lrn: String(args.lrn ?? '').trim(), philSysIdNumber: String(args.philSysIdNumber ?? '').trim(), fourPsIdNumber: String(args.fourPsIdNumber ?? '').trim(),
      streetBarangay: String(args.streetBarangay ?? '').trim(), cityMunicipality: String(args.cityMunicipality ?? '').trim(), province: String(args.province ?? '').trim(), region: String(args.region ?? '').trim(),
      fatherInformationUnavailable: Boolean(args.fatherInformationUnavailable), motherInformationUnavailable: Boolean(args.motherInformationUnavailable),
      hasDisability: Boolean(args.hasDisability), disabilityType: String(args.disabilityType ?? '').trim(), soloParentDependent: args.soloParentDependent ?? 0, firstGeneration: args.firstGeneration ?? 0,
      isIndigenous: Boolean(args.isIndigenous), indigenousGroup: String(args.indigenousGroup ?? '').trim(), applicantClassification: 'TES Applicant',
      sexCode: args.sexCode, yearLevelCode: args.yearLevelCode,
      psaFileName: String(args.psaFileName ?? '').trim(), schoolIdFileName: String(args.schoolIdFileName ?? '').trim(), corFileName: String(args.corFileName ?? '').trim(),
      pwdIdFileName: String(args.pwdIdFileName ?? '').trim(), fourPsFileName: String(args.fourPsFileName ?? '').trim(),
    }
    const portalSettings = await getPortalSettings(ctx)
    const applicationYear = portalSettings?.applicationYear ?? String(new Date().getFullYear())

    if (!portalSettings?.isReceivingApplicants) {
      return {
        success: false,
        message: 'The UNIFAST portal is closed for applicants right now.',
      }
    }

    if (
      !applicant.studentId ||
      !applicant.lastName ||
      !applicant.firstName ||
      !applicant.gender ||
      !applicant.birthDate ||
      !applicant.course ||
      !applicant.year ||
      !applicant.address ||
      !applicant.mobileNumber ||
      !applicant.emailAddress || !applicant.streetBarangay || !applicant.cityMunicipality || !applicant.province || !applicant.region || !applicant.zipCode ||
      !applicant.psaFileName || !applicant.schoolIdFileName
    ) {
      return {
        success: false,
        message:
          'Complete the required student, address, contact, and PSA / School ID document fields.',
      }
    }

    if (!isValidPhoneNumber(applicant.mobileNumber)) {
      return {
        success: false,
        message: 'Please enter a valid mobile number. Example: 09123456789 or +639123456789.',
      }
    }

    if (!isValidEmailAddress(applicant.emailAddress)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
      }
    }

    if (!isValidSchoolId(applicant.studentId)) return { success: false, message: 'Student ID must be 4 to 30 letters, numbers, or hyphens.' }
    if (applicant.lrn && !/^\d{12}$/.test(applicant.lrn)) return { success: false, message: 'LRN must contain exactly 12 digits.' }
    if (!isIsoDate(applicant.birthDate)) return { success: false, message: 'Enter a valid birthdate that is not in the future.' }
    if (!TES_PROGRAMS.has(applicant.course)) return { success: false, message: 'Choose a valid TES program.' }
    if (!['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', '6th Year'].includes(applicant.year)) return { success: false, message: 'Choose a valid year level.' }
    if (![0, 1].includes(args.sexCode) || args.yearLevelCode !== Number(applicant.year.slice(0, 1))) return { success: false, message: 'The sex and year-level codes are invalid.' }
    if (args.soloParentDependent !== 0 && args.soloParentDependent !== 1) return { success: false, message: 'Choose a solo parent dependent response.' }
    if (args.firstGeneration !== 0 && args.firstGeneration !== 1) return { success: false, message: 'Choose a first-generation response.' }
    if (typeof args.hasDisability !== 'boolean' || typeof args.isIndigenous !== 'boolean') return { success: false, message: 'Choose responses for disability and Indigenous Peoples group status.' }
    if ((applicant.fatherInformationUnavailable !== true && (!applicant.fatherLastName || !applicant.fatherFirstName)) || (applicant.motherInformationUnavailable !== true && (!applicant.motherLastName || !applicant.motherFirstName))) return { success: false, message: 'Complete each parent name or select Information unavailable.' }

    await validateStoredPdf(ctx, args.psaFileStorageId, true)
    await validateStoredPdf(ctx, args.schoolIdFileStorageId, true)
    await validateStoredPdf(ctx, args.corFileStorageId, false)
    await validateStoredPdf(ctx, args.pwdIdFileStorageId, false)
    await validateStoredPdf(ctx, args.fourPsFileStorageId, false)

    const existing = await ctx.db.query('applicants').withIndex('by_student_id_application_year', (q) => q.eq('studentId', applicant.studentId).eq('applicationYear', applicationYear)).first()
    if (existing) {
      await Promise.all([args.psaFileStorageId, args.schoolIdFileStorageId, args.corFileStorageId, args.pwdIdFileStorageId, args.fourPsFileStorageId].filter(Boolean).map((storageId) => ctx.storage.delete(storageId)))
      return { success: false, message: `An application for Student ID ${applicant.studentId} already exists for ${applicationYear}. Contact the Scholarship Office if you need help correcting it.` }
    }

    const applicantRecord = {
      studentId: applicant.studentId,
      lastName: applicant.lastName,
      firstName: applicant.firstName,
      gender: applicant.gender,
      sexCode: args.sexCode,
      birthDate: applicant.birthDate,
      course: applicant.course,
      year: applicant.year,
      yearLevelCode: args.yearLevelCode,
      address: [applicant.streetBarangay, applicant.cityMunicipality, applicant.province, applicant.region].join(', '),
      streetBarangay: applicant.streetBarangay,
      cityMunicipality: applicant.cityMunicipality,
      province: applicant.province,
      region: applicant.region,
      lrn: applicant.lrn,
      philSysIdNumber: applicant.philSysIdNumber,
      fourPsIdNumber: applicant.fourPsIdNumber,
      fatherInformationUnavailable: applicant.fatherInformationUnavailable,
      motherInformationUnavailable: applicant.motherInformationUnavailable,
      hasDisability: applicant.hasDisability,
      disabilityType: applicant.disabilityType,
      soloParentDependent: applicant.soloParentDependent,
      firstGeneration: applicant.firstGeneration,
      isIndigenous: applicant.isIndigenous,
      indigenousGroup: applicant.indigenousGroup,
      applicantClassification: applicant.applicantClassification,
      mobileNumber: applicant.mobileNumber,
      emailAddress: applicant.emailAddress,
      psaFileName: applicant.psaFileName,
      schoolIdFileName: applicant.schoolIdFileName,
      applicationYear,
      formDataJson: createApplicantFormDataJson(applicant, applicationYear),
      status: 'Submitted',
      submittedAt: Date.now(),
    }

    addOptionalField(applicantRecord, 'extensionName', applicant.extensionName)
    addOptionalField(applicantRecord, 'middleName', applicant.middleName)
    addOptionalField(applicantRecord, 'fourPsIdNumber', applicant.fourPsIdNumber)
    addOptionalField(applicantRecord, 'lrn', applicant.lrn)
    addOptionalField(applicantRecord, 'philSysIdNumber', applicant.philSysIdNumber)
    addOptionalField(applicantRecord, 'corFileName', applicant.corFileName)
    addOptionalField(applicantRecord, 'fatherLastName', applicant.fatherLastName)
    addOptionalField(applicantRecord, 'fatherFirstName', applicant.fatherFirstName)
    addOptionalField(applicantRecord, 'fatherMiddleName', applicant.fatherMiddleName)
    addOptionalField(applicantRecord, 'motherLastName', applicant.motherLastName)
    addOptionalField(applicantRecord, 'motherFirstName', applicant.motherFirstName)
    addOptionalField(applicantRecord, 'motherMiddleName', applicant.motherMiddleName)
    addOptionalField(applicantRecord, 'zipCode', applicant.zipCode)
    addOptionalField(applicantRecord, 'pwdId', applicant.pwdId)
    addOptionalField(applicantRecord, 'psaFileStorageId', args.psaFileStorageId)
    addOptionalField(applicantRecord, 'schoolIdFileStorageId', args.schoolIdFileStorageId)
    addOptionalField(applicantRecord, 'corFileStorageId', args.corFileStorageId)
    addOptionalField(applicantRecord, 'pwdIdFileStorageId', args.pwdIdFileStorageId)
    addOptionalField(applicantRecord, 'pwdIdFileUrl', args.pwdIdFileUrl)
    addOptionalField(applicantRecord, 'pwdIdFileName', applicant.pwdIdFileName)
    addOptionalField(applicantRecord, 'fourPsFileStorageId', args.fourPsFileStorageId)
    addOptionalField(applicantRecord, 'fourPsFileUrl', args.fourPsFileUrl)
    addOptionalField(applicantRecord, 'fourPsFileName', applicant.fourPsFileName)

    const applicantId = await ctx.db.insert('applicants', applicantRecord)

    await logActivity(ctx, {
      action: 'applicant_submitted',
      actorRole: 'applicant',
      actorId: applicant.studentId,
      actorName: [applicant.firstName, applicant.lastName].filter(Boolean).join(' '),
      targetType: 'applicants',
      targetId: String(applicantId),
      targetLabel: applicant.course,
      summary: `Applicant ${applicant.studentId} submitted ${applicationYear} UNIFAST portal information for ${applicant.course}.`,
    })

    return {
      success: true,
      applicantId,
      message: 'Applicant information submitted successfully.',
    }
  },
})
