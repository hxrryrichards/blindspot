import Reveal from '@/components/Reveal';

export default function LegalPage({ title, lastUpdated, intro, sections }) {
  return (
    <div className="overflow-hidden">
      <section className="px-6 pb-16 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">LEGAL</p>
            <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-sm text-foreground/50">Last updated: {lastUpdated}</p>
            {intro && (
              <p className="mt-8 text-lg leading-relaxed text-foreground/70">{intro}</p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal delay={0.05}>
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-heading text-2xl font-medium tracking-tight">
                    {s.heading}
                  </h2>
                  <div className="mt-3 text-base leading-relaxed text-foreground/65">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}