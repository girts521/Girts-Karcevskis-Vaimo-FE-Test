import React from "react";
import styles from "./styles.module.scss";
import { Option } from "../../Types/Product";
import Quantity from "../Quantity/Quantity";

const ProductChoice: React.FC<{ option: Option }> = ({ option }) => {
  return (
    <div className={styles.productChoice}>
      <div className={styles.productName}>{option.label}</div>

      <div className={styles.priceAndQty}>
        <div className={styles.productPrice}>R {option.price.value}</div>

        <Quantity price={option.price.value} option={option.label} />
      </div>
    </div>
  );
};

export default ProductChoice;
