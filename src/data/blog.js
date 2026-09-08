// Blog article data is synced at build time by scripts/sync-articles.mjs
// and stored as individual JSON files in ./blog/*.json.
// This module loads them eagerly via Vite's import.meta.glob so they're
// bundled into the app with zero runtime API calls.

const modules = import.meta.glob('./blog/*.json', { eager: true });

const articles = Object.entries(modules)
  .filter(([path]) => !path.includes('manifest'))
  .map(([, mod]) => mod.default)
  .filter(Boolean)
  .sort((a, b) => {
    const da = new Date(a.published_at || a.created_at || a.updated_at || 0);
    const db = new Date(b.published_at || b.created_at || b.updated_at || 0);
    return db - da;
  });

export function getArticles() {
  return articles;
}

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}