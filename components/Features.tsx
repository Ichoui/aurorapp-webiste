// Grille de fonctionnalités
import styles from "./style/Features.module.css";

const features = [
  {
    icon: "monitoring",
    title: "Données NOAA/SWPC",
    description: "Flux directs du Space Weather Prediction Center pour une analyse sans intermédiaire.",
  },
  // {
  //   icon: "notifications_active",
  //   title: "Alertes Intelligentes",
  //   description: "Notifications instantanées dès que l'indice Kp atteint le seuil critique dans votre région.",
  // },
  {
    // Avant : notifications_active / Alertes Intelligentes
    icon: "shield",
    title: "Respect de la Vie Privée",
    description: "Nous ne collectons aucune donnée personnelle. Votre navigation est 100% anonyme et sécurisée.",
  },
  {
    icon: "map",
    title: "Cartographie HD",
    description: "Visualisation 3D de l'ovale auroral superposée aux conditions météo locales.",
  },
] as const;

export const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.supra}>Science &amp; Précision</h2>
            <h3 className={styles.title}>Précision Scientifique en temps réel.</h3>
          </div>
          <p className={styles.headerRight}>
            L&apos;application utilise les flux de données les plus fiables de la planète pour garantir vos observations.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined" style={{ fontSize: "1.875rem" }}>
                  {f.icon}
                </span>
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
