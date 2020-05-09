import React from "react";
import PropTypes from "prop-types";

import { Wave1, Wave2 } from "../Waves";

import * as S from "./styled";

const Background = ({ height }) => {
  return (
    <S.Header height={height}>
      <S.WaveArea>
        <S.WaveContainer delay={0}>
          <Wave1 />
        </S.WaveContainer>
        <S.WaveContainer delay={4}>
          <Wave2 />
        </S.WaveContainer>
        <S.WaveContainer delay={8}>
          <Wave1 />
        </S.WaveContainer>
        <S.WaveContainer delay={12}>
          <Wave2 />
        </S.WaveContainer>
      </S.WaveArea>
    </S.Header>
  );
};
Background.propTypes = {
  height: PropTypes.string,
};

const Navbar = () => {
  return <Background></Background>;
};

export default Navbar;
