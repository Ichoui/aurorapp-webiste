"use client";

// Section "L'Expérience Aurorapp"
import Image from "next/image";
import styles from "./style/DesignFirst.module.css";
import { useTranslation } from "react-i18next";

export const DesignFirst = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      {/* Glow background */}
      <div className={styles.glow} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: texte */}
          <div>
            <h2 className={styles.supra}>{t("designFirst.supra")}</h2>
            <h3 className={styles.title}>{t("designFirst.title")}</h3>
            <p className={styles.text}>
              {t("designFirst.text").split("NOAA/SWPC").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<strong>NOAA/SWPC</strong></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <p className={styles.quote}>{t("designFirst.quote")}</p>
          </div>

          {/* Right: image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                  src='/banner.png'

                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9Wa5KUfbvm7mKpYkObQuiuJLwS6QZ54PcYxuBJxLcNh-V06hMRt4M2qpt6Z3gelnR1Y32dQfSWrJ-urUPc6J7uFjIwMPo19AdZHW0pijgc67TztKQXxuY8T7CNY7cIt_u1K0KseRjZfDY22tesiDSSpN3Fppm-vmMdTTugysMeV6vfU6_jv8YomXQSULzNartEAVvv0bUymuB742Vq6rzJkLFSrqUltQN8mUHBMkHbMB8lTCjedYjzeZXT_j5tinABB3ixIAEZx4"
                alt="Interface Premium"
                fill
                className={styles.image}
              />
            </div>
            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <span className={styles.floatingText}>{t("designFirst.badge")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
