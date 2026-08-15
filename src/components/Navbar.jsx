import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { useGetStarted } from './GetStartedContext';

const links = [
{ label: 'Home', path: '/' },
{ label: 'Services', path: '/services' },
{ label: 'Our Work', path: '/our-work' },
{ label: 'About', path: '/about' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { open: openGetStarted } = useGetStarted();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ?
      'bg-background/80 backdrop-blur-xl border-b border-gold/20' :
      'bg-transparent border-b border-transparent'}`
      }>
      
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-20">
        <Link to="/" aria-label="Blindspot home" className="flex items-center">
          <Logo className="h-20" />
        </Link>
        




        

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) =>
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/'}
            className={({ isActive }) =>
            `relative text-sm font-medium tracking-wide transition-colors hover:text-gold ${
            isActive ? 'text-gold' : 'text-foreground/70'}`

            }>
            
              {l.label}
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={openGetStarted}
            className="hidden h-12 items-center rounded-full bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.35)] md:inline-flex">
            
            Get Started
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-foreground md:hidden">
            
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-gold/20 bg-background/95 backdrop-blur-xl md:hidden">
          
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) =>
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) =>
              `flex min-h-[48px] items-center text-lg font-medium ${
              isActive ? 'text-gold' : 'text-foreground/80'}`

              }>
              
                  {l.label}
                </NavLink>
            )}
              <button
              type="button"
              onClick={openGetStarted}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-primary-foreground">
              
                Get Started
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}