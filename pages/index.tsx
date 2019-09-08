import React from "react";
import Nav from "../components/nav";
import Head from "../components/base/head";
import HeroContainer from "../components/heroContainer";
import TypedSentences from "../components/typedSentences";
import styled from "styled-components";

import Section from "../components/base/section";
import { SectionHeader } from "../components/base/titles";

const SENTENCES = [
  "Oi, eu sou Marcelo Reis",
  "Front-End Developer",
  "WebDesinger nas horas vagas",
  "E apaixonado por Javascript",
];

const HeroHeader = styled.div`
  @media screen and (min-width: 600px) {
    font-size: 3rem;
    max-width: 800px;
  }
  display: flex;
  width: calc(100% - 0.5rem);
  position: absolute;
  top: calc(50% + 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  max-height: 200px;
  max-width: 200px;
  border-radius: 150px;
  @media screen and (min-width: 600px) {
  }
`;
const AboutMe = styled.div`
  width: calc(100% - 1rem);
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 1rem;
  }
`;
const TextSection = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  @media screen and (min-width: 600px) {
    text-align: justify;
    width: calc(100% - 4rem);
    margin: 0 2rem;
  }
  & p {
    margin: 1rem 0;
  }
`;
const LinkLetras = styled.a`
  color: #00ffff;
  font-weight: bold;
`;
const ImageRow = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    width: 100%;
    margin-top: 2rem;
  }

  & img {
    filter: grayscale(80%);
    width: 20%;
    height: 100%;
    transition: 0.3s all;

    :nth-child(2) {
      z-index: 1;
    }

    :hover {
      transform: scale(1.2);
      filter: grayscale(0%);
      transition: 0.6s all;
      z-index: 2;
    }
  }
`;

const Home = () => (
  <>
    <Head
      title="MarcelReis FrontEnd Developer"
      description="Desenvolvedor apaixonado pelo Front End, pode ser encontrado codando ou em algum MeetUp de Belo Horizonte, mas pra saber o que codar depois"
    ></Head>
    <Nav />
    <HeroContainer>
      <HeroHeader>
        <TypedSentences sentences={SENTENCES} speed={100} />
      </HeroHeader>
    </HeroContainer>
    <Section>
      <SectionHeader>Quem é o Marcelo?</SectionHeader>

      <AboutMe>
        <ProfileImg src="/static/marcelo.jpeg" />
        <TextSection>
          <p>
            Sou um ser humano que já vagou por várias áreas, mas encotrou paixão
            pelo que faz no desenvolvimento. Independente do que fazia ou
            estudava sempre descomplicava com um script.
          </p>
          <p>
            Desde 2019 resolvi seguir a area, frequentando vários MeetUps
            percebi que o Front End era o que mais me encantava. Atualmente
            curso Sistemas de Informação na estácio e sou estagiario de Front
            End na exceléntissma{" "}
            <LinkLetras href="https://www.letras.mus.br">Letras</LinkLetras>
          </p>
          <p>
            Quando não estou aprendendo sobre uma tecnologia do Front End gosto
            de correr, pedalar e tentar tocar teclado. Também gosto de usar meu
            tempo participando de foruns.
          </p>
        </TextSection>
      </AboutMe>
      <ImageRow>
        <img src="/static/magr1.jpg" alt="Marcelo Reis" />
        <img src="/static/magr2.jpg" alt="Marcelo Reis" />
        <img src="/static/magr3.jpg" alt="Marcelo Reis" />
        <img src="/static/magr4.jpg" alt="Marcelo Reis" />
        <img src="/static/magr5.jpg" alt="Marcelo Reis" />
      </ImageRow>
    </Section>
  </>
);

export default Home;
