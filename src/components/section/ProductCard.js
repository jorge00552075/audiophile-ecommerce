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
            <p className={styles.productcard__text}>{data.description}</p>
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
          {/* prettier-ignore */}
          <picture>
            <source media="(min-width: 1024px)" srcSet={data.categoryImage.desktop} width="100%" height="100%"/>
            <source media="(min-width: 375px)" srcSet={data.categoryImage.tablet}  width="100%" height="100%"/>
            <img src={data.image.tablet} alt="ZX7 Speaker" />
          </picture>
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
      )}
    </React.Fragment>
  );
}

export default ProductCard;
