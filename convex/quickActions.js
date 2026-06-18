import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

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
    return await ctx.db
      .query('quickActions')
      .withIndex('by_submittedAt')
      .order('desc')
      .collect()
  },
})

export const create = mutation({
  args: {
    email: v.string(),
    studentId: v.string(),
    lastName: v.string(),
    firstName: v.string(),
    middleInitial: v.optional(v.string()),
    question: v.string(),
    source: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase()
    const studentId = args.studentId.trim()
    const lastName = args.lastName.trim()
    const firstName = args.firstName.trim()
    const middleInitial = args.middleInitial?.trim() ?? ''
    const question = args.question.replace(/\s+/g, ' ').trim()

    if (!email || !studentId || !lastName || !firstName || !question) {
      throw new Error('Email, student identity, and question are required.')
    }

    if (question.length > 500) {
      throw new Error('The question must be 500 characters or fewer.')
    }

    const quickActionId = await ctx.db.insert('quickActions', {
      email,
      studentId,
      lastName,
      firstName,
      middleInitial,
      question,
      source: args.source,
      status: args.status,
      submittedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'quick_action_created',
      actorRole: 'visitor',
      actorId: studentId,
      actorName: `${firstName} ${lastName}`,
      targetType: 'quickActions',
      targetId: String(quickActionId),
      targetLabel: args.source,
      summary: `Quick Action submitted by ${firstName} ${lastName} (${studentId}).`,
    })

    return quickActionId
  },
})

export const clearAll = mutation({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query('quickActions').collect()

    await Promise.all(messages.map((message) => ctx.db.delete(message._id)))

    if (messages.length > 0) {
      await logActivity(ctx, {
        action: 'quick_actions_cleared',
        actorRole: 'admin',
        targetType: 'quickActions',
        targetLabel: 'Quick Actions',
        summary: `Cleared all ${messages.length} Quick Action message${messages.length === 1 ? '' : 's'}.`,
      })
    }

    return {
      deletedCount: messages.length,
    }
  },
})
