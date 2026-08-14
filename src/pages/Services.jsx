import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services } from '@/data/services';
import ServiceQuoteModal from '@/components/ServiceQuoteModal';

const tiers = [
  {
    name: 'Essential',
    subline: 'Your baseline for producing a consistent customer base.',
    features: [
      '10 SEO-optimised blog posts published every month',
      '1 backlink per month, building real domain authority',
      'Monthly Google Business Profile update',
      'Monthly SEO performance report',
    ],
  },
  {
    name: 'Grow',
    subline: 'Your growth system for going from noticed to chosen.',
    featured: true,
    features: [
      '20 SEO-optimised blog posts per month',
      '3 backlinks per month',
      'AI search optimisation',
      'Bi-weekly Google Business profile posting',
      '8 static social posts per month across 2 desired platforms',
      'Caption optimisation',
      'Hashtag research and optimisation',
      'Monthly SEO performance report',
      'Monthly social media performance report',
    ],
  },
  {
    name: 'Transform',
    subline: 'Your full-scale system for owning your market.',
    features: [
      '30 SEO-optimised blog posts per month',
      '4 backlinks per month',
      'AI search optimisation',
      'Targeted engagement across relevant online communities',
      'Weekly Google Business profile posting',
      '8 static social posts per month across 3 platforms',
      '4 reels created, edited and posted across 3 platforms',
      'Caption optimisation',
      'Hashtag research and optimisation',
      'Monthly SEO performance report',
      'Monthly social media performance report',
      'Monthly Google Business profile report',
      'Monthly strategy call',
      '90-day money back guarantee',
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