import { useLanguage } from '../contexts/LanguageContext';

const AccessibilityPage = () => {
  const { t } = useLanguage();

  return (
    <article aria-labelledby="accessibility-title" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {t('portfolio.accessibility.eyebrow')}
        </p>
        <h1 id="accessibility-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {t('portfolio.accessibility.title')}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{t('portfolio.accessibility.intro')}</p>
        <div className="mt-10 space-y-8">
          <section aria-labelledby="accessibility-approach">
            <h2 id="accessibility-approach" className="text-2xl font-semibold">{t('portfolio.accessibility.approachTitle')}</h2>
            <p className="mt-3 leading-relaxed text-muted">{t('portfolio.accessibility.approach')}</p>
          </section>
          <section aria-labelledby="accessibility-features">
            <h2 id="accessibility-features" className="text-2xl font-semibold">{t('portfolio.accessibility.featuresTitle')}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted">
              {[0, 1, 2, 3].map((index) => (
                <li key={index}>{t(`portfolio.accessibility.features.${index}`)}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="accessibility-contact">
            <h2 id="accessibility-contact" className="text-2xl font-semibold">{t('portfolio.accessibility.contactTitle')}</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {t('portfolio.accessibility.contact')}
              {' '}
              <a className="font-semibold text-primary underline underline-offset-4" href="mailto:ie.belouettar@gmail.com">ie.belouettar@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default AccessibilityPage;
