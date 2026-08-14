import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useGetStarted } from '@/components/GetStartedContext';
import { services } from '@/data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { open: openGetStarted } = useGetStarted();
  const service = services.find((s) => s.slug === slug);

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
    <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
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
  );
}