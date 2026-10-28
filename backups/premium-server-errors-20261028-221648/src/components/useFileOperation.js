import { useCallback, useEffect, useRef, useState } from 'react'

// A local operation lifecycle: unrelated sections remain usable, and retry reruns the actual task.
export default function useFileOperation() {
  const [operation, setOperation] = useState(null)
  const running = useRef(false)
  const retryAction = useRef(null)
  const sequence = useRef(0)
  const mounted = useRef(true)
  useEffect(() => { mounted.current = true; return () => { mounted.current = false } }, [])
  const run = useCallback(async (message, action) => {
    if (running.current) return
    running.current = true
    const update = values => { if (mounted.current) setOperation(current => ({ ...current, ...values })) }
    retryAction.current = { message, action }
    update({ id: ++sequence.current, state: 'loading', message, progress: undefined, detail: '' })
    // Yield one frame so synchronous CSV/PDF work can paint a loading state without a timed delay.
    await new Promise(resolve => requestAnimationFrame(() => resolve()))
    try {
      const result = await action(update)
      update({ state: 'success', progress: 100, message: 'Your file is ready!', detail: result?.detail || 'The file has been prepared and handed to your browser.' })
      return result
    } catch (error) {
      update({ state: 'error', progress: undefined, message: 'Unable to prepare your file.', detail: error instanceof Error ? error.message : 'Please try again.' })
      throw error
    } finally { running.current = false }
  }, [])
  const retry = useCallback(() => {
    const task = retryAction.current
    if (task) void run(task.message, task.action).catch(() => {})
  }, [run])
  return { operation, run, retry }
}
