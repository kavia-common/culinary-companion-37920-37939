import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure server binds to 0.0.0.0 so the platform preview can reach it.
// Keep port aligned to 3000 for both dev and preview.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,         // equivalent to 0.0.0.0
    strictPort: true,   // do not auto-increment ports
    open: false,
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  build: {
    minify: false,
    sourcemap: true,
  },
})
