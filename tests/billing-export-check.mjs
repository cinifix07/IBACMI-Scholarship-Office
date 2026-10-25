import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { sampleReport } from './billingFixtures.mjs'
const {chromium}=await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const report=await sampleReport(88)
const browser=await chromium.launch({channel:'msedge',headless:true})
try{
 const page=await browser.newPage()
 await page.route('**/__exports',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html><body>Export verification</body></html>'}))
 await page.goto('http://127.0.0.1:5174/IBACMI-Scholarship-Office/__exports')
 const result=await page.evaluate(async(report)=>{
   const mod=await import('/IBACMI-Scholarship-Office/src/admin/billingExport.js')
   const template=await mod.loadBillingTemplate()
   const xlsx=[...await mod.createBillingWorkbook(report,template)]
   const pdf=[...await mod.createBillingPdf(report,template)]
   return {xlsx,pdf}
 },report)
 await fs.mkdir('tmp/billing-check',{recursive:true})
 await fs.writeFile('tmp/billing-check/88-students.xlsx',new Uint8Array(result.xlsx))
 await fs.writeFile('tmp/billing-check/88-students.pdf',new Uint8Array(result.pdf))
 await fs.writeFile('tmp/billing-check/expected-report.json',JSON.stringify(report,null,2))
 console.log('Exported 88 synthetic students:',result.xlsx.length,'Excel bytes;',result.pdf.length,'PDF bytes')
}finally{await browser.close()}
