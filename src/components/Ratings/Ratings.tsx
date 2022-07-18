import React from "react";
import styles from "./styles.module.scss";

const Ratings: React.FC = () => {
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.stars}>
        <img src="star.png" alt="star" />
        <img src="star.png" alt="star" />
        <img src="star.png" alt="star" />
        <img src="star.png" alt="star" />
        <img src="star.png" alt="star" />
      </div>

      <div className={styles.rating}>5.0</div>

      <div className={styles.reviews}>7 Reviews</div>

      <div className={styles.buyers}>19 buyers</div>
    </div>
  );
};

export default Ratings;
