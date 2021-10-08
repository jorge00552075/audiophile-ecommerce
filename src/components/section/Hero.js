import { Link } from "react-router-dom";

import lg_hero from "../../assets/home/desktop/image-hero.webp";
import md_hero from "../../assets/home/tablet/image-header.webp";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <picture>
          <source media="(min-width: 1080px)" srcSet={lg_hero} />
          <source media="(min-width: 320px)" srcSet={md_hero} />
          <img src={lg_hero} alt="XX99 Mark II Headphones" />
        </picture>
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
    </section>
  );
}

export default Hero;
