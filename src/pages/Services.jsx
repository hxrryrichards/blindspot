import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services } from '@/data/services';
import ServiceQuoteModal from '@/components/ServiceQuoteModal';

const tiers = [
  {
    name: 'Essential',
    subline: 'Your foundation for showing up. Consistently. Everywhere it counts.',
    features: [
      '10 SEO-optimised blog posts published every month',
      '1 backlink per month, building real domain authority',
      'Monthly Google Business Profile update',
      'Monthly performance report',
    ],
  },
  {
    name: 'Grow',
    subline:
      'This is where visibility turns into momentum. Search and social, finally pulling in the same direction.',
    featured: true,
    features: [
      '20 SEO-optimised blog posts per month',
      '2 to 3 backlinks per month',
      'AI visibility tracking for AI search results',
      'Weekly Google Business Profile updates, with review outreach aiming for 1 new review a week',
      '8 static social posts per month across Instagram and Facebook, fully captioned and hashtag-optimised',
      'Monthly reporting across SEO and social',
    ],
  },
  {
    name: 'Transform',
    subline:
      'The full engine. Built to make your competitors wonder how you’re suddenly everywhere.',
    features: [
      '30 SEO-optimised blog posts per month, published daily',
      '4 backlinks per month',
      'AI visibility tracking for AI search results',
      'Weekly Google Business Profile updates, bi-weekly optimisation audits, and ongoing review outreach',
      '8 static social posts plus 4 videos per month, edited and posted across Instagram, Facebook, and LinkedIn',
      'Monthly reporting, plus a 30-minute strategy call',
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">Services</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              What we do.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65">
              Four ways we help you close the gap. Pick what you need, or let us build you something
              bespoke.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service pillars */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col gap-6 rounded-2xl border border-gold/30 bg-surface/30 p-10 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
                >
                  <h3 className="font-heading text-2xl font-medium tracking-tight">{s.title}</h3>
                  <p className="text-base leading-relaxed text-foreground/65">{s.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    See how it works{' '}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 pb-32 pt-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">Packages</p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col gap-6 rounded-2xl border p-10 transition-all duration-500 ${
                    t.featured
                      ? 'border-gold bg-surface/40 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]'
                      : 'border-gold/30 bg-background'
                  }`}
                >
                  {t.featured && (
                    <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                      <Star className="h-3 w-3" /> Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-3xl font-medium tracking-tight">{t.name}</h3>
                  <p className="text-sm leading-relaxed text-foreground/65">{t.subline}</p>
                  <ul className="flex flex-col gap-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelected(t.name)}
                    className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.4)]"
                  >
                    Select
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceQuoteModal pkg={selected} onClose={() => setSelected(null)} />
    </div>
  );
}