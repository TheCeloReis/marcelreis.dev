import React from "react";

import styles from "./.module.scss";

type PropsType = {
  title: string;
  sentences: string[];
};
const Hero = (props: PropsType) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <div className={styles.lines}>
        {props.sentences.map((sentence, index) => (
          <span key={index} className={styles.line}>
            {sentence}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
