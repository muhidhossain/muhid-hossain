import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} - ${profile.role}`,
    short_name: profile.shortName,
    description: profile.summary,
    start_url: '/',
    display: 'standalone',
    background_color: '#080c10',
    theme_color: '#22d3ee',
    icons: [
      {
        src: '/images/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
