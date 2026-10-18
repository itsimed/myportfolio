import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const navigationItems = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
] as const;

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const renderLinks = () => navigationItems.map(({ key, href }) => (
    <a
      key={href}
      href={href}
      onClick={closeMenu}
      className="block rounded-sm px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary"
    >
      {t(key)}
    </a>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#hero" className="flex shrink-0 items-center gap-3 rounded-sm" onClick={closeMenu}>
          <img src="/logo.webp" alt="" className="h-9 w-9 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Imed Eddine Belouettar
          </span>
        </a>

        <nav aria-label={language === 'fr' ? 'Navigation principale' : 'Primary navigation'} className="hidden items-center gap-1 lg:flex">
          {renderLinks()}
        </nav>

        <div className="flex items-center gap-2">
          <div role="group" className="flex items-center gap-1" aria-label={language === 'fr' ? 'Langue' : 'Language'}>
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              aria-pressed={language === 'fr'}
              className="rounded-sm px-2 py-2 text-sm font-semibold text-muted hover:text-foreground focus-visible:outline"
            >
              FR
            </button>
            <span aria-hidden="true" className="text-border">/</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className="rounded-sm px-2 py-2 text-sm font-semibold text-muted hover:text-foreground focus-visible:outline"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm border border-control-border lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen
              ? (language === 'fr' ? 'Fermer le menu' : 'Close menu')
              : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={language === 'fr' ? 'Navigation principale' : 'Primary navigation'}
        hidden={!menuOpen}
        className="border-t border-border bg-background px-5 py-3 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col items-stretch">
          {renderLinks().map((link) => <li key={link.key}>{link}</li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
