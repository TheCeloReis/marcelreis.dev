import React from "react";

import { useStars } from "./NightSky.hooks";
import * as S from "./NightSky.styled";

function NightSky() {
  const stars = useStars();

  return (
    <>
      <S.Body>
        <S.Waves />
        <S.Stars style={{ boxShadow: stars.small }} />
        <S.Stars style={{ boxShadow: stars.medium }} />
        <S.Stars style={{ boxShadow: stars.large }} />
      </S.Body>
      <S.Spacer style={{ height: "100vh" }} />
    </>
  );
}

export default NightSky;
