import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { useGetStarted } from '@/components/GetStartedContext';
import { getArticle, getArticles } from '@/data/blog';
import { useSeo } from '@/hooks/useSeo';

export default function BlogArticle() {
  const { slug } = useParams();
  const { open: openGetStarted } = useGetStarted();
  const article = getArticle(slug);

  useSeo({
    title: article ? `${article.title} | Blindspot Blog` : 'Article not found | Blindspot Blog',
    description: article?.meta_description || 'Blindspot blog article',
    canonical: `https://blindspot.agency/blog/${slug}`,
    image: article?.hero_image_url,
    jsonLd: article?.jsonLd,
  });

  if (!article) {
    return (
      <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="font-heading text-4xl">Article not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
          >
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const moreArticles = getArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 pb-16 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
            <p className="metadata mt-10 mb-6 text-gold">Article</p>
            <h1 className="max-w-4xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            {article.meta_description && (
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65">
                {article.meta_description}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      {article.hero_image_url && (
        <section className="px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gold/30">
                <Image
                  src={article.hero_image_url}
                  alt={article.title}
                  fittingType="fill"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Article content */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            {article.content_html ? (
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content_html }}
              />
            ) : article.content_markdown ? (
              <div className="article-content">
                <ReactMarkdown>{article.content_markdown}</ReactMarkdown>
              </div>
            ) : (
              <p className="text-foreground/50">This article has no content yet.</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* More articles */}
      {moreArticles.length > 0 && (
        <section className="border-t border-gold/20 px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="metadata mb-6 text-gold">Keep reading</p>
              <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
                More from the blog
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {moreArticles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.08}>
                  <Link
                    to={`/blog/${a.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 bg-surface/30 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
                  >
                    {a.hero_image_url && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={a.hero_image_url}
                          alt={a.title}
                          fittingType="fill"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-heading text-lg font-medium leading-tight tracking-tight transition-colors group-hover:text-gold">
                        {a.title}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        Read <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="rounded-2xl border border-gold/30 p-12 text-center md:p-24">
              <p className="metadata mb-6 text-gold">Your blindspot is costing you customers</p>
              <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                We'll find the gap... And make marketing your unfair advantage.
              </h2>
              <button
                type="button"
                onClick={openGetStarted}
                className="mt-12 inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                Get Started
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}