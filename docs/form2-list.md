# Form 2 List / Listahanan 2

Open **Scholarship Operations → Form 2 List** as an active administrator. The preview retrieves actual Convex grantees for the selected academic year, semester and batches. Filters reset pagination; searching happens before the 10-row pagination.

## Required verification

The source workbook labels column D **TES Application Number**, whereas the existing field is `allinfo.tesAwardNumber`. An administrator must verify that meaning and record the supporting authority before exporting. Column N is configured explicitly as either the actual database batch number or an authorized designation. It has no assumed default.

Complete the existing Billing Management period rules and student details first. Amounts use the verified period/category rates: O is TES-1 plus TES-2, P is TES-3A, and Q is their sum. The source workbook's sample PHP 13,500 is never a default rate.

Each included student also needs explicit continuing TES eligibility verification with evidence. This approval is stored on the existing billing profile, not in a copied student collection. Editing the billing profile invalidates its earlier continuing approval. Missing or inconsistent data blocks final export and remains visible in the preview.

## Source and finalization

- **Current Convex grantee records**: review the preview, issued reference and billing date. Downloading finalizes through the existing billing transaction and ledger, with the same duplicate, stale-preview and two-tranche checks.
- **Saved bill**: generate a supporting Form 2 from the complete immutable billing snapshot. This does not bill those students again. Partial exports of a saved bill are rejected so its totals continue to reconcile.
- **Form 2 history**: download the saved Form 2 again using its original mapping. The history stores the billing report ID, mappings, administrator and generation date. It does not store another student roster.

All Form 2 endpoints validate an active administrator session. Activity Logs contain generation/download events and aggregate information rather than student personal details. Grantee and applicant records remain unchanged.

## Official workbook and privacy

The original workbook is preserved in `backups/form2-list-20261025-160825/`. This private backup directory is ignored by Git. The reusable `public/templates/form2-list.xlsx` is sanitized: all student rows in Sheet1–Sheet5 and the old Sheet7 roster are removed, and the original shared-string roster is removed from the ZIP package. CHED/UniFAST logos, styles, worksheet names, signature sections and other document parts are retained. Printed signatory names already present in the source remain; the generator does not add signatures or approval stamps.

`scripts/sanitize-form2-template.py` reproducibly creates the safe template from the original. Never replace the public template with the populated source workbook.

Exports keep **Sheet1, Sheet2, Sheet3, Sheet4, Sheet5 and Sheet7**. The original capacities are 5, 24, 26, 29 and 4 students. Sheet5 extends when needed, with translated footer merges and formulas. Sheet7 lists only the selected Convex students grouped by actual batch. Page and combined totals are formulas, and Excel recalculates on opening. Control numbers and Student IDs are text; control numbers have five digits.

The official workbook orders by campus, college, program and then last name, given name and middle initial. Exports follow that grouping, with a Student ID tie-breaker. Long required fields wrap and rows extend when necessary; the original column widths remain. PDF uses legal landscape detail pages and a portrait batch reference list, repeats headers and includes all selected records. Empty continuation sheets are retained in Excel and omitted from the PDF; Sheet5's combined summary remains included.

New current-data selections inherit the billing module's 2,000-source-row guard. Larger selections need an agreed batch/tranche plan rather than silently truncated exports.

## Implementation and checks

UI: `src/admin/Form2Management.jsx`, `form2-management.css`, `AdminSidebar.jsx`, and `admin.jsx`.

Server: `convex/form2.js`, shared billing helpers in `billing.js`, optional metadata in `schema.js`, and regenerated API bindings. Exporters: `src/admin/form2Export.js` and shared template renderer/helpers in `billingExport.js`.

Run `node --test tests/billing.test.mjs tests/form2.test.mjs`, `npm run lint`, and `npm run build`. `node tests/form2-browser-check.mjs` tests UI and export behavior using isolated test records and the real handlers through a test-only adapter. Production does not import these fixtures. Test artifacts are written only under ignored `tmp/form2-check/`.

The browser check includes a 115-row overflow fixture. Workbook structure/privacy checks and independent recalculation verify complete inclusion and formula-linked totals. PDF checks verify the logos, instructions and complete control-number coverage. Applying Convex development functions is separate from publishing the frontend.
