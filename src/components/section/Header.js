import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";

function Header() {
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
        <button className={styles.header__btn}>
          <CartIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
