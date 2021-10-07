import { Link } from "react-router-dom";

import lg_hero from "../../assets/home/desktop/image-hero.jpg";
import md_hero from "../../assets/home/tablet/image-header.jpg";
import sm_hero from "../../assets/home/mobile/image-header.jpg";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <picture>
          <source media="(min-width: 896px)" srcSet={lg_hero} />
          <source media="(min-width: 640px)" srcSet={md_hero} />
          <source media="(min-width: 320px)" srcSet={sm_hero} />
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
    </div>
  );
}

export default Hero;
