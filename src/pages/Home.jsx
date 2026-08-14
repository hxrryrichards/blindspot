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
  body: 'We audit your market, your competitors, and your current presence to locate the blindspot holding back your growth — the opportunities everyone else is missing.'
},
{
  n: '02',
  title: 'Build the presence',
  body: 'We design automated content and SEO systems engineered to compound. Every asset we create works for you long after it ships.'
},
{
  n: '03',
  title: 'Grow the business',
  body: 'Visibility becomes pipeline. We turn steady, compounding attention into booked calls, qualified leads, and durable revenue.'
}];


const testimonials = [
{
  quote:
  'Blindspot found the gap we had been staring at for years. Within four months our organic traffic had tripled and the calls hadn’t stopped since.',
  name: "Arthur E.",
  role: 'Founder, Northgate Plumbing Co.'
},
{
  quote:
  'They don’t sell campaigns — they build systems. Our content now runs on its own and every month is bigger than the last. It’s the first marketing that actually compounded.',
  name: 'Elena Vasquez',
  role: 'Owner, Bright Smile Dental'
},
{
  quote:
  'Calm, precise, and relentlessly effective. Blindspot feels less like an agency and more like the part of our team we didn’t know we were missing.',
  name: 'James Okonkwo',
  role: 'Director, Crestline HVAC'
}];


const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const { open: openGetStarted } = useGetStarted();
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="metadata mb-10 text-foreground/40">
            
            Marketing systems for local service businesses
          </motion.p>

          <h1 className="font-heading text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[6.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="block text-balance">
              
              Every business has a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="gold-glow block">
              
              blindspot.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease }}
              className="mt-2 block text-balance text-foreground/55">
              
              We fix yours.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="mt-12 flex max-w-xl flex-col gap-8">
            
            <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl">
              Blindspot is a specialist marketing agency for local service businesses. We build
              automated content and SEO systems that compound growth over time — so visibility
              stops being a sprint and becomes an asset.
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
                
                See our work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar — marquee */}
      <section className="border-y border-gold/20 py-10">
        <div className="relative flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-16 pr-16">
            {[...stats, ...stats, ...stats, ...stats].map((s, i) =>
            <div key={i} className="flex items-center gap-16">
                <span className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  {s.value}
                </span>
                <span className="metadata text-foreground/40">{s.label}</span>
                
              </div>
            )}
          </div>
          <div className="marquee-track flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
            {[...stats, ...stats, ...stats, ...stats].map((s, i) =>
            <div key={i} className="flex items-center gap-16">
                <span className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  {s.value}
                </span>
                <span className="metadata text-foreground/40">{s.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
              </div>
            )}
          </div>
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
              The businesses that stopped guessing.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) =>
            <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-gold/30 bg-background p-10 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                  <blockquote className="font-heading text-xl leading-relaxed text-foreground/85">
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
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative px-6 py-32 md:px-12 md:py-56 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 p-12 text-center md:p-24">
              <Image
                src={TEXTURE_IMG}
                alt=""
                fittingType="fill"
                className="absolute inset-0 h-full w-full opacity-[0.12]" />
              
              <div className="relative">
                <p className="metadata mb-6 text-gold">Your blindspot is closer than you think</p>
                <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Let’s find the gap — and make it your advantage.
                </h2>
                <button
                  type="button"
                  onClick={openGetStarted}
                  className="mt-12 inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]">

                  Get Started
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>);

}