import { Link } from 'react-router-dom';

const services = ['SEO', 'Social Media Marketing', 'Content Creation & Video Editing', 'User Generated Content'];

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-semibold tracking-tight">Blindspot</span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gold" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/60">
              A specialist marketing agency for local service businesses. We build automated
              content and SEO systems that compound growth over time.
            </p>
          </div>

          <div>
            <p className="metadata text-foreground/40">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-foreground/70 transition-colors hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="text-foreground/70 transition-colors hover:text-gold">Services</Link></li>
              <li><Link to="/our-work" className="text-foreground/70 transition-colors hover:text-gold">Our Work</Link></li>
              <li><Link to="/about" className="text-foreground/70 transition-colors hover:text-gold">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="metadata text-foreground/40">Services</p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-foreground/70 transition-colors hover:text-gold">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gold/20 pt-8 text-xs text-foreground/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blindspot. All rights reserved.</p>
          <p className="metadata text-foreground/40">Every business has a blindspot. We fix yours.</p>
        </div>
      </div>
    </footer>
  );
}