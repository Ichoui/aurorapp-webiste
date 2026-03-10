// Section CTA final
import styles from "./style/CallToAction.module.css";

export const CallToAction = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Prêt pour le spectacle ?</h2>
        <p className={styles.subtitle}>
          Rejoignez des milliers de passionnés et ne ratez plus jamais une aurore boréale.
        </p>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>
            <span className="material-symbols-outlined">install_mobile</span>
            Installer Aurorapp gratuitement
          </button>
        </div>
      </div>
    </section>
  );
};
