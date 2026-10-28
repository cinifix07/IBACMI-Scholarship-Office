"use node";
import { action } from './_generated/server'
import { Buffer } from 'node:buffer'
import { v } from 'convex/values'
import { internal } from './_generated/api'
import { parseValidationFile, ValidationFileError } from './validationParser'
import { compareValidation, validationFilename } from './validationRules'

export const run = action({ args: { sessionToken: v.string(), schoolYear: v.string(), batches: v.array(v.string()), filename: v.string(), bytes: v.bytes() }, handler: async (ctx, args) => {
  const scope = await ctx.runQuery(internal.validation.source, { sessionToken: args.sessionToken, schoolYear: args.schoolYear, batches: args.batches })
  if (args.filename.length > 180 || [...args.filename].some(character => character.charCodeAt(0) < 32 || ['\\', '/'].includes(character))) return { ok: false, message: 'Use a filename no longer than 180 characters without path separators.' }
  let parsed
  try { parsed = await parseValidationFile(args.bytes, args.filename) } catch (error) { if (error instanceof ValidationFileError) return { ok: false, message: error.message }; throw new Error('Unable to read the uploaded spreadsheet.', { cause: error }) }
  const report = { ...compareValidation(parsed.rows, scope.records, args.schoolYear, scope.batches), filename: args.filename, warnings: parsed.warnings, generatedAt: Date.now(), allBatches: scope.allBatches }
  const serialized = JSON.stringify(report)
  if (Buffer.byteLength(serialized) > 8 * 1024 * 1024) return { ok: false, message: 'The comparison report is too large. Split the upload into smaller batch groups.' }
  const resultsStorageId = await ctx.storage.store(new Blob([serialized], { type: 'application/json' }))
  try {
    const runId = await ctx.runMutation(internal.validation.save, { sessionToken: args.sessionToken, schoolYear: args.schoolYear, batches: scope.batches, filename: args.filename, summary: report.summary, warnings: parsed.warnings, sourceVersion: scope.sourceVersion, allBatches: scope.allBatches, resultsStorageId })
    return { ok: true, runId, summary: report.summary, warnings: parsed.warnings }
  } catch (error) { await ctx.storage.delete(resultsStorageId); throw error }
} })

export const results = action({ args: { sessionToken: v.string(), runId: v.id('validationRuns'), search: v.optional(v.string()), status: v.optional(v.string()), batch: v.optional(v.string()), sort: v.optional(v.string()), page: v.optional(v.number()), download: v.optional(v.boolean()) }, handler: async (ctx, args) => {
  const run = await ctx.runQuery(internal.validation.retained, { sessionToken: args.sessionToken, runId: args.runId })
  const blob = await ctx.storage.get(run.resultsStorageId)
  if (!blob) throw new Error('Validation results are no longer available.')
  const report = JSON.parse(await blob.text())
  // Recheck access after reading retained bytes; never return a public storage URL.
  await ctx.runQuery(internal.validation.retained, { sessionToken: args.sessionToken, runId: args.runId })
  if (args.download) {
    await ctx.runMutation(internal.validation.logDownload, { sessionToken: args.sessionToken, runId: args.runId })
    return { ...report, exportFilename: validationFilename(run.schoolYear, run.batches, run.allBatches) }
  }
  const search = (args.search || '').trim().toLowerCase().slice(0, 200)
  const rows = report.rows.filter(row => (!args.status || row.status === args.status) && (!args.batch || row.batchId === args.batch) && (!search || [row.studentId, ...Object.values(row.uploaded || {}), ...Object.values(row.official || {})].join(' ').toLowerCase().includes(search)))
  rows.sort((a, b) => args.sort === 'status' ? a.status.localeCompare(b.status) || a.batchId.localeCompare(b.batchId, 'en', { numeric: true }) : a.batchId.localeCompare(b.batchId, 'en', { numeric: true }) || a.studentId.localeCompare(b.studentId))
  const pages = Math.max(1, Math.ceil(rows.length / 10)), page = Math.min(pages, Math.max(1, Math.floor(args.page || 1)))
  return { runId: args.runId, schoolYear: run.schoolYear, batches: run.batches, summary: run.summary, warnings: run.warnings, generatedAt: run.createdAt, total: rows.length, page, pages, rows: rows.slice((page - 1) * 10, page * 10) }
} })
