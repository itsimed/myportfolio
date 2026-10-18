export interface PortfolioProject {
  id: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  technologies: string[];
  caseStudyPath?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'wassalni',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/wass.webp',
    demoUrl: 'https://imgur.com/a/wassalni-app-B01sowE',
    githubUrl: 'https://github.com/itsimed/wassalni',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase'],
    caseStudyPath: '/projects/wassalni/',
  },
  {
    id: 'divanhane',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/divan.webp',
    demoUrl: 'https://divanhane.vercel.app',
    githubUrl: 'https://github.com/itsimed/divanhane',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    caseStudyPath: '/projects/divanhane/',
  },
  {
    id: 'bdtech',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/bd.webp',
    demoUrl: 'https://bdtech-azure.vercel.app/',
    githubUrl: 'https://github.com/itsimed/bdtech',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'cabinetcm',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/cm.webp',
    demoUrl: 'https://cabinetcm.vercel.app/',
    githubUrl: 'https://github.com/itsimed/cabinetcm',
    technologies: ['Vite', 'React', 'TypeScript'],
  },
  {
    id: 'elitepartners',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/epg.webp',
    demoUrl: 'https://elitepartnersgroup.vercel.app/',
    githubUrl: 'https://github.com/itsimed/elitepartnersgroup',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'picci',
    image: 'https://storage.googleapis.com/publicasse/my_portfolio/picci.webp',
    demoUrl: 'https://picci-five.vercel.app/',
    githubUrl: 'https://github.com/itsimed/picci',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    caseStudyPath: '/projects/picci/',
  },
];
