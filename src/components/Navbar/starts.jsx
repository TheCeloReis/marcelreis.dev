import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Animation } from "./canva";

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Heaven = () => {
  const canvas = useRef(null);
  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    const initialDimensions = {
      height: (canvas.current.height = canvas.current.offsetHeight),
      width: (canvas.current.width = canvas.current.offsetWidth),
    };

    setDimension(initialDimensions);

    window.ctx = ctx;
    window.canvas = canvas.current;

    const animation = new Animation(ctx, initialDimensions, 2048);
    animation.init();
    setAnimation(animation);
  }, []);

  useEffect(() => {
    animation;
  }, [dimension.height, dimension.width]);

  return <Canvas ref={canvas}></Canvas>;
};

Heaven.propTypes = {};

export default Heaven;
