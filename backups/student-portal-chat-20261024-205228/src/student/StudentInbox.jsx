import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import '../admin/student-support.css'

function messageTime(timestamp) {
  return timestamp ? new Intl.DateTimeFormat('en-PH', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp)) : ''
}

export default function StudentInbox({ studentSession }) {
  const token = studentSession?.sessionToken
  const conversations = useQuery(api.support.listStudentConversations, token ? { sessionToken: token } : 'skip')
  const links = useQuery(api.support.getSettings)
  const sendMessage = useMutation(api.support.sendMessage)
  const markRead = useMutation(api.support.markRead)
  const [selectedId, setSelectedId] = useState()
  const [mobileListOnly, setMobileListOnly] = useState(() => window.matchMedia('(max-width: 620px)').matches)
  const [draft, setDraft] = useState('')
  const [notice, setNotice] = useState('')
  const [sending, setSending] = useState(false)
  const endRef = useRef(null)
  const selected = mobileListOnly ? null : selectedId
    ? conversations?.find((conversation) => conversation._id === selectedId) ?? null
    : conversations?.[0] ?? null

  useEffect(() => {
    if (token && selected?._id) markRead({ sessionToken: token, conversationId: selected._id }).catch(() => {})
  }, [token, selected?._id, markRead])

  useEffect(() => endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' }), [selected?._id, selected?.messages.length])

  const submit = async (event) => {
    event.preventDefault()
    if (!selected || !draft.trim() || sending) return
    setSending(true)
    setNotice('')
    try {
      await sendMessage({ sessionToken: token, conversationId: selected._id, content: draft.trim(), clientMessageId: crypto.randomUUID() })
      setDraft('')
    } catch (error) {
      setNotice(error.message || 'Your message could not be sent.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="student-support-panel" aria-labelledby="student-support-title">
      <div className="student-support-heading"><div><span>STUDENT SERVICES</span><h2 id="student-support-title">Support & messages</h2><p>View replies to your requests and continue the conversation.</p></div><span className="material-symbols-outlined">forum</span></div>
      {links && <div className="student-support-links">{[[links.link1Name, links.link1Url], [links.link2Name, links.link2Url]].filter(([name, url]) => name && url).map(([name, url]) => <a key={url} href={url} rel="noopener noreferrer" target="_blank">{name}<span className="material-symbols-outlined">open_in_new</span></a>)}</div>}
      {!token && <p className="student-support-empty">Sign in again to access private support conversations.</p>}
      {token && conversations === undefined && <p className="student-support-empty">Loading your support conversations…</p>}
      {token && conversations?.length === 0 && <p className="student-support-empty">You do not have any support requests yet. Submit a request from the portal to start a conversation.</p>}
      {conversations?.length > 0 && <div className="student-support-chat">
        <nav className={`student-support-list ${!mobileListOnly && selected ? 'has-selection' : ''}`} aria-label="Your conversations">
          {conversations.map((conversation) => <button type="button" key={conversation._id} className={!mobileListOnly && selected?._id === conversation._id ? 'is-selected' : ''} onClick={() => { setSelectedId(conversation._id); setMobileListOnly(false); setNotice('') }}><strong>{conversation.source || 'Support request'}</strong><span>{conversation.messages.at(-1)?.content}</span><small>{conversation.status}</small></button>)}
        </nav>
        {selected && <div className={`student-support-thread ${!mobileListOnly ? 'has-selection' : ''}`}>
          <button className="student-support-back" type="button" onClick={() => setMobileListOnly(true)}>← All requests</button>
          <div className="student-support-history">{selected.messages.map((message) => <div key={message._id} className={`student-support-message ${message.senderRole === 'student' ? 'is-own' : ''}`}><span>{message.senderRole === 'admin' ? 'Student Support' : 'You'} · {messageTime(message.createdAt)}</span><p>{message.content}</p></div>)}<div ref={endRef} /></div>
          {selected.status === 'resolved' ? <p className="student-support-resolved">This conversation is resolved. Submit a new request if you need more help.</p> : <form className="student-support-compose" onSubmit={submit}><textarea value={draft} maxLength={2000} aria-label="Reply to student support" placeholder="Write a message…" onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); submit(event) } }} /><button type="submit" disabled={!draft.trim() || sending}>{sending ? 'Sending…' : 'Send'}</button></form>}
          {notice && <p className="student-support-error" role="alert">{notice}</p>}
        </div>}
      </div>}
    </section>
  )
}
