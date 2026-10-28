import fs from 'node:fs'
import { ConvexError, v } from 'convex/values'
import { fixture, handlers as billing } from './billingFixtures.mjs'
import * as rules from '../convex/noIdRules.js'

const source = fs.readFileSync(new URL('../convex/noIdList.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
const names = ['options', 'snapshot', 'inspect', 'prepare', 'logExport', 'start', 'progress', 'loadJob', 'saveChecks', 'verifyJob', 'cleanupJob', 'completedReport']
const refs = { noIdList: Object.fromEntries(names.map(name => [name, name])) }
export function noIdFixture(count = 24) {
  const data = fixture(count)
  data.tables.studentProfileSubmissions = []
  data.tables.noIdJobs = []
  const scheduled = []
  data.ctx.scheduler = { runAfter: async (delay, ref, args) => { scheduled.push({ delay, ref, args }) } }
  data.ctx.db.delete = async id => { data.tables.noIdJobs = data.tables.noIdJobs.filter(job => job._id !== id) }
  const storage = new Map(), drive = new Map()
  data.ctx.db.system = { get: async (_table, id) => storage.get(id) || null }
  const fetch = async (_url, init) => {
    await data.beforeFetch?.()
    const args = JSON.parse(init.body)
    return new Response(JSON.stringify({ success: true, files: args.fileIds.map(id => ({ id, ...(drive.get(id) || { state: 'missing' }) })) }), { status: 200 })
  }
  const handlers = new Function('v', 'ConvexError', 'action', 'mutation', 'query', 'internalQuery', 'internalMutation', 'internalAction', 'internal', 'requireAdmin', 'fetch', 'globalThis', ...Object.keys(rules), source + `;return {${names.join(',')}};`)(v, ConvexError, value => value, value => value, value => value, value => value, value => value, value => value, refs, billing.requireAdmin, fetch, { process: { env: { GOOGLE_DRIVE_UPLOAD_URL: 'https://synthetic.invalid/bridge', GOOGLE_DRIVE_UPLOAD_SECRET: 'synthetic-secret' } } }, ...Object.values(rules))
  data.ctx.runQuery = async (ref, args) => handlers[ref].handler(data.ctx, args)
  data.ctx.runMutation = async (ref, args) => { const result = await handlers[ref].handler(data.ctx, args); await data.onProgress?.(); return result }
  data.drain = async () => {
    let index
    while ((index = scheduled.findIndex(task => task.delay === 0)) >= 0) {
      const task = scheduled.splice(index, 1)[0]
      await handlers[task.ref].handler(data.ctx, task.args)
    }
  }
  const args = { sessionToken: data.args.sessionToken, schoolYear: data.args.schoolYear }
  return Object.assign(data, { handlers, storage, drive, args })
}
