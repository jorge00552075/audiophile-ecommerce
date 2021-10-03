import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";

import styles from "./CheckoutModal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} />;
}

function ModalOverylay(props) {
  const context = useContext(CartContext);

  const totalItems = context.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = context.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const vat = totalPrice * 0.2;
  const grandTotal = totalPrice + vat;

  // prettier-ignore
  return (
    <div className={styles.modal}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.modal__checkmark}
      >
        <circle cx="32" cy="32" r="32" fill="#D87D4A" />
        <path
          d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
      <h3>
        thank you <br />
        for your order
      </h3>
      <p className={styles.modal__text}>
        You will receive a email confirmation shortly.
      </p>
      <div className={styles.modal__grid__container}>
        <div className={styles.content__col__1}>
          <article className={styles.summary__item}>
            <img
              src={context.cart[0].image}
              alt="headphones"
              className={styles.summary__image}
            />
            <div>
              <h4 className={styles.summary__name}>{context.cart[0].name}</h4>
              <span className={styles.summary__price}>{`${"$"}${context.cart[0].price}`}</span>
            </div>
            <div className={styles.summary__quantity}>x{totalItems}</div>
          </article>
          <p>and {totalItems - 1} other item(s)</p>
        </div>
        <div className={styles.content__col__2}>
          <p>grand total</p>
          <span>$ {grandTotal}</span>
        </div>
      </div>
      <Link to="/" className={styles.home__link} onClick={() => context.removeAll()}>back to home</Link>
    </div>
  );
}

function CheckoutModal(props) {
  // prettier-ignore
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverylay />, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
}

export default CheckoutModal;
