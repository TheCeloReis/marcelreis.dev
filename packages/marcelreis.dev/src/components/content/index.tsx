import React from "react";

import styles from "./.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Content = ({ children }: { children: any }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Content;
