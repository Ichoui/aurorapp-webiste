// Section Météo Intégrée
import styles from "./style/Weather.module.css";

const weatherFeatures = [
    {
        icon: "calendar_month",
        title: "Prévisions 7 jours",
        description:
            "Anticipez vos expéditions avec des prévisions horaires et quotidiennes détaillées pour chaque spot.",
    },
    {
        icon: "cloudy",
        title: "Couverture Nuageuse",
        description:
            "Donnée cruciale : suivez l'évolution des nuages en temps réel pour trouver un ciel dégagé.",
    },
    {
        icon: "air",
        title: "Données Pratiques",
        description:
            "Heures de lever/coucher du soleil, vitesse du vent et humidité pour préparer votre équipement.",
    },
] as const;

export const Weather = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.supra}>Météo Intégrée</h2>
                        <h3 className={styles.title}>
                            Ne laissez pas les nuages gâcher votre vue.
                        </h3>
                        <p className={styles.description}>
                            Le croisement des données météo et des prédictions aurorales est
                            la clé du succès. Aurorapp intègre les flux{" "}
                            <strong>OpenWeatherMap</strong> pour vous offrir une vision
                            complète du ciel local.
                        </p>
                    </div>

                    {/* Quote card */}
                    <div className={styles.headerRight}>
                        <div className={styles.quoteCard}>
                            <div className={styles.quoteHeader}>
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "2.25rem", color: "var(--primary)" }}
                >
                  cloud
                </span>
                                <span className={styles.quoteTitle}>Visibilité Optimale</span>
                            </div>
                            <p className={styles.quoteText}>
                                &ldquo;Trouvez les meilleures fenêtres d&apos;observation en
                                corrélant l&apos;indice Kp avec la couverture nuageuse en temps
                                réel.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {weatherFeatures.map((f) => (
                        <div key={f.title} className={styles.card}>
                            <div className={styles.iconWrap}>
                                <span className="material-symbols-outlined">{f.icon}</span>
                            </div>
                            <h4 className={styles.cardTitle}>{f.title}</h4>
                            <p className={styles.cardDesc}>{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
