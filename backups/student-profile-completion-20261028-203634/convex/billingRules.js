import { v } from 'convex/values'

export const periodFields = { schoolYear: v.string(), semester: v.string() }
export const filterFields = { ...periodFields, batches: v.array(v.string()) }
export const configFields = {
  ...periodFields,
  referenceFormat: v.string(),
  authority: v.string(),
  eligibleStatuses: v.array(v.string()),
  rates: v.array(v.object({ category: v.string(), tes1Cap: v.number(), tes2: v.number(), tes3a: v.number() })),
  ascBasisPoints: v.number(),
  ascAuthorized: v.boolean(),
  priorBillingReviewed: v.boolean(),
  priorTranches: v.number(),
  priorBilledStudentIds: v.array(v.string()),
}
export const profileFields = {
  ...periodFields,
  studentId: v.string(),
  sourceRecordId: v.id('allinfo'),
  campus: v.string(), college: v.string(), program: v.string(), yearLevel: v.string(),
  lastName: v.string(), firstName: v.string(), middleInitial: v.string(),
  sex: v.string(), birthDate: v.string(), units: v.number(), zip: v.string(),
  email: v.string(), phone: v.string(), actualFees: v.number(), category: v.string(),
  disabilityVerified: v.boolean(), eligible: v.boolean(), reviewNote: v.string(),
}
export const normalizeId = (value) => String(value ?? '').trim().toUpperCase()
export const periodKey = ({ schoolYear, semester }) => `${schoolYear}|${semester}`
export function validatePeriod(value) {
  const match = /^(\d{4})-(\d{4})$/.exec(value.schoolYear)
  if (!match || Number(match[2]) !== Number(match[1]) + 1 || !['1st Semester', '2nd Semester'].includes(value.semester)) throw new Error('Choose a valid school year and semester.')
}
export function money(value) {
  if (!Number.isFinite(value) || value < 0 || value > 10000000) throw new Error('Amounts must be between 0 and 10,000,000 pesos.')
  const cents = Math.round(value * 100)
  if (Math.abs(value * 100 - cents) > 0.00001) throw new Error('Amounts must have at most two decimal places.')
  return cents
}
export function referenceFor(config, tranche) {
  return config.referenceFormat.trim()
    .replaceAll('{YEAR}', config.schoolYear.slice(0, 4))
    .replaceAll('{TERM}', config.semester === '1st Semester' ? '1' : '2')
    .replaceAll('{TRANCHE}', String(tranche))
}
export function previewVersion(value) {
  // A change detector only; authorization and every validation run again at finalization.
  let hash = 2166136261
  for (const character of JSON.stringify(value)) hash = Math.imul(hash ^ character.charCodeAt(0), 16777619)
  return (hash >>> 0).toString(16)
}
export function calculateTotals(rows, basisPoints) {
  const tes1 = rows.reduce((sum, row) => sum + row.tes1, 0)
  const tes2 = rows.reduce((sum, row) => sum + row.tes2, 0)
  const tes3a = rows.reduce((sum, row) => sum + row.tes3a, 0)
  const benefits = tes1 + tes2 + tes3a
  const asc = Math.round(benefits * basisPoints / 10000)
  return { tes1, tes2, tes3a, benefits, asc, total: benefits + asc }
}
