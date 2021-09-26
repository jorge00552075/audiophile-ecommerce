import { Link } from "react-router-dom";
import styles from "./FeatureRow.module.css";

function FeatureRow() {
  return (
    <section className={styles.featurerow}>
      <div className={styles.featurerow__content}>
        {/* Headphones */}
        <div className={styles.feature__card}>
          <img
            src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones-thumbnail"
            className={styles.feature__image}
          />
          <div className={styles.feature__content}>
            <p>headphones</p>
            <Link to="/headphones" className={styles.feature__link}>
              shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Speakers */}
        <div className={styles.feature__card}>
          <img
            src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers-thumbnail"
            className={styles.feature__image}
          />
          <div className={styles.feature__content}>
            <p>speakers</p>
            <Link to="/speakers" className={styles.feature__link}>
              shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Earphones */}
        <div className={styles.feature__card}>
          <img
            src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones-thumbnail"
            className={styles.feature__image}
          />
          <div className={styles.feature__content}>
            <p>earphones</p>
            <Link to="/earphones" className={styles.feature__link}>
              shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureRow;
