const BASE = 'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/';

const LOGOS = [
  { name: 'The Original Curryland', file: 'fe5287403_Untitleddesign4.PNG' },
  { name: 'Leadership Blueprint Development', file: '3ca32c9dd_Untitleddesign5.PNG' },
  { name: 'Furniture for Business', file: '57f55e737_Untitleddesign6.PNG' },
  { name: 'Crystal Ritual', file: 'fdb1f1402_Untitleddesign7.PNG' },
  { name: 'Ring Style Finder', file: '1f8ef3e3d_Untitleddesign8.PNG' },
  { name: 'codezero', file: 'cceb9d867_Untitleddesign9.PNG' },
  { name: 'BabyLoveGrowth.ai', file: '511672846_Untitleddesign10.PNG' },
  { name: 'Metamind with Eben Pagan', file: '23bb894d3_Untitleddesign11.PNG' },
  { name: 'E.V.A Design & Build Specialist', file: '5d298cc51_Untitleddesign12.PNG' },
  { name: 'Sussex Fire & Security', file: '4ca8e8859_Untitleddesign.PNG' },
];

function LogoItem({ name, file }) {
  return (
    <div className="flex shrink-0 items-center px-6">
      <div className="flex items-center justify-center rounded-2xl bg-white p-4 shadow-sm">
        <img
          src={`${BASE}${file}`}
          alt={name}
          loading="lazy"
          className="h-20 w-auto max-w-[260px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
        />
      </div>
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
          {half.map((l, i) => (
            <LogoItem key={`a-${i}`} {...l} />
          ))}
          {half.map((l, i) => (
            <LogoItem key={`b-${i}`} {...l} />
          ))}
        </div>
      </div>
    </section>
  );
}