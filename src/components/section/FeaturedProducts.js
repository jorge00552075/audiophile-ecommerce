import { Link } from "react-router-dom";

import { ReactComponent as Circles } from "../../assets/desktop/pattern-circles.svg";
import image2 from "../../assets/desktop/image-speaker-zx7.jpg";
// EARPHONES
import sm_earphones from "../../assets/desktop/image-earphones-yx1.jpg";
import lg_earphones from "../../assets/desktop/image-earphones-yx1 copy.jpg";

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
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
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
          <img
            src="../../assets/home/desktop/image-speaker-zx7.jpg"
            alt="ZX7 Speaker"
            className={styles["featured__image--2"]}
          />
          <img
            src={image2}
            alt="ZX7 Speaker"
            className={styles.image2__tablet}
          />
        </div>

        <div className={styles["featured__row-3"]}>
          {/* YX1 EARPHONES IMGS */}
          {/* <img
            src="../../assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            className={styles.image3__desktop}
          />
          <img
            src={image3}
            alt="YX1 Earphones"
            className={styles.image3__tablet}
          /> */}
          {/* DEMO */}
          <img
            src={lg_earphones}
            srcSet={`${sm_earphones} 300w, ${lg_earphones} 1024w`}
            alt="joiwqjroipepowriue"
            className={styles.image3000}
          />
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
