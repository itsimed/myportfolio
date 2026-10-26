import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitch from './LanguageSwitch';
import Signature from './Signature';

const labels = {
  fr: {
    nav: 'Navigation principale',
    menu: 'Menu',
    links: [
      ['#travaux', 'Projets'],
      ['#methode', 'Méthode'],
      ['#parcours', 'Parcours'],
      ['#apropos', 'À propos'],
    ],
    contact: 'Me contacter',
  },
  en: {
    nav: 'Main navigation',
    menu: 'Menu',
    links: [
      ['#travaux', 'Projects'],
      ['#methode', 'Approach'],
      ['#parcours', 'Background'],
      ['#apropos', 'About'],
    ],
    contact: 'Contact me',
  },
} as const;

/**
 * En-tête de la page d'accueil.
 * Au-delà de 900 px : liens en ligne, comme sur la maquette.
 * En dessous : logo, langue et bouton « Menu » sur une seule ligne ;
 * le menu s'ouvre en panneau (Échap le ferme et rend le focus au bouton).
 */
const HomeNav = () => {
  const { language } = useLanguage();
  const text = labels[language];
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 901px)') : undefined;
    const onResize = () => {
      if (desktop?.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    desktop?.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop?.removeEventListener('change', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="home-header" style={{ borderBottom: '1px solid #D9D7D0', background: '#F4F3EF' }}>
      <nav
        aria-label={text.nav}
        className="home-nav"
        style={{ maxWidth: '1240px', margin: '0 auto', padding: '18px 24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <a
          href="#accueil"
          className="home-nav__brand"
          style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: '#141414', textDecoration: 'none' }}
        >
          <Signature height={38} swash />
          <span className="sr-only">Imed Belouettar</span>
        </a>

        <div className="home-nav__mobile-actions">
          <LanguageSwitch color="#141414" />
          <button
            ref={buttonRef}
            type="button"
            className="home-nav__toggle"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="home-nav__icon" data-open={open} />
            <span className="home-nav__toggle-text">{text.menu}</span>
          </button>
        </div>

        <ul
          id="menu-principal"
          className="home-nav__list"
          data-open={open}
          style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 26px', fontSize: '16px', fontWeight: 500 }}
        >
          {text.links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close} className="home-nav__link" style={{ color: '#141414' }}>
                {label}
              </a>
            </li>
          ))}
          <li className="home-nav__lang">
            <LanguageSwitch color="#141414" />
          </li>
          <li>
            <a
              href="#contact"
              onClick={close}
              className="home-nav__cta"
              style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 18px', borderRadius: '999px', background: '#141414', color: '#F4F3EF', fontWeight: 600, textDecoration: 'none' }}
            >
              {text.contact}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeNav;
