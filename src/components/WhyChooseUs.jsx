import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/WhyChooseUs.module.css";
import BlueButton from "./BlueButton";
import infrastructure from "../assets/infrastructure.png";
import future from "../assets/future_ready_environment.png";
import connectivity from "../assets/connectivity.png";

let WhyChooseUs = () => {
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
    <div className={styles.whyChooseUs} id="why-choose-ibc" ref={aboutRef}>
      <h4
        className={`${styles.whyChooseShortHeading} ${
          styles.animationSection
        } ${isFirstView ? styles.showAnimationSection : ""}`}
      >
        Why Choose Us
      </h4>
      <h1
        className={`${styles.whyChooseHeading} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        INDIA'S FIRST SMART INDUSTRIAL INTEGRATED TOWNSHIP
      </h1>
      <p
        className={`${styles.smallDesc} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        IBC offers unmatched advantages, providing businesses with a prime
        location and innovative infrastructure for sustained growth.
      </p>

      <div className={styles.whyChooseUsGrid}>
        <div
          className={`${styles.whyChooseGridDiv} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img src={infrastructure} />
          <h4>Cutting-Edge Infrastructure</h4>
          <p>Smart facilities, high-speed internet, sustainable energy</p>
        </div>
        <div
          className={`${styles.whyChooseGridDiv} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img src={future} />
          <h4>Future-Ready Environment</h4>
          <p>Scalable business spaces for long-term growth</p>
        </div>
        <div
          className={`${styles.whyChooseGridDiv} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img src={connectivity} />
          <h4>Seamless Connectivity</h4>
          <p>Linked to national highways through Bharatmala Project</p>
        </div>
      </div>
      <div
        className={`${styles.button} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <BlueButton text={"View Brouchure"} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
