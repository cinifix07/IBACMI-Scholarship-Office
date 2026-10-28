import { parseValidationFile } from '../../convex/validationParser.js'
self.onmessage = async event => {
  try { const parsed = await parseValidationFile(event.data.bytes, event.data.filename); self.postMessage({ ok: true, parsed }) }
  catch (error) { self.postMessage({ ok: false, message: error?.name === 'ValidationFileError' ? error.message : 'Unable to read the spreadsheet.' }) }
}
