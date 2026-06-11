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
    idFilesUploadedAt: v.optional(v.number()),
    uploadedAt: v.float64(),
  }),

  quickActions: defineTable({
    email: v.string(),
    question: v.string(),
    source: v.string(),
    status: v.string(),
    submittedAt: v.number(),
  }).index('by_submittedAt', ['submittedAt']),
})
