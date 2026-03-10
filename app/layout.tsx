// Configuration des fonts (Inter)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../components/style/globals.css";
import React from 'react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aurorapp - Chassez les aurores boréales",
  description:
    "Chassez les aurores boréales en temps réel avec une précision scientifique inégalée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
          <title>Aurorapppp</title>
      </head>
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
