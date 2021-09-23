import PageTitle from '../components/section/PageTitle';
import FeatureRow from '../components/section/FeatureRow';
import About from '../components/section/About';
import xx99ii from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import xx99i from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';

import xx59 from '../assets/product-xx59-headphones/desktop/image-product.jpg';

// eslint-disable-next-line
import styles from './Headphones.module.css';

function Headphones() {
  // prettier-ignore
  return (
    <main>
      <PageTitle title="headphones" />
      <section className={styles.section}>
        <div className={styles.section__content}>

        
        <article className={styles.productcard}>
          <img
            src={xx99ii}
            alt="xx99 mark two headphones"
            className={styles.productcard__image}
          />
          <div className={styles.productcard__content}>
            <span>new product</span>
            <h2 className={styles.productcard__title}>xx99 mark ii headphones</h2>
            <p className={styles.productcard__text}>
              The new XX99 mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <a href="/xx99" className={styles.productcard__link}>see product</a>
          </div>
        </article>
        {/* 2 */}
        <article className={styles.productcard}>
          <div className={`${styles.productcard__content} ${styles["m-auto-0"]}`}>
            <span>new product</span>
            <h2 className={styles.productcard__title}>xx99 mark ii headphones</h2>
            <p className={styles.productcard__text}>
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>
            <a href="/xx99" className={styles.productcard__link}>see product</a>
          </div>
          <img
            src={xx99i}
            alt="xx99 mark one headphones"
            className={styles.productcard__image}
          />
        </article>
        {/* 3 */}
        <article className={styles.productcard}>
          <img
            src={xx59}
            alt="xx59 headphones"
            className={styles.productcard__image}
          />
          <div className={styles.productcard__content}>
            <h2 className={styles.productcard__title}>xx59 headphones</h2>
            <p className={styles.productcard__text}>
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <a href="/xx59" className={styles.productcard__link}>see product</a>
          </div>
        </article>
        </div>
      </section>
      <FeatureRow />
      <About />
    </main>
  );
}

export default Headphones;
