import { ConvexError, v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { requireAdmin } from './billing'
import { batchCsvRows, batchFilename, cleanBatchValue, uniqueBatchRecords } from './batchExportRules'

export const options = query({
  args: { sessionToken: v.string() },
  handler: async (ctx, { sessionToken }) => {
    await requireAdmin(ctx, sessionToken)
    const years = new Map()
    for (const record of uniqueBatchRecords(await ctx.db.query('allinfo').collect())) {
      const year = cleanBatchValue(record.schoolYear), batch = cleanBatchValue(record.batchId)
      if (!year || !batch) continue
      if (!years.has(year)) years.set(year, new Map())
      const counts = years.get(year)
      counts.set(batch, (counts.get(batch) || 0) + 1)
    }
    return [...years].sort(([a], [b]) => b.localeCompare(a, 'en', { numeric: true })).map(([schoolYear, batches]) => ({ schoolYear, batches: [...batches].sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })).map(([id, count]) => ({ id, count })) }))
  },
})

export const prepare = mutation({
  args: { sessionToken: v.string(), schoolYear: v.string(), batches: v.array(v.string()) },
  handler: async (ctx, { sessionToken, schoolYear, batches }) => {
    const admin = await requireAdmin(ctx, sessionToken)
    if (!schoolYear.trim() || schoolYear.length > 100 || !batches.length || batches.length > 2000 || batches.some(batch => !batch.trim() || batch.length > 200)) throw new ConvexError({ code: 'INVALID_REQUEST' })
    const selected = new Set(batches.map(cleanBatchValue))
    // Trim legacy labels consistently with the existing dashboard, without changing stored values.
    const yearRecords = (await ctx.db.query('allinfo').collect()).filter(record => cleanBatchValue(record.schoolYear) === schoolYear)
    const available = new Set(yearRecords.map(record => cleanBatchValue(record.batchId)).filter(Boolean))
    if ([...selected].some(batch => !available.has(batch))) throw new ConvexError({ code: 'INVALID_REQUEST' })
    const records = uniqueBatchRecords(yearRecords.filter(record => selected.has(cleanBatchValue(record.batchId))))
    if (!records.length) throw new ConvexError({ code: 'INVALID_REQUEST' })
    const rows = batchCsvRows(records, await ctx.db.query('admins').collect())
    const filename = batchFilename(schoolYear, [...selected], selected.size === available.size)
    await ctx.db.insert('activityLogs', { action: 'grantee_batch_export_prepared', actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, targetType: 'grantee_export', targetLabel: filename, summary: `Prepared CSV export for School Year ${schoolYear}: ${selected.size} batches, ${records.length} records.`, createdAt: Date.now() })
    return { rows, filename, count: records.length }
  },
})
