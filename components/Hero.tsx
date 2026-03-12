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
          Chassez les aurores boréales en temps réel avec style et précision scientifique.
      </p>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          <span className="material-symbols-outlined">android</span>
          Télécharger sur Google Play
        </button>
          {/*<button className={styles.btnPrimary} disabled={true}>*/}
          {/*    <span className="material-symbols-outlined">ios</span>*/}
          {/*    Bientôt sur l&#39;Apple Store*/}
          {/*</button>*/}
        <button className={styles.btnSecondary}>
          En savoir plus
        </button>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>25k+</span>
          <span className={styles.statLabel}>Téléchargements</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>3k</span>
          <span className={styles.statLabel}>Utilisateurs quotidien</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>2018</span>
          <span className={styles.statLabel}>Présent depuis</span>
        </div>
      </div>
    </section>
  );
};
