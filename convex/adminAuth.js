import { v } from 'convex/values'
import { archiveRecord } from './archiveHelpers'
import { mutation, query } from './_generated/server'

async function logActivity(ctx, log) {
  await ctx.db.insert('activityLogs', {
    actorRole: 'system',
    ...log,
    createdAt: Date.now(),
  })
}

function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[\s-]/g, '').trim()
}

function isValidPhoneNumber(phoneNumber) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)

  return /^09\d{9}$/.test(normalizedPhone) || /^\+639\d{9}$/.test(normalizedPhone)
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

export const listStudentAccounts = query({
  args: {},
  handler: async (ctx) => {
    const admins = await ctx.db
      .query('admins')
      .withIndex('by_role', (queryBuilder) => queryBuilder.eq('role', 'student'))
      .collect()

    return admins.map((admin) => ({
      id: admin._id,
      email: admin.email,
      schoolId: admin.schoolId ?? '',
      phoneNumber: admin.phoneNumber ?? '',
      currentAddress: admin.currentAddress ?? '',
      facebookProfileUrl: admin.facebookProfileUrl ?? '',
      name: admin.name,
      role: admin.role,
      status: admin.status,
      createdAt: admin.createdAt ?? null,
      updatedAt: admin.updatedAt ?? null,
    }))
  },
})

export const updateStudentAccount = mutation({
  args: {
    id: v.id('admins'),
    email: v.string(),
    phoneNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const account = await ctx.db.get(args.id)
    const email = args.email.trim().toLowerCase()
    const phoneNumber = normalizePhoneNumber(args.phoneNumber)

    if (!account || account.role !== 'student') {
      return { success: false, message: 'Student account not found.' }
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, message: 'Please enter a valid email address.' }
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return {
        success: false,
        message: 'Please enter a valid phone number. Example: 09123456789 or +639123456789.',
      }
    }

    const matchingEmail = await ctx.db
      .query('admins')
      .withIndex('by_email', (queryBuilder) => queryBuilder.eq('email', email))
      .first()

    if (matchingEmail && matchingEmail._id !== args.id) {
      return { success: false, message: 'Another account already uses this email address.' }
    }

    await ctx.db.patch(args.id, { email, phoneNumber, updatedAt: Date.now() })
    await logActivity(ctx, {
      action: 'student_account_updated',
      actorRole: 'admin',
      targetType: 'admins',
      targetId: String(args.id),
      targetLabel: account.schoolId ?? email,
      summary: `Admin updated the account for ${account.schoolId ?? email}.`,
    })

    return { success: true, message: 'User account updated successfully.' }
  },
})

export const deleteStudentAccount = mutation({
  args: { id: v.id('admins') },
  handler: async (ctx, args) => {
    const account = await ctx.db.get(args.id)

    if (!account || account.role !== 'student') {
      return { success: false, message: 'Student account not found.' }
    }

    await archiveRecord(ctx, {
      record: account,
      sourceLabel: account.schoolId ?? account.email,
      sourceTable: 'admins',
    })
    await ctx.db.delete(args.id)
    await logActivity(ctx, {
      action: 'student_account_deleted',
      actorRole: 'admin',
      targetType: 'admins',
      targetId: String(args.id),
      targetLabel: account.schoolId ?? account.email,
      summary: `Admin deleted the account for ${account.schoolId ?? account.email}.`,
    })

    return { success: true, message: 'User account deleted successfully.' }
  },
})

async function findRecoveryAccount(ctx, args) {
  const email = args.email?.trim().toLowerCase() ?? ''
  const schoolId = args.schoolId?.trim() ?? ''

  if (email && schoolId) {
    return {
      error: 'Use either email address or School ID, not both.',
    }
  }

  if (!email && !schoolId) {
    return {
      error: 'Email address or School ID is required.',
    }
  }

  if (email) {
    const admin = await ctx.db
      .query('admins')
      .withIndex('by_email', (queryBuilder) => queryBuilder.eq('email', email))
      .first()

    return { admin }
  }

  const admin = await ctx.db
    .query('admins')
    .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
    .first()

  return { admin }
}

export const login = mutation({
  args: {
    email: v.optional(v.string()),
    schoolId: v.optional(v.string()),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email?.trim().toLowerCase() ?? ''
    const schoolId = args.schoolId?.trim() ?? ''
    const password = args.password.trim()

    if ((!email && !schoolId) || !password) {
      return {
        success: false,
        message: 'Email or School ID and password are required.',
      }
    }

    const admin = email
      ? await ctx.db
          .query('admins')
          .withIndex('by_email', (queryBuilder) => queryBuilder.eq('email', email))
          .first()
      : await ctx.db
          .query('admins')
          .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
          .first()

    if (!admin || admin.password !== password || admin.status !== 'active') {
      return {
        success: false,
        message: 'Invalid admin credentials.',
      }
    }

    const sessionToken = `${crypto.randomUUID()}${crypto.randomUUID()}`
    const now = Date.now()
    await ctx.db.insert('supportSessions', {
      token: sessionToken,
      adminId: admin._id,
      role: admin.role,
      createdAt: now,
      expiresAt: now + 30 * 24 * 60 * 60 * 1000,
    })

    return {
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        schoolId: admin.schoolId ?? '',
        phoneNumber: admin.phoneNumber ?? '',
        currentAddress: admin.currentAddress ?? '',
        facebookProfileUrl: admin.facebookProfileUrl ?? '',
        name: admin.name,
        role: admin.role,
        sessionToken,
      },
    }
  },
})

export const register = mutation({
  args: {
    email: v.string(),
    schoolId: v.string(),
    phoneNumber: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase()
    const schoolId = args.schoolId.trim()
    const phoneNumber = normalizePhoneNumber(args.phoneNumber)
    const password = args.password.trim()

    if (!email || !schoolId || !phoneNumber || !password) {
      return {
        success: false,
        message: 'Email, School ID, phone number, and password are required.',
      }
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return {
        success: false,
        message: 'Please enter a valid phone number. Example: 09123456789 or +639123456789.',
      }
    }

    if (password.length < 6) {
      return {
        success: false,
        message: 'Password must be at least 6 characters.',
      }
    }

    // Perform all identity checks in this mutation so duplicate checks and insertion
    // share a transaction. Never disclose which identity check failed publicly.
    const [matchingStudentRecord, existingEmail, existingSchoolId] = await Promise.all([
      ctx.db
        .query('allinfo')
        .withIndex('by_student_id', (queryBuilder) => queryBuilder.eq('studentId', schoolId))
        .first(),
      ctx.db
        .query('admins')
        .withIndex('by_email', (queryBuilder) => queryBuilder.eq('email', email))
        .first(),
      ctx.db
        .query('admins')
        .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
        .first(),
    ])

    if (!matchingStudentRecord || existingEmail || existingSchoolId) {
      return {
        success: false,
        message: 'Dili makompleto ang pagrehistro gamit niini nga mga detalye. Palihog i-check ang imong impormasyon, pag-login o gamita ang Forgot Password kung naa na kay account, o kontaka ang Scholarship Office.',
      }
    }

    const now = Date.now()
    const adminId = await ctx.db.insert('admins', {
      email,
      schoolId,
      phoneNumber,
      password,
      name: email.split('@')[0] || schoolId,
      role: 'student',
      status: 'active',
      createdAt: now,
      updatedAt: now,
    })

    const sessionToken = `${crypto.randomUUID()}${crypto.randomUUID()}`
    await ctx.db.insert('supportSessions', {
      token: sessionToken,
      adminId,
      role: 'student',
      createdAt: now,
      expiresAt: now + 30 * 24 * 60 * 60 * 1000,
    })

    await logActivity(ctx, {
      action: 'student_registered',
      actorRole: 'student',
      actorId: schoolId,
      actorName: email,
      targetType: 'admins',
      targetId: String(adminId),
      targetLabel: schoolId,
      summary: `Student account registered for School ID ${schoolId}.`,
    })

    return {
      success: true,
      admin: {
        id: adminId,
        email,
        schoolId,
        phoneNumber,
        currentAddress: '',
        facebookProfileUrl: '',
        name: email.split('@')[0] || schoolId,
        role: 'student',
        sessionToken,
      },
    }
  },
})

export const requestPasswordResetOtp = mutation({
  args: {
    email: v.optional(v.string()),
    schoolId: v.optional(v.string()),
    phoneNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const phoneNumber = normalizePhoneNumber(args.phoneNumber)

    if (!phoneNumber) {
      return {
        success: false,
        message: 'Phone number is required.',
      }
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return {
        success: false,
        message: 'Please enter a valid phone number. Example: 09123456789 or +639123456789.',
      }
    }

    const { admin, error } = await findRecoveryAccount(ctx, args)

    if (error) {
      return {
        success: false,
        message: error,
      }
    }

    if (!admin || admin.status !== 'active') {
      return {
        success: false,
        message: 'No active account found for the provided information.',
      }
    }

    if (!admin.phoneNumber || normalizePhoneNumber(admin.phoneNumber) !== phoneNumber) {
      return {
        success: false,
        message: 'Phone number does not match the registered account.',
      }
    }

    const otp = generateOtp()
    const expiresAt = Date.now() + 10 * 60 * 1000

    await ctx.db.patch(admin._id, {
      resetPasswordOtp: otp,
      resetPasswordOtpExpiresAt: expiresAt,
      updatedAt: Date.now(),
    })

    return {
      success: true,
      otp,
      message: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    }
  },
})

export const changePasswordWithOtp = mutation({
  args: {
    email: v.optional(v.string()),
    schoolId: v.optional(v.string()),
    phoneNumber: v.string(),
    otp: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const phoneNumber = normalizePhoneNumber(args.phoneNumber)
    const otp = args.otp.trim()
    const newPassword = args.newPassword.trim()

    if (!phoneNumber || !otp || !newPassword) {
      return {
        success: false,
        message: 'Phone number, OTP, and new password are required.',
      }
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return {
        success: false,
        message: 'Please enter a valid phone number. Example: 09123456789 or +639123456789.',
      }
    }

    if (newPassword.length < 6) {
      return {
        success: false,
        message: 'New password must be at least 6 characters.',
      }
    }

    const { admin, error } = await findRecoveryAccount(ctx, args)

    if (error) {
      return {
        success: false,
        message: error,
      }
    }

    if (!admin || admin.status !== 'active') {
      return {
        success: false,
        message: 'No active account found for the provided information.',
      }
    }

    if (!admin.phoneNumber || normalizePhoneNumber(admin.phoneNumber) !== phoneNumber) {
      return {
        success: false,
        message: 'Phone number does not match the registered account.',
      }
    }

    if (!admin.resetPasswordOtp || admin.resetPasswordOtp !== otp) {
      return {
        success: false,
        message: 'Invalid OTP code.',
      }
    }

    if (!admin.resetPasswordOtpExpiresAt || admin.resetPasswordOtpExpiresAt < Date.now()) {
      return {
        success: false,
        message: 'OTP code has expired. Please request a new OTP.',
      }
    }

    await ctx.db.patch(admin._id, {
      password: newPassword,
      resetPasswordOtp: undefined,
      resetPasswordOtpExpiresAt: undefined,
      updatedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'password_changed',
      actorRole: admin.role,
      actorId: admin.schoolId ?? admin.email,
      actorName: admin.name,
      targetType: 'admins',
      targetId: String(admin._id),
      targetLabel: admin.schoolId ?? admin.email,
      summary: `Password changed for ${admin.schoolId ?? admin.email}.`,
    })

    return {
      success: true,
      message: 'Password changed successfully. You can now login with your new password.',
    }
  },
})

export const updateStudentPhoneNumber = mutation({
  args: {
    schoolId: v.string(),
    phoneNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const schoolId = args.schoolId.trim()
    const phoneNumber = normalizePhoneNumber(args.phoneNumber)

    if (!schoolId || !phoneNumber) {
      return {
        success: false,
        message: 'School ID and phone number are required.',
      }
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return {
        success: false,
        message: 'Please enter a valid phone number. Example: 09123456789 or +639123456789.',
      }
    }

    const admin = await ctx.db
      .query('admins')
      .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
      .first()

    if (!admin || admin.role !== 'student' || admin.status !== 'active') {
      return {
        success: false,
        message: 'No active student account found for this School ID.',
      }
    }

    await ctx.db.patch(admin._id, {
      phoneNumber,
      updatedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'student_phone_updated',
      actorRole: 'student',
      actorId: admin.schoolId ?? schoolId,
      actorName: admin.name,
      targetType: 'admins',
      targetId: String(admin._id),
      targetLabel: admin.schoolId ?? schoolId,
      summary: `Student updated phone number for ${admin.schoolId ?? schoolId}.`,
    })

    return {
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        schoolId: admin.schoolId ?? '',
        phoneNumber,
        currentAddress: admin.currentAddress ?? '',
        facebookProfileUrl: admin.facebookProfileUrl ?? '',
        name: admin.name,
        role: admin.role,
      },
      message: 'Phone number updated successfully.',
    }
  },
})

export const updateStudentCurrentAddress = mutation({
  args: {
    schoolId: v.string(),
    currentAddress: v.string(),
  },
  handler: async (ctx, args) => {
    const schoolId = args.schoolId.trim()
    const currentAddress = args.currentAddress.trim()

    if (!schoolId || !currentAddress) {
      return {
        success: false,
        message: 'School ID and current address are required.',
      }
    }

    if (currentAddress.length < 8) {
      return {
        success: false,
        message: 'Current address must be at least 8 characters.',
      }
    }

    const admin = await ctx.db
      .query('admins')
      .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
      .first()

    if (!admin || admin.role !== 'student' || admin.status !== 'active') {
      return {
        success: false,
        message: 'No active student account found for this School ID.',
      }
    }

    await ctx.db.patch(admin._id, {
      currentAddress,
      updatedAt: Date.now(),
    })

    await logActivity(ctx, {
      action: 'student_address_updated',
      actorRole: 'student',
      actorId: admin.schoolId ?? schoolId,
      actorName: admin.name,
      targetType: 'admins',
      targetId: String(admin._id),
      targetLabel: admin.schoolId ?? schoolId,
      summary: `Student updated current address for ${admin.schoolId ?? schoolId}.`,
    })

    return {
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        schoolId: admin.schoolId ?? '',
        phoneNumber: admin.phoneNumber ?? '',
        currentAddress,
        facebookProfileUrl: admin.facebookProfileUrl ?? '',
        name: admin.name,
        role: admin.role,
      },
      message: 'Current address updated successfully.',
    }
  },
})

export const updateStudentFacebookProfile = mutation({
  args: {
    schoolId: v.string(),
    facebookProfileUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const schoolId = args.schoolId.trim()
    const facebookProfileUrl = args.facebookProfileUrl.trim()

    if (!schoolId || !facebookProfileUrl) {
      return { success: false, message: 'School ID and Facebook profile link are required.' }
    }

    let profileUrl
    try {
      profileUrl = new URL(facebookProfileUrl)
    } catch {
      return { success: false, message: 'Enter a valid Facebook profile link.' }
    }

    const hostname = profileUrl.hostname.toLowerCase()
    if (
      profileUrl.protocol !== 'https:' ||
      !(hostname === 'facebook.com' || hostname.endsWith('.facebook.com') || hostname === 'fb.com' || hostname.endsWith('.fb.com'))
    ) {
      return { success: false, message: 'Use a valid https://facebook.com profile link.' }
    }

    const admin = await ctx.db
      .query('admins')
      .withIndex('by_school_id', (queryBuilder) => queryBuilder.eq('schoolId', schoolId))
      .first()

    if (!admin || admin.role !== 'student' || admin.status !== 'active') {
      return { success: false, message: 'No active student account found for this School ID.' }
    }

    await ctx.db.patch(admin._id, { facebookProfileUrl, updatedAt: Date.now() })

    await logActivity(ctx, {
      action: 'student_facebook_profile_updated',
      actorRole: 'student',
      actorId: admin.schoolId ?? schoolId,
      actorName: admin.name,
      targetType: 'admins',
      targetId: String(admin._id),
      targetLabel: admin.schoolId ?? schoolId,
      summary: `Student updated Facebook profile link for ${admin.schoolId ?? schoolId}.`,
    })

    return {
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        schoolId: admin.schoolId ?? '',
        phoneNumber: admin.phoneNumber ?? '',
        currentAddress: admin.currentAddress ?? '',
        facebookProfileUrl,
        name: admin.name,
        role: admin.role,
      },
      message: 'Facebook profile link updated successfully.',
    }
  },
})

export const seedDefaultAdmin = mutation({
  args: {},
  handler: async (ctx) => {
    const defaultAdmin = {
      email: 'admin@ibacmi.edu.ph',
      schoolId: 'ADMIN-001',
      password: 'admin123',
      name: 'IBACMI Administrator',
      role: 'admin',
      status: 'active',
    }

    const existingAdmin = await ctx.db
      .query('admins')
      .withIndex('by_email', (queryBuilder) => queryBuilder.eq('email', defaultAdmin.email))
      .first()

    if (existingAdmin) {
      await ctx.db.patch(existingAdmin._id, defaultAdmin)

      return {
        created: false,
        updated: true,
        email: defaultAdmin.email,
        password: defaultAdmin.password,
      }
    }

    await ctx.db.insert('admins', {
      ...defaultAdmin,
      createdAt: Date.now(),
    })

    return {
      created: true,
      updated: false,
      email: defaultAdmin.email,
      password: defaultAdmin.password,
    }
  },
})
