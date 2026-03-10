// Footer
import styles from "./style/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>wb_sunny</span>
          <span className={styles.logoText}>Aurorapp</span>
        </div>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>Confidentialité</a>
          <a href="#" className={styles.link}>Conditions</a>
          <a href="#" className={styles.link}>API</a>
          <a href="#" className={styles.link}>Contact</a>
        </nav>
        <p className={styles.copy}>© 2024 Aurorapp Space Systems. Données propulsées par NOAA.</p>
      </div>
    </footer>
  );
};
