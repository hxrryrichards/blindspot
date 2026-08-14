import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getConsent, setConsent, initAnalytics } from '@/lib/analytics';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
    if (consent === 'accepted') {
      initAnalytics();
    }
  }, []);

  const accept = () => {
    setConsent('accepted');
    initAnalytics();
    setVisible(false);
  };

  const decline = () => {
    setConsent('declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="mx-auto max-w-[1200px] rounded-2xl border border-gold/30 bg-background/95 p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md md:p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
                We use cookies to understand how visitors use our site. No personal data is sold or
                shared. See our{' '}
                <Link
                  to="/cookies.html"
                  className="font-semibold text-gold underline-offset-4 hover:underline"
                >
                  Cookies Policy
                </Link>{' '}
                for details.
              </p>
              <div className="flex shrink-0 gap-3">
                <button
                  onClick={decline}
                  className="inline-flex h-11 items-center rounded-full border border-gold/30 px-6 text-sm font-semibold transition-colors hover:bg-gold/10"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="inline-flex h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}