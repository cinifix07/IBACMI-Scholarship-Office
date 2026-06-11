import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

async function logActivity(ctx, log) {
  await ctx.db.insert('activityLogs', {
    actorRole: 'system',
    ...log,
    createdAt: Date.now(),
  })
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const records = await ctx.db.query('allinfo').collect()

    return await Promise.all(
      records.map(async (record) => ({
        ...record,
        frontIdUrl: record.frontIdStorageId
          ? await ctx.storage.getUrl(record.frontIdStorageId)
          : null,
      })),
    )
  },
})

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

function findTargetStudentRecord(records, requestedSchoolYear) {
  if (requestedSchoolYear) {
    const requestedRecord = records.find((record) => record.schoolYear === requestedSchoolYear)
    if (requestedRecord) return requestedRecord
  }

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

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl()
  },
})

export const saveStudentIdUploads = mutation({
  args: {
    studentId: v.string(),
    schoolYear: v.optional(v.string()),
    frontIdStorageId: v.optional(v.id('_storage')),
  },
  handler: async (ctx, args) => {
    const studentId = args.studentId.trim().toLowerCase()

    if (!studentId) {
      throw new Error('Student ID is required.')
    }

    if (!args.frontIdStorageId) {
      throw new Error('Upload a Front ID file before saving.')
    }

    const allRecords = await ctx.db.query('allinfo').collect()
    const matchingRecords = allRecords.filter((record) => {
      return String(record.studentId ?? '').trim().toLowerCase() === studentId
    })

    const targetRecord = findTargetStudentRecord(matchingRecords, args.schoolYear)

    if (!targetRecord) {
      throw new Error('No allinfo record was found for this Student ID.')
    }

    await ctx.db.patch(targetRecord._id, {
      ...(args.frontIdStorageId ? { frontIdStorageId: args.frontIdStorageId } : {}),
      idFilesUploadedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'student_id_uploaded',
      actorRole: 'student',
      actorId: targetRecord.studentId,
      actorName: [targetRecord.firstName, targetRecord.lastName].filter(Boolean).join(' '),
      targetType: 'allinfo',
      targetId: String(targetRecord._id),
      targetLabel: `${targetRecord.studentId} / ${targetRecord.schoolYear ?? ''}`,
      summary: `Student uploaded School ID file for ${targetRecord.schoolYear ?? 'current school year'}.`,
    })

    return {
      success: true,
      recordId: targetRecord._id,
      schoolYear: targetRecord.schoolYear ?? '',
    }
  },
})

export const bulkCreate = mutation({
  args: {
    records: v.array(
      v.object({
        no: v.string(),
        tesAwardNumber: v.string(),
        studentId: v.string(),
        lastName: v.string(),
        firstName: v.string(),
        middleInitial: v.string(),
        batchId: v.string(),
        status: v.string(),
        semester: v.string(),
        schoolYear: v.string(),
      }),
    ),
  },

  handler: async (ctx, args) => {
    for (const record of args.records) {
      await ctx.db.insert('allinfo', {
        no: record.no,
        tesAwardNumber: record.tesAwardNumber,
        studentId: record.studentId,
        lastName: record.lastName,
        firstName: record.firstName,
        middleInitial: record.middleInitial,
        batchId: record.batchId,
        status: record.status,
        semester: record.semester,
        schoolYear: record.schoolYear,
        uploadedAt: Date.now(),
      })
    }

    await logActivity(ctx, {
      action: 'allinfo_bulk_created',
      actorRole: 'admin',
      targetType: 'allinfo',
      summary: `Admin uploaded CSV and created ${args.records.length} grantee record${
        args.records.length === 1 ? '' : 's'
      }.`,
    })

    return {
      inserted: args.records.length,
    }
  },
})

export const update = mutation({
  args: {
    id: v.id('allinfo'),
    no: v.string(),
    tesAwardNumber: v.string(),
    studentId: v.string(),
    lastName: v.string(),
    firstName: v.string(),
    middleInitial: v.string(),
    batchId: v.string(),
    status: v.string(),
    semester: v.string(),
    schoolYear: v.string(),
  },
  handler: async (ctx, args) => {
    const existingRecord = await ctx.db.get(args.id)
    const nextRecord = {
      no: args.no.trim(),
      tesAwardNumber: args.tesAwardNumber.trim(),
      studentId: args.studentId.trim(),
      lastName: args.lastName.trim(),
      firstName: args.firstName.trim(),
      middleInitial: args.middleInitial.trim(),
      batchId: args.batchId.trim(),
      status: args.status.trim(),
      semester: args.semester.trim(),
      schoolYear: args.schoolYear.trim(),
    }

    await ctx.db.patch(args.id, {
      ...nextRecord,
    })

    const changedFields = existingRecord
      ? Object.entries(nextRecord)
          .filter(([fieldName, nextValue]) => String(existingRecord[fieldName] ?? '') !== nextValue)
          .map(([fieldName]) => fieldName)
      : []

    await logActivity(ctx, {
      action: 'allinfo_updated',
      actorRole: 'admin',
      targetType: 'allinfo',
      targetId: String(args.id),
      targetLabel: nextRecord.studentId,
      summary: `Admin edited grantee ${nextRecord.studentId}${
        changedFields.length ? ` (${changedFields.join(', ')})` : ''
      }.`,
    })

    return { success: true }
  },
})

export const deleteMany = mutation({
  args: {
    ids: v.array(v.id('allinfo')),
  },
  handler: async (ctx, args) => {
    const recordsToDelete = await Promise.all(args.ids.map((id) => ctx.db.get(id)))

    for (const id of args.ids) {
      await ctx.db.delete(id)
    }

    await logActivity(ctx, {
      action: 'allinfo_deleted',
      actorRole: 'admin',
      targetType: 'allinfo',
      summary: `Admin deleted ${args.ids.length} grantee record${args.ids.length === 1 ? '' : 's'}${
        recordsToDelete.filter(Boolean).length
          ? `: ${recordsToDelete
              .filter(Boolean)
              .map((record) => record.studentId)
              .join(', ')}`
          : ''
      }.`,
    })

    return {
      deleted: args.ids.length,
    }
  },
})
