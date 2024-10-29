import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../olympusAIServer/src/main/resources/public',
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
})
