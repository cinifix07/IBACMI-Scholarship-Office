import fs from 'node:fs'
import { Buffer } from 'node:buffer'
import { ConvexError, v } from 'convex/values'
import { fixture, handlers as billing } from './billingFixtures.mjs'
import * as rules from '../convex/validationRules.js'
import { snapshotVersion } from '../convex/noIdRules.js'
import { parseValidationFile, ValidationFileError } from '../convex/validationParser.js'
const source = name => fs.readFileSync(new URL(`../convex/${name}.js`, import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
const names = ['options', 'source', 'save', 'history', 'retained', 'logDownload', 'expireResults', 'expireMetadata']
const internal = { validation: Object.fromEntries(names.map(name => [name, name])) }
const backend = new Function('v', 'ConvexError', 'query', 'internalQuery', 'internalMutation', 'internal', 'requireAdmin', 'cleanValidationText', 'snapshotVersion', source('validation') + `;return {${names.map(name => `${name === 'source' ? 'source' : name}`).join(',')}};`)(v, ConvexError, value => value, value => value, value => value, internal, billing.requireAdmin, rules.cleanValidationText, snapshotVersion)
const actions = new Function('v', 'action', 'internal', 'Buffer', 'parseValidationFile', 'ValidationFileError', 'compareValidation', 'validationFilename', source('validationActions') + ';return {run,results};')(v, value => value, internal, Buffer, parseValidationFile, ValidationFileError, rules.compareValidation, rules.validationFilename)
export { backend, actions }
export function validationFixture(count = 24) {
  const data = fixture(count)
  data.tables.validationRuns = []
  for (const row of data.tables.allinfo) { row.extensionName = ''; row.middleName = 'Middle'; row.batchId = row.batchId === '1' ? '13.1' : 'LISTAHAN 2' }
  const scheduled = [], storage = new Map()
  data.ctx.scheduler = { runAfter: async (delay, ref, args) => scheduled.push({ delay, ref, args }) }
  data.ctx.storage = { store: async blob => { const id = `storage-${storage.size}`; storage.set(id, blob); return id }, get: async id => storage.get(id) || null, delete: async id => storage.delete(id) }
  const originalQuery = data.ctx.db.query
  data.ctx.db.query = table => { const query = originalQuery(table), withIndex = query.withIndex; query.withIndex = (name, callback = q => q) => withIndex(name, callback); query.order = () => query; return query }
  data.ctx.db.delete = async id => { for (const [table, rows] of Object.entries(data.tables)) data.tables[table] = rows.filter(row => row._id !== id) }
  data.ctx.runQuery = (ref, args) => backend[ref].handler(data.ctx, args)
  data.ctx.runMutation = async (ref, args) => { const result = await backend[ref].handler(data.ctx, args); await data.onChange?.(); return result }
  return Object.assign(data, { scheduled, storage })
}
