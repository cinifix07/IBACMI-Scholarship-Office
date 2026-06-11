import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Disable HMR during development to prevent automatic full-page refreshes
  // which can produce a white flash when the UI reloads. Restart dev server after this change.
  server: {
    hmr: false,
  },
})
