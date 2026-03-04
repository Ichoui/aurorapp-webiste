"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Prévisions en temps réel",
        desc: "Des prédictions fiables basées sur des données scientifiques de météo spatiale."
    },
    {
        title: "KP index & vent solaire",
        desc: "Suis l'activité géomagnétique et les tempêtes solaires en direct."
    },
    {
        title: "Carte des aurores",
        desc: "Visualise où les aurores sont visibles dans le monde, en un coup d'œil."
    },
    {
        title: "Notifications",
        desc: "Reçois une alerte quand l'activité grimpe près de toi."
    }
];

export default function Features() {
    return (
        <section id="features" className="section px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                    Puissante. Scientifique. Belle.
                </h2>
                <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
                    Une app mobile pensée pour aller à l&apos;essentiel: savoir quand et où observer.
                </p>

                <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                            viewport={{ once: true }}
                            className="glass p-7 md:p-8 text-left transition-transform duration-300 hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
