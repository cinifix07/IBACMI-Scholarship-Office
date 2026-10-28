import { ConvexError, v } from 'convex/values'
import { action, mutation, query, internalQuery, internalMutation, internalAction } from './_generated/server'
import { internal } from './_generated/api'
import { requireAdmin } from './billing'
import { buildNoIdReport, driveId, identity, isOfficial, matchesNoIdSearch, noIdFilename, snapshotSignature, snapshotVersion, text } from './noIdRules'

export const options = query({ args: { sessionToken: v.string() }, handler: async (ctx, { sessionToken }) => {
  await requireAdmin(ctx, sessionToken)
  const records = (await ctx.db.query('allinfo').collect()).filter(isOfficial)
  // Reactive revision detects file/identity changes without exposing those references to the client.
  let revision = 2166136261
  for (const character of JSON.stringify(records)) revision = Math.imul(revision ^ character.charCodeAt(0), 16777619) >>> 0
  return { years: [...new Set(records.map(record => text(record.schoolYear)))].sort().reverse(), revision }
} })

async function readSnapshot(ctx, schoolYear) {
  const records = await ctx.db.query('allinfo').collect()
  const accounts = new Map((await ctx.db.query('admins').collect()).filter(account => account.role === 'student').map(account => [String(account._id), account]))
  for (const submission of await ctx.db.query('studentProfileSubmissions').collect()) {
    const account = accounts.get(String(submission.accountId))
    const owner = account && identity({ studentId: account.schoolId, schoolYear: submission.schoolYear })
    const linked = records.find(record => isOfficial(record) && identity(record) === owner)
    if (linked && (submission.schoolIdUrl || submission.schoolIdStorageId)) records.push({ ...linked, _id: `submission:${submission._id}`, frontIdUrl: submission.schoolIdUrl || '', frontIdStorageId: submission.schoolIdStorageId || null })
  }
  if (!schoolYear || schoolYear.length > 100 || !records.some(record => isOfficial(record) && text(record.schoolYear) === schoolYear)) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const checks = {}
  const ids = [...new Set(records.filter(record => text(record.schoolYear) === schoolYear).map(record => record.frontIdStorageId).filter(Boolean))]
  for (const id of ids) {
    const metadata = await ctx.db.system.get('_storage', id)
    checks[`storage:${id}`] = { state: metadata && metadata.size > 0 && (!metadata.contentType || metadata.contentType === 'application/pdf') ? 'valid' : 'missing' }
  }
  return { records, checks }
}
export const snapshot = internalQuery({ args: { sessionToken: v.string(), schoolYear: v.string() }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  return readSnapshot(ctx, args.schoolYear)
} })

// Restricted CLI diagnostics return aggregate counts only; no browser authentication bypass.
export const diagnosticSnapshot = internalQuery({ args: { schoolYear: v.string() }, handler: (ctx, args) => readSnapshot(ctx, args.schoolYear) })
const jobLifetime = 30 * 60 * 1000
async function createJob(ctx, schoolYear, adminId) {
  const snapshot = await readSnapshot(ctx, schoolYear)
  const ids = [...new Set(snapshot.records.filter(record => isOfficial(record) && text(record.schoolYear) === schoolYear).map(record => driveId(record.frontIdUrl)).filter(Boolean))]
  const now = Date.now()
  const jobId = await ctx.db.insert('noIdJobs', { ...(adminId ? { adminId } : {}), schoolYear, signature: snapshotVersion(snapshot), ids, checks: snapshot.checks, state: ids.length ? 'running' : 'complete', createdAt: now, updatedAt: now, expiresAt: now + jobLifetime })
  if (ids.length) await ctx.scheduler.runAfter(0, internal.noIdList.verifyJob, { jobId })
  await ctx.scheduler.runAfter(jobLifetime, internal.noIdList.cleanupJob, { jobId })
  return jobId
}
export const start = mutation({ args: { sessionToken: v.string(), schoolYear: v.string() }, handler: async (ctx, args) => {
  const admin = await requireAdmin(ctx, args.sessionToken)
  return { jobId: await createJob(ctx, args.schoolYear, admin._id) }
} })
async function ownedJob(ctx, sessionToken, jobId) {
  const admin = await requireAdmin(ctx, sessionToken), job = await ctx.db.get(jobId)
  if (!job || String(job.adminId) !== String(admin._id) || job.expiresAt <= Date.now()) throw new ConvexError({ code: 'INVALID_REQUEST' })
  return job
}
export const progress = query({ args: { sessionToken: v.string(), jobId: v.id('noIdJobs') }, handler: async (ctx, args) => {
  const job = await ownedJob(ctx, args.sessionToken, args.jobId), snapshot = await readSnapshot(ctx, job.schoolYear)
  if (snapshotVersion(snapshot) !== job.signature) return { state: 'stale', checked: 0, total: job.ids.length, report: null }
  const checks = { ...job.checks, ...snapshot.checks }
  const report = buildNoIdReport(snapshot.records, job.schoolYear, checks, { allowPending: true })
  const pending = report.batches.reduce((sum, batch) => sum + batch.pending, 0)
  return { state: job.state === 'complete' && pending ? 'failed' : job.state, checked: job.ids.filter(id => checks[`drive:${id}`]).length, total: job.ids.length, report: { ...report, checkedAt: job.updatedAt } }
} })
export const loadJob = internalQuery({ args: { jobId: v.id('noIdJobs') }, handler: (ctx, args) => ctx.db.get(args.jobId) })
export const saveChecks = internalMutation({ args: { jobId: v.id('noIdJobs'), checks: v.any(), failed: v.optional(v.boolean()) }, handler: async (ctx, args) => {
  const job = await ctx.db.get(args.jobId)
  if (!job || job.state !== 'running' || job.expiresAt <= Date.now()) return false
  const checks = { ...job.checks, ...args.checks }
  const done = job.ids.every(id => checks[`drive:${id}`])
  const unknown = job.ids.some(id => checks[`drive:${id}`]?.state === 'unknown')
  await ctx.db.patch(args.jobId, { checks, updatedAt: Date.now(), state: args.failed ? 'failed' : done ? unknown ? 'failed' : 'complete' : 'running' })
  return !done && !args.failed
} })
export const verifyJob = internalAction({ args: { jobId: v.id('noIdJobs') }, handler: async (ctx, { jobId }) => {
  const job = await ctx.runQuery(internal.noIdList.loadJob, { jobId })
  if (!job || job.state !== 'running') return
  // Four small requests run concurrently; no single request holds hundreds of files.
  let cursor = 0
  await Promise.all(Array.from({ length: Math.min(4, Math.ceil(job.ids.length / 4)) }, async () => {
    while (cursor < job.ids.length) {
      const offset = cursor; cursor += 4
      try {
        const checks = await inspectDrive(job.ids.slice(offset, offset + 4))
        if (!await ctx.runMutation(internal.noIdList.saveChecks, { jobId, checks })) return
      } catch {
        await ctx.runMutation(internal.noIdList.saveChecks, { jobId, checks: {}, failed: true })
        return
      }
    }
  }))
} })
export const cleanupJob = internalMutation({ args: { jobId: v.id('noIdJobs') }, handler: async (ctx, args) => {
  const job = await ctx.db.get(args.jobId)
  if (job && job.expiresAt <= Date.now()) await ctx.db.delete(args.jobId)
} })
export const diagnosticStart = internalMutation({ args: { schoolYear: v.string() }, handler: async (ctx, args) => ({ jobId: await createJob(ctx, args.schoolYear) }) })
export const diagnosticProgress = internalQuery({ args: { jobId: v.id('noIdJobs') }, handler: async (ctx, args) => {
  const job = await ctx.db.get(args.jobId)
  if (!job) return { state: 'expired' }
  const snapshot = await readSnapshot(ctx, job.schoolYear)
  const report = buildNoIdReport(snapshot.records, job.schoolYear, { ...job.checks, ...snapshot.checks }, { allowPending: true })
  return { state: job.state, checked: job.ids.filter(id => job.checks[`drive:${id}`]).length, total: job.ids.length, unknownFiles: Object.values(job.checks).filter(check => check.state === 'unknown').length, missing: report.rows.length, pending: report.batches.reduce((sum, batch) => sum + batch.pending, 0), elapsedMs: Date.now() - job.createdAt }
} })
export const diagnose = internalAction({ args: { schoolYear: v.string(), verify: v.optional(v.boolean()) }, handler: async (ctx, { schoolYear, verify }) => {
  const started = Date.now(), { records, checks } = await ctx.runQuery(internal.noIdList.diagnosticSnapshot, { schoolYear })
  const rows = records.filter(record => isOfficial(record) && text(record.schoolYear) === schoolYear)
  const ids = [...new Set(rows.map(record => driveId(record.frontIdUrl)).filter(Boolean))]
  const summary = { sourceRows: rows.length, driveFiles: ids.length, legacyFiles: Object.keys(checks).length }
  if (verify) {
    try {
      Object.assign(checks, await inspectDrive(ids))
      const report = buildNoIdReport(records, schoolYear, checks)
      summary.missing = report.rows.length
      summary.grantees = report.batches.reduce((sum, batch) => sum + batch.total, 0)
      summary.unknownFiles = Object.values(checks).filter(check => check.state === 'unknown').length
    } catch { summary.verificationFailed = true }
  }
  return { ...summary, elapsedMs: Date.now() - started }
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
export const completedReport = internalQuery({ args: { ...args, jobId: v.id('noIdJobs') }, handler: async (ctx, { sessionToken, schoolYear, jobId }) => {
  const job = await ownedJob(ctx, sessionToken, jobId), snapshot = await readSnapshot(ctx, schoolYear)
  if (job.schoolYear !== schoolYear || job.state !== 'complete' || snapshotVersion(snapshot) !== job.signature) throw new ConvexError({ code: 'INVALID_REQUEST' })
  return buildNoIdReport(snapshot.records, schoolYear, { ...job.checks, ...snapshot.checks })
} })
export const prepare = action({ args: { ...args, batches: v.array(v.string()), search: v.optional(v.string()), jobId: v.optional(v.id('noIdJobs')) }, handler: async (ctx, { batches, search = '', jobId, ...selection }) => {
  if (search.length > 200) throw new ConvexError({ code: 'INVALID_REQUEST' })
  if (!batches.length || batches.length > 2000 || batches.some(batch => !text(batch) || batch.length > 200)) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const report = jobId ? await ctx.runQuery(internal.noIdList.completedReport, { ...selection, jobId }) : await checkedReport(ctx, selection)
  const selected = [...new Set(batches)]
  if (selected.some(id => !report.batches.some(batch => batch.id === id))) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const rows = report.rows.filter(row => selected.includes(row.batchId) && matchesNoIdSearch(row, search))
  if (!rows.length) throw new ConvexError({ code: 'INVALID_REQUEST' })
  const filename = noIdFilename(selection.schoolYear, selected, selected.length === report.batches.length)
  await ctx.runMutation(internal.noIdList.logExport, { ...selection, filename, count: rows.length, batchCount: selected.length })
  return { rows, schoolYear: selection.schoolYear, batches: selected, filename, generatedAt: Date.now() }
} })
