"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center text-white px-6">
            {/* overlay pour la lisibilité */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#001e49]/55 via-[#001e49]/10 to-[#001014]/60" />

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
                <span className="gradient-text font-semibold">Aurorapp</span>
                <span className="text-white/50">•</span>
                <span>Disponible uniquement sur Google Play</span>
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
            >
                Aurorapp
                <span className="block mt-2 text-2xl md:text-3xl font-semibold text-white/80">
                    Northern Light
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-6 text-base md:text-xl max-w-2xl text-white/75 leading-relaxed"
            >
                Prévisions d&apos;aurores boréales en temps réel, basées sur des données
                scientifiques. KP index, vent solaire, carte, et alertes.
            </motion.p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    href="#features"
                    className="cta-button"
                >
                    Découvrir l&apos;app
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    href="#download"
                    className="cta-button--ghost"
                >
                    Télécharger
                </motion.a>
            </div>
        </section>
    );
}
