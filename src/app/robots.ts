import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
