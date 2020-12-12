import React, { useState } from "react";

import * as S from "./Experiences.styled";

const Experiences = () => {
  const [tab, setTab] = useState(0);

  return (
    <S.Section id="experience">
      <S.SectionHeading>Experiência</S.SectionHeading>

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
              <S.JobHeader>
                <S.Title>Desenvolvedor Frontend</S.Title>
                <S.Company>Letras</S.Company>
                <S.Time>07/2019 - Atualmente</S.Time>
              </S.JobHeader>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur hic, porro impedit aliquid cupiditate accusamus
                provident ipsa dolores et, alias tempore magni sed placeat,
                cumque qui! Quasi corporis vitae labore!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                beatae atque quaerat saepe asperiores, vero commodi omnis iste
                suscipit accusantium, fuga in pariatur veniam porro vitae!
                Inventore tempora voluptates veniam.
              </p>
            </S.Content>

            <S.Content>
              <S.JobHeader>
                <S.Title>Auxiliar Administrativo</S.Title>
                <S.Company>Radioterapia São Francisco</S.Company>
                <S.Time>03/2017 - 01/2019</S.Time>
              </S.JobHeader>

              <p>
                Auxiliava atividades do setor administrativo e era responsável
                pelo faturamento e controle de contas a pagar de diversos
                convênios. Fiz o controle de contratos e contato com os
                convênios para acordo de tabelas. Quando necessário, auxiliava o
                atendimento ao cliente na recepção.
              </p>
            </S.Content>
          </div>
        </S.ContentContainer>
      </S.Container>
    </S.Section>
  );
};

export default Experiences;
