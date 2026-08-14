import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Linkedin } from 'lucide-react';
import { services } from '@/data/services';

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
              Something's holding your business growth back. A gap in strategy, visibility, or
              execution you can't quite see from the inside. Blindspot finds it and fixes it, with
              results you can actually check, not just promises.
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
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-foreground/70 transition-colors hover:text-gold">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-gold/20 pt-8 text-xs text-foreground/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blindspot. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy.html" className="transition-colors hover:text-gold">Privacy</Link>
            <Link to="/terms.html" className="transition-colors hover:text-gold">Terms</Link>
            <Link to="/cookies.html" className="transition-colors hover:text-gold">Cookies</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/60 transition-colors hover:border-gold hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/60 transition-colors hover:border-gold hover:text-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/60 transition-colors hover:border-gold hover:text-gold">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/60 transition-colors hover:border-gold hover:text-gold">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}