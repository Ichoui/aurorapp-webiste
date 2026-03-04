"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="download" className="section px-6 text-center">
            <div className="max-w-3xl mx-auto glass p-10 md:p-12">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Prêt à lever les yeux ?
                </motion.h2>

                <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                    Télécharge Aurorapp sur Google Play et reçois des alertes lors des prochains pics d&apos;activité.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#"
                        className="cta-button"
                        aria-label="Télécharger Aurorapp sur Google Play"
                    >
                        Télécharger sur Google Play
                    </a>

                    <a href="#features" className="cta-button--ghost">
                        Voir les fonctionnalités
                    </a>
                </div>

                <p className="mt-6 text-sm text-white/50">
                    Disponible uniquement sur Android (Google Play).
                </p>
            </div>
        </section>
    );
}
