# Student profile completion

The authenticated Student Information page loads the student's actual account through `supportSessions`, then retrieves only the linked School ID's grantee, applicant, and current-period billing data. A client-supplied Student ID never establishes ownership. Existing login and registration flows remain unchanged.

## Fields and storage

The twelve completion requirements are Student ID, last name, first name, phone number, permanent address, degree program, year level, birthdate, ZIP code, contact email, sex at birth, and a saved School ID upload for the selected school year. Middle name/initial and Facebook link are optional. TES award number and grantee metadata remain office-controlled. Missing names, a missing grantee record, or a missing/invalid school year require Scholarship Office correction. A missing award number shows Needs Review; students cannot invent an award number.

The existing `admins` student account stores an optional `studentInformation` object with `lastName`, `firstName`, `middleInitial`, `course`, `yearLevelCode`, `birthDate`, `zipCode`, `emailAddress`, and `sexCode`. Existing `phoneNumber`, `currentAddress`, and `facebookProfileUrl` account fields are reused. There is no new student collection and no bulk migration or fabricated default. Older accounts are supported because all new top-level schema fields are optional.

Read precedence is saved student information, existing grantee identity, the selected period's billing details, and an unambiguous applicant record for the selected school year, as appropriate to each field. The account's login email is the final email fallback. Ambiguous applicant records are not merged. Sex uses numeric 0 = Male and 1 = Female, mapped to M/F for billing and Form 2. Year level is numeric 1–5 in the account and mapped to the existing billing string field. All seven official program names share a single constant with applicant registration. ZIP codes remain four-character strings and dates use YYYY-MM-DD. The browser's native date control has an MM/DD/YYYY hint and uses the browser's localized date presentation.

Student profile contact email is separate from `admins.email`. Saving it never changes the login identifier. This feature does not introduce an account-email change workflow.

## Saving and review

The form validates in both the browser and the mutation. The mutation checks session role, expiry, active account, field limits, exact program membership, valid real nonfuture dates, ZIP, phone, email and sex/year codes. An optimistic version check rejects stale edits from another tab. Saves patch the existing account and current/latest academic-year grantee names, preserve historical academic-year records and applications, and write an audit entry without contact details. The existing School ID upload-sharing behavior across duplicate grantee rows is preserved.

The grantee details appear in the same form above the name fields: TES Award No., Student ID, Batch No., then Status/Semester/School Year. Last Name, First Name, and Middle Name / Initial are view-only. The mutation rejects attempts to change official names; missing names need Scholarship Office correction. The School ID upload is inside the profile form above the final submission button.

Reporting changes update the selected academic year's source version. Billing and Form 2 show the new details and require fresh office review before another current-data export. Saving unchanged details leaves that source version intact. Previously finalized bills and report snapshots remain unchanged. Completion never sets an official verification or eligibility flag.

The existing individual contact mutations remain available for compatibility and require a matching authenticated student session and an editable school year. `allinfo.listByStudentId` requires authenticated ownership. School ID metadata updates and the HTTP student upload route require ownership and a valid active school year, and remain available after annual submission; uploads use a Bearer token in the Authorization header. The page uses one primary Save Student Information action; students first save the School ID PDF using the upload action.

## Annual submission

Save Student Information validates all twelve requirements and creates a transactional `studentProfileSubmissions` history entry containing the account ID, authoritative school year, submission time, submitted values and saved ID reference. It updates the existing canonical account; the history is an annual submission snapshot, not another student account/profile. The successful response opens the Student Information Submitted modal.

Only one student-information submission is allowed per school year. Student-information fields become view-only after submission and remain locked after logout/reload. School ID upload stays open so students can replace an incorrect file. ID replacement updates the active grantee's file reference and writes an upload audit event; it does not unlock personal information, create another annual submission, or rewrite the original submission snapshot. Server checks protect the annual lock on final submission and legacy contact mutations. Separate ID upload checks still require authenticated ownership and the active school year. Concurrent submissions are serialized by Convex transaction reads/writes. Existing saved profiles are not automatically treated as submitted; no history is fabricated for older accounts.

Editing reopens when the selected official grantee record has a school year newer than every prior submission. A semester change in the same year does not reopen it; removing/reverting records cannot reopen an older year. Students cannot supply an arbitrary year to bypass this check. A newer year keeps the existing personal values but needs its own saved School ID upload. Earlier year snapshots and ID references remain unchanged. No calendar-year or January 1 reset is assumed.

## UI behavior

The warning appears only after the server authenticates and loads an incomplete, editable profile. It lists actual invalid/missing required fields, including the School ID upload, and saved completion progress. Dismissal is remembered for the login token and school year. Its primary action and Escape open the form, highlight errors and focus the first missing input or accessible file chooser. Native dialogs contain keyboard focus. Errors remain hidden on untouched fields until validation is triggered and clear as values become valid. Existing saved values update reactively without overwriting an in-progress draft.

The light neumorphic layout uses maroon/orange accents, SVG warning icons, responsive two-column fields and a single column below 560px. The warning fits short mobile viewports and scrolls internally. The completion status describes data completeness; Scholarship Office verification remains separate.

## Modified source files

- `src/student/student.jsx`, `src/student/student.css`, new `src/student/ProfileCompletion.jsx`
- `src/landingpage/alllanding.jsx` (shared program options)
- `convex/schema.js`, `convex/adminAuth.js`, `convex/allinfo.js`, `convex/applicants.js`, `convex/billing.js`, `convex/http.js`
- New `convex/studentProfile.js`, `convex/studentProfileAuth.js`, `convex/studentProfileRules.js`
- Regenerated `convex/_generated/api.d.ts`
- New profile test fixtures, tests and browser harness under `tests/`

## Verification

Run `node --test tests/student-profile.test.mjs tests/billing.test.mjs tests/form2.test.mjs`, `npm run lint`, and `npm run build`.

With Vite running on port 5174, `node tests/student-profile-browser-check.mjs` exercises the full Student page using real backend handlers against isolated synthetic records through a test-only adapter. Production imports none of these fixtures. The check covers missing-field counts, focus/highlighting, ID requirement, invalid-save prevention, upload metadata persistence, completion refresh, the submitted modal, profile locks after reload, post-submission ID replacement without changing submission history, new-school-year reopening with a new ID, unchanged login email, console errors, and desktop/390px/320px layouts. The external Drive transfer is stubbed with a synthetic PDF; real student files are not uploaded during tests. Screenshots are under ignored `tmp/student-profile-check/`.

Existing-login and new-registration tests invoke the actual authentication handlers and then complete profiles with their issued sessions. No real student's profile is edited for testing. Deployment of optional schema fields and functions is separate from publishing the frontend.

The pre-change, hash-verified source backup is `backups/student-profile-completion-20261028-203634/`.

The source backup before the annual submission changes is `backups/student-profile-annual-20261028-210945/`.
