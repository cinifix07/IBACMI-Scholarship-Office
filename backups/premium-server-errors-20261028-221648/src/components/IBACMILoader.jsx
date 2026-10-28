import ibacmiLogo from '../assets/IBACMI.png'
import './ibacmi-loader.css'

/** Percentages describe completed work, never elapsed time. A pending 100 means server finalization. */
export default function IBACMILoader({ message = 'Loading UniFAST information…', variant = 'section', progress, state = 'loading', detail, onRetry, onCancel }) {
  const complete = state === 'success'
  const failed = state === 'error'
  const measurable = !failed && (complete || (Number.isFinite(progress) && progress >= 1 && progress < 100))
  const percent = complete ? 100 : measurable ? Math.floor(progress * 10) / 10 : undefined
  return <span className={`ibacmi-loader ibacmi-loader--${variant} ibacmi-loader--${state}${measurable ? ' is-measurable' : ''}`} role={failed ? 'alert' : 'status'} aria-live={failed ? 'assertive' : 'polite'} aria-busy={!complete && !failed}>
    <span className="ibacmi-loader__emblem" aria-hidden="true">
      <span className="ibacmi-loader__seal"><img src={ibacmiLogo} alt="" width="80" height="80" /></span>
      <svg className="ibacmi-loader__ring" viewBox="0 0 100 100" fill="none"><circle className="ibacmi-loader__track" cx="50" cy="50" r="45" /><circle className="ibacmi-loader__arc" cx="50" cy="50" r="45" pathLength="100" strokeDasharray={measurable ? '100 100' : '26 74'} strokeDashoffset={measurable ? 100 - percent : 0} /></svg>
      {(complete || failed) && <span className="ibacmi-loader__badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d={failed ? 'm7 7 10 10M17 7 7 17' : 'm5 12 4 4 10-10'} strokeLinecap="round" strokeLinejoin="round" /></svg></span>}
    </span>
    <span className="ibacmi-loader__copy">
      <span className="ibacmi-loader__brand">IBACMI Scholarship Office</span>
      <span className="ibacmi-loader__message">{message}</span>
      {detail && <span className="ibacmi-loader__detail">{detail}</span>}
      {measurable && <span className="ibacmi-loader__percent" role="progressbar" aria-label={message} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>{percent}%</span>}
      {(onRetry || onCancel) && <span className="ibacmi-loader__actions">{failed && onRetry && <button type="button" onClick={onRetry}>Retry</button>}{!complete && !failed && onCancel && <button type="button" onClick={onCancel}>Cancel</button>}</span>}
    </span>
  </span>
}
