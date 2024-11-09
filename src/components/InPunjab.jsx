import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/InPunjab.module.css";
import BlueButton from "./BlueButton";
import image from "../assets/road.png";

let InPunjab = () => {
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
      <div className={styles.primeLocationBlue} id="in-punjab" ref={aboutRef}>
        <div className={styles.primeLocation}>
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
            <h4>IBC in Punjab</h4>
            <h1>GATEWAY TO PUNJAB'S GROWTH</h1>
            <p className={styles.aboutDesc}>
              IBC is Punjab's first entry point, providing businesses with
              unmatched access to regional markets and resources. Its strategic
              position at a major junction makes it the top choice for investors
              looking to capture the region's growth potential.
            </p>
            <p className={styles.aboutDesc}>
              Our prime location ensures maximum visibility, making your
              business presence a standout landmark in Punjab's growing economic
              landscape. From manufacturing and logistics to retail and
              corporate spaces, IBC creates the perfect ecosystem for businesses
              to thrive and expand.
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>Punjab's Entry Point: Unmatched visibility</h3>
              </div>
              <div>
                <h3>
                  Connectivity Advantage: Linked to Bharatmala Road Project
                </h3>
              </div>
              <div>
                <h3>
                  Economic Hub: Attracting growing businesses and startups
                </h3>
              </div>
            </div>
            <BlueButton text={"Download Brochure"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InPunjab;
