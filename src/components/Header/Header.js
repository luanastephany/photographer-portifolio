import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./logo.svg";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>

      <div className={styles.breadcrumb}>
        <a className={styles.link} href="/">
          Home
        </a>
        <a className={styles.link} href="/gallery">
          Gallery
        </a>
      </div>

      <div className={styles.contact}>
        <FaPhoneAlt />
        <p>+91 9949 63 6868</p>
      </div>
    </header>
  );
};

export default Header;
