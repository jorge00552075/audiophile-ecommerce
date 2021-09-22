import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/shared/desktop/icon-cart.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <nav className={styles.header__nav}>
          <a href="/" className={styles.header__link}>
            HOME
          </a>
          <a href="/headphones" className={styles.header__link}>
            HEADPHONES
          </a>
          <a href="/speakers" className={styles.header__link}>
            SPEAKERS
          </a>
          <a href="/earphones" className={styles.header__link}>
            EARPHONES
          </a>
        </nav>
        <button className={styles.header__btn}>
          <CartIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
