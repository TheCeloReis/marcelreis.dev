import React from "react";

import styles from "./.module.scss";

type PropsType = {
  hoverable?: boolean;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  innerProps?: React.ComponentProps<"div">;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card(props: PropsType) {
  const classes = [styles.container];
  props.className && classes.push(props.className);
  props.hoverable && classes.push(styles.hoverable);

  if (props.inline) {
    return (
      <span {...props.innerProps} className={classes.join(" ")}>
        {props.children}
      </span>
    );
  }

  return (
    <div {...props.innerProps} className={classes.join(" ")}>
      {props.children}
    </div>
  );
}

export default Card;
