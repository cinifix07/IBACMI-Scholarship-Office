import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'
import { docs,http,metadata,documentationFixture } from './documentationFixtures.mjs'
const {chromium}=await import(pathToFileURL('C:/Users/ACER ASPIRE 3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'))
const data=documentationFixture(),out='tmp/documentation-check',base='http://127.0.0.1:5174/IBACMI-Scholarship-Office'
await fs.mkdir(out,{recursive:true})
const browser=await chromium.launch({channel:'msedge',headless:true})
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[]
 let publicReads=0,publicImageRequests=0
 page.on('pageerror',error=>{errors.push(error.message);console.error(error.stack)})
 await page.addInitScript(()=>{Object.defineProperty(window.crypto,'randomUUID',{value:undefined,configurable:true});const raf=window.requestAnimationFrame.bind(window);window.requestAnimationFrame=callback=>raf(time=>callback(time*20))})
 await page.exposeFunction('billingCall',(name,args)=>{if(name==='applicantPortal:get')return {isReceivingApplicants:false};if(name==='allinfo:searchPublic')return [];if(name.startsWith('documentation:')){if(name==='documentation:published')publicReads++;return docs[name.split(':')[1]].handler(data.ctx,args)}throw new Error(`Unexpected test query ${name}`)})
 await page.route('**/node_modules/.vite/deps/convex_react.js*',route=>route.fulfill({contentType:'text/javascript',body:`export {useQuery,useMutation,useQueries,useConvex,useConvexConnectionState,useMutation as useAction} from '/IBACMI-Scholarship-Office/tests/billingBridge.jsx';`}))
 await page.route('**/documentation/upload?*',async route=>{const request=route.request();const response=await http.uploadDocumentation(data.ctx,new Request(request.url(),{method:'POST',headers:request.headers(),body:request.postDataBuffer()}));await route.fulfill({status:response.status,headers:Object.fromEntries(response.headers),body:Buffer.from(await response.arrayBuffer())});await page.evaluate(()=>window.dispatchEvent(new Event('billing-refresh')))})
 await page.route('**/documentation/image?*',async route=>{const request=route.request();if(!request.headers().authorization)publicImageRequests++;const response=await http.readDocumentation(data.ctx,new Request(request.url(),{headers:request.headers()}));await route.fulfill({status:response.status,headers:Object.fromEntries(response.headers),body:Buffer.from(await response.arrayBuffer())})})
 await page.route('**/__documentation-check',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/IBACMI-Scholarship-Office/tests/documentationHarness.jsx"></script></body></html>'}))
 await page.goto(base+'/__documentation-check');await page.waitForFunction(()=>window.documentationReady)
 await page.locator('.scholarship-showcase').waitFor();assert.equal(await page.locator('.documentation-gallery').count(),0)
 await page.getByRole('button',{name:'Open documentation test'}).click()
 await page.getByLabel('Documentation title',{exact:true}).fill('TEST ONLY Documentation')
 await page.getByLabel('Documentation description',{exact:true}).fill('Isolated browser test image; not published to the real deployment.')
 await page.getByLabel('Choose documentation images',{exact:true}).setInputFiles('src/assets/IBACMI.png')
 await page.waitForFunction(()=>!document.querySelector('.documentation-admin-dialog .billing-primary').disabled)
 await page.getByRole('button',{name:'Save Documentation',exact:true}).click()
 await page.getByText('1 documentation image saved to Convex Storage.',{exact:true}).waitFor()
 assert.equal(data.tables.documentation.length,1);assert.equal(data.files.size,1);assert.equal(data.tables.documentation[0].status,'draft')
 await page.getByRole('button',{name:'Preview TEST ONLY Documentation',exact:true}).click()
 await page.locator('.documentation-viewer img').waitFor();await page.getByRole('button',{name:'Close image viewer'}).click()
 await page.getByRole('button',{name:'Publish',exact:true}).click();await page.getByText('Image published on the homepage.',{exact:true}).waitFor()
 await page.getByRole('button',{name:'Edit details',exact:true}).click()
 await page.locator('.documentation-details-dialog').getByLabel('Documentation title',{exact:true}).fill('TEST ONLY Updated')
 await page.getByRole('button',{name:'Save details',exact:true}).click();await page.getByText('Documentation details saved.',{exact:true}).waitFor()
 await page.screenshot({path:out+'/admin-desktop.png'})
 await page.getByRole('button',{name:'Close Documentation Management',exact:true}).click()
 await page.locator('.documentation-gallery').waitFor();assert.equal(await page.locator('.documentation-gallery').evaluate(el=>el.previousElementSibling.classList.contains('scholarship-showcase')),true)
 assert.equal(await page.locator('.documentation-controls').count(),0)
 await page.getByRole('textbox',{name:'Search official grantee records',exact:true}).fill('TEST-ONLY')
 assert.equal(await page.locator('.documentation-gallery').count(),0);assert.equal(await page.locator('.scholarship-showcase').count(),0)
 await page.getByRole('textbox',{name:'Search official grantee records',exact:true}).fill('')
 await data.upload({...metadata,title:'TEST ONLY Second',status:'published',displayOrder:1})
 await page.evaluate(()=>window.dispatchEvent(new Event('billing-refresh')))
 await page.locator('.documentation-stage.is-pair').waitFor()
 await data.upload({...metadata,title:'TEST ONLY Third',status:'published',displayOrder:2})
 await page.evaluate(()=>window.dispatchEvent(new Event('billing-refresh')))
 await page.locator('.documentation-stage:not(.is-pair):not(.is-single)').waitFor()
 await page.locator('.documentation-stage').scrollIntoViewIfNeeded();await page.mouse.move(0,0);await page.evaluate(()=>document.activeElement?.blur())
 const seen=new Set(),readsBefore=publicReads,imagesBefore=publicImageRequests
 for(let i=0;i<16;i++){await page.waitForTimeout(450);seen.add(await page.locator('.documentation-controls > span').innerText());const visible=await page.locator('.documentation-stage').evaluate(stage=>{const bounds=stage.getBoundingClientRect();return [...stage.querySelectorAll('.documentation-card')].filter(card=>{const r=card.getBoundingClientRect();return Number(getComputedStyle(card).opacity)>.05&&r.right>bounds.left&&r.left<bounds.right}).length});assert.ok(visible>0)}
 assert.equal(seen.size,3);assert.equal(publicReads,readsBefore);assert.ok(publicImageRequests-imagesBefore<=3)
 await page.locator('.documentation-stage').hover();const paused=await page.locator('.documentation-controls > span').innerText();await page.waitForTimeout(500);assert.equal(await page.locator('.documentation-controls > span').innerText(),paused)
 await page.screenshot({path:out+'/public-desktop.png'})
 const openButton=page.locator('.documentation-stage .documentation-card[aria-hidden="false"]').nth(1)
 await openButton.click();await page.locator('.documentation-viewer').waitFor();await page.getByRole('button',{name:'Next image',exact:true}).click();await page.keyboard.press('Escape');assert.equal(await page.locator('.documentation-viewer').count(),0)
 console.log('PASS documentation flow: upload to storage through real HTTP handlers, draft preview, publish/edit, banner/search preserved, one/two/three image modes, infinite wrap, no empty stage, cached images, hover pause and keyboard viewer')
 for(const size of [{width:390,height:844},{width:820,height:1180},{width:320,height:568}]){await page.setViewportSize(size);await page.locator('.documentation-stage').scrollIntoViewIfNeeded();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);if(size.width===390)await page.screenshot({path:out+'/public-mobile.png'})}
 await page.emulateMedia({reducedMotion:'reduce'});await page.mouse.move(0,0);await page.evaluate(()=>document.activeElement?.blur());const reduced=await page.locator('.documentation-controls > span').innerText();await page.waitForTimeout(600);assert.equal(await page.locator('.documentation-controls > span').innerText(),reduced)
 const stage=await page.locator('.documentation-stage').boundingBox();await page.mouse.move(stage.x+stage.width*.75,stage.y+stage.height*.5);await page.mouse.down();await page.mouse.move(stage.x+stage.width*.25,stage.y+stage.height*.5,{steps:6});await page.mouse.up();assert.equal(await page.locator('.documentation-viewer').count(),0)
 await page.getByRole('button',{name:'Open documentation test'}).click();await page.getByRole('button',{name:'Unpublish',exact:true}).first().click()
 await page.getByRole('button',{name:'Delete',exact:true}).first().click();await page.getByRole('button',{name:'Delete image',exact:true}).click();await page.getByText('Documentation and its image file deleted.',{exact:true}).waitFor();assert.equal(data.tables.documentation.length,2);assert.equal(data.files.size,2)
 await page.screenshot({path:out+'/admin-mobile.png'})
 assert.deepEqual(errors,[]);console.log('PASS responsive/reduced-motion/swipe and safe delete confirmation; no browser runtime errors; all data isolated from the live deployment')
}finally{await browser.close()}
