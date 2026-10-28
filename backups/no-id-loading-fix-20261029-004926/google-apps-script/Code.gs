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

    if (payload.operation === 'delete') {
      return deleteDriveFiles(payload)
    }

    if (payload.operation === 'download') {
      return downloadDriveFile(payload)
    }

    if (payload.operation === 'inspect') return inspectDriveFiles(payload)

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
    const rootFolder = DriveApp.getFolderById(DRIVE_FOLDER_IDS[payload.destination])
    const targetFolder = getOrCreateFolderPath(rootFolder, payload.folderPath)
    const driveFile = targetFolder.createFile(pdfBlob)

    return jsonResponse({
      success: true,
      folderUrl: targetFolder.getUrl(),
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

function deleteDriveFiles(payload) {
  const folderId = DRIVE_FOLDER_IDS[payload.destination]
  const fileIds = Array.isArray(payload.fileIds) ? payload.fileIds : []

  if (!folderId || fileIds.length === 0) {
    return jsonResponse({ success: false, message: 'Drive file IDs are required.' })
  }

  const deletedFileIds = []

  fileIds.forEach((fileId) => {
    const driveFile = DriveApp.getFileById(fileId)

    if (!fileBelongsToFolder(driveFile, folderId)) {
      throw new Error('A requested file does not belong to the configured Drive folder.')
    }

    driveFile.setTrashed(true)
    deletedFileIds.push(fileId)
  })

  return jsonResponse({ success: true, deletedFileIds })
}

function downloadDriveFile(payload) {
  const folderId = DRIVE_FOLDER_IDS[payload.destination]

  if (!folderId || !payload.fileId) {
    return jsonResponse({ success: false, message: 'A Drive file ID is required.' })
  }

  const driveFile = DriveApp.getFileById(payload.fileId)

  if (!fileBelongsToFolder(driveFile, folderId)) {
    throw new Error('The requested file does not belong to the configured Drive folder.')
  }

  const fileBlob = driveFile.getBlob()

  return jsonResponse({
    success: true,
    contentType: fileBlob.getContentType() || 'application/pdf',
    fileBase64: Utilities.base64Encode(fileBlob.getBytes()),
    fileName: driveFile.getName(),
  })
}

// Read-only metadata check. Never download bytes or expose files outside the student root.
function inspectDriveFiles(payload) {
  if (payload.destination !== 'students' || !Array.isArray(payload.fileIds) || payload.fileIds.length > 40) return jsonResponse({ success: false })
  const files = payload.fileIds.map(function(id) {
    try {
      const file = DriveApp.getFileById(id)
      if (file.isTrashed() || !fileBelongsToFolder(file, DRIVE_FOLDER_IDS.students) || file.getSize() <= 0 || file.getMimeType() !== 'application/pdf') return { id: id, state: 'missing' }
      const path = schoolIdPath(file.getParents(), DRIVE_FOLDER_IDS.students, [])
      const year = (path || []).find(function(name) { return /^\d{4}-\d{4}$/.test(name) }) || ''
      const studentFolder = (path || []).find(function(name) { return /^.+ - .+$/.test(name) }) || ''
      return { id: id, state: 'valid', name: file.getName(), year: year, studentId: studentFolder ? studentFolder.split(' - ')[0] : '' }
    } catch (error) {
      const message = String(error && error.message || '')
      return { id: id, state: /not found|does not exist|no item with|cannot find/i.test(message) ? 'missing' : 'unknown' }
    }
  })
  return jsonResponse({ success: true, files: files })
}

function schoolIdPath(parents, rootId, names) {
  while (parents.hasNext()) {
    const parent = parents.next()
    if (parent.getId() === rootId) return names
    const path = schoolIdPath(parent.getParents(), rootId, names.concat([parent.getName()]))
    if (path) return path
  }
  return null
}

function fileBelongsToFolder(driveFile, folderId) {
  return itemBelongsToFolder(driveFile.getParents(), folderId)
}

function itemBelongsToFolder(parents, folderId) {
  while (parents.hasNext()) {
    const parent = parents.next()
    if (parent.getId() === folderId) return true
    if (itemBelongsToFolder(parent.getParents(), folderId)) return true
  }

  return false
}

function getOrCreateFolderPath(rootFolder, folderPath) {
  if (!Array.isArray(folderPath) || folderPath.length === 0) return rootFolder

  return folderPath.reduce((parentFolder, rawFolderName) => {
    const folderName = sanitizeFolderName(rawFolderName)
    const matchingFolders = parentFolder.getFoldersByName(folderName)

    return matchingFolders.hasNext()
      ? matchingFolders.next()
      : parentFolder.createFolder(folderName)
  }, rootFolder)
}

function sanitizeFolderName(value) {
  const folderName = String(value || '')
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '-')
    .replace(/\s+/g, ' ')

  return folderName || 'Uncategorized'
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
