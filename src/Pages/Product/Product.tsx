import React from "react";
import styles from "./styles.module.scss";

const Product: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="drone.jpeg" alt="drone" />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.badges}>
          <div className={styles.readyToShip}>
            <p>Ready to shop</p>
          </div>

          <div className={styles.inStock}>
            <img src="okIcon.png" alt="ok" />
            <p>In Stock</p>
          </div>

          <div className={styles.fastDispatch}>
            <img src="okIcon.png" alt="ok" />
            <p>Fas Dispatch</p>
          </div>
        </div>

        <div className={styles.productDescription}>

           <p>2021 hot selling GPS 5G quadcopter drone with camera remote control
            aircraft drone WiFi mini drone camera</p>
            <div className={styles.hotSale}><p> Hot sale products</p></div>

     
        </div>
      </div>
    </div>
  );
};

export default Product;
