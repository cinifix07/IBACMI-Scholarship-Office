import fs from 'node:fs'
import { ConvexError, v } from 'convex/values'
import { fixture, handlers as billing } from './billingFixtures.mjs'
import * as rules from '../convex/batchExportRules.js'

const source = fs.readFileSync(new URL('../convex/batchExport.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
export const handlers = new Function('v', 'ConvexError', 'mutation', 'query', 'requireAdmin', ...Object.keys(rules), source + ';return {options,prepare};')(v, ConvexError, value => value, value => value, billing.requireAdmin, ...Object.values(rules))

export function batchFixture() {
  const data = fixture(8)
  for (const [i, row] of data.tables.allinfo.entries()) {
    row.batchId = ['13', '13.1', '14', '15'][i % 4]
    row.semester = i < 4 ? '1st Semester' : '2nd Semester'
    data.tables.admins.push({ _id: `student-${i}`, role: 'student', schoolId: row.studentId, email: `synthetic-${i}@example.invalid`, phoneNumber: '09000000000', currentAddress: 'SYNTHETIC ADDRESS', status: 'active', password: 'DO-NOT-EXPORT' })
  }
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'duplicate', uploadedAt: 123 })
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'other-year', schoolYear: '2024-2025', batchId: '99' })
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'no-year', schoolYear: undefined, batchId: '100' })
  data.tables.allinfo.push({ ...data.tables.allinfo[0], _id: 'no-batch', batchId: '' })
  return data
}
