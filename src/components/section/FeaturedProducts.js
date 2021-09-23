import styles from './FeaturedProducts.module.css';
import speakerzx9 from '../../assets/home/desktop/image-speaker-zx9.png';
import speakerzx7 from '../../assets/home/desktop/image-speaker-zx7.jpg';
import earphones from '../../assets/home/desktop/image-earphones-yx1.jpg';

import circles from '../../assets/home/desktop/pattern-circles.svg';

function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <div className={styles['featured__grid-container']}>
        <div className={styles['featured__row-1']}>
          <img
            src={circles}
            alt="pattern circles"
            className={styles['pattern-circles']}
          />
          <img
            src={speakerzx9}
            alt="ZX9 Speaker"
            className={styles.featured__image}
          />
          <div className={styles.featured__content}>
            <h2 className={styles.featured__title}>ZX9 Speakers</h2>
            <p className={styles.featured__text}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <a href="/zx9-speaker" className={styles.featured__link}>
              See Product
            </a>
          </div>
        </div>

        <div className={styles['featured__row-2']}>
          <div className={styles.featured__content}>
            <h3 className={styles['featured__title--sm']}>ZX7 Speaker</h3>
            <a
              href="/zx7-speaker"
              className={`${styles['featured__link']} ${styles['featured__link--outline']}`}
            >
              See Product
            </a>
          </div>
          <img
            src={speakerzx7}
            alt="ZX7 Speaker"
            className={styles['featured__image--2']}
          />
        </div>

        <div className={styles['featured__row-3']}>
          <img src={earphones} alt="YX1 Earphones" />
        </div>
        <div className={styles['featured__row-4']}>
          <div className={styles.featured__content}>
            <h3 className={styles['featured__title--sm']}>YX1 Earphones</h3>
            <a
              href="/yx1-earphones"
              className={`${styles['featured__link']} ${styles['featured__link--outline']}`}
            >
              See Product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
