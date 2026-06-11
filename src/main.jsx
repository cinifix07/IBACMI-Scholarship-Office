import { StrictMode } from 'react'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const defaultConvexUrl = 'https://ideal-crane-292.convex.cloud'
const convexUrl = import.meta.env.VITE_CONVEX_URL || defaultConvexUrl

function createMissingConvexConfig() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: '#fbfaf8',
        color: '#1c1b1b',
        fontFamily:
          "'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <section style={{ maxWidth: 640 }}>
        <p
          style={{
            color: '#c2410c',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.08em',
            margin: '0 0 10px',
            textTransform: 'uppercase',
          }}
        >
          Deployment setup needed
        </p>
        <h1 style={{ fontSize: 32, lineHeight: 1.1, margin: '0 0 12px' }}>
          Missing Convex URL
        </h1>
        <p style={{ color: '#584237', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          Add <strong>VITE_CONVEX_URL</strong> in your Vercel project environment variables, then
          redeploy. Use the same Convex cloud URL from your local <strong>.env.local</strong> file.
        </p>
      </section>
    </main>
  )
}

const root = createRoot(document.getElementById('root'))

if (!convexUrl) {
  root.render(createMissingConvexConfig())
} else {
  const convex = new ConvexReactClient(convexUrl)

  root.render(
    <StrictMode>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </StrictMode>,
  )
}
