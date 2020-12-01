import React from "react";

import styles from "./.module.scss";

import { useTimeSince } from "./hook";
import { useTranslation } from "src/cms/translation";

import Card from "uiKit/card";

const lastDay = new Date("Tue Mar 17 2020 20:29:00 GMT-0300");

const CovidTimer = () => {
  const { hours, minutes, seconds } = useTimeSince(lastDay);
  const t = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("myCovidQuarantine")}</h2>
      <div className={styles.timer}>
        <Card className={styles.hours}>
          <span className={styles.timeValue}>{hours}</span>
          <span className={styles.timeLabel}>{t("hours")}</span>
        </Card>

        <Card className={styles.minutes}>
          <span className={styles.timeValue}>{minutes.padStart(2, "0")}</span>
          <span className={styles.timeLabel}>{t("minutes")}</span>
        </Card>

        <Card className={styles.seconds}>
          <span className={styles.timeValue}>{seconds.padStart(2, "0")}</span>
          <span className={styles.timeLabel}>{t("seconds")}</span>
        </Card>
      </div>
    </div>
  );
};

export default CovidTimer;
