import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-foreground transition-colors hover:bg-gold/10"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'} absolute`} />
      <Moon className={`h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'} absolute`} />
    </button>
  );
}