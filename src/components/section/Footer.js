import { Link } from "react-router-dom";

// SRC FOLDER
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Facebook } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <nav className={styles.footer__nav}>
          <Logo />
          <div className={styles.nav__links}>
            <Link to="/" className={styles.footer__link}>
              HOME
            </Link>
            <Link to="/headphones" className={styles.footer__link}>
              HEADPHONES
            </Link>
            <Link to="/speakers" className={styles.footer__link}>
              SPEAKERS
            </Link>
            <Link to="/earphones" className={styles.footer__link}>
              EARPHONES
            </Link>
          </div>
        </nav>
        <div className={styles.footer__container}>
          <h4 className={styles.footer__text}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week. Copyright 2021. All
            Rights Reserved
          </h4>
          <div className={styles.footer__bottom}>
            <div className={styles.footer__group}>
              <a
                title="facebook link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.social__link}
              >
                <Facebook />
              </a>
              <a
                title="twitter link"
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.social__link}
              >
                <Twitter />
              </a>
              <a
                title="instagram link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.social__link}
              >
                <Instagram />
              </a>
            </div>
            <p className={styles.footer__copyright}>
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
