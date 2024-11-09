import styles from "../styles/WhiteButton.module.css";

let WhiteButton = (props) => {
  let { text } = props;
  return <button className={styles.whiteButton}>{text}</button>;
};

export default WhiteButton;
