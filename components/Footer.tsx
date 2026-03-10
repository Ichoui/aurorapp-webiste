// Footer
import Image from "next/image";
import styles from "./style/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">
            <Image className={styles.logoImg} src="/logo.png" alt="Logo Aurorapp" fill sizes="32px" />
          </span>
          <span className={styles.logoText}>Aurorapp</span>
        </div>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>Confidentialité</a>
          <a href="#" className={styles.link}>Contact</a>
        </nav>
        <p className={styles.copy}>© 2026 Aurorapp - Northern Lights. Données propulsées par NOAA.</p>
      </div>
    </footer>
  );
};
