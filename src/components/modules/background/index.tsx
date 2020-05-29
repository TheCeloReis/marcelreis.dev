import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Waves } from "../waves";
import { useStars } from "./hooks";

import * as S from "./styled";

type PropTypes = {
  pageState: "full" | "fixed";
  transitionOn: string;
};

const Background = ({ pageState, transitionOn }: PropTypes) => {
  const [backgroundState, setBackgroundState] = useState<
    "full" | "fixed" | "hidden" | null
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

  return (
    <S.Header height={backgroundState ?? pageState}>
      <Waves position={"bottom"} />
      <S.Star1 stars={stars.small} />
      <S.Star2 stars={stars.medium} />
      <S.Star3 stars={stars.large} />
    </S.Header>
  );
};

export default Background;
