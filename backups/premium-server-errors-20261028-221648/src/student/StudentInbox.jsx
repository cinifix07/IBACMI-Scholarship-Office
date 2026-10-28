import IBACMILoader from '../components/IBACMILoader.jsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import ibacmiLogo from '../assets/IBACMI.png'
import '../admin/student-support.css'

function createClientMessageId() {
  const cryptoApi = globalThis.crypto
  if (typeof cryptoApi?.randomUUID === 'function') {
    try { return cryptoApi.randomUUID() } catch { /* Use a compatibility fallback. */ }
  }
  if (typeof cryptoApi?.getRandomValues === 'function') {
    try {
      return Array.from(cryptoApi.getRandomValues(new Uint8Array(16)), (value) => value.toString(16).padStart(2, '0')).join('')
    } catch { /* Use the timestamp fallback below. */ }
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`
}

function messageTime(timestamp) {
  return timestamp ? new Intl.DateTimeFormat('en-PH', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp)) : ''
}

function sameDay(first, second) {
  const left = new Date(first)
  const right = new Date(second)
  return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate()
}

export default function StudentInbox({ studentSession }) {
  const token = studentSession?.sessionToken
  const conversations = useQuery(api.support.listStudentConversations, token ? { sessionToken: token } : 'skip')
  const sendMessage = useMutation(api.support.sendStudentPortalMessage)
  const markRead = useMutation(api.support.markRead)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [draft, setDraft] = useState('')
  const [notice, setNotice] = useState('')
  const [sending, setSending] = useState(false)
  const launcherRef = useRef(null)
  const endRef = useRef(null)
  const textareaRef = useRef(null)
  const sendingRef = useRef(false)
  const closeChat = useCallback(() => {
    setIsOpen(false)
    window.setTimeout(() => launcherRef.current?.focus(), 0)
  }, [])
  const selected = selectedId
    ? conversations?.find((conversation) => conversation._id === selectedId) ?? conversations?.[0] ?? null
    : conversations?.[0] ?? null
  const messages = selected?.messages ?? []
  const unreadCount = (conversations ?? []).reduce((total, conversation) => total + (conversation.unreadCount ?? 0), 0)

  useEffect(() => {
    if (isOpen && token && selected?._id) markRead({ sessionToken: token, conversationId: selected._id }).catch(() => {})
  }, [isOpen, token, selected?._id, markRead])

  useEffect(() => {
    if (isOpen) endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [isOpen, selected?._id, messages.length])

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeChat()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, closeChat])

  const submit = async (event) => {
    event.preventDefault()
    const content = draft.trim()
    if (!token || !content || sendingRef.current) return
    sendingRef.current = true
    setSending(true)
    setNotice('')
    try {
      const result = await sendMessage({ sessionToken: token, content, clientMessageId: createClientMessageId() })
      setSelectedId(result.conversationId)
      setDraft('')
      if (textareaRef.current) textareaRef.current.style.height = ''
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    } finally {
      sendingRef.current = false
      setSending(false)
    }
  }

  const resizeDraft = (event) => {
    setDraft(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${Math.min(event.target.scrollHeight, 140)}px`
  }

  const showChat = () => {
    setIsOpen(true)
    setNotice('')
  }

  return (
    <>
      {token && <button ref={launcherRef} className="student-chat-launcher" type="button" onClick={showChat} aria-label={`Chat with Scholarship Support${unreadCount ? `, ${unreadCount} unread messages` : ''}`} title="Chat with Scholarship Support">
        <span className="material-symbols-outlined" aria-hidden="true">chat</span>
        <span className="student-chat-tooltip" role="tooltip">Chat with Scholarship Support</span>
        {unreadCount > 0 && <span className="student-chat-unread" aria-label={`${unreadCount} unread messages`}>{unreadCount > 99 ? '99+' : unreadCount}</span>}
      </button>}

      {isOpen && token && <div className="student-chat-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeChat() }}>
        <section className="student-chat-modal" role="dialog" aria-modal="true" aria-labelledby="student-chat-title">
          <header className="student-chat-header">
            <img src={ibacmiLogo} alt="IBACMI" />
            <div className="student-chat-heading-copy"><h2 id="student-chat-title">UniFAST Scholarship Support</h2><p>Chat directly with our Scholarship Office</p></div>
            <button type="button" aria-label="Minimize chat" title="Minimize" onClick={closeChat}><span className="material-symbols-outlined" aria-hidden="true">expand_more</span></button>
            <button type="button" aria-label="Close chat" title="Close" onClick={closeChat}><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
          </header>

          <div className="student-chat-history" aria-live="polite" aria-label="Scholarship Support messages">
            {conversations === undefined && <IBACMILoader variant="compact" message="Connecting to your conversations…" />}
            {conversations !== undefined && messages.length === 0 && <div className="student-chat-welcome"><span className="material-symbols-outlined" aria-hidden="true">forum</span><p>{selected?.status === 'resolved' ? 'Your previous conversation is resolved. Send a message to reopen it or ask a new question.' : 'Hello! How can we help with your UniFAST application today?'}</p></div>}
            {messages.map((message, index) => {
              const previous = messages[index - 1]
              const own = message.senderRole === 'student'
              return <div key={message._id}>
                {(!previous || !sameDay(previous.createdAt, message.createdAt)) && <div className="student-chat-date"><span>{new Intl.DateTimeFormat('en-PH', { dateStyle: 'full' }).format(new Date(message.createdAt))}</span></div>}
                <div className={`student-chat-message${own ? ' is-own' : ''}`}><div className="student-chat-bubble">{message.content}</div><time>{messageTime(message.createdAt)}{own && message.readByAdmin ? ' · Seen by Scholarship Office' : ''}</time></div>
              </div>
            })}
            <div ref={endRef} />
          </div>

          {notice && <p className="student-chat-error" role="alert">{notice}</p>}
          <form className="student-chat-composer" onSubmit={submit}>
            <textarea ref={textareaRef} value={draft} maxLength={2000} aria-label="Write a message" placeholder="Write a message…" onChange={resizeDraft} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit() } }} />
            <button type="submit" aria-label={sending ? 'Sending message' : 'Send message'} disabled={!draft.trim() || sending}>{sending ? <IBACMILoader variant="inline" message="" /> : <span className="material-symbols-outlined" aria-hidden="true">send</span>}</button>
            <small>{sending ? 'Sending…' : 'Enter to send · Shift + Enter for a new line'}</small>
          </form>
        </section>
      </div>}
    </>
  )
}
