import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Props } from "../../Types/Product";

const Badges: React.FC<{ props: Props }> = ({ props }) => {
  return (
    <div className={styles.badges}>
      {props.ready_to_ship && (
        <div className={styles.readyToShip}>
          <p>Ready to shop</p>
        </div>
      )}

      {props.ready_to_ship && (
        <div className={styles.inStock}>
          <img src="okIcon.png" alt="ok" />
          <p>In Stock</p>
        </div>
      )}

      {props.fast_dispatch && (
        <div className={styles.fastDispatch}>
          <img src="okIcon.png" alt="ok" />
          <p>Fas Dispatch</p>
        </div>
      )}
    </div>
  );
};

export default Badges;
