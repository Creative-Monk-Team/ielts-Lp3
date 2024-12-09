import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>Limited-Time ₹99 Offer – Act Fast!</h1>
          <p>
            Hurry! The ₹99 offer is only valid for a limited time. Once the
            seats fill up, the price goes up.
          </p>
          <Button text={"Book Now"} />
        </div>
      </div>
    </>
  );
};

export default Webinar;
