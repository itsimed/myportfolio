import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';

  const navigationItems = [
    { label: t('portfolio2026.navigation.cases'), href: '#cas' },
    { label: t('portfolio2026.navigation.method'), href: '#methode' },
    { label: t('portfolio2026.navigation.about'), href: '#apropos' },
    { label: t('portfolio2026.navigation.contact'), href: '#contact' },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const homeHref = isHomePage ? '#accueil' : '/#accueil';

  return (
    <header className="border-b border-border bg-background">
      <nav aria-label={t('portfolio.navigation.primary')} className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a
          href={homeHref}
          onClick={closeMenu}
          className="font-display text-xl font-extrabold text-foreground no-underline"
        >
          Imed Belouettar
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md border border-control-border lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen
            ? (language === 'fr' ? 'Fermer le menu' : 'Close menu')
            : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>

        <div
          id="primary-navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-2 text-base font-medium lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-x-7`}
        >
          {navigationItems.map(({ label, href }, index) => (
            <a
              key={href}
              href={isHomePage ? href : `/${href}`}
              onClick={closeMenu}
              aria-current={isHomePage && index === 0 ? 'page' : undefined}
              className="py-2 text-foreground no-underline hover:text-primary"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            aria-label={`${t('portfolio2026.navigation.language')}: ${language === 'fr' ? 'English' : 'Français'}`}
            className="self-start py-2 text-foreground underline decoration-border underline-offset-4 hover:text-primary lg:self-auto"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
