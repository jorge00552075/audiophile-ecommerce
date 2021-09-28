import { useContext } from "react";
import CartContext from "../../context/cart-context";
import styles from "./Summary.module.css";

function Summary(props) {
  const context = useContext(CartContext);

  const total = context.cart.reduce((t, i) => t + i.price * i.quantity, 0);
  const vat = Math.round(
    context.cart.reduce((t, i) => t + i.price * i.quantity, 0) * 0.05
  );
  const grandTotal = total + vat;

  function onClickHandler() {
    props.onSubmit();
  }

  return (
    <div className={styles.checkout__summary}>
      <h3 className={styles.summary__title}>summary</h3>
      <div>
        {context.cart.map((item) => {
          return (
            <article
              key={Math.trunc(Math.random() * 1000)}
              className={styles.summary__item}
            >
              <img
                src={item.image}
                alt="headphones"
                className={styles.summary__image}
              />
              <div className={styles.summary__item__container}>
                <h4 className={styles.summary__name}>{item.name}</h4>
                <span className={styles.summary__price}>{`${"$"}${
                  item.price
                }`}</span>
              </div>
              <div className={styles.summary__quantity}>{`${"x"}${
                item.quantity
              }`}</div>
            </article>
          );
        })}
      </div>
      <div className={styles.summary__price__total}>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>total</p>
          <span>{`${"$"} ${total}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>shipping</p>
          <span>{`${"$"} ${50}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>vat included</p>
          <span>{`${"$"} ${vat}`}</span>
        </div>
        <div className={styles.summary__group}>
          <p className={styles.summary__text}>grand total</p>
          <span>{`${"$"} ${grandTotal}`}</span>
        </div>
      </div>
      <button type="submit" className={styles.btn} onClick={onClickHandler}>
        continue & pay
      </button>
    </div>
  );
}

export default Summary;
