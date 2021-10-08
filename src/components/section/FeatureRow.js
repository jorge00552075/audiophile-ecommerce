import { Link } from "react-router-dom";

// SRC FOLDER
import { ReactComponent as Rarr } from "../../assets/shared/desktop/icon-arrow-right.svg";

import styles from "./FeatureRow.module.css";

function FeatureRow() {
  const categories = ["headphones", "speakers", "earphones"];

  return (
    <section className={styles.featurerow}>
      <div className={styles.featurerow__content}>
        {categories.map((item, i) => {
          return (
            <div
              className={styles.feature__card}
              key={Math.trunc(Math.random() * 10000)}
            >
              <img
                src={`../../assets/shared/desktop/image-category-thumbnail-${item}.webp`}
                alt={`${item}-thumbnail`}
                className={styles.feature__image}
              />
              <div className={styles.feature__content}>
                <p>{item}</p>
                <Link to={`/${item}`} className={styles.feature__link}>
                  shop
                  <Rarr />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureRow;
