// Placeholder wordmarks — replace these with real brand logos (image URLs or SVGs) when ready.
// Each entry renders as an elegant grayscale wordmark that brightens to gold on hover.
const LOGOS = [
  'Northgate',
  'BrightSmile',
  'Crestline',
  'Lumen',
  'Atlas',
  'Veridian',
  'Meridian',
  'Solace',
];

function LogoItem({ name }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-10 text-foreground/35 transition-colors duration-300 hover:text-gold">
      <span className="h-2 w-2 rounded-full border border-current" />
      <span className="font-heading text-2xl font-medium tracking-tight md:text-3xl">{name}</span>
    </div>
  );
}

export default function LogoCarousel() {
  // Two identical halves so the -50% marquee loops seamlessly.
  const half = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-gold/20 bg-surface/30 py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-[1400px] px-6 md:px-12 lg:px-20">
        <p className="metadata text-center text-foreground/40">Brands we've scaled</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div
          className="marquee-track flex w-max shrink-0 items-center"
          style={{ animationDuration: '52s' }}
        >
          {half.map((name, i) => (
            <LogoItem key={`a-${i}`} name={name} />
          ))}
          {half.map((name, i) => (
            <LogoItem key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}