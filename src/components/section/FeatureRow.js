import { Link } from "react-router-dom";
import styles from "./FeatureRow.module.css";
import { ReactComponent as Rarr } from "../../assets/shared/desktop/icon-arrow-right.svg";

function FeatureRow() {
  const categories = ["headphones", "speakers", "earphones"];

  return (
    <section className={styles.featurerow}>
      <div className={styles.featurerow__content}>
        {categories.map((item, i) => {
          return (
            <div className={styles.feature__card} key={i}>
              <img
                src={`../assets/shared/desktop/image-category-thumbnail-${item}.png`}
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
