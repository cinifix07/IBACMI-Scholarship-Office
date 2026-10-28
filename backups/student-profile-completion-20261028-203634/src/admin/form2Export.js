import JSZip from 'jszip'
import { drawTemplateSheet, workbookTools as tools } from './billingExport'

const {parse,nodes,serial,element,columnName,cellAt,rowAt,write,merge,shiftedRef}=tools
const areas=[{start:36,end:40,total:41},{start:3,end:26,total:27},{start:3,end:28,total:29},{start:3,end:31,total:32},{start:3,end:6,total:7}]
export async function loadForm2Template() {
  const response=await fetch(`${import.meta.env.BASE_URL.replace(/\/$/,'')}/templates/form2-list.xlsx`)
  if(!response.ok)throw new Error('The official Form 2 template could not be loaded.')
  const bytes=await response.arrayBuffer();const zip=await JSZip.loadAsync(bytes)
  if(zip.file('xl/sharedStrings.xml'))throw new Error('Form 2 template must be sanitized before use.')
  if(!zip.file('xl/worksheets/sheet6.xml'))throw new Error('The six-sheet official template is incomplete.')
  return bytes
}

async function populate(report,template) {
  if(!report.rows?.length||!report.mapping?.applicationNumberVerified)throw new Error('A validated report and confirmed application-number mapping are required.')
  if(!['databaseBatch','designation'].includes(report.mapping.batchColumnMode)||(report.mapping.batchColumnMode==='designation'&&!report.mapping.designation.trim()))throw new Error('Verify column N before export.')
  if(report.rows.reduce((sum,row)=>sum+row.total,0)!==report.totals.benefits)throw new Error('Form 2 student totals do not reconcile with the saved billing statement.')
  const rows=[...report.rows].sort((a,b)=>['campus','college','program','lastName','firstName','middleInitial'].reduce((result,key)=>result||String(a.profile[key]).localeCompare(String(b.profile[key]),'en',{sensitivity:'base'}),0)||a.studentId.localeCompare(b.studentId)).map((row,index)=>({...row,controlNumber:String(index+1).padStart(5,'0')}))
  const zip=await JSZip.loadAsync(template)
  const sheets=await Promise.all(Array.from({length:6},(_,i)=>zip.file(`xl/worksheets/sheet${i+1}.xml`).async('string').then(parse)))
  const styles=parse(await zip.file('xl/styles.xml').async('string'))
  const workbook=parse(await zip.file('xl/workbook.xml').async('string'))
  const xfs=nodes(styles,'cellXfs')[0],cache=new Map(),fonts=nodes(styles,'fonts')[0],fontCache=new Map()
  const formatId=Math.max(163,...nodes(styles,'numFmt').map(n=>Number(n.getAttribute('numFmtId'))))+1
  let formats=nodes(styles,'numFmts')[0];if(!formats){formats=element(styles,'numFmts');styles.documentElement.insertBefore(formats,styles.documentElement.firstChild)}
  const dateFormat=element(styles,'numFmt');dateFormat.setAttribute('numFmtId',formatId);dateFormat.setAttribute('formatCode','mm/dd/yyyy');formats.append(dateFormat);formats.setAttribute('count',formats.children.length)
  const wrapStyle=(base,format,size,shrink=false)=>{const key=`${base}|${format}|${size}|${shrink}`;if(cache.has(key))return cache.get(key);const xf=xfs.children[Number(base||0)].cloneNode(true);let alignment=nodes(xf,'alignment')[0];if(!alignment){alignment=element(styles,'alignment');xf.append(alignment)}alignment.setAttribute('wrapText',shrink?'0':'1');alignment.setAttribute('vertical','center');if(shrink)alignment.setAttribute('shrinkToFit','1');xf.setAttribute('applyAlignment','1');if(format!==undefined){xf.setAttribute('numFmtId',format);xf.setAttribute('applyNumberFormat','1')}if(size){const fontId=Number(xf.getAttribute('fontId')||0),fontKey=`${fontId}|${size}`;if(!fontCache.has(fontKey)){const font=fonts.children[fontId].cloneNode(true);nodes(font,'sz')[0].setAttribute('val',size);fontCache.set(fontKey,fonts.children.length);fonts.append(font);fonts.setAttribute('count',fonts.children.length)}xf.setAttribute('fontId',fontCache.get(fontKey));xf.setAttribute('applyFont','1')}const id=xfs.children.length;xfs.append(xf);xfs.setAttribute('count',xfs.children.length);cache.set(key,id);return id}
  let definitions=nodes(workbook,'definedNames')[0];if(!definitions){definitions=element(workbook,'definedNames');const calc=nodes(workbook,'calcPr')[0];workbook.documentElement.insertBefore(definitions,calc||null)}
  const define=(name,sheetIndex,value)=>{let found=nodes(definitions,'definedName').find(d=>d.getAttribute('name')===name&&Number(d.getAttribute('localSheetId'))===sheetIndex);if(!found){found=element(workbook,'definedName');found.setAttribute('name',name);found.setAttribute('localSheetId',sheetIndex);definitions.append(found)}found.textContent=value}
  const metadata=[];let offset=0
  for(let index=0;index<5;index++){
    const doc=sheets[index],area=areas[index],capacity=area.end-area.start+1
    const take=index===4?rows.length-offset:Math.min(capacity,rows.length-offset)
    const students=rows.slice(offset,offset+take);offset+=take
    const delta=index===4?Math.max(0,take-capacity):0
    const sourceRow=rowAt(doc,area.start).cloneNode(true)
    if(delta){for(const row of nodes(doc,'row')){const n=Number(row.getAttribute('r'));if(n<area.total)continue;row.setAttribute('r',n+delta);for(const cell of nodes(row,'c')){cell.setAttribute('r',shiftedRef(cell.getAttribute('r'),area.total,delta));for(const formula of nodes(cell,'f'))formula.textContent=shiftedRef(formula.textContent,area.total,delta)}}for(const m of nodes(doc,'mergeCell'))m.setAttribute('ref',shiftedRef(m.getAttribute('ref'),area.total,delta))}
    const widths=Array.from({length:17},()=>8.43)
    for(const col of nodes(doc,'col'))for(let c=Number(col.getAttribute('min'));c<=Math.min(17,Number(col.getAttribute('max')));c++)widths[c-1]=Number(col.getAttribute('width'))
    for(let number=area.start;number<=area.end+delta;number++){
      let row=nodes(doc,'row').find(r=>Number(r.getAttribute('r'))===number)
      if(!row){row=sourceRow.cloneNode(true);row.setAttribute('r',number);for(const c of nodes(row,'c'))c.setAttribute('r',c.getAttribute('r').replace(/\d+$/,number));const data=nodes(doc,'sheetData')[0];data.insertBefore(row,[...data.children].find(r=>Number(r.getAttribute('r'))>number)||null)}
      for(let c=2;c<=17;c++){const cell=cellAt(doc,`${columnName(c)}${number}`);if(cell){while(cell.firstChild)cell.firstChild.remove();cell.removeAttribute('t')}}
      const student=students[number-area.start];if(!student)continue
      const p=student.profile
      const year=/^([1-6])(?:st|nd|rd|th)?(?:\s*year)?$/i.exec(String(p.yearLevel).trim())
      if(!year)throw new Error(`Verify the numeric year level for ${student.studentId}.`)
      const values=[student.controlNumber,student.studentId,student.tesAwardNumber,p.lastName,p.firstName,p.middleInitial,p.sex,serial(p.birthDate),p.program,Number(year[1]),p.email,p.phone,report.mapping.batchColumnMode==='databaseBatch'?student.batch:report.mapping.designation,(student.tes1+student.tes2)/100,student.tes3a/100,student.total/100]
      values.forEach((value,i)=>{const ref=`${columnName(i+2)}${number}`;const style=wrapStyle(cellAt(doc,ref)?.getAttribute('s')||cellAt(doc,`${columnName(i+2)}${area.start}`)?.getAttribute('s')||0,i===7?formatId:i>=13?4:[0,1,2,11,12].includes(i)?49:undefined,i===0?8:10,i===0);write(doc,ref,value,{style})})
      write(doc,`Q${number}`,student.total/100,{formula:`SUM(O${number}:P${number})`})
      const height=Math.max(Number(sourceRow.getAttribute('ht')||15),...values.map((value,i)=>Math.ceil(String(i===7?p.birthDate:value).length/Math.max(3,widths[i+1]-1))*12))
      if(height>409)throw new Error(`Student ${student.studentId} has text too long for the official print row.`)
      row.setAttribute('ht',height);row.setAttribute('customHeight','1')
    }
    const total=area.total+delta,end=total-1
    for(const [col,amount] of [['O',students.reduce((s,r)=>s+r.tes1+r.tes2,0)],['P',students.reduce((s,r)=>s+r.tes3a,0)],['Q',students.reduce((s,r)=>s+r.total,0)]])write(doc,`${col}${total}`,amount/100,{formula:`SUM(${col}${area.start}:${col}${end})`,style:wrapStyle(cellAt(doc,`Q${total}`).getAttribute('s')||0,4)})
    const maxRow=Number(nodes(doc,'dimension')[0].getAttribute('ref').split(':').at(-1).match(/\d+/)[0])+delta
    nodes(doc,'dimension')[0].setAttribute('ref',`B1:R${maxRow}`)
    define('_xlnm.Print_Area',index,`'Sheet${index+1}'!$B$1:$Q$${maxRow}`)
    if(index)define('_xlnm.Print_Titles',index,`'Sheet${index+1}'!$1:$2`)
    metadata.push({total,maxRow,studentCount:students.length,delta})
  }
  const first=sheets[0]
  merge(first,'B15:M15')
  for(const number of [13,15,17]){rowAt(first,number).setAttribute('ht',number===15?'24':'36');rowAt(first,number).setAttribute('customHeight','1')}
  write(first,'B9',`LISTAHANAN 2 - ${report.semester} AY ${report.schoolYear}`)
  // Give the issued reference a wide, wrapped cell without changing other merges.
  write(first,'P10','');write(first,'L10','TES Billing Details Reference Number:');merge(first,'L10:P10')
  write(first,'Q10',report.reference,{style:wrapStyle(cellAt(first,'Q10').getAttribute('s')||0)});merge(first,'Q10:R10')
  rowAt(first,10).setAttribute('ht','30');rowAt(first,10).setAttribute('customHeight','1')
  write(first,'Q11',serial(report.billingDate),{style:wrapStyle(cellAt(first,'Q11')?.getAttribute('s')||0,formatId)})
  const last=sheets[4],footer=metadata[4].total
  for(const col of ['O','P','Q']){const formula=`SUM(${metadata.map((page,i)=>`'Sheet${i+1}'!${col}${page.total}`).join(',')})`;const amount=col==='O'?report.totals.tes1+report.totals.tes2:col==='P'?report.totals.tes3a:report.totals.benefits;write(last,`${col}${footer+1}`,amount/100,{formula,style:wrapStyle(cellAt(last,`Q${footer}`).getAttribute('s'),4)})}
  write(last,`B${footer+2}`,`ADD: ${(report.ascBasisPoints/100).toFixed(2)} percent Admin Cost (as authorized)`)
  write(last,`Q${footer+2}`,report.totals.asc/100,{formula:`ROUND(Q${footer+1}*${report.ascBasisPoints}/10000,2)`,style:wrapStyle(cellAt(last,`Q${footer}`).getAttribute('s'),4)})
  write(last,`Q${footer+3}`,report.totals.total/100,{formula:`SUM(Q${footer+1}:Q${footer+2})`,style:wrapStyle(cellAt(last,`Q${footer}`).getAttribute('s'),4)})
  // Sheet7 is a live batch reference list, not the old template's 97-person roster.
  const reference=sheets[5],baseRow=rowAt(reference,3).cloneNode(true),groups=new Map()
  for(const row of rows){if(!groups.has(row.batch))groups.set(row.batch,[]);groups.get(row.batch).push(row)}
  for(const row of nodes(reference,'row'))if(Number(row.getAttribute('r'))>=3)row.remove()
  write(reference,'A1','Selected TES batch reference list')
  let n=3
  for(const [batch,students] of [...groups].sort((a,b)=>a[0].localeCompare(b[0],undefined,{numeric:true}))){write(reference,`A${n}`,`Batch ${batch} — ${students.length} grantees`);merge(reference,`A${n}:D${n}`);rowAt(reference,n).setAttribute('ht','24');rowAt(reference,n).setAttribute('customHeight','1');n++
    for(const student of students){const row=baseRow.cloneNode(true);row.setAttribute('r',n);for(const c of nodes(row,'c'))c.setAttribute('r',c.getAttribute('r').replace(/\d+$/,n));nodes(reference,'sheetData')[0].append(row);[student.controlNumber,student.profile.lastName,student.profile.firstName,student.profile.middleInitial].forEach((value,i)=>write(reference,`${columnName(i+1)}${n}`,value,{style:wrapStyle(cellAt(reference,`${columnName(i+1)}${n}`).getAttribute('s')||0,i===0?49:undefined,i===0?9:undefined,i===0)}));n++}}
  nodes(reference,'dimension')[0].setAttribute('ref',`A1:D${n-1}`);define('_xlnm.Print_Area',5,`'Sheet7'!$A$1:$D$${n-1}`);define('_xlnm.Print_Titles',5,"'Sheet7'!$1:$2")
  let calc=nodes(workbook,'calcPr')[0];if(!calc){calc=element(workbook,'calcPr');workbook.documentElement.append(calc)}calc.setAttribute('calcMode','auto');calc.setAttribute('fullCalcOnLoad','1');calc.setAttribute('forceFullCalc','1')
  const serializer=new XMLSerializer();sheets.forEach((doc,i)=>zip.file(`xl/worksheets/sheet${i+1}.xml`,serializer.serializeToString(doc)));zip.file('xl/styles.xml',serializer.serializeToString(styles));zip.file('xl/workbook.xml',serializer.serializeToString(workbook))
  return {zip,sheets,styles,metadata}
}
export async function createForm2Workbook(report,template){const {zip}=await populate(report,template);return zip.generateAsync({type:'uint8array',compression:'DEFLATE'})}
export async function createForm2Pdf(report,template){
  const {jsPDF}=await import('jspdf');const {zip,sheets,styles,metadata}=await populate(report,template)
  const pdf=new jsPDF({orientation:'landscape',unit:'mm',format:'legal',compress:true})
  const layout=drawTemplateSheet(pdf,sheets[0],[],styles,{first:false,reference:report.reference,maxColumn:18,maxRow:49,paperFormat:'legal',headerRows:[34,35],continuedTitle:'TES Continuing Form 2'})
  // Retain the CHED and UniFAST logos from the original drawing anchors.
  const drawing=parse(await zip.file('xl/drawings/drawing1.xml').async('string'))
  const anchors=[...drawing.documentElement.children]
  const relations=parse(await zip.file('xl/drawings/_rels/drawing1.xml.rels').async('string'))
  const lastCoverPage=pdf.getNumberOfPages();pdf.setPage(1)
  for(const anchor of anchors){const from=[...anchor.children].find(e=>e.localName==='from');const to=[...anchor.children].find(e=>e.localName==='to');const ext=[...anchor.children].find(e=>e.localName==='ext');const blip=[...anchor.getElementsByTagName('*')].find(e=>e.localName==='blip');if(!from||(!to&&!ext)||!blip)continue
    const rel=[...relations.documentElement.children].find(r=>r.getAttribute('Id')===blip.getAttribute('r:embed'));if(!rel)continue
    const target=rel.getAttribute('Target');const path=target.startsWith('/')?target.slice(1):'xl/'+target.replace(/^\.\.\//,'');const bytes=await zip.file(path)?.async('base64');if(!bytes)continue
    const num=(node,key)=>Number([...node.children].find(e=>e.localName===key)?.textContent||0)
    const yFor=(node)=>layout.margin+layout.rows.filter(r=>Number(r.getAttribute('r'))<=num(node,'row')).reduce((sum,r)=>sum+layout.heightFor(r)*layout.scale,0)+num(node,'rowOff')/9525*layout.scale
    const x1=layout.x[num(from,'col')]+num(from,'colOff')/9525*layout.scale,y1=yFor(from),x2=to?layout.x[Math.min(18,num(to,'col'))]+num(to,'colOff')/9525*layout.scale:x1+Number(ext.getAttribute('cx'))/9525*layout.scale,y2=to?yFor(to):y1+Number(ext.getAttribute('cy'))/9525*layout.scale
    pdf.addImage(`data:image/png;base64,${bytes}`,'PNG',x1,y1,Math.max(1,x2-x1),Math.max(1,y2-y1))
  }
  pdf.setPage(lastCoverPage)
  for(let i=1;i<5;i++){if(!metadata[i].studentCount&&i!==4)continue;pdf.addPage('legal','landscape');drawTemplateSheet(pdf,sheets[i],[],styles,{first:false,reference:report.reference,maxColumn:17,maxRow:metadata[i].maxRow,headerRows:[1,2],paperFormat:'legal',continuedTitle:'TES Continuing Form 2'})}
  pdf.addPage('legal','portrait');drawTemplateSheet(pdf,sheets[5],[],styles,{first:false,reference:report.reference,maxColumn:4,headerRows:[1,2],paperFormat:'legal',landscape:false,continuedTitle:'TES batch reference list'})
  const count=pdf.getNumberOfPages();for(let i=1;i<=count;i++){pdf.setPage(i);pdf.setFont('helvetica','normal');pdf.setFontSize(7);pdf.text(`${report.reference} | Form 2 | ${i} of ${count}`,pdf.internal.pageSize.getWidth()/2,pdf.internal.pageSize.getHeight()-5,{align:'center'})}
  return new Uint8Array(pdf.output('arraybuffer'))
}
export async function downloadForm2(report,format,template){
  const bytes=format==='pdf'?await createForm2Pdf(report,template):await createForm2Workbook(report,template)
  const url=URL.createObjectURL(new Blob([bytes],{type:format==='pdf'?'application/pdf':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}))
  const a=document.createElement('a');a.href=url;a.download=`Form-2-${report.reference.replace(/[^A-Za-z0-9._-]/g,'-')}.${format}`;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)
}
