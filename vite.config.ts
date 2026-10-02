import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/saweria': {
        target: 'https://backend.saweria.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/saweria/, ''),
        headers: {
          Origin: 'https://saweria.co',
          Referer: 'https://saweria.co/HasyhiRama'
        }
      }
    }
  }
})
