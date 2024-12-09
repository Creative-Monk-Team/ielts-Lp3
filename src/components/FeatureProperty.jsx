import styles from "../styles/FeatureProperty.module.css";
import { useState, useEffect, useRef } from "react";
import BannerImage3 from "../assets/banner03_Recent.jpg";
import Button from "./Button";
import p2 from "../assets/p2.png";
import speaker from "../assets/speaker2.png";

let FeatureProperty = () => {
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
    <div className={styles.FeatureProperty} id="speaker">
      <img src={p2} className={styles.p2} />
      <div className={styles.innerFeatureProperty}>
        <div
          className={`${styles.FeaturePropertyContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}
        >
          <div className={styles.yellowLineFlex}>
            <h5>Event's Keynote Speaker </h5>
            <div></div>
          </div>
          <h1>Meet the Webinar Leader</h1>
          <h4>
            Our webinar is led by [Instructor’s Name], a seasoned IELTS trainer
            with over [X] years of experience.
          </h4>
          <ul>
            <li>
              <p>
                [Instructor’s Name] has successfully helped over 1,000+ students
                clear their IELTS exams and achieve their study abroad dreams.
              </p>
            </li>
            <li>
              <p>
                Featured in top IELTS prep publications, they bring proven
                strategies and expert-level insights to help you pass with
                flying colors.
              </p>{" "}
            </li>
          </ul>
          {/* <p>
          </p>
          <p>
          </p> */}
          <Button text={"Book Your Slot Now"} />
        </div>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img alt="First Image" className={styles.bigImage} src={speaker} />
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
