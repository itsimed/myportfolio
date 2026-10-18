import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const facts = [
    ['specialtyLabel', 'specialty'],
    ['toolsLabel', 'tools'],
    ['languagesLabel', 'languages'],
    ['locationLabel', 'location'],
  ] as const;

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-[1200px] flex-wrap items-end gap-12 px-6 pb-20 pt-24 sm:pb-20 sm:pt-24"
    >
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
        <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-foreground px-3.5 py-2 text-[15px] font-semibold">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#1A7F4B]" />
          {t('portfolio2026.hero.availability')}
        </p>
        <h1 id="hero-title" className="font-display text-[clamp(44px,6.5vw,88px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
          {t('portfolio2026.hero.heading')}{' '}
          <span className="text-primary">{t('portfolio2026.hero.headingEmphasis')}</span>
        </h1>
        <p className="max-w-[640px] text-[21px] leading-[1.55] text-[#3A3A3A]">
          {t('portfolio2026.hero.description')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#cas"
            className="inline-flex min-h-[52px] items-center rounded-full bg-primary px-[26px] text-[17px] font-semibold text-white no-underline hover:bg-[#132A8C]"
          >
            {t('portfolio2026.hero.casesCta')}
          </a>
          <a
            href="/CV%20octobre.pdf"
            download
            className="inline-flex min-h-[52px] items-center rounded-full border-2 border-foreground px-[26px] text-[17px] font-semibold text-foreground no-underline hover:bg-white"
          >
            {t('portfolio2026.hero.cvCta')}
          </a>
        </div>
      </div>
      <dl className="grid flex-[1_1_280px] grid-cols-1 gap-5 border-l border-border pl-7">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt className="text-sm text-[#5A5A5A]">{t(`portfolio2026.hero.${label}`)}</dt>
            <dd className="mt-1 text-[17px] font-semibold">{t(`portfolio2026.hero.${value}`)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
