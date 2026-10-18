import { useLanguage } from '../hooks/useLanguage';

const AccessibilityBand = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="titre-a11y" className="bg-[#141414] text-background">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-10 px-6 py-20">
        <h2 id="titre-a11y" className="m-0 flex-[1_1_420px] font-display text-[42px] font-bold leading-tight">
          {t('portfolio2026.accessibility.heading')}
        </h2>
        <div className="flex flex-[1_1_420px] flex-col gap-4">
          <p className="m-0 text-lg leading-relaxed text-[#E2E1DC]">
            {t('portfolio2026.accessibility.description')}
          </p>
          <p className="m-0 text-lg leading-relaxed text-[#E2E1DC]">
            {t('portfolio2026.accessibility.statement')}
          </p>
          <a href="/accessibility/" className="text-[17px] font-semibold text-[#AFC0FF]">
            {t('portfolio2026.accessibility.link')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityBand;
