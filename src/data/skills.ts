export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend & Mobile',
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'Angular',
      'Redux / Redux Toolkit',
      'RxJS',
      'Expo CLI',
      'Leaflet',
      'Mapbox',
    ],
  },
  {
    label: 'Styling & UI',
    skills: ['Tailwind CSS', 'Sass', 'Bootstrap', 'shadcn/ui', 'Material-UI'],
  },
  {
    label: 'Backend & Data',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Firebase', 'NoSQL', 'SQL', 'Zod'],
  },
  {
    label: 'Tooling & Testing',
    skills: ['Git', 'GitHub', 'Jest', 'VS Code', 'Linux (Ubuntu)', 'Axios'],
  },
];
