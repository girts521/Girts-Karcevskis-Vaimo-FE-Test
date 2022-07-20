import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import {Option} from "../../Types/Product"
import Quantity from "../Quantity/Quantity";

const ProductChoice: React.FC<{option:Option}> = ({option}) => {

  return (
    <div className={styles.productChoice}>
    <div className={styles.productName}>{option.label}</div>

    <div className={styles.priceAndQty}>
      <div className={styles.productPrice}>R {option.price.value}</div>

    <Quantity />

    </div>
  </div>
  );
};

export default ProductChoice;
