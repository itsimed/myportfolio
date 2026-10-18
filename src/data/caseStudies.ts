export interface CaseStudy {
  id: 'wassalni' | 'divanhane' | 'picci';
  path: string;
  role: null;
  duration: null;
  team: null;
  methods: null;
}

export const caseStudies: CaseStudy[] = [
  { id: 'wassalni', path: '/projects/wassalni/', role: null, duration: null, team: null, methods: null },
  { id: 'divanhane', path: '/projects/divanhane/', role: null, duration: null, team: null, methods: null },
  { id: 'picci', path: '/projects/picci/', role: null, duration: null, team: null, methods: null },
];

export const getCaseStudy = (pathname: string) => {
  const normalizedPath = `${pathname.replace(/\/+$/, '')}/`;
  return caseStudies.find((caseStudy) => caseStudy.path === normalizedPath);
};
