import React from "react";
import { FaReact } from "react-icons/fa";

import styles from "./.module.scss";

type PropsType = {
  title: string;
  subtitle: string;
};

export const ReactHeader = (props: PropsType) => {
  return (
    <div className={styles.skills}>
      <FaReact className={`${styles.react} ${styles.reactBack}`} />
      <FaReact className={styles.react} />
      <div className={`${styles.header}`}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};
