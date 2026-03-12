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
  title: 'Aurorapp - Chassez les aurores boréales',
  description: 'Chassez les aurores boréales en temps réel avec style et précision scientifique',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Aurorapp - Chassez les aurores boréales',
    description: 'Chassez les aurores boréales en temps réel avec style et précision scientifique',
    url: 'https://aurorapp.io',
    siteName: 'Aurorapp',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Aurorapp - Chassez les aurores boréales',
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
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Material Symbols Outlined */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

        <title>Aurorapp</title>
      </head>
      <body className={inter.variable} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
