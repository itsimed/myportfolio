import { caseStudies } from '../data/caseStudies';
import { useLanguage } from '../hooks/useLanguage';

const CaseStudies = () => {
  const { t } = useLanguage();

  return (
    <section id="cas" aria-labelledby="titre-cas" className="border-y border-border bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="titre-cas" className="font-display text-5xl font-bold tracking-tight">
            {t('portfolio2026.cases.heading')}
          </h2>
          <p className="max-w-[460px] text-[17px] leading-relaxed text-[#3A3A3A]">
            {t('portfolio2026.cases.introduction')}
          </p>
        </div>

        {caseStudies.map((study, index) => {
          const text = (
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
              <p className="m-0 text-sm font-semibold uppercase tracking-[0.06em] text-[#5A5A5A]">
                {study.projectNumber} · {t(study.categoryKey)} · {t(study.formatKey)}
              </p>
              <h3 className="m-0 font-display text-[34px] font-bold leading-[1.15]">
                {t(study.titleKey)}
              </h3>
              <p className="m-0 text-lg leading-relaxed text-[#3A3A3A]">
                {t(study.summaryKey)}
              </p>
              <ul aria-label={t('portfolio2026.cases.methodsLabel')} className="m-0 flex list-none flex-wrap gap-2 p-0">
                {Array.from({ length: 4 }, (_, methodIndex) => (
                  <li key={methodIndex} className="rounded-full bg-[#F0EFEA] px-3 py-1.5 text-sm font-medium">
                    {t(`${study.methodsKey}.${methodIndex}`)}
                  </li>
                ))}
              </ul>
              <p className="m-0 text-[15px] text-[#5A5A5A]">{t(study.detailsKey)}</p>
              <a href={study.path} className="text-[17px] font-semibold">
                {t('portfolio2026.cases.caseLink')} {t(study.titleKey)}
              </a>
            </div>
          );
          const visual = (
            <div
              role="img"
              aria-label={t(study.visualKey)}
              className={`flex min-h-[380px] flex-[1_1_480px] items-center justify-center rounded-[20px] p-6 text-center text-base font-semibold ${study.visualStyle}`}
            >
              {t(study.visualKey)}
            </div>
          );

          return (
            <article
              key={study.id}
              className={`flex items-center gap-10 ${index === 1 ? 'flex-wrap-reverse' : 'flex-wrap'}`}
            >
              {index === 1 ? <>{text}{visual}</> : <>{visual}{text}</>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
