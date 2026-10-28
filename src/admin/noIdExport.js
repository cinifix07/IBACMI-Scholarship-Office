import JSZip from 'jszip'

const xml = value => [...String(value ?? '')].filter(character => character.charCodeAt(0) >= 32 || ['\t', '\n', '\r'].includes(character)).join('').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
const headers = ['No.', 'Student ID', 'TES Award Number', 'Last Name', 'First Name', 'Middle Name', 'Complete Name', 'Batch Number', 'School Year', 'School ID Status']
const column = index => String.fromCharCode(65 + index)
// Every text cell uses inlineStr, never a formula, including strings beginning with = + - @.
const cell = (ref, value, style = 0) => `<c r="${ref}" s="${style}" t="inlineStr"><is><t xml:space="preserve">${xml(value)}</t></is></c>`
export async function createNoIdWorkbook(report, onProgress) {
  if (!report || !Array.isArray(report.rows) || !report.schoolYear || !Array.isArray(report.batches)) throw new Error('Invalid report response')
  const zip = new JSZip(), last = report.rows.length + 8
  const lines = [
    `<row r="1" ht="28" customHeight="1">${cell('A1', 'IBACMI Scholarship Office', 1)}</row>`,
    `<row r="2" ht="25" customHeight="1">${cell('A2', 'NO ID LIST', 2)}</row>`,
    `<row r="3">${cell('A3', `School Year: ${report.schoolYear}`)}</row>`,
    `<row r="4" ht="36" customHeight="1">${cell('A4', `Selected Batches: ${report.batches.join(', ')}`)}</row>`,
    `<row r="5">${cell('A5', `Date Generated: ${new Intl.DateTimeFormat('en-PH', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Manila' }).format(new Date(report.generatedAt))} (Philippines)`)}</row>`,
    `<row r="6">${cell('A6', `Total Missing School ID Records: ${report.rows.length}`)}</row>`,
    `<row r="8" ht="30" customHeight="1">${headers.map((header, i) => cell(`${column(i)}8`, header, 3)).join('')}</row>`,
  ]
  report.rows.forEach((record, index) => {
    const number = index + 9, values = [index + 1, record.studentId, record.tesAwardNumber, record.lastName, record.firstName, record.middleName, [record.lastName, [record.firstName, record.middleName].filter(Boolean).join(' ')].filter(Boolean).join(', '), record.batchId, record.schoolYear, 'Not Submitted']
    lines.push(`<row r="${number}" ht="30" customHeight="1">${values.map((value, i) => cell(`${column(i)}${number}`, value, index % 2 ? 5 : 4)).join('')}</row>`)
  })
  zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>')
  zip.file('_rels/.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>')
  zip.file('xl/workbook.xml', '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="NO ID LIST" sheetId="1" r:id="rId1"/></sheets></workbook>')
  zip.file('xl/_rels/workbook.xml.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>')
  zip.file('xl/styles.xml', '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="0"/><fonts count="3"><font><sz val="11"/><name val="Calibri"/><color rgb="FF60372E"/></font><font><b/><sz val="16"/><name val="Calibri"/><color rgb="FF792D39"/></font><font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font></fonts><fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF792D39"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFF1E5"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE47D32"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="6"><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="1" fillId="0" borderId="0"/><xf numFmtId="49" fontId="2" fillId="4" borderId="0"/><xf numFmtId="49" fontId="2" fillId="2" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="3" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>')
  zip.file('xl/worksheets/sheet1.xml', `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><dimension ref="A1:J${Math.max(8, last)}"/><sheetViews><sheetView workbookViewId="0"><pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="20"/><cols>${[7, 20, 30, 22, 22, 20, 38, 22, 20, 22].map((width, i) => `<col min="${i + 1}" max="${i + 1}" width="${width}" customWidth="1"/>`).join('')}</cols><sheetData>${lines.join('')}</sheetData><autoFilter ref="A8:J${Math.max(8, last)}"/><mergeCells count="6">${[1, 2, 3, 4, 5, 6].map(row => `<mergeCell ref="A${row}:J${row}"/>`).join('')}</mergeCells></worksheet>`)
  return zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' }, info => onProgress?.(info.percent))
}

export function saveNoIdWorkbook(filename, bytes) {
  if (!/^IBACMI_NO_ID_LIST[A-Za-z0-9_.-]*\.xlsx$/.test(filename) || !bytes?.length) throw new Error('Invalid report file')
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })), link = document.createElement('a')
  try { link.href = url; link.download = filename; document.body.appendChild(link); link.click() } finally { link.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000) }
}
