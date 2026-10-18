import { portfolioProjects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

const FrontendProjects = () => {
  const { t } = useLanguage();
  const projectIds = ['divanhane', 'picci', 'bdtech', 'cabinetcm'] as const;

  return (
    <section aria-labelledby="titre-front" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-[88px]">
      <div className="flex flex-col gap-2.5">
        <h2 id="titre-front" className="m-0 font-display text-4xl font-bold">
          {t('portfolio2026.frontend.heading')}
        </h2>
        <p className="m-0 text-[17px] text-[#3A3A3A]">
          {t('portfolio2026.frontend.introduction')}
        </p>
      </div>
      <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {projectIds.map((projectId, index) => {
          const project = portfolioProjects.find(({ id }) => id === projectId);
          if (!project) {
            throw new Error(`Missing front-end portfolio project: ${projectId}`);
          }
          return (
            <li key={projectId} className="rounded-[14px] border border-border bg-white p-[22px]">
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-lg font-semibold text-foreground">
                {t(`portfolio2026.frontend.projects.${index}.name`)}
              </a>
              <p className="mb-0 mt-1.5 text-[15px] text-[#5A5A5A]">
                {t(`portfolio2026.frontend.projects.${index}.description`)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FrontendProjects;
