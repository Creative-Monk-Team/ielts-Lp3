import React, { useEffect } from 'react';
import styles from "../styles/Thankyou.module.css";

const ThankYou  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  
      }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.thankYouText}>Thank You!</h1>
          <p className={styles.description}>Your submission has been received. We’ll be in touch soon.</p>
 
          <p className={styles.thankYouNote}>We’re excited to help you on your Journey!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou ;
