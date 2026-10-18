import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SiteLayout from './components/SiteLayout';
import Skills from './components/Skills';
import { LanguageProvider } from './contexts/LanguageContext';
import { getCaseStudy } from './data/caseStudies';
import AccessibilityPage from './pages/AccessibilityPage';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFoundPage from './pages/NotFoundPage';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const PortfolioRoutes = () => {
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
