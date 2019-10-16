import React, { useEffect } from "react";
import Nav from "../components/nav";
import Head from "../components/base/head";
import TypedSentences from "../components/typedSentences";
import { logPageView } from "../utils/analytics";

import Footer from "../components/modules/footer";
import HeroHeader from "../components/heroHeader";

const SENTENCES = [
  "Oi, eu sou Marcelo Reis",
  "Front-End Developer",
  "WebDesinger nas horas vagas",
  "E apaixonado por Javascript",
];

export default function index() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <>
      <Head
        title="MarcelReis FrontEnd Developer"
        description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
      ></Head>
      <Nav />
      <HeroHeader>
        <TypedSentences sentences={SENTENCES} speed={50} />
      </HeroHeader>
      <Footer />
    </>
  );
}
