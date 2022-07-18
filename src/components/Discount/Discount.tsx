import React from "react";
import styles from "./styles.module.scss";

const Discount: React.FC = () => {
  return (
    <div className={styles.discountContainer}>
      <div className={styles.discountNum}>20% OFF</div>

      <div className={styles.discountText}>Discount ends in</div>

      <img src="discountTimerIcon.png" alt="" />

      <div className={styles.timer}>2d:01h:56m:49s</div>
    </div>
  );
};

export default Discount;
