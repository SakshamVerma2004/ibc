// import styles from "../styles/WaitingLoader.module.css";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContentProvider";

// let WaitingLoader = () => {
//   let [showLoading, setShowLoading] = useContext(AuthContext);
//   return (
//       <div
//         className={`${styles.waitingLoader} ${
//           showLoading ? styles.viewShowLoading : styles.notShowLoading
//         }`}
//       >
//         <div className={styles.box_2}>
//           <div className={styles.loader_2}>
//             <div className={styles.spin}></div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default WaitingLoader;

import styles from "../styles/WaitingLoader.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContentProvider";

let WaitingLoader = () => {
  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  return (
    <div>
      <div
        className={`${styles.waitingLoader} ${
          showWaitingLoading ? styles.viewShowLoading : styles.notShowLoading
        }`}
      >
        <div className={styles.box_2}>
          <div className={styles.loader_2}>
            <div className={styles.spin}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingLoader;
