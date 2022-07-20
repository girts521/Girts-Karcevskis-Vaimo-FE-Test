import React, { useEffect } from "react";
import { Shipping } from "../../Types/Product";
import styles from "./styles.module.scss";

const AddTo: React.FC<{shipping: Shipping}  > = ({shipping}) => {

useEffect(() => {
  console.log(shipping)
},[])

  return (
    <div className={styles.addToContainer}>
      <div className={styles.shipping}>
        <div className={styles.shippingText}>
          Ship to <span> {shipping.method.country} by {shipping.method.title}</span>
        </div>

        <div className={styles.shippingPrice}>{shipping.method.cost.currency.symbol} {shipping.method.cost.value.toFixed(2)}</div>
      </div>

      <div className={styles.leadTime}>
        <p>
          Lead Time <span>{shipping.lead_time.value}</span> days
        </p>
        <img src="info.png" alt="info" />
      </div>

      <div className={styles.shippingTime}>
        <p>
          {" "}
          Shipping time <span>{shipping.method.shipping_time.value}</span> days
        </p>
        <img src="info.png" alt="" />
      </div>

      <div className={styles.loginBtn}>Login to Purchase</div>

      <div className={styles.contactBtn}>
        <img src="contact.png" alt="" />
        Contact the Supplier
      </div>
    </div>
  );
};

export default AddTo;
