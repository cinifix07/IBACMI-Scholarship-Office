import { selectStudentRecord } from './studentProfileRules.js'

const clean = value => typeof value === 'string' ? value.trim() : ''
const key = value => clean(value).replace(/\s+/g, ' ').toLowerCase()

// Conflicting linked records never get resolved by picking an arbitrary row.
function agreed(rows, field) {
  const values = rows.map(row => clean(row[field])).filter(Boolean)
  return new Set(values.map(key)).size === 1 ? values[0] : ''
}

export function studentAccountView(account, records = [], applicants = []) {
  const studentId = clean(account.schoolId)
  const saved = account.studentInformation || {}
  const linked = studentId ? records.filter(row => clean(row.studentId) === studentId) : []
  const latestYear = clean(selectStudentRecord(linked)?.schoolYear)
  const official = linked.filter(row => clean(row.schoolYear) === latestYear)
  const lastName = clean(saved.lastName) || agreed(official, 'lastName')
  const firstName = clean(saved.firstName) || agreed(official, 'firstName')
  const conflictingIdentity = ['lastName', 'firstName'].some(field => !clean(saved[field]) && official.some(row => clean(row[field])) && !agreed(official, field))
  const candidates = studentId && !conflictingIdentity ? applicants.filter(row => clean(row.studentId) === studentId &&
    (!latestYear || row.applicationYear === latestYear) &&
    (!lastName || key(row.lastName) === key(lastName)) && (!firstName || key(row.firstName) === key(firstName))) : []
  const resolvedLast = lastName || agreed(candidates, 'lastName')
  const resolvedFirst = firstName || agreed(candidates, 'firstName')
  const initial = clean(saved.middleInitial) || agreed(official, 'middleInitial')
  const fullMiddle = official.some(row => clean(row.middleName)) ? agreed(official, 'middleName') : agreed(candidates, 'middleName')
  const middleName = fullMiddle && (!initial || key(fullMiddle).replace(/\./g, '').startsWith(key(initial).replace(/\./g, '')))
    ? fullMiddle : initial
  return {
    id: account._id, schoolId: studentId, email: clean(account.email),
    lastName: resolvedLast, firstName: resolvedFirst, middleName,
    completeName: [resolvedFirst, middleName, resolvedLast].filter(Boolean).join(' '),
    currentAddress: clean(account.currentAddress) || agreed(candidates, 'address'),
    phoneNumber: clean(account.phoneNumber), facebookProfileUrl: clean(account.facebookProfileUrl),
    name: account.name, role: account.role, status: account.status,
    createdAt: account.createdAt ?? null, updatedAt: account.updatedAt ?? null,
  }
}

