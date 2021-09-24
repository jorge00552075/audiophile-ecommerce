import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import styles from "./ProductDetail.module.css";
import marktwoheadphones from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

import image01 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import image02 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import image03 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import image001 from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import image002 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import image003 from "../assets/shared/desktop/image-zx9-speaker.jpg";

function ProductDetail() {
  return (
    <main>
      {/* PRODUCT CARD */}
      <section className={styles.section}>
        <div className={styles.section__content}>
          <article className={styles.productcard}>
            <img
              src={marktwoheadphones}
              alt="Mark Two headphones"
              className={styles.productcard__image}
            />
            <div className={styles.productcard__content}>
              <span>new product</span>
              <h1 className={styles.productcard__title}>
                xx99 mark ii headphones
              </h1>
              <p className={styles.productcard__text}>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <p className={styles.productcard__price}>$ 2,999</p>
              <form className={styles.productcard__form}>
                <input
                  type="number"
                  id="number"
                  min="0"
                  value="1"
                  onChange={() => console.log()}
                />
                <a
                  href="/marktwoheadphones"
                  className={styles.productcard__link}
                >
                  add to cart
                </a>
              </form>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles["section-features"]}>
        <div className={styles["features__col-1"]}>
          <h2 className={styles.features__heading}>features</h2>
          <p className={styles.features__features}>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className={styles["features__col-2"]}>
          <h2 className={styles.features__heading}>in the box</h2>
          {/* prettier-ignore */}
          <ul className={styles.features__includes}>
            <li>
              <span className={styles.features__quantity}>{`${1} ${"x"}`}</span>
              <span className={styles.features__item}>Headphone Unit</span>
            </li>
            <li>
              <span className={styles.features__quantity}>{`${2} ${"x"}`}</span>
              <span className={styles.features__item}>Replacement Earcups</span>
            </li>
            <li>
              <span className={styles.features__quantity}>{`${1} ${"x"}`}</span>
              <span className={styles.features__item}>User Manual</span>
            </li>
            <li>
              <span className={styles.features__quantity}>{`${1} ${"x"}`}</span>
              <span className={styles.features__item}>3.5mm 5m audio cable</span>
            </li>
            <li>
              <span className={styles.features__quantity}>{`${1} ${"x"}`}</span>
              <span className={styles.features__item}>Travel Bag</span>
            </li>
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles["section-gallery"]}>
        {/* prettier-ignore */}
        <div className={styles.gallery__content}>
          <img src={image01} alt="Man listening to music" className={styles.gallery__first} />
          <img src={image02} alt="Items on table" className={styles.gallery__second} />
          <img src={image03} alt="XX99 Mark II Headphones" className={styles.gallery__third} />
        </div>
      </section>

      {/* OTHER */}
      <section className={styles["section--others"]}>
        <div className={styles.others__content}>
          <div className={styles.others__card}>
            <img
              src={image001}
              alt="XX99 Mark I"
              className={styles.others__image}
            />
            <div className={styles.card__content}>
              <p className={styles.others__name}>XX99 Mark I</p>
              <a
                href="/xx99-mark-one-headphones"
                className={styles.others__link}
              >
                see product
              </a>
            </div>
          </div>
          <div className={styles.others__card}>
            <img src={image002} alt="XX59" className={styles.others__image} />
            <div className={styles.card__content}>
              <p className={styles.others__name}>XX59</p>
              <a href="/xx59-headphones" className={styles.others__link}>
                see product
              </a>
            </div>
          </div>
          <div className={styles.others__card}>
            <img
              src={image003}
              alt="XX99 Mark I"
              className={styles.others__image}
            />
            <div className={styles.card__content}>
              <p className={styles.others__name}>XX99 Mark I</p>
              <a href="/zx9-speaker" className={styles.others__link}>
                see product
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeatureRow />
      <About />
    </main>
  );
}

export default ProductDetail;
