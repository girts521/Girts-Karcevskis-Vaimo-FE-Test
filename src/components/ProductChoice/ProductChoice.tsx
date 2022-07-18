import React from "react";
import styles from "./styles.module.scss";

const ProductChoice: React.FC = () => {
  return (
    <div className={styles.productChoice}>
    <div className={styles.productName}>1080P</div>

    <div className={styles.priceAndQty}>
      <div className={styles.productPrice}>R 833.99</div>

      <div className={styles.qtyContainer}>
        <div className={`${styles.remove} ${styles.disabled}`}>-</div>
        <input type="number" defaultValue={0} />
        <div className={styles.add}>+</div>
      </div>
    </div>
  </div>
  );
};

export default ProductChoice;
