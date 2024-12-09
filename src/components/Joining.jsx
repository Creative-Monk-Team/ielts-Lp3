import styles from "../styles/Joining.module.css";
import Transparency from "../assets/transparency.svg";
import Efficiency from "../assets/efficacy (1).svg";
import GainInsights from "../assets/community.svg";
import BuildConnections from "../assets/networking.svg";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import p3 from "../assets/p3.png";
import plus from "../assets/add.png";

let Joining = () => {
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);
  let [activeIndex, setActiveIndex] = useState(null); // To track which accordion item is active

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

  let data = [
    {
      question: "What is the webinar about?",
      answer:
        "This 2-day webinar will provide you with the tools, strategies, and resources to crack IELTS in one go. You'll learn about key exam strategies, mistakes to avoid, and have access to exclusive resources like cheat sheets and mock tests.",
    },
    {
      question: "Will I get lifetime access to the content?",
      answer:
        " Yes! Once you register, you will have lifetime access to all the materials, including the webinar recording, cheat sheets, e-books, and the Facebook support group.",
    },
    {
      question: "What if I’m a beginner? Is this webinar for me?",
      answer:
        " Absolutely! Whether you're just starting or looking for last-minute tips, this webinar is designed for all levels of IELTS students. We cover everything from the basics to expert strategies.",
    },
    {
      question: "Is there any guarantee that I’ll clear the exam?",
      answer:
        " We can’t guarantee the results, but with our proven methods, dedicated support, and continuous practice, we give you the best possible chance of success. Many students have successfully cleared IELTS on their first attempt after attending our webinar.",
    },
    {
      question: "How do I book my spot?",
      answer:
        " Simply click on the “Book Now” button below to reserve your spot. Hurry, as seats are limited!",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle between showing and hiding the selected accordion item
  };

  return (
    <div className={styles.joiningParent} id="courses">
      <img src={p3} className={styles.p3} />
      <img src={p3} className={styles.p4} />
      <div
        className={`${styles.innerJoining} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <h1 ref={aboutRef}>FAQ's</h1>
        <p className={styles.faqDesc}>
          Have questions? Our FAQs section provides detailed answers to common
          inquiries, offering helpful information and support to guide you.
        </p>
      </div>

      <div
        className={`${styles.features} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <div className={styles.accordionContainer}>
          {data.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.question}</h4>
                <img
                  src={plus}
                  className={`${styles.plusIcon} ${
                    activeIndex == index ? styles.activePlusIcon : null
                  }`}
                />
              </div>
              <div
                className={`${styles.accordionContent} ${
                  activeIndex == index ? styles.showContent : null
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joining;
