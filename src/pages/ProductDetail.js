// prettier-ignore
import { useState, useEffect, useContext, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import styles from "./ProductDetail.module.css";
import dataJson from "../data.json";
import CartContext from "../context/cart-context";

function ProductDetail() {
  // HOOKS
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  let location = useLocation();

  useEffect(() => {
    const productid = location.pathname.split("/");
    const product = dataJson.filter((item) => item.slug === productid[2]);
    setData(product[0]);
  }, [location.pathname]);

  const context = useContext(CartContext);
  const inputEl = useRef(null);

  useLayoutEffect(() => window.scrollTo(0, 0));

  // EVENT HANDLERS
  function changeCartHandler() {
    setQuantity(inputEl.current.value);
  }

  function addToCartHandler(e) {
    e.preventDefault();
    // prettier-ignore
    context.addItem({ name: data.name, price: data.price, quantity: +quantity, image: data.image.mobile });
  }

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
                  value={quantity}
                  ref={inputEl}
                  onChange={changeCartHandler}
                />
                <button
                  type="submit"
                  className={styles.productcard__link}
                  onClick={addToCartHandler}
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
