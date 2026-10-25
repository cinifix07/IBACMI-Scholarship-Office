import fs from 'node:fs'
import { v } from 'convex/values'

// Run the real handlers against an isolated database double. No live records are used.
const rulesSource = fs.readFileSync(new URL('../convex/billingRules.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
export const rules = new Function('v', rulesSource + '; return {calculateTotals,configFields,filterFields,money,normalizeId,periodFields,periodKey,previewVersion,profileFields,referenceFor,validatePeriod};')(v)
const source = fs.readFileSync(new URL('../convex/billing.js', import.meta.url), 'utf8').replace(/^import .*$/gm, '').replace(/export /g, '')
export const handlers = new Function('v','mutation','query',...Object.keys(rules), source + '; return {options,workspace,saveConfig,saveProfile,preview,finalize,download,requireAdmin,buildPreview,finalizeBilling};')(v,x=>x,x=>x,...Object.values(rules))
export const period = { schoolYear:'2025-2026',semester:'1st Semester' }
export function fixture(count=2) {
  const tables={
    admins:[{_id:'admin-1',name:'Test administrator',role:'admin',status:'active'}],
    supportSessions:[{_id:'session-1',adminId:'admin-1',token:'test-session',role:'admin',expiresAt:Date.now()+1000000}],
    allinfo:[],billingProfiles:[],billingLedger:[],billingReports:[],billingReportRows:[],activityLogs:[],applicants:[],
    billingConfigs:[{_id:'config-1',...period,periodKey:rules.periodKey(period),referenceFormat:'TEST-{YEAR}-{TERM}-{TRANCHE}',authority:'SYNTHETIC TEST POLICY - not an official rate',eligibleStatuses:['Grantee'],rates:[{category:'Test category',tes1Cap:3500,tes2:10000,tes3a:15000}],ascBasisPoints:100,ascAuthorized:true,priorBillingReviewed:true,priorTranches:0,priorBilledStudentIds:[],updatedAt:1,updatedBy:'admin-1'}],
  }
  for(let i=0;i<count;i++){
    const studentId=`TEST-${String(i+1).padStart(4,'0')}`
    const record={_id:`grantee-${i}`,...period,studentId,tesAwardNumber:`TEST-AWARD-${i}`,lastName:`Family ${String(i).padStart(4,'0')}`,firstName:'Synthetic',middleInitial:'T',batchId:i%2?'2':'1',status:'Grantee',uploadedAt:1}
    tables.allinfo.push(record)
    tables.billingProfiles.push({_id:`profile-${i}`,...period,periodKey:rules.periodKey(period),studentId,normalizedStudentId:studentId,sourceRecordId:record._id,campus:i%2?'South Campus':'Main Campus',college:'Test College',program:'Test Program',yearLevel:'2nd Year',lastName:record.lastName,firstName:'Synthetic',middleInitial:'T',sex:i%2?'F':'M',birthDate:'2004-01-02',units:21,zip:'8709',email:`synthetic${i}@example.invalid`,phone:'09123456789',actualFees:4000,category:'Test category',disabilityVerified:false,eligible:true,reviewNote:'SYNTHETIC enrollment and finance evidence',reviewedBy:'admin-1',updatedAt:1})
    tables.billingProfiles.at(-1).sourceVersion=rules.previewVersion([record._id,record.studentId,record.tesAwardNumber,record.lastName,record.firstName,record.middleInitial,record.batchId,record.status,record.semester,record.schoolYear])
  }
  let id=0
  const ctx={db:{
    query(table){let predicates=[];const chain={withIndex(_index,callback){callback({eq(key,value){predicates.push(row=>row[key]===value);return this}});return chain},collect:async()=>tables[table].filter(r=>predicates.every(p=>p(r))),first:async()=>tables[table].find(r=>predicates.every(p=>p(r)))||null,take:async n=>tables[table].filter(r=>predicates.every(p=>p(r))).slice(0,n)};return chain},
    get:async key=>Object.values(tables).flat().find(r=>r._id===key)||null,
    insert:async(table,data)=>{const _id=`${table}-new-${id++}`;tables[table].push({_id,...structuredClone(data)});return _id},
    patch:async(key,values)=>Object.assign(Object.values(tables).flat().find(r=>r._id===key),structuredClone(values)),
  }}
  const args={sessionToken:'test-session',...period,batches:[]}
  return {tables,ctx,args}
}
export async function sampleReport(count=88) {
  const {ctx,args}=fixture(count)
  const p=await handlers.preview.handler(ctx,args)
  const id=await handlers.finalize.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'})
  return handlers.download.handler(ctx,{sessionToken:args.sessionToken,reportId:id,format:'xlsx'})
}

