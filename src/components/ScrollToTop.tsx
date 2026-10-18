import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 300);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-primary text-surface shadow-lg transition-colors hover:bg-foreground sm:bottom-8 sm:right-8 sm:size-14"
      aria-label={t('portfolio.navigation.scrollToTop')}
    >
      <HiArrowUp className="size-6 sm:size-7" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
