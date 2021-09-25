import { Link } from "react-router-dom";
import styles from "../../pages/Category.module.css";

function ProductCard({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        {!data.reversed ? (
          <article className={styles.productcard}>
            <img
              src={data.image.desktop}
              alt={data.name}
              className={styles.productcard__image}
            />
            <div className={styles.productcard__content}>
              {data.new && <span>new product</span>}
              <h2 className={styles.productcard__title}>{data.name}</h2>
              <p className={styles.productcard__text}>{data.description}</p>
              <Link
                to={`${"/product/"}${data.slug}`}
                className={styles.productcard__link}
              >
                see product
              </Link>
            </div>
          </article>
        ) : (
          <article className={styles.productcard}>
            <div
              className={`${styles.productcard__content} ${styles["m-auto-0"]}`}
            >
              {data.new && <span>new product</span>}
              <h2 className={styles.productcard__title}>{data.title}</h2>
              <p className={styles.productcard__text}>{data.text}</p>
              <Link
                to={`${"/product/"}${data.slug}`}
                className={styles.productcard__link}
              >
                see product
              </Link>
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
