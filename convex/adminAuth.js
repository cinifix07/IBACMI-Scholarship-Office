import { v } from 'convex/values'
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
      .filter((queryBuilder) => queryBuilder.eq(queryBuilder.field('role'), 'student'))
      .collect()

    return admins.map((admin) => ({
      id: admin._id,
      email: admin.email,
      schoolId: admin.schoolId ?? '',
      phoneNumber: admin.phoneNumber ?? '',
      currentAddress: admin.currentAddress ?? '',
      name: admin.name,
      role: admin.role,
      status: admin.status,
      createdAt: admin.createdAt ?? null,
      updatedAt: admin.updatedAt ?? null,
    }))
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
      .filter((query) => query.eq(query.field('email'), email))
      .first()

    return { admin }
  }

  const admin = await ctx.db
    .query('admins')
    .filter((query) => query.eq(query.field('schoolId'), schoolId))
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
          .filter((query) => query.eq(query.field('email'), email))
          .first()
      : await ctx.db
          .query('admins')
          .filter((query) => query.eq(query.field('schoolId'), schoolId))
          .first()

    if (!admin || admin.password !== password || admin.status !== 'active') {
      return {
        success: false,
        message: 'Invalid admin credentials.',
      }
    }

    return {
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        schoolId: admin.schoolId ?? '',
        phoneNumber: admin.phoneNumber ?? '',
        currentAddress: admin.currentAddress ?? '',
        name: admin.name,
        role: admin.role,
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

    const matchingStudentRecord = await ctx.db
      .query('allinfo')
      .filter((query) =>
        query.eq(query.field('studentId'), schoolId),
      )
      .first()

    if (!matchingStudentRecord) {
      return {
        success: false,
        reason: 'schoolIdNotFound',
        message: 'School ID was not found in the official records.',
      }
    }

    const existingEmail = await ctx.db
      .query('admins')
      .filter((query) => query.eq(query.field('email'), email))
      .first()

    if (existingEmail) {
      return {
        success: false,
        message: 'An account with this email already exists.',
      }
    }

    const existingSchoolId = await ctx.db
      .query('admins')
      .filter((query) => query.eq(query.field('schoolId'), schoolId))
      .first()

    if (existingSchoolId) {
      return {
        success: false,
        message: 'An account with this School ID already exists.',
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
        name: email.split('@')[0] || schoolId,
        role: 'student',
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
      .filter((query) => query.eq(query.field('schoolId'), schoolId))
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
      .filter((query) => query.eq(query.field('schoolId'), schoolId))
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
        name: admin.name,
        role: admin.role,
      },
      message: 'Current address updated successfully.',
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
      .filter((query) => query.eq(query.field('email'), defaultAdmin.email))
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
