import { useContext, useEffect, useState } from "react";
import styles from "../styles/PopupForm.module.css";
import { AuthContext } from "../context/AuthContentProvider";
import close from "../assets/closeWhite.png";
import logo from "../logo.svg";
import { ToastContainer, toast, Bounce } from "react-toastify";

let PopupForm = () => {
  const notifySuccess = () => {
    toast.success("Form Submitted Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const FormHandler = async (e) => {
    setShowWaitingLoading(true);
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ibc-nodemailer.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: email,
            to: "creativemonktesting@gmail.com",
            subject: "Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          }),
        }
      );

      if (response.ok) {
        notifySuccess();
        setShowWaitingLoading(false);
      } else {
        setShowWaitingLoading(false);
        notifyError();
      }
    } catch (error) {
      notifyError();
      setShowWaitingLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />

      <div
        className={`${styles.popupFormParent} ${
          showForm ? styles.showForm : null
        }`}
      >
        <div className={styles.form}>
          <div className={styles.closeDiv}>
            <img
              className={styles.close}
              src={close}
              onClick={() => setShowForm(false)}
            />
          </div>
          <img src={logo} className={styles.logo} />
          <h3>Connect & Download Brochure!</h3>
          <p>
            Fill out the form to connect with us and instantly download our
            brochure for more information!
          </p>
          <form onSubmit={FormHandler}>
            <div>
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                placeholder="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
