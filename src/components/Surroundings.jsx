import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Surroundings.module.css";
import highway from "../assets/highway.png";

let Surroundings = () => {
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
    <div className={styles.surroundingsBlue} id="surroundings" ref={aboutRef}>
      <div className={styles.whiteSqaureSection}></div>
      <div className={styles.whiteSqaureSection2}></div>
      <div className={styles.surroundings}>
        <h4
          className={`${styles.whyChooseShortHeading} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
        >
          IBC's Surroundings
        </h4>
        <h1
          className={`${styles.whyChooseHeading} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          SURROUNDING AMENITIES & BUSINESS SYNERGIES
        </h1>
        <p
          className={`${styles.surroundingsPara} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          IBC is surrounded by top-tier educational institutions, healthcare
          facilities, and retail centers, providing a holistic business
          environment.
        </p>
        <div className={styles.surroundingsGridSection}>
          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              THE BIGGEST <strong>COMMERCIAL JUNCTION</strong> OF PUNJAB
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              CONNECTED TO <strong>BHARAT MALA ROAD PROJECT</strong> OF PUNJAB
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              NEXT TO <strong>EDUCATIONAL INSTITUTES</strong>
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              CONVENIENT <strong>APPROACHABILITY</strong> FROM TRICITY
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              CONNECTS TO <strong>6 MEGA CITIES</strong> OF PUNJAB
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              CONNECTS TO <strong>3 STATES</strong> OF NORTHERN INDIA
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              BEST <strong>COMMERCIAL OFFERINGS</strong> ON THE HIGHWAY
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              IN PROXIMITY TO <strong>TECH GIANTS</strong> LIKE INFOSYS
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              INSTANT CONNECTIVITY TO <strong>CHANDIGARH INTL. AIRPORT</strong>
            </p>
          </div>

          <div
            className={`${styles.surroundingsGridDiv} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img src={highway} />
            <p>
              CLOSER TO MULTIPLE <strong>RESIDENTIAL PROJECTS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surroundings;
