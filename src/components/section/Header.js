import { useContext } from "react";
import CartContext from "../../context/cart-context";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";
import styles from "./Header.module.css";

function Header() {
  // DELETE CONTEXT LATER NOT NEEDED !
  const context = useContext(CartContext);
  const total = context.cart.length;

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <nav className={styles.header__nav}>
          <Link to="/" className={styles.header__link}>
            HOME
          </Link>
          <Link to="/headphones" className={styles.header__link}>
            HEADPHONES
          </Link>
          <Link to="/speakers" className={styles.header__link}>
            SPEAKERS
          </Link>
          <Link to="/earphones" className={styles.header__link}>
            EARPHONES
          </Link>
        </nav>
        <div className={styles.cart__box}>
          {/* prettier-ignore */}
          <Link to={total ? "/item/item/checkout" : "#"} className={styles.header__btn}>
            <CartIcon/>
          </Link>
          <span>{context.cart.reduce((t, i) => t + i.quantity, 0)}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
