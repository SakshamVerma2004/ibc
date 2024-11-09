import styles from "../styles/Contact.module.css";
import bg from "../assets/contact.jpg";
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { AuthContext } from "../context/AuthContentProvider";

let Contact = () => {
  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);
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
    <div
      ref={aboutRef}
      className={styles.contactBg}
      id="contact"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
      }}
    >
      <div className={styles.contact}>
        <div
          className={`${styles.contactForm} ${styles.animationSection} ${
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
        <div
          className={`${styles.contactDetails} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <h1>Contact us</h1>
          <p>
            Ready to explore prime business opportunities in Punjab? The IBC
            team is here to assist you. Whether you're seeking detailed
            information about our developments, investment opportunities, or
            would like to schedule a site visit, we're just a message away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
