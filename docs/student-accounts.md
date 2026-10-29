# Student Accounts update

The User Management modal now displays ten columns in this order: No., Student ID, Last Name, First Name, Middle Name, Complete Permanent Address, Email Address, Phone Number, Facebook Profile, Actions.

## Data and access

- Accounts remain the existing `admins` records with role `student`. No records are inserted or rewritten by listing or viewing details.
- `admins.schoolId` joins to `allinfo.studentId` and `applicants.studentId` through their existing indexes. IDs remain strings; leading zeros are retained. There is no numeric, email, or name-based identity matching.
- Saved `admins.studentInformation` names and `admins.currentAddress` take precedence. Official names use the same current-school-year selection as the student profile, falling back to the latest available year. Repeated same-year rows must agree on a field before it is used.
- Applicant name/address fallback is limited to the same exact ID and selected official school year, with matching known first/last names. Conflicting official identity fields disable applicant fallback. Multiple applicant values must agree. No arbitrary candidate is selected.
- A recorded full middle name is used only when compatible with the recorded middle initial. Otherwise the recorded initial is preserved. No expansion is invented. Missing values display `Not provided`.
- Existing account email, phone, Facebook link, status, and Edit/Delete behavior remain. Account email is still the existing login email; this update does not replace it with a separate student contact email.
- List, Edit, and Delete now require an unexpired administrator session and an active administrator account. Passwords, OTPs, tokens, and unrelated profile fields are never returned in the list.
- Delete retains the existing archive behavior. Viewing or comparing profiles never changes grantee or application records. No schema migration is required.

## Interface

Search covers all requested name, address and contact fields, including first-name-first and last-name-first complete names. Search is case-insensitive and resets pagination to page one. Five accounts appear per page with Previous/Next, page numbers, matching count and overall count.

The modal is at most 1480px wide and 90vh high. Only the table scrolls horizontally; its headers stay visible during vertical table scrolling. The table retains its columns on mobile rather than switching into cards. Local SVG icons keep search, pagination, close, Edit and Delete controls legible without external icon fonts.

Clicking a row or its keyboard-accessible Student ID button opens read-only Personal Information and Contact Information. The native modal dialog traps focus, supports Escape, and returns focus to its trigger. Edit/Delete/Profile-link clicks do not open row details. Edit and Delete are also available from details.

## Verification

- `node --test tests/student-accounts.test.mjs tests/student-profile.test.mjs tests/server-errors.test.mjs`: 28 passing tests, covering exact ID matching, leading zeros, ambiguous data, field precedence, access rejection, Edit/Delete and profile/error regressions.
- `node tests/student-accounts-browser-check.mjs`: passed using the production Admin component, production Convex handler logic and an isolated synthetic database. Covers ten headers, five-row pagination, all search fields, details/Escape, Edit and archive deletion, and 320/375/768/1024/1440px viewports. No real student information was modified by these checks.
- Browser screenshots in `tmp/student-accounts-check/` reviewed at mobile and desktop widths.
- `node tests/student-accounts-access-check.mjs`: live development API rejected missing and invalid administrator credentials. Positive authenticated behavior was tested against isolated handlers; real student records were not edited or deleted.
- ESLint and production build passed. Build retains the existing large-chunk advisory.
- Development Convex functions synchronized. Public frontend was not published.

Backup: `backups/student-accounts-20261029-171550/manifest.json` records SHA256 hashes for ten pre-change files. Application changes are limited to the account endpoints, their frontend session integration, Student Accounts UI and generated Convex API types.
