import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import HeroContainer from "../components/heroContainer";
import TypedSentences from "../components/typedSentences";
import styled from "styled-components";

const SENTENCES = [
  "Oi, eu sou Marcelo Reis",
  "Front-End Developer",
  "Vivendo de Javascript",
  "E apaixonado por codar s2",
];

const HeroHeader = styled.div`
  @media screen and (min-width: 600px) {
    font-size: 3rem;
    max-width: 800px;
  }
  font-size: 1.5rem;
  text-align: center;
  width: calc(100% - 0.25rem);
  display: flex;
  position: absolute;
  justify-content: center;
  top: calc(50% + 2rem);
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
