import { ConvexError, v } from 'convex/values'
import { action, query, internalQuery, internalMutation, internalAction } from './_generated/server'
import { internal } from './_generated/api'
import { requireAdmin } from './billing'
import { buildNoIdReport, driveId, identity, isOfficial, matchesNoIdSearch, noIdFilename, snapshotSignature, text } from './noIdRules'

export const options = query({ args: { sessionToken: v.string() }, handler: async (ctx, { sessionToken }) => {
  await requireAdmin(ctx, sessionToken)
  const records = (await ctx.db.query('allinfo').collect()).filter(isOfficial)
  // Reactive revision detects file/identity changes without exposing those references to the client.
  let revision = 2166136261
  for (const character of JSON.stringify(records)) revision = Math.imul(revision ^ character.charCodeAt(0), 16777619) >>> 0
  return { years: [...new Set(records.map(record => text(record.schoolYear)))].sort().reverse(), revision }
} })

export const snapshot = internalQuery({ args: { sessionToken: v.string(), schoolYear: v.string() }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  const records = await ctx.db.query('allinfo').collect()
  const accounts = new Map((await ctx.db.query('admins').collect()).filter(account => account.role === 'student').map(account => [String(account._id), account]))
  for (const submission of await ctx.db.query('studentProfileSubmissions').collect()) {
    const account = accounts.get(String(submission.accountId))
    const owner = account && identity({ studentId: account.schoolId, schoolYear: submission.schoolYear })
    const linked = records.find(record => isOfficial(record) && identity(record) === owner)
    if (linked && (submission.schoolIdUrl || submission.schoolIdStorageId)) records.push({ ...linked, _id: `submission:${submission._id}`, frontIdUrl: submission.schoolIdUrl || '', frontIdStorageId: submission.schoolIdStorageId || null })
  }
  if (!args.schoolYear || args.schoolYear.length > 100 || !records.some(record => isOfficial(record) && text(record.schoolYear) === args.schoolYear)) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const checks = {}
  const ids = [...new Set(records.filter(record => text(record.schoolYear) === args.schoolYear).map(record => record.frontIdStorageId).filter(Boolean))]
  for (const id of ids) {
    const metadata = await ctx.db.system.get('_storage', id)
    checks[`storage:${id}`] = { state: metadata && metadata.size > 0 && (!metadata.contentType || metadata.contentType === 'application/pdf') ? 'valid' : 'missing' }
  }
  return { records, checks }
} })

async function inspectDrive(ids) {
  if (!ids.length) return {}
  const url = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL, secret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET
  if (!url || !secret) throw new Error('School ID verification is temporarily unavailable.')
  const checks = {}
  for (let offset = 0; offset < ids.length; offset += 40) {
    const chunk = ids.slice(offset, offset + 40)
    let response = await fetch(url, { method: 'POST', redirect: 'manual', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ operation: 'inspect', destination: 'students', fileIds: chunk, secret }), signal: AbortSignal.timeout(45000) })
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location')
      if (!location || new URL(location).hostname !== 'script.googleusercontent.com') throw new Error('School ID verification is temporarily unavailable.')
      response = await fetch(location, { signal: AbortSignal.timeout(45000) })
    }
    const result = await response.json()
    if (!response.ok || !result?.success || !Array.isArray(result.files)) throw new Error('School ID verification is temporarily unavailable.')
    for (const file of result.files) if (chunk.includes(file.id)) checks[`drive:${file.id}`] = { state: ['valid', 'missing'].includes(file.state) ? file.state : 'unknown', name: file.name || '', year: file.year || '', studentId: file.studentId || '' }
  }
  return checks
}

async function checkedReport(ctx, args) {
  const { records, checks } = await ctx.runQuery(internal.noIdList.snapshot, args)
  const originalSignature = snapshotSignature({ records, checks })
  const ids = [...new Set(records.filter(record => isOfficial(record) && text(record.schoolYear) === args.schoolYear).map(record => driveId(record.frontIdUrl)).filter(Boolean))]
  Object.assign(checks, await inspectDrive(ids))
  // Revalidate the session after external verification, before returning any student information.
  const latest = await ctx.runQuery(internal.noIdList.snapshot, args)
  if (snapshotSignature(latest) !== originalSignature) throw new ConvexError({ code: 'INVALID_REQUEST' })
  return { ...buildNoIdReport(records, args.schoolYear, checks), checkedAt: Date.now() }
}
// CLI-only connectivity probe: verifies the configured bridge without looking up a student.
export const checkBridge = internalAction({ args: {}, handler: async () => {
  const checks = await inspectDrive(['no-id-verification-probe'])
  return { ok: Boolean(checks['drive:no-id-verification-probe']) }
} })
const args = { sessionToken: v.string(), schoolYear: v.string() }
export const inspect = action({ args, handler: checkedReport })
export const logExport = internalMutation({ args: { ...args, filename: v.string(), count: v.number(), batchCount: v.number() }, handler: async (ctx, values) => {
  const admin = await requireAdmin(ctx, values.sessionToken)
  await ctx.db.insert('activityLogs', { actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, action: 'no_id_list_export_prepared', targetType: 'school_id_report', targetLabel: values.filename, summary: `Prepared missing School ID report for ${values.schoolYear}: ${values.batchCount} batches, ${values.count} records.`, createdAt: Date.now() })
} })
export const prepare = action({ args: { ...args, batches: v.array(v.string()), search: v.optional(v.string()) }, handler: async (ctx, { batches, search = '', ...selection }) => {
  if (search.length > 200) throw new ConvexError({ code: 'INVALID_REQUEST' })
  if (!batches.length || batches.length > 2000 || batches.some(batch => !text(batch) || batch.length > 200)) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const report = await checkedReport(ctx, selection), selected = [...new Set(batches)]
  if (selected.some(id => !report.batches.some(batch => batch.id === id))) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const rows = report.rows.filter(row => selected.includes(row.batchId) && matchesNoIdSearch(row, search))
  if (!rows.length) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const filename = noIdFilename(selection.schoolYear, selected, selected.length === report.batches.length)
  await ctx.runMutation(internal.noIdList.logExport, { ...selection, filename, count: rows.length, batchCount: selected.length })
  return { rows, schoolYear: selection.schoolYear, batches: selected, filename, generatedAt: Date.now() }
} })
