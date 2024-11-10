import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Infrastructure from "../components/Infrastructure";
import InPunjab from "../components/InPunjab";
import Navbar from "../components/Navbar";
import PlotSizes from "../components/PlotSizes";
import PrimeLocation from "../components/PrimeLocation";
import Surroundings from "../components/Surroundings";
import WhyChooseUs from "../components/WhyChooseUs";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Helmet } from "react-helmet-async";
import logo from "../logo.svg";

let Homepage = () => {
  return (
    <>
      <Helmet>
        <title>IBC - India Business Center</title>
        <meta
          name="description"
          content="IBC is a visionary development designed to transform the commercial
          landscape of Punjab. Located at the most pivotal junction in the
          state, it offers investors an opportunity to secure plots in India's
          first Smart Industrial Integrated Township—a gateway to the future of
          business in one of India's most rapidly growing regions."
        />
        <meta
          name="title"
          property="og:title"
          content="IBC - India Business Center"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="IBC is a visionary development designed to transform the commercial
          landscape of Punjab. Located at the most pivotal junction in the
          state, it offers investors an opportunity to secure plots in India's
          first Smart Industrial Integrated Township—a gateway to the future of
          business in one of India's most rapidly growing regions."
        />
        <meta
          name="Keywords"
          content="Punjab, Real Estate, Mohali, Township, Chandigarh, Connectivity, Infrastructure, Future Environment"
        />
      </Helmet>
      <ToastContainer />
      <Navbar />
      <Banner />
      <About />
      <PrimeLocation />
      <WhyChooseUs />
      <Surroundings />
      <PlotSizes />
      <Infrastructure />
      <InPunjab />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
