import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "../styles/About.module.css";
import BlueButton from "./BlueButton";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import { AuthContext } from "../context/AuthContentProvider";
import bg from "../assets/whiteRibbonsBg.png";

let About = () => {
  let [showForm, setShowForm] = useContext(AuthContext);
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFirstView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.movingBg}>
      <div className={styles.about} ref={aboutRef} id="about">
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <div>
            <img src={about1} loading="lazy" />
            <img src={about2} loading="lazy" />
          </div>
          <img className={styles.bigImage} src={about3} loading="lazy" />
        </div>
        <div
          className={`${styles.contentSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <h4>About Us</h4>
          <h1>WELCOME TO INDIA BUSINESS CENTER</h1>
          <p className={styles.aboutDesc}>
            IBC is a visionary development designed to transform the commercial
            landscape of Punjab. Located at the most pivotal junction in the
            state, it offers investors an opportunity to secure plots in India's
            first Smart Industrial Integrated Township—a gateway to the future
            of business in one of India's most rapidly growing regions.
          </p>

          <p className={styles.aboutDesc}>
            IBC is more than just a commercial hub—it's a strategic initiative
            that aligns infrastructure with innovation. Offering businesses
            world-class facilities, seamless connectivity, and future-proof
            technology, IBC is the launchpad for Punjab's economic growth.
          </p>
          <div className={styles.flexContent}>
            <div>
              <div className={styles.yellowLine}></div>
              <p>Streategically Located</p>
            </div>
            <div>
              <div className={styles.yellowLine}></div>
              <p>Smart Infrastructure</p>
            </div>
            <div>
              <div className={styles.yellowLine}></div>
              <p>Future Ready Solutions</p>
            </div>
          </div>
          <BlueButton text={"Download Brochure"} />
        </div>
      </div>
    </div>
  );
};

export default About;
