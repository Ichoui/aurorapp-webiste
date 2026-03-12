"use client";

// Footer
import Image from "next/image";
import styles from "./style/Footer.module.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

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
          <a href="#" className={styles.link}>{t("footer.privacy")}</a>
          <a href="#" className={styles.link}>{t("footer.contact")}</a>
        </nav>
        <p className={styles.copy}>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};
