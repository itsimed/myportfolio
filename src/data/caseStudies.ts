export type CaseStudyId = 'wassalni' | 'miashs' | 'sanou';

export interface CaseStudy {
  id: CaseStudyId;
  path: string;
  projectNumber: string;
  categoryKey: string;
  formatKey: string;
  titleKey: string;
  summaryKey: string;
  methodsKey: string;
  detailsKey: string;
  visualKey: string;
  visualStyle: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'wassalni',
    path: '/projects/wassalni/',
    projectNumber: '01',
    categoryKey: 'portfolio2026.cases.wassalni.category',
    formatKey: 'portfolio2026.cases.wassalni.format',
    titleKey: 'portfolio2026.cases.wassalni.title',
    summaryKey: 'portfolio2026.cases.wassalni.summary',
    methodsKey: 'portfolio2026.cases.wassalni.methods',
    detailsKey: 'portfolio2026.cases.wassalni.details',
    visualKey: 'portfolio2026.cases.wassalni.visual',
    visualStyle: 'bg-[#E7EBFB] text-[#1F3BB8]',
  },
  {
    id: 'miashs',
    path: '/projects/miashs/',
    projectNumber: '02',
    categoryKey: 'portfolio2026.cases.miashs.category',
    formatKey: 'portfolio2026.cases.miashs.format',
    titleKey: 'portfolio2026.cases.miashs.title',
    summaryKey: 'portfolio2026.cases.miashs.summary',
    methodsKey: 'portfolio2026.cases.miashs.methods',
    detailsKey: 'portfolio2026.cases.miashs.details',
    visualKey: 'portfolio2026.cases.miashs.visual',
    visualStyle: 'bg-[#FCEBDD] text-[#8A3D0C]',
  },
  {
    id: 'sanou',
    path: '/projects/sanou-va-bien/',
    projectNumber: '03',
    categoryKey: 'portfolio2026.cases.sanou.category',
    formatKey: 'portfolio2026.cases.sanou.format',
    titleKey: 'portfolio2026.cases.sanou.title',
    summaryKey: 'portfolio2026.cases.sanou.summary',
    methodsKey: 'portfolio2026.cases.sanou.methods',
    detailsKey: 'portfolio2026.cases.sanou.details',
    visualKey: 'portfolio2026.cases.sanou.visual',
    visualStyle: 'bg-[#DFF1E7] text-[#155C37]',
  },
];

export const getCaseStudy = (pathname: string) => {
  const normalizedPath = `${pathname.replace(/\/+$/, '')}/`;
  return caseStudies.find((caseStudy) => caseStudy.path === normalizedPath);
};
