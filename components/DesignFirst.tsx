// Section "L'Expérience Aurorapp"
import Image from "next/image";
import styles from "./style/DesignFirst.module.css";

export const DesignFirst = () => {
    return (
        <section className={styles.section}>
            {/* Glow background */}
            <div className={styles.glow} />

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left: texte */}
                    <div>
                        <h2 className={styles.supra}>L&apos;Expérience Aurorapp</h2>
                        <h3 className={styles.title}>
                            La science des données rencontre le design premium.
                        </h3>
                        <p className={styles.text}>
                            Alors que les données sont fonctionnelles et proviennent
                            directement de la <strong>NOAA/SWPC</strong>, Aurorapp se
                            distingue par une interface moderne, fluide et esthétique.
                        </p>
                        <p className={styles.quote}>
                            Ce ne sont pas seulement des données ; c&apos;est une expérience
                            fluide conçue pour l&apos;explorateur moderne.
                        </p>
                    </div>

                    {/* Right: image */}
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageOverlay} />
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9Wa5KUfbvm7mKpYkObQuiuJLwS6QZ54PcYxuBJxLcNh-V06hMRt4M2qpt6Z3gelnR1Y32dQfSWrJ-urUPc6J7uFjIwMPo19AdZHW0pijgc67TztKQXxuY8T7CNY7cIt_u1K0KseRjZfDY22tesiDSSpN3Fppm-vmMdTTugysMeV6vfU6_jv8YomXQSULzNartEAVvv0bUymuB742Vq6rzJkLFSrqUltQN8mUHBMkHbMB8lTCjedYjzeZXT_j5tinABB3ixIAEZx4"
                                alt="Interface Premium"
                                fill
                                className={styles.image}
                            />
                        </div>
                        {/* Floating badge */}
                        <div className={styles.floatingBadge}>
                            <span className={styles.floatingText}>UI/UX&nbsp;moderne</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
