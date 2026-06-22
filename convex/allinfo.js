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

export const list = query({
  args: {},
  handler: async (ctx) => {
    const records = await ctx.db.query('allinfo').collect()

    return records
  },
})

async function withFrontIdUrl(_ctx, record) {
  if (!record) return null

  return record
}

export const listByStudentId = query({
  args: {
    studentId: v.string(),
  },
  handler: async (ctx, args) => {
    const studentId = args.studentId.trim()
    if (!studentId) return []

    const records = await ctx.db
      .query('allinfo')
      .withIndex('by_student_id', (queryBuilder) => queryBuilder.eq('studentId', studentId))
      .collect()

    return await Promise.all(records.map((record) => withFrontIdUrl(ctx, record)))
  },
})

export const searchPublic = query({
  args: {
    searchValue: v.string(),
  },
  handler: async (ctx, args) => {
    const searchValue = args.searchValue.trim()
    if (!searchValue) return []

    const upperSearchValue = searchValue.toUpperCase()
    const [studentMatches, batchMatches, lastNameMatches, firstNameMatches] = await Promise.all([
      ctx.db
        .query('allinfo')
        .withIndex('by_student_id', (queryBuilder) => queryBuilder.eq('studentId', searchValue))
        .take(50),
      ctx.db
        .query('allinfo')
        .withIndex('by_batch_id', (queryBuilder) => queryBuilder.eq('batchId', searchValue))
        .take(50),
      ctx.db
        .query('allinfo')
        .withIndex('by_last_name', (queryBuilder) => queryBuilder.eq('lastName', upperSearchValue))
        .take(50),
      ctx.db
        .query('allinfo')
        .withIndex('by_first_name', (queryBuilder) => queryBuilder.eq('firstName', upperSearchValue))
        .take(50),
    ])
    const uniqueRecords = new Map()

    for (const record of [
      ...studentMatches,
      ...batchMatches,
      ...lastNameMatches,
      ...firstNameMatches,
    ]) {
      uniqueRecords.set(String(record._id), record)
    }

    return [...uniqueRecords.values()]
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

async function uploadMigrationPdf(appsScriptUrl, uploadSecret, candidate, fileBytes) {
  const studentId = sanitizeFilePart(candidate.studentId, 'student')
  const fullName = sanitizeFilePart(
    [candidate.lastName, candidate.firstName, candidate.middleInitial].filter(Boolean).join(' '),
    'no-name',
  )
  const batchNo = sanitizeFilePart(
    String(candidate.batchId ?? '').replace(/^batch[\s_-]*/i, ''),
    'no-batch',
  )
  const fileName = `${studentId}-${fullName}-Batch-${batchNo}-School-ID-migrated.pdf`
  const payload = {
    contentType: 'application/pdf',
    destination: 'students',
    fileBase64: bytesToBase64(fileBytes),
    fileName,
    secret: uploadSecret,
  }
  const initialResponse = await fetch(appsScriptUrl, {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    method: 'POST',
    redirect: 'manual',
  })
  let googleResponse = initialResponse

  if (initialResponse.status >= 300 && initialResponse.status < 400) {
    const redirectUrl = initialResponse.headers.get('location')
    if (!redirectUrl) {
      throw new Error('Google Apps Script returned a redirect without a destination.')
    }

    googleResponse = await fetch(redirectUrl, {
      method: 'GET',
      redirect: 'follow',
    })
  }

  const googleResult = await googleResponse.json().catch(() => null)

  if (!googleResponse.ok || !googleResult?.success || !googleResult?.fileUrl) {
    throw new Error(
      googleResult?.message ||
        `Google Drive rejected the migrated PDF (HTTP ${googleResponse.status}).`,
    )
  }

  return googleResult.fileUrl
}

export const listStudentIdMigrationCandidates = internalQuery({
  args: {
    limit: v.number(),
    schoolYear: v.string(),
  },
  handler: async (ctx, args) => {
    const records = await ctx.db.query('allinfo').collect()
    const candidates = records.filter((record) => {
      return (
        record.schoolYear === args.schoolYear &&
        Boolean(record.frontIdStorageId) &&
        !String(record.frontIdUrl ?? '').startsWith('https://drive.google.com/')
      )
    })

    return {
      candidates: await Promise.all(
        candidates.slice(0, Math.max(0, Math.min(args.limit, 25))).map(async (record) => ({
          _id: record._id,
          batchId: record.batchId,
          firstName: record.firstName,
          lastName: record.lastName,
          middleInitial: record.middleInitial,
          schoolYear: record.schoolYear,
          storageId: record.frontIdStorageId,
          storageUrl: await ctx.storage.getUrl(record.frontIdStorageId),
          studentId: record.studentId,
        })),
      ),
      total: candidates.length,
    }
  },
})

export const finalizeStudentIdMigration = internalMutation({
  args: {
    driveUrl: v.string(),
    id: v.id('allinfo'),
    storageId: v.id('_storage'),
  },
  handler: async (ctx, args) => {
    const record = await ctx.db.get(args.id)

    if (!record || record.schoolYear !== '2024-2025') {
      throw new Error('The migration target is not a 2024-2025 allinfo record.')
    }

    if (record.frontIdStorageId !== args.storageId) {
      throw new Error('The School ID storage file changed during migration.')
    }

    await ctx.db.patch(args.id, {
      frontIdStorageId: undefined,
      frontIdUrl: args.driveUrl,
      idFilesUploadedAt: Date.now(),
    })
    await ctx.storage.delete(args.storageId)

    await logActivity(ctx, {
      action: 'student_id_migrated_to_google_drive',
      actorRole: 'system',
      actorId: record.studentId,
      actorName: [record.firstName, record.lastName].filter(Boolean).join(' '),
      targetType: 'allinfo',
      targetId: String(record._id),
      targetLabel: `${record.studentId} / ${record.schoolYear}`,
      summary: `Migrated the ${record.schoolYear} School ID PDF from Convex Storage to Google Drive.`,
    })
  },
})

export const listLegacyStorageReferences = internalQuery({
  args: {},
  handler: async (ctx) => {
    const records = await ctx.db.query('allinfo').collect()

    return await Promise.all(
      records
        .filter((record) => record.frontIdStorageId)
        .map(async (record) => ({
          driveUrl: String(record.frontIdUrl ?? '').startsWith('https://drive.google.com/')
            ? record.frontIdUrl
            : null,
          id: record._id,
          storageId: record.frontIdStorageId,
          storageUrl: await ctx.storage.getUrl(record.frontIdStorageId),
          studentId: record.studentId,
        })),
    )
  },
})

export const removeLegacyStorageReference = internalMutation({
  args: {
    id: v.id('allinfo'),
    storageId: v.id('_storage'),
  },
  handler: async (ctx, args) => {
    const record = await ctx.db.get(args.id)
    if (!record || record.frontIdStorageId !== args.storageId) return

    await ctx.db.patch(args.id, { frontIdStorageId: undefined })
    await ctx.storage.delete(args.storageId)
  },
})

export const cleanLegacyStorageReferences = action({
  args: {},
  handler: async (ctx) => {
    const references = await ctx.runQuery(internal.allinfo.listLegacyStorageReferences)
    const failures = []
    let removed = 0

    for (const reference of references) {
      try {
        let canRemove = Boolean(reference.driveUrl)

        if (!canRemove && reference.storageUrl) {
          const response = await fetch(reference.storageUrl)
          const bytes = response.ok ? new Uint8Array(await response.arrayBuffer()) : null
          canRemove = Boolean(bytes && bytes.length === 0)
        }

        if (!canRemove) {
          throw new Error('The record has no Drive URL and its Convex file is not empty.')
        }

        await ctx.runMutation(internal.allinfo.removeLegacyStorageReference, {
          id: reference.id,
          storageId: reference.storageId,
        })
        removed += 1
      } catch (error) {
        failures.push({
          message: error instanceof Error ? error.message : 'Unknown cleanup error.',
          studentId: reference.studentId,
        })
      }
    }

    return { failures, removed }
  },
})

export const listOrphanedStorageFiles = internalQuery({
  args: {
    limit: v.number(),
  },
  handler: async (ctx, args) => {
    const files = await ctx.db.system
      .query('_storage')
      .take(Math.max(1, Math.min(args.limit, 100)))

    return files.map((file) => ({
      id: file._id,
      size: file.size,
    }))
  },
})

export const deleteOrphanedStorageFiles = internalMutation({
  args: {
    storageIds: v.array(v.id('_storage')),
  },
  handler: async (ctx, args) => {
    await Promise.all(args.storageIds.map((storageId) => ctx.storage.delete(storageId)))
    return args.storageIds.length
  },
})

export const purgeOrphanedStorage = action({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const files = await ctx.runQuery(internal.allinfo.listOrphanedStorageFiles, {
      limit: args.limit ?? 100,
    })
    const deleted = await ctx.runMutation(internal.allinfo.deleteOrphanedStorageFiles, {
      storageIds: files.map((file) => file.id),
    })

    return {
      bytesDeleted: files.reduce((total, file) => total + file.size, 0),
      deleted,
    }
  },
})

export const migrateStudentIdFilesToGoogleDrive = action({
  args: {
    dryRun: v.optional(v.boolean()),
    limit: v.optional(v.number()),
    schoolYear: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.schoolYear !== '2024-2025') {
      throw new Error('This migration is restricted to School Year 2024-2025.')
    }

    const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
    const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET

    if (!appsScriptUrl || !uploadSecret) {
      throw new Error('Google Drive upload is not configured in Convex.')
    }

    const migrationBatch = await ctx.runQuery(internal.allinfo.listStudentIdMigrationCandidates, {
      limit: args.limit ?? 10,
      schoolYear: args.schoolYear,
    })

    if (args.dryRun) {
      return {
        candidates: migrationBatch.candidates.map((candidate) => ({
          batchId: candidate.batchId,
          name: [candidate.lastName, candidate.firstName, candidate.middleInitial]
            .filter(Boolean)
            .join(' '),
          studentId: candidate.studentId,
        })),
        remaining: migrationBatch.total,
      }
    }

    const failures = []
    let migrated = 0

    for (let offset = 0; offset < migrationBatch.candidates.length; offset += 5) {
      const candidateChunk = migrationBatch.candidates.slice(offset, offset + 5)
      const chunkResults = await Promise.all(
        candidateChunk.map(async (candidate) => {
          try {
            if (!candidate.storageUrl) {
              throw new Error('The Convex Storage URL is unavailable.')
            }

            const storageResponse = await fetch(candidate.storageUrl)
            if (!storageResponse.ok) {
              throw new Error(`Unable to download Convex PDF (HTTP ${storageResponse.status}).`)
            }

            const fileBytes = new Uint8Array(await storageResponse.arrayBuffer())
            if (!fileBytes.length) {
              throw new Error('The Convex PDF is empty.')
            }

            const driveUrl = await uploadMigrationPdf(
              appsScriptUrl,
              uploadSecret,
              candidate,
              fileBytes,
            )

            await ctx.runMutation(internal.allinfo.finalizeStudentIdMigration, {
              driveUrl,
              id: candidate._id,
              storageId: candidate.storageId,
            })

            return { success: true }
          } catch (error) {
            return {
              message: error instanceof Error ? error.message : 'Unknown migration error.',
              studentId: candidate.studentId,
              success: false,
            }
          }
        })
      )

      migrated += chunkResults.filter((result) => result.success).length
      failures.push(...chunkResults.filter((result) => !result.success))
    }

    return {
      attempted: migrationBatch.candidates.length,
      failures,
      migrated,
      remainingBeforeBatch: migrationBatch.total,
    }
  },
})

export const saveStudentIdUploads = mutation({
  args: {
    studentId: v.string(),
    schoolYear: v.optional(v.string()),
    frontIdStorageId: v.optional(v.id('_storage')),
    frontIdUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const studentId = args.studentId.trim().toLowerCase()

    if (!studentId) {
      throw new Error('Student ID is required.')
    }

    if (!args.frontIdUrl && !args.frontIdStorageId) {
      throw new Error('Upload a Front ID file before saving.')
    }

    if (args.frontIdUrl) {
      try {
        const fileUrl = new URL(args.frontIdUrl)
        if (fileUrl.protocol !== 'https:' || fileUrl.hostname !== 'drive.google.com') {
          throw new Error()
        }
      } catch {
        throw new Error('The School ID PDF must be uploaded to the configured Google Drive folder.')
      }
    }

    const matchingRecords = await ctx.db
      .query('allinfo')
      .withIndex('by_student_id', (queryBuilder) => queryBuilder.eq('studentId', args.studentId.trim()))
      .collect()

    const targetRecord = findTargetStudentRecord(matchingRecords, args.schoolYear)

    if (!targetRecord) {
      throw new Error('No allinfo record was found for this Student ID.')
    }

    await ctx.db.patch(targetRecord._id, {
      ...(args.frontIdStorageId ? { frontIdStorageId: args.frontIdStorageId } : {}),
      ...(args.frontIdUrl ? { frontIdUrl: args.frontIdUrl } : {}),
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

export const listSchoolIdFilesByBatch = internalQuery({
  args: {
    batchId: v.string(),
    schoolYear: v.string(),
  },
  handler: async (ctx, args) => {
    const records = await ctx.db
      .query('allinfo')
      .withIndex('by_school_year_batch', (queryBuilder) =>
        queryBuilder.eq('schoolYear', args.schoolYear).eq('batchId', args.batchId),
      )
      .collect()

    return records
      .filter((record) => String(record.frontIdUrl ?? '').startsWith('https://drive.google.com/'))
      .map((record) => ({
        fileId: getGoogleDriveFileId(record.frontIdUrl),
        id: record._id,
        studentId: record.studentId,
      }))
      .filter((record) => record.fileId)
  },
})

export const clearSchoolIdFilesByBatch = internalMutation({
  args: {
    ids: v.array(v.id('allinfo')),
  },
  handler: async (ctx, args) => {
    for (const id of args.ids) {
      await ctx.db.patch(id, {
        frontIdStorageId: undefined,
        frontIdUrl: undefined,
        idFilesUploadedAt: undefined,
      })
    }

    return args.ids.length
  },
})

export const deleteSchoolIdFilesByBatch = action({
  args: {
    batchId: v.string(),
    schoolYear: v.string(),
  },
  handler: async (ctx, args) => {
    const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
    const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET

    if (!appsScriptUrl || !uploadSecret) {
      throw new Error('Google Drive deletion is not configured.')
    }

    const files = await ctx.runQuery(internal.allinfo.listSchoolIdFilesByBatch, {
      batchId: args.batchId.trim(),
      schoolYear: args.schoolYear.trim(),
    })

    if (files.length === 0) {
      return { deleted: 0 }
    }

    const googleResponse = await fetch(appsScriptUrl, {
      body: JSON.stringify({
        destination: 'students',
        fileIds: files.map((file) => file.fileId),
        operation: 'delete',
        secret: uploadSecret,
      }),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      method: 'POST',
    })
    const googleResult = await googleResponse.json().catch(() => null)

    if (!googleResponse.ok || !googleResult?.success) {
      throw new Error(googleResult?.message || 'Google Drive rejected the batch deletion.')
    }

    const deleted = await ctx.runMutation(internal.allinfo.clearSchoolIdFilesByBatch, {
      ids: files.map((file) => file.id),
    })

    await ctx.runMutation(internal.activityLogs.createSystemLog, {
      action: 'student_id_batch_deleted',
      summary: `Deleted ${deleted} School ID file${deleted === 1 ? '' : 's'} for School Year ${args.schoolYear}, Batch ${args.batchId}.`,
      targetLabel: `${args.schoolYear} / Batch ${args.batchId}`,
      targetType: 'allinfo',
    })

    return { deleted }
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
