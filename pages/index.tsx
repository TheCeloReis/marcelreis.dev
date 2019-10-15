import React, { useEffect } from "react";
import Nav from "../components/nav";
import Head from "../components/base/head";
import HeroContainer from "../components/heroContainer";
import TypedSentences from "../components/typedSentences";
import styled from "styled-components";
import { logPageView } from "../utils/analytics";

import Footer from "../components/modules/footer";

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

export default function index() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <>
      <Head
        title="MarcelReis FrontEnd Developer"
        description="Desenvolvedor apaixonado pelo Front End, pode ser encontrado codando ou em algum MeetUp de Belo Horizonte, mas pra saber o que codar depois"
      ></Head>
      <Nav />
      <HeroContainer>
        <HeroHeader>
          <TypedSentences sentences={SENTENCES} speed={50} />
        </HeroHeader>
      </HeroContainer>
      <Footer />
    </>
  );
}
