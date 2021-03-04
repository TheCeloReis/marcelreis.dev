import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import * as S from "./HeroHeader.styled";

function HeroHeader() {
  const [typing, setTyping] = useState(false);

  return (
    <S.Container>
      <S.H1>Marcelo Reis</S.H1>
      <S.P>
        <Typewriter
          onInit={(typewriter) => {
            setTyping(true);

            typewriter
              .typeString("Frontend Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Web Support Engineer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Always Tinkering!")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(1000)
              .start();
          }}
          options={{ loop: true }}
        />
      </S.P>
      {!typing && <S.P>Frontend Developer</S.P>}
    </S.Container>
  );
}

export default HeroHeader;
