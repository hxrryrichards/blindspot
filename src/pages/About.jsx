import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section className="px-6 pb-32 pt-40 md:px-12 md:pt-48 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="metadata mb-6 text-gold">About</p>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            We exist to illuminate what others miss.
          </h1>
        </Reveal>
      </div>
    </section>
  );
}