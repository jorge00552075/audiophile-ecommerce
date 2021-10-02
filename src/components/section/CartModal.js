import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";

import styles from "./CartModal.module.css";

const Backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.onClose} />
);

function ModalOverylay(props) {
  const context = useContext(CartContext);
  const totalItems = context.cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = context.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // SHOW MODAL
  const onClickHandler = () => props.toggleModal();
  // ADD - REMOVE - REMOVE ALL ITEMS

  function changeCartHandler(e) {
    const el = e.target.nextElementSibling ?? e.target.previousElementSibling;

    const item = context.cart.find((item, index) => item.id === +el.id);

    if (e.target.outerText === "+") {
      context.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image.mobile,
      });
    } else {
      context.removeItem({ name: item.name, quantity: 1 });
    }
  }

  const removeAllItems = () => context.removeAll();

  return (
    <div className={styles.cart__modal}>
      <div className={styles.box__1}>
        <span className={styles.total__items}>CART ({totalItems})</span>
        <button className={styles["remove-all__btn"]} onClick={removeAllItems}>
          Remove All
        </button>
      </div>
      <div className={styles.cart__items__container}>
        {context.cart.map((item, i) => {
          return (
            <div
              className={styles.cart__item}
              key={Math.trunc(Math.random() * 10000)}
            >
              <img
                src={item.image}
                alt={item.name}
                className={styles.cart__item__image}
              />
              <div className={styles.cart__item__info}>
                <span className={styles.cart__item__name}>{item.name}</span>
                <span className={styles.cart__item__price}>$ {item.price}</span>
              </div>
              <div className={styles["quantity-toggle"]}>
                <button onClick={changeCartHandler}>-</button>
                <input
                  type="text"
                  id={item.id}
                  value={context.cart[i].quantity}
                  readOnly
                />
                <button onClick={changeCartHandler}>+</button>
              </div>
            </div>
          );
        })}
        <div className={styles["cart__total-price"]}>
          <span className={styles.cart__text}>total</span>
          <span className={styles.cart__total}>$ {totalPrice}</span>
        </div>
        <Link
          to="/checkout"
          className={styles.checkout__link}
          onClick={onClickHandler}
        >
          checkout
        </Link>
      </div>
    </div>
  );
}

function CartModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverylay toggleModal={props.toggleModal} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default CartModal;
