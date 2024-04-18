import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 server:{
  port:3000,
  proxy:{
    '/api': {
      target: 'http://13.234.21.37:1111',
      changeOrigin: true,
      secure: true, // Ensure this is true for HTTPS, unless dealing with self-signed certificates
    },
  }
 },
})
