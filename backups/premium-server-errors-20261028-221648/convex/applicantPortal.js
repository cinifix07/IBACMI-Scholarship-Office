import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

const PORTAL_SETTINGS_KEY = 'unifast-applicants'

async function logActivity(ctx, log) {
  await ctx.db.insert('activityLogs', {
    actorRole: 'system',
    ...log,
    createdAt: Date.now(),
  })
}

async function getPortalSettings(ctx) {
  return await ctx.db
    .query('applicantPortalSettings')
    .withIndex('by_key', (queryBuilder) => queryBuilder.eq('key', PORTAL_SETTINGS_KEY))
    .first()
}

export const get = query({
  args: {},
  handler: async (ctx) => {
    const settings = await getPortalSettings(ctx)

    return {
      isReceivingApplicants: settings?.isReceivingApplicants ?? false,
      applicationYear: settings?.applicationYear ?? null,
      updatedAt: settings?.updatedAt ?? null,
    }
  },
})

export const setReceivingApplicants = mutation({
  args: {
    sessionToken: v.string(),
    isReceivingApplicants: v.boolean(),
    applicationYear: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (!args.sessionToken || args.sessionToken.length > 100) throw new Error('Please sign in again to continue.')
    const session = await ctx.db.query('supportSessions')
      .withIndex('by_token', (q) => q.eq('token', args.sessionToken)).first()
    if (!session || session.role !== 'admin' || session.expiresAt < Date.now()) {
      throw new Error('Your administrator session is invalid or expired. Please sign in again.')
    }
    const admin = await ctx.db.get(session.adminId)
    if (!admin || admin.status !== 'active' || admin.role !== 'admin') {
      throw new Error('Your administrator account is no longer active.')
    }
    const existingSettings = await getPortalSettings(ctx)
    const now = Date.now()
    const applicationYear = args.applicationYear?.trim() ?? ''

    if (args.isReceivingApplicants && !/^\d{4}$/.test(applicationYear)) {
      return {
        success: false,
        isReceivingApplicants: existingSettings?.isReceivingApplicants ?? false,
        applicationYear: existingSettings?.applicationYear ?? null,
        message: 'Choose a valid application year before receiving applicants.',
      }
    }

    if (existingSettings) {
      await ctx.db.patch(existingSettings._id, {
        isReceivingApplicants: args.isReceivingApplicants,
        ...(applicationYear ? { applicationYear } : {}),
        updatedAt: now,
      })
    } else {
      await ctx.db.insert('applicantPortalSettings', {
        key: PORTAL_SETTINGS_KEY,
        isReceivingApplicants: args.isReceivingApplicants,
        ...(applicationYear ? { applicationYear } : {}),
        updatedAt: now,
      })
    }

    await logActivity(ctx, {
      action: args.isReceivingApplicants ? 'applicant_portal_opened' : 'applicant_portal_closed',
      actorRole: 'admin',
      targetType: 'applicantPortalSettings',
      targetLabel: 'UNIFAST Applicants Portal',
      summary: args.isReceivingApplicants
        ? `Admin opened the UNIFAST portal for receiving ${applicationYear} applicants.`
        : 'Admin closed the UNIFAST portal for receiving applicants.',
    })

    return {
      success: true,
      isReceivingApplicants: args.isReceivingApplicants,
      applicationYear: applicationYear || existingSettings?.applicationYear || null,
      message: args.isReceivingApplicants
        ? `UNIFAST portal is now receiving ${applicationYear} applicants.`
        : 'UNIFAST portal is now closed for applicants.',
    }
  },
})
