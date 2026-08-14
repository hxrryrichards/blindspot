import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="metadata mb-6 text-gold">Services</p>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Choose the system that fits your stage.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/65">
            Three tiers, one philosophy. Each builds on the last — find the gap, build the
            presence, and compound the growth.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20">
            <Link
              to="/services"
              className="inline-flex h-14 items-center rounded-full bg-gold px-9 text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}