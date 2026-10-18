import { portfolioProjects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t('portfolio.projects.eyebrow')}
            </p>
            <h2 id="projects-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t('projects.title')}
            </h2>
          </div>
          <a className="font-semibold text-primary underline underline-offset-4 hover:text-foreground" href="https://github.com/itsimed" target="_blank" rel="noreferrer">
            {t('projects.viewAll')}
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map(({ id, image, demoUrl, githubUrl, technologies }, index) => (
            <article key={id} className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface">
              <div className="aspect-[16/10] overflow-hidden bg-border">
                <img
                  src={image}
                  alt={t(`portfolio.projects.${id}.imageAlt`)}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold">{t(`projects.projects.${id}.title`)}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{t(`projects.projects.${id}.description`)}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={t('portfolio.projects.technologies')}>
                  {technologies.map((technology) => (
                    <li key={technology} className="rounded-sm bg-background px-2 py-1 text-xs font-medium text-muted">
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4 border-t border-border pt-4 text-sm font-semibold">
                  <a className="min-h-11 py-2 text-primary underline underline-offset-4 hover:text-foreground" href={demoUrl} target="_blank" rel="noreferrer">
                    {t(`projects.projects.${id}.button`)}
                  </a>
                  {githubUrl && (
                    <a className="min-h-11 py-2 text-primary underline underline-offset-4 hover:text-foreground" href={githubUrl} target="_blank" rel="noreferrer">
                      {t('projects.github')}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">{t('projects.moreProjects')}</p>
      </div>
    </section>
  );
};

export default Projects;
