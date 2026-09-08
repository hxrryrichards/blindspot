import puppeteer from 'puppeteer';
import http from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

if (!existsSync(dist)) {
  console.error('dist/ not found — run "vite build" first.');
  process.exit(1);
}

const ROUTES = [
  '/',
  '/services',
  '/our-work',
  '/about',
  '/services/seo-geo',
  '/services/social-media',
  '/services/content-creation',
  '/services/ugc',
];

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.map': 'application/json',
};

function startServer(root, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = req.url.split('?')[0];
      let filePath = join(root, urlPath);

      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        filePath = join(filePath, 'index.html');
      }

      if (!existsSync(filePath)) {
        if (existsSync(filePath + '.html')) {
          filePath += '.html';
        } else {
          filePath = join(root, 'index.html');
        }
      }

      try {
        const data = readFileSync(filePath);
        res.writeHead(200, {
          'Content-Type': MIME[extname(filePath)] || 'application/octet-stream',
        });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
    window.scrollTo(0, 0);
  });
}

async function prerenderRoute(browser, port, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  console.log(`  Rendering ${route} ...`);
  await page.goto(`http://localhost:${port}${route}`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });

  // Wait for auth loading to finish and real content to appear
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      if (!root) return false;
      if (root.querySelector('.animate-spin')) return false;
      return root.children.length > 0 && root.innerText.trim().length > 100;
    },
    { timeout: 15000 }
  );

  // Scroll through the page to trigger all whileInView animations
  await autoScroll(page);

  // Let animations settle
  await new Promise((r) => setTimeout(r, 1500));

  const html = await page.content();
  const outPath =
    route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`  ✓ ${outPath.replace(dist + '/', 'dist/')}`);

  await page.close();
}

async function main() {
  console.log('Prerendering routes...');
  const port = 4174;
  const server = await startServer(dist, port);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    for (const route of ROUTES) {
      try {
        await prerenderRoute(browser, port, route);
      } catch (err) {
        console.error(`  ✗ ${route}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Update 404.html with prerendered homepage
  writeFileSync(join(dist, '404.html'), readFileSync(join(dist, 'index.html')));
  console.log('  ✓ dist/404.html');

  console.log('Prerendering complete.');
}

main().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});