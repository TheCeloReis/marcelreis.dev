import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import * as S from "./styled";

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40,
};

const TypedHeader = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    new Typed(typedRef.current, {
      strings: [
        "Front end developer",
        "WebDesigner Enthusiast",
        "Explaning code with words",
      ],
      typeSpeed: 30,
      fadeOut: true,
      fadeOutDelay: 2000,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
      backDelay: 2000,
    });
  }, []);

  return (
    <S.Container>
      <S.FirstLine>Hello, I'm Marcelo Reis</S.FirstLine>
      <br />
      <S.SecondLine ref={typedRef}></S.SecondLine>
    </S.Container>
  );
};

export default TypedHeader;
