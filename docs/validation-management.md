# Validation Management

Implemented after approval on October 29, 2026 (Asia/Singapore).

Open **Validation Management** immediately after **Form 2 List** under Scholarship Operations. This is a dedicated management page, with the existing collapsed/expanded and mobile sidebar behavior preserved.

## Workflow

1. Choose a `.xlsx`, legacy `.xls`, or UTF-8 `.csv` file.
2. Review the first ten uploaded rows and any input warnings.
3. Select an actual school year and one or more exact batch identifiers. Select All includes batches hidden by the batch search.
4. Start Validation. The server authenticates the administrator, parses the original file again, and compares only official `allinfo` records in the selected year/batches.
5. Review summary counts and the searchable comparison table; filter by status/batch, sort by batch/status, and move through ten-row pages. Status buttons open read-only Student Validation Details.
6. Download the complete eight-sheet Excel report, or reopen/re-download retained results from Validation History.

## Comparison rules and data availability

- Matching uses Student ID plus exact batch within the selected school year. Names are never used to discover a match.
- Whitespace and capitalization normalize for comparison. JR/SR/Roman numeral suffixes compare consistently with or without a final period. Other spelling differences and missing name components remain differences.
- Uploaded rows are classified exclusively as MATCHED, MISMATCHED, NOT FOUND, DUPLICATE, INVALID DATA, or AMBIGUOUS MATCH. Official records absent from the upload add separate MISSING FROM UPLOAD rows. Uploaded-row totals and missing-official totals are shown separately.
- Multiple official records with the same matching key are ambiguous, including repeated semester records; no arbitrary record is selected. Details retain the relevant candidate name fields.
- The existing official schema had `middleInitial` but no separate extension name. Optional `extensionName` and `middleName` fields are now supported without filling or modifying existing records. A recorded middle initial is compared literally; it is never expanded to a full name. An absent official extension or middle-name component produces INVALID DATA with a review remark rather than a false match. An explicitly recorded empty extension is distinct from an unavailable extension field.
- Official records and source files remain unchanged. The module has no controls to edit official data.

## Import limits and safety

Files are limited to 5 MB, 10,000 student rows, 128 columns, and exactly one nonempty worksheet. XLSX expanded data is bounded to 30 MB and 2,000 ZIP entries. The parser rejects wrong signatures, corruption/encryption, malformed CSV quoting, ambiguous/missing required columns, binary/non-UTF-8 CSV, and oversized cells. Empty rows are ignored. Formula cells, invalid IDs, and required-value problems are flagged for review.

The six required columns accept explicit aliases and harmless capitalization, punctuation, and whitespace variations. No fuzzy column guessing occurs. Student IDs remain strings. Formatted numeric Excel cells retain their displayed leading zeros; zeros absent from the original file cannot be reconstructed, and numeric/scientific precision problems are flagged.

The parser uses the pinned SheetJS 0.20.3 official distribution, following its [installation instructions](https://docs.sheetjs.com/docs/getting-started/installation/nodejs/). Browser preview parsing runs in a dedicated Worker with a 15-second termination deadline. Server-side Node actions parse and validate the original bytes independently. The original uploaded file is not persisted.

Only the required comparison fields are retained. Results are stored privately in Convex storage; the app never returns a public storage URL. Report actions recheck authorization after reading retained bytes. A fresh official-scope version is checked before saving a run. Logs record administrator/run IDs, year, batch counts, and row counts, without student datasets or credentials.

## Reports and retention

The workbook contains:

1. VALIDATION SUMMARY
2. ALL COMPARISON RESULTS
3. MATCHED
4. MISMATCHED
5. NOT FOUND
6. DUPLICATES
7. MISSING FROM UPLOAD
8. INVALID - AMBIGUOUS

The last name uses a hyphen because Excel worksheet names cannot contain `/`. Every sheet has an IBACMI heading, report title, school year, selected batches, Philippine generation time, maroon/orange headers, alternating shading, column widths, filters, and frozen headers. Text values use literal inline-string cells, preserving IDs and preventing formula injection. Export includes every row of the saved run, regardless of visible table page or display filters.

Detailed results expire after 30 days and are deleted by a scheduled internal operation. Summary metadata expires after 365 days. History search runs against retained metadata on the server and displays up to 200 matching entries. Expired detailed results cannot be viewed or downloaded. Authorized administrators can review retained scholarship-office runs.

## Verification report

| Boundary | Result | Evidence |
| --- | --- | --- |
| Navigation → page | Passed | Actual Admin/sidebar component opens a dedicated page, marks the active item, and preserves mobile navigation. |
| File → preview | Passed | Real Worker imported XLSX, XLS, and CSV; tested malformed headers, corrupted/binary/oversized files, formulas, UTF-8 names, offset headers, and leading-zero numeric formatting. |
| Request → authorization | Passed | Real handlers reject missing/expired/student-role/inactive-admin sessions before parsing or persistence. Live development options/history/Node-action probes reject missing credentials. |
| Selected scope → comparison | Passed | All seven categories, exact batch/year isolation, no name-only matching, duplicates, ambiguity, extension normalization, unavailable fields, and no official writes. |
| Results → table/details | Passed | Search/status filters, ten-row pagination (10/10/4), sorting, read-only details, and busy duplicate-click protection. |
| Report → download/history | Passed | Actual browser XLSX download contains all 24 synthetic rows and eight sheets; retained actions, logs, expiry, and cleanup tested. |
| Microsoft Excel | Passed | Opened the generated workbook read-only with macros disabled; verified all eight sheet names, full comparison row count, AutoFilters, frozen headers, and literal cells. Summary PDF rendered and visually inspected. |
| Responsive | Passed | 320, 375, 425, 768, 1024, and 1440px; no page overflow outside scrollable tables. Desktop and mobile screenshots inspected. |
| Existing features | Passed | NO ID LIST and original CSV/School ID download browser regressions passed; billing, Form 2, documentation, profile, and error-handler automated tests passed. |

All **74 automated tests**, ESLint, and the production build passed. Build retains the existing large-chunk advisory. Dependency audit reported 11 project advisories (1 moderate, 10 high); broad dependency upgrades were not included in this feature change. Browser checks used isolated synthetic fixtures and real handlers, without creating official student records or real validation runs in the live database.

Useful verification commands:

```text
node --test tests/validation-management.test.mjs tests/no-id-list.test.mjs tests/batch-export.test.mjs tests/student-profile.test.mjs tests/billing.test.mjs tests/form2.test.mjs tests/documentation.test.mjs tests/server-errors.test.mjs
node tests/validation-browser-check.mjs
node tests/validation-access-check.mjs
powershell -NoProfile -ExecutionPolicy Bypass -File tests/verify-validation-excel.ps1
node tests/loading-pages-browser-check.mjs
node tests/no-id-list-browser-check.mjs
npm.cmd run lint
npm.cmd run build
```

## Files and delivery

- `src/admin/AdminSidebar.jsx`, `src/admin/admin.jsx`: navigation and dedicated page integration.
- `src/admin/ValidationManagement.jsx`, `src/admin/validation-management.css`: upload preview, scope selection, summaries, results/details, and history.
- `src/admin/validationWorker.js`: isolated preview parsing.
- `src/admin/validationExport.js`: styled eight-sheet, text-safe workbook generation and download.
- `convex/validationParser.js`, `convex/validationRules.js`: shared import checks and comparison engine.
- `convex/validation.js`, `convex/validationActions.js`: protected scope/options, Node validation, retained results, history, audit logs, and cleanup.
- `convex/schema.js`: validation history table and optional official-name fields; no existing name values populated.
- `src/errors/convex.js`, `convex/_generated/api.d.ts`: protected-query catalog and generated registrations.
- `package.json`, `package-lock.json`: pinned spreadsheet parser dependency.
- `tests/validationFixtures.mjs`, `tests/validation-management.test.mjs`, `tests/validationBridge.jsx`, `tests/validation-browser-check.mjs`, `tests/validation-access-check.mjs`, `tests/verify-validation-excel.ps1`: handler, browser, live negative-access, retention, workbook, and Excel checks.

Verified backup: `backups/validation-management-20261029-012406/`, with SHA-256 hashes for 15 original files. Convex development functions and schema were synchronized to `ideal-crane-292`. Frontend assets were built locally; the public frontend was not published. Refresh the development page to load the new navigation.
