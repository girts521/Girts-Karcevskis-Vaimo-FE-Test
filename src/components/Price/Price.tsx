import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {Options} from "../../Types/Product"

const Price: React.FC<{options: Options}> = ({options}) => {

  const [[minPrice, maxPrice], setPrice] = useState<number[]>([])
  const [[minOldPrice, maxOldPrice], setOldPrice] = useState<number[]>([])

  useEffect(() => {
    const prices: number[] = []
    const oldPrices: number[] = []

    for (const [key, value] of Object.entries(options)) {
     prices.push(value.price.value)
     oldPrices.push(value.old_price.value)
    }

    setPrice([Math.min(...prices), Math.max(...prices)])
    setOldPrice([Math.min(...oldPrices), Math.max(...oldPrices)])

  }, [])

  return (
    <div className={styles.priceContainer}>
      <div className={styles.currentPrice}>
        <p className={styles.price}>{`R ${minPrice} - R ${maxPrice}`}</p>
        <p className={styles.option}> / Option</p>
        <div className={styles.minOrder}>
          <p className={styles.minOrderOptions}>2 Options </p>
          <p className={styles.minOrderText}>(Min.Order)</p>
        </div>
      </div>

      <div className={styles.oldPrice}>{`R ${minOldPrice} - R ${maxOldPrice}`}</div>
    </div>
  );
};

export default Price;
