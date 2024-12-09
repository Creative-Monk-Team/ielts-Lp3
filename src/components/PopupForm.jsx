import { useContext, useState } from "react";
import styles from "../styles/PopupForm.module.css";
import { AuthContext } from "../context/AuthContextProvider";
import close from "../assets/closeWhite.png";
import logo from "../assets/logo.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PopupForm = () => {
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

  const [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    examType: "",
  });

  const [errors, setErrors] = useState({});

  const examOptions = [
    "IELTS Academic",
    "IELTS General",
    "OET",
    "PTE",
    "Business Communication",
    "CELPIP",
    "French Training",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Please enter a valid email";
    if (!formData.contact) newErrors.contact = "Contact number is required";
    if (!formData.examType) newErrors.examType = "Please select an exam type";
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
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\nExam Type: ${formData.examType}`,
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
      notifyError();
      setShowWaitingLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`${styles.popupFormParent} ${
          showForm ? styles.showForm : null
        }`}
      >
        <div className={styles.form}>
          <div className={styles.closeDiv}>
            <img
              className={styles.close}
              src={close}
              onClick={() => setShowForm(false)}
              alt="Close"
            />
          </div>
          <img src={logo} className={styles.logo} alt="Logo" />
          <h3>Seize the Opportunity Now!</h3>
          <p>Complete the form now and unlock your chance to excel in the IELTS exam!</p>
          <form onSubmit={FormHandler}>
            <div className={styles.row}>
              <input
                name="name"
                placeholder="Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.error : ""}
                required
              />
              <input
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.error : ""}
                required
              />
            </div>
            <div className={styles.row}>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                className={errors.examType ? styles.error : ""}
                required
              >
                <option value="">Exams Preparing*</option>
                {examOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <input
                name="contact"
                placeholder="Your Contact Number"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                className={errors.contact ? styles.error : ""}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
