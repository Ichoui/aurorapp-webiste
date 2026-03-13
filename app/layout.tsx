// Configuration des fonts (Inter)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../components/style/globals.css';
import React from 'react';
import { I18nProvider } from '@/components/I18nProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aurorapp.io'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  title: {
    default: 'Aurorapp - Chassez les aurores boréales | Aurorapp - Northern Lights',
    template: '%s | Aurorapp'
  },
  description: 'Chassez les aurores boréales en temps réel avec style et précision scientifique. Real-time aurora borealis forecasting, KP index, and space weather.',
  keywords: ['aurores boréales', 'aurora borealis', 'northern lights', 'prévisions', 'météo spatiale', 'space weather', 'chasse aux aurores', 'aurora forecast', 'KP index'],
  authors: [{ name: 'Aurorapp' }],
  creator: 'Aurorapp',
  publisher: 'Aurorapp',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Aurorapp - Chassez les aurores boréales | Aurorapp - Northern Lights',
    description: 'L\'outil ultime pour chasser les aurores boréales. Real-time northern lights forecast and space weather alerts.',
    url: 'https://aurorapp.io',
    siteName: 'Aurorapp',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Aurorapp - Chassez les aurores boréales | Northern Lights Forecast',
      },
    ],
    locale: 'fr_FR',
    alternateLocale: ['fr_FR', 'fr_CA', 'en_US', 'en_CA'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurorapp - Chassez les aurores boréales',
    description: 'Chassez les aurores boréales en temps réel avec style et précision scientifique',
    images: ['/banner.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aurorapp",
    url: "https://aurorapp.io",
    description: "Chassez les aurores boréales en temps réel avec style et précision scientifique",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aurorapp.io/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="fr" className="dark">
      <head>
        {/* Material Symbols Outlined */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
