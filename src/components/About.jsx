import styles from "../styles/About.module.css";
import { useState, useEffect, useRef } from "react";
import bg from "../assets/aboutBg.png";
import bigImage from "../assets/banner2.jpg";
import smallImage from "../assets/banner3.jpg";
import BannerImage2 from "../assets/banner02_Recent.jpg";
import Button from "./Button";
import img from "../assets/aboutUs.png";

let About = () => {
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
    <div className={styles.about} id="about">
      <div className={styles.innerAbout}>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
          ref={aboutRef}
        >
          <img
            alt="First Image"
            className={styles.bigImage}
            src={img}
          />

          {/* <img alt="Bg Image" className={styles.bgImage} src={bg} /> */}
          <div className={styles.imageDetailsSection}>
            <h5>Your Path to IELTS Excellence Starts Here</h5>
            <p>
              Unlock your potential with Iletest's expert resources and
              guidance, designed to help you ace the IELTS exam and achieve your
              goals.
            </p>
          </div>
        </div>
        <div
          className={`${styles.aboutContent} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <div className={styles.yellowLineFlex}>
            <div></div>
            <h5>Master IELTS </h5>
          </div>
          <h1>Empowering Your IELTS Journey to Success</h1>
          <p>
            At latest, we specialize in helping students achieve their dream
            scores in the IELTS exam. Our platform offers personalized
            preparation resources, expert guidance, and real-time practice
            tests, ensuring you are fully equipped for success. With a focus on
            tailored learning, we help you build confidence and skills to
            perform at your best.
          </p>
          <p>
            Our mission is to simplify the IELTS preparation journey. By
            providing cutting-edge tools, valuable insights, and a community of
            support, we strive to make your learning experience both effective
            and enjoyable. Join us today and take the first step toward
            achieving your ultimate IELTS goals.
          </p>
          {/* <Button text={"Enquire Now"} /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
