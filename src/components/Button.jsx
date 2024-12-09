import React, { useContext } from "react";
import styles from "../styles/Button.module.css";
import { AuthContext } from "../context/AuthContextProvider";

let Button = ({ text }) => {
  let [showForm, setShowForm, setShowLoading] = useContext(AuthContext);
  return (
    <button
      onClick={() => {
        setShowForm(true);
      }}
      className={styles.buttonComponent}
    >
      {text}
    </button>
  );
};

export default Button;
