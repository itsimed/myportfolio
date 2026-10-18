import { useLanguage } from '../contexts/LanguageContext';

const skillGroups = [
  {
    id: 'design',
    title: 'skills.categories.design',
    skills: ['Figma', 'Wireframing & prototyping', 'Canva', 'Inclusive design'],
  },
  {
    id: 'frontend',
    title: 'skills.categories.frontend',
    skills: ['HTML', 'CSS / Sass', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Responsive design'],
  },
  {
    id: 'data',
    title: 'skills.categories.data',
    skills: ['Python', 'Pandas', 'NumPy', 'Data visualization', 'Machine learning fundamentals', 'Database design'],
  },
  {
    id: 'management',
    title: 'skills.categories.management',
    skills: ['Agile / Scrum', 'Jira', 'Git & GitHub', 'Team collaboration'],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {t('portfolio.skills.eyebrow')}
        </p>
        <h2 id="skills-title" className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {t('skills.title')}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t('skills.description')}</p>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {skillGroups.map(({ id, title, skills }) => (
            <section key={id} aria-labelledby={`skill-group-${id}`} className="border-t border-border py-6">
              <h3 id={`skill-group-${id}`} className="text-lg font-semibold">{t(title)}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-sm bg-background px-3 py-2 text-sm text-muted">{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
