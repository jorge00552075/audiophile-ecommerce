import styles from '../../pages/Category.module.css';

function ProductCard({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        {!data.reversed ? (
          <article className={styles.productcard}>
            <img
              src={data.image}
              alt={data.alt}
              className={styles.productcard__image}
            />
            <div className={styles.productcard__content}>
              {data.newproduct && <span>new product</span>}
              <h2 className={styles.productcard__title}>{data.title}</h2>
              <p className={styles.productcard__text}>{data.text}</p>
              <a href={data.href} className={styles.productcard__link}>
                see product
              </a>
            </div>
          </article>
        ) : (
          <article className={styles.productcard}>
            <div
              className={`${styles.productcard__content} ${styles['m-auto-0']}`}
            >
              {data.new && <span>new product</span>}
              <h2 className={styles.productcard__title}>{data.title}</h2>
              <p className={styles.productcard__text}>{data.text}</p>
              <a href={data.href} className={styles.productcard__link}>
                see product
              </a>
            </div>
            <img
              src={data.image}
              alt={data.alt}
              className={styles.productcard__image}
            />
          </article>
        )}
      </div>
    </section>
  );
}

export default ProductCard;
