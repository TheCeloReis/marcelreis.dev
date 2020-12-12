import React, { useState } from "react";

import * as S from "./Experiences.styled";

const Experiences = () => {
  const [tab, setTab] = useState(0);

  return (
    <section id="experience">
      <h2>Experiencias</h2>

      <S.Container>
        <S.Tabs>
          <S.Tab isActive={tab === 0} onClick={() => setTab(0)}>
            Letras
          </S.Tab>
          <S.Tab isActive={tab === 1} onClick={() => setTab(1)}>
            Radioterapia São Francisco
          </S.Tab>
        </S.Tabs>

        <S.ContentContainer>
          <div style={{ transform: `translateX(-${tab * 50}%)` }}>
            <S.Content>
              <h3>Letras</h3>
              <p>Desenvolvedor Frontend</p>
              <p>07/2019 - Atualmente</p>
            </S.Content>

            <S.Content>
              <h3>Radioterapia São Francisco</h3>
              <p>Auxiliar Administrativo</p>
              <p>03/2017 - 01/2019</p>
            </S.Content>
          </div>
        </S.ContentContainer>
      </S.Container>
    </section>
  );
};

export default Experiences;
