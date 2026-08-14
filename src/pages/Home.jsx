import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import LogoCarousel from '@/components/LogoCarousel';
import { useGetStarted } from '@/components/GetStartedContext';
import { Image } from '@/components/ui/image';

const HERO_IMG = 'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/e01058633_generated_f2637fc0.png';
const TEXTURE_IMG = 'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/1540c090b_generated_a8747959.png';

const stats = [
{ value: '10+', label: 'Brands scaled' },
{ value: '4M+', label: 'Organic views generated' },
{ value: '100%', label: 'Client retention rate' }];


const pillars = [
{
  n: '01',
  title: 'Find the gap',
  body: "We start by figuring out what's actually holding you back. We audit your market, your competitors, and your current digital presence to locate your blindspot."
},
{
  n: '02',
  title: 'Build the presence',
  body: "We strategise content and visibility opportunities built around where your customers are really looking. Every asset we create works for you long after it's released."
},
{
  n: '03',
  title: 'See results',
  body: "Systems are built to keep working month after month. Visibility and results compound instead of resetting every time you stop paying attention to it."
}];


const testimonials = [
{
  quote:
  "Working with Blindspot has transformed our business. They've elevated our social media with innovative reels, engaging posts, and smart strategies that have boosted visibility and enquiries. Their before-and-after content showcases our work perfectly, and they've consistently been creative, responsive, and easy to work with. We're lucky to have found them and highly recommend their services.",
  name: "Arthur E.",
  role: "CEO, E.V.A Design & Build Specialists"
},
{
  quote:
  "Myself and the Blindspot team have been working together for a couple of years now. Their insight and energy are always great assets when we are working together. They're always timely in responses and treat what they do for us like it's their own company.",
  name: "Rob S.",
  role: "CEO , Blueprint Leadership Development"
},
{
  quote:
  "Blindspot are an essential part of our consumer mobile app development team. They've pioneered creative growth strategies across Pinterest, TikTok, and Reddit, among other platforms. The resulting metrics don't lie!",
  name: 'Jasmine L.',
  role: 'Founder, The Flower Shoppe'
}];


const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const { open: openGetStarted } = useGetStarted();
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <h1 className="font-heading text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[6.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="block text-balance">
              Every business has a
              <span className="gold-glow block">blindspot.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="mt-2 block text-balance text-foreground/55">
              We fix yours.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-12 flex max-w-xl flex-col gap-8">
            
            <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl">
              Something's holding your business growth back. A gap in strategy, visibility, or execution you can't quite see from the inside. Blindspot finds it and fixes it, with results you can actually check, not just promises.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openGetStarted}
                className="inline-flex h-14 items-center rounded-full bg-gold px-9 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]">

                Get Started
              </button>
              <Link
                to="/our-work"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-gold/30 px-9 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10">
                
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar — stats */}
      <section className="border-y border-gold/20 py-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-6 px-6 md:flex-nowrap md:justify-between md:px-12 lg:px-20">
          {stats.map((s, i) => (
            <Fragment key={i}>
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
                  {s.value}
                </span>
                <span className="metadata text-foreground/40">{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50 md:inline-block" />
              )}
            </Fragment>
          ))}
        </div>
      </section>

      {/* What We Do — three pillars */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">What we do</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              A system built to find, fix, and compound.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) =>
            <Reveal key={p.n} delay={i * 0.12}>
                <div className="flex h-full flex-col gap-6 rounded-2xl border border-gold/30 bg-surface/30 p-10 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] md:p-12">
                  <span className="font-heading text-5xl font-medium text-gold/40">{p.n}</span>
                  <h3 className="font-heading text-2xl font-medium tracking-tight">{p.title}</h3>
                  <p className="text-base leading-relaxed text-foreground/65">{p.body}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Brand logo carousel */}
      <LogoCarousel />

      {/* Testimonials */}
      <section className="border-y border-gold/20 bg-surface/40 px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">In their words</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The blindspots we fixed.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) =>
            <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-gold/30 bg-background p-10 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                  <blockquote className="font-heading leading-relaxed text-foreground/85 text-base">
                    “{t.quote}”
                  </blockquote>
                  <figcaption>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="mt-1 text-sm text-foreground/50">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>

          <Reveal>
            <div className="mt-14 flex justify-center">
              <Link to="/our-work" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-gold">
                see more of our work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative px-6 py-32 md:px-12 md:py-56 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="rounded-2xl border border-gold/30 p-12 text-center md:p-24">
              <p className="metadata mb-6 text-gold">Your blindspot is costing you customers</p>
              <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                We’ll find the gap... And make marketing your unfair advantage.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65">
                Something is holding your growth back. We find it, fix it, and you’ll see the results yourself.
              </p>
              <button
                type="button"
                onClick={openGetStarted}
                className="mt-12 inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]">

                Get Started
              </button>
              <div className="mt-8">
                <Link to="/our-work" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-gold">
                  see more of our work
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>);

}