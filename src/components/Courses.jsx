// import styles from '../styles/Courses.module.css';
// import banner6 from "../assets/banner_06.jpg";

// const courses = [
//   {
//     title: "IELTS Writing Task 2: Essay Writing Strategies (Dec 2024)",
//     date: "2024-12-16",
//     time: "20:00 (IST)",
//     language: "English",
//     instructor: "John Doe",
//     price: "Free",
//     imageUrl: {banner6}, // Image path for this course
//   },
//   {
//     title: "IELTS Reading: Techniques for Skimming and Scanning (Dec 2024)",
//     date: "2024-12-23",
//     time: "20:00 (IST)",
//     language: "English",
//     instructor: "John Doe",
//     price: "Free",
//     imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKXW.img', // Image path for this course
//   },
//   {
//     title: "IELTS Listening Test Day Tips (Dec 2024)",
//     date: "2024-12-30",
//     time: "20:00 (IST)",
//     language: "English",
//     instructor: "John Doe",
//     price: "Free",
//     imageUrl: '../assets/banner_06.jpg', // Image path for this course
//   },
// ];

// const CoursesCard = () => {
//   return (
//     <div className={styles.containerParent}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>Upcoming Courses</h2>
//         <div className={styles.cardContainer}>
//           {courses.map((course, index) => (
//             <div className={styles.card} key={index}>
//               <div
//                 className={styles.image}
//                 style={{ backgroundImage: `url(${course.imageUrl})` }} // Dynamically set the image
//               ></div>
//               <div className={styles.details}>
//                 <h3 className={styles.title}>{course.title}</h3>
//                 <p className={styles.info}>
//                   <span className={styles.label}>Date:</span> {course.date}
//                 </p>
//                 <p className={styles.info}>
//                   <span className={styles.label}>Time:</span> {course.time}
//                 </p>
//                 <p className={styles.info}>
//                   <span className={styles.label}>Language:</span> {course.language}
//                 </p>
//                 <p className={styles.info}>
//                   <span className={styles.label}>Instructor:</span> {course.instructor}
//                 </p>
//                 <p className={styles.info}>
//                   <span className={styles.label}>Price:</span> {course.price}
//                 </p>
//                 <button className={styles.button}>Enroll for Free</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesCard;
import styles from "../styles/Courses.module.css";
import Button from "./Button";
import img1 from "../assets/banner_06.jpg";
import { useState, useEffect, useRef } from "react";

const courses = [
  {
    title: "IELTS Writing Task 2: Essay Writing Strategies (Dec 2024)",
    date: "2024-12-16",
    time: "20:00 (IST)",
    language: "English",
    instructor: "John Doe",
    price: "Free",
    imageUrl:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKXW.img", // Correct path
  },
  {
    title: "IELTS Reading: Techniques for Skimming and Scanning (Dec 2024)",
    date: "2024-12-23",
    time: "20:00 (IST)",
    language: "English",
    instructor: "John Doe",
    price: "Free",
    imageUrl: "/assets/ielts-reading.jpg", // Correct path
  },
  {
    title: "IELTS Listening Test Day Tips (Dec 2024)",
    date: "2024-12-30",
    time: "20:00 (IST)",
    language: "English",
    instructor: "John Doe",
    price: "Free",
    imageUrl: "/assets/ielts-listening.jpg", // Correct path
  },
];

const CoursesCard = () => {
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
    <div className={styles.containerParent}>
      <div className={styles.container}>
        <h2 ref={aboutRef} className={`${styles.heading} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}>Testimonials</h2>
        <div className={`${styles.cardContainer} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}>
          {courses.map((course, index) => (
            <div className={styles.card} key={index}>
              <div
                className={styles.image}
              >
                <img src={img1}/>
              </div>
              <div className={styles.details}>
                <h3 className={styles.title}>{course.title}</h3>
                <p className={styles.info}>
                  <span className={styles.label}>Date:</span> {course.date}
                </p>
                <p className={styles.info}>
                  <span className={styles.label}>Time:</span> {course.time}
                </p>
                <p className={styles.info}>
                  <span className={styles.label}>Language:</span>{" "}
                  {course.language}
                </p>
                <p className={styles.info}>
                  <span className={styles.label}>Instructor:</span>{" "}
                  {course.instructor}
                </p>
                <p className={styles.info}>
                  <span className={styles.label}>Price:</span> {course.price}
                </p>
                <span className={styles.theButton}>
                  <Button text={"Book Now"} />{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
