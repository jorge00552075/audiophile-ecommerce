import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

import imagehero from "../../images/desktop/image-hero.jpg";

function Hero() {
  return (
    <React.Fragment>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <img
            src={imagehero}
            alt="XX99 Mark II Headphones"
            className={styles.hero__image}
          />
          <div className={styles.hero__col_1}>
            <span>New product</span>
            <h1 className={styles.hero__h1}>XX99 Mark II Headphones</h1>
            <p className={styles.hero__text}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to="/product/xx99-mark-two-headphones"
              className={styles.hero__btn}
            >
              See product
            </Link>
          </div>
          <div className={styles.hero__col_2}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
