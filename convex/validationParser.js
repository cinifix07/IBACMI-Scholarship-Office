import * as XLSX from 'xlsx'
import JSZip from 'jszip'
import { cleanValidationText } from './validationRules.js'

export const MAX_VALIDATION_BYTES = 5 * 1024 * 1024
export const MAX_VALIDATION_ROWS = 10000
const aliases = {
  batchId: ['BATCH NO', 'BATCH NUMBER', 'BATCH', 'BATCH ID'], studentId: ['STUDENT ID', 'SCHOOL ID', 'STUDENT NUMBER', 'ID NUMBER'],
  lastName: ['LAST NAME', 'SURNAME', 'FAMILY NAME'], firstName: ['FIRST NAME', 'GIVEN NAME'], extensionName: ['EXT NAME', 'EXTENSION NAME', 'NAME EXTENSION', 'SUFFIX'], middleName: ['MIDDLE NAME', 'MIDDLE INITIAL', 'MI'],
}
const headerKey = value => cleanValidationText(value).toUpperCase().replace(/[._-]/g, '').replace(/\s+/g, '')
export class ValidationFileError extends Error { constructor(message) { super(message); this.name = 'ValidationFileError' } }
const fail = message => { throw new ValidationFileError(message) }

export async function parseValidationFile(bytes, filename) {
  const data = new Uint8Array(bytes), extension = String(filename).toLowerCase().split('.').at(-1)
  if (!['xlsx', 'xls', 'csv'].includes(extension)) fail('Choose an .xlsx, .xls, or .csv file.')
  if (!data.length || data.length > MAX_VALIDATION_BYTES) fail('Choose a nonempty file no larger than 5 MB.')
  if (extension === 'xlsx') {
    if (data[0] !== 0x50 || data[1] !== 0x4b) fail('The file is not a valid XLSX workbook.')
    try {
      const zip = await JSZip.loadAsync(data), entries = Object.values(zip.files)
      if (!zip.file('xl/workbook.xml') || entries.length > 2000 || entries.reduce((sum, entry) => sum + (entry._data?.uncompressedSize || 0), 0) > 30 * 1024 * 1024) fail('The workbook is malformed or exceeds the expanded workbook limit.')
    } catch (error) { if (error instanceof ValidationFileError) throw error; fail('The XLSX workbook is corrupted or encrypted.') }
  }
  if (extension === 'xls' && !(data[0] === 0xd0 && data[1] === 0xcf && data[2] === 0x11 && data[3] === 0xe0)) fail('The file is not a valid legacy XLS workbook.')
  if (extension === 'csv' && (data.includes(0) || data[0] === 0x50 && data[1] === 0x4b)) fail('The CSV file contains unsupported binary data. Save it as UTF-8 CSV.')
  let csv
  if (extension === 'csv') {
    try { csv = new TextDecoder('utf-8', { fatal: true }).decode(data) } catch { fail('Save the CSV using UTF-8 encoding before uploading.') }
    let quoted = false, start = true, ended = false
    for (let i = 0; i < csv.length; i++) {
      const character = csv[i]
      if (quoted) { if (character === '"') { if (csv[i + 1] === '"') i++; else { quoted = false; ended = true } } }
      else if ([',', ';', '\t', '\r', '\n'].includes(character)) { start = true; ended = false }
      else if (character === '"') { if (!start) fail('The CSV contains malformed quoted fields.'); quoted = true; start = false }
      else { if (ended && character.trim()) fail('The CSV contains text after a closing quote.'); if (character.trim()) start = false }
    }
    if (quoted) fail('The CSV contains an unclosed quoted field.')
  }
  let workbook
  try { workbook = XLSX.read(csv ?? data, { type: csv === undefined ? 'array' : 'string', raw: true, cellNF: true, cellText: true, cellFormula: true, cellHTML: false, bookVBA: false, sheetRows: MAX_VALIDATION_ROWS + 30 }) } catch { fail('The spreadsheet is corrupted, encrypted, or unreadable.') }
  const sheets = workbook.SheetNames.filter(name => workbook.Sheets[name]['!ref'])
  if (sheets.length !== 1) fail('Use a workbook with exactly one nonempty worksheet so the source sheet is unambiguous.')
  const sheet = workbook.Sheets[sheets[0]], range = XLSX.utils.decode_range(sheet['!fullref'] || sheet['!ref'])
  if (range.e.c >= 128 || range.e.r >= MAX_VALIDATION_ROWS + 25) fail('The spreadsheet exceeds 10,000 records or 128 columns.')
  const matrix = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '', blankrows: true })
  const headerIndex = matrix.findIndex(row => row.some(value => cleanValidationText(value)))
  if (headerIndex < 0 || headerIndex > 20) fail('Required column headers were not found near the start of the file.')
  const headers = matrix[headerIndex].map(headerKey), mapping = {}
  for (const [field, names] of Object.entries(aliases)) {
    const matches = headers.map((value, index) => names.map(headerKey).includes(value) ? index : -1).filter(index => index >= 0)
    if (matches.length !== 1) fail(matches.length ? `More than one column maps to ${names[0]}. Rename the ambiguous columns.` : `Required column ${names[0]} is missing.`)
    mapping[field] = matches[0]
  }
  const rows = [], warnings = [], firstRow = XLSX.utils.decode_range(sheet['!ref']).s.r
  for (let index = headerIndex + 1; index < matrix.length; index++) {
    const values = matrix[index]
    if (!values.some(value => cleanValidationText(value))) continue
    const row = { sourceRow: firstRow + index + 1, issues: [] }
    for (const [field, column] of Object.entries(mapping)) {
      const cell = sheet[XLSX.utils.encode_cell({ r: firstRow + index, c: range.s.c + column })]
      row[field] = cleanValidationText(values[column])
      if (row[field].length > 32767) fail('A spreadsheet cell exceeds the Excel text limit. Shorten the affected value before uploading.')
      if (row[field].length > 200) row.issues.push(`${aliases[field][0]} exceeds 200 characters.`)
      if (cell?.f) row.issues.push(`${aliases[field][0]} contains a formula; replace it with text.`)
      if (field === 'studentId' && cell?.t === 'n') {
        if (!Number.isSafeInteger(cell.v) || /e[+-]/i.test(row[field])) row.issues.push('Student ID uses an unsafe numeric or scientific format. Store it as text.')
        else if (!warnings.includes('Numeric Student IDs use their displayed cell format. Leading zeros absent from the original file cannot be reconstructed.')) warnings.push('Numeric Student IDs use their displayed cell format. Leading zeros absent from the original file cannot be reconstructed.')
      }
    }
    rows.push(row)
    if (rows.length > MAX_VALIDATION_ROWS) fail('The file exceeds 10,000 student records.')
  }
  if (!rows.length) fail('No student rows were found below the required headers.')
  return { rows, warnings, sheetName: sheets[0], columns: Object.keys(mapping) }
}
