import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  admins: defineTable({
    email: v.string(),
    schoolId: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
    currentAddress: v.optional(v.string()),
    password: v.string(),
    name: v.string(),
    role: v.string(),
    status: v.string(),
    resetPasswordOtp: v.optional(v.string()),
    resetPasswordOtpExpiresAt: v.optional(v.number()),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  })
    .index('by_email', ['email'])
    .index('by_school_id', ['schoolId']),

  activityLogs: defineTable({
    action: v.string(),
    actorRole: v.string(),
    actorId: v.optional(v.string()),
    actorName: v.optional(v.string()),
    targetType: v.string(),
    targetId: v.optional(v.string()),
    targetLabel: v.optional(v.string()),
    summary: v.string(),
    createdAt: v.number(),
  }).index('by_createdAt', ['createdAt']),

  allinfo: defineTable({
    no: v.string(),
    tesAwardNumber: v.string(),
    studentId: v.string(),
    lastName: v.optional(v.string()),
    firstName: v.optional(v.string()),
    middleInitial: v.optional(v.string()),
    batchId: v.string(),
    status: v.string(),
    semester: v.optional(v.string()),
    schoolYear: v.optional(v.string()),
    frontIdStorageId: v.optional(v.id('_storage')),
    frontIdUrl: v.optional(v.string()),
    idFilesUploadedAt: v.optional(v.number()),
    uploadedAt: v.float64(),
  }),

  applicants: defineTable({
    studentId: v.string(),
    lastName: v.string(),
    firstName: v.string(),
    extensionName: v.optional(v.string()),
    middleName: v.optional(v.string()),
    gender: v.string(),
    birthDate: v.string(),
    course: v.string(),
    year: v.string(),
    fatherLastName: v.optional(v.string()),
    fatherFirstName: v.optional(v.string()),
    fatherMiddleName: v.optional(v.string()),
    motherLastName: v.optional(v.string()),
    motherFirstName: v.optional(v.string()),
    motherMiddleName: v.optional(v.string()),
    address: v.string(),
    zipCode: v.optional(v.string()),
    pwdId: v.optional(v.string()),
    mobileNumber: v.string(),
    emailAddress: v.string(),
    psaFileStorageId: v.optional(v.id('_storage')),
    psaFileUrl: v.optional(v.string()),
    psaFileName: v.optional(v.string()),
    schoolIdFileStorageId: v.optional(v.id('_storage')),
    schoolIdFileUrl: v.optional(v.string()),
    schoolIdFileName: v.optional(v.string()),
    pwdIdFileStorageId: v.optional(v.id('_storage')),
    pwdIdFileUrl: v.optional(v.string()),
    pwdIdFileName: v.optional(v.string()),
    fourPsFileStorageId: v.optional(v.id('_storage')),
    fourPsFileUrl: v.optional(v.string()),
    fourPsFileName: v.optional(v.string()),
    applicationYear: v.optional(v.string()),
    formDataJson: v.object({
      applicationYear: v.optional(v.string()),
      student: v.object({
        studentId: v.string(),
        lastName: v.string(),
        firstName: v.string(),
        extensionName: v.optional(v.string()),
        middleName: v.optional(v.string()),
        gender: v.string(),
        birthDate: v.string(),
        course: v.string(),
        year: v.string(),
      }),
      parents: v.object({
        father: v.object({
          lastName: v.optional(v.string()),
          firstName: v.optional(v.string()),
          middleName: v.optional(v.string()),
        }),
        mother: v.object({
          lastName: v.optional(v.string()),
          firstName: v.optional(v.string()),
          middleName: v.optional(v.string()),
        }),
      }),
      contact: v.object({
        address: v.string(),
        zipCode: v.optional(v.string()),
        pwdId: v.optional(v.string()),
        mobileNumber: v.string(),
        emailAddress: v.string(),
      }),
      documents: v.optional(
        v.object({
          psa: v.optional(
            v.object({
              fileName: v.string(),
            }),
          ),
          schoolId: v.optional(
            v.object({
              fileName: v.string(),
            }),
          ),
          pwdId: v.optional(
            v.object({
              fileName: v.string(),
            }),
          ),
          fourPs: v.optional(
            v.object({
              fileName: v.string(),
            }),
          ),
        }),
      ),
    }),
    status: v.string(),
    submittedAt: v.number(),
  })
    .index('by_course', ['course'])
    .index('by_submittedAt', ['submittedAt']),

  applicantPortalSettings: defineTable({
    key: v.string(),
    isReceivingApplicants: v.boolean(),
    applicationYear: v.optional(v.string()),
    updatedAt: v.number(),
  }).index('by_key', ['key']),

  quickActions: defineTable({
    email: v.string(),
    studentId: v.optional(v.string()),
    lastName: v.optional(v.string()),
    firstName: v.optional(v.string()),
    middleInitial: v.optional(v.string()),
    question: v.string(),
    source: v.string(),
    status: v.string(),
    submittedAt: v.number(),
  }).index('by_submittedAt', ['submittedAt']),
})
