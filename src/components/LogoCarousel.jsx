const BASE = 'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/';

const LOGOS = [
  { name: 'Sussex Fire & Security', file: '7c171dcfd_Untitleddesign3.PNG' },
  { name: 'The Original Curryland', file: 'f194381d9_Untitleddesign4.PNG' },
  { name: 'Leadership Blueprint Development', file: '0c44a8c00_Untitleddesign2.PNG' },
  { name: 'Furniture for Business', file: '29abea904_Untitleddesign6.PNG' },
  { name: 'Crystal Ritual', file: '6c915659d_Untitleddesign7.PNG' },
  { name: 'Ring Style Finder', file: '49f5bb173_Untitleddesign8.PNG' },
  { name: 'codezero', file: '5c68d5e41_Untitleddesign9.PNG' },
  { name: 'BabyLoveGrowth.ai', file: 'b329e0883_Untitleddesign10.PNG' },
  { name: 'Metamind with Eben Pagan', file: '96f9d5d70_Untitleddesign11.PNG' },
  { name: 'E.V.A Design & Build Specialist', file: 'e97aab226_Untitleddesign12.PNG' },
];

function LogoItem({ name, file }) {
  return (
    <div className="flex shrink-0 items-center px-12">
      <img
        src={`${BASE}${file}`}
        alt={name}
        loading="lazy"
        className="h-20 w-auto max-w-[300px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
      />
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