export const DEGREE_PROGRAMS = [
  'BACHELOR OF ELEMENTARY EDUCATION',
  'BACHELOR OF EARLY CHILDHOOD EDUCATION',
  'BACHELOR OF SCIENCE IN CRIMINOLOGY',
  'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
  'BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT',
  'BACHELOR OF PUBLIC ADMINISTRATION',
  'BACHELOR OF SCIENCE IN ENTREPRENEURSHIP',
]

export const REQUIRED_PROFILE_FIELDS = [
  ['studentId', 'Student ID'], ['lastName', 'Last Name'], ['firstName', 'First Name'],
  ['phoneNumber', 'Phone Number'], ['currentAddress', 'Permanent Address'],
  ['course', 'Degree Program'], ['yearLevelCode', 'Year Level'], ['birthDate', 'Birthdate'],
  ['zipCode', 'ZIP Code'], ['emailAddress', 'Email Address'], ['sexCode', 'Sex at Birth'],
  ['schoolIdUpload', 'School ID Upload'],
]

export function todayInPhilippines() {
  return new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10)
}

export function selectStudentRecord(records) {
  const [year, month] = todayInPhilippines().split('-').map(Number)
  const startYear = month >= 6 ? year : year - 1
  const currentYear = `${startYear}-${startYear + 1}`
  const current = records.filter(record => record.schoolYear === currentYear)
  return [...(current.length ? current : records)].sort((a, b) =>
    String(b.schoolYear || '').localeCompare(String(a.schoolYear || '')) ||
    (b.uploadedAt || 0) - (a.uploadedAt || 0) || (b._creationTime || 0) - (a._creationTime || 0),
  )[0]
}

export function validBirthDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false
  const time = Date.parse(`${value}T00:00:00Z`)
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value && value <= todayInPhilippines()
}

export function profileCompleteness(profile, { schoolIdUploaded = false } = {}) {
  const errors = {}
  for (const [key] of REQUIRED_PROFILE_FIELDS) {
    if (key === 'schoolIdUpload' ? !schoolIdUploaded : profile[key] === undefined || profile[key] === null || String(profile[key]).trim() === '') errors[key] = 'Required — Palihog kompletoha kini nga impormasyon.'
  }
  if (!/^09\d{9}$|^\+639\d{9}$/.test(profile.phoneNumber || '')) errors.phoneNumber = 'Palihog ibutang ang sakto nga mobile number (09… o +639…).'
  if (String(profile.currentAddress || '').trim().length < 8) errors.currentAddress = 'Required — Palihog ibutang ang kompleto nga permanent address.'
  if (!DEGREE_PROGRAMS.includes(profile.course)) errors.course = 'Required — Palihog pili sa imong degree program.'
  if (![1, 2, 3, 4, 5].includes(profile.yearLevelCode)) errors.yearLevelCode = 'Required — Palihog pili sa imong year level.'
  if (!validBirthDate(profile.birthDate)) errors.birthDate = 'Required — Palihog ibutang ang sakto nga birthdate; dili mahimong umaabot nga petsa.'
  if (!/^\d{4}$/.test(profile.zipCode || '')) errors.zipCode = 'Required — Palihog ibutang ang sakto nga 4-digit ZIP code.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.emailAddress || '')) errors.emailAddress = 'Required — Palihog ibutang ang sakto nga email address.'
  if (![0, 1].includes(profile.sexCode)) errors.sexCode = 'Required — Palihog pili sa imong sex at birth.'
  const missing = REQUIRED_PROFILE_FIELDS.filter(([key]) => errors[key]).map(([key, label]) => ({ key, label, message: errors[key] }))
  const percent = Math.round((REQUIRED_PROFILE_FIELDS.length - missing.length) / REQUIRED_PROFILE_FIELDS.length * 100)
  return { errors, missing, percent, requiredCount: REQUIRED_PROFILE_FIELDS.length, status: missing.length ? 'Incomplete' : 'Complete' }
}

export function normalizeProfile(values) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key,
    typeof value === 'string' ? (key === 'emailAddress' ? value.trim().toLowerCase() : key === 'phoneNumber' ? value.replace(/[\s-]/g, '') : value.trim()) : value,
  ]))
}
