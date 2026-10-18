import { useEffect } from 'react';
import About from './components/About';
import AccessibilityBand from './components/AccessibilityBand';
import Contact from './components/Contact';
import FrontendProjects from './components/FrontendProjects';
import Hero from './components/Hero';
import Method from './components/Method';
import Projects from './components/Projects';
import SiteLayout from './components/SiteLayout';
import { LanguageProvider } from './contexts/LanguageProvider';
import { getCaseStudy } from './data/caseStudies';
import { useLanguage } from './hooks/useLanguage';
import AccessibilityPage from './pages/AccessibilityPage';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFoundPage from './pages/NotFoundPage';

const HomePage = () => (
  <>
    <Hero />
    <Projects />
    <Method />
    <AccessibilityBand />
    <FrontendProjects />
    <About />
    <Contact />
  </>
);

const PortfolioRoutes = () => {
  const { t } = useLanguage();
  const pathname = window.location.pathname;
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const caseStudy = getCaseStudy(pathname);

  let page;
  if (normalizedPath === '/') {
    page = <HomePage />;
  } else if (normalizedPath === '/accessibility') {
    page = <AccessibilityPage />;
  } else if (caseStudy) {
    page = <CaseStudyPage caseStudy={caseStudy} />;
  } else {
    page = <NotFoundPage />;
  }

  useEffect(() => {
    let title = t('portfolio.metadata.notFoundTitle');
    let description = t('portfolio.metadata.notFoundDescription');

    if (normalizedPath === '/') {
      title = t('portfolio2026.metadata.title');
      description = t('portfolio2026.metadata.description');
    } else if (normalizedPath === '/accessibility') {
      title = t('portfolio.accessibility.title');
      description = t('portfolio.metadata.accessibilityDescription');
    } else if (caseStudy) {
      title = `${t(caseStudy.titleKey)} — Imed Belouettar`;
      description = t(caseStudy.summaryKey);
    }

    document.title = title;
    let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.append(descriptionMeta);
    }
    descriptionMeta.content = description;
  }, [caseStudy, normalizedPath, t]);

  return (
    <SiteLayout isHome={normalizedPath === '/'}>
      {page}
    </SiteLayout>
  );
};

function App() {
  return (
    <LanguageProvider>
      <PortfolioRoutes />
    </LanguageProvider>
  );
}

export default App;
