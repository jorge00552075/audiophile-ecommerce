import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <main>
      <form className={styles.form}>
        <h1>checkout</h1>
        <div className={styles.form__section__billing}>
          {/* <h2 className={styles.form__section__title}>billing details</h2> */}
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
        <div className={styles.form__section__shipping}>
          {/* <h2 className={styles.form__section__title}>shipping info</h2> */}
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
        <div className={styles.form__section__payment}>
          <h2 className={styles.form__section__title}>payment details</h2>
          <div className={styles.form__group}>
            <label htmlFor="payment">e-Money</label>
            <input type="radio" name="payment" id="payment" />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="payment">Cash on Delivery</label>
            <input type="radio" name="payment" id="payment2" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Checkout;
