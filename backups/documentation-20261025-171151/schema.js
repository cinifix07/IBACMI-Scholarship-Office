import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'
import { configFields, profileFields } from './billingRules'

export default defineSchema({
  billingConfigs: defineTable({ ...configFields, form2Mapping: v.optional(v.object({ applicationNumberVerified: v.boolean(), batchColumnMode: v.union(v.literal('databaseBatch'), v.literal('designation')), designation: v.string(), authority: v.string() })), periodKey: v.string(), updatedAt: v.number(), updatedBy: v.id('admins') })
    .index('by_period', ['periodKey']),
  billingProfiles: defineTable({ ...profileFields, form2ContinuingVerified: v.optional(v.boolean()), form2Evidence: v.optional(v.string()), form2ReviewedBy: v.optional(v.id('admins')), form2ReviewedAt: v.optional(v.number()), periodKey: v.string(), normalizedStudentId: v.string(), sourceVersion: v.optional(v.string()), updatedAt: v.number(), reviewedBy: v.id('admins') })
    .index('by_period', ['periodKey'])
    .index('by_period_student', ['periodKey', 'normalizedStudentId']),
  billingReports: defineTable({
    periodKey: v.string(), reference: v.string(), billingDate: v.string(), tranche: v.number(),
    schoolYear: v.string(), semester: v.string(), batches: v.array(v.string()),
    totals: v.any(), authority: v.string(), granteeCount: v.number(),
    ascBasisPoints: v.number(), createdBy: v.id('admins'), createdAt: v.number(),
  }).index('by_reference', ['reference']).index('by_period', ['periodKey']),
  billingReportRows: defineTable({ reportId: v.id('billingReports'), sequence: v.number(), data: v.any() })
    .index('by_report', ['reportId', 'sequence']),
  form2Reports: defineTable({ billingReportId: v.id('billingReports'), periodKey: v.string(), mapping: v.object({ applicationNumberVerified: v.boolean(), batchColumnMode: v.union(v.literal('databaseBatch'), v.literal('designation')), designation: v.string(), authority: v.string() }), createdBy: v.id('admins'), createdAt: v.number() })
    .index('by_period', ['periodKey']).index('by_billing_report', ['billingReportId']),
  billingLedger: defineTable({ periodKey: v.string(), studentId: v.string(), tesAwardNumber: v.string(), reportId: v.id('billingReports') })
    .index('by_period', ['periodKey']).index('by_period_student', ['periodKey', 'studentId']),
  admins: defineTable({
    email: v.string(),
    schoolId: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
    currentAddress: v.optional(v.string()),
    facebookProfileUrl: v.optional(v.string()),
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
    .index('by_school_id', ['schoolId'])
    .index('by_role', ['role']),

  supportSessions: defineTable({
    token: v.string(),
    adminId: v.id('admins'),
    role: v.string(),
    createdAt: v.number(),
    expiresAt: v.number(),
  }).index('by_token', ['token']),

  supportSettings: defineTable({
    key: v.string(),
    link1Name: v.string(),
    link1Url: v.string(),
    link2Name: v.string(),
    link2Url: v.string(),
    updatedAt: v.number(),
  }).index('by_key', ['key']),

  supportConversations: defineTable({
    studentAccountId: v.optional(v.id('admins')),
    studentId: v.string(),
    studentName: v.string(),
    email: v.string(),
    source: v.string(),
    status: v.string(),
    legacyRequestId: v.optional(v.id('quickActions')),
    visitorType: v.optional(v.string()),
    visitorStudentName: v.optional(v.string()),
    visitorSessionHash: v.optional(v.string()),
    visitorExpiresAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_updatedAt', ['updatedAt'])
    .index('by_studentAccount', ['studentAccountId'])
    .index('by_studentId', ['studentId'])
    .index('by_legacyRequest', ['legacyRequestId'])
    .index('by_visitorSessionHash', ['visitorSessionHash']),

  supportMessages: defineTable({
    conversationId: v.id('supportConversations'),
    senderId: v.string(),
    senderRole: v.union(v.literal('student'), v.literal('admin'), v.literal('visitor')),
    content: v.string(),
    readByAdmin: v.boolean(),
    readByStudent: v.boolean(),
    clientMessageId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index('by_conversation', ['conversationId'])
    .index('by_clientMessage', ['clientMessageId']),

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

  archive: defineTable({
    sourceTable: v.string(),
    sourceId: v.string(),
    sourceLabel: v.optional(v.string()),
    deletionKind: v.union(v.literal('record'), v.literal('fields')),
    data: v.any(),
    deletedAt: v.number(),
  })
    .index('by_deletedAt', ['deletedAt'])
    .index('by_sourceTable', ['sourceTable']),

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
  })
    .index('by_student_id', ['studentId'])
    .index('by_batch_id', ['batchId'])
    .index('by_school_year_batch', ['schoolYear', 'batchId'])
    .index('by_last_name', ['lastName'])
    .index('by_first_name', ['firstName']),

  applicants: defineTable({
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
    psaFileStorageId: v.optional(v.id('_storage')),
    psaFileUrl: v.optional(v.string()),
    psaFileName: v.optional(v.string()),
    schoolIdFileStorageId: v.optional(v.id('_storage')),
    schoolIdFileUrl: v.optional(v.string()),
    schoolIdFileName: v.optional(v.string()),
    corFileStorageId: v.optional(v.id('_storage')),
    corFileUrl: v.optional(v.string()),
    corFileName: v.optional(v.string()),
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
        sexCode: v.optional(v.union(v.literal(0), v.literal(1))),
        birthDate: v.string(),
        course: v.string(),
        year: v.string(),
        yearLevelCode: v.optional(v.union(v.literal(1), v.literal(2), v.literal(3), v.literal(4), v.literal(5), v.literal(6))),
        lrn: v.optional(v.string()),
        philSysIdNumber: v.optional(v.string()),
        fourPsIdNumber: v.optional(v.string()),
      }),
      parents: v.object({
        fatherInformationUnavailable: v.optional(v.boolean()),
        motherInformationUnavailable: v.optional(v.boolean()),
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
        streetBarangay: v.optional(v.string()),
        cityMunicipality: v.optional(v.string()),
        province: v.optional(v.string()),
        region: v.optional(v.string()),
        zipCode: v.optional(v.string()),
        pwdId: v.optional(v.string()),
        mobileNumber: v.string(),
        emailAddress: v.string(),
      }),
      additional: v.optional(v.object({
        hasDisability: v.boolean(),
        disabilityType: v.optional(v.string()),
        soloParentDependent: v.union(v.literal(0), v.literal(1)),
        firstGeneration: v.union(v.literal(0), v.literal(1)),
        isIndigenous: v.boolean(),
        indigenousGroup: v.optional(v.string()),
        applicantClassification: v.string(),
      })),
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
          cor: v.optional(
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
    .index('by_application_year_course', ['applicationYear', 'course'])
    .index('by_student_id_application_year', ['studentId', 'applicationYear'])
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
