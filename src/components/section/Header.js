import { useContext } from "react";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";

import styles from "./Header.module.css";

function Header() {
  const context = useContext(CartContext);
  const total = context.cart.length;

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <nav className={styles.header__nav}>
          <Link to="/" className={styles.nav__link}>
            HOME
          </Link>
          <Link to="/headphones" className={styles.nav__link}>
            HEADPHONES
          </Link>
          <Link to="/speakers" className={styles.nav__link}>
            SPEAKERS
          </Link>
          <Link to="/earphones" className={styles.nav__link}>
            EARPHONES
          </Link>
        </nav>
        <Link to={total ? "/checkout" : "#"} className={styles.header__link}>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
