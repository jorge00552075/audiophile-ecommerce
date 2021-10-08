// prettier-ignore
import React, { useState, useEffect, useContext, useRef, useLayoutEffect } from "react";

import { Link, useParams } from "react-router-dom";

import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import CartContext from "../context/cart-context";
import CartModal from "../components/section/CartModal";

import dataJson from "../data.json";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  // HOOKS
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();

  useEffect(() => {
    const product = dataJson.filter((item) => item.slug === params.slug);
    setData(product[0]);
  }, [params.slug]);

  const context = useContext(CartContext);
  const inputEl = useRef(null);

  useLayoutEffect(() => window.scrollTo(0, 0));

  // EVENT HANDLERS
  function changeCartHandler(e) {
    e.preventDefault();

    if (quantity === 0 && e.target.outerText === "-") return;
    e.target.outerText === "+"
      ? setQuantity((prevState) => prevState + 1)
      : setQuantity((prevState) => prevState - 1);
  }

  function addToCartHandler(e) {
    e.preventDefault();

    context.addItem({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: +quantity,
      image: data.image.mobile,
    });
    setShowModal(true);
  }
  const toggleModal = () => setShowModal(false);

  if (data === null) return <div className="loader"></div>;

  return (
    <React.Fragment>
      {showModal && (
        <CartModal toggleModal={toggleModal} onClose={toggleModal} />
      )}
      <main>
        {/* PRODUCT CARD */}
        <section className={styles.section}>
          <div className={styles.section__content}>
            <article className={styles.productcard}>
              {/* prettier-ignore */}
              <picture>
                <source media="(min-width: 1080px)" srcSet={data.image.desktop}/>
                <source media="(min-width: 640px)" srcSet={data.image.tablet} />
                <source media="(min-width: 327px)" srcSet={data.image.mobile} />
                <img src={data.image.desktop} alt={data.image.name} />
              </picture>
              <div className={styles.productcard__content}>
                {data.new && <span>new product</span>}
                <h1 className={styles.productcard__title}>{data.name}</h1>
                <p className={styles.productcard__text}>{data.description}</p>
                <p className={styles.productcard__price}>$ {data.price}</p>
                <form className={styles.productcard__form}>
                  <div className={styles["quantity-toggle"]}>
                    <button onClick={changeCartHandler}>-</button>
                    <input
                      type="text"
                      id="number"
                      value={quantity}
                      ref={inputEl}
                      readOnly
                    />
                    <button onClick={changeCartHandler}>+</button>
                  </div>
                  <button
                    type="submit"
                    className={styles.productcard__btn}
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
            <h3 className={styles.features__features}>{data.features}</h3>
          </div>
          <div className={styles["features__col-2"]}>
            <h2 className={styles.features__heading}>in the box</h2>
            {/* prettier-ignore */}
            <ul className={styles.features__includes}>
            {data.includes.map((item, i) => {
              return (
                <li key={Math.trunc(Math.random() * 10000)}>
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
          <p className={styles.others__text}>you may also like</p>
          <div className={styles.others__content}>
            {data.others.map((other, i) => {
              return (
                <div
                  className={styles.others__card}
                  key={Math.trunc(Math.random() * 10000)}
                >
                  <picture>
                    <source
                      media="(min-width: 1080px)"
                      srcSet={data.others[i].image.desktop}
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={data.others[i].image.tablet}
                    />
                    <source
                      media="(min-width: 327px)"
                      srcSet={data.others[i].image.mobile}
                    />
                    <img
                      src={data.others[i].image.tablet}
                      alt={data.others[i].name}
                    />
                  </picture>
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
    </React.Fragment>
  );
}

export default ProductDetail;
