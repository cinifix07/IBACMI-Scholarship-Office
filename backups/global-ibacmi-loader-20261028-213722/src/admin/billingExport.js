import JSZip from 'jszip'

const NS = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
const parse = text => {
  const doc = new DOMParser().parseFromString(text, 'application/xml')
  if (doc.querySelector('parsererror')) throw new Error('The billing template contains invalid XML.')
  return doc
}
const nodes = (root, name) => [...root.getElementsByTagNameNS(NS, name)]
const serial = value => Math.round((Date.parse(`${value}T00:00:00Z`) - Date.UTC(1899,11,30)) / 86400000)
const element = (doc, name) => doc.createElementNS(NS,name)
const columnNumber = name => [...name].reduce((sum,c)=>sum*26+c.charCodeAt(0)-64,0)
const columnName = index => { let result='';for(let n=index;n>0;n=Math.floor((n-1)/26))result=String.fromCharCode(65+(n-1)%26)+result;return result }
const cellAt = (doc, ref) => nodes(doc,'c').find(c=>c.getAttribute('r')===ref)

function rowAt(doc, number) {
  let row=nodes(doc,'row').find(r=>Number(r.getAttribute('r'))===number)
  if(!row){row=element(doc,'row');row.setAttribute('r',number);const data=nodes(doc,'sheetData')[0];data.insertBefore(row,[...data.children].find(r=>Number(r.getAttribute('r'))>number)||null)}
  return row
}
function write(doc,ref,value,{formula,style}={}) {
  let cell=cellAt(doc,ref)
  if(!cell){cell=element(doc,'c');cell.setAttribute('r',ref);const row=rowAt(doc,Number(ref.match(/\d+/)[0]));const col=columnNumber(ref.match(/[A-Z]+/)[0]);row.insertBefore(cell,[...row.children].find(c=>columnNumber(c.getAttribute('r').match(/[A-Z]+/)[0])>col)||null)}
  while(cell.firstChild)cell.firstChild.remove()
  cell.removeAttribute('t')
  if(style!==undefined)cell.setAttribute('s',style)
  if(formula){const f=element(doc,'f');f.textContent=formula;cell.append(f);const v=element(doc,'v');v.textContent=String(value);cell.append(v)}
  else if(typeof value==='number'){const v=element(doc,'v');v.textContent=String(value);cell.append(v)}
  else {cell.setAttribute('t','inlineStr');const inline=element(doc,'is');const text=element(doc,'t');text.textContent=String(value??'');inline.append(text);cell.append(inline)}
  return cell
}
function merge(doc,ref) {
  const merges=nodes(doc,'mergeCells')[0]
  if(!nodes(merges,'mergeCell').some(m=>m.getAttribute('ref')===ref)){const m=element(doc,'mergeCell');m.setAttribute('ref',ref);merges.append(m);merges.setAttribute('count',merges.children.length)}
}
function shiftedRef(ref, from, delta) {return ref.replace(/([A-Z]+\$?)(\d+)/g,(_,col,row)=>col+(Number(row)>=from?Number(row)+delta:row))}
function shiftFooter(doc, delta) {
  if(!delta)return
  for(const row of nodes(doc,'row')){
    const n=Number(row.getAttribute('r'));if(n<44)continue
    row.setAttribute('r',n+delta)
    for(const cell of nodes(row,'c')){cell.setAttribute('r',shiftedRef(cell.getAttribute('r'),44,delta));for(const formula of nodes(cell,'f'))formula.textContent=shiftedRef(formula.textContent,44,delta)}
  }
  for(const m of nodes(doc,'mergeCell'))m.setAttribute('ref',shiftedRef(m.getAttribute('ref'),44,delta))
}

export async function loadBillingTemplate() {
  const response=await fetch(`${import.meta.env.BASE_URL.replace(/\/$/,'')}/templates/tes-billing.xlsx`)
  if(!response.ok)throw new Error('The official billing template could not be loaded. No new billing was finalized.')
  const bytes=await response.arrayBuffer()
  const zip=await JSZip.loadAsync(bytes)
  if(!zip.file('xl/worksheets/sheet1.xml')||!zip.file('xl/worksheets/sheet2.xml'))throw new Error('The official two-form billing template is missing.')
  return bytes
}

async function populatedTemplate(report,template) {
  if(!report.rows?.length)throw new Error('The saved billing report has no eligible students.')
  const totals=report.rows.reduce((sum,row)=>sum+row.total,0)
  if(totals!==report.totals.benefits||report.totals.total!==report.totals.benefits+report.totals.asc)throw new Error('Billing forms do not reconcile.')
  const zip=await JSZip.loadAsync(template)
  const [form1,form2,workbook,styles]=await Promise.all(['xl/worksheets/sheet1.xml','xl/worksheets/sheet2.xml','xl/workbook.xml','xl/styles.xml'].map(async name=>parse(await zip.file(name).async('string'))))
  const dateStyle=cellAt(form1,'T9').getAttribute('s')
  const sourceRow=rowAt(form2,38).cloneNode(true)
  const campusGroups=new Map()
  for(const row of report.rows){const campus=row.profile.campus;if(!campusGroups.has(campus))campusGroups.set(campus,[]);campusGroups.get(campus).push(row)}
  const dataCount=report.rows.length+campusGroups.size*4
  const delta=Math.max(0,dataCount-6)
  shiftFooter(form2,delta)
  for(const row of nodes(form2,'row')){const n=Number(row.getAttribute('r'));if(n>=38&&n<=43)row.remove()}
  const numberStyle=cellAt(form1,'S25').getAttribute('s')
  const wrappedStyles=new Map()
  const xfs=nodes(styles,'cellXfs')[0]
  const dateFormatId=Math.max(163,...nodes(styles,'numFmt').map(n=>Number(n.getAttribute('numFmtId'))))+1
  const dateFormat=element(styles,'numFmt');dateFormat.setAttribute('numFmtId',dateFormatId);dateFormat.setAttribute('formatCode','mm/dd/yyyy');nodes(styles,'numFmts')[0].append(dateFormat);nodes(styles,'numFmts')[0].setAttribute('count',nodes(styles,'numFmts')[0].children.length)
  const wrappedStyle=(base,format)=>{
    const key=`${base}|${format}`;if(wrappedStyles.has(key))return wrappedStyles.get(key)
    const xf=xfs.children[Number(base)].cloneNode(true)
    let alignment=nodes(xf,'alignment')[0];if(!alignment){alignment=element(styles,'alignment');xf.append(alignment)}
    alignment.setAttribute('wrapText','1');alignment.setAttribute('vertical','center');xf.setAttribute('applyAlignment','1')
    if(format!==undefined){xf.setAttribute('numFmtId',format);xf.setAttribute('applyNumberFormat','1')}
    const id=xfs.children.length;xfs.append(xf);xfs.setAttribute('count',xfs.children.length);wrappedStyles.set(key,id);return id
  }
  const colChars=Array.from({length:19},()=>8.855)
  for(const col of nodes(form2,'col'))for(let c=Number(col.getAttribute('min'));c<=Math.min(19,Number(col.getAttribute('max')));c++)colChars[c-1]=Number(col.getAttribute('width'))
  let accumulatedBenefits=0,allocatedAsc=0
  let current=38
  for(const [campus,students] of campusGroups){
    write(form2,`A${current}`,`Campus: ${campus}`);merge(form2,`A${current}:S${current}`);rowAt(form2,current).setAttribute('ht','24');rowAt(form2,current).setAttribute('customHeight','1');current++
    const first=current
    for(const student of students){
      const row=sourceRow.cloneNode(true);row.setAttribute('r',current);row.setAttribute('ht','40');row.setAttribute('customHeight','1')
      for(const c of nodes(row,'c')){c.setAttribute('r',c.getAttribute('r').replace(/\d+$/,current));while(c.firstChild)c.firstChild.remove();c.removeAttribute('t')}
      const data=nodes(form2,'sheetData')[0];data.insertBefore(row,[...data.children].find(r=>Number(r.getAttribute('r'))>current)||null)
      const p=student.profile
      const values=[student.controlNumber,student.studentId,student.tesAwardNumber,p.lastName,p.firstName,p.middleInitial,p.sex,serial(p.birthDate),p.program,p.yearLevel,p.units,p.zip,p.email,p.phone,p.actualFees,student.tes1/100,student.tes2/100,student.tes3a/100,student.total/100]
      values.forEach((value,index)=>{const ref=`${columnName(index+1)}${current}`;write(form2,ref,value,{style:wrappedStyle(cellAt(form2,ref).getAttribute('s')||0,index===7?dateFormatId:index>=14?4:undefined)})})
      write(form2,`S${current}`,student.total/100,{formula:`P${current}+Q${current}+R${current}`})
      const rowHeight=Math.max(40,...values.map((value,i)=>Math.ceil(String(i===7?student.profile.birthDate:value).length/Math.max(3,colChars[i]-1))*13))
      if(rowHeight>409)throw new Error(`Student ${student.studentId} has text too long for the official Excel row. Review the billing details.`)
      row.setAttribute('ht',rowHeight)
      current++
    }
    write(form2,`A${current}`,`${campus} — TES benefit subtotal`);merge(form2,`A${current}:N${current}`)
    for(const col of ['O','P','Q','R','S'])write(form2,`${col}${current}`,students.reduce((sum,s)=>sum+(col==='O'?Math.round(s.profile.actualFees*100):col==='P'?s.tes1:col==='Q'?s.tes2:col==='R'?s.tes3a:s.total),0)/100,{formula:`SUM(${col}${first}:${col}${current-1})`,style:numberStyle})
    rowAt(form2,current).setAttribute('ht','24');rowAt(form2,current).setAttribute('customHeight','1')
    const subtotalRow=current;current++
    accumulatedBenefits+=students.reduce((sum,s)=>sum+s.total,0)
    const campusAsc=Math.round(accumulatedBenefits*report.ascBasisPoints/10000)-allocatedAsc
    allocatedAsc+=campusAsc
    write(form2,`A${current}`,'Administrative Support Cost');merge(form2,`A${current}:N${current}`)
    write(form2,`S${current}`,campusAsc/100,{formula:`ROUND(SUMIF(B38:B${subtotalRow-1},"<>",S38:S${subtotalRow-1})*${report.ascBasisPoints}/10000,2)-SUMIF(A38:A${subtotalRow},"Administrative Support Cost",S38:S${subtotalRow})`,style:numberStyle})
    current++
    write(form2,`A${current}`,'TOTAL BILLING FOR CAMPUS');merge(form2,`A${current}:N${current}`)
    write(form2,`S${current}`,(students.reduce((sum,s)=>sum+s.total,0)+campusAsc)/100,{formula:`SUM(S${subtotalRow}:S${current-1})`,style:numberStyle})
    rowAt(form2,current).setAttribute('ht','24');rowAt(form2,current).setAttribute('customHeight','1');current++
  }
  const end=37+dataCount
  const footer=44+delta
  // Sum student cells only, so campus subtotal rows are not counted a second time.
  const sumFormula=col=>`SUMIF(B38:B${end},"<>",${col}38:${col}${end})`
  for(const [col,total] of [['P',report.totals.tes1],['Q',report.totals.tes2],['R',report.totals.tes3a],['S',report.totals.benefits]]){
    for(const offset of [0,1,2])write(form2,`${col}${footer+offset}`,total/100,{formula:sumFormula(col),style:numberStyle})
  }
  write(form2,`A${footer+3}`,`Add ${(report.ascBasisPoints/100).toFixed(2)} percent Administrative Support for Partner Institutions`)
  write(form2,`S${footer+3}`,report.totals.asc/100,{formula:`ROUND(S${footer+2}*${report.ascBasisPoints}/10000,2)`,style:numberStyle})
  write(form2,`S${footer+4}`,report.totals.total/100,{formula:`SUMIF(A38:A${end},"TOTAL BILLING FOR CAMPUS",S38:S${end})`,style:numberStyle})
  write(form2,`S${footer+5}`,report.totals.total/100,{formula:`S${footer+4}`,style:numberStyle})
  write(form2,`A${footer+4}`,'TOTAL TES BILLING — ALL CAMPUSES (see campus subtotals above)')
  write(form2,'A4','IBA COLLEGE OF MINDANAO, INC.')
  write(form2,'A5','T.N. PEPITO ST., POBLACION, VALENCIA CITY, BUKIDNON')
  write(form2,'R8','');write(form2,'R9','')
  write(form2,'N8','TES Billing Details Reference:');merge(form2,'N8:P8')
  write(form2,'Q8',report.reference,{style:wrappedStyle(cellAt(form1,'T8').getAttribute('s')||0)});merge(form2,'Q8:S8')
  write(form2,'N9','Date:');merge(form2,'N9:P9')
  write(form2,'Q9',serial(report.billingDate),{style:dateStyle});merge(form2,'Q9:S9')
  rowAt(form2,8).setAttribute('ht','30');rowAt(form2,8).setAttribute('customHeight','1')
  write(form2,'C28','CHED - Regional Office 10');write(form2,'C29','Archbishop Hayes St., Brgy 40, Cagayan de Oro City')
  write(form2,'A15',`and other school fees, accumulated by ${report.semester}, AY ${report.schoolYear}.`)
  write(form2,'A18',`semester of Academic Year ${report.schoolYear}, arranged exactly as it appears in the Billing Details.`)
  write(form2,'O37',`Actual Tuition and Other School Fees for ${report.semester}, AY ${report.schoolYear}`)
  nodes(form2,'dimension')[0].setAttribute('ref',`A1:S${56+delta}`)

  write(form1,'T8',report.reference,{style:wrappedStyle(cellAt(form1,'T8').getAttribute('s')||0)});merge(form1,'T8:X8')
  write(form1,'M8','TES Billing Statement Reference No.:',{style:wrappedStyle(cellAt(form1,'S8').getAttribute('s')||0)});write(form1,'S8','');merge(form1,'M8:S8')
  rowAt(form1,8).setAttribute('ht',Math.max(24,Math.ceil(report.reference.length/35)*12));rowAt(form1,8).setAttribute('customHeight','1')
  for(const [n,label] of [[11,'To'],[12,'Address']]){write(form1,`A${n}`,label,{style:cellAt(form1,`C${n}`).getAttribute('s')});write(form1,`C${n}`,'');merge(form1,`A${n}:C${n}`)}
  write(form1,'T9',serial(report.billingDate))
  write(form1,'D15',`Request for payment of the Tertiary Education Subsidy (TES) grant for ${report.semester},`)
  write(form1,'D16',`Academic Year ${report.schoolYear}, to be charged against the authorized funds for`)
  write(form1,'D17','Tertiary Education (UAQTE), subject to the approved billing authority and supporting documents.')
  write(form1,'D14','CHED - Regional Office 10')
  write(form1,'P22',report.rows.length,{formula:`COUNTA('TES Billing Form 2'!B38:B${end})`})
  write(form1,'T23',(report.totals.tes1+report.totals.tes2)/100,{formula:`SUM('TES Billing Form 2'!P${footer+2}:Q${footer+2})`})
  write(form1,'S24',report.totals.tes3a/100,{formula:`'TES Billing Form 2'!R${footer+2}`})
  write(form1,'S25',report.totals.benefits/100,{formula:'SUM(T23,S24)'})
  write(form1,'D26',`Add: ${(report.ascBasisPoints/100).toFixed(2)} percent Administrative Support Cost (ASC), as authorized`)
  write(form1,'S26',report.totals.asc/100,{formula:`ROUND(S25*${report.ascBasisPoints}/10000,2)`})
  write(form1,'S27',report.totals.total/100,{formula:'SUM(S25:S26)'})
  write(form1,'V17',report.totals.total/100,{formula:'S27'})
  write(form1,'B40',`Is this the last batch of billing for this term of AY ${report.schoolYear}?`)
  // Signing dates must be entered by the signatories, rather than fabricated.
  write(form1,'D50','');write(form1,'Q50','')
  for(const name of nodes(workbook,'definedName'))if(name.getAttribute('name')==='_xlnm.Print_Area'&&name.getAttribute('localSheetId')==='1')name.textContent=`'TES Billing Form 2'!$A$1:$S$${55+delta}`
  let titles=nodes(workbook,'definedName').find(n=>n.getAttribute('name')==='_xlnm.Print_Titles'&&n.getAttribute('localSheetId')==='1')
  if(!titles){titles=element(workbook,'definedName');titles.setAttribute('name','_xlnm.Print_Titles');titles.setAttribute('localSheetId','1');nodes(workbook,'definedNames')[0].append(titles)}
  titles.textContent="'TES Billing Form 2'!$36:$37"
  let calc=nodes(workbook,'calcPr')[0];if(!calc){calc=element(workbook,'calcPr');workbook.documentElement.append(calc)}
  calc.setAttribute('calcMode','auto');calc.setAttribute('fullCalcOnLoad','1');calc.setAttribute('forceFullCalc','1')
  // The original calc chain references the two sample rows; Excel rebuilds it.
  zip.remove('xl/calcChain.xml')
  for(const path of ['xl/_rels/workbook.xml.rels','[Content_Types].xml']){
    const doc=parse(await zip.file(path).async('string'))
    for(const el of [...doc.documentElement.children])if([...el.attributes].some(a=>a.value.includes('calcChain')))el.remove()
    zip.file(path,new XMLSerializer().serializeToString(doc))
  }
  const serializer=new XMLSerializer()
  zip.file('xl/worksheets/sheet1.xml',serializer.serializeToString(form1))
  zip.file('xl/worksheets/sheet2.xml',serializer.serializeToString(form2))
  zip.file('xl/workbook.xml',serializer.serializeToString(workbook))
  zip.file('xl/styles.xml',serializer.serializeToString(styles))
  return { zip, form1, form2 }
}

export async function createBillingWorkbook(report,template) {
  const {zip}=await populatedTemplate(report,template)
  return zip.generateAsync({type:'uint8array',compression:'DEFLATE'})
}

function pdfText(value) {
  // Standard PDF fonts support Latin text; normalize typographic punctuation.
  return String(value).replace(/[–—]/g,'-').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/…/g,'...').replace(/₱/g,'PHP ')
}
function cellText(cell,shared,styles) {
  const value=nodes(cell,'v')[0]?.textContent||''
  if(cell.getAttribute('t')==='inlineStr')return nodes(cell,'t').map(t=>t.textContent).join('')
  if(cell.getAttribute('t')==='s')return shared[Number(value)]||''
  if(!value)return ''
  const xf=nodes(styles,'cellXfs')[0]?.children[Number(cell.getAttribute('s')||0)]
  const formatId=Number(xf?.getAttribute('numFmtId')||0)
  const custom=nodes(styles,'numFmt').find(n=>Number(n.getAttribute('numFmtId'))===formatId)?.getAttribute('formatCode')||''
  if((formatId>=14&&formatId<=22)||/y{2,4}/i.test(custom))return new Date(Date.UTC(1899,11,30)+Number(value)*86400000).toLocaleDateString('en-US',{timeZone:'UTC',month:'2-digit',day:'2-digit',year:'numeric'})
  if(formatId===4||formatId===44||/[#,]0.*0/.test(custom))return Number(value).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})
  return Number(value).toLocaleString('en-US',{useGrouping:false,maximumFractionDigits:10})
}

export function drawTemplateSheet(pdf,doc,shared,styles,{first,reference,maxColumn,headerRows=[36,37],paperFormat='a3',landscape=true,maxRow,continuedTitle='TES Billing Form 2',minFontSize=4.5}) {
  const maxCol=maxColumn||(first?24:19)
  const widths=Array.from({length:maxCol},()=>64)
  for(const col of nodes(doc,'col'))for(let i=Number(col.getAttribute('min'));i<=Math.min(maxCol,Number(col.getAttribute('max')));i++)widths[i-1]=Number(col.getAttribute('width')||8.43)*7+5
  const pageWidth=pdf.internal.pageSize.getWidth(),pageHeight=pdf.internal.pageSize.getHeight()
  const margin=first?9:12
  const rows=nodes(doc,'row').filter(row=>Number(row.getAttribute('r'))<=(maxRow||(first?74:100000)))
  const heightFor=row=>Number(row.getAttribute('ht')||nodes(doc,'sheetFormatPr')[0]?.getAttribute('defaultRowHeight')||15)*96/72
  let scale=(pageWidth-2*margin)/widths.reduce((a,b)=>a+b,0)
  if(first)scale=Math.min(scale,(pageHeight-2*margin-10)/rows.reduce((sum,row)=>sum+heightFor(row),0))
  const x=[margin];for(const width of widths)x.push(x.at(-1)+width*scale)
  const merges=nodes(doc,'mergeCell').map(m=>{const [start,end]=m.getAttribute('ref').split(':');return {c1:columnNumber(start.match(/[A-Z]+/)[0]),r1:Number(start.match(/\d+/)[0]),c2:columnNumber(end.match(/[A-Z]+/)[0]),r2:Number(end.match(/\d+/)[0])}})
  const fonts=nodes(styles,'fonts')[0]?.children||[]
  const fills=nodes(styles,'fills')[0]?.children||[]
  const borders=nodes(styles,'borders')[0]?.children||[]
  const xfs=nodes(styles,'cellXfs')[0]?.children||[]
  let y=margin
  function drawRow(row){
    const n=Number(row.getAttribute('r')),height=heightFor(row)*scale
    for(const cell of nodes(row,'c')){
      const c=columnNumber(cell.getAttribute('r').match(/[A-Z]+/)[0]);if(c>maxCol)continue
      if(merges.some(m=>(n>m.r1||c>m.c1)&&n>=m.r1&&n<=m.r2&&c>=m.c1&&c<=m.c2))continue
      const merged=merges.find(m=>m.r1===n&&m.c1===c)
      const width=x[Math.min(maxCol,merged?.c2||c)]-x[c-1]
      const cellHeight=merged?rows.filter(r=>Number(r.getAttribute('r'))>=n&&Number(r.getAttribute('r'))<=merged.r2).reduce((sum,r)=>sum+heightFor(r)*scale,0):height
      const xf=xfs[Number(cell.getAttribute('s')||0)]
      const font=fonts[Number(xf?.getAttribute('fontId')||0)]
      const border=borders[Number(xf?.getAttribute('borderId')||0)]
      const fill=fills[Number(xf?.getAttribute('fillId')||0)]
      const color=fill?nodes(fill,'fgColor')[0]?.getAttribute('rgb'):null
      if(color){pdf.setFillColor('#'+color.slice(-6));pdf.rect(x[c-1],y,width,cellHeight,'F')}
      pdf.setDrawColor(75);pdf.setLineWidth(.12)
      if(border)for(const [side,x1,y1,x2,y2] of [['left',x[c-1],y,x[c-1],y+cellHeight],['right',x[c-1]+width,y,x[c-1]+width,y+cellHeight],['top',x[c-1],y,x[c-1]+width,y],['bottom',x[c-1],y+cellHeight,x[c-1]+width,y+cellHeight]])if(nodes(border,side)[0]?.hasAttribute('style'))pdf.line(x1,y1,x2,y2)
      const text=pdfText(cellText(cell,shared,styles));if(!text)continue
      const alignment=xf?nodes(xf,'alignment')[0]:null
      const align=alignment?.getAttribute('horizontal')||(/^-?[\d,.]+$/.test(text)?'right':'left')
      const fontName=font?nodes(font,'name')[0]?.getAttribute('val')||'':''
      pdf.setFont(/times/i.test(fontName)?'times':'helvetica',font&&nodes(font,'b').length?'bold':'normal')
      let size=Math.max(5,Number(font?nodes(font,'sz')[0]?.getAttribute('val')||10:10)*scale*96/25.4)
      pdf.setFontSize(size);pdf.setTextColor(20)
      // Excel lets long non-wrapped text overflow into adjacent empty cells.
      let textWidth=width-1.3
      if(!merged&&alignment?.getAttribute('wrapText')!=='1'){
        for(let next=c+1;next<=maxCol;next++){const adjacent=cellAt(doc,`${columnName(next)}${n}`);if(adjacent&&cellText(adjacent,shared,styles))break;textWidth=x[next]-x[c-1]-1.3}
      }
      let lines=pdf.splitTextToSize(text,Math.max(1,textWidth))
      if(alignment?.getAttribute('shrinkToFit')==='1'){
        while(pdf.getTextWidth(text)>textWidth&&size>minFontSize){size-=.25;pdf.setFontSize(size)}
        lines=[text]
      }
      while(lines.length*size*.3528*1.12>cellHeight-1&&size>minFontSize){size-=.25;pdf.setFontSize(size);lines=pdf.splitTextToSize(text,Math.max(1,textWidth))}
      const rendered=lines.slice(0,Math.max(1,Math.floor((cellHeight-.8)/(size*.3528*1.12))))
      const textX=align==='center'?x[c-1]+width/2:align==='right'?x[c-1]+width-.6:x[c-1]+.6
      pdf.text(rendered,textX,y+Math.min(cellHeight-.5,size*.3528+.6),{align:['center','right'].includes(align)?align:'left',lineHeightFactor:1.12})
    }
    y+=height
  }
  for(const row of rows){
    const n=Number(row.getAttribute('r'))
    const span=Math.max(1,...merges.filter(m=>m.r1===n).map(m=>m.r2-m.r1+1))
    const needed=rows.filter(r=>Number(r.getAttribute('r'))>=n&&Number(r.getAttribute('r'))<n+span).reduce((sum,r)=>sum+heightFor(r)*scale,0)
    if(!first&&y+needed>pageHeight-margin-8){pdf.addPage(paperFormat,landscape?'landscape':'portrait');y=margin;pdf.setFont('helvetica','normal');pdf.setFontSize(8);pdf.text(`${reference} | ${continuedTitle} - continued`,margin,y);y+=7;for(const header of rows.filter(r=>headerRows.includes(Number(r.getAttribute('r')))))drawRow(header)}
    drawRow(row)
  }
  return {x,scale,margin,heightFor,rows}
}

export const workbookTools = {NS,parse,nodes,serial,element,columnNumber,columnName,cellAt,rowAt,write,merge,shiftedRef,cellText}

export async function createBillingPdf(report,template) {
  const { jsPDF }=await import('jspdf')
  const { zip,form1,form2 }=await populatedTemplate(report,template)
  const sharedDoc=parse(await zip.file('xl/sharedStrings.xml').async('string'))
  const shared=nodes(sharedDoc,'si').map(si=>nodes(si,'t').map(t=>t.textContent).join(''))
  const styles=parse(await zip.file('xl/styles.xml').async('string'))
  const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'legal',compress:true})
  drawTemplateSheet(pdf,form1,shared,styles,{first:true,reference:report.reference})
  pdf.addPage('a3','landscape')
  drawTemplateSheet(pdf,form2,shared,styles,{first:false,reference:report.reference})
  const count=pdf.getNumberOfPages()
  for(let i=1;i<=count;i++){pdf.setPage(i);pdf.setFont('helvetica','normal');pdf.setFontSize(7);pdf.text(`${report.reference} | ${i} of ${count}`,pdf.internal.pageSize.getWidth()/2,pdf.internal.pageSize.getHeight()-5,{align:'center'})}
  return new Uint8Array(pdf.output('arraybuffer'))
}
export async function downloadBilling(report,format,template) {
  const bytes=format==='pdf'?await createBillingPdf(report,template):await createBillingWorkbook(report,template)
  const blob=new Blob([bytes],{type:format==='pdf'?'application/pdf':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
  const url=URL.createObjectURL(blob)
  const anchor=document.createElement('a');anchor.href=url;anchor.download=`${report.reference.replace(/[^A-Za-z0-9._-]/g,'-')}.${format}`;anchor.click()
  setTimeout(()=>URL.revokeObjectURL(url),30000)
}
