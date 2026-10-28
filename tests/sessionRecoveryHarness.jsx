import { createRoot } from 'react-dom/client'
import App from '../src/App.jsx'
import { logSanitizedError } from '../src/errors/errorBus.js'
createRoot(document.getElementById('root'), { onCaughtError: error => logSanitizedError(error, 'test.render') }).render(<App />)
