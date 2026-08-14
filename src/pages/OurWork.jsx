import Reveal from '@/components/Reveal';

export default function OurWork() {
  return (
    <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="metadata mb-6 text-gold">Our Work</p>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Results, in their own light.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/65">
            Case studies from the local service businesses we’ve helped find — and fix — their
            blindspot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}