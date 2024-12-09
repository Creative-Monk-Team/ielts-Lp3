// import styles from "../styles/ContactForm.module.css";
// import WhyImage from "../assets/whychooseus.png";

// const ContactForm = () => {
//   return (
//     <>
//       <div className={styles.ContactFormParent}>
//         <div className={styles.ContactFormChild}>
//           <div className={styles.ContactFormContent}>
//             <div className={styles.yellowLineFlex}>
//               <h5>Contact Form</h5>
//               <div></div>
//             </div>
//             <h1>Lorem ipsum dolor sit amet.</h1>
//             <p className={styles.ContactFormContentPara}>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             </p>

//         </div>

//           <div className={styles.ContactFormImage}>
//             <img className={styles.img1} src={WhyImage} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ContactForm;

import styles from "../styles/ContactForm.module.css";
import WhyImage from "../assets/contactUs.png";
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { AuthContext } from "../context/AuthContextProvider";
import p1 from "../assets/p1.png";

const ContactForm = () => {
  const [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

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

  const notifySuccess = () => {
    toast.success("Form Submitted Successfully", {
      position: "top-center",
      autoClose: 2500,
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
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Please enter a valid email";
    if (!formData.query) newErrors.query = "Query is required";
    return newErrors;
  };

  const FormHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setShowWaitingLoading(true);

    try {
      const response = await fetch(
        "https://ibc-nodemailer.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: formData.email,
            to: "prepeve@gmail.com",
            subject: "Contact Form Submission - Prepeve Webinar",
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nQuery: ${formData.query}`,
          }),
        }
      );

      if (response.ok) {
        notifySuccess();
        setShowWaitingLoading(false);
        setTimeout(() => {
          window.location.href = "/thankyou";
        }, 2500);
      } else {
        setShowWaitingLoading(false);
        notifyError();
      }
    } catch (error) {
      setShowWaitingLoading(false);
      notifyError();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.ContactFormParent} id="contact">
        <img src={p1} className={styles.p1} />
        <img src={p1} className={styles.p2} />
        <div className={styles.ContactFormChild} ref={aboutRef}>
          <div
            className={`${styles.ContactFormContent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <div className={styles.yellowLineFlex}>
              <h5>Querry</h5>
              <div></div>
            </div>
            <h1>Contact Us</h1>
            <p className={styles.ContactFormContentPara}>
              Please let us know your query!
            </p>
            <form className={styles.ContactForm} onSubmit={FormHandler}>
              {/* Name and Email in the Same Row */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <h3>Your Name</h3>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ""}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    <h3>Email</h3>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ""}
                    required
                  />
                </div>
              </div>

              {/* Query Field Below Name and Email */}
              <div className={styles.formGroup}>
                <label htmlFor="query">
                  <h3>Your Query</h3>
                </label>
                <textarea
                  id="query"
                  name="query"
                  placeholder="Type your query here..."
                  value={formData.query}
                  onChange={handleChange}
                  className={errors.query ? styles.error : ""}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div
            className={`${styles.imageSec} ${styles.ContactFormImage} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <img className={styles.img1} src={WhyImage} alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
