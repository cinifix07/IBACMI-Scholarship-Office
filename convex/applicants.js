import { mutation, query } from './_generated/server'
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

    const applicantsWithFiles = await Promise.all(
      applicants.map(async (applicant) => ({
        ...applicant,
        psaFileUrl:
          applicant.psaFileUrl ??
          (applicant.psaFileStorageId
            ? await ctx.storage.getUrl(applicant.psaFileStorageId)
            : null),
        schoolIdFileUrl:
          applicant.schoolIdFileUrl ??
          (applicant.schoolIdFileStorageId
            ? await ctx.storage.getUrl(applicant.schoolIdFileStorageId)
            : null),
        pwdIdFileUrl:
          applicant.pwdIdFileUrl ??
          (applicant.pwdIdFileStorageId
            ? await ctx.storage.getUrl(applicant.pwdIdFileStorageId)
            : null),
        fourPsFileUrl:
          applicant.fourPsFileUrl ??
          (applicant.fourPsFileStorageId
            ? await ctx.storage.getUrl(applicant.fourPsFileStorageId)
            : null),
      })),
    )

    return applicantsWithFiles.sort((firstApplicant, secondApplicant) => {
      return secondApplicant.submittedAt - firstApplicant.submittedAt
    })
  },
})

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl()
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
