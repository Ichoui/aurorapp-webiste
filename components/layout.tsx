// Ce fichier n'est PAS le Root Layout Next.js.
// Le vrai RootLayout est dans `app/layout.tsx`.
// On garde ce fichier uniquement pour éviter les imports cassés si quelqu'un l'utilisait.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurorapp - Northern Lights Forecast",
  description:
    "Real-time Northern Lights forecast app powered by scientific data.",
  keywords: [
    "northern lights forecast",
    "aurora borealis app",
    "aurora tracker",
    "KP index forecast",
  ],
  openGraph: {
    title: "Aurorapp",
    description: "Track the Northern Lights in real time",
    url: "https://aurorapp.com",
    siteName: "Aurorapp",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
