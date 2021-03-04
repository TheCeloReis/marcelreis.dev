import React, { useState } from "react";

import * as S from "./Experiences.styled";

const Experiences = () => {
  const [tab, setTab] = useState(0);

  return (
    <S.Section id="experience">
      <S.SectionHeading>Experiências</S.SectionHeading>

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
                <S.Time>07/2019 - 03/2021</S.Time>
              </S.JobHeader>

              <S.JobContent>
                <p>
                  Faço manutenção e desenvolvimento de páginas com alto trafégo,
                  como Letras.mus.br e Ouvirmusica.
                </p>

                <p>
                  Auxilio usuarios internos na resolução de problemas, bug e
                  criação de soluções personalizadas.
                </p>

                <p>
                  Contribui na implementação de melhores práticas de teste e
                  type safety.
                </p>

                <p>
                  Trabalhei na codificação de diversas interfaces complexas e
                  landing page.
                </p>
              </S.JobContent>
            </S.Content>

            <S.Content>
              <S.JobHeader>
                <S.Title>Auxiliar Administrativo</S.Title>
                <S.Company>Radioterapia São Francisco</S.Company>
                <S.Time>03/2017 - 01/2019</S.Time>
              </S.JobHeader>

              <S.JobContent>
                <p>
                  Auxiliava atividades do setor administrativo e era responsável
                  pelo faturamento e controle de contas a pagar de diversos
                  convênios.
                </p>
                <br />
                <p>
                  Fiz o controle de contratos e contato com os convênios para
                  acordo de tabelas.
                </p>
                <br />
                <p>
                  Quando necessário, auxiliava o atendimento ao cliente na
                  recepção.
                </p>
              </S.JobContent>
            </S.Content>
          </div>
        </S.ContentContainer>
      </S.Container>
    </S.Section>
  );
};

export default Experiences;
