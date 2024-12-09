import styles from "../styles/WhyChooseUs.module.css";
import { useState, useEffect, useRef } from "react";
import WhyImage from "../assets/whychooseus.png";
import whyImg1 from "../assets/whyImg1.png";
import whyImg2 from "../assets/whyImg2.png";
import whyImg3 from "../assets/whyImg3.png"
import Button from "./Button";

const WhyChooseUs = () => {
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
    <>
      <div className={styles.WhyChooseUsParent}>
        <div className={styles.WhyChooseUsChild}>
          <div  className={`${styles.WhyChooseUsContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}>
          <div className={styles.yellowLineFlex}>
            <h5>Why Choose Us</h5>
            <div></div>
          </div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className={styles.WhyChooseUsContentPara}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos cupiditate suscipit eius aut eveniet. Doloremque, eum
              tempore! Excepturi nostrum aperiam commodi nulla nihil, animi ad
              impedit accusantium
            </p>
            <div className={styles.WhyChooseUsListParent}>
              <div className={styles.WhyChooseUsListImgPar}>
                <img src={whyImg1} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div  className={styles.WhyChooseUsListImgPar}>
              <img src={whyImg2} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div  className={styles.WhyChooseUsListImgPar}>
              <img src={whyImg3} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
             
            </div>
            <span className={styles.ButtonSpan}>
            <Button text={"Learn More"} />
            </span>
           
          </div>
          
          <div  className={`${styles.WhyChooseUsImage} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}>
            <img
              className={styles.img1}
              src={WhyImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}; 
export default WhyChooseUs;
