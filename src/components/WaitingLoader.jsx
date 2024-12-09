import styles from "../styles/WaitingLoader.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";

let WaitingLoader = () => {
  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  return (
    <div>
      <div
        className={`${styles.waitingLoader} ${
          showWaitingLoading ? styles.viewShowLoading : styles.notShowLoading
        }`}
      >
        <div className={styles.box_2}>
          <div className={styles.loader_2}>
            <div className={styles.spin}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingLoader;
