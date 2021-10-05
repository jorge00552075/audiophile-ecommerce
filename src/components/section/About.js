import styles from "./About.module.css";
// src/assets/desktop/image-best-gear.jpg
import imagetab from "../../assets/desktop/image-best-gear.jpg";

function About() {
  return (
    <section className={styles.about}>
      {/* GRID CONTAINER */}
      <div className={styles.about__content}>
        {/* Left Side */}
        <img
          src={imagetab}
          alt="Man listening to music on headphones"
          className={styles["about__image--tab"]}
        />
        <div className={styles.text__content}>
          <h2 className={styles.about__heading}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className={styles.about__text}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers and audio
            accessories. We have a large showroom and luxury demostration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy you portable audio equipment.
          </p>
        </div>
        {/* Right Side */}
        <img
          src="../assets/shared/desktop/image-best-gear.jpg"
          alt="Man listening to music on headphones"
          className={styles.about__image}
        />
      </div>
    </section>
  );
}

export default About;
