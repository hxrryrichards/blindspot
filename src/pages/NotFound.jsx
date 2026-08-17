import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useGetStarted } from '@/components/GetStartedContext';

const ease = [0.22, 1, 0.36, 1];

export default function NotFound() {
  const { open: openGetStarted } = useGetStarted();

  return (
    <section className="relative flex min-h-[70vh] items-center px-6 pt-32 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="metadata mb-6 text-gold"
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Looks like this page is your blindspot.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/65"
        >
          We couldn't find what you were looking for. It happens to the best of us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex h-14 items-center rounded-full bg-gold px-9 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Back to Home
          </Link>
          <button
            type="button"
            onClick={openGetStarted}
            className="inline-flex h-14 items-center gap-2 rounded-full border border-gold/30 px-9 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}