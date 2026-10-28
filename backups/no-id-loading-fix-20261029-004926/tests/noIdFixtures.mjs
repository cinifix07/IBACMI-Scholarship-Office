import fs from 'node:fs'
import { ConvexError, v } from 'convex/values'
import { fixture, handlers as billing } from './billingFixtures.mjs'
import * as rules from '../convex/noIdRules.js'

const source = fs.readFileSync(new URL('../convex/noIdList.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
const refs = { noIdList: { snapshot: 'snapshot', logExport: 'logExport' } }
export function noIdFixture(count = 24) {
  const data = fixture(count)
  data.tables.studentProfileSubmissions = []
  const storage = new Map(), drive = new Map()
  data.ctx.db.system = { get: async (_table, id) => storage.get(id) || null }
  const fetch = async (_url, init) => {
    const args = JSON.parse(init.body)
    return new Response(JSON.stringify({ success: true, files: args.fileIds.map(id => ({ id, ...(drive.get(id) || { state: 'missing' }) })) }), { status: 200 })
  }
  const handlers = new Function('v', 'ConvexError', 'action', 'query', 'internalQuery', 'internalMutation', 'internalAction', 'internal', 'requireAdmin', 'fetch', 'globalThis', ...Object.keys(rules), source + ';return {options,snapshot,inspect,prepare,logExport};')(v, ConvexError, value => value, value => value, value => value, value => value, value => value, refs, billing.requireAdmin, fetch, { process: { env: { GOOGLE_DRIVE_UPLOAD_URL: 'https://synthetic.invalid/bridge', GOOGLE_DRIVE_UPLOAD_SECRET: 'synthetic-secret' } } }, ...Object.values(rules))
  data.ctx.runQuery = async (ref, args) => handlers[ref].handler(data.ctx, args)
  data.ctx.runMutation = async (ref, args) => handlers[ref].handler(data.ctx, args)
  const args = { sessionToken: data.args.sessionToken, schoolYear: data.args.schoolYear }
  return { ...data, handlers, storage, drive, args }
}
