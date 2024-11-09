import styles from "../styles/Navbar.module.css";
import logo from "../logo.svg";
import hamburger from "../assets/hamburger.png";
import { useState } from "react";
import close from "../assets/closeBlack.png";

let Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoDiv}>
          <a href="#home">
            <img src={logo} />
          </a>
        </div>
        <div className={styles.optionsDiv}>
          <a href="#about">About</a>
          <a href="#prime-location">Prime Location</a>
          <a href="#why-choose-ibc">Why Choose IBC</a>
          <a href="#surroundings">Surroundings</a>
          <a href="#plot-sizes">Area Division</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#in-punjab">IBC Punjab</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.smallNavbar}>
        <div className={styles.logoDiv}>
          <a href="#home">
            <img src={logo} />
          </a>
        </div>
        <img
          src={hamburger}
          loading="lazy"
          className={styles.hamburger}
          onClick={() => setShowMenu(true)}
        />
      </div>
      <div
        className={`${styles.hamburgerParent} ${
          showMenu ? styles.showHamburger : null
        }`}
      >
        <div
          onClick={() => setShowMenu(false)}
          className={`${styles.hamburgerOverlay} ${
            showMenu ? styles.showMenu : null
          }`}
        ></div>
        <div
          className={`${styles.hamburgerContent} ${
            showMenu ? styles.showMenuContent : null
          }`}
        >
          <div className={styles.quickAccess}>
            <p>Menu</p>
            <img
              src={close}
              loading="lazy"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <div className={styles.smallOptionsDiv}>
            <a href="#about" onClick={() => setShowMenu(false)}>
              About
            </a>
            <a href="#prime-location" onClick={() => setShowMenu(false)}>
              Prime Location
            </a>
            <a href="#why-choose-ibc" onClick={() => setShowMenu(false)}>
              Why Choose IBC
            </a>
            <a href="#surroundings" onClick={() => setShowMenu(false)}>
              Surroundings
            </a>
            <a href="#plot-sizes" onClick={() => setShowMenu(false)}>
              Area Division
            </a>
            <a href="#infrastructure" onClick={() => setShowMenu(false)}>
              Infrastructure
            </a>
            <a href="#in-punjab" onClick={() => setShowMenu(false)}>
              IBC Punjab
            </a>
            <a href="#contact" onClick={() => setShowMenu(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
