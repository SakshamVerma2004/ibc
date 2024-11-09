import styles from "../styles/Thankyou.module.css";
import logo from "../logo.svg";

let Thankyou = () => {
  return (
    <div className={styles.thankyouPage}>
      <div>
        <img src={logo} />
        <h3>
          We are pleased to inform you that our team is readily available to
          connect with you in the immediate future. Your message has been
          received and acknowledged, and we are keen to establish communication
          with you at the soonest possible time.
        </h3>
        <a href="/">Move Back</a>
      </div>
    </div>
  );
};

export default Thankyou;
