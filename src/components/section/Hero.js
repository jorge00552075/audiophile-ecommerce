import React from 'react';
import styles from './Hero.module.css';

import imageHero from '../../assets/home/desktop/image-hero.jpg';

function Hero() {
  return (
    <React.Fragment>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <img
            src={imageHero}
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
            <a href="xx99-headphones" className={styles.hero__btn}>
              See product
            </a>
          </div>
          <div className={styles.hero__col_2}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
