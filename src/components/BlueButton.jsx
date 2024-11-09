import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContentProvider";
import styles from "../styles/BlueButton.module.css";

let BlueButton = (props) => {
  let [showForm, setShowForm, setShowLoading] = useContext(AuthContext);
  let { text } = props;
  return (
    <button
      className={styles.blueButton}
      onClick={() => {
        setShowForm(true);
      }}
    >
      {text}
    </button>
  );
};

export default BlueButton;
