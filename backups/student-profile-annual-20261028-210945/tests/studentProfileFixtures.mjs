import fs from 'node:fs'
import { v } from 'convex/values'
import { fixture } from './billingFixtures.mjs'
import * as rules from '../convex/studentProfileRules.js'
const read = name => fs.readFileSync(new URL(`../convex/${name}.js`, import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
const auth = new Function(read('studentProfileAuth') + ';return {requireStudent,requireStudentOwnership};')()
const uploadSource = read('allinfo')
const uploadHelpers = new Function(uploadSource.slice(uploadSource.indexOf('function getSchoolIdUploadTimestamp'), uploadSource.indexOf('const listByStudentId')) + ';return {shareSchoolIdUploadsAcrossDuplicates};')()
const inject = { ...rules, ...auth, ...uploadHelpers }
export const profileHandlers = new Function('v', 'mutation', 'query', ...Object.keys(inject), read('studentProfile') + ';return {get,save,loadStudentProfile};')(v, x => x, x => x, ...Object.values(inject))
export const profileAuth = auth
export const authHandlers = new Function('v', 'mutation', 'query', 'requireStudentOwnership', read('adminAuth') + ';return {login,register,updateStudentPhoneNumber,updateStudentCurrentAddress,updateStudentFacebookProfile};')(v, x => x, x => x, auth.requireStudentOwnership)
export function studentFixture() {
  const data = fixture(1)
  const account = { _id: 'student-account', schoolId: 'TEST-0001', email: 'login@example.invalid', role: 'student', status: 'active', phoneNumber: '09123456789', currentAddress: 'Purok 1, Barangay Test, Test City', facebookProfileUrl: '' }
  data.tables.admins.push(account)
  data.tables.supportSessions.push({ _id: 'student-session', adminId: account._id, role: 'student', token: 'student-token', expiresAt: Date.now() + 1000000 })
  data.account = account
  data.token = 'student-token'
  return data
}
export const completeInput = {
  lastName: 'Family 0000', firstName: 'Synthetic', middleInitial: 'T',
  phoneNumber: '09123456789', currentAddress: 'Purok 1, Barangay Test, Test City', facebookProfileUrl: '',
  course: rules.DEGREE_PROGRAMS[0], yearLevelCode: 2, sexCode: 0, birthDate: '2004-02-29', zipCode: '0123', emailAddress: 'contact@example.invalid',
}
