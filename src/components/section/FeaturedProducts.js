import { Link } from "react-router-dom";

import { ReactComponent as Circles } from "../../assets/home/desktop/pattern-circles.svg";
import lg_speaker from "../../assets/home/desktop/image-speaker-zx7.jpg";
import md_speaker from "../../assets/home/tablet/image-speaker-zx7.jpg";
import sm_speaker from "../../assets/home/mobile/image-speaker-zx7.jpg";
import lg_earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import md_earphones from "../../assets/home/tablet/image-earphones-yx1.jpg";
import sm_earphones from "../../assets/home/mobile/image-earphones-yx1.jpg";

import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <div className={styles["featured__grid-container"]}>
        <div className={styles["featured__row-1"]}>
          <Circles />
          <img
            src="../../assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            className={styles.featured__image}
          />
          <div className={styles.featured__content}>
            <h2 className={styles.featured__title}>ZX9 Speakers</h2>
            <p className={styles.featured__text}>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable sound.
            </p>
            <Link to="/product/zx9-speaker" className={styles.featured__link}>
              See Product
            </Link>
          </div>
        </div>

        <div className={styles["featured__row-2"]}>
          <div className={styles.featured__content}>
            <h3 className={styles["featured__title--sm"]}>ZX7 Speaker</h3>
            <Link
              to="/product/zx7-speaker"
              className={`${styles["featured__link"]} ${styles["featured__link--outline"]}`}
            >
              See Product
            </Link>
          </div>
          <picture>
            <source
              media="(min-width: 1080px)"
              srcSet={lg_speaker}
              width="100%"
              height="100%"
            />
            <source
              media="(min-width: 640px)"
              srcSet={md_speaker}
              width="100%"
              height="100%"
            />
            <source
              media="(min-width: 320px)"
              srcSet={sm_speaker}
              width="100%"
              height="100%"
            />
            <img src={lg_speaker} alt="ZX7 Speaker" />
          </picture>
        </div>
        <div className={styles["featured__row-3"]}>
          <picture>
            <source
              media="(min-width: 1080px)"
              srcSet={lg_earphones}
              width="100%"
              height="100%"
            />
            <source
              media="(min-width: 640px)"
              srcSet={md_earphones}
              width="100%"
              height="100%"
            />
            <source
              media="(min-width: 320px)"
              srcSet={sm_earphones}
              width="100%"
              height="100%"
            />
            <img src={lg_earphones} alt="YX1 Wireless Earphones" />
          </picture>
        </div>
        <div className={styles["featured__row-4"]}>
          <div className={styles.featured__content}>
            <h3 className={styles["featured__title--sm"]}>YX1 Earphones</h3>
            <Link
              to="/product/yx1-earphones"
              className={`${styles["featured__link"]} ${styles["featured__link--outline"]}`}
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
