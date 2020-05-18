import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Waves } from "./waves";

import * as S from "./styled";

function generateStars(dimension: number, quantity: number) {
  let boxShadows = "";

  for (let i = 0; i < quantity; i++) {
    const { x, y } = getCordinates(dimension);
    boxShadows += `, ${x}px ${y}px #fff`;
  }

  return boxShadows.substr(2);
}

function getCordinates(radius: number) {
  const a = Math.random() * 2 * Math.PI;
  const r = radius * Math.sqrt(Math.random());
  return {
    x: r * Math.cos(a),
    y: r * Math.sin(a),
  };
}

const Background = ({ mode }) => {
  const [stars, setStars] = useState({ small: "", medium: "", large: "" });
  const [radius, setRadius] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    const resize = () =>
      window.requestAnimationFrame(() =>
        setRadius(Math.max(window.innerHeight * 0.75, window.innerWidth))
      );

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (mode === "full") {
      setOverlay(true);
      window.requestAnimationFrame(() => {
        header.current.addEventListener(
          "transitionend",
          () => setOverlay(false),
          { once: true }
        );
      });
    }
  }, [mode]);

  useEffect(() => {
    setStars({
      small: generateStars(radius, radius * 2),
      medium: generateStars(radius, radius * 0.25),
      large: generateStars(radius, radius * 0.0625),
    });
  }, [radius]);

  return (
    <>
      <S.Header ref={header} height={mode}>
        <Waves color="#fff" position={"bottom"} />
        <S.Star1 stars={stars.small} />
        <S.Star2 stars={stars.medium} />
        <S.Star3 stars={stars.large} />
      </S.Header>
      {overlay && <S.Overlay />}
    </>
  );
};

export default Background;
