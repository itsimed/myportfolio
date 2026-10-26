import { startTransition } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageSwitchProps {
  /** Couleur du texte et de la bordure, adaptée au fond de l'en-tête. */
  color: string;
}

/**
 * Bouton unique de changement de langue des pages issues des maquettes :
 * en français il affiche « EN », en anglais il affiche « FR ».
 * Le nom accessible commence par le texte visible (critère WCAG 2.5.3).
 */
const LanguageSwitch = ({ color }: LanguageSwitchProps) => {
  const { language, setLanguage } = useLanguage();
  const target = language === 'fr' ? 'en' : 'fr';
  const label = target.toUpperCase();
  const name = language === 'fr' ? 'EN, passer le site en anglais' : 'FR, switch the site to French';

  return (
    <button
      type="button"
      className="lang-switch"
      aria-label={name}
      onClick={() => startTransition(() => setLanguage(target))}
      style={{
        minWidth: '44px',
        minHeight: '44px',
        padding: '0 10px',
        border: '1.5px solid currentColor',
        borderRadius: '999px',
        background: 'transparent',
        color,
        font: 'inherit',
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default LanguageSwitch;
