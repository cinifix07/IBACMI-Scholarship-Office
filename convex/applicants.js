import { internal } from './_generated/api'
import { action, internalMutation, internalQuery, mutation, query } from './_generated/server'
import { v } from 'convex/values'

async function logActivity(ctx, log) {
  await ctx.db.insert('activityLogs', {
    actorRole: 'system',
    ...log,
    createdAt: Date.now(),
  })
}

const PORTAL_SETTINGS_KEY = 'unifast-applicants'

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

function isGoogleDriveFileUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname === 'drive.google.com'
  } catch {
    return false
  }
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

async function postToGoogleAppsScript(appsScriptUrl, payload) {
  const initialResponse = await fetch(appsScriptUrl, {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    method: 'POST',
    redirect: 'manual',
  })

  if (initialResponse.status >= 300 && initialResponse.status < 400) {
    const redirectUrl = initialResponse.headers.get('location')
    if (!redirectUrl) throw new Error('Google Apps Script redirect is missing.')
    return await fetch(redirectUrl, { method: 'GET', redirect: 'follow' })
  }

  return initialResponse
}

function trimApplicant(args) {
  return {
    studentId: args.studentId.trim(),
    lastName: args.lastName.trim(),
    firstName: args.firstName.trim(),
    extensionName: args.extensionName.trim(),
    middleName: args.middleName.trim(),
    gender: args.gender.trim(),
    birthDate: args.birthDate.trim(),
    course: args.course.trim(),
    year: args.year.trim(),
    fatherLastName: args.fatherLastName.trim(),
    fatherFirstName: args.fatherFirstName.trim(),
    fatherMiddleName: args.fatherMiddleName.trim(),
    motherLastName: args.motherLastName.trim(),
    motherFirstName: args.motherFirstName.trim(),
    motherMiddleName: args.motherMiddleName.trim(),
    address: args.address.trim(),
    zipCode: args.zipCode.trim(),
    pwdId: args.pwdId.trim(),
    mobileNumber: normalizePhoneNumber(args.mobileNumber),
    emailAddress: args.emailAddress.trim().toLowerCase(),
    psaFileName: args.psaFileName.trim(),
    schoolIdFileName: args.schoolIdFileName.trim(),
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
      father,
      mother,
    },
    contact,
    documents,
  }
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const applicants = await ctx.db.query('applicants').collect()

    return applicants.sort((firstApplicant, secondApplicant) => {
      return secondApplicant.submittedAt - firstApplicant.submittedAt
    })
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
      await ctx.db.delete(id)
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
    const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
    const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET

    if (!appsScriptUrl || !uploadSecret) {
      throw new Error('Google Drive deletion is not configured.')
    }

    const applicants = await ctx.runQuery(internal.applicants.listCourseDeletionCandidates, {
      applicationYear: args.applicationYear.trim(),
      course: args.course.trim(),
    })

    if (applicants.length === 0) return { deleted: 0, filesDeleted: 0 }

    const fileIds = applicants.flatMap((applicant) => {
      return [
        applicant.psaFileUrl,
        applicant.schoolIdFileUrl,
        applicant.pwdIdFileUrl,
        applicant.fourPsFileUrl,
      ]
        .map(getGoogleDriveFileId)
        .filter(Boolean)
    })

    if (fileIds.length > 0) {
      const googleResponse = await postToGoogleAppsScript(appsScriptUrl, {
        destination: 'applicants',
        fileIds,
        operation: 'delete',
        secret: uploadSecret,
      })
      const googleResult = await googleResponse.json().catch(() => null)

      if (!googleResponse.ok || !googleResult?.success) {
        throw new Error(googleResult?.message || 'Google Drive rejected applicant file deletion.')
      }
    }

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
    extensionName: v.string(),
    middleName: v.string(),
    gender: v.string(),
    birthDate: v.string(),
    course: v.string(),
    year: v.string(),
    fatherLastName: v.string(),
    fatherFirstName: v.string(),
    fatherMiddleName: v.string(),
    motherLastName: v.string(),
    motherFirstName: v.string(),
    motherMiddleName: v.string(),
    address: v.string(),
    zipCode: v.string(),
    pwdId: v.string(),
    mobileNumber: v.string(),
    emailAddress: v.string(),
    psaFileStorageId: v.optional(v.id('_storage')),
    psaFileUrl: v.optional(v.string()),
    psaFileName: v.string(),
    schoolIdFileStorageId: v.optional(v.id('_storage')),
    schoolIdFileUrl: v.optional(v.string()),
    schoolIdFileName: v.string(),
    pwdIdFileStorageId: v.optional(v.id('_storage')),
    pwdIdFileUrl: v.optional(v.string()),
    pwdIdFileName: v.optional(v.string()),
    fourPsFileStorageId: v.optional(v.id('_storage')),
    fourPsFileUrl: v.optional(v.string()),
    fourPsFileName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const applicant = trimApplicant(args)
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
      !applicant.emailAddress ||
      !applicant.psaFileName ||
      !applicant.schoolIdFileName
    ) {
      return {
        success: false,
        message:
          'Student, course, address, mobile number, email, PSA PDF, and School ID PDF are required.',
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

    if (
      (!args.psaFileUrl && !args.psaFileStorageId) ||
      (!args.schoolIdFileUrl && !args.schoolIdFileStorageId)
    ) {
      return {
        success: false,
        message: 'PSA PDF and School ID PDF uploads are required.',
      }
    }

    const requiredDriveUrls = [args.psaFileUrl, args.schoolIdFileUrl]
      .filter(Boolean)
    const optionalDriveUrls = [args.pwdIdFileUrl, args.fourPsFileUrl].filter(Boolean)

    if (
      requiredDriveUrls.some((fileUrl) => !isGoogleDriveFileUrl(fileUrl)) ||
      optionalDriveUrls.some((fileUrl) => !isGoogleDriveFileUrl(fileUrl))
    ) {
      return {
        success: false,
        message: 'Applicant documents must be uploaded to the configured Google Drive folder.',
      }
    }

    const applicantRecord = {
      studentId: applicant.studentId,
      lastName: applicant.lastName,
      firstName: applicant.firstName,
      gender: applicant.gender,
      birthDate: applicant.birthDate,
      course: applicant.course,
      year: applicant.year,
      address: applicant.address,
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
    addOptionalField(applicantRecord, 'fatherLastName', applicant.fatherLastName)
    addOptionalField(applicantRecord, 'fatherFirstName', applicant.fatherFirstName)
    addOptionalField(applicantRecord, 'fatherMiddleName', applicant.fatherMiddleName)
    addOptionalField(applicantRecord, 'motherLastName', applicant.motherLastName)
    addOptionalField(applicantRecord, 'motherFirstName', applicant.motherFirstName)
    addOptionalField(applicantRecord, 'motherMiddleName', applicant.motherMiddleName)
    addOptionalField(applicantRecord, 'zipCode', applicant.zipCode)
    addOptionalField(applicantRecord, 'pwdId', applicant.pwdId)
    addOptionalField(applicantRecord, 'psaFileStorageId', args.psaFileStorageId)
    addOptionalField(applicantRecord, 'psaFileUrl', args.psaFileUrl)
    addOptionalField(applicantRecord, 'schoolIdFileStorageId', args.schoolIdFileStorageId)
    addOptionalField(applicantRecord, 'schoolIdFileUrl', args.schoolIdFileUrl)
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
