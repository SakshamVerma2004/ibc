import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Infrastructure.module.css";
import infra1 from "../assets/infra1.jpg";
import infra2 from "../assets/infra2.jpg";
import infra3 from "../assets/infra3.jpg";
import infra4 from "../assets/infra4.jpg";
import infra9 from "../assets/infra9.png";

let Infrastructure = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };

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
      <div className={styles.primeLocationBlue} id="infrastructure">
      <div className={styles.whiteSqaureSection}></div>
      <div className={styles.whiteSqaureSection2}></div>
        <div className={styles.primeLocation} ref={aboutRef}>
          <div
            className={`${styles.imageSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <img className={styles.bigImage} loading="lazy" src={infra9} />
          </div>
          <div
            className={`${styles.contentSection} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <h4>IBC's Infrastructure</h4>
            <h1>LEADING WITH SMART INFRASTRUCTURE</h1>
            <p className={styles.aboutDesc}>
              IBC's infrastructure is designed for effciency and sustainability,
              incorporating modern facilities to support cutting-edge business
              operations.
            </p>
            <p className={styles.aboutDesc}>
              IBC's smart infrastructure prioritizes efficiency and
              sustainability, featuring advanced facilities that empower
              innovative business operations while minimizing environmental
              impact and maximizing productivity.
            </p>
            <div className={styles.flexContent} ref={scrollContainerRef}>
              <div>
                <img loading="lazy" src={infra1} />
                <p>Smart Offices</p>
              </div>
              <div>
                <img loading="lazy" src={infra2} />
                <p>Sustainable Energy</p>
              </div>
              <div>
                <img loading="lazy" src={infra3} />
                <p>Advanced Waste Management Facilities</p>
              </div>
              <div>
                <img loading="lazy" src={infra4} />
                <p>24 X 7 Security Setvices</p>
              </div>
            </div>
            <div className={styles.navigationButtons}>
              <button className={styles.arrow} onClick={scrollLeft}>
                {"<"}
              </button>
              <button className={styles.arrow} onClick={scrollRight}>
                {">"}
              </button>
              {/* → ←  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
