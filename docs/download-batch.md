# Download Batch implementation and verification

Implemented after approval on October 28, 2026 (Asia/Singapore).

The administrator opens **Download Batch** from Grantee Management, chooses a school year and one or more batches, reviews the matching record count, and downloads the existing CSV format through an authenticated Convex operation.

## Delivered behavior

- The existing dashboard action stays in its original position and opens one native modal rather than starting a download.
- School years, naturally sorted batches, and counts come from current Convex grantee records. No production sample records or hardcoded batch/year options were introduced.
- Search only filters the visible checklist. Select All selects every batch in the chosen year. Changing years clears selections; batches removed by reactive database updates are permanently removed from the selection.
- The summary displays the year, selected batch count, matching grantee record count, and CSV format. A student with distinct semester records retains those separate rows. Exact duplicate exported grantee records appear once.
- Download preparation revalidates the year and batches on the backend. It returns only records in the selected year and batches, with the original 13 CSV headers, order, source-field mapping, case-insensitive student-account join, CSV quoting, and missing-account fallback.
- Both new endpoints require an active administrator session. Unknown/empty selections fail before export logging. Grantee records, student accounts, historical billings, and Form 2 data are never changed by export.
- Activity Logs record the administrator, prepared filename, school year, batch count, record count, and timestamp. They do not contain exported datasets or credentials. The event describes preparation, not proof that the user saved a file to disk.
- Filenames identify single, multiple, or all batches. Long selections use a deterministic compact hash; all filename components are sanitized.
- Branded indeterminate loading covers validation, fetching, CSV generation, and browser handoff. Repeated clicks and Escape/Close are blocked during preparation. Download Ready appears only after file preparation and browser handoff succeed. Failure retains selections and offers a deliberate Retry, integrated with the existing global error handling.
- The modal has a fixed header/footer, scrolling body and batch list, native keyboard focus containment, restored opener focus, reduced-motion support, and responsive controls.

## Verification report

| Boundary | Result | Evidence |
| --- | --- | --- |
| Dashboard → modal | Passed | Actual Admin component opens the new modal; opening makes no export request. |
| Selection → request | Passed | Single/multiple/all exports, Select All during search, year changes, reactive removals, and a 39-batch list verified. |
| Request → authorization/data | Passed | Real handlers exercised against an isolated database fixture; missing, expired, student-role, and inactive-admin sessions rejected. |
| Data → CSV | Passed | All 13 original columns and values checked; downloads exclude other years and unselected batches, preserve semesters, and remove exact duplicates. |
| CSV → browser | Passed | Actual browser download events and generated filenames/content checked; pending work, double clicks, failure, and explicit Retry exercised. |
| Responsive/accessibility | Passed | 320, 375, 425, 768, 1024, and 1440px screenshots; accessible footer, long-list scrolling, keyboard/focus restoration, and reduced motion checked. |
| Existing download flow | Passed | Updated loading regression covers actual CSV output plus School ID transfer failure → Retry → valid ZIP containing the original synthetic PDF. |
| Development deployment | Passed | Convex functions synchronized to `ideal-crane-292`; live negative checks confirmed both new endpoints reject missing credentials before reading records or writing logs. |

Commands completed successfully:

```text
npm.cmd run lint
npm.cmd run build
node --test tests/batch-export.test.mjs tests/billing.test.mjs tests/form2.test.mjs tests/student-profile.test.mjs tests/documentation.test.mjs tests/server-errors.test.mjs
node tests/batch-download-browser-check.mjs
node tests/loading-pages-browser-check.mjs
node tests/batch-export-access-check.mjs
```

The automated suite passed all 56 tests. Build retains the existing large-chunk advisory. Browser checks used synthetic fixtures and actual backend handlers, without exporting live student information. The local browser emitted Vite development websocket/font access warnings; application assertions and download checks passed. The test server runs on port 5174.

## Files and backup

- `src/admin/admin.jsx`: replaces the old export dialogs/action and delegates native-dialog Escape behavior.
- `src/admin/DownloadBatchModal.jsx`, `src/admin/download-batch.css`: selection, summary, responsive UI, and operation states.
- `src/admin/batchDownload.js`: existing-compatible CSV serialization and browser handoff.
- `convex/batchExport.js`, `convex/batchExportRules.js`: authorized metadata/export endpoints, deduplication, mapping, filenames, and audit log.
- `src/errors/convex.js`: includes batch options in the protected-query adapter.
- `convex/_generated/api.d.ts`: generated API registrations.
- `tests/batchExportFixtures.mjs`, `tests/batch-export.test.mjs`, `tests/batchDownloadHarness.jsx`, `tests/batch-download-browser-check.mjs`, `tests/batch-export-access-check.mjs`: isolated handler, browser, and negative-access verification.
- `tests/loading-pages-browser-check.mjs`: updates the old export interaction to the new modal while retaining the School ID regression.

Backup: `backups/download-batch-20261028-231627/`. The SHA-256 manifest covers 13 original files, including the loading regression test copied before its update.

Frontend assets were built locally. The public frontend was not published. No schema migration was needed.
