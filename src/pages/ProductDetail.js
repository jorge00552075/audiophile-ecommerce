import { useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import dataJson from "../data.json";
import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const [data, setData] = useState(null);
  let location = useLocation();
  const productid = location.pathname.split("/");

  useEffect(() => {
    const product = dataJson.filter((item) => item.slug === productid[2]);
    setData(product[0]);
  }, [location.pathname, productid]);

  useLayoutEffect(() => window.scrollTo(0, 0));

  if (data === null) {
    return <h1>NO DATA</h1>;
  }

  return (
    <main>
      {/* PRODUCT CARD */}
      <section className={styles.section}>
        <div className={styles.section__content}>
          <article className={styles.productcard}>
            <img
              src={data.image.desktop}
              alt={data.image.name}
              className={styles.productcard__image}
            />
            <div className={styles.productcard__content}>
              {data.new && <span>new product</span>}
              <h1 className={styles.productcard__title}>{data.name}</h1>
              <p className={styles.productcard__text}>{data.description}</p>
              <p className={styles.productcard__price}>$ {data.price}</p>
              <form className={styles.productcard__form}>
                <input
                  type="number"
                  id="number"
                  min="0"
                  value="1"
                  onChange={() => console.log("ADD 1")}
                />
                <button
                  type="submit"
                  className={styles.productcard__link}
                  onClick={() => console.log("ADD TO CART")}
                >
                  add to cart
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles["section-features"]}>
        <div className={styles["features__col-1"]}>
          <h2 className={styles.features__heading}>features</h2>
          <p className={styles.features__features}>{data.features}</p>
        </div>
        <div className={styles["features__col-2"]}>
          <h2 className={styles.features__heading}>in the box</h2>
          {/* prettier-ignore */}
          <ul className={styles.features__includes}>
            {data.includes.map((item, i) => {
              return (
                <li key={Math.trunc(Math.random() * 1000)}>
                  <span className={styles.features__quantity}>{`${data.includes[i].quantity} ${"x"}`}</span>
                  <span className={styles.features__item}>{data.includes[i].item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles["section-gallery"]}>
        <div className={styles.gallery__content}>
          <img
            src={data.gallery.first.desktop}
            alt={data.name}
            className={styles.gallery__first}
          />
          <img
            src={data.gallery.second.desktop}
            alt={data.name}
            className={styles.gallery__second}
          />
          <img
            src={data.gallery.third.desktop}
            alt={data.name}
            className={styles.gallery__third}
          />
        </div>
      </section>

      {/* OTHERS */}
      <section className={styles["section--others"]}>
        <div className={styles.others__content}>
          {data.others.map((other, i) => {
            return (
              <div
                className={styles.others__card}
                key={Math.trunc(Math.random() * 1000)}
              >
                <img
                  src={data.others[i].image.desktop}
                  alt={data.others[i].name}
                  className={styles.others__image}
                />
                <div className={styles.card__content}>
                  <p className={styles.others__name}>{data.others[i].name}</p>
                  <Link
                    to={`${"/product/"}${data.others[i].slug}`}
                    className={styles.others__link}
                  >
                    see product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FeatureRow />
      <About />
    </main>
  );
}

export default ProductDetail;
