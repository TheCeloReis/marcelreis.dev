import React, { useEffect } from "react";

import Head from "../components/layout/main";
import TypedSentences from "../components/base/typedSentences";
import { logPageView } from "../utils/analytics";

import HeroHeader from "../components/modules/heroHeader";

import { jsTheme, tsTheme } from "../theme";

const SENTENCES = [
  "Oi, eu sou Marcelo Reis",
  "Front-End Developer no Letras",
  "WebDesigner Entusiasta nas horas vagas",
  "E apaixonado por Javascript e Typescript",
];

export default function index() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <Head
      title="MarcelReis FrontEnd Developer"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
      theme={tsTheme}
    >
      <HeroHeader>
        <TypedSentences sentences={SENTENCES} speed={50} />
      </HeroHeader>
    </Head>
  );
}
