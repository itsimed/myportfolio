import type { CaseStudy } from '../data/caseStudies';
import { useLanguage } from '../hooks/useLanguage';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  const { t } = useLanguage();

  return (
    <article aria-labelledby="case-study-title" className="px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <nav aria-label={t('portfolio2026.casePage.breadcrumb')} className="mb-10 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><a className="underline underline-offset-4 hover:text-primary" href="/#accueil">{t('portfolio2026.navigation.home')}</a></li>
            <li aria-hidden="true">/</li>
            <li><a className="underline underline-offset-4 hover:text-primary" href="/#cas">{t('portfolio2026.navigation.cases')}</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{t(caseStudy.titleKey)}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {caseStudy.projectNumber} · {t(caseStudy.categoryKey)} · {t(caseStudy.formatKey)}
          </p>
          <h1 id="case-study-title" className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
            {t(caseStudy.titleKey)}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">{t(caseStudy.summaryKey)}</p>
        </header>

        <div
          role="img"
          aria-label={t(caseStudy.visualKey)}
          className={`mt-12 flex min-h-[380px] items-center justify-center rounded-[20px] p-8 text-center text-lg font-semibold ${caseStudy.visualStyle}`}
        >
          {t(caseStudy.visualKey)}
        </div>

        <section aria-labelledby="case-study-overview" className="mt-12 grid gap-6 border-b border-border py-8 md:grid-cols-[0.7fr_1.3fr]">
          <h2 id="case-study-overview" className="font-display text-3xl font-bold">
            {t('portfolio2026.casePage.overview')}
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">{t(caseStudy.summaryKey)}</p>
            <ul aria-label={t('portfolio2026.cases.methodsLabel')} className="flex flex-wrap gap-2">
              {[0, 1, 2, 3].map((index) => (
                <li key={index} className="rounded-full bg-[#F0EFEA] px-3 py-1.5 text-sm font-medium">
                  {t(`${caseStudy.methodsKey}.${index}`)}
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-muted">{t(caseStudy.detailsKey)}</p>
          </div>
        </section>

        <a className="mt-10 inline-block font-semibold text-primary underline underline-offset-4" href="/#cas">
          ← {t('portfolio2026.casePage.back')}
        </a>
      </div>
    </article>
  );
};

export default CaseStudyPage;
