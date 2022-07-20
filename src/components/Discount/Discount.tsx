import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Discount as DiscountType } from "../../Types/Product";

type Timer = {
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;
};

const Discount: React.FC<{ discount: DiscountType }> = ({ discount }) => {
  const [timer, setTimer] = useState<Timer | null>(null);

  useEffect(() => {
    const end = new Date(discount.end_date).getTime();

    setInterval(() => {
      const start = Date.now();
      const timeLeft = end - start;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const timer = {
        daysLeft: Math.trunc(timeLeft / day),
        hoursLeft: Math.trunc((timeLeft % day) / hour),
        minutesLeft: Math.trunc((timeLeft % hour) / minute),
        secondsLeft: Math.trunc((timeLeft % minute) / second),
      };
      setTimer(timer);
    }, 100);
  }, []);

  return (
    <div className={styles.discountContainer}>
      <div className={styles.discountNum}>{discount.amount}</div>
      <div className={styles.discountText}>Discount ends in</div>
      <img src="discountTimerIcon.png" alt="discount timer icon" />
      <div
        className={styles.timer}
      >{`${timer?.daysLeft}d:${timer?.hoursLeft}h:${timer?.minutesLeft}m:${timer?.secondsLeft}s`}</div>
    </div>
  );
};

export default Discount;
