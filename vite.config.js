import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://blindspot.agency/</loc><priority>1.0</priority></url>
  <url><loc>https://blindspot.agency/services</loc><priority>0.9</priority></url>
  <url><loc>https://blindspot.agency/services/seo-geo</loc><priority>0.8</priority></url>
  <url><loc>https://blindspot.agency/services/social-media</loc><priority>0.8</priority></url>
  <url><loc>https://blindspot.agency/services/content-creation</loc><priority>0.8</priority></url>
  <url><loc>https://blindspot.agency/services/ugc</loc><priority>0.8</priority></url>
  <url><loc>https://blindspot.agency/our-work</loc><priority>0.7</priority></url>
  <url><loc>https://blindspot.agency/about</loc><priority>0.6</priority></url>
  <url><loc>https://blindspot.agency/privacy.html</loc><priority>0.3</priority></url>
  <url><loc>https://blindspot.agency/terms.html</loc><priority>0.3</priority></url>
  <url><loc>https://blindspot.agency/cookies.html</loc><priority>0.3</priority></url>
</urlset>`;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://blindspot.agency/sitemap.xml
`;

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
    {
      name: 'generate-static-files',
      apply: 'build',
      closeBundle() {
        const dist = join(process.cwd(), 'dist');
        copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));
        writeFileSync(join(dist, 'sitemap.xml'), SITEMAP_XML);
        writeFileSync(join(dist, 'robots.txt'), ROBOTS_TXT);
      }
    }
  ]
});