import { httpRouter } from 'convex/server'
import { api } from './_generated/api'
import { httpAction } from './_generated/server'

const http = httpRouter()
const maxPdfSize = 5 * 1024 * 1024

function corsHeaders(contentType = 'application/json') {
  return {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': contentType,
  }
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    headers: corsHeaders(),
    status,
  })
}

function sanitizeFilePart(value, fallback) {
  const sanitized = String(value ?? '')
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return sanitized || fallback
}

function bytesToBase64(bytes) {
  const chunkSize = 0x8000
  let binary = ''

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, Math.min(offset + chunkSize, bytes.length))
    binary += String.fromCharCode(...chunk)
  }

  return btoa(binary)
}

function base64ToBytes(value) {
  const binary = atob(value)
  const bytes = new Uint8Array(binary.length)

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes
}

async function postToGoogleAppsScript(appsScriptUrl, payload) {
  const initialResponse = await fetch(appsScriptUrl, {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    method: 'POST',
    redirect: 'manual',
  })

  if (initialResponse.status >= 300 && initialResponse.status < 400) {
    const redirectUrl = initialResponse.headers.get('location')
    if (!redirectUrl) {
      throw new Error('Google Apps Script returned a redirect without a destination.')
    }

    return await fetch(redirectUrl, {
      method: 'GET',
      redirect: 'follow',
    })
  }

  return initialResponse
}

http.route({
  method: 'OPTIONS',
  path: '/google-drive/upload',
  handler: httpAction(async () => {
    return new Response(null, {
      headers: corsHeaders(),
      status: 204,
    })
  }),
})

http.route({
  method: 'GET',
  path: '/google-drive/file',
  handler: httpAction(async (_ctx, request) => {
    const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
    const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET
    const fileUrl = new URL(request.url).searchParams.get('url')
    const fileId = fileUrl?.match(/\/file\/d\/([^/?#]+)/i)?.[1]

    if (!appsScriptUrl || !uploadSecret || !fileId) {
      return jsonResponse({ message: 'A valid Google Drive file URL is required.' }, 400)
    }

    try {
      const googleResponse = await postToGoogleAppsScript(appsScriptUrl, {
        destination: 'students',
        fileId,
        operation: 'download',
        secret: uploadSecret,
      })
      const googleResult = await googleResponse.json().catch(() => null)

      if (!googleResponse.ok || !googleResult?.success || !googleResult?.fileBase64) {
        throw new Error(googleResult?.message || 'Unable to download the Google Drive file.')
      }

      return new Response(base64ToBytes(googleResult.fileBase64), {
        headers: {
          ...corsHeaders(googleResult.contentType || 'application/pdf'),
          'Cache-Control': 'private, max-age=60',
        },
        status: 200,
      })
    } catch (error) {
      return jsonResponse(
        {
          message:
            error instanceof Error ? error.message : 'Unable to download the Google Drive file.',
        },
        502,
      )
    }
  }),
})

http.route({
  method: 'OPTIONS',
  path: '/google-drive/student-upload',
  handler: httpAction(async () => {
    return new Response(null, {
      headers: corsHeaders(),
      status: 204,
    })
  }),
})

const googleDriveUpload = httpAction(async (ctx, request) => {
  const appsScriptUrl = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_URL
  const uploadSecret = globalThis.process?.env.GOOGLE_DRIVE_UPLOAD_SECRET

  if (!appsScriptUrl || !uploadSecret) {
    return jsonResponse(
      {
        message:
          'Google Drive upload is not configured. Set GOOGLE_DRIVE_UPLOAD_URL and GOOGLE_DRIVE_UPLOAD_SECRET in Convex.',
      },
      503,
    )
  }

  const requestUrl = new URL(request.url)
  const isStudentUpload = requestUrl.pathname.endsWith('/student-upload')
  const destination = isStudentUpload ? 'students' : 'applicants'

  if (!isStudentUpload) {
    const portalSettings = await ctx.runQuery(api.applicantPortal.get)
    if (!portalSettings?.isReceivingApplicants) {
      return jsonResponse(
        { message: 'The UNIFAST portal is closed for applicants right now.' },
        403,
      )
    }
  }

  if (isStudentUpload && !requestUrl.searchParams.get('studentId')?.trim()) {
    return jsonResponse(
      { message: 'Student ID is required before uploading a School ID PDF.' },
      400,
    )
  }

  const originalFileName = requestUrl.searchParams.get('fileName') || 'document.pdf'
  const studentId = sanitizeFilePart(
    requestUrl.searchParams.get('studentId'),
    isStudentUpload ? 'student' : 'applicant',
  )
  const documentType = sanitizeFilePart(
    requestUrl.searchParams.get('documentType'),
    'document',
  )
  const fullName = sanitizeFilePart(requestUrl.searchParams.get('fullName'), 'no-name')
  const applicationYear = sanitizeFilePart(
    requestUrl.searchParams.get('applicationYear'),
    'no-application-year',
  )
  const batchNo = sanitizeFilePart(
    requestUrl.searchParams.get('batchNo')?.replace(/^batch[\s_-]*/i, ''),
    'no-batch',
  )
  const schoolYear = sanitizeFilePart(
    requestUrl.searchParams.get('schoolYear'),
    'unknown-school-year',
  )
  const contentType = request.headers.get('content-type') || ''

  if (contentType !== 'application/pdf' && !/\.pdf$/i.test(originalFileName)) {
    return jsonResponse({ message: 'Only PDF files can be uploaded.' }, 400)
  }

  const fileBytes = new Uint8Array(await request.arrayBuffer())

  if (!fileBytes.length) {
    return jsonResponse({ message: 'The selected PDF is empty.' }, 400)
  }

  if (fileBytes.length > maxPdfSize) {
    return jsonResponse({ message: 'Each PDF must be 5MB or smaller.' }, 413)
  }

  const originalBaseName = sanitizeFilePart(
    originalFileName.replace(/\.pdf$/i, ''),
    'document',
  )
  const savedFileName = isStudentUpload
    ? `${studentId}-${fullName}-Batch-${batchNo}-${documentType}-${Date.now()}-${originalBaseName}.pdf`
    : `${studentId}-${fullName}-Application-${applicationYear}-${documentType}-${Date.now()}-${originalBaseName}.pdf`

  try {
    const googleResponse = await postToGoogleAppsScript(appsScriptUrl, {
        contentType: 'application/pdf',
        destination,
        fileBase64: bytesToBase64(fileBytes),
        fileName: savedFileName,
        folderPath: isStudentUpload
          ? [schoolYear, `Batch ${batchNo}`, `${studentId} - ${fullName}`]
          : [],
        secret: uploadSecret,
    })
    const googleResult = await googleResponse.json().catch(() => null)

    if (!googleResponse.ok || !googleResult?.success || !googleResult?.fileUrl) {
      throw new Error(
        googleResult?.message ||
          `Google Apps Script is not available as a public Web App (HTTP ${googleResponse.status}).`,
      )
    }

    return jsonResponse({
      fileId: googleResult.fileId,
      fileName: savedFileName,
      fileUrl: googleResult.fileUrl,
    })
  } catch (error) {
    console.error(`Google Drive ${destination} upload failed:`, error)
    return jsonResponse(
      {
        message:
          error instanceof Error ? error.message : 'Unable to upload the PDF to Google Drive.',
      },
      502,
    )
  }
})

http.route({
  method: 'POST',
  path: '/google-drive/upload',
  handler: googleDriveUpload,
})

http.route({
  method: 'POST',
  path: '/google-drive/student-upload',
  handler: googleDriveUpload,
})

export default http
