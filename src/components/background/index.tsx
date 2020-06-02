import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Waves } from "../waves";
import { useStars } from "./hooks";

import styles from "./.module.scss";

type PropTypes = {
  pageState: "full" | "tall" | "fixed";
  transitionOn: string;
};

const Background = ({ pageState, transitionOn }: PropTypes) => {
  const [backgroundState, setBackgroundState] = useState<
    "full" | "tall" | "fixed" | null
  >(null);

  useEffect(() => {
    setBackgroundState(pageState);
  }, [pageState]);

  useEffect(() => {
    if (backgroundState === null) {
      return setBackgroundState(pageState);
    }

    setBackgroundState("full");

    setTimeout(() => {
      setBackgroundState(pageState);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionOn]);

  const stars = useStars();

  const state = backgroundState ?? pageState;

  return (
    <div
      className={styles.header}
      style={{
        position: state === "full" ? "fixed" : "absolute",
        height:
          state === "full" || state === "tall" ? "calc(100vh - 72px)" : "72px",
      }}
    >
      <Waves className={styles.wave} />
      <div className={styles.star} style={{ boxShadow: stars.small }} />
      <div className={styles.star} style={{ boxShadow: stars.medium }} />
      <div className={styles.star} style={{ boxShadow: stars.large }} />
    </div>
  );
};

export default Background;
