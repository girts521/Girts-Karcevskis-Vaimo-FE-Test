import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Reviews } from "../../Types/Product";

const Ratings: React.FC<{ reviews: Reviews }> = ({ reviews }) => {
  const [ratings, setRatings] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let rating = parseInt(reviews.rating);
    setRatings([]);

    const setRatingsRecursive = () => {
      if (rating === 0) return;
      setRatings((prevState) => {
        return [
          ...prevState,
          <img key={Math.random()} src="star.png" alt="star" />,
        ];
      });
      rating--;
      setRatingsRecursive();
    };
    setRatingsRecursive();
  }, []);

  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.stars}>
        {ratings.length &&
          ratings.map((rating) => {
            return rating;
          })}
      </div>

      <div className={styles.rating}>{reviews.rating}</div>

      <div className={styles.reviews}>{`${reviews.count} Reviews`}</div>

      <div className={styles.buyers}>{`${reviews.total_buyers} buyers`}</div>
    </div>
  );
};

export default Ratings;
