import { selectStudentRecord } from './studentProfileRules'

export async function profileSubmissionState(ctx, account, schoolYear) {
  const history = await ctx.db.query('studentProfileSubmissions').withIndex('by_account_year', q => q.eq('accountId', account._id)).collect()
  const latest = [...history].sort((a, b) => b.schoolYear.localeCompare(a.schoolYear))[0]
  const match = /^(\d{4})-(\d{4})$/.exec(schoolYear || '')
  const validYear = Boolean(match && Number(match[2]) === Number(match[1]) + 1)
  const locked = Boolean(latest && (!validYear || schoolYear <= latest.schoolYear))
  return { schoolYear: schoolYear || '', lastSubmittedYear: latest?.schoolYear || '', locked, canSubmit: validYear && !locked, submittedAt: history.find(row => row.schoolYear === schoolYear)?.submittedAt || null }
}

export async function requireProfileEditable(ctx, account, requestedYear) {
  const records = await ctx.db.query('allinfo').withIndex('by_student_id', q => q.eq('studentId', account.schoolId.trim())).collect()
  const schoolYear = selectStudentRecord(records)?.schoolYear
  const state = await profileSubmissionState(ctx, account, schoolYear)
  if (!state.canSubmit) throw new Error(state.locked ? 'Submitted na ang imong impormasyon para niini nga school year. Ma-edit balik sa bag-ong school year.' : 'Please contact the Scholarship Office to assign your active school year.')
  if (requestedYear !== undefined && requestedYear !== schoolYear) throw new Error('The school year changed. Reload your student profile before continuing.')
  return state
}

export async function requireStudent(ctx, token) {
  if (!token || token.length > 100) throw new Error('Please sign in again to continue.')
  const session = await ctx.db.query('supportSessions').withIndex('by_token', q => q.eq('token', token)).first()
  if (!session || session.role !== 'student' || session.expiresAt <= Date.now()) throw new Error('Your student session has expired. Please sign in again.')
  const account = await ctx.db.get(session.adminId)
  if (!account || account.role !== 'student' || account.status !== 'active' || !account.schoolId) throw new Error('An active student account is required.')
  return account
}

export async function requireStudentOwnership(ctx, token, schoolId) {
  const account = await requireStudent(ctx, token)
  if (account.schoolId.trim().toUpperCase() !== String(schoolId).trim().toUpperCase()) throw new Error('You can only update your own student record.')
  return account
}
