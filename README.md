# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Google Drive applicant PDF uploads

Applicant PDFs are uploaded to:

`https://drive.google.com/drive/folders/1n-J5QOSr6FivcyvDbY8qTL5WEgtKOo80`

Student School ID PDFs are uploaded to:

`https://drive.google.com/drive/folders/18YvJEnt3MB0f1tcLzoCUDTDL5SS-AdUH`

Convex stores only the Google Drive file URL. Setup:

1. Open `script.google.com` with a Google account that can edit the Drive folder.
2. Create a project and paste `google-apps-script/Code.gs` into it. If the script was already
   deployed for applicant uploads, replace its code with the updated file and create a new
   deployment version.
3. Add an Apps Script property named `UPLOAD_SECRET` with a long random value.
4. Deploy as a Web app, execute as yourself, and allow access to anyone.
5. Configure the Convex deployment:

   `npx convex env set GOOGLE_DRIVE_UPLOAD_URL "YOUR_APPS_SCRIPT_WEB_APP_URL"`

   `npx convex env set GOOGLE_DRIVE_UPLOAD_SECRET "THE_SAME_RANDOM_VALUE"`

6. Deploy Convex with `npx convex deploy`.

The web app is reachable publicly so Convex can call it, but it accepts uploads only when the
secret matches.
