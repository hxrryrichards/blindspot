import Reveal from '@/components/Reveal';
import { useGetStarted } from '@/components/GetStartedContext';

const founderParagraphs = [
  `Most agencies will take your money, manage your expectations downward, and keep you on a retainer long after it stopped making sense. That's the industry standard. It's not ours.`,
  `Blindspot was built on a different belief entirely. If we don't deliver for you, you shouldn't be working with us. Full stop.`,
  `That's not a marketing line. It's how we operate. If you're not seeing results, you'll leave, and you should. We'd rather lose a client than keep one we're not genuinely moving the needle for. That's the only way this works long term, for you and for us.`,
  `What you get when you work with Blindspot is simple. Clear communication, real effort, and someone who treats your business like it's their own. No account managers to chase. No hiding behind reports. Just honest work and honest results.`,
  `We've maintained 100% client retention since we launched. Not because clients are locked in. Because we haven't given them a reason to leave.`,
];

const whyExist = [
  `Most agencies take your budget and manage your expectations downward. Blindspot was built on the opposite idea. That real focus, the right systems, and genuine care can outperform agencies ten times the size.`,
  `We move fast and work smart, but we never outsource the thinking. Strategy, relationships, and accountability stay with us.`,
  `We take on a limited number of clients by design. Every business we work with deserves our full attention, whatever industry they're in.`,
];

const values = [
  { title: 'Honest', body: `We tell you what we see, even when it's not what you want to hear.` },
  { title: 'Invested', body: `Your growth is our reputation. We treat it that way.` },
  { title: 'Sharp', body: `We don't cut corners. We find the right angle.` },
];

export default function About() {
  const { open: openGetStarted } = useGetStarted();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">A note from the founder.</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Built on a different belief entirely.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col gap-7">
              {founderParagraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/75">{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <p className="font-heading text-xl font-semibold text-foreground">Harry Richards</p>
              <p className="mt-1 text-sm text-foreground/50">Founder, Blindspot</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-y border-gold/20 bg-surface/40 px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">Why we exist</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Outperforming agencies ten times the size.
            </h2>
          </Reveal>
          <div className="mt-12 flex max-w-3xl flex-col gap-7">
            {whyExist.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-foreground/75">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="metadata mb-6 text-gold">What we stand for</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Three things we won't compromise on.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-gold/30 bg-surface/30 p-10">
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-gold">{v.title}</h3>
                  <p className="text-base leading-relaxed text-foreground/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 pb-32 pt-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="rounded-2xl border border-gold/30 p-12 text-center md:p-24">
              <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ready to fix your blindspot?
              </h2>
              <button
                type="button"
                onClick={openGetStarted}
                className="mt-12 inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                Book a Call
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}