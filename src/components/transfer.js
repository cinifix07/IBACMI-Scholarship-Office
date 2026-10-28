/** Reports actual bytes sent. Completion resolves only after the server responds. */
export function uploadWithProgress(url, file, { headers = {}, onProgress, signal } = {}) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const abort = () => request.abort()
    const cleanup = () => signal?.removeEventListener('abort', abort)
    request.open('POST', url)
    request.timeout = 120000
    for (const [key, value] of Object.entries(headers)) request.setRequestHeader(key, value)
    request.upload.onprogress = event => { if (event.lengthComputable) onProgress?.(event.loaded / event.total * 100) }
    request.onload = () => {
      cleanup()
      if (request.status < 200 || request.status > 599) { reject(new Error('The upload server returned an invalid response.')); return }
      resolve(new Response([204, 205, 304].includes(request.status) ? null : request.responseText, { status: request.status }))
    }
    request.onerror = () => { cleanup(); reject(new Error('Unable to upload. Check your connection and try again.')) }
    request.ontimeout = () => { cleanup(); reject(new Error('The upload timed out. Please try again.')) }
    request.onabort = () => { cleanup(); reject(new Error('Upload cancelled.')) }
    if (signal?.aborted) { reject(new Error('Upload cancelled.')); return }
    signal?.addEventListener('abort', abort, { once: true })
    request.send(file)
  })
}
