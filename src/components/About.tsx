import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const focusAreas = [
    'about.skills.uiux',
    'about.skills.frontend',
    'about.skills.accessibility',
    'about.skills.userResearch',
    'about.skills.projectManagement',
    'about.skills.inclusiveDesign',
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t('portfolio.about.eyebrow')}
          </p>
          <h2 id="about-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t('about.title')}
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>{t('about.description1')}</p>
          <p>{t('about.description2')}</p>
          <p>{t('about.description3')}</p>
          <ul className="flex flex-wrap gap-2 pt-3" aria-label={t('portfolio.about.focusLabel')}>
            {focusAreas.map((area) => (
              <li key={area} className="rounded-sm border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground">
                {t(area)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
