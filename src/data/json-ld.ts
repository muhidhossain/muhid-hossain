import { profile } from '@/data/profile';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  description: profile.summary,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/profile.png`,
  email: `mailto:${profile.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Spacenus GmbH',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Barishal',
  },
  sameAs: [
    profile.links.linkedin,
    profile.links.github,
    profile.links.leetcode,
    profile.links.stackoverflow,
  ],
  knowsAbout: [
    'React',
    'React Native',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Frontend Development',
    'Precision Agriculture Software',
  ],
};
