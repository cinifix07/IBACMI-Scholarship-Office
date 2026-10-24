import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { archiveRecord } from './archiveHelpers'

const VISITOR_SESSION_MS = 30 * 24 * 60 * 60 * 1000

async function hashVisitorToken(token) {
  const bytes = new TextEncoder().encode(token)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function findVisitorConversation(ctx, token) {
  if (typeof token !== 'string' || token.length < 32 || token.length > 100) return null
  const hash = await hashVisitorToken(token)
  const conversation = await ctx.db.query('supportConversations')
    .withIndex('by_visitorSessionHash', (q) => q.eq('visitorSessionHash', hash)).first()
  if (!conversation || !conversation.visitorExpiresAt || conversation.visitorExpiresAt < Date.now()) return null
  return conversation
}

async function requireSession(ctx, token, roles) {
  if (!token || token.length > 100) throw new Error('Please sign in again to continue.')
  const session = await ctx.db
    .query('supportSessions')
    .withIndex('by_token', (q) => q.eq('token', token))
    .first()

  if (!session || session.expiresAt < Date.now() || !roles.includes(session.role)) {
    throw new Error('Your session is invalid or expired. Please sign in again.')
  }
  const account = await ctx.db.get(session.adminId)
  if (!account || account.status !== 'active' || account.role !== session.role) {
    throw new Error('Your account is no longer active.')
  }
  return { session, account }
}

export const logout = mutation({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db.query('supportSessions')
      .withIndex('by_token', (q) => q.eq('token', args.sessionToken)).first()
    if (session) await ctx.db.delete(session._id)
    return { success: true }
  },
})

function cleanSupportUrl(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return ''
  let parsed
  try {
    parsed = new URL(raw)
  } catch {
    throw new Error('Enter a valid support link URL.')
  }
  if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname || parsed.username || parsed.password) {
    throw new Error('Support links must use a valid HTTP or HTTPS URL.')
  }
  return parsed.toString()
}

function normalizeSupportLinkSettings(args) {
  const names = []
  const urls = []
  for (const slot of [1, 2]) {
    const name = String(args[`link${slot}Name`] ?? '').trim().slice(0, 80)
    const rawUrl = String(args[`link${slot}Url`] ?? '').trim()
    const nameContainsUrl = /^https?:\/\//i.test(name)

    if (name && nameContainsUrl) urls.push({ slot, url: cleanSupportUrl(name) })
    else if (name) names.push({ slot, name })

    if (rawUrl) urls.push({ slot, url: cleanSupportUrl(rawUrl) })
  }

  const uniqueUrls = urls.filter((entry, index) => urls.findIndex((candidate) => candidate.url === entry.url) === index)
  const paired = []
  const usedNames = new Set()
  const usedUrls = new Set()

  for (const name of names) {
    const matchingUrl = uniqueUrls.find((entry, index) => entry.slot === name.slot && !usedUrls.has(index))
    if (!matchingUrl) continue
    const urlIndex = uniqueUrls.indexOf(matchingUrl)
    paired.push({ name: name.name, url: matchingUrl.url })
    usedNames.add(names.indexOf(name))
    usedUrls.add(urlIndex)
  }

  const remainingNames = names.filter((_, index) => !usedNames.has(index))
  const remainingUrls = uniqueUrls.filter((_, index) => !usedUrls.has(index))
  while (remainingNames.length && remainingUrls.length) {
    paired.push({ name: remainingNames.shift().name, url: remainingUrls.shift().url })
  }

  for (const entry of remainingUrls) {
    const host = new URL(entry.url).hostname.replace(/^www\./i, '')
    const brand = host.split('.')[0]
    const displayName = brand.length <= 4 ? brand.toUpperCase() : `${brand[0].toUpperCase()}${brand.slice(1)}`
    paired.push({ name: displayName, url: entry.url })
  }

  return {
    values: {
      link1Name: paired[0]?.name ?? '',
      link1Url: paired[0]?.url ?? '',
      link2Name: paired[1]?.name ?? '',
      link2Url: paired[1]?.url ?? '',
    },
    skippedNames: remainingNames.map((entry) => entry.name),
  }
}

export const getSettings = query({
  args: {},
  handler: async (ctx) => {
    const settings = await ctx.db.query('supportSettings').withIndex('by_key', (q) => q.eq('key', 'main')).first()
    return settings
      ? { link1Name: settings.link1Name, link1Url: settings.link1Url, link2Name: settings.link2Name, link2Url: settings.link2Url }
      : { link1Name: '', link1Url: '', link2Name: '', link2Url: '' }
  },
})

export const getPublicLinks = query({
  args: {},
  handler: async (ctx) => {
    try {
      const settings = await ctx.db.query('supportSettings')
        .withIndex('by_key', (q) => q.eq('key', 'main')).first()
      if (!settings) return { links: [], error: false }
      const configured = [
        { id: 'link1', name: settings.link1Name, url: settings.link1Url },
        { id: 'link2', name: settings.link2Name, url: settings.link2Url },
      ]
      const links = configured.flatMap((link) => {
        if (!link.name?.trim() || !link.url?.trim()) return []
        try {
          const url = new URL(cleanSupportUrl(link.url))
          const host = url.hostname.toLowerCase()
          const isPlaceholder = ['example.com', 'example.org', 'example.net', 'localhost'].some((domain) => host === domain || host.endsWith(`.${domain}`)) ||
            ['.test', '.invalid', '.local'].some((suffix) => host.endsWith(suffix))
          if (isPlaceholder) return []
          return [{ id: link.id, name: link.name.trim().slice(0, 80), url: url.toString() }]
        } catch {
          return []
        }
      })
      return { links, error: false }
    } catch {
      return { links: [], error: true }
    }
  },
})

export const saveSettings = mutation({
  args: {
    sessionToken: v.string(),
    link1Name: v.string(), link1Url: v.string(), link2Name: v.string(), link2Url: v.string(),
  },
  handler: async (ctx, args) => {
    await requireSession(ctx, args.sessionToken, ['admin'])
    const normalized = normalizeSupportLinkSettings(args)
    const values = {
      ...normalized.values,
      updatedAt: Date.now(),
    }
    const previous = await ctx.db.query('supportSettings').withIndex('by_key', (q) => q.eq('key', 'main')).first()
    if (previous) await ctx.db.patch(previous._id, values)
    else await ctx.db.insert('supportSettings', { key: 'main', ...values })
    return {
      success: true,
      settings: normalized.values,
      skippedNames: normalized.skippedNames,
    }
  },
})

export const migrateLegacyRequests = mutation({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    await requireSession(ctx, args.sessionToken, ['admin'])
    const requests = await ctx.db.query('quickActions').collect()
    const existingConversations = await ctx.db.query('supportConversations').collect()
    let migratedCount = 0
    for (const request of requests) {
      const existing = await ctx.db.query('supportConversations')
        .withIndex('by_legacyRequest', (q) => q.eq('legacyRequestId', request._id)).first()
      if (existing) continue
      const restoredCandidate = existingConversations.find((conversation) =>
        conversation.studentId === (request.studentId ?? '') &&
        conversation.email.toLowerCase() === request.email.toLowerCase() &&
        conversation.source === request.source &&
        conversation.createdAt === request.submittedAt,
      )
      if (restoredCandidate) {
        const firstMessage = await ctx.db.query('supportMessages')
          .withIndex('by_conversation', (q) => q.eq('conversationId', restoredCandidate._id)).first()
        if (firstMessage?.content === request.question) continue
      }
      const studentAccount = request.studentId
        ? await ctx.db.query('admins').withIndex('by_school_id', (q) => q.eq('schoolId', request.studentId)).first()
        : null
      const ownsRequest = studentAccount?.role === 'student' &&
        studentAccount.email.trim().toLowerCase() === request.email.trim().toLowerCase()
      const now = request.submittedAt || Date.now()
      const isResolved = String(request.status ?? '').toLowerCase().includes('resolved')
      const conversationId = await ctx.db.insert('supportConversations', {
        studentAccountId: ownsRequest ? studentAccount._id : undefined,
        studentId: request.studentId ?? '',
        studentName: [request.firstName, request.middleInitial, request.lastName].filter(Boolean).join(' ').trim(),
        email: request.email,
        source: request.source,
        status: isResolved ? 'resolved' : 'open',
        legacyRequestId: request._id,
        createdAt: now,
        updatedAt: now,
      })
      await ctx.db.insert('supportMessages', {
        conversationId,
        senderId: request.studentId || request.email,
        senderRole: 'student',
        content: request.question,
        readByAdmin: false,
        readByStudent: true,
        createdAt: now,
      })
      migratedCount += 1
    }
    return { migratedCount }
  },
})

export const listConversations = query({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    await requireSession(ctx, args.sessionToken, ['admin'])
    const conversations = await ctx.db.query('supportConversations').withIndex('by_updatedAt').order('desc').collect()
    return await Promise.all(conversations.map(async (conversation) => {
      const messages = await ctx.db.query('supportMessages')
        .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).order('asc').collect()
      return { ...conversation, messages, unreadCount: messages.filter((message) => ['student', 'visitor'].includes(message.senderRole) && !message.readByAdmin).length }
    }))
  },
})

export const listStudentConversations = query({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    const { account } = await requireSession(ctx, args.sessionToken, ['student'])
    const conversations = await ctx.db.query('supportConversations')
      .withIndex('by_studentAccount', (q) => q.eq('studentAccountId', account._id)).order('desc').collect()
    return await Promise.all(conversations.map(async (conversation) => ({
      ...conversation,
      messages: await ctx.db.query('supportMessages')
        .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).order('asc').collect(),
    })))
  },
})

export const sendMessage = mutation({
  args: { sessionToken: v.string(), conversationId: v.id('supportConversations'), content: v.string(), clientMessageId: v.string() },
  handler: async (ctx, args) => {
    const { session, account } = await requireSession(ctx, args.sessionToken, ['admin', 'student'])
    const content = args.content.trim()
    if (!content || content.length > 2000) throw new Error('Messages must contain 1 to 2,000 characters.')
    if (!/^[\w-]{8,100}$/.test(args.clientMessageId)) throw new Error('Invalid message submission identifier.')
    const conversation = await ctx.db.get(args.conversationId)
    if (!conversation) throw new Error('Conversation not found.')
    if (session.role === 'student' && conversation.studentAccountId !== account._id) throw new Error('You do not have access to this conversation.')
    const existing = await ctx.db.query('supportMessages')
      .withIndex('by_clientMessage', (q) => q.eq('clientMessageId', args.clientMessageId)).first()
    if (existing) {
      if (existing.conversationId !== conversation._id || existing.senderId !== String(account._id)) throw new Error('Duplicate message identifier.')
      return existing._id
    }
    if (session.role === 'student' && conversation.status === 'resolved') throw new Error('This conversation has been resolved.')
    const messages = await ctx.db.query('supportMessages')
      .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).collect()
    const recentCount = messages.filter((message) => message.senderId === String(account._id) && message.createdAt > Date.now() - 60_000).length
    if (recentCount >= 8) throw new Error('Please wait a moment before sending another message.')
    const now = Date.now()
    const messageId = await ctx.db.insert('supportMessages', {
      conversationId: conversation._id,
      senderId: String(account._id),
      senderRole: session.role,
      content,
      readByAdmin: session.role === 'admin',
      readByStudent: session.role === 'student',
      clientMessageId: args.clientMessageId,
      createdAt: now,
    })
    await ctx.db.patch(conversation._id, { updatedAt: now, status: session.role === 'admin' && conversation.status === 'resolved' ? 'open' : conversation.status })
    return messageId
  },
})

export const markRead = mutation({
  args: { sessionToken: v.string(), conversationId: v.id('supportConversations') },
  handler: async (ctx, args) => {
    const { session, account } = await requireSession(ctx, args.sessionToken, ['admin', 'student'])
    const conversation = await ctx.db.get(args.conversationId)
    if (!conversation) return { updated: 0 }
    if (session.role === 'student' && conversation.studentAccountId !== account._id) throw new Error('You do not have access to this conversation.')
    const messages = await ctx.db.query('supportMessages')
      .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).collect()
    let updated = 0
    for (const message of messages) {
      const shouldRead = session.role === 'admin' ? ['student', 'visitor'].includes(message.senderRole) && !message.readByAdmin : message.senderRole === 'admin' && !message.readByStudent
      if (shouldRead) {
        await ctx.db.patch(message._id, session.role === 'admin' ? { readByAdmin: true } : { readByStudent: true })
        updated += 1
      }
    }
    return { updated }
  },
})

export const createVisitorConversation = mutation({
  args: {
    name: v.string(),
    visitorType: v.string(),
    schoolId: v.optional(v.string()),
    studentName: v.optional(v.string()),
    initialMessage: v.optional(v.string()),
    clientMessageId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim().replace(/\s+/g, ' ')
    const initialMessage = args.initialMessage?.trim() ?? ''
    if (name.length < 2 || name.length > 100) throw new Error('Enter a name between 2 and 100 characters.')
    if (!['Student', 'Parent / Guardian', 'Other Visitor'].includes(args.visitorType)) throw new Error('Choose a valid visitor type.')
    if (initialMessage.length > 2000) throw new Error('Messages must contain 1 to 2,000 characters.')
    if (initialMessage && !/^[\w-]{8,100}$/.test(args.clientMessageId ?? '')) throw new Error('Invalid message submission identifier.')
    const visitorToken = Array.from({ length: 64 }, () => Math.floor(Math.random() * 36).toString(36)).join('')
    const visitorSessionHash = await hashVisitorToken(visitorToken)
    const now = Date.now()
    const conversationId = await ctx.db.insert('supportConversations', {
      studentId: args.schoolId?.trim().slice(0, 30) ?? '',
      studentName: name,
      email: '',
      source: 'Visitor Chat',
      status: 'open',
      visitorType: args.visitorType,
      visitorStudentName: args.studentName?.trim().replace(/\s+/g, ' ').slice(0, 100) ?? '',
      visitorSessionHash,
      visitorExpiresAt: now + VISITOR_SESSION_MS,
      createdAt: now,
      updatedAt: now,
    })
    if (initialMessage) await ctx.db.insert('supportMessages', {
      conversationId,
      senderId: `visitor:${visitorSessionHash}`,
      senderRole: 'visitor',
      content: initialMessage,
      readByAdmin: false,
      readByStudent: true,
      ...(args.clientMessageId ? { clientMessageId: args.clientMessageId } : {}),
      createdAt: now,
    })
    return { conversationId, visitorToken }
  },
})

export const getVisitorConversation = query({
  args: { visitorToken: v.string() },
  handler: async (ctx, args) => {
    const conversation = await findVisitorConversation(ctx, args.visitorToken)
    if (!conversation) return null
    const messages = await ctx.db.query('supportMessages')
      .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).order('asc').collect()
    return { conversation, messages, unreadCount: messages.filter((message) => message.senderRole === 'admin' && !message.readByStudent).length }
  },
})

export const sendVisitorMessage = mutation({
  args: { visitorToken: v.string(), content: v.string(), clientMessageId: v.string() },
  handler: async (ctx, args) => {
    const conversation = await findVisitorConversation(ctx, args.visitorToken)
    if (!conversation) throw new Error('This chat session has expired. Start a new conversation to continue.')
    if (conversation.status === 'resolved') throw new Error('This conversation has been resolved.')
    const content = args.content.trim()
    if (!content || content.length > 2000) throw new Error('Messages must contain 1 to 2,000 characters.')
    if (!/^[\w-]{8,100}$/.test(args.clientMessageId)) throw new Error('Invalid message submission identifier.')
    const senderId = `visitor:${conversation.visitorSessionHash}`
    const existing = await ctx.db.query('supportMessages').withIndex('by_clientMessage', (q) => q.eq('clientMessageId', args.clientMessageId)).first()
    if (existing) {
      if (existing.conversationId !== conversation._id || existing.senderId !== senderId) throw new Error('Duplicate message identifier.')
      return existing._id
    }
    const messages = await ctx.db.query('supportMessages').withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).collect()
    if (messages.filter((message) => message.senderRole === 'visitor' && message.createdAt > Date.now() - 60_000).length >= 8) throw new Error('Please wait a moment before sending another message.')
    const now = Date.now()
    const messageId = await ctx.db.insert('supportMessages', {
      conversationId: conversation._id,
      senderId,
      senderRole: 'visitor',
      content,
      readByAdmin: false,
      readByStudent: true,
      clientMessageId: args.clientMessageId,
      createdAt: now,
    })
    await ctx.db.patch(conversation._id, { updatedAt: now })
    return messageId
  },
})

export const markVisitorRead = mutation({
  args: { visitorToken: v.string() },
  handler: async (ctx, args) => {
    const conversation = await findVisitorConversation(ctx, args.visitorToken)
    if (!conversation) return { updated: 0 }
    const messages = await ctx.db.query('supportMessages').withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).collect()
    let updated = 0
    for (const message of messages) {
      if (message.senderRole === 'admin' && !message.readByStudent) {
        await ctx.db.patch(message._id, { readByStudent: true })
        updated += 1
      }
    }
    return { updated }
  },
})

export const setStatus = mutation({
  args: { sessionToken: v.string(), conversationId: v.id('supportConversations'), status: v.union(v.literal('open'), v.literal('resolved')) },
  handler: async (ctx, args) => {
    await requireSession(ctx, args.sessionToken, ['admin'])
    await ctx.db.patch(args.conversationId, { status: args.status, updatedAt: Date.now() })
  },
})

export const clearAll = mutation({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    await requireSession(ctx, args.sessionToken, ['admin'])
    const conversations = await ctx.db.query('supportConversations').collect()
    for (const conversation of conversations) {
      const messages = await ctx.db.query('supportMessages')
        .withIndex('by_conversation', (q) => q.eq('conversationId', conversation._id)).collect()
      await archiveRecord(ctx, {
        record: {
          ...conversation,
          messages: messages.map((message) => {
            const snapshot = { ...message }
            delete snapshot._id
            delete snapshot._creationTime
            return snapshot
          }),
        },
        sourceLabel: conversation.studentId || conversation.email,
        sourceTable: 'supportConversations',
      })
      for (const message of messages) {
        await ctx.db.delete(message._id)
      }
      await ctx.db.delete(conversation._id)
    }
    const requests = await ctx.db.query('quickActions').collect()
    for (const request of requests) {
      await archiveRecord(ctx, { record: request, sourceLabel: `${request.studentId ?? request.email} / ${request.source}`, sourceTable: 'quickActions' })
      await ctx.db.delete(request._id)
    }
    return { deletedCount: conversations.length }
  },
})
