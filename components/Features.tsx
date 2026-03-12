'use client';

// Grille de fonctionnalités
import styles from './style/Features.module.css';
import { useTranslation } from 'react-i18next';

const FEATURE_ICONS = ['monitoring', 'shield', 'map'] as const;

export const Features = () => {
  const { t } = useTranslation();

  const items = t('features.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className={styles.section} id='noaa'>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.supra}>{t('features.supra')}</h2>
            <h3 className={styles.title}>{t('features.title')}</h3>
          </div>
          <p className={styles.headerRight}>{t('features.description')}</p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>
                  {FEATURE_ICONS[idx]}
                </span>
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
