import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';

export default function ServiceQuoteModal({ pkg, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', business: '', notes: '' });

  const open = Boolean(pkg);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://blindspot.app.n8n.cloud/webhook/lead-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          businessName: form.business,
          package: pkg === 'bespoke' ? 'Bespoke' : pkg,
          notes: form.notes,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong, please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl border border-gold/30 bg-background p-10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/70 transition-colors hover:bg-gold/10"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <>
                <p className="metadata mb-4 text-gold">Get a quote</p>
                <h3 className="font-heading text-3xl leading-tight tracking-tight">
                  Let&rsquo;s build your quote.
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground/80">
                  {pkg === 'bespoke'
                    ? "You&rsquo;re after something bespoke."
                    : `You selected the ${pkg} package.`}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {pkg === 'bespoke'
                    ? "Since you already know you&rsquo;d like something tailored, tell us a bit about your business, and we&rsquo;ll be in touch to find some time to chat and build a package exactly around what you need."
                    : "Every business is different, so we don&rsquo;t use a one size fits all rate card. Tell us a bit about yours, and we&rsquo;ll be in touch to find some time to chat and get your quote exactly right."}
                </p>
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="h-12 w-full rounded-2xl border border-gold/30 bg-surface/40 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email address"
                    className="h-12 w-full rounded-2xl border border-gold/30 bg-surface/40 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                  />
                  <input
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Business name"
                    className="h-12 w-full rounded-2xl border border-gold/30 bg-surface/40 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                  />
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Anything specific you’d like us to know? (optional)"
                    rows={3}
                    className="w-full rounded-2xl border border-gold/30 bg-surface/40 p-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                  />
                  {error && (
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.4)] disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Begin'} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-3xl leading-tight tracking-tight">
                  Thanks, your request is in.
                </h3>
                <p className="mt-3 text-sm text-foreground/60">
                  We’ll be in touch shortly, typically within an hour, to begin our journey together.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 inline-flex h-12 items-center rounded-full border border-gold/30 px-7 text-sm font-semibold transition-colors hover:bg-gold/10"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}