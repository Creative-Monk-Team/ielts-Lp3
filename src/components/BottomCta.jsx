import { useEffect, useState } from "react";
import styles from "../styles/BottomCta.module.css";
import Button from "./Button";

let BottomCta = () => {
  let [showCta, setShowCta] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 20) {
        setShowCta(true);
      } else {
        setShowCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showCta]);

  return (
    <div className={`${styles.bottomCta} ${showCta ? styles.showCta : null}`}>
      <Button text={"Book Your Slot Now"} />
    </div>
  );
};

export default BottomCta;
