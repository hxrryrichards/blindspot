import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CaseStudyModal({ study, onClose }) {
  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={study.name}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[calc(100dvh-3rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-gold/30 bg-background shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] md:max-h-[calc(100dvh-4rem)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-gold/15 px-8 pb-6 pt-8 md:px-12">
              <div>
                <p className="metadata mb-4 text-gold">Case study</p>
                <h3 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
                  {study.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-foreground/70 transition-colors hover:bg-gold/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-8 py-8 md:px-12 md:py-10">
              <div className="space-y-8">
                <div>
                  <p className="metadata mb-2 text-foreground/50">Challenge</p>
                  <p className="text-base leading-relaxed text-foreground/80">{study.challenge}</p>
                </div>
                <div>
                  <p className="metadata mb-2 text-foreground/50">What we did</p>
                  <p className="text-base leading-relaxed text-foreground/80">{study.whatWeDid}</p>
                </div>
                <div>
                  <p className="metadata mb-2 text-foreground/50">Results</p>
                  <p className="text-base leading-relaxed text-foreground/80">{study.results}</p>
                </div>
                {study.testimonial && (
                  <div>
                    <p className="metadata mb-2 text-foreground/50">Testimonial</p>
                    <blockquote className="text-base leading-relaxed text-foreground/80">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="mt-2 text-sm text-foreground/50">{study.testimonial.author}</p>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="mt-10 inline-flex h-12 items-center rounded-full border border-gold/30 px-7 text-sm font-semibold transition-colors hover:bg-gold/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}