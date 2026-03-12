'use client';

// Navigation
import Image from 'next/image';
import styles from './style/Header.module.css';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon} aria-hidden="true">
          <Image className={styles.logoImg} src="/logo.png" alt="Logo Aurorapp" fill sizes="40px" priority />
        </span>
        <h2 className={styles.logoText}>Aurorapp</h2>
      </div>

      {/* Desktop nav */}
      <div className={styles.desktopNav}>
        <nav className={styles.navLinks}>
          <a href="#noaa" className={styles.navLink}>
            {t('header.nav.noaaData')}
          </a>
          <a href="#" className={styles.navLink}>
            {t('header.nav.features')}
          </a>
          <a href="#" className={styles.navLink}>
            {t('header.nav.weather')}
          </a>
        </nav>
        <LanguageSwitcher />
        <button className={styles.ctaButton}>{t('header.cta')}</button>
      </div>

      {/* Mobile hamburger */}
      <div className={styles.mobileMenu}>
        <LanguageSwitcher />
        <span className="material-symbols-outlined" style={{ color: '#f1f5f9' }}>
          menu
        </span>
      </div>
    </header>
  );
};
