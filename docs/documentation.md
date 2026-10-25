# Documentation Management and public gallery

Open **Administration → Documentation**. Select or drag PNG, JPEG or WebP files, enter optional title/description/event date and choose Draft or Published. Save Documentation uploads the actual image bytes to Convex Storage and persists metadata in Convex. No demonstration records are installed.

Uploads accept files up to 10 MB each, up to 10 in one selection. Images are decoded, normalized and optimized to a maximum edge of 2,560 pixels before upload. This removes source metadata. The server independently checks the image signature, declared type, exact size and dimensions (maximum 40 megapixels/16,000 pixels on either edge). Administrator-bound single-use tickets expire after 15 minutes; each administrator may start up to 20 uploads per minute. Progress and individual failures remain visible. Failed images can be removed or retried, and pending uploads are cleaned up.

Metadata fields apply to the selected batch; display order increments per image. Use **Edit details** to change individual titles, descriptions, dates, display order and status. Admin search, publication filters, upload-date sorting and ten-record pagination operate on Convex data. Preview includes private draft images. Delete requires confirmation. Storage files are retained when another documentation record, student record, applicant or archive references them, or when an archive scan cannot safely establish absence of references.

## Public presentation

Only published documentation appears below the existing Scholarship Office banner. The section is hidden when there are no published records and in the existing grantee-search results view. The banner and search behavior are preserved.

One image is a static card. Two use a simpler sliding loop. Three or more use a five-slot perspective carousel with a larger center card. Hidden buffer copies are excluded from keyboard/screen-reader interaction. The carousel moves left, wraps modularly, and pauses on hover, focus, explicit Pause, hidden tabs, off-screen sections and reduced-motion preferences. Previous/Next and swipe are available. A swipe does not also open the viewer.

The viewer shows the image, title, description and event date with Previous/Next, arrow keys, swipe, Escape and focus return. Images use loading skeletons and error placeholders. A bounded memory cache (20 images/40 MB) avoids re-downloading images as the carousel loops; invalidated/unpublished records are evicted. Convex Storage remains the permanent source. The animation updates transforms through one cleaned-up requestAnimationFrame loop rather than querying or setting React state on every frame.

## Security and storage

All administrative queries and mutations check an active administrator session. Upload tickets belong to the initiating administrator, cannot be replayed and are consumed only through the protected HTTP upload handler. Administrative actions are logged without unnecessary image descriptions or student details.

Public metadata does not expose storage IDs or administrator identities. Raw storage URLs are not returned. `/documentation/image` resolves the record on every request, serves only published images to anonymous visitors, and sends no-store/nosniff headers. Draft previews require an Authorization bearer session. Unpublishing blocks subsequent public image requests; it cannot retract bytes already received by a visitor.

Tables: `documentation` and `documentationUploads`. Internal claim/attach/finalize/cleanup/resolution functions are not public APIs. The upload and image HTTP routes are added alongside the existing routes without replacing them.

## Files and verification

- `convex/documentation.js`, `documentationHttp.js`, `documentationRules.js`, `schema.js`, `http.js`, and regenerated API declarations implement persistence and authorization.
- `src/admin/DocumentationManagement.jsx` and `documentation-management.css` implement admin upload and management, connected through `AdminSidebar.jsx` and `admin.jsx`.
- `src/documentation/` contains the gallery, image viewer, loading/cache utilities and styles. `src/landingpage/alllanding.jsx` inserts the gallery after the existing banner.
- Original source files are backed up in `backups/documentation-20261025-171151/`.

Run `node --test tests/documentation.test.mjs tests/billing.test.mjs tests/form2.test.mjs`, `npm run lint` and `npm run build`. `node tests/documentation-browser-check.mjs` uses the actual upload/image handlers against isolated storage/database doubles and a Vite server at port 5174. It checks upload, private preview, publication, edit, deletion, carousel wrap/caching, banner/search preservation, responsive viewports, swipe and reduced motion. Test artifacts stay under ignored `tmp/documentation-check/`; tests do not publish images to the live deployment. `tests/documentation-access-check.mjs` performs negative checks against development.

The new functions/schema were applied to the configured development Convex deployment (`ideal-crane-292`) using `convex dev --once`. All 26 documentation, billing and Form 2 tests passed, along with lint, the production build, responsive browser checks and development access checks. The build reports its existing large-chunk advisory. Publishing the frontend is a separate hosting step. Actual public images appear only after an administrator uploads and publishes documentation.
