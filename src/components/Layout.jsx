import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import CookieConsent from './CookieConsent';
import { useSeo } from '@/hooks/useSeo';
import { seoData } from '@/data/seo';

export default function Layout() {
  const location = useLocation();
  const seo = seoData[location.pathname] || seoData['/'];
  useSeo(seo);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}