import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const HomePage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        {language === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted">
        <p>
          © {new Date().getFullYear()} Imed Eddine Belouettar.
          {' '}
          {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
        </p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}

export default App;
