import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ReactComponent as Cashicon } from "../../src/cash.svg";
import CheckoutModal from "../components/section/CheckoutModal";
import Summary from "../components/section/Summary";
import CartContext from "../context/cart-context";

import styles from "./Checkout.module.css";

function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const context = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { payment: "emoney" } });

  function handleChange(e) {
    if (e.target.value === "emoney") {
      setShowInstructions(false);
    } else {
      setShowInstructions(true);
    }
  }

  function onSubmit(data) {
    if (context.cart.length === 0) return;
    console.log(data);
    setShowModal(true);
  }

  return (
    <React.Fragment>
      {showModal && <CheckoutModal />}
      <main>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className={styles.link__back}>
            Go Back
          </Link>
          <div className={styles.form__content}>
            <h1>checkout</h1>
            <h2 className={styles.form__section__title}>billing details</h2>
            <div className={styles.form__section}>
              <div className={styles.form__group}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Alexei"
                />
                {errors.name && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="alexei@gmail.com"
                />
                {errors.email && (
                  <p className={styles["error-message"]}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    valueAsNumber: true,
                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                  })}
                  placeholder="+1 (202) 555-0136"
                />
                {errors.phone && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
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
                  id="address"
                  {...register("address", { required: true })}
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="number"
                  id="zipcode"
                  {...register("zipcode", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="10001"
                />
                {errors.zipcode && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  {...register("city", { required: true })}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  {...register("country", { required: true })}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className={styles["error-message"]}>
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <h2 className={styles.form__section__title}>payment details</h2>
            <div className={styles.form__section}>
              <label htmlFor="payment1">Payment Method</label>
              <div>
                <div className={styles.form__radiogroup}>
                  <input
                    type="radio"
                    id="payment1"
                    {...register("payment", { required: true })}
                    value="emoney"
                    onChange={handleChange}
                  />
                  <label htmlFor="payment1">e-Money</label>
                </div>
                <div className={styles.form__radiogroup}>
                  <input
                    type="radio"
                    id="payment2"
                    {...register("payment", { required: true })}
                    name="payment"
                    value="cash"
                    onChange={handleChange}
                  />
                  <label htmlFor="paymen2">Cash on Delivery</label>
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
                      id="enumber"
                      {...register("enumber", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="238521993"
                    />
                    {errors.enumber && (
                      <p className={styles["error-message"]}>
                        This field is required
                      </p>
                    )}
                  </div>
                  <div>
                    <div className={styles.form__group}>
                      <label htmlFor="e-pin">e-Money PIN</label>
                      <input
                        type="number"
                        id="epin"
                        {...register("epin", {
                          required: "Please enter your pin number",
                          valueAsNumber: true,
                        })}
                        placeholder="6891"
                      />
                      {errors.epin && (
                        <p className={styles["error-message"]}>
                          {errors.epin.message}
                        </p>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <Summary />
        </form>
      </main>
    </React.Fragment>
  );
}

export default Checkout;
