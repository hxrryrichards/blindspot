import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CaseStudyModal({ study, onClose }) {
  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-6 md:p-10"
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
            className="relative my-auto w-full max-w-2xl rounded-3xl border border-gold/30 bg-background p-10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] md:p-14"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-foreground/70 transition-colors hover:bg-gold/10"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="metadata mb-4 text-gold">Case study</p>
            <h3 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
              {study.name}
            </h3>

            <div className="mt-8 space-y-8">
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
            </div>

            <button
              onClick={onClose}
              className="mt-10 inline-flex h-12 items-center rounded-full border border-gold/30 px-7 text-sm font-semibold transition-colors hover:bg-gold/10"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}