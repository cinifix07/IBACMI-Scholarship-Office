import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import IBACMILoader from '../src/components/IBACMILoader.jsx'
import FileOperationDialog from '../src/components/FileOperationDialog.jsx'
import useFileOperation from '../src/components/useFileOperation.js'

export default function LoaderHarness() {
  const [model, setModel] = useState({})
  const [showDialog, setShowDialog] = useState(false)
  const { operation, run, retry } = useFileOperation()
  useEffect(() => { window.setLoaderModel = setModel; return () => { delete window.setLoaderModel } }, [])
  const start = () => { void run('Preparing your batch download…', update => {
    window.loaderTaskCalls = (window.loaderTaskCalls || 0) + 1
    window.updateLoaderTask = update
    return new Promise((resolve, reject) => { window.completeLoaderTask = resolve; window.failLoaderTask = reject })
  }).catch(() => {}) }
  return <main style={{ maxWidth: 820, margin: 'auto', padding: 14 }}>
    <h1>IBACMI loader verification</h1>
    <section id="loader-primary"><IBACMILoader message="Loading your grantee information…" {...model} /></section>
    <section id="loader-compact"><IBACMILoader variant="compact" message="Connecting to your conversations…" /></section>
    <button type="button"><IBACMILoader variant="inline" message="Signing you in securely…" /></button>
    <label style={{ display: 'block', margin: 16 }}>Unsaved information<input aria-label="Unsaved information" defaultValue="Keep my entered data" /></label>
    <button type="button" id="start-loader-task" disabled={operation?.state === 'loading'} onClick={start}>Start file operation</button>
    <button type="button" onClick={() => setShowDialog(true)}>Show file status dialog</button>
    <section id="loader-operation">{operation && <IBACMILoader {...operation} onRetry={retry} />}</section>
    {showDialog && operation && <FileOperationDialog key={operation.id} operation={operation} onRetry={retry} />}
  </main>
}
createRoot(document.getElementById('root')).render(<LoaderHarness />)
