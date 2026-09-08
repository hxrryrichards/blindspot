import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { getArticles } from '@/data/blog';

export default function Blog() {
  const articles = getArticles();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">Insights</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The Blindspot blog
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65">
              Marketing insights, strategies, and stories from the team finding and fixing blindspots.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          {articles.length === 0 ? (
            <p className="text-foreground/50">No articles yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.08}>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 bg-surface/30 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
                  >
                    {article.hero_image_url && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={article.hero_image_url}
                          alt={article.title}
                          fittingType="fill"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col gap-4 p-8">
                      <h2 className="font-heading text-xl font-medium leading-tight tracking-tight transition-colors group-hover:text-gold">
                        {article.title}
                      </h2>
                      {article.meta_description && (
                        <p className="line-clamp-3 text-sm leading-relaxed text-foreground/60">
                          {article.meta_description}
                        </p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        Read article{' '}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}