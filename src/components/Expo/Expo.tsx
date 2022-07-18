import React from "react";
import styles from "./styles.module.scss";

const Expo: React.FC = () => {
  return (
    <div className={styles.expoContainer}>
      <img className={styles.expoLogo} src="marchExpo.png" alt="march expo" />
      <p>• Free shipping (up to $40)</p>
      <img className={styles.arrow} src="arrow.png" alt="right" />
    </div>
  );
};

export default Expo;
