import React from "react";
import { useState } from "react";
import { ReactComponent as Cashicon } from "../../src/cash.svg";
import styles from "./Checkout.module.css";

import Summary from "../components/section/Summary";
import CheckoutModal from "../components/section/CheckoutModal";

function Checkout() {
  // eslint-disable-next-line
  const [showInstructions, setShowInstructions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function onSubmitHandler(event) {
    event.preventDefault();
    setShowModal(true);
  }

  return (
    <React.Fragment>
      {showModal && <CheckoutModal />}
      <main>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.form__content}>
            <h1>checkout</h1>
            <h2 className={styles.form__section__title}>billing details</h2>
            <div className={styles.form__section}>
              <div className={styles.form__group}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jorge Sendejo Jr"
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Jorge00552075@Gmail.com"
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="telephone">Phone Number</label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="202-555-0136"
                />
              </div>
            </div>
            <h2 className={styles.form__section__title}>shipping info</h2>
            <div className={styles.form__section}>
              <div
                className={`${styles.form__group} ${styles["col-span-full"]}`}
              >
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  placeholder="10001"
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="New York City"
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                />
              </div>
            </div>
            <h2 className={styles.form__section__title}>payment details</h2>
            <div className={styles.form__section}>
              <label htmlFor="payment">Payment Method</label>
              <div>
                <div className={styles.form__group__radio}>
                  <input type="radio" name="payment" id="payment" />
                  <label htmlFor="payment">e-Money</label>
                </div>
                <div className={styles.form__group__radio}>
                  <input type="radio" name="payment" id="payment" />
                  <label htmlFor="payment">Cash on Delivery</label>
                </div>
              </div>
              {showInstructions ? (
                <div className={styles.form__group__cash}>
                  <Cashicon />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              ) : (
                <React.Fragment>
                  <div className={styles.form__group}>
                    <label htmlFor="e-number">e-Money Number</label>
                    <input
                      type="number"
                      name="e-number"
                      id="e-number"
                      placeholder="238521993"
                    />
                  </div>
                  <div>
                    <div className={styles.form__group}>
                      <label htmlFor="e-pin">e-Money PIN</label>
                      <input
                        type="number"
                        name="e-pin"
                        id="e-pin"
                        placeholder="6891"
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <Summary onSubmit={onSubmitHandler} />
        </form>
      </main>
    </React.Fragment>
  );
}

export default Checkout;
