export type CaseStudy = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'Soil Productivity Map, N-Rx & Stratification',
    company: 'Spacenus GmbH',
    period: '2022 - Present',
    summary:
      'Core field-management features for precision agriculture, turning satellite imagery and soil data into per-field, data-driven recommendations for farmers.',
    highlights: [
      'Built map-based visualizations rendering multi-layer soil and yield data over field boundaries.',
      'Shipped Nitrogen prescription (N-Rx) and Stratification workflows used directly by farmers to plan inputs.',
      'Improved performance and UX across the production React Native mobile app and Next.js web platform.',
    ],
    stack: ['React Native', 'React', 'Next.js', 'Mapbox', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'CDAS Platform Modernization & Partner Portal',
    company: 'Nybsys Inc.',
    period: '2025',
    summary:
      'Led the migration of a legacy platform to a modern React/Next.js + Angular stack, then delivered a new Partner Portal on top of it.',
    highlights: [
      'Reduced technical debt by replacing legacy modules with a maintainable, component-driven architecture.',
      'Delivered the Partner Portal and a reusable UI component library adopted across the app.',
      'Improved overall performance and user experience of the modernized platform.',
    ],
    stack: ['React', 'Next.js', 'Angular', 'shadcn/ui', 'Tailwind CSS', 'Chart.js'],
  },
  {
    title: "Spacenus Web & Mobile - Built From Scratch",
    company: 'Spacenus GmbH',
    period: '2022 - 2025',
    summary:
      "Built Spacenus' original web and mobile applications from the ground up, and later migrated the Angular codebase from v10 to v14.",
    highlights: [
      'Established the initial frontend architecture for both the web (Next.js) and mobile (React Native) apps.',
      'Migrated Angular 10 → 14, improving performance and platform compatibility without disrupting delivery.',
      'Integrated Leaflet-based mapping for field visualization.',
    ],
    stack: ['Next.js', 'React', 'React Native', 'Angular', 'Redux Toolkit', 'Leaflet', 'Sass'],
  },
];
