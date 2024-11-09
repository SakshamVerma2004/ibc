import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/PlotSizes.module.css";
import BlueButton from "./BlueButton";
import plot from "../assets/plot.png";

let PlotSizes = () => {
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
      <div className={styles.primeLocationBlue} id="plot-sizes" ref={aboutRef}>
        <div className={styles.primeLocation}>
          <div
            className={`${styles.imageSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <img className={styles.bigImage} loading="lazy" src={plot} />
          </div>
          <div
            className={`${styles.contentSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <h4>Plot Sizes</h4>
            <h1>FLEXIBLE & SCALABLE PLOT SIZES</h1>
            <p className={styles.aboutDesc}>
              Ibc offers customizable plot sizes to meet the needs of
              businesses, whether small startups or large corporations. Scale
              your space as your business grows
            </p>
            <p className={styles.aboutDesc}>
              The flexible and scalable plot sizes accommodate diverse needs,
              enabling businesses to customize their spaces for optimal growth
              and development while ensuring efficient land use and
              accessibility.
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>Small to large customizable plots</h3>
              </div>
              <div>
                <h3>
                  Ideal for SMEs, large corporations, and co-working spaces
                </h3>
              </div>
              <div>
                <h3>
                  Future development plans include green spaces & recreational
                  facilities
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

export default PlotSizes;
