import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";

let Loader = () => {
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    let loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <div
      className={styles.loaderParent}
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible",
      }}
    >
      <div className={styles.pl}></div>
    </div>
  );
};

export default Loader;
