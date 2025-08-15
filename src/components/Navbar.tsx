import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Small offset
      
      let currentSection = 'hero';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sections[i];
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
        <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isMobileMenuOpen ? -100 : 0,
          margin: isScrolled ? (isDesktop ? '0.5rem' : '0.5rem') : '0',
          borderRadius: isScrolled ? (isDesktop ? '0.75rem' : '0.75rem') : '0',
          left: isScrolled ? (isDesktop ? '0.5rem' : '1rem') : '0',
          right: isScrolled ? (isDesktop ? '0.5rem' : '1rem') : '0',
          scale: isScrolled ? (isDesktop ? 0.98 : 1) : 1,
          width: isScrolled ? (isDesktop ? 'calc(100% - 1rem)' : 'calc(100% - 2rem)') : '100%',
          boxShadow: isScrolled 
            ? '0 25px 50px -12px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            : 'none',
        }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? 'bg-background/95 border-b border-foreground/10'
            : 'bg-transparent'
        }`}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer z-10"
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src="/logo.webp" 
              alt="Portfolio Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transform-gpu will-change-transform"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.div>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm xl:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-foreground hover:text-primary hover:bg-foreground/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/5 rounded-lg border border-primary/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right side - Language Selector and Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector - Desktop */}
            <div className="hidden md:flex flex-col items-center space-y-1 mr-2 lg:mr-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                  language === 'en'
                    ? 'text-foreground underline'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                En
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                  language === 'fr'
                    ? 'text-foreground underline'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Fr
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300 p-1.5 sm:p-2"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu - Outside navbar to be independent of scroll */}
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        height: isMobileMenuOpen ? '100vh' : 0,
      }}
      className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-background/98 backdrop-blur-xl z-40 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center h-full py-20 space-y-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-6 text-foreground hover:text-primary transition-colors duration-300 p-2"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {navItems.map((item) => {
          return (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold px-8 py-4 rounded-xl transition-all duration-300 text-foreground hover:text-primary hover:bg-foreground/5"
            >
              {item.name}
            </motion.button>
          );
        })}
        
        {/* Language Selector - Mobile */}
        <div className="mt-8 pt-8 border-t border-foreground/20">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-sm text-foreground/70">Language</span>
            <div className="flex space-x-6">
              <button
                onClick={() => setLanguage('en')}
                className={`text-lg font-bold transition-colors duration-300 px-4 py-2 rounded-lg ${
                  language === 'en'
                    ? 'text-primary bg-primary/10 border-2 border-primary/30'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                En
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-lg font-bold transition-colors duration-300 px-4 py-2 rounded-lg ${
                  language === 'fr'
                    ? 'text-primary bg-primary/10 border-2 border-primary/30'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                Fr
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Navbar;