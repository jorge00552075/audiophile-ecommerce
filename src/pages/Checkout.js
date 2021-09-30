import React from "react";
import { useState } from "react";
import { ReactComponent as Cashicon } from "../../src/cash.svg";
import Summary from "../components/section/Summary";
import CheckoutModal from "../components/section/CheckoutModal";
import styles from "./Checkout.module.css";

function Checkout() {
  // eslint-disable-next-line
  const [showInstructions, setShowInstructions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // FORM VALIDATION
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: null,
    address: "",
    zipcode: null,
    city: "",
    country: "",
    enumber: null,
    epin: null,
  });

  const [nameTouched, setNameTouched] = useState(false);
  const nameValid = data.name.trim() !== "";
  const nameInvalid = !nameValid && nameTouched;
  let formValid = false;

  if (nameValid) {
    formValid = true;
  }

  // onChange
  function handleChange(e) {
    setData({ ...data, address: e.target.value });
  }
  console.log(data);
  // onBlur
  function handleBlur(e) {
    setNameTouched(true);
  }
  // onSubmit
  function handleSubmit(e) {
    e.preventDefault();

    setNameTouched(true);
    if (!nameValid) return;
    // setName("");
    setData.name("");

    setNameTouched(false);

    // CART MODAL
    setShowModal(true);
  }

  const errorClasses = nameInvalid
    ? `${styles.form__group} ${styles.invalid}`
    : `${styles.form__group}`;

  return (
    <React.Fragment>
      {showModal && <CheckoutModal />}
      <main>
        {/* FORM ONSUBMIT */}
        <form className={styles.form}>
          <div className={styles.form__content}>
            <h1>checkout</h1>
            <h2 className={styles.form__section__title}>billing details</h2>
            <div className={styles.form__section}>
              <div className={errorClasses}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={data.name}
                />
                {nameInvalid && (
                  <p className={styles["error-text"]}>NAME MUST NOT BE EMPTY</p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={handleChange}
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
                    <label htmlFor="enumber">e-Money Number</label>
                    <input
                      type="number"
                      name="enumber"
                      id="enumber"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className={styles.form__group}>
                      <label htmlFor="e-pin">e-Money PIN</label>
                      <input
                        type="number"
                        name="epin"
                        id="epin"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <Summary onSubmit={handleSubmit} />
        </form>
      </main>
    </React.Fragment>
  );
}

export default Checkout;
