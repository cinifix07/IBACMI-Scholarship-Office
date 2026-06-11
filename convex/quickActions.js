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
    question: v.string(),
    source: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase()
    const question = args.question.trim()

    if (!email || !question) {
      throw new Error('Email and question are required.')
    }

    const quickActionId = await ctx.db.insert('quickActions', {
      email,
      question,
      source: args.source,
      status: args.status,
      submittedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'quick_action_created',
      actorRole: 'visitor',
      actorId: email,
      actorName: email,
      targetType: 'quickActions',
      targetId: String(quickActionId),
      targetLabel: args.source,
      summary: `Quick Action submitted by ${email}.`,
    })

    return quickActionId
  },
})
