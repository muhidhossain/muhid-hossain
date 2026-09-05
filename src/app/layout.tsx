import type { Metadata } from 'next';
import '@/styles/globals.css';
import { inter, jetbrainsMono } from '@/styles/fonts';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { profile } from '@/data/profile';
import { personJsonLd } from '@/data/json-ld';

const title = `${profile.name} - ${profile.role}`;
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    'Muhid Hossain Peal',
    'Muhid Hossain',
    'Frontend Developer',
    'React Developer',
    'React Native Developer',
    'Next.js Developer',
    'Angular Developer',
    'TypeScript Developer',
    'Spacenus',
    'Precision Agriculture Software',
    'Dhaka Bangladesh Developer',
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  applicationName: `${profile.name} Portfolio`,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/images/profile-og.jpg',
        width: 1200,
        height: 1200,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/images/profile-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
