import React from "react";
import styles from "./styles.module.scss";

const Badges: React.FC = () => {
  return (
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
  );
};

export default Badges;
