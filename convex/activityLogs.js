import { mutation, query } from './_generated/server'

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
