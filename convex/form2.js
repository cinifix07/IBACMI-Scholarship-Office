import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { buildPreview, finalizeBilling, requireAdmin } from './billing'
import { calculateTotals, filterFields, normalizeId, periodFields, periodKey, previewVersion, validatePeriod } from './billingRules'

const session = { sessionToken: v.string() }
const selection = { ...session, ...filterFields, billingReportId: v.optional(v.id('billingReports')) }
const mappingFields = { applicationNumberVerified: v.boolean(), batchColumnMode: v.union(v.literal('databaseBatch'), v.literal('designation')), designation: v.string(), authority: v.string() }
async function audit(ctx, admin, action, summary, targetId) {
  await ctx.db.insert('activityLogs', { action, actorRole: 'admin', actorId: String(admin._id), actorName: admin.name, targetType: 'form2', ...(targetId ? { targetId: String(targetId) } : {}), summary, createdAt: Date.now() })
}
async function getSnapshot(ctx, id) {
  const report = await ctx.db.get(id)
  if (!report) throw new Error('The saved billing report was not found.')
  const records = await ctx.db.query('billingReportRows').withIndex('by_report', q => q.eq('reportId', id)).collect()
  const rows = records.sort((a,b) => a.sequence-b.sequence).map(r=>r.data)
  const totals = calculateTotals(rows, report.ascBasisPoints)
  if (rows.length !== report.granteeCount || Object.keys(totals).some(k => totals[k] !== report.totals[k])) throw new Error('Saved billing rows and totals do not reconcile.')
  return { ...report, rows }
}
function mappingIssues(mapping) {
  const issues = []
  if (!mapping?.applicationNumberVerified) issues.push('Verify that tesAwardNumber is the official TES Application Number for column D.')
  if (!mapping?.batchColumnMode || (mapping.batchColumnMode === 'designation' && !mapping.designation.trim())) issues.push('Confirm whether column N uses database batch numbers or an approved designation.')
  if (!mapping?.authority?.trim()) issues.push('Record the authority confirming the Form 2 mappings.')
  return issues
}
export const settings = query({
  args: { ...session, ...periodFields },
  handler: async (ctx, args) => {
    await requireAdmin(ctx,args.sessionToken);validatePeriod(args)
    const config = await ctx.db.query('billingConfigs').withIndex('by_period',q=>q.eq('periodKey',periodKey(args))).first()
    const history = await ctx.db.query('form2Reports').withIndex('by_period',q=>q.eq('periodKey',periodKey(args))).collect()
    const reports = []
    for (const entry of history) {
      const billing = await ctx.db.get(entry.billingReportId)
      const author = await ctx.db.get(entry.createdBy)
      if (billing) reports.push({ _id:entry._id, generatedAt:entry.createdAt, generatedBy:author?.name || 'Administrator', reference:billing.reference, batches:billing.batches, granteeCount:billing.granteeCount, status:'Finalized', schoolYear:billing.schoolYear, semester:billing.semester })
    }
    return { mapping:config?.form2Mapping || null, configured:Boolean(config), history:reports.sort((a,b)=>b.generatedAt-a.generatedAt) }
  },
})
export const saveMapping = mutation({
  args: { ...session, ...periodFields, ...mappingFields },
  handler: async (ctx, { sessionToken, schoolYear, semester, ...mapping }) => {
    const admin = await requireAdmin(ctx,sessionToken);validatePeriod({schoolYear,semester})
    if (mapping.authority.length > 500 || mapping.designation.length > 80) throw new Error('Mapping authority or designation is too long.')
    const issues = mappingIssues(mapping)
    if (issues.length) throw new Error(issues.join(' '))
    const config = await ctx.db.query('billingConfigs').withIndex('by_period',q=>q.eq('periodKey',periodKey({schoolYear,semester}))).first()
    if (!config) throw new Error('Configure the verified period rates in Billing Management first.')
    await ctx.db.patch(config._id, { form2Mapping:{ ...mapping, designation:mapping.designation.trim(), authority:mapping.authority.trim() }, updatedAt:Date.now() })
    await audit(ctx,admin,'form2_mapping_verified',`Form 2 column mappings verified for ${schoolYear}, ${semester}.`)
  },
})
export const reviewContinuing = mutation({
  args: { ...session, ...periodFields, studentId:v.string(), verified:v.boolean(), evidence:v.string() },
  handler: async (ctx,args) => {
    const admin=await requireAdmin(ctx,args.sessionToken);validatePeriod(args)
    if (!args.evidence.trim() || args.evidence.length>500) throw new Error('Provide the continuing-grantee eligibility evidence (maximum 500 characters).')
    const profile=await ctx.db.query('billingProfiles').withIndex('by_period_student',q=>q.eq('periodKey',periodKey(args)).eq('normalizedStudentId',normalizeId(args.studentId))).first()
    if (!profile) throw new Error('Review the student’s required details and billing eligibility in Billing Management first.')
    await ctx.db.patch(profile._id,{form2ContinuingVerified:args.verified,form2Evidence:args.evidence.trim(),form2ReviewedBy:admin._id,form2ReviewedAt:Date.now()})
    await audit(ctx,admin,'form2_continuing_reviewed',`Continuing TES eligibility reviewed for one student in ${args.schoolYear}, ${args.semester}.`)
  },
})

export async function buildForm2Preview(ctx,args) {
  validatePeriod(args)
  let data, billingVersion=null
  if (args.billingReportId) {
    const snapshot=await getSnapshot(ctx,args.billingReportId)
    if (snapshot.schoolYear!==args.schoolYear || snapshot.semester!==args.semester) throw new Error('The saved report does not belong to the selected academic period.')
    if (args.batches.length) throw new Error('Saved billing reports must be exported in full. Choose All Batches.')
    const config=await ctx.db.query('billingConfigs').withIndex('by_period',q=>q.eq('periodKey',periodKey(args))).first()
    data={rows:snapshot.rows,totals:snapshot.totals,config,globalIssues:[],selectedCount:snapshot.rows.length,duplicateCount:0,nextTranche:snapshot.tranche,reference:snapshot.reference,billingDate:snapshot.billingDate}
  } else {
    data=await buildPreview(ctx,args);billingVersion=data.version
  }
  const profiles=await ctx.db.query('billingProfiles').withIndex('by_period',q=>q.eq('periodKey',periodKey(args))).collect()
  const byStudent=new Map(profiles.map(p=>[p.normalizedStudentId,p]))
  const rows=data.rows.map(row=>{
    const p=byStudent.get(normalizeId(row.studentId))
    const continuingVerified=p?.form2ContinuingVerified===true&&Boolean(p?.form2Evidence?.trim())
    const issues=[...(row.issues||[])]
    if (!continuingVerified) issues.push('Continuing TES classification needs verification and supporting evidence.')
    if (!/^([1-6])(?:st|nd|rd|th)?(?:\s*year)?$/i.test(String(row.profile.yearLevel).trim())) issues.push('Verify the numeric year level required by the official Form 2.')
    return {...row,continuingVerified,continuingEvidence:p?.form2Evidence||'',issues,eligible:row.eligible&&continuingVerified&&issues.length===0}
  })
  const globalIssues=[...data.globalIssues,...mappingIssues(data.config?.form2Mapping)]
  const unverified=rows.filter(r=>!r.excluded&&!r.continuingVerified).length
  if (unverified) globalIssues.push(`${unverified} student(s) need continuing TES verification.`)
  const invalidRows=rows.filter(r=>!r.excluded&&!r.eligible).length
  if (invalidRows) globalIssues.push(`${invalidRows} record(s) have missing or inconsistent Form 2 information.`)
  const mapping=data.config?.form2Mapping || null
  const result={...data,rows,globalIssues:[...new Set(globalIssues)],mapping,billingVersion,eligibleCount:rows.filter(r=>r.eligible).length}
  return {...result,version:previewVersion(result)}
}
export const preview = mutation({args:selection,handler:async(ctx,args)=>{
  await requireAdmin(ctx,args.sessionToken)
  return buildForm2Preview(ctx,args)
}})
export const generate = mutation({
  args:{...selection,expectedVersion:v.string(),reference:v.string(),billingDate:v.string()},
  handler:async(ctx,args)=>{
    const admin=await requireAdmin(ctx,args.sessionToken)
    const data=await buildForm2Preview(ctx,args)
    if(data.version!==args.expectedVersion)throw new Error('Form 2 data or mappings changed. Generate and review a new preview.')
    if(data.globalIssues.length)throw new Error(data.globalIssues.join(' '))
    const billingReportId=args.billingReportId||await finalizeBilling(ctx,{...args,expectedVersion:data.billingVersion})
    const existing=await ctx.db.query('form2Reports').withIndex('by_billing_report',q=>q.eq('billingReportId',billingReportId)).first()
    if(existing)return existing._id
    const id=await ctx.db.insert('form2Reports',{billingReportId,periodKey:periodKey(args),mapping:data.mapping,createdBy:admin._id,createdAt:Date.now()})
    await audit(ctx,admin,'form2_report_generated',`Form 2 generated for ${args.schoolYear}, ${args.semester}: ${data.eligibleCount} grantees.`,id)
    return id
  },
})
export const download = mutation({
  args:{...session,reportId:v.id('form2Reports'),format:v.union(v.literal('xlsx'),v.literal('pdf'))},
  handler:async(ctx,args)=>{
    const admin=await requireAdmin(ctx,args.sessionToken)
    const entry=await ctx.db.get(args.reportId)
    if(!entry)throw new Error('Form 2 report not found.')
    const snapshot=await getSnapshot(ctx,entry.billingReportId)
    await audit(ctx,admin,'form2_report_downloaded',`Requested ${args.format.toUpperCase()} Form 2 for ${snapshot.reference}.`,entry._id)
    return {...snapshot,mapping:entry.mapping,form2ReportId:entry._id}
  },
})
