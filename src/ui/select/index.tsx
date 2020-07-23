import React from "react";

import styles from "./.module.scss";

type PropsType = {
  value: string;
  options: { value: string; text: string }[];
  className: string;
  onChange: (value: string) => void;
};
function Select(props: PropsType) {
  return (
    <select
      className={`${styles.select} ${props.className}`}
      onBlur={(event) => props.onChange(event.target.value)}
      onChange={(event) => props.onChange(event.target.value)}
      value={props.value}
    >
      {props.options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default Select;
