import styles from "./About.module.css";

// SRC FOLDER
import lg_bestgear from "../../assets/shared/desktop/image-best-gear.webp";
import md_bestgear from "../../assets/shared/tablet/image-best-gear.webp";
import sm_bestgear from "../../assets/shared/mobile/image-best-gear.webp";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.text__content}>
          <h3 className={styles.about__heading}>
            Bringing you the <span>best</span> audio gear
          </h3>
          <p className={styles.about__text}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers and audio
            accessories. We have a large showroom and luxury demostration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy you portable audio equipment.
          </p>
        </div>
        <picture>
          <source media="(min-width: 1080px)" srcSet={lg_bestgear} />
          <source media="(min-width: 711px)" srcSet={md_bestgear} />
          <source media="(min-width: 100px)" srcSet={sm_bestgear} />
          <img src={lg_bestgear} alt="Man listening to music on headphones" />
        </picture>
      </div>
    </section>
  );
}

export default About;
