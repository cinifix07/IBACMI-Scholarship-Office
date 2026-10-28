import { ConvexError, v } from 'convex/values'
import { query, internalQuery, internalMutation } from './_generated/server'
import { internal } from './_generated/api'
import { requireAdmin } from './billing'
import { cleanValidationText } from './validationRules'
import { snapshotVersion } from './noIdRules'

export async function validationScope(ctx, { schoolYear, batches }) {
  if (!schoolYear || schoolYear.length > 100 || !batches.length || batches.length > 2000 || batches.some(batch => !batch || batch.length > 200)) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const records = (await ctx.db.query('allinfo').collect()).filter(record => cleanValidationText(record.schoolYear) === schoolYear && !/applicant/i.test(record.status || ''))
  const available = [...new Set(records.map(record => cleanValidationText(record.batchId)).filter(Boolean))]
  const selected = [...new Set(batches)]
  if (selected.some(batch => !available.includes(batch))) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const scoped = records.filter(record => selected.includes(cleanValidationText(record.batchId))).map(record => ({ _id: record._id, studentId: record.studentId, batchId: record.batchId, schoolYear, ...(record.lastName !== undefined ? { lastName: record.lastName } : {}), ...(record.firstName !== undefined ? { firstName: record.firstName } : {}), ...(record.middleInitial !== undefined ? { middleInitial: record.middleInitial } : {}), ...(record.middleName !== undefined ? { middleName: record.middleName } : {}), ...(record.extensionName !== undefined ? { extensionName: record.extensionName } : {}) }))
  return { records: scoped, sourceVersion: snapshotVersion(scoped), batches: selected, allBatches: selected.length === available.length }
}
export const options = query({ args: { sessionToken: v.string() }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  const years = new Map()
  for (const record of await ctx.db.query('allinfo').collect()) {
    const year = cleanValidationText(record.schoolYear), batch = cleanValidationText(record.batchId)
    if (!year || !batch || /applicant/i.test(record.status || '')) continue
    if (!years.has(year)) years.set(year, new Map())
    const counts = years.get(year); counts.set(batch, (counts.get(batch) || 0) + 1)
  }
  return [...years].sort(([a], [b]) => b.localeCompare(a)).map(([schoolYear, batches]) => ({ schoolYear, batches: [...batches].sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })).map(([id, count]) => ({ id, count })) }))
} })
export const source = internalQuery({ args: { sessionToken: v.string(), schoolYear: v.string(), batches: v.array(v.string()) }, handler: async (ctx, args) => { await requireAdmin(ctx, args.sessionToken); return validationScope(ctx, args) } })
export const save = internalMutation({ args: { sessionToken: v.string(), schoolYear: v.string(), batches: v.array(v.string()), filename: v.string(), summary: v.any(), warnings: v.array(v.string()), sourceVersion: v.string(), resultsStorageId: v.id('_storage'), allBatches: v.boolean() }, handler: async (ctx, { sessionToken, ...values }) => {
  const admin = await requireAdmin(ctx, sessionToken), scope = await validationScope(ctx, values)
  if (scope.sourceVersion !== values.sourceVersion) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const now = Date.now(), runId = await ctx.db.insert('validationRuns', { ...values, adminId: admin._id, uploadedBy: admin.name || 'Administrator', createdAt: now, resultExpiresAt: now + 30 * 86400000, metadataExpiresAt: now + 365 * 86400000, status: 'COMPLETED' })
  await ctx.db.insert('activityLogs', { action: 'student_validation_completed', actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, targetType: 'validation', targetId: String(runId), summary: `Validated ${values.summary.uploaded} uploaded rows against ${values.summary.official} official records for ${values.schoolYear}, ${values.batches.length} batches.`, createdAt: now })
  await ctx.scheduler.runAfter(30 * 86400000, internal.validation.expireResults, { runId })
  await ctx.scheduler.runAfter(365 * 86400000, internal.validation.expireMetadata, { runId })
  return runId
} })
export const history = query({ args: { sessionToken: v.string(), search: v.optional(v.string()) }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  const search = (args.search || '').trim().toLowerCase().slice(0, 200)
  return (await ctx.db.query('validationRuns').withIndex('by_created').order('desc').collect()).filter(run => run.metadataExpiresAt > Date.now() && (!search || [run._id, run.filename, run.schoolYear, run.batches.join(' '), run.uploadedBy].join(' ').toLowerCase().includes(search))).slice(0, 200).map(({ resultsStorageId, ...run }) => ({ ...run, retained: Boolean(resultsStorageId && run.resultExpiresAt > Date.now()) }))
} })
export const retained = internalQuery({ args: { sessionToken: v.string(), runId: v.id('validationRuns') }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  const run = await ctx.db.get(args.runId)
  if (!run || !run.resultsStorageId || run.resultExpiresAt <= Date.now()) throw new ConvexError({ code: 'INVALID_REQUEST' })
  return run
} })
export const logDownload = internalMutation({ args: { sessionToken: v.string(), runId: v.id('validationRuns') }, handler: async (ctx, args) => {
  const admin = await requireAdmin(ctx, args.sessionToken)
  const run = await ctx.db.get(args.runId)
  if (!run || !run.resultsStorageId || run.resultExpiresAt <= Date.now()) throw new ConvexError({ code: 'INVALID_REQUEST' })
  await ctx.db.insert('activityLogs', { action: 'validation_report_download_prepared', actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, targetType: 'validation', targetId: String(args.runId), summary: `Prepared validation report for ${run.schoolYear}, ${run.batches.length} batches.`, createdAt: Date.now() })
} })
export const expireResults = internalMutation({ args: { runId: v.id('validationRuns') }, handler: async (ctx, args) => {
  const run = await ctx.db.get(args.runId)
  if (run?.resultsStorageId && run.resultExpiresAt <= Date.now()) { await ctx.storage.delete(run.resultsStorageId); await ctx.db.patch(args.runId, { resultsStorageId: undefined }) }
} })
export const expireMetadata = internalMutation({ args: { runId: v.id('validationRuns') }, handler: async (ctx, args) => {
  const run = await ctx.db.get(args.runId)
  if (run && run.metadataExpiresAt <= Date.now()) { if (run.resultsStorageId) await ctx.storage.delete(run.resultsStorageId); await ctx.db.delete(args.runId) }
} })
