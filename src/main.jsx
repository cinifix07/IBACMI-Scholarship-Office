import IBACMIServerErrorModal from './components/IBACMIServerErrorModal.jsx'
import { logSanitizedError } from './errors/errorBus.js'
import { StrictMode } from 'react'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const defaultConvexUrl = 'https://ideal-crane-292.convex.cloud'
const convexUrl = import.meta.env.VITE_CONVEX_URL || defaultConvexUrl

function createMissingConvexConfig() {
  return <IBACMIServerErrorModal category="service" onRetry={()=>window.location.reload()} />
}

const root = createRoot(document.getElementById('root'), { onCaughtError: error => logSanitizedError(error, 'application.render'), onUncaughtError: error => logSanitizedError(error, 'application.startup') })

// Fade the static shell without delaying rendering or navigation.
const bootLoader = document.getElementById('ibacmi-boot-loader')
if (bootLoader) {
  bootLoader.classList.add('is-ready')
  bootLoader.addEventListener('transitionend', () => bootLoader.remove(), { once: true })
  window.setTimeout(() => bootLoader.remove(), 220)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL.replace(/\/+$/, '')}/sw.js`, { updateViaCache: 'none' }).catch((error) => {
      logSanitizedError(error, 'application.worker')
    })
  })
}

if (!convexUrl) {
  root.render(createMissingConvexConfig())
} else {
  let convex
  try { convex = new ConvexReactClient(convexUrl, { logger: false }) } catch (error) { logSanitizedError(error, 'application.configuration') }

  root.render(convex ? (
    <StrictMode>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </StrictMode>
  ) : createMissingConvexConfig())
}
