import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useService } from "@xstate/react";

import { Wave1, Wave2, Waves } from "../Waves";

import * as S from "./styled";
import { heroService } from "./machine";

function generateStars(dimension, quantity) {
  let boxShadows = "";

  for (let i = 0; i < quantity; i++) {
    const { x, y } = getCordinates(dimension);
    boxShadows += `, ${x}px ${y}px #fff`;
  }

  return boxShadows.substr(2);
}

function getCordinates(radius) {
  const a = Math.random() * 2 * Math.PI;
  const r = radius * Math.sqrt(Math.random());
  return {
    x: r * Math.cos(a),
    y: r * Math.sin(a),
  };
}

const Hero = () => {
  const [stars, setStars] = useState({ small: "", medium: "", large: "" });
  const [radius, setRadius] = useState(0);
  const [state, send] = useService(heroService);

  console.log("state", state.value);

  useEffect(() => {
    send("NORMAL");

    const resize = () =>
      window.requestAnimationFrame(() =>
        setRadius(Math.max(window.innerHeight * 0.75, window.innerWidth))
      );

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setStars({
      small: generateStars(radius, radius * 2),
      medium: generateStars(radius, radius * 0.25),
      large: generateStars(radius, radius * 0.0625),
    });
  }, [radius, state.value]);

  return (
    <S.Header height={state.value}>
      <Waves color="#fff" position={"bottom"} />
      <S.Star1 stars={stars.small} />
      <S.Star2 stars={stars.medium} />
      <S.Star3 stars={stars.large} />
    </S.Header>
  );
};
Hero.propTypes = {
  height: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Hero;
