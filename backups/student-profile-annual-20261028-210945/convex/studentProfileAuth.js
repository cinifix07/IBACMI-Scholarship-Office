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
