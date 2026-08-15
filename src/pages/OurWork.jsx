import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyModal from '@/components/CaseStudyModal';
import FaqSection from '@/components/FaqSection';

export default function OurWork() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">REAL RESULTS. REAL NUMBERS.</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">Proof, not promises.

            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65">Every result on this page is checkable and ours. No estimates, no vanity metrics.


            </p>
          </Reveal>
        </div>
      </section>

      {/* Case study cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) =>
            <Reveal key={c.id} delay={i * 0.08}>
                <button
                type="button"
                onClick={() => setSelected(c)}
                className="group flex h-full w-full flex-col gap-6 rounded-2xl border border-gold/30 bg-surface/30 p-10 text-left transition-all duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                
                  <div>
                    <h3 className="font-heading text-2xl font-medium tracking-tight">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-foreground/45">{c.category}</p>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/65">{c.preview}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Read the case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="A few common questions."
        items={[
          {
            question: 'What industries do you work with?',
            answer:
              'Mostly local service businesses, but our client list ranges from construction and security to SaaS and tech startups. Every case study on this page is a real client, not a mock example.',
          },
          {
            question: 'How quickly will I see results?',
            answer:
              'It depends on the service, but SEO and search visibility typically take a few weeks to a few months to build. Some things move faster. The case studies above show real timelines from real clients.',
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="px-6 pb-32 pt-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="rounded-2xl border border-gold/30 p-12 text-center md:p-24">
              <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                We could do this for you.
              </h2>
              <a
                href="https://cal.com/blindspotagency/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CaseStudyModal study={selected} onClose={() => setSelected(null)} />
    </div>);

}