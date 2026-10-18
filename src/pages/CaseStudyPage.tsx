import { portfolioProjects } from '../data/projects';
import type { CaseStudy } from '../data/caseStudies';
import { useLanguage } from '../hooks/useLanguage';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  const { t } = useLanguage();
  const project = portfolioProjects.find(({ id }) => id === caseStudy.id);

  if (!project) {
    throw new Error(`Missing portfolio project for case study: ${caseStudy.id}`);
  }

  const facts = [
    { label: t('portfolio.caseStudy.role'), value: caseStudy.role },
    { label: t('portfolio.caseStudy.duration'), value: caseStudy.duration },
    { label: t('portfolio.caseStudy.team'), value: caseStudy.team },
    { label: t('portfolio.caseStudy.methods'), value: caseStudy.methods },
  ];

  return (
    <article aria-labelledby="case-study-title" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <nav aria-label={t('portfolio.caseStudy.breadcrumbLabel')} className="mb-10 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><a className="underline underline-offset-4 hover:text-primary" href="/">{t('nav.home')}</a></li>
            <li aria-hidden="true">/</li>
            <li><a className="underline underline-offset-4 hover:text-primary" href="/#projects">{t('nav.projects')}</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{t(`projects.projects.${caseStudy.id}.title`)}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t('portfolio.caseStudy.eyebrow')}
          </p>
          <h1 id="case-study-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {t(`projects.projects.${caseStudy.id}.title`)}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            {t(`projects.projects.${caseStudy.id}.description`)}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 items-center rounded-sm bg-primary px-5 py-2 font-semibold text-surface hover:bg-foreground" href={project.demoUrl} target="_blank" rel="noreferrer">
              {t('portfolio.caseStudy.openProject')}
            </a>
            {project.githubUrl && (
              <a className="inline-flex min-h-11 items-center rounded-sm border border-control-border px-5 py-2 font-semibold hover:bg-surface" href={project.githubUrl} target="_blank" rel="noreferrer">
                {t('projects.github')}
              </a>
            )}
          </div>
        </header>

        <figure className="mt-12 overflow-hidden rounded-sm border border-border bg-surface">
          <img
            src={project.image}
            alt={t(`portfolio.projects.${caseStudy.id}.imageAlt`)}
            className="aspect-[16/9] w-full object-cover"
            fetchPriority="high"
          />
        </figure>

        <section aria-labelledby="case-study-overview" className="mt-14 grid gap-8 border-b border-border pb-12 md:grid-cols-[0.8fr_1.2fr]">
          <h2 id="case-study-overview" className="text-2xl font-semibold">{t('portfolio.caseStudy.overview')}</h2>
          <div>
            <p className="text-lg leading-relaxed text-muted">{t(`projects.projects.${caseStudy.id}.description`)}</p>
            <h3 className="mt-8 text-lg font-semibold">{t('portfolio.caseStudy.technologies')}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="rounded-sm border border-border bg-surface px-3 py-2 text-sm">{technology}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="case-study-details" className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="case-study-details" className="text-2xl font-semibold">{t('portfolio.caseStudy.projectDetails')}</h2>
            <p className="mt-3 leading-relaxed text-muted">{t('portfolio.caseStudy.detailsNote')}</p>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {facts.map(({ label, value }) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-[0.7fr_1.3fr] sm:gap-5">
                <dt className="font-semibold">{label}</dt>
                <dd className="text-muted">{value ?? t('portfolio.caseStudy.toComplete')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-12 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted">
          {t('portfolio.caseStudy.completionNotice')}
        </p>
        <a className="mt-10 inline-block font-semibold text-primary underline underline-offset-4 hover:text-foreground" href="/#projects">
          ← {t('portfolio.caseStudy.backToProjects')}
        </a>
      </div>
    </article>
  );
};

export default CaseStudyPage;
