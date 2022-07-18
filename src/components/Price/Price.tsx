import React from "react";
import styles from "./styles.module.scss";

const Price: React.FC = () => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.currentPrice}>
        <p className={styles.price}>R 78.50 - R 895.31</p>
        <p className={styles.option}> / Option</p>
        <div className={styles.minOrder}>
          <p className={styles.minOrderOptions}>2 Options </p>
          <p className={styles.minOrderText}>(Min.Order)</p>
        </div>
      </div>

      <div className={styles.oldPrice}>R 98.12 - R 1,119.14</div>
    </div>
  );
};

export default Price;
