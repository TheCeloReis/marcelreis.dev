import React from "react";

import styles from "./.module.scss";

import Card from "components/card";
import { useTimeSince } from "./hook";

const lastDay = new Date("Tue Mar 17 2020 20:29:00 GMT-0300");

const CovidTimer = () => {
  const { hours, minutes, seconds } = useTimeSince(lastDay);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My COVID Quarantine</h2>
      <div className={styles.timer}>
        <Card className={styles.hours}>
          <span className={styles.timeValue}>{hours}</span>
          <span className={styles.timeLabel}>hours</span>
        </Card>

        <Card className={styles.minutes}>
          <span className={styles.timeValue}>{minutes.padStart(2, "0")}</span>
          <span className={styles.timeLabel}>minutes</span>
        </Card>

        <Card className={styles.seconds}>
          <span className={styles.timeValue}>{seconds.padStart(2, "0")}</span>
          <span className={styles.timeLabel}>seconds</span>
        </Card>
      </div>
    </div>
  );
};

export default CovidTimer;
