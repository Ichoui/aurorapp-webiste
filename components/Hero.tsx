// Section d'en-tête
import styles from "./style/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Badge */}
      <div className={styles.badge}>
        <span className="ping-dot" />
        Aurores en direct
      </div>

      {/* Title */}
      <h1 className={styles.title}>Aurorapp</h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        Chassez les aurores boréales en temps réel avec une précision scientifique inégalée.
      </p>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          <span className="material-symbols-outlined">download</span>
          Télécharger sur Google Play
        </button>
        <button className={styles.btnSecondary}>
          En savoir plus
        </button>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>50k+</span>
          <span className={styles.statLabel}>Explorateurs</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>4.9/5</span>
          <span className={styles.statLabel}>Note Store</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>&lt;1 min</span>
          <span className={styles.statLabel}>Latence</span>
        </div>
      </div>
    </section>
  );
};
