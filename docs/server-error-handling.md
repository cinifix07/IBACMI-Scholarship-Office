# IBACMI server error handling

Implemented after approval on October 28, 2026. The pre-change backup is `backups/premium-server-errors-20261028-221648/`, with a SHA-256 manifest.

## Authentication and the reported query

The current student page uses `studentProfile:get` and explicitly passes its authenticated session token. No current feature calls the originally reported `allinfo:listByStudentId` query without a token. A stale frontend is a possible explanation for the screenshot, but its deployed source was not verified.

Protected reads now use the shared adapter in `src/errors/convex.js`. An omitted token is obtained from the current authenticated application context. Explicit `skip` remains a skip; an unavailable or invalid token prevents the request and presents the session recovery interface. No hardcoded production tokens were introduced. The original backend still requires `sessionToken: v.string()` and enforces session validity and student ownership.

Tests exercise the original query with sessions issued by both the existing login and registration handlers, reject missing tokens and cross-student access, and verify context-token forwarding and authentication-loading skips in the browser.

## Error interface and recovery

`IBACMIServerErrorModal` uses the existing official logo, orange/maroon styling, a native modal dialog, focus restoration, safe Escape/Close behavior, mobile scrolling, and reduced-motion support. It presents distinct messages for session, validation, offline, connection, and unexpected service failures. One root `ServerErrorProvider` coordinates feature queries, mutations, actions, exports, async failures, connection events, and the React error boundary.

Retry shows `IBACMILoader`, probes the read-only `connectionHealth:check` endpoint, verifies the Convex socket, and retries failed reads through fresh HTTP queries. Transient reads are limited to three attempts with 300/600 ms backoff. Validation and session failures stop immediately. Recovery never replays mutations, actions, uploads, or submissions; users explicitly submit again after reconnecting.

Failed reactive reads retain previously loaded data for the exact request and session. Connection recovery preserves mounted forms and drafts. A genuine render crash requires remounting the failed subtree, so unsaved state inside that crashed subtree cannot be guaranteed. Sign In Again clears stored authentication and opens the login interface.

## Privacy and caching

User interfaces receive fixed friendly messages, never raw exception payloads or stack traces. Reviewed local validation messages use a fixed allowlist. SDK browser logging is disabled; application diagnostics contain only category, sanitized operation, UTC timestamp, diagnostic code, and an available hexadecimal request ID. No request arguments, tokens, passwords, student records, or file names are logged by this layer. Authorized developers can correlate request IDs with restricted Convex logs.

The service worker uses versioned application caches, excludes API/source/dependency requests, caches only successful responses, and cleans only this application's cache names. It does not force reload open forms. An already open old frontend still needs a normal page refresh to run this implementation.

## Validation and delivery

- Production build and ESLint passed. Build retains the existing large-chunk advisory.
- 50 automated tests passed across authentication/profile, billing, Form 2, documentation, classification, diagnostics, and retry policy.
- Browser recovery checks passed: original protected query, auth-loading skip, five error categories, single modal, 320px/mobile/desktop layouts, reduced motion, draft preservation, bounded failures, no mutation replay, render recovery, and actual application sign-in recovery.
- Billing browser checks passed, including both exports with 88 synthetic students and no duplicate ledger entries.
- Documentation browser checks passed for upload, preview, publication, editing, deletion, responsive layouts, and keyboard/reduced-motion behavior. The HTTP upload test adapter now explicitly simulates the reactive subscription update.
- Student profile, loading pages, Form 2, and branded loader browser regression checks passed during implementation.
- Browser fixtures use isolated synthetic data and real backend handlers; they do not create real student records or billings.
- Convex development functions were synchronized to `ideal-crane-292`. A live read-only check confirmed the health response and rejection of the original query without its required token.

Frontend assets were built locally. The public frontend has not been published by this change.
