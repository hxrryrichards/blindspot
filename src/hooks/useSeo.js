import { useEffect } from 'react';

function setMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useSeo({ title, description, canonical, image, jsonLd }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo="article"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo', 'article');
        document.head.appendChild(script);
      }
      script.textContent = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
    }
    return () => {
      if (jsonLd) {
        const script = document.querySelector('script[type="application/ld+json"][data-seo="article"]');
        if (script) script.remove();
      }
    };
  }, [title, description, canonical, image, jsonLd]);
}