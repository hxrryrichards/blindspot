import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://blindspot.agency/sitemap.xml
`;

function buildSitemap() {
  const staticUrls = [
    { loc: 'https://blindspot.agency/', priority: '1.0' },
    { loc: 'https://blindspot.agency/blog', priority: '0.8' },
    { loc: 'https://blindspot.agency/services', priority: '0.9' },
    { loc: 'https://blindspot.agency/services/seo-geo', priority: '0.8' },
    { loc: 'https://blindspot.agency/services/social-media', priority: '0.8' },
    { loc: 'https://blindspot.agency/services/content-creation', priority: '0.8' },
    { loc: 'https://blindspot.agency/services/ugc', priority: '0.8' },
    { loc: 'https://blindspot.agency/our-work', priority: '0.7' },
    { loc: 'https://blindspot.agency/about', priority: '0.6' },
    { loc: 'https://blindspot.agency/privacy.html', priority: '0.3' },
    { loc: 'https://blindspot.agency/terms.html', priority: '0.3' },
    { loc: 'https://blindspot.agency/cookies.html', priority: '0.3' },
  ];

  // Add blog article URLs from manifest (written by sync-articles.mjs)
  const manifestPath = join(process.cwd(), 'src', 'data', 'blog', 'manifest.json');
  const blogUrls = [];
  if (existsSync(manifestPath)) {
    try {
      const slugs = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      for (const slug of slugs) {
        blogUrls.push({ loc: `https://blindspot.agency/blog/${slug}`, priority: '0.7' });
      }
    } catch (e) {
      console.warn('Warning: could not parse blog manifest for sitemap:', e.message);
    }
  }

  // Insert blog article URLs right after the /blog index URL
  const allUrls = [
    ...staticUrls.slice(0, 2),
    ...blogUrls,
    ...staticUrls.slice(2),
  ];

  const urlEntries = allUrls
    .map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

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
        writeFileSync(join(dist, 'sitemap.xml'), buildSitemap());
        writeFileSync(join(dist, 'robots.txt'), ROBOTS_TXT);
      }
    }
  ]
});