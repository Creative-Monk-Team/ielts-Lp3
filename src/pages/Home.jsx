import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Features from "../components/Features";
import logo from "../assets/logo.png";
import WhyChooseUs from "../components/WhyChooseUs";
import Explore from "../components/Explore";
import ContactForm from "../components/ContactForm";
import FeatureProperty from "../components/FeatureProperty";
import Joining from "../components/Joining";
import Numbers from "../components/Numbers";
import CoursesCard from "../components/Courses";
import Webinar from "../components/Webinar";
import CountdownTimer from "../components/CountdownTimer";
import BottomCta from "../components/BottomCta";
import Grid from "../components/Grid";
import CSS from "../components/CSS";
import Testimonial from "../components/Testimonial";

let Home = () => {
  return (
    <>
      <Helmet>
        <title>Prepeve</title>
        <meta name="description" content="PrepEve provides online courses for the IELTS Academic and IELTS General Training tests." />
        <meta name="title" property="og:title" content="Prepeve" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="PrepEve provides online courses for the IELTS Academic and IELTS General Training tests."
        />
        <meta
          name="Keywords"
          content="IELTS, Listening, Speaking, English, Writing"
        />
      </Helmet>
      <ToastContainer />
      <div className={styles.home}>
        <Navbar />
        <Banner />
        <About />
        <FeatureProperty />
        <Features />
        <Numbers />
        <Joining />
        <Testimonial />
        {/* <CoursesCard /> */}
        <Webinar />
        {/* <WhyChooseUs/> */}
        {/* <Explore /> */}
        <ContactForm />
        <Footer />
        <BottomCta />
        {/* <Grid/> */}
        {/* <CSS /> */}
      </div>
    </>
  );
};

export default Home;
