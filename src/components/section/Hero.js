import { Link } from "react-router-dom";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <img
          src="../../assets/home/desktop/image-hero.jpg"
          alt="XX99 Mark II Headphones"
          className={styles.hero__image}
        />
        <div className={styles.hero__product}>
          <span>New product</span>
          <h1 className={styles.hero__h1}>XX99 Mark II Headphones</h1>
          <p className={styles.hero__text}>
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <Link
            to="/product/xx99-mark-two-headphones"
            className={styles.hero__link}
          >
            See product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
