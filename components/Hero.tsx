'use client';

// Section d'en-tête
import styles from './style/Hero.module.css';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      {/* Badge */}
      <div className={styles.badge}>
        <span className="ping-dot" />
        {t('hero.badge')}
      </div>

      {/* Title */}
      <h1 className={styles.title}>Aurorapp</h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>{t('hero.subtitle')}</p>

      {/* Buttons */}
      <div className={styles.buttons}>
        <a
          href="https://play.google.com/store/apps/details?id=io.aurora.start"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          <span className="material-symbols-outlined">android</span>
          {t('hero.downloadButton')}
        </a>
        {/*<button className={styles.btnPrimary} disabled={true}>*/}
        {/*    <span className="material-symbols-outlined">ios</span>*/}
        {/*    Bientôt sur l&#39;Apple Store*/}
        {/*</button>*/}
        <button className={styles.btnSecondary}>{t('hero.learnMore')}</button>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>25k+</span>
          <span className={styles.statLabel}>{t('hero.stats.downloads')}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>3k</span>
          <span className={styles.statLabel}>{t('hero.stats.dailyUsers')}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statValue}>2018</span>
          <span className={styles.statLabel}>{t('hero.stats.since')}</span>
        </div>
      </div>
    </section>
  );
};
