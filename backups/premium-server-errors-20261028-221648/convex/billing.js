import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { calculateTotals, configFields, filterFields, money, normalizeId, periodFields, periodKey, previewVersion, profileFields, referenceFor, validatePeriod } from './billingRules'

export async function requireAdmin(ctx, token) {
  if (!token || token.length > 100) throw new Error('Sign in as an administrator.')
  const session = await ctx.db.query('supportSessions').withIndex('by_token', q => q.eq('token', token)).first()
  if (!session || session.role !== 'admin' || session.expiresAt <= Date.now()) throw new Error('Administrator session expired. Sign in again.')
  const admin = await ctx.db.get(session.adminId)
  if (!admin || admin.role !== 'admin' || admin.status !== 'active') throw new Error('An active administrator account is required.')
  return admin
}
const sessionFields = { sessionToken: v.string() }
async function log(ctx, admin, action, summary, reportId) {
  await ctx.db.insert('activityLogs', { action, actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, targetType: 'billing', ...(reportId ? { targetId: String(reportId) } : {}), summary, createdAt: Date.now() })
}
async function configFor(ctx, period) {
  return ctx.db.query('billingConfigs').withIndex('by_period', q => q.eq('periodKey', periodKey(period))).first()
}
const clean = value => String(value ?? '').trim()
const sourceVersion = record => previewVersion([record._id, record.studentId, record.tesAwardNumber, record.lastName, record.firstName, record.middleInitial, record.batchId, record.status, record.semester, record.schoolYear, ...(record.studentInformationUpdatedAt ? [record.studentInformationUpdatedAt] : [])])
const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value

export const options = query({
  args: sessionFields,
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken)
    const records = await ctx.db.query('allinfo').collect()
    return { years: [...new Set(records.map(r => r.schoolYear).filter(Boolean))].sort().reverse(), statuses: [...new Set(records.map(r => r.status).filter(Boolean))].sort() }
  },
})
export const workspace = query({
  args: { ...sessionFields, ...periodFields },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.sessionToken)
    validatePeriod(args)
    const records = (await ctx.db.query('allinfo').withIndex('by_school_year_batch', q => q.eq('schoolYear', args.schoolYear)).collect()).filter(r => r.semester === args.semester)
    const batches = new Map()
    for (const record of records) {
      if (!batches.has(record.batchId)) batches.set(record.batchId, new Set())
      batches.get(record.batchId).add(normalizeId(record.studentId))
    }
    const reports = await ctx.db.query('billingReports').withIndex('by_period', q => q.eq('periodKey', periodKey(args))).collect()
    return { config: await configFor(ctx, args), batches: [...batches].map(([id, ids]) => ({ id, count: ids.size })).sort((a,b) => a.id.localeCompare(b.id, undefined, { numeric: true })), reports: reports.map(({ _id, reference, billingDate, totals, granteeCount }) => ({ _id, reference, billingDate, totals, granteeCount })) }
  },
})
export const saveConfig = mutation({
  args: { ...sessionFields, ...configFields },
  handler: async (ctx, { sessionToken, ...values }) => {
    const admin = await requireAdmin(ctx, sessionToken)
    validatePeriod(values)
    if (!clean(values.authority) || values.authority.length > 500) throw new Error('Provide the approved rate/eligibility policy reference (maximum 500 characters).')
    if (!clean(values.referenceFormat) || values.referenceFormat.length > 120 || /[<>]/.test(values.referenceFormat)) throw new Error('Enter the authorized billing reference format.')
    const placeholders = values.referenceFormat.match(/\{[^}]*\}/g) || []
    if (placeholders.some(p => !['{YEAR}', '{TERM}', '{TRANCHE}'].includes(p))) throw new Error('Reference placeholders may only be {YEAR}, {TERM}, and {TRANCHE}.')
    if (!values.rates.length || values.rates.length > 30 || !values.eligibleStatuses.length) throw new Error('Configure at least one benefit category and eligible status.')
    const categories = new Set()
    for (const rate of values.rates) {
      if (!clean(rate.category) || categories.has(normalizeId(rate.category))) throw new Error('Benefit categories must have unique names.')
      categories.add(normalizeId(rate.category))
      money(rate.tes1Cap); money(rate.tes2); money(rate.tes3a)
    }
    if (!Number.isInteger(values.ascBasisPoints) || values.ascBasisPoints < 0 || values.ascBasisPoints > 10000 || (values.ascBasisPoints > 0 && !values.ascAuthorized)) throw new Error('Administrative cost needs explicit authorization and a valid percentage.')
    if (values.priorBilledStudentIds.length > 10000) throw new Error('Too many prior-billing entries.')
    if (!Number.isInteger(values.priorTranches) || values.priorTranches < 0 || values.priorTranches > 2) throw new Error('Prior billing tranches must be 0, 1, or 2.')
    const existing = await configFor(ctx, values)
    const config = { ...values, priorTranches: Math.max(values.priorTranches, existing?.priorTranches || 0), authority: values.authority.trim(), eligibleStatuses: values.eligibleStatuses.map(clean), rates: values.rates.map(r => ({ ...r, category: r.category.trim() })), referenceFormat: values.referenceFormat.trim(), priorBilledStudentIds: [...new Set([...values.priorBilledStudentIds, ...(existing?.priorBilledStudentIds || [])].map(normalizeId).filter(Boolean))], periodKey: periodKey(values), updatedBy: admin._id, updatedAt: Date.now() }
    if (existing) await ctx.db.patch(existing._id, config)
    else await ctx.db.insert('billingConfigs', config)
    await log(ctx, admin, 'billing_configuration_updated', `Billing rules updated for ${values.schoolYear}, ${values.semester}.`)
  },
})
export const saveProfile = mutation({
  args: { ...sessionFields, ...profileFields },
  handler: async (ctx, { sessionToken, ...values }) => {
    const admin = await requireAdmin(ctx, sessionToken)
    validatePeriod(values)
    const source = await ctx.db.get(values.sourceRecordId)
    if (!source || normalizeId(source.studentId) !== normalizeId(values.studentId) || source.schoolYear !== values.schoolYear || source.semester !== values.semester) throw new Error('The selected grantee record does not match this student and period.')
    money(values.actualFees)
    if (!Number.isFinite(values.units) || values.units < 0 || values.units > 100) throw new Error('Academic units must be between 0 and 100.')
    for (const value of Object.values(values)) if (typeof value === 'string' && value.length > 500) throw new Error('A billing field exceeds 500 characters.')
    if (!values.reviewNote.trim()) throw new Error('Record the eligibility evidence or exclusion reason.')
    const normalizedStudentId = normalizeId(values.studentId)
    const existing = await ctx.db.query('billingProfiles').withIndex('by_period_student', q => q.eq('periodKey', periodKey(values)).eq('normalizedStudentId', normalizedStudentId)).first()
    const data = { ...values, form2ContinuingVerified: false, form2Evidence: '', sourceVersion: sourceVersion(source), periodKey: periodKey(values), normalizedStudentId, reviewedBy: admin._id, updatedAt: Date.now() }
    if (existing) await ctx.db.patch(existing._id, data)
    else await ctx.db.insert('billingProfiles', data)
    await log(ctx, admin, 'billing_eligibility_reviewed', `Billing eligibility reviewed for one record in ${values.schoolYear}, ${values.semester}.`)
  },
})

export async function buildPreview(ctx, filters) {
  validatePeriod(filters)
  if (filters.batches.length > 300 || filters.batches.some(b => !b.trim())) throw new Error('Invalid batch selection.')
  const source = (await ctx.db.query('allinfo').withIndex('by_school_year_batch', q => q.eq('schoolYear', filters.schoolYear)).collect()).filter(r => r.semester === filters.semester)
  const available = new Set(source.map(r => r.batchId))
  if (filters.batches.some(batch => !available.has(batch))) throw new Error('A selected batch does not exist for this period.')
  const selected = source.filter(r => !filters.batches.length || filters.batches.includes(r.batchId))
  if (selected.length > 2000) throw new Error('This selection exceeds 2,000 source records. Generate separate reports by batch.')
  const [config, profiles, ledger, reports] = await Promise.all([
    configFor(ctx, filters),
    ctx.db.query('billingProfiles').withIndex('by_period', q => q.eq('periodKey', periodKey(filters))).collect(),
    ctx.db.query('billingLedger').withIndex('by_period', q => q.eq('periodKey', periodKey(filters))).collect(),
    ctx.db.query('billingReports').withIndex('by_period', q => q.eq('periodKey', periodKey(filters))).collect(),
  ])
  const globalIssues = []
  if (!config) globalIssues.push('Save verified billing rules for this period.')
  if (config && !config.priorBillingReviewed) globalIssues.push('Confirm prior billing history has been checked before finalizing.')
  if (!selected.length) globalIssues.push('No grantee records match these filters.')
  const profileMap = new Map(profiles.map(p => [p.normalizedStudentId, p]))
  const billed = new Set([...ledger.map(r => r.studentId), ...(config?.priorBilledStudentIds || [])])
  const billedAwards = new Set(ledger.map(r => normalizeId(r.tesAwardNumber)).filter(Boolean))
  const awardOwners = new Map()
  for (const record of source) {
    const award = normalizeId(record.tesAwardNumber)
    if (!award) continue
    if (!awardOwners.has(award)) awardOwners.set(award, new Set())
    awardOwners.get(award).add(normalizeId(record.studentId))
  }
  const grouped = new Map()
  for (const record of selected) {
    const id = normalizeId(record.studentId)
    if (!grouped.has(id)) grouped.set(id, [])
    grouped.get(id).push(record)
  }
  const rows = []
  for (const [studentId, records] of grouped) {
    const profile = profileMap.get(studentId)
    const record = records.find(r => r._id === profile?.sourceRecordId) || records[0]
    const issues = []
    const signatures = new Set(records.map(r => JSON.stringify([r.tesAwardNumber,r.lastName,r.firstName,r.batchId,r.status])))
    if (signatures.size > 1 && !records.some(r => r._id === profile?.sourceRecordId)) issues.push('Conflicting duplicate records: select and verify the authoritative source.')
    if (!studentId || !record.tesAwardNumber?.trim()) issues.push('Missing Student ID or TES award number.')
    if ((awardOwners.get(normalizeId(record.tesAwardNumber))?.size || 0) > 1) issues.push('This TES award number is linked to multiple Student IDs. Resolve the source conflict before billing.')
    if (!profile) issues.push('Eligibility and required student details have not been reviewed.')
    if (profile && profile.sourceVersion !== sourceVersion(record)) issues.push('The source grantee record changed after review. Verify and save the billing review again.')
    const excluded = Boolean(profile && !profile.eligible)
    if (excluded) issues.push(`Excluded by administrator: ${profile.reviewNote}`)
    const previouslyBilled = billed.has(studentId) || billedAwards.has(normalizeId(record.tesAwardNumber))
    if (previouslyBilled) issues.push('Already billed for this period; excluded to prevent duplicate billing.')
    if (!config?.eligibleStatuses.some(s => normalizeId(s) === normalizeId(record.status))) issues.push(`Source status "${record.status || 'missing'}" is not authorized for billing.`)
    const rate = config?.rates.find(r => normalizeId(r.category) === normalizeId(profile?.category))
    if (!rate) issues.push('No verified benefit rate/category assigned.')
    let applicant = null
    if (!profile) {
      const candidates = await ctx.db.query('applicants').withIndex('by_student_id_application_year', q => q.eq('studentId', record.studentId).eq('applicationYear', filters.schoolYear)).take(2)
      if (candidates.length === 1) applicant = candidates[0]
    }
    const details = profile ? { ...profile } : { lastName: record.lastName || '', firstName: record.firstName || '', middleInitial: record.middleInitial || '', campus: '', college: '', program: applicant?.course || '', yearLevel: applicant?.year || '', sex: applicant?.gender === 'Male' ? 'M' : applicant?.gender === 'Female' ? 'F' : '', birthDate: applicant?.birthDate || '', units: 0, zip: applicant?.zipCode || '', email: applicant?.emailAddress || '', phone: applicant?.mobileNumber || '', actualFees: 0, category: '', disabilityVerified: false, eligible: false, reviewNote: '' }
    const account = record.studentInformationUpdatedAt ? await ctx.db.query('admins').withIndex('by_school_id', q => q.eq('schoolId', record.studentId)).first() : null
    const student = account?.role === 'student' ? account.studentInformation : null
    if (student && record.studentInformationUpdatedAt && (!profile || profile.sourceVersion !== sourceVersion(record))) {
      Object.assign(details, { lastName: student.lastName, firstName: student.firstName, middleInitial: student.middleInitial, program: student.course, yearLevel: String(student.yearLevelCode), sex: student.sexCode === 0 ? 'M' : 'F', birthDate: student.birthDate, zip: student.zipCode, email: student.emailAddress, phone: account.phoneNumber || details.phone })
    }
    for (const key of ['lastName', 'firstName', 'campus', 'college', 'program', 'yearLevel', 'zip']) if (!clean(details[key])) issues.push(`Missing ${key}.`)
    if (!['M','F'].includes(details.sex)) issues.push('Sex at birth must be M or F.')
    if (!validDate(details.birthDate) || details.birthDate > new Date().toISOString().slice(0, 10)) issues.push('Missing or invalid birthdate.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) issues.push('Missing or invalid email.')
    if (!/^\+?[\d\s()-]{7,25}$/.test(details.phone)) issues.push('Missing or invalid phone number.')
    if (!(details.units > 0)) issues.push('Academic units enrolled must be verified and greater than zero.')
    const tes1 = rate ? Math.min(money(details.actualFees), money(rate.tes1Cap)) : 0
    const tes2 = rate ? money(rate.tes2) : 0
    const tes3a = rate && details.disabilityVerified ? money(rate.tes3a) : 0
    if (rate && tes1 + tes2 + tes3a <= 0) issues.push('The configured benefits produce no billable amount.')
    // A deliberate exclusion or existing ledger entry may be omitted with a visible reason.
    const excludedFromBilling = excluded || previouslyBilled
    rows.push({ studentId, tesAwardNumber: record.tesAwardNumber, batch: record.batchId, semester: filters.semester, schoolYear: filters.schoolYear, sourceStatus: record.status, profile: { ...Object.fromEntries(Object.keys(profileFields).filter(k => !['schoolYear','semester','studentId'].includes(k)).map(k => [k, details[k] ?? (k === 'sourceRecordId' ? record._id : '')])), sourceRecordId: record._id }, sourceChoices: records.map(r => ({ id: r._id, label: `${r.batchId} · ${r.tesAwardNumber} · ${r.status}` })), tes1, tes2, tes3a, total: tes1 + tes2 + tes3a, issues, eligible: issues.length === 0, excluded: excludedFromBilling })
  }
  rows.sort((a,b) => ['campus','college','program','lastName','firstName','middleInitial'].reduce((result,key) => result || String(a.profile[key]).localeCompare(String(b.profile[key]), 'en', { sensitivity: 'base' }), 0) || a.studentId.localeCompare(b.studentId))
  const eligibleRows = rows.filter(r => r.eligible)
  const totals = calculateTotals(eligibleRows, config?.ascAuthorized ? config.ascBasisPoints : 0)
  const reviewCount = rows.filter(r => !r.eligible && !r.excluded).length
  if (reviewCount) globalIssues.push(`${reviewCount} student record(s) need review before export.`)
  if (!eligibleRows.length) globalIssues.push('No eligible, unbilled grantees are available.')
  const trancheCount = reports.length + (config?.priorTranches || 0)
  if (trancheCount >= 2) globalIssues.push('This period already has two billing tranches, including prior billings, the template maximum.')
  const result = { rows, totals, globalIssues, selectedCount: selected.length, duplicateCount: selected.length - rows.length, eligibleCount: eligibleRows.length, reviewCount, excludedCount: rows.filter(r=>r.excluded).length, config, nextTranche: trancheCount + 1 }
  return { ...result, version: previewVersion(result) }
}
export const preview = mutation({ args: { ...sessionFields, ...filterFields }, handler: async (ctx, args) => {
  await requireAdmin(ctx, args.sessionToken)
  return buildPreview(ctx, args)
} })
export async function finalizeBilling(ctx, args) {
    const admin = await requireAdmin(ctx, args.sessionToken)
    if (!validDate(args.billingDate)) throw new Error('Choose a valid billing date.')
    if (!args.reference.trim() || args.reference.length > 120) throw new Error('Enter a valid billing reference.')
    const duplicate = await ctx.db.query('billingReports').withIndex('by_reference', q => q.eq('reference', args.reference.trim())).first()
    if (duplicate) throw new Error('This billing reference already exists. Download the original report from history.')
    const data = await buildPreview(ctx, args)
    if (data.version !== args.expectedVersion) throw new Error('Billing data changed. Generate and review a fresh preview.')
    if (data.globalIssues.length) throw new Error(data.globalIssues.join(' '))
    if (args.reference.trim() !== referenceFor(data.config, data.nextTranche)) throw new Error('Reference does not match the authorized period/tranche format.')
    const rows = data.rows.filter(r => r.eligible).map((r,i) => ({ ...r, controlNumber: String(i + 1).padStart(5,'0') }))
    const independentlySummed = rows.reduce((sum,row) => sum + row.total, 0)
    if (independentlySummed !== data.totals.benefits) throw new Error('Form 1 and Form 2 do not reconcile.')
    const id = await ctx.db.insert('billingReports', { periodKey: periodKey(args), reference: args.reference.trim(), billingDate: args.billingDate, tranche: data.nextTranche, schoolYear: args.schoolYear, semester: args.semester, batches: [...new Set(args.batches)].sort(), totals: data.totals, authority: data.config.authority, ascBasisPoints: data.config.ascAuthorized ? data.config.ascBasisPoints : 0, granteeCount: rows.length, createdBy: admin._id, createdAt: Date.now() })
    for (let sequence = 0; sequence < rows.length; sequence++) {
      await ctx.db.insert('billingReportRows', { reportId: id, sequence, data: rows[sequence] })
      await ctx.db.insert('billingLedger', { periodKey: periodKey(args), studentId: rows[sequence].studentId, tesAwardNumber: normalizeId(rows[sequence].tesAwardNumber), reportId: id })
    }
    await log(ctx, admin, 'billing_report_generated', `Finalized ${args.reference.trim()}: ${rows.length} grantees; total PHP ${(data.totals.total / 100).toFixed(2)}.`, id)
    return id
}
export const finalize = mutation({
  args: { ...sessionFields, ...filterFields, reference: v.string(), billingDate: v.string(), expectedVersion: v.string() },
  handler: finalizeBilling,
})
export const download = mutation({
  args: { ...sessionFields, reportId: v.id('billingReports'), format: v.union(v.literal('xlsx'), v.literal('pdf')) },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx, args.sessionToken)
    const report = await ctx.db.get(args.reportId)
    if (!report) throw new Error('Billing report not found.')
    const rows = await ctx.db.query('billingReportRows').withIndex('by_report', q=>q.eq('reportId', report._id)).collect()
    if (rows.length !== report.granteeCount || calculateTotals(rows.map(r=>r.data), report.ascBasisPoints).total !== report.totals.total) throw new Error('Stored report does not reconcile.')
    await log(ctx, admin, 'billing_report_downloaded', `Requested ${args.format.toUpperCase()} download of ${report.reference}.`, report._id)
    return { ...report, rows: rows.map(r=>r.data) }
  },
})
