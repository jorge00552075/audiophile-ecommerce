import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <nav className={styles.footer__nav}>
          <Logo />
          <div>
            <a href="/" className={styles.footer__link}>
              HOME
            </a>
            <a href="/headphones" className={styles.footer__link}>
              HEADPHONES
            </a>
            <a href="/speakers" className={styles.footer__link}>
              SPEAKERS
            </a>
            <a href="/earphones" className={styles.footer__link}>
              EARPHONES
            </a>
          </div>
        </nav>
        <div className={styles.footer__container}>
          <div className={styles.footer__text}>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week. Copyright
              2021. All Rights Reserved
            </p>
          </div>
          <div className={styles.footer__social}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Instagram />
            </a>
          </div>
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;