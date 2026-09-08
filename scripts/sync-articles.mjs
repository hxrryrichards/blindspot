import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'data', 'blog');
const API_BASE = 'https://api.babylovegrowth.ai/api/integrations';
const API_KEY = process.env.BLG_API_KEY;

if (!API_KEY) {
  console.log('\n⚠ BLG_API_KEY not set — skipping article sync.');
  console.log('  Blog will render with no articles. Set BLG_API_KEY to sync from BabyLoveGrowth.\n');
  process.exit(0);
}

async function fetchJSON(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'X-API-Key': API_KEY,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`API ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

function getArticleId(summary) {
  return summary.id || summary.article_id || summary._id;
}

async function fetchAllSummaries() {
  const all = [];
  let offset = 0;
  const limit = 50;
  while (true) {
    const data = await fetchJSON(`/v1/articles?limit=${limit}&offset=${offset}`);
    const batch = Array.isArray(data) ? data : (data.articles || data.data || []);
    all.push(...batch);
    if (batch.length < limit) break;
    offset += limit;
  }
  return all;
}

async function main() {
  console.log('Syncing articles from BabyLoveGrowth...');
  mkdirSync(BLOG_DIR, { recursive: true });

  const summaries = await fetchAllSummaries();
  console.log(`  Found ${summaries.length} articles.`);

  if (summaries.length === 0) {
    throw new Error('No articles returned from API. Aborting to prevent empty blog.');
  }

   const slugs = [];

  for (const summary of summaries) {
    const articleId = getArticleId(summary);

    if (!articleId) {
      console.warn(`  Skipping article without ID: ${JSON.stringify(summary).slice(0, 100)}`);
      continue;
    }

    const full = await fetchJSON(`/v1/articles/${articleId}`);
    const slug = full.slug || summary.slug || `article-${articleId}`;
    const safeSlug = slug.replace(/[^a-z0-9-]/gi, '-').toLowerCase();

    writeFileSync(join(BLOG_DIR, `${safeSlug}.json`), JSON.stringify(full, null, 2));
    slugs.push(safeSlug);
    console.log(`  ✓ ${safeSlug}`);

    await new Promise(resolve => setTimeout(resolve, 600));
  }

  if (slugs.length === 0) {
    throw new Error('No articles could be synced. Aborting to prevent empty blog.');
  }

  writeFileSync(join(BLOG_DIR, 'manifest.json'), JSON.stringify(slugs, null, 2));
  console.log(`\nSynced ${slugs.length} articles to src/data/blog/`);
}
main().catch((err) => {
  console.error('\n⚠ Article sync failed:', err.message);
  console.error('  Build aborted to prevent deploying an incomplete blog.\n');
  process.exit(1);
});
