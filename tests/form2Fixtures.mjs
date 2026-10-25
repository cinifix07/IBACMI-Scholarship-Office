import fs from 'node:fs'
import { v } from 'convex/values'
import { fixture, handlers as billing, rules } from './billingFixtures.mjs'
const source=fs.readFileSync(new URL('../convex/form2.js',import.meta.url),'utf8').replace(/^import .*$/gm,'').replace(/export /g,'')
const inject={buildPreview:billing.buildPreview,finalizeBilling:billing.finalizeBilling,requireAdmin:billing.requireAdmin,...rules}
export const form2=new Function('v','mutation','query',...Object.keys(inject),source+';return {settings,saveMapping,reviewContinuing,preview,generate,download};')(v,x=>x,x=>x,...Object.values(inject))
export function form2Fixture(count=12){
 const data=fixture(count);data.tables.form2Reports=[]
 data.tables.billingConfigs[0].form2Mapping={applicationNumberVerified:true,batchColumnMode:'databaseBatch',designation:'',authority:'TEST ONLY mapping evidence'}
 for(const p of data.tables.billingProfiles){p.form2ContinuingVerified=true;p.form2Evidence='TEST ONLY continuing enrollment evidence'}
 return data
}
export async function form2Sample(count=88){
 const {ctx,args}=form2Fixture(count)
 const p=await form2.preview.handler(ctx,args)
 const id=await form2.generate.handler(ctx,{...args,expectedVersion:p.version,reference:'TEST-2025-1-1',billingDate:'2025-12-01'})
 return form2.download.handler(ctx,{sessionToken:args.sessionToken,reportId:id,format:'xlsx'})
}
