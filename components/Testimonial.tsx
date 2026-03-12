"use client";

// Section carte/témoignage
import Image from "next/image";
import styles from "../components/style/Testimonial.module.css";
import { useTranslation } from "react-i18next";

export const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        {/* Left: quote */}
        <div className={styles.left}>
          <h3 className={styles.quote}>
            &ldquo;{t("testimonial.quote")}&rdquo;
          </h3>
          <div className={styles.author}>
            <div className={styles.avatar}>
              <Image
                src="/avbpetit.png"
                alt={t("testimonial.avatarAlt")}
                width={48}
                height={48}
                className={styles.avatarImg}
              />
            </div>
            <div>
              <p className={styles.authorName}>Morgan</p>
              <p className={styles.authorRole}>{t("testimonial.authorRole")}</p>
            </div>
          </div>
          <button className={styles.mapLink}>
            {t("testimonial.mapLink")}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Right: map image */}
        <div className={styles.right}>
          <Image
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9Wa5KUfbvm7mKpYkObQuiuJLwS6QZ54PcYxuBJxLcNh-V06hMRt4M2qpt6Z3gelnR1Y32dQfSWrJ-urUPc6J7uFjIwMPo19AdZHW0pijgc67TztKQXxuY8T7CNY7cIt_u1K0KseRjZfDY22tesiDSSpN3Fppm-vmMdTTugysMeV6vfU6_jv8YomXQSULzNartEAVvv0bUymuB742Vq6rzJkLFSrqUltQN8mUHBMkHbMB8lTCjedYjzeZXT_j5tinABB3ixIAEZx4"
              // src='/banner.png'
            alt="Carte satellite"
            fill
            className={styles.mapImage}
          />
        </div>
      </div>
    </section>
  );
};
