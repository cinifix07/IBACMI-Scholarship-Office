import { internalMutation, mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('activityLogs').withIndex('by_createdAt').order('desc').take(200)
  },
})

export const clearAll = mutation({
  args: {},
  handler: async (ctx) => {
    const logs = await ctx.db.query('activityLogs').collect()

    await Promise.all(logs.map((log) => ctx.db.delete(log._id)))

    return {
      deletedCount: logs.length,
    }
  },
})

export const createSystemLog = internalMutation({
  args: {
    action: v.string(),
    summary: v.string(),
    targetLabel: v.optional(v.string()),
    targetType: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('activityLogs', {
      action: args.action,
      actorRole: 'system',
      summary: args.summary,
      targetLabel: args.targetLabel,
      targetType: args.targetType,
      createdAt: Date.now(),
    })
  },
})
