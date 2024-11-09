import styles from "../styles/Banner.module.css";
import banner from "../assets/banner2.jpg";
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { AuthContext } from "../context/AuthContentProvider";
import BlueButton from "./BlueButton";

let Banner = () => {
  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
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
    <div
      id="home"
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${banner})`,
      }}
    >
      <div className={styles.bannerMain} ref={aboutRef}>
        <div
          className={`${styles.bannerContentSection} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
        >
          <h1>
            <span>IBC:</span> Building Tomorrow's Community Today
          </h1>
          <p>
            IBC is dedicated to creating thriving, sustainable townships that
            blend modern living with community values, offering residents a
            harmonious environment where innovation, connectivity, and quality
            of life flourish.
          </p>
          <BlueButton text={"Enquire Now"} />
        </div>
        <div
          className={`${styles.bannerFormSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <h3>Download Brochure Now</h3>
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
    </div>
  );
};

export default Banner;
