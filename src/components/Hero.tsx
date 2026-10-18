import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="border-b border-border px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t('hero.subtitle')}
          </p>
          <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            {t('hero.title1')}
            <span className="block text-primary">{t('hero.title2')}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t('hero.description')}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3 font-semibold text-surface transition-colors hover:bg-foreground"
            >
              {t('hero.projectsButton')}
            </a>
            <a
              href="/CV%20octobre.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-control-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {t('hero.downloadCV')}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
            <li><a className="underline decoration-border underline-offset-4 hover:text-primary" href="https://github.com/itsimed" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="underline decoration-border underline-offset-4 hover:text-primary" href="https://www.linkedin.com/in/ie-belouettar/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="underline decoration-border underline-offset-4 hover:text-primary" href="https://t.me/itsimedd" target="_blank" rel="noreferrer">Telegram</a></li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-border">
            <img
              src="/Belouettar%20Imed%20Eddine.webp"
              alt={t('portfolio.hero.portraitAlt')}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <p className="mt-3 text-sm text-muted">{t('portfolio.hero.location')}</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-border pt-5 text-sm font-medium text-muted sm:mt-20">
        {t('portfolio.hero.scrollHint')}
      </div>
    </section>
  );
};

export default Hero;
