// import styles from "../styles/Navbar.module.css";
// import logo from "../assets/logo.png";

// let Navbar = () => {
//   return (
//     <div className={styles.navbar}>

//       <div className={styles.innerNavbar}>
//         <a href="/home">
//           <img src={logo} alt="Logo" className={styles.logo}/>
//         </a>
//         <div className={styles.optionsDiv}>
//           <a href="/section1">Section 1</a>
//           <a href="/section2">Section 2</a>
//           <a href="/section3">Section 3</a>
//           <a href="/section4">Section 4</a>
//           <a href="/section5">Section 5</a>
//           <a href="/section6">Section 6</a>
//           <a href="/section7">Section 7</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/closeBlack.png";
import { useState } from "react";

let Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Regular Navbar */}
      <div className={styles.navbar}>
        <div className={styles.innerNavbar}>
          <a href="#home">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
          <div className={styles.optionsDiv}>
            <a href="#about">About Us</a>
            <a href="#speaker">Speaker</a>
            <a href="#whyChooseUs">Why Choose Us</a>
            <a href="#whyJoin">FAQ'S</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Hamburger Icon) */}
      <div className={styles.smallNavbar}>
        <div className={styles.logoDiv}>
          <a href="#home">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
        </div>
        <img
          src={hamburger}
          className={styles.hamburger}
          onClick={() => setShowMenu(true)}
          alt="Hamburger Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`${styles.hamburgerParent} ${
          showMenu ? styles.showHamburger : ""
        }`}
      >
        <div
          onClick={() => setShowMenu(false)}
          className={`${styles.hamburgerOverlay} ${
            showMenu ? styles.showMenu : ""
          }`}
        ></div>
        <div
          className={`${styles.hamburgerContent} ${
            showMenu ? styles.showMenuContent : ""
          }`}
        >
          <div className={styles.quickAccess}>
            <p>Menu</p>
            <img
              src={close}
              className={styles.closeIcon}
              onClick={() => setShowMenu(false)}
              alt="Close"
            />
          </div>
          <div className={styles.smallOptionsDiv}>
            <a href="#about" onClick={() => setShowMenu(false)}>
              About Us
            </a>
            <a href="#speaker" onClick={() => setShowMenu(false)}>
              Speaker
            </a>
            <a href="#whyChooseUs" onClick={() => setShowMenu(false)}>
              Why Choose Us
            </a>
            <a href="#whyJoin" onClick={() => setShowMenu(false)}>
              FAQ'S
            </a>
            <a href="#testimonials" onClick={() => setShowMenu(false)}>
              Testimonials
            </a>
            <a href="#contact" onClick={() => setShowMenu(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
