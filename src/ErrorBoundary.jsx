import React from 'react'
import { reportError, resolveError } from './errors/errorBus.js'

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }
  pending = null
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error) {
    this.pending?.reject(error)
    this.pending = null
    reportError(error, { operation: 'application.render', source: 'application.render', kind: 'render', canClose: false, retry: () => new Promise((resolve, reject) => { this.pending = { resolve, reject }; this.setState({ hasError: false }) }) })
  }
  componentDidUpdate() {
    if (!this.state.hasError && this.pending) { this.pending.resolve(); this.pending = null; resolveError('application.render') }
  }
  componentWillUnmount() { this.pending?.resolve(); resolveError('application.render') }
  render() {
    return this.state.hasError ? <main className="ibacmi-error-fallback"><p>This page could not be loaded. Please use the recovery options to try again.</p></main> : this.props.children
  }
}
