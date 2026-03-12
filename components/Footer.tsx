'use client';

// Footer
import Image from 'next/image';
import styles from './style/Footer.module.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  // https://spot.pcc.edu/~mgoodman/developer.android.com/distribute/tools/promote/badges.html
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">
            <Image className={styles.logoImg} src="/logo.png" alt="Logo Aurorapp" fill sizes="32px" />
          </span>
          <span className={styles.logoText}>Aurorapp</span>
        </div>
        <div className={styles.container}>
          <a href="https://play.google.com/store/apps/details?id=io.aurora.start">
            <img alt="Get it on Google Play" src="/images/brand/fr_generic_rgb_wo_45.png" />
          </a>
        </div>
        <nav className={styles.links}>
          <a href="#" className={styles.link}>
            {t('footer.privacy')}
          </a>
          <a href="#" className={styles.link}>
            {t('footer.contact')}
          </a>
        </nav>
        <p className={styles.copy}>
          {t('footer.copyright.me')}
          <b>
            <a href="#">{t('footer.copyright.swpc')}</a>
          </b>
        </p>
      </div>
    </footer>
  );
};
