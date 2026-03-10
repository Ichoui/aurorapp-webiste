// Navigation
import styles from "./style/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon} aria-hidden="true">
          <img className={styles.logoImg} src="/logo.png" alt="Logo Aurorapp" />
        </span>
        <h2 className={styles.logoText}>Aurorapp</h2>
      </div>

      {/* Desktop nav */}
      <div className={styles.desktopNav}>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Fonctionnalités</a>
          <a href="#" className={styles.navLink}>Données NOAA</a>
          <a href="#" className={styles.navLink}>Carte Live</a>
        </nav>
        <button className={styles.ctaButton}>Se connecter</button>
      </div>

      {/* Mobile hamburger */}
      <div className={styles.mobileMenu}>
        <span className="material-symbols-outlined" style={{ color: "#f1f5f9" }}>menu</span>
      </div>
    </header>
  );
};
