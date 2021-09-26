import React from "react";
import { useState } from "react";
import { ReactComponent as Cashicon } from "../../src/cash.svg";
import styles from "./Checkout.module.css";

import Summary from "../components/section/Summary";

function Checkout() {
  // eslint-disable-next-line
  const [showInstructions, setShowInstructions] = useState(false);

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("SUBMITTED");
  }

  return (
    <main>
      <div className={styles.checkout__wrapper}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
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
          {/* SHIPPING */}
          <h2 className={styles.form__section__title}>shipping info</h2>
          <div className={styles.form__section}>
            <div className={`${styles.form__group} ${styles["col-span-full"]}`}>
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
          {/* PAYMENT */}
          <h2 className={styles.form__section__title}>payment details</h2>
          <div className={styles.form__section}>
            <label htmlFor="payment">Payment Method</label>
            <div>
              <div className={styles["form__group--radio"]}>
                <input type="radio" name="payment" id="payment" />
                <label htmlFor="payment">e-Money</label>
              </div>
              <div className={styles["form__group--radio"]}>
                <input type="radio" name="payment" id="payment" />
                <label htmlFor="payment">Cash on Delivery</label>
              </div>
            </div>
            {/* SHOW CASH ON DELIVERY INSTRUCTIONS */}
            {showInstructions ? (
              <div className={styles.form__group__cash}>
                <Cashicon />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            ) : (
              <React.Fragment>
                <div className={styles.form__group}>
                  <label htmlFor="">e-Money Number</label>
                  <input
                    type="number"
                    name="e-number"
                    id="e-number"
                    placeholder="238521993"
                  />
                </div>
                <div>
                  <div className={styles.form__group}>
                    <label htmlFor="">e-Money PIN</label>
                    {/* prettier-ignore */}
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
        </form>
        <Summary />
      </div>
    </main>
  );
}

export default Checkout;
