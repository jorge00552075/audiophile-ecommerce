import React from "react";
import { Link } from "react-router-dom";

import styles from "../../pages/Category.module.css";

function ProductCard({ data }) {
  return (
    <React.Fragment>
      {data.reverse === 3 ? (
        <article className={styles.productcard}>
          <div
            className={`${styles.productcard__content} ${styles["m-auto-0"]}`}
          >
            {data.new && <span>new product</span>}
            <h2 className={styles.productcard__title}>{data.name}</h2>
            <h3 className={styles.productcard__text}>{data.description}</h3>
            <Link
              to={`${"/product/"}${data.slug}`}
              className={styles.productcard__link}
            >
              see product
            </Link>
          </div>
          <img
            src={data.image.desktop}
            alt={data.name}
            className={styles.productcard__image}
          />
        </article>
      ) : (
        <article className={styles.productcard}>
          <picture>
            <source
              media="(min-width: 1080px)"
              srcSet={data.categoryImage.desktop}
            />
            <source
              media="(min-width: 689px)"
              srcSet={data.categoryImage.tablet}
            />
            <source
              media="(min-width: 327px)"
              srcSet={data.categoryImage.mobile}
            />
            <img src={data.image.mobile} alt={data.name} />
          </picture>
          <div className={styles.productcard__content}>
            {data.new && <span>new product</span>}
            <h2 className={styles.productcard__title}>{data.name}</h2>
            <h3 className={styles.productcard__text}>{data.description}</h3>
            <Link
              to={`${"/product/"}${data.slug}`}
              className={styles.productcard__link}
            >
              see product
            </Link>
          </div>
        </article>
      )}
    </React.Fragment>
  );
}

export default ProductCard;
