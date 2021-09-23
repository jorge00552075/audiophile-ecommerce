import styles from './About.module.css';
import aboutimage from '../../assets/shared/desktop/image-best-gear.jpg';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.col__1}>
          <div className={styles.col__1__content}>
            <h2 className={styles.about__heading}>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p className={styles.about__text}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers and audio
              accessories. We have a large showroom and luxury demostration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy you portable
              audio equipment.
            </p>
          </div>
        </div>
        <div>
          <img
            src={aboutimage}
            alt="Man listening to music on headphones"
            className={styles.about__image}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
