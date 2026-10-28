export function createBatchCsv(rows) {
  if (!Array.isArray(rows) || rows.length < 2 || rows.some(row => !Array.isArray(row) || row.length !== 13)) throw new Error('Invalid export response')
  return rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n')
}

export function prepareBatchCsvFile(filename, rows) {
  const blob = new Blob([createBatchCsv(rows)], { type: 'text/csv;charset=utf-8' })
  if (!blob.size || !/^IBACMI_[a-zA-Z0-9_.-]+\.csv$/.test(filename)) throw new Error('Invalid export file')
  return { blob, filename }
}

export function downloadBatchCsv({ blob, filename }) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  try {
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
  } finally {
    link.remove()
    // Give the browser time to consume the blob before revoking it.
    setTimeout(() => URL.revokeObjectURL(url), 30000)
  }
}
