import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Log error for debugging
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught', error, info)
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error?.message || 'An unexpected error occurred.'

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          boxSizing: 'border-box',
          background: '#fbfaf8',
          color: '#1c1b1b',
          fontFamily: "'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}>
          <div style={{ maxWidth: 720 }}>
            <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
            <p style={{ color: '#584237', fontWeight: 700 }}>{message}</p>
            <p style={{ color: '#584237' }}>
              If the message mentions Convex functions (for example "Could not find public function"),
              make sure the Convex dev server is running (`npx convex dev`) or that
              `VITE_CONVEX_URL` points to a deployed Convex app.
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{
                  background: '#ea580c',
                  color: '#fff',
                  border: 0,
                  padding: '10px 14px',
                  borderRadius: 8,
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                Reload
              </button>

              <button
                type="button"
                onClick={() => alert('Run `npx convex dev` in the project root or set VITE_CONVEX_URL.')}
                style={{
                  background: '#fff',
                  color: '#1c1b1b',
                  border: '1px solid rgba(150,116,101,0.6)',
                  padding: '10px 14px',
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Help
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
