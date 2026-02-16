import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ... resto della config
  build: {
    chunkSizeWarningLimit: 2000, // Alza il limite a 2MB
  },
})
