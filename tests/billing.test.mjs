import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fixture, rules, handlers } from './billingFixtures.mjs'

test('billing requires an unexpired administrator session and active account',async()=>{
  for(const kind of ['missing','expired','student','inactive']){
    const {ctx,args,tables}=fixture()
    if(kind==='missing')args.sessionToken='not-found'
    if(kind==='expired')tables.supportSessions[0].expiresAt=0
    if(kind==='student')tables.supportSessions[0].role='student'
    if(kind==='inactive')tables.admins[0].status='inactive'
    for(const name of ['options','workspace','preview'])await assert.rejects(()=>handlers[name].handler(ctx,args))
    await assert.rejects(()=>handlers.download.handler(ctx,{...args,reportId:'unknown',format:'pdf'}))
    assert.equal(tables.activityLogs.length,0)
  }
})
test('88 synthetic eligible students reproduce the reference arithmetic without writes',async()=>{
  const {ctx,args,tables}=fixture(88),before=JSON.stringify(tables)
  const p=await handlers.preview.handler(ctx,args)
  assert.equal(p.eligibleCount,88);assert.equal(p.totals.benefits,118800000);assert.equal(p.totals.asc,1188000);assert.equal(p.totals.total,119988000)
  assert.deepEqual(p.globalIssues,[]);assert.equal(JSON.stringify(tables),before)
})
test('integer-cent calculations separate TES-3A and authorized administrative cost',()=>{
  assert.deepEqual(rules.calculateTotals([{tes1:350001,tes2:1000000,tes3a:1500000}],100),{tes1:350001,tes2:1000000,tes3a:1500000,benefits:2850001,asc:28500,total:2878501})
  assert.throws(()=>rules.money(10.001));assert.throws(()=>rules.money(-1))
})
test('identical duplicate source rows count once; missing review cannot pass',async()=>{
  const {ctx,args,tables}=fixture()
  tables.allinfo.push({...tables.allinfo[0],_id:'duplicate'})
  let p=await handlers.preview.handler(ctx,args)
  assert.equal(p.selectedCount,3);assert.equal(p.eligibleCount,2);assert.equal(p.duplicateCount,1)
  tables.billingProfiles=[]
  p=await handlers.preview.handler(ctx,args)
  assert.equal(p.eligibleCount,0);assert.equal(p.reviewCount,2)
  await assert.rejects(()=>handlers.finalize.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'}),/review/)
  assert.equal(tables.billingLedger.length,0)
})
test('unauthorized status, incomplete required data, and stale preview block export',async()=>{
  const {ctx,args,tables}=fixture()
  const original=await handlers.preview.handler(ctx,args)
  tables.allinfo[0].status='Inactive';tables.billingProfiles[1].birthDate='2025-02-30'
  const updated=await handlers.preview.handler(ctx,args)
  assert.equal(updated.eligibleCount,0)
  await assert.rejects(()=>handlers.finalize.handler(ctx,{...args,expectedVersion:original.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'}),/changed/)
  assert.equal(tables.billingReports.length,0)
})
test('prior billings and explicit exclusions remain visible with reasons',async()=>{
  const {ctx,args,tables}=fixture()
  tables.billingConfigs[0].priorBilledStudentIds=[tables.allinfo[0].studentId]
  tables.billingProfiles[1].eligible=false
  const p=await handlers.preview.handler(ctx,args)
  assert.equal(p.excludedCount,2);assert.equal(p.rows.length,2);assert.equal(p.reviewCount,0);assert.equal(p.eligibleCount,0)
})
test('finalize saves sorted immutable rows and ledger; repeated download never bills twice',async()=>{
  const {ctx,args,tables}=fixture(), originals=JSON.stringify(tables.allinfo)
  const p=await handlers.preview.handler(ctx,args)
  const id=await handlers.finalize.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'})
  assert.equal(tables.billingLedger.length,2);assert.equal(tables.billingReports.length,1)
  tables.billingProfiles[0].firstName='Changed after finalization'
  for(const format of ['xlsx','pdf']){
    const report=await handlers.download.handler(ctx,{sessionToken:args.sessionToken,reportId:id,format})
    assert.equal(report.rows.length,2);assert.equal(report.rows[0].controlNumber,'00001');assert.equal(report.rows[0].profile.firstName,'Synthetic')
  }
  assert.equal(tables.billingLedger.length,2);assert.equal(JSON.stringify(tables.allinfo),originals)
  await assert.rejects(()=>handlers.finalize.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-2',billingDate:'2025-12-01'}),/changed/)
})
test('prior tranche count and unknown filters are enforced',async()=>{
  const {ctx,args,tables}=fixture()
  tables.billingConfigs[0].priorTranches=2
  const p=await handlers.preview.handler(ctx,args)
  assert.ok(p.globalIssues.some(s=>s.includes('two billing tranches')))
  await assert.rejects(()=>handlers.preview.handler(ctx,{...args,batches:['unknown']}),/does not exist/)
  await assert.rejects(()=>handlers.preview.handler(ctx,{...args,schoolYear:'2025-2027'}),/valid/)
})
test('one TES award cannot be billed under two Student IDs',async()=>{
  const {ctx,args,tables}=fixture()
  tables.allinfo[1].tesAwardNumber=tables.allinfo[0].tesAwardNumber
  const p=await handlers.preview.handler(ctx,args)
  assert.equal(p.eligibleCount,0)
  assert.ok(p.rows.every(row=>row.issues.some(issue=>issue.includes('multiple Student IDs'))))
})
test('prior exclusions cannot be removed and invalid configuration is rejected',async()=>{
  const {ctx,args,tables}=fixture()
  tables.billingConfigs[0].priorBilledStudentIds=['TEST-0001'];tables.billingConfigs[0].priorTranches=1
  const values=Object.fromEntries(Object.keys(rules.configFields).map(key=>[key,tables.billingConfigs[0][key]]))
  await handlers.saveConfig.handler(ctx,{sessionToken:args.sessionToken,...values,priorBilledStudentIds:[],priorTranches:0})
  assert.deepEqual(tables.billingConfigs[0].priorBilledStudentIds,['TEST-0001']);assert.equal(tables.billingConfigs[0].priorTranches,1)
  await assert.rejects(()=>handlers.saveConfig.handler(ctx,{sessionToken:args.sessionToken,...values,ascAuthorized:false}),/authorization/)
})
test('a changed source identity requires a fresh billing review',async()=>{
  const {ctx,args,tables}=fixture(1)
  tables.allinfo[0].lastName='Corrected surname'
  const p=await handlers.preview.handler(ctx,args)
  assert.equal(p.eligibleCount,0)
  assert.ok(p.rows[0].issues.some(issue=>issue.includes('changed after review')))
})
