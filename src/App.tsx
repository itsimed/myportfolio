import { Suspense, lazy, useEffect } from 'react';
import type { ComponentType } from 'react';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from './components/SiteLayout';
import { LanguageProvider } from './contexts/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';
import type { Language } from './translations';
import AccessibilityPage from './pages/AccessibilityPage';
import NotFoundPage from './pages/NotFoundPage';

/** Pages issues des maquettes : elles portent leur propre en-tête et pied de page.
 * Chaque page existe en français et en anglais ; la langue choisie décide de la version affichée. */
const designedPages: Partial<Record<string, Record<Language, ComponentType>>> = {
  '/': {
    fr: lazy(() => import('./pages/HomePage')),
    en: lazy(() => import('./pages/HomePage.en')),
  },
  '/projects/wassalni': {
    fr: lazy(() => import('./pages/WassalniCaseStudy')),
    en: lazy(() => import('./pages/WassalniCaseStudy.en')),
  },
  '/projects/sanou-va-bien': {
    fr: lazy(() => import('./pages/SanouCaseStudy')),
    en: lazy(() => import('./pages/SanouCaseStudy.en')),
  },
  '/projects/fds-institut': {
    fr: lazy(() => import('./pages/FdsCaseStudy')),
    en: lazy(() => import('./pages/FdsCaseStudy.en')),
  },
};

const PortfolioRoutes = () => {
  const { language, t } = useLanguage();
  const pathname = window.location.pathname;
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const DesignedPage = designedPages[normalizedPath]?.[language];

  useEffect(() => {
    if (DesignedPage) return;
    let title = t('portfolio.metadata.notFoundTitle');
    let description = t('portfolio.metadata.notFoundDescription');

    if (normalizedPath === '/accessibility') {
      title = t('portfolio.accessibility.title');
      description = t('portfolio.metadata.accessibilityDescription');
    }

    document.title = title;
    let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.append(descriptionMeta);
    }
    descriptionMeta.content = description;
  }, [DesignedPage, normalizedPath, t]);

  if (DesignedPage) {
    return (
      <>
        <Suspense fallback={null}><DesignedPage /></Suspense>
        <ScrollToTop />
      </>
    );
  }

  let page;
  if (normalizedPath === '/accessibility') {
    page = <AccessibilityPage />;
  } else {
    page = <NotFoundPage />;
  }

  return <SiteLayout isHome={false}>{page}</SiteLayout>;
};

function App() {
  return (
    <LanguageProvider>
      <PortfolioRoutes />
    </LanguageProvider>
  );
}

export default App;
