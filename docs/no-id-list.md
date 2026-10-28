# NO ID LIST implementation

Implemented after approval on October 29, 2026 (Asia/Singapore).

## Loading fix — October 29, 2026

The real 2026–2027 dataset contained 787 source rows and 506 linked Drive files. The original request attempted 40 serial metadata lookups at a time and timed out after 45 seconds before returning any report.

The interface now starts an authorized background job and watches a protected progress query. Four workers check four files per request. Confirmed missing records appear immediately; unverified uploads remain explicitly pending and are never labeled missing. Actual checked-file counts drive the loading indicator. A completed verified snapshot is reused for Excel preparation, avoiding a second full-year Drive scan. Source changes, failed checks, expired jobs, and cross-administrator job access are rejected. Temporary job metadata expires and is deleted after 30 minutes.

A private CLI diagnostic verified the complete real year: **506/506 files checked, 277 missing-ID records, zero pending, zero unknown files**. No student records or files were changed. The development backend includes the new `noIdJobs` table; existing student data required no migration. The local frontend build must be refreshed to use the new flow; the public frontend was not published.

Validation: 66 automated tests, lint/build, NO ID browser tests including delayed background work and partial results, and the original School ID download regression passed. Live negative checks confirmed that the job-start endpoint requires administrator authorization. The fix backup is `backups/no-id-loading-fix-20261029-004926/`.

Open **Download School ID File → NO ID LIST**, choose a school year and batches, review the verified missing-ID records, and use **Download NO ID List**. The School ID Files entry remains accessible even when no Drive upload links exist.

## Detection and security

The report uses official `allinfo` records, excluding applicant-labeled rows and records without student/year/batch identity. It does not draw grantees from the separate applicant table. Records are grouped by normalized Student ID, school year, and batch; repeated semester/source rows count once in each group.

The backend checks both `frontIdUrl` and legacy `frontIdStorageId`. It also follows annual `studentProfileSubmissions` upload references through their student account and school year. Valid uploads are shared across the same student's records in that school year, preserving the existing duplicate-upload relationship.

- Convex storage objects are checked through actual `_storage` metadata, including existence, size, and PDF type.
- Google Drive files are checked through a new read-only bridge operation, including trash status, configured student-folder membership, size/type, and available year/student-folder/name evidence.
- Wrong student/year evidence cannot satisfy an upload. Cross-identity file reuse requires evidence establishing the correct owner; ambiguous ownership stops verification.
- Missing, empty, deleted, and invalid references count as missing when no valid alternative exists. Service/configuration failures and unknown verification results stop the report and offer Retry; they do not silently classify affected students as missing.
- Every options, inspection, and export request requires an active administrator session. Authentication and the source snapshot are checked again after external verification. Changed records require a fresh request.

No grantee records, uploaded files, student accounts, billings, or Form 2 records are modified. Export logs contain the administrator, year, filename, batch/row counts, and timestamp, without the exported dataset or credentials. Events describe prepared report data rather than proof that a browser saved a file to disk.

## Interface and Excel

The branded modal includes actual school years, a searchable batch checklist, Select All/Deselect All, per-batch total/with-ID/without-ID counts, four summary cards, student/name/TES search, and 10-row pagination. Select All includes batches hidden by search. Search and batch selections apply to every exported matching row across all pages. Explicit Refresh submissions checks external file changes and shows the verification time.

The single worksheet is named `NO ID LIST`. It contains the required ten columns, the Scholarship Office heading, report title, selected year/batches, generated date in Philippine time, and record count. Text cells preserve leading zeros and formula-like strings as literal text. The file has maroon headers, an orange title, alternating shading, column widths, AutoFilter, and frozen headers.

The existing IBACMI loader covers verification, record preparation, and Excel generation. Only JSZip's actual compression progress produces a percentage. Repeated clicks and Escape/Close are blocked during preparation. Errors retain filters and offer deliberate retry. Native dialog behavior supports keyboard focus containment/restoration; the layout has scrolling content, fixed header/footer, a horizontally scrolling table, and reduced-motion support.

## Verification

| Boundary | Result | Evidence |
| --- | --- | --- |
| Dashboard → report | Passed | Opens inside School ID Files with no Drive links; no download starts on open. |
| Request → authorization | Passed | Real handler tests reject missing/expired/student-role/inactive-admin sessions; live negative checks reject all three public endpoints before accessing records/files. |
| Upload relationship → classification | Passed | Valid/deleted/empty legacy and Drive uploads, wrong student/year, duplicate rows, saved annual references, uncertainty, and changed snapshots tested. |
| Filters → table/export | Passed | Single/multiple/all selection, Select All during search, year changes, 10/10/3 pagination, and search across all matching export pages. |
| Response → Excel | Passed | Real browser downloads verified as ZIP/OOXML; worksheet, row count, headers, frozen pane, filters, literal text, and filenames checked. |
| Microsoft Excel | Passed | Opened the generated test workbook read-only with macros disabled: one worksheet, 23 data rows, AutoFilter, frozen headers, leading-zero IDs, and no formula evaluation. Exported PDF preview visually inspected. |
| Responsive/accessibility | Passed | 320, 375, 425, 768, 1024, and 1440px; no modal overflow, accessible footer, table scrolling, busy Escape protection, reduced motion, and error/Retry paths. |
| Existing features | Passed | Download Batch browser regression and original School ID transfer failure → Retry → valid ZIP flow passed. Billing, Form 2, documentation, profile, and error-handler automated regressions passed. |
| Drive integration | Passed | Existing bridge source backed up; deployed metadata operation as version 8 at the existing URL. CLI-only probe returned `{ "ok": true }` without accessing student files. |

All **66 automated tests**, ESLint, and the production build passed. Build retains the existing large-chunk advisory. Browser fixtures are synthetic and use real handlers against an isolated database double. Development-only Vite websocket/font access warnings occurred in the test browser; application/download assertions passed.

Relevant commands:

```text
node --test tests/no-id-list.test.mjs tests/batch-export.test.mjs tests/student-profile.test.mjs tests/billing.test.mjs tests/form2.test.mjs tests/documentation.test.mjs tests/server-errors.test.mjs
node tests/no-id-list-browser-check.mjs
node tests/loading-pages-browser-check.mjs
node tests/batch-download-browser-check.mjs
node tests/no-id-access-check.mjs
powershell -NoProfile -ExecutionPolicy Bypass -File tests/verify-no-id-excel.ps1
npm.cmd run lint
npm.cmd run build
npx.cmd convex run noIdList:checkBridge '{}'
```

## Files, backup, and delivery

- `src/admin/admin.jsx`: School ID entry availability, NO ID LIST button, modal integration, and Escape ownership.
- `src/admin/NoIdListModal.jsx`, `src/admin/no-id-list.css`: filtering, verification states, summary, table/pagination, and responsive UI.
- `src/admin/noIdExport.js`: styled, text-safe XLSX generation and browser download.
- `convex/noIdList.js`, `convex/noIdRules.js`: protected metadata/report/export operations, upload checks, source consistency, ownership, deduplication, filenames, and logs.
- `src/errors/convex.js`, `convex/_generated/api.d.ts`: protected-query catalog and generated registrations.
- `google-apps-script/Code.gs`, `google-apps-script-remote/Code.js`: read-only metadata operation; existing upload/download operations preserved.
- `google-apps-script-remote/appsscript.json`: existing remote manifest pulled without altering its settings.
- `.gitignore`: excludes the locally pulled Apps Script secret file from source control.
- `eslint.config.js`: excludes the Apps Script runtime mirror, whose Google globals differ from the browser application; its metadata logic is exercised by dedicated tests.
- `tests/noIdFixtures.mjs`, `tests/no-id-list.test.mjs`, `tests/no-id-list-browser-check.mjs`, `tests/no-id-access-check.mjs`, `tests/verify-no-id-excel.ps1`: fixture, handler, browser, live negative-access, and real Excel validation.

Verified timestamped backup: `backups/no-id-list-20261029-000555/`, with a SHA-256 manifest. Existing remote bridge code/manifest, `.gitignore`, and ESLint configuration were also backed up before their respective edits. Secret values were not included in the report or diagnostic output.

Convex development functions are synchronized to `ideal-crane-292`. The existing Drive bridge deployment is version 8. The loading fix adds an ephemeral job table without changing student records. Frontend assets were built locally; the public frontend was not published.
