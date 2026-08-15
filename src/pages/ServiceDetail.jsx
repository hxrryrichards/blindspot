import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useGetStarted } from '@/components/GetStartedContext';
import { services } from '@/data/services';
import { serviceDetails } from '@/data/serviceDetails';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { open: openGetStarted } = useGetStarted();
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service) {
    return (
      <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="font-heading text-4xl">Service not found</h1>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
          >
            Back to services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to services
            </Link>
            <p className="metadata mt-10 mb-6 text-gold">Service</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65">
              {service.description}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openGetStarted}
                className="inline-flex h-14 items-center rounded-full bg-gold px-9 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                Get Started
              </button>
              <Link
                to="/services"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-gold/30 px-9 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                View all services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {detail && (
        <>
          {/* Q&A */}
          <section className="px-6 pb-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-6 md:grid-cols-2">
                {detail.faqs.map((f, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="h-full rounded-2xl border border-gold/30 bg-surface/30 p-10">
                      <h3 className="font-heading text-2xl font-medium tracking-tight">{f.q}</h3>
                      <p className="mt-4 text-base leading-relaxed text-foreground/65">{f.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Transition line */}
          <section className="px-6 pb-16 md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <p className="max-w-3xl font-heading text-3xl leading-tight tracking-tight text-foreground/80 sm:text-4xl">
                  {detail.transition}
                </p>
              </Reveal>
            </div>
          </section>

          {/* Case study */}
          <section className="px-6 pb-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <div className="rounded-2xl border border-gold/30 bg-surface/30 p-10 md:p-14">
                  <p className="metadata mb-4 text-gold">Case study</p>
                  <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
                    {detail.caseStudy.name}
                  </h2>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="metadata mb-2 text-foreground/50">Challenge</p>
                      <p className="text-base leading-relaxed text-foreground/80">
                        {detail.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="metadata mb-2 text-foreground/50">What we did</p>
                      <p className="text-base leading-relaxed text-foreground/80">
                        {detail.caseStudy.whatWeDid}
                      </p>
                    </div>
                    <div>
                      <p className="metadata mb-2 text-foreground/50">Results</p>
                      <p className="text-base leading-relaxed text-foreground/80">
                        {detail.caseStudy.results}
                      </p>
                    </div>
                    {detail.caseStudy.testimonial && (
                      <div>
                        <p className="metadata mb-2 text-foreground/50">Testimonial</p>
                        <blockquote className="text-base leading-relaxed text-foreground/80">
                          &ldquo;{detail.caseStudy.testimonial.quote}&rdquo;
                        </blockquote>
                        <p className="mt-2 text-sm text-foreground/50">
                          {detail.caseStudy.testimonial.author}
                        </p>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/our-work"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/80"
                  >
                    See the full case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

        </>
      )}
    </div>
  );
}