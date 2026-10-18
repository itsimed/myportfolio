import { useLanguage } from '../hooks/useLanguage';

const NotFoundPage = () => {
  const { language } = useLanguage();

  return (
    <section aria-labelledby="not-found-title" className="px-5 py-24 text-center sm:px-8 sm:py-36">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 id="not-found-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {language === 'fr' ? 'Page introuvable' : 'Page not found'}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
        {language === 'fr' ? 'Cette adresse ne correspond à aucune page du portfolio.' : 'This address does not match a page in the portfolio.'}
      </p>
      <a className="mt-8 inline-flex min-h-12 items-center rounded-sm bg-primary px-6 py-3 font-semibold text-surface hover:bg-foreground" href="/">
        {language === 'fr' ? 'Retour à l’accueil' : 'Back to home'}
      </a>
    </section>
  );
};

export default NotFoundPage;
