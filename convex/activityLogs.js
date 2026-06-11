import { query } from './_generated/server'

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('activityLogs').withIndex('by_createdAt').order('desc').take(200)
  },
})
