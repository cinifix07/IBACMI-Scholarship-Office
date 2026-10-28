import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { requireStudent, requireProfileEditable, profileSubmissionState } from './studentProfileAuth'
import { normalizeProfile, profileCompleteness, selectStudentRecord } from './studentProfileRules'
import { shareSchoolIdUploadsAcrossDuplicates } from './allinfo'

const fields = {
  lastName: v.string(), firstName: v.string(), middleInitial: v.string(),
  phoneNumber: v.string(), currentAddress: v.string(), facebookProfileUrl: v.string(),
  course: v.string(), yearLevelCode: v.number(), birthDate: v.string(), zipCode: v.string(),
  emailAddress: v.string(), sexCode: v.number(),
}

export async function loadStudentProfile(ctx, account) {
  const records = await ctx.db.query('allinfo').withIndex('by_student_id', q => q.eq('studentId', account.schoolId.trim())).collect()
  records.sort((a, b) => String(b.schoolYear || '').localeCompare(String(a.schoolYear || '')) || (b.uploadedAt || 0) - (a.uploadedAt || 0) || (b._creationTime || 0) - (a._creationTime || 0))
  const record = selectStudentRecord(records)
  const applicants = await ctx.db.query('applicants').withIndex('by_student_id_application_year', q => q.eq('studentId', account.schoolId.trim())).collect()
  const candidates = applicants.filter(a => !record?.schoolYear || a.applicationYear === record.schoolYear)
  const applicant = candidates.length === 1 ? candidates[0] : null
  const billing = record?.schoolYear && record?.semester ? await ctx.db.query('billingProfiles').withIndex('by_period_student', q => q.eq('periodKey', `${record.schoolYear}|${record.semester}`).eq('normalizedStudentId', account.schoolId.trim().toUpperCase())).first() : null
  const saved = account.studentInformation || {}
  const pick = (...values) => values.find(value => value !== undefined && value !== null && String(value).trim() !== '') ?? ''
  const sex = pick(saved.sexCode, billing?.sex === 'M' ? 0 : billing?.sex === 'F' ? 1 : undefined, applicant?.sexCode, applicant?.gender === 'Male' ? 0 : applicant?.gender === 'Female' ? 1 : undefined)
  const year = pick(saved.yearLevelCode, billing?.yearLevel, applicant?.yearLevelCode, applicant?.year)
  const numericYear = Number(String(year).match(/^\d+/)?.[0] || year)
  const profile = normalizeProfile({
    studentId: account.schoolId,
    lastName: pick(saved.lastName, record?.lastName, billing?.lastName, applicant?.lastName),
    firstName: pick(saved.firstName, record?.firstName, billing?.firstName, applicant?.firstName),
    middleInitial: pick(saved.middleInitial, record?.middleInitial, billing?.middleInitial, applicant?.middleName),
    phoneNumber: pick(account.phoneNumber, applicant?.mobileNumber, billing?.phone),
    currentAddress: pick(account.currentAddress, applicant?.address), facebookProfileUrl: account.facebookProfileUrl || '',
    course: pick(saved.course, billing?.program, applicant?.course),
    yearLevelCode: year === '' ? '' : Number.isFinite(numericYear) ? numericYear : year,
    birthDate: pick(saved.birthDate, billing?.birthDate, applicant?.birthDate),
    zipCode: pick(saved.zipCode, billing?.zip, applicant?.zipCode),
    emailAddress: pick(saved.emailAddress, applicant?.emailAddress, billing?.email, account.email),
    sexCode: sex,
  })
  const sharedRecords = shareSchoolIdUploadsAcrossDuplicates(records)
  const sharedRecord = sharedRecords.find(row => row._id === record?._id)
  const schoolIdUploaded = Boolean(sharedRecord?.frontIdUrl || sharedRecord?.frontIdStorageId)
  const submission = await profileSubmissionState(ctx, account, record?.schoolYear)
  return { profile, records: sharedRecords, recordId: record?._id || null, schoolIdUploaded, submission, ...profileCompleteness(profile, { schoolIdUploaded }), needsOfficeReview: !record || !record.tesAwardNumber?.trim(), version: account.studentInformationUpdatedAt || 0 }
}

export const checkUploadAccess = query({
  args: { sessionToken: v.string(), studentId: v.string(), schoolYear: v.string() },
  handler: async (ctx, args) => {
    const account = await requireStudent(ctx, args.sessionToken)
    if (account.schoolId.trim() !== args.studentId.trim()) throw new Error('You can only upload your own School ID.')
    return requireProfileEditable(ctx, account, args.schoolYear)
  },
})

export const get = query({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => loadStudentProfile(ctx, await requireStudent(ctx, args.sessionToken)),
})

export const save = mutation({
  args: { sessionToken: v.string(), expectedVersion: v.number(), schoolYear: v.string(), ...fields },
  handler: async (ctx, { sessionToken, expectedVersion, schoolYear, ...input }) => {
    const account = await requireStudent(ctx, sessionToken)
    if ((account.studentInformationUpdatedAt || 0) !== expectedVersion) throw new Error('Your profile changed in another tab. Reload before saving.')
    await requireProfileEditable(ctx, account, schoolYear)
    const values = normalizeProfile(input)
    const loaded = await loadStudentProfile(ctx, account)
    const previous = normalizeProfile(loaded.profile)
    if (['lastName', 'firstName', 'middleInitial'].some(key => values[key] !== previous[key])) throw new Error('Your official name is view-only. Please contact the Scholarship Office for name corrections.')
    for (const value of Object.values(values)) if (typeof value === 'string' && value.length > 500) throw new Error('A profile field exceeds 500 characters.')
    const completion = profileCompleteness({ ...values, studentId: account.schoolId }, { schoolIdUploaded: loaded.schoolIdUploaded })
    if (completion.missing.length) throw new Error(completion.missing.map(field => field.label).join(', ') + ': Please complete the required information.')
    if (values.facebookProfileUrl) {
      let url
      try { url = new URL(values.facebookProfileUrl) } catch { throw new Error('Enter a valid Facebook profile link.') }
      if (url.protocol !== 'https:' || url.username || url.password || !/(^|\.)(facebook\.com|fb\.com)$/.test(url.hostname)) throw new Error('Use a valid https://facebook.com profile link.')
    }
    const { phoneNumber, currentAddress, facebookProfileUrl, ...studentInformation } = values
    const reportingChanged = ['lastName', 'firstName', 'middleInitial', 'course', 'yearLevelCode', 'birthDate', 'zipCode', 'emailAddress', 'sexCode', 'phoneNumber'].some(key => previous[key] !== values[key])
    const updatedAt = Math.max(Date.now(), expectedVersion + 1)
    await ctx.db.patch(account._id, { phoneNumber, currentAddress, facebookProfileUrl, studentInformation, studentInformationUpdatedAt: updatedAt, updatedAt })
    const records = await ctx.db.query('allinfo').withIndex('by_student_id', q => q.eq('studentId', account.schoolId.trim())).collect()
    // Only current/latest-year records change. Historical records and finalized bills remain intact.
    const activeYear = selectStudentRecord(records)?.schoolYear || ''
    for (const record of records.filter(r => (r.schoolYear || '') === activeYear)) {
      if (reportingChanged || ['lastName', 'firstName', 'middleInitial'].some(key => (record[key] || '') !== values[key])) {
        await ctx.db.patch(record._id, { lastName: values.lastName, firstName: values.firstName, middleInitial: values.middleInitial, studentInformationUpdatedAt: updatedAt })
      }
    }
    await ctx.db.insert('activityLogs', { action: 'student_information_submitted', actorRole: 'student', actorId: String(account._id), targetType: 'admins', targetId: String(account._id), summary: `Student submitted their profile and School ID for ${schoolYear}; office verification remains separate.`, createdAt: updatedAt })
    const uploadedRecord = loaded.records.find(row => row._id === loaded.recordId)
    await ctx.db.insert('studentProfileSubmissions', { accountId: account._id, schoolYear, submittedAt: updatedAt, profile: { ...values, studentId: account.schoolId }, ...(uploadedRecord.frontIdUrl ? { schoolIdUrl: uploadedRecord.frontIdUrl } : {}), ...(uploadedRecord.frontIdStorageId ? { schoolIdStorageId: uploadedRecord.frontIdStorageId } : {}) })
    return { success: true, schoolYear, submittedAt: updatedAt }
  },
})
