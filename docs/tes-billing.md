# TES Billing Management

Open **Scholarship Operations → Billing Management** as an active administrator.

## Before the first report

1. Select the school year and semester. Batch counts use unique Student IDs for that period.
2. Expand **Verified billing rules & prior history**. Enter the approved policy reference, authorized reference format, eligible source statuses and category-specific rates. No official rate or reference convention is supplied by default.
3. Enter administrative support authorization and its percentage, if applicable. The configured percentage applies to the combined TES-1, TES-2 and TES-3A subtotal. Confirm that this basis matches the approval before saving.
4. Enter previously billed Student IDs and the number of tranches issued before this feature was introduced. Confirm that the period's complete prior billing history was checked. Previously recorded exclusions and prior tranche counts cannot be reduced through this interface.
5. Generate a preview. Review each student against enrollment and financial evidence. Available names come from the grantee record. Other applicant information is suggested only when a unique Student ID and school-year match exists. Missing fields are never invented.
6. Select the authoritative source for conflicting duplicate records. Enter campus, college, program, enrollment units, fees and required profile fields. Explicitly verify eligibility and any TES-3A entitlement. Give an evidence reference or exclusion reason.

TES-1 is the lesser of verified actual tuition/other fees and the configured category cap. TES-2 uses the configured category stipend. TES-3A is separate and requires verified disability entitlement. Calculations use integer centavos. Administrative cost is rounded once across the report; per-campus allocations reconcile to that total.

## Preview and finalization

The preview shows all selected students, including exclusions and records needing review. Search and 10-row pagination affect only the preview. Identical source rows count once; conflicting award numbers, required data, eligibility, configuration and prior billings are checked by the server. Changes to a source grantee's identity, batch, status or period require a fresh billing review.

Downloading a new report **finalizes** an immutable snapshot and adds its students and award numbers to the billing ledger in the same Convex transaction. A changed preview must be regenerated. A student/award cannot be billed twice for the period. The workbook's maximum of two tranches per semester includes the prior tranche count.

Use **Finalized billing history** to download that snapshot again in either format. A failed file download can be retried from history without creating a second bill. Generated reports are not payment approvals. The original grantee and applicant records are never updated by billing operations.

## Files and layout

- `public/templates/tes-billing.xlsx` is an unchanged copy of the provided official template.
- Excel generation preserves both worksheets and existing workbook parts, extends the detail area, translates footer merges, adds wrapped data styles, replaces sample values and caches, and updates formulas and print areas. Excel is set to recalculate on opening. Student IDs, ZIP codes and five-digit control numbers remain text.
- Rows sort by campus, college, program and student name. Campus benefit subtotals, administrative cost and total billing reconcile with the statement.
- PDF renders the populated template as a legal-size portrait statement and A3 landscape detail pages, with repeated detail headers. Signature spaces remain blank; printed names already present in the original statement are preserved. Signature dates are left blank.
- Each preview accepts up to 2,000 selected source rows. Larger selections must be split by batch, subject to the two-tranche rule; do not finalize partial reports without checking the complete period plan.

## Verification and deployment

`node --test tests/billing.test.mjs` runs authorization, calculation, deduplication, review, stale-preview, ledger and snapshot tests against an isolated database double.

`node tests/billing-browser-check.mjs` uses the bundled Playwright runtime and a Vite server at port 5174. Its test-only adapter runs the actual server handlers against synthetic records. It tests desktop/mobile controls and downloads, and writes synthetic report artifacts to `tmp/billing-check/`. It never creates live student accounts or bills. The exported 88-student fixture uses explicitly synthetic rates solely to verify the reference arithmetic.

`npm run build` and `npm run lint` check the application. Convex schema/functions must be applied to the deployment used by the frontend. Generating type bindings alone does not activate the feature on a deployment. Hosting the frontend is a separate deployment step.

Billing tables are `billingConfigs`, `billingProfiles`, `billingReports`, `billingReportRows` and `billingLedger`. Every public billing function validates an active administrator session; generation and download events log report identifiers and aggregate totals without student personal details.

## Changed files

The interface is implemented in `src/admin/BillingManagement.jsx` and `billing-management.css`, connected through `AdminSidebar.jsx` and `admin.jsx`. `billingExport.js` populates the template and renders PDFs. Server rules live in `convex/billing.js`, `billingRules.js`, `schema.js`, and regenerated API declarations. `package.json` and its lockfile add JSZip and jsPDF. Vite and ESLint ignore generated test output and backups, and `.gitignore` excludes `tmp/`. Automated checks are under `tests/`.

Original files and a copy of the source workbook are backed up in `backups/tes-billing-20261025-150618/`.
