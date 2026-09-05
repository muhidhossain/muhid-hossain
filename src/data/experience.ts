export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: 'Mid-Level Frontend Developer - React Native | React',
    company: 'Spacenus GmbH',
    location: 'Darmstadt, Germany (Remote)',
    start: 'Nov 2025',
    end: 'Present',
    current: true,
    points: [
      'Improve performance and UX across production mobile and web apps used for precision agriculture.',
      'Ship core field-management features - Soil Productivity Map, N-Rx, and Stratification - enabling data-driven farming decisions.',
    ],
    stack: [
      'TypeScript',
      'React Native',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Mapbox',
      'REST APIs',
      'Sentry',
    ],
  },
  {
    role: 'Front-end Developer - React | Angular',
    company: 'Nybsys Inc.',
    location: 'Mirpur, Dhaka, Bangladesh',
    start: 'Mar 2025',
    end: 'Nov 2025',
    points: [
      'Led the migration of the legacy CDAS platform to a modern stack, cutting technical debt and boosting performance.',
      'Delivered the Partner Portal and reusable UI components, streamlining feature delivery across the app.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Angular', 'shadcn/ui', 'Tailwind CSS', 'Chart.js'],
  },
  {
    role: 'Front-end Developer - Next.js | Angular | React Native',
    company: 'Spacenus GmbH',
    location: 'Darmstadt, Germany (Remote)',
    start: 'Jul 2022',
    end: 'Feb 2025',
    points: [
      "Built Spacenus' web and mobile apps from scratch, enabling efficient field management for farmers.",
      'Migrated Angular 10 to 14, improving performance and platform compatibility.',
    ],
    stack: ['TypeScript', 'React', 'React Native', 'Next.js', 'Sass', 'Angular', 'Redux Toolkit', 'Leaflet'],
  },
  {
    role: 'Front-end Developer - React | Next.js',
    company: 'Grid Stacks',
    location: 'Rajshahi, Bangladesh (Remote)',
    start: 'Mar 2022',
    end: 'May 2022',
    points: [
      'Delivered six client React applications, including a booking system and NFT landing pages.',
    ],
    stack: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Redux Toolkit', 'Sass'],
  },
  {
    role: 'Intern - Front-end Development',
    company: 'Namyata Technology',
    location: 'Delhi, India (Remote)',
    start: 'Jan 2021',
    end: 'Jan 2022',
    points: ['Shipped 4 web apps from scratch with server-side rendering for faster load times.'],
    stack: ['TypeScript', 'Next.js', 'Redux', 'Sass', 'SSR'],
  },
];

export const education = [
  {
    degree: 'B.Sc. in Geology & Mining',
    school: 'University of Barishal',
    location: 'Barishal, Bangladesh',
    period: '2018 - 2022',
  },
  {
    degree: 'Higher Secondary School Certificate',
    school: 'Mirpur Cantonment Public School & College',
    location: 'Dhaka, Bangladesh',
    period: '2017',
  },
];

export const certifications = [
  { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', date: 'Jun 2022' },
  { name: 'Complete Web Development Course', issuer: 'Programming Hero', date: 'Jul 2020' },
  { name: 'Certificate of Selection - Frontend Development Intern', issuer: 'Internshala', date: 'Jan 2021' },
];
