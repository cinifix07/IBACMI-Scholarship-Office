import { test } from 'node:test'
import assert from 'node:assert/strict'
import { form2, form2Fixture } from './form2Fixtures.mjs'
import { handlers as billing } from './billingFixtures.mjs'

test('all Form 2 endpoints require an active administrator',async()=>{
 const {ctx,args}=form2Fixture()
 for(const handler of [form2.settings,form2.preview,form2.generate,form2.download,form2.saveMapping,form2.reviewContinuing])await assert.rejects(()=>handler.handler(ctx,{...args,sessionToken:'invalid'}),/session expired/)
})
test('missing mappings or continuing evidence block final export before any billing write',async()=>{
 const {ctx,args,tables}=form2Fixture()
 delete tables.billingConfigs[0].form2Mapping
 tables.billingProfiles[0].form2ContinuingVerified=false
 const p=await form2.preview.handler(ctx,args)
 assert.ok(p.globalIssues.some(i=>i.includes('column D')));assert.ok(p.globalIssues.some(i=>i.includes('continuing TES')))
 await assert.rejects(()=>form2.generate.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'}))
 assert.equal(tables.billingReports.length,0);assert.equal(tables.billingLedger.length,0)
})
test('current Form 2 generation reuses billing finalization and stores metadata only',async()=>{
 const {ctx,args,tables}=form2Fixture(12),original=JSON.stringify(tables.allinfo)
 const p=await form2.preview.handler(ctx,args)
 assert.equal(p.rows.length,12);assert.equal(p.eligibleCount,12)
 const id=await form2.generate.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'})
 assert.equal(tables.billingReports.length,1);assert.equal(tables.billingLedger.length,12)
 assert.equal(tables.form2Reports.length,1);assert.equal(tables.form2Reports[0].rows,undefined)
 for(const format of ['xlsx','pdf']){const r=await form2.download.handler(ctx,{sessionToken:args.sessionToken,reportId:id,format});assert.equal(r.rows.length,12);assert.equal(r.mapping.batchColumnMode,'databaseBatch')}
 assert.equal(tables.billingLedger.length,12);assert.equal(JSON.stringify(tables.allinfo),original)
})
test('an existing finalized bill can produce Form 2 without charging its students again',async()=>{
 const {ctx,args,tables}=form2Fixture(2)
 const billingPreview=await billing.preview.handler(ctx,args)
 const id=await billing.finalize.handler(ctx,{...args,expectedVersion:billingPreview.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'})
 const savedArgs={...args,billingReportId:id}
 const p=await form2.preview.handler(ctx,savedArgs)
 assert.equal(p.globalIssues.length,0);assert.equal(p.eligibleCount,2)
 await form2.generate.handler(ctx,{...savedArgs,expectedVersion:p.version,reference:'',billingDate:''})
 assert.equal(tables.billingReports.length,1);assert.equal(tables.billingLedger.length,2)
 await assert.rejects(()=>form2.preview.handler(ctx,{...savedArgs,schoolYear:'2026-2027'}),/academic period/)
 await assert.rejects(()=>form2.preview.handler(ctx,{...savedArgs,batches:['1']}),/in full/)
})
test('invalid year levels and changed mapping versions are rejected server-side',async()=>{
 const {ctx,args,tables}=form2Fixture(1)
 const old=await form2.preview.handler(ctx,args)
 tables.billingProfiles[0].yearLevel='Unknown'
 const p=await form2.preview.handler(ctx,args)
 assert.equal(p.eligibleCount,0);assert.ok(p.globalIssues.some(i=>i.includes('inconsistent Form 2')))
 await assert.rejects(()=>form2.generate.handler(ctx,{...args,expectedVersion:old.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'}),/changed/)
})
test('billing profile edits invalidate the earlier continuing verification',async()=>{
 const {ctx,args,tables}=form2Fixture(1),p=tables.billingProfiles[0]
 const fields=['schoolYear','semester','studentId','sourceRecordId','campus','college','program','yearLevel','lastName','firstName','middleInitial','sex','birthDate','units','zip','email','phone','actualFees','category','disabilityVerified','eligible','reviewNote']
 await billing.saveProfile.handler(ctx,{sessionToken:args.sessionToken,...Object.fromEntries(fields.map(k=>[k,p[k]]))})
 assert.equal(tables.billingProfiles[0].form2ContinuingVerified,false)
})
