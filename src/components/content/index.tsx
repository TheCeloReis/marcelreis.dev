import React from "react";

import styles from "./.module.scss";

const Content = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.container}>{props.children}</div>;
};

export default Content;
