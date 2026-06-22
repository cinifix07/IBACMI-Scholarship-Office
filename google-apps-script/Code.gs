const DRIVE_FOLDER_IDS = {
  applicants: '1n-J5QOSr6FivcyvDbY8qTL5WEgtKOo80',
  students: '18YvJEnt3MB0f1tcLzoCUDTDL5SS-AdUH',
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents)
    const scriptPropertySecret =
      PropertiesService.getScriptProperties().getProperty('UPLOAD_SECRET')
    const expectedSecret =
      scriptPropertySecret ||
      (typeof UPLOAD_SECRET !== 'undefined' ? String(UPLOAD_SECRET) : '')

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ success: false, message: 'Unauthorized upload request.' })
    }

    if (
      !payload.fileBase64 ||
      !payload.fileName ||
      !DRIVE_FOLDER_IDS[payload.destination] ||
      payload.contentType !== 'application/pdf' ||
      !/\.pdf$/i.test(payload.fileName)
    ) {
      return jsonResponse({ success: false, message: 'A valid PDF file is required.' })
    }

    const fileBytes = Utilities.base64Decode(payload.fileBase64)
    const pdfBlob = Utilities.newBlob(fileBytes, 'application/pdf', payload.fileName)
    const driveFile = DriveApp.getFolderById(DRIVE_FOLDER_IDS[payload.destination]).createFile(
      pdfBlob,
    )

    return jsonResponse({
      success: true,
      fileId: driveFile.getId(),
      fileUrl: driveFile.getUrl(),
    })
  } catch (error) {
    return jsonResponse({
      success: false,
      message: error && error.message ? error.message : 'Google Drive upload failed.',
    })
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
