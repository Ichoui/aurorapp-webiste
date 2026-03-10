// Section carte/témoignage
import Image from "next/image";
import styles from "../components/style/Testimonial.module.css";

export const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        {/* Left: quote */}
        <div className={styles.left}>
          <h3 className={styles.quote}>
            &ldquo;L&apos;outil indispensable pour tout photographe de nuit.&rdquo;
          </h3>
          <div className={styles.author}>
            <div className={styles.avatar}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ865KIguLYGuKgJn_AooneBOmMMUtx9rrgkZ4VAuuv3aYwHvVoIWlZ33tbS7v3M9pUegHvaPYvNuiDHWgxiu3Ur521WUoptsmrG3Dc21_CV8_YVtpBkN44eWm5WephNO0ehl2UGveC2VnZj_oXyyUD_z4wfP_qtj1oLu8u8hFFEX3r_l_yNPMUK4f4wGyHht7yfijfgC77oDD_qGDZt_YJvD-QfKGhUwfFhfWJJTAqFeQbS3QT0T7iJfRXXy9PvzzmCD459UPiK7B"
                alt="Photo de profil Thomas Jensen"
                width={48}
                height={48}
                className={styles.avatarImg}
              />
            </div>
            <div>
              <p className={styles.authorName}>Thomas Jensen</p>
              <p className={styles.authorRole}>Photographe d&apos;expédition, Norvège</p>
            </div>
          </div>
          <button className={styles.mapLink}>
            Voir la carte mondiale
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Right: map image */}
        <div className={styles.right}>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9Wa5KUfbvm7mKpYkObQuiuJLwS6QZ54PcYxuBJxLcNh-V06hMRt4M2qpt6Z3gelnR1Y32dQfSWrJ-urUPc6J7uFjIwMPo19AdZHW0pijgc67TztKQXxuY8T7CNY7cIt_u1K0KseRjZfDY22tesiDSSpN3Fppm-vmMdTTugysMeV6vfU6_jv8YomXQSULzNartEAVvv0bUymuB742Vq6rzJkLFSrqUltQN8mUHBMkHbMB8lTCjedYjzeZXT_j5tinABB3ixIAEZx4"
            alt="Carte satellite de l'Islande montrant l'activité aurorale"
            fill
            className={styles.mapImage}
          />
        </div>
      </div>
    </section>
  );
};
