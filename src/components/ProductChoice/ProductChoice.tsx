import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import {Option} from "../../Types/Product"

const ProductChoice: React.FC<{option:Option}> = ({option}) => {

  return (
    <div className={styles.productChoice}>
    <div className={styles.productName}>{option.label}</div>

    <div className={styles.priceAndQty}>
      <div className={styles.productPrice}>R {option.price.value}</div>

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
