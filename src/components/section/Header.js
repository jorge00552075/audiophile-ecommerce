import { useContext } from "react";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";

// SRC FOLDER
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Icon } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Menu } from "../../assets/shared/tablet/icon-hamburger.svg";

import styles from "./Header.module.css";

function Header() {
  const context = useContext(CartContext);
  const total = context.cart.length;

  function handleChange() {
    // ...
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <button className={styles.header__btn} onClick={handleChange}>
          <Menu className={styles.header__menu} />
        </button>
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
          <Icon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
