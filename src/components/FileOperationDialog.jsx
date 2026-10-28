import { useContext, useEffect, useRef, useSyncExternalStore } from 'react'
import IBACMILoader from './IBACMILoader.jsx'
import { getErrorSnapshot, subscribeErrors } from '../errors/errorBus.js'
import { ServerRuntimeContext } from '../errors/runtimeContext.js'

export default function FileOperationDialog({ operation, onRetry }) {
  const ref = useRef(null)
  const error = useSyncExternalStore(subscribeErrors, getErrorSnapshot, () => null)
  const { coordinated } = useContext(ServerRuntimeContext)
  const globalError = coordinated ? error : null
  useEffect(() => {
    const dialog = ref.current
    const previous = document.activeElement
    if (!globalError) dialog.showModal()
    return () => { dialog.close(); if (previous?.isConnected) previous.focus({ preventScroll: true }) }
  }, [globalError])
  return <dialog ref={ref} className="ibacmi-file-dialog" aria-label="File preparation status">
    <IBACMILoader variant="modal" {...operation} onRetry={onRetry} />
    <button className="ibacmi-file-dialog__close" type="button" onClick={() => ref.current?.close()}>{operation.state === 'loading' ? 'Continue in background' : 'Close'}</button>
  </dialog>
}
