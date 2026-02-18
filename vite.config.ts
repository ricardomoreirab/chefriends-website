import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// Middleware to replicate Cloudflare _redirects locally
function serveStaticHtml() {
  const routes: Record<string, string> = {
    '/privacy': 'public/privacy.html',
    '/terms': 'public/terms.html',
  }
  return {
    name: 'serve-static-html',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const file = routes[req.url]
        if (file) {
          res.setHeader('Content-Type', 'text/html')
          res.end(readFileSync(resolve(__dirname, file), 'utf-8'))
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [serveStaticHtml(), react()],
})
