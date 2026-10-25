import assert from 'node:assert/strict'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api.js'

const client=new ConvexHttpClient('https://ideal-crane-292.convex.cloud')
const args={sessionToken:'invalid-form2-access-check-session',schoolYear:'2025-2026',semester:'1st Semester'}
await Promise.all([
 assert.rejects(()=>client.query(api.form2.settings,args),/session expired|administrator/i),
 assert.rejects(()=>client.mutation(api.form2.preview,{...args,batches:[]}),/session expired|administrator/i),
 assert.rejects(()=>client.mutation(api.form2.generate,{...args,batches:[],expectedVersion:'invalid',reference:'invalid',billingDate:'2025-12-01'}),/session expired|administrator/i),
 assert.rejects(()=>client.mutation(api.form2.saveMapping,{...args,applicationNumberVerified:true,batchColumnMode:'databaseBatch',designation:'',authority:'invalid access check'}),/session expired|administrator/i),
])
console.log('PASS deployed Form 2 settings, preview, generation and mapping endpoints reject an invalid administrator session; no student or billing records changed.')
