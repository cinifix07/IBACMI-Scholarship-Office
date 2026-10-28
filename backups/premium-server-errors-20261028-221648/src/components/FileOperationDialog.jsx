import { useEffect, useRef } from 'react'
import IBACMILoader from './IBACMILoader.jsx'

export default function FileOperationDialog({ operation, onRetry }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previous = document.activeElement
    dialog.showModal()
    return () => { dialog.close(); if (previous?.isConnected) previous.focus({ preventScroll: true }) }
  }, [])
  return <dialog ref={ref} className="ibacmi-file-dialog" aria-label="File preparation status">
    <IBACMILoader variant="modal" {...operation} onRetry={onRetry} />
    <button className="ibacmi-file-dialog__close" type="button" onClick={() => ref.current?.close()}>{operation.state === 'loading' ? 'Continue in background' : 'Close'}</button>
  </dialog>
}
