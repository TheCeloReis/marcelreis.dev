import React from "react";

import styles from "./.module.scss";

export const Chip = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.chip}>{props.children}</div>;
};

export const ChipContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.container}>{props.children}</div>;
};
