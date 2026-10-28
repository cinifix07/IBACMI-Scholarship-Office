# Global IBACMI loading system

All existing loading indicators now use the official logo through `IBACMILoader`, including initial app startup, student/profile/ID operations, login and registration, admin tables and mutations, support, documentation, CSV/ZIP exports, Billing, and Form 2. Existing authentication, Convex data, annual profile submission locks and post-submission ID replacement remain unchanged. This change requires no backend/schema deployment.

## Shared components

- `src/components/IBACMILoader.jsx`: reusable `page`, `modal`, `section`, `table`, `compact`, `inline`, and `image` variants; loading, success, and error states; optional Retry and safe-cancel actions.
- `src/components/ibacmi-loader.css`: warm neumorphic background, orange circular SVG progress ring, gentle logo float/breathing, maroon typography, success checkmark, responsive sizes, and reduced-motion rules. The official seal is not recolored, distorted, or regenerated.
- `src/components/useFileOperation.js`: actual async task lifecycle, duplicate-operation guard, measured updates, retry and success/error feedback. It does not use timed percentage simulation. Retry preserves the original task and, for financial exports, the already-created report ID.
- `src/components/FileOperationDialog.jsx`: responsive native download status dialog. Continue in background dismisses the dialog without cancelling the operation.
- `src/components/transfer.js`: XHR upload helper reporting actual transferred bytes, with timeout, abort and response handling. Student ID upload retains its authenticated Authorization header and existing server ownership rules.

## Progress rules

Convex requests and unknown processing durations use an indeterminate ring, without invented percentages. Cached results continue to use the existing reactive query behavior; loading UI stays local to the affected section or control. Errors are distinct from empty results.

Applicant, documentation and student ID upload percentages derive from actual XHR progress events. A completed byte transfer is not considered a successful save: the loader switches to an indeterminate finalization state while the server responds. Report workbook compression uses JSZip's actual compression callback. Billing PDF rendering reports completed worksheets. Form 2 PDF generation uses contextual stages where total work is unknown. School ID ZIP progress counts processed file requests plus ZIP construction and browser handoff; unavailable files are explicitly reported in the result.

The shared component never displays 100% for a pending task, even when its transfer callback reports 100 or rounds near 100. Only `state="success"` displays 100%. Existing fixed CSV percentages and artificial download delays were removed. Synchronous file work yields to a browser frame before executing, without imposing a minimum animation duration.

File success means **Your file is ready!** The application prepares the file and hands it to the browser; it does not claim that the browser saved it to the user's disk. Failures stop the animation and offer Retry for exports and failed documentation uploads. Failed financial exports retry the saved report rather than finalize another bill. Existing field validation and entered form data remain intact.

## Startup and accessibility

`index.html` contains a matching static full-page loader while the actual application modules load. `src/main.jsx` fades and removes that shell without delaying React rendering or navigation. A real script-load failure stops the startup animation and exposes Retry; JavaScript-disabled browsers receive a plain explanation.

The logo uses the existing identical assets at `src/assets/IBACMI.png` and `public/IBACMI.png`. Their SHA-256 remains `57F244049E0D1B4E581FEFC1E3FE18E4D5465F92284C5829A851C4D9751C7DDC`.

Loading uses polite status announcements, real progressbar values when measurable, and alert semantics on failures. Decorative seals/rings do not add redundant accessible names. Reduced-motion preferences disable animation and transitions. The download dialog fits 320px screens and short viewports, and supports keyboard dismissal/background continuation.

## Modified application files

- `index.html`, `src/main.jsx`, `src/ErrorBoundary.jsx`
- `src/student/student.jsx`, `src/student/ProfileCompletion.jsx`, `src/student/StudentInbox.jsx`
- `src/landingpage/alllanding.jsx`, `src/landingpage/VisitorSupport.jsx`
- `src/admin/admin.jsx`, `src/admin/StudentSupport.jsx`
- `src/admin/BillingManagement.jsx`, `src/admin/Form2Management.jsx`, `src/admin/billingExport.js`, `src/admin/form2Export.js`
- `src/admin/DocumentationManagement.jsx`, `src/documentation/DocumentationGallery.jsx`, `src/documentation/DocumentationImage.jsx`
- The five new shared files in `src/components/` listed above.

## Backup

Before implementation, 32 existing source/asset files were copied to `backups/global-ibacmi-loader-20261028-213722/`. Every copy was verified against its original SHA-256. The folder's `manifest.json` records the file list and hashes. No existing database records were modified for this work.

## Verification

- `npm run lint`
- `npm run build` (existing large-chunk advisory remains)
- `node --test tests/student-profile.test.mjs tests/billing.test.mjs tests/form2.test.mjs tests/documentation.test.mjs` — 45 tests covering the existing server behavior.
- `node tests/loader-browser-check.mjs` — official logo, real/determinate/indeterminate/success states, no premature 100%, retry, duplicate-operation guard, preserved form input, background continuation, responsive dialog and reduced motion.
- `node tests/loading-pages-browser-check.mjs` — actual startup shell, script-load failure, pending portal query, login failure recovery, admin CSV output, and failed School ID transfer followed by Retry and a validated ZIP.
- `node tests/student-profile-browser-check.mjs` — pending authenticated profile loader, full annual submission flow, ID upload/replacement and new-year reopening.
- `node tests/billing-browser-check.mjs` — billing preview/review and Excel/PDF output, including 88 synthetic rows.
- `node tests/form2-browser-check.mjs` — XLSX/PDF output and a deliberate export failure after finalization; Retry preserves the report and ledger; overflow coverage includes 115 synthetic rows.
- `node tests/documentation-browser-check.mjs` — actual upload handlers, gallery publication/editing, caching, responsive/reduced-motion controls and deletion.

Browser checks use Vite at `http://127.0.0.1:5174/IBACMI-Scholarship-Office` and isolated synthetic records through test adapters. External file transfers are stubbed with synthetic bytes; no real student file is uploaded or downloaded for verification. Screenshots and generated artifacts are under ignored `tmp/loader-check/` and the existing feature-specific test folders. The frontend is not automatically published.
