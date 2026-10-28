import { internal } from './_generated/api'
import { action, internalMutation, internalQuery, mutation, query } from './_generated/server'
import { v } from 'convex/values'

const restorableTables = new Set([
  'activityLogs',
  'admins',
  'allinfo',
  'applicants',
  'quickActions',
  'supportConversations',
])

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('archive').withIndex('by_deletedAt').order('desc').collect()
  },
})

export const restore = mutation({
  args: { id: v.id('archive') },
  handler: async (ctx, args) => {
    const archived = await ctx.db.get(args.id)
    if (!archived) throw new Error('This archive entry no longer exists.')
    if (!restorableTables.has(archived.sourceTable)) {
      throw new Error('This archived table cannot be restored.')
    }

    if (archived.sourceTable === 'supportConversations' && archived.deletionKind === 'record') {
      const { messages = [], ...conversationData } = archived.data
      const activeConversations = await ctx.db.query('supportConversations').collect()
      let alreadyRestored = false
      for (const candidate of activeConversations) {
        if (
          candidate.studentId !== conversationData.studentId ||
          candidate.email !== conversationData.email ||
          candidate.source !== conversationData.source ||
          candidate.createdAt !== conversationData.createdAt
        ) continue
        const candidateMessage = await ctx.db.query('supportMessages')
          .withIndex('by_conversation', (q) => q.eq('conversationId', candidate._id)).first()
        const archivedQuestion = messages.find((message) => message.senderRole === 'student')
        if (candidateMessage?.content === archivedQuestion?.content) {
          alreadyRestored = true
          break
        }
      }

      if (!alreadyRestored) {
        const conversationId = await ctx.db.insert('supportConversations', conversationData)
        for (const message of messages) {
          const { conversationId: oldConversationId, clientMessageId, ...messageData } = message
          void oldConversationId
          void clientMessageId
          await ctx.db.insert('supportMessages', { ...messageData, conversationId })
        }
      }
    } else if (archived.deletionKind === 'fields') {
      const targetId = ctx.db.normalizeId(archived.sourceTable, archived.sourceId)
      const target = targetId ? await ctx.db.get(targetId) : null
      if (!targetId || !target) {
        throw new Error('The original record no longer exists, so its file fields cannot be restored.')
      }

      await ctx.db.patch(targetId, archived.data)
    } else {
      await ctx.db.insert(archived.sourceTable, archived.data)
    }

    await ctx.db.delete(args.id)
    await ctx.db.insert('activityLogs', {
      action: 'archive_restored',
      actorRole: 'admin',
      summary: `Restored ${archived.sourceLabel || archived.sourceTable} from the archive.`,
      targetLabel: archived.sourceLabel,
      targetType: archived.sourceTable,
      createdAt: Date.now(),
    })

    return { success: true }
  },
})

export const getById = internalQuery({
  args: { id: v.id('archive') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})

export const removeRecord = internalMutation({
  args: { id: v.id('archive') },
  handler: async (ctx, args) => {
    const archived = await ctx.db.get(args.id)
    if (!archived) return { success: false }

    await ctx.db.delete(args.id)
    await ctx.db.insert('activityLogs', {
      action: 'archive_permanently_deleted',
      actorRole: 'admin',
      summary: `Permanently deleted ${archived.sourceLabel || archived.sourceTable} from the archive.`,
      targetLabel: archived.sourceLabel,
      targetType: archived.sourceTable,
      createdAt: Date.now(),
    })

    return { success: true }
  },
})

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

async function deleteDriveFiles(appsScriptUrl, uploadSecret, destination, fileIds) {
  if (fileIds.length === 0) return

  const response = await fetch(appsScriptUrl, {
    body: JSON.stringify({ destination, fileIds, operation: 'delete', secret: uploadSecret }),
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    method: 'POST',
  })
  const result = await response.json().catch(() => null)

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Google Drive rejected permanent file deletion.')
  }
}

export const remove = action({
  args: { id: v.id('archive') },
  handler: async (ctx, args) => {
    const archived = await ctx.runQuery(internal.archive.getById, { id: args.id })
    if (!archived) throw new Error('This archive entry no longer exists.')

    const driveGroups = []
    if (archived.sourceTable === 'allinfo') {
      driveGroups.push({
        destination: 'students',
        urls: [archived.data.frontIdUrl],
      })
    } else if (archived.sourceTable === 'applicants') {
      driveGroups.push({
        destination: 'applicants',
        urls: [
          archived.data.psaFileUrl,
          archived.data.schoolIdFileUrl,
          archived.data.corFileUrl,
          archived.data.pwdIdFileUrl,
          archived.data.fourPsFileUrl,
        ],
      })
    }

    const groupsWithFiles = driveGroups
      .map((group) => ({
        destination: group.destination,
        fileIds: group.urls.map(getGoogleDriveFileId).filter(Boolean),
      }))
      .filter((group) => group.fileIds.length > 0)

    if (groupsWithFiles.length > 0) {
      const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
      const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET
      if (!appsScriptUrl || !uploadSecret) {
        throw new Error('Google Drive deletion is not configured.')
      }

      for (const group of groupsWithFiles) {
        await deleteDriveFiles(appsScriptUrl, uploadSecret, group.destination, group.fileIds)
      }
    }

    return await ctx.runMutation(internal.archive.removeRecord, { id: args.id })
  },
})
