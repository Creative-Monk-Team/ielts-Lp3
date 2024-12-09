import React, { useState, useEffect } from "react";
import styles from "../styles/CountdownTimer.module.css";

const CountdownTimer = () => {
  // State variables to hold the remaining time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [headline, setHeadline] = useState("");
  const [countdownVisible, setCountdownVisible] = useState(true);

  useEffect(() => {
    // Get today's date and determine the next birthday
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let nextYear = yyyy + 1;
    let dayMonth = "12/31/";
    let birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDownDate = new Date(birthday).getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 10)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      // If the countdown is over, hide the countdown and show the content
      if (distance < 0) {
        setHeadline("");
        setCountdownVisible(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className={styles.countdownTimer_container}>
      <h1 className={styles.countdownTimer_headline}>{headline}</h1>
      {countdownVisible && (
        <div className={styles.countdownTimer_countdown}>
          <ul>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_days}>{days}</span> days
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_hours}>{hours}</span> Hours
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_minutes}>{minutes}</span>{" "}
              Minutes
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_seconds}>{seconds}</span>{" "}
              Seconds
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
