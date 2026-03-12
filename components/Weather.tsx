'use client';

// Section Météo Intégrée
import styles from './style/Weather.module.css';
import { useTranslation } from 'react-i18next';

const WEATHER_ICONS = ['calendar_month', 'cloudy', 'air'] as const;

export const Weather = () => {
  const { t } = useTranslation();

  const items = t('weather.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.supra}>{t('weather.supra')}</h2>
            <h3 className={styles.title}>{t('weather.title')}</h3>
            <p className={styles.description}>
              {t('weather.description')
                .split('OpenWeatherMap')
                .map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong>
                        <a href="https://openweathermap.org/  ">OpenWeatherMap</a>
                      </strong>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
            </p>
          </div>

          {/* Quote card */}
          <div className={styles.headerRight}>
            <div className={styles.quoteCard}>
              <div className={styles.quoteHeader}>
                <span className="material-symbols-outlined" style={{ fontSize: '2.25rem', color: 'var(--primary)' }}>
                  cloud
                </span>
                <span className={styles.quoteTitle}>{t('weather.quoteTitle')}</span>
              </div>
              <p className={styles.quoteText}>&ldquo;{t('weather.quoteText')}&rdquo;</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined">{WEATHER_ICONS[idx]}</span>
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
