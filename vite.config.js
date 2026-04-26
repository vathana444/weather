import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/weather/',
  build: {
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css')
            ? 'assets/index.css'
            : 'assets/[name][extname]',
      },
    },
  },
  plugins: [react()],
})
