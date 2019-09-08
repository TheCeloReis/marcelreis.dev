import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import HeroContainer from "../components/heroContainer";
import TypedSentences from "../components/typedSentences";
import styled from "styled-components";

const SENTENCES = [
  "Oi, eu sou Marcelo Reis",
  "Front-End Developer",
  "Participante de vários Meetups",
  "E apaixonado por codar s2",
];

const HeroHeader = styled.div`
  @media screen and (min-width: 600px) {
    font-size: 3rem;
    max-width: 800px;
  }
  font-size: 1.75rem;
  text-align: center;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  </>
);

export default Home;
