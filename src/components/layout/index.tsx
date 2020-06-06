import React from "react";

import styles from "./.module.scss";

type PropsType = {
  padding?: "hero";
  children: unknown;
};
const Layout = (props: PropsType) => {
  return (
    <div
      className={`${styles.content} ${
        props.padding === "hero" && styles.withHero
      }`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
