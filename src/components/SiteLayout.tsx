import type { ReactNode } from 'react';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import { useLanguage } from '../hooks/useLanguage';

interface SiteLayoutProps {
  children: ReactNode;
  isHome: boolean;
}

const SiteLayout = ({ children, isHome }: SiteLayoutProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        {t('portfolio.navigation.skipToContent')}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="border-t border-border px-5 py-8 text-sm text-muted sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>{t('portfolio2026.footer.copyright')}</p>
          <nav aria-label={t('portfolio.navigation.footer')}>
            <a className="underline underline-offset-4 hover:text-primary" href="/accessibility/">
              {t('portfolio2026.footer.accessibility')}
            </a>
          </nav>
        </div>
      </footer>
      {isHome && <ScrollToTop />}
    </div>
  );
};

export default SiteLayout;
