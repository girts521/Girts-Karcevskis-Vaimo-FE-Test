import React from "react";
import styles from "./styles.module.scss";

const AddTo: React.FC<{func: () => void}> = ({func}) => {
  return (
    <div className={styles.addToContainer}>
      <div className={styles.shipping}>
        <div className={styles.shippingText}>
          Ship to <span> South Africa by Express UPS Sav…</span>
        </div>

        <div className={styles.shippingPrice}>R 6,036.74</div>
      </div>

      <div className={styles.leadTime}>
        <p>
          Lead Time <span>10</span> days
        </p>
        <img src="info.png" alt="info" />
      </div>

      <div className={styles.shippingTime}>
        <p>
          {" "}
          Shipping time <span> 6-10</span> days
        </p>
        <img src="info.png" alt="" />
      </div>

      <div onClick={func} className={styles.loginBtn}>Login to Purchase</div>

      <div className={styles.contactBtn}>
        <img src="contact.png" alt="" />
        Contact the Supplier
      </div>
    </div>
  );
};

export default AddTo;
