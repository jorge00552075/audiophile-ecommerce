import styles from "./Summary.module.css";
import image from "../../assets/cart/image-xx99-mark-two-headphones.jpg";

function Summary() {
  return (
    <div className={styles.checkout__summary}>
      <h3 className={styles.summary__title}>summary</h3>
      <div>
        <article className={styles.summary__item}>
          <img src={image} alt="headphones" className={styles.summary__image} />
          <div className={styles.summary__item__container}>
            <h4 className={styles.summary__name}>xx99 mk ii</h4>
            <span className={styles.summary__price}>{`${"$"} ${2999}`}</span>
          </div>
          <div className={styles.summary__quantity}>{"x"}1</div>
        </article>
        <article className={styles.summary__item}>
          <img src={image} alt="headphones" className={styles.summary__image} />
          <div className={styles.summary__item__container}>
            <h4 className={styles.summary__name}>xx99 mk ii</h4>
            <span className={styles.summary__price}>{`${"$"} ${2999}`}</span>
          </div>
          <div className={styles.summary__quantity}>{"x"}1</div>
        </article>
        <article className={styles.summary__item}>
          <img src={image} alt="headphones" className={styles.summary__image} />
          <div className={styles.summary__item__container}>
            <h4 className={styles.summary__name}>xx99 mk ii</h4>
            <span className={styles.summary__price}>{`${"$"} ${2999}`}</span>
          </div>
          <div className={styles.summary__quantity}>{"x"}1</div>
        </article>
      </div>
      <div className={styles.summary__price__total}>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>total</p>
          <span>{`${"$"} ${5396}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>shipping</p>
          <span>{`${"$"} ${50}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>vat included</p>
          <span>{`${"$"} ${1079}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>grand total</p>
          <span>{`${"$"} ${5446}`}</span>
        </div>
      </div>
      <button type="submit" className={styles.btn}>
        continue & pay
      </button>
    </div>
  );
}

export default Summary;
