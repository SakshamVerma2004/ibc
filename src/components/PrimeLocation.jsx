import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/PrimeLocation.module.css";
import WhiteButton from "./WhiteButton";
import image from "../assets/primeLocation.png";

let PrimeLocation = () => {
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
    <>
      <div className={styles.primeLocationBlue} id="prime-location">
      <div className={styles.whiteSqaureSection}></div>
      <div className={styles.whiteSqaureSection2}></div>
        <div className={styles.primeLocation} ref={aboutRef}>
          <div
            className={`${styles.imageSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <img className={styles.bigImage} loading="lazy" src={image} />
          </div>
          <div
            className={`${styles.contentSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <h4>Prime Location</h4>
            <h1>IBC'S PRIME LOCATION A STRATEGIC ADVANTAGE</h1>
            <p className={styles.aboutDesc}>
              IBC's location on IT Road, just 11 km from the airport and 6 km
              from Airport Chowk, ensures seamless national and international
              business connectivity.
            </p>
            <p className={styles.aboutDesc}>
              IBC's strategic position fosters collaboration and innovation,
              attracting a diverse range of businesses. This accessibility not
              only enhances logistics but also encourages partnerships that
              drive growth and competitiveness in the market.
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>IT Road Connectivity:</h3>
                <p>Links to Mohali and Chandigarh</p>
              </div>
              <div>
                <h3>Major Transportation Hub:</h3>
                <p>Connects to the region's key business areas</p>
              </div>
              <div>
                <h3>Proximity to Chandigarh International Airport (11 km)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimeLocation;
