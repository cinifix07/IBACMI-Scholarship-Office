import fs from 'node:fs'
import { v } from 'convex/values'
import { fixture, handlers as billing } from './billingFixtures.mjs'
import { studentAccountView } from '../convex/studentAccountRules.js'
const source = fs.readFileSync(new URL('../convex/adminAuth.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
export const handlers = new Function('v', 'query', 'mutation', 'requireAdmin', 'studentAccountView', 'archiveRecord', source + ';return {listStudentAccounts,updateStudentAccount,deleteStudentAccount};')(v, x => x, x => x, billing.requireAdmin, studentAccountView, async (ctx, value) => ctx.db.insert('archive', value))
export function accountsFixture() {
  const data = fixture(0)
  data.tables.archive = []
  data.ctx.db.delete = async id => { for (const table of Object.keys(data.tables)) data.tables[table] = data.tables[table].filter(row => row._id !== id) }
  for (let i = 1; i <= 12; i++) {
    const studentId = `00${String(i).padStart(4, '0')}`
    data.tables.admins.push({ _id: `student-${i}`, schoolId: studentId, email: `student${i}@example.invalid`, phoneNumber: '09123456789', facebookProfileUrl: i === 1 ? 'https://facebook.com/synthetic.account' : '', name: 'Legacy Name', role: 'student', status: 'active', password: 'SYNTHETIC-NEVER-RETURN' })
    data.tables.allinfo.push({ _id: `record-${i}`, studentId, lastName: `Family ${i}`, firstName: `Given ${i}`, middleInitial: 'M.', schoolYear: '2026-2027' })
    data.tables.applicants.push({ _id: `applicant-${i}`, studentId, lastName: `Family ${i}`, firstName: `Given ${i}`, middleName: 'Middle', address: `Purok ${i}, Test Barangay, Test City`, applicationYear: '2026-2027' })
  }
  return data
}
