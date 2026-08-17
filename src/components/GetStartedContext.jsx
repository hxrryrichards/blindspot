import { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';

const GetStartedContext = createContext({ open: () => {} });

export function GetStartedProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => {
    setSubmitted(false);
    setError('');
    setEmail('');
    setOpen(true);
  };
  const close = () => setOpen(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://blindspot.app.n8n.cloud/webhook/get-started', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    <GetStartedContext.Provider value={{ open: openModal }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Get started"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-3xl border border-gold/30 bg-background p-10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/70 transition-colors hover:bg-gold/10"
              >
                <X className="h-4 w-4" />
              </button>

              {!submitted ? (
                <>
                  <p className="metadata mb-4 text-gold">Get started</p>
                  <h3 className="font-heading text-3xl leading-tight tracking-tight">
                    Let&rsquo;s fix your blindspot.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    Leave your email. We'll show you what your blindspot might actually be, and what closing it looks like.
                  </p>
                  <form onSubmit={submit} className="mt-8 space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@business.com"
                      className="h-14 w-full rounded-2xl border border-gold/30 bg-surface/40 px-5 text-base text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                    />
                    {error && (
                      <p className="text-sm font-medium text-destructive">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.4)] disabled:opacity-60"
                    >
                      {submitting ? 'Sending…' : 'Submit'} <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-3xl leading-tight tracking-tight">
                    Thanks, we'll be in touch.
                  </h3>
                  <p className="mt-3 text-sm text-foreground/60">
                    Keep an eye on your inbox.
                  </p>
                  <button
                    onClick={close}
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
    </GetStartedContext.Provider>
  );
}

export const useGetStarted = () => useContext(GetStartedContext);