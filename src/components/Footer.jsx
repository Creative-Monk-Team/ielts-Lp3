// import styles from "../styles/Footer.module.css";

// let Footer = () => {
//   return (
//     <div className={styles.footer}>
//       <h1>This is the footer</h1>
//     </div>
//   );
// };

// export default Footer;

import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedinIcon.png";
import facebook from "../assets/facebookIcon.png";
import instagram from "../assets/instagramIcon.png";

let Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <img src={logo} className={styles.logo} />
          <p>
            Accelerate your IELTS preparation with our intensive crash course,
            designed to help you master key skills and strategies in just a
            short time. Achieve your target score confidently and efficiently.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#speaker">Speaker</a>
          <a href="#whyChooseUs">Why Choose Us</a>
          <a href="#whyJoin">FAQ'S</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <div>
            <img src={location} />
            <p>5307 Victoria Dr, Vancouver, BC V5P 3V6</p>
          </div>
          <div>
            <img src={phone} />
            <p>+1(604)6210601</p>
          </div>
          <div>
            <img src={mail} />
            <p>prepeve@gmail.com</p>
          </div>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <p>
            Follow Us On Our Social Media handles to always stay updated with
            us.
          </p>
          <div className={styles.socialDiv}>
            <a href="https://www.facebook.com/people/Prepeve-Revolutionizing-IELTS-Preparation/100064087447900/">
              <div className={styles.socialIcon}>
                <img src={facebook} />
              </div>
            </a>
            <a href="https://www.instagram.com/prepeve.classes/">
              <div className={styles.socialIcon}>
                <img src={instagram} />
              </div>
            </a>
            {/* <a href="#">
              <div className={styles.socialIcon}>
                <img src={linkedin} />
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
