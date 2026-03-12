"use client";

// Section CTA final
import styles from "./style/CallToAction.module.css";
import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("callToAction.title")}</h2>
        <p className={styles.subtitle}>{t("callToAction.subtitle")}</p>
        <div className={styles.btnWrap}>
          <a
            href="https://play.google.com/store/apps/details?id=io.aurora.start"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <span className="material-symbols-outlined">install_mobile</span>
            {t("callToAction.button")}
          </a>
        </div>
      </div>
    </section>
  );
};
