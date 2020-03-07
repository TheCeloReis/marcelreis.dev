import React, { useEffect, useState } from "react";

import Head from "../components/layout";
import TypedSentences from "../components/modules/typedSentences";
import { logPageView } from "../utils/analytics";

import HeroHeader from "../components/modules/heroHeader";
import Section from "../components/base/section";
import { Typography } from "../components/base/typography";
import Contact from "../components/modules/contact";

const SENTENCES = [
  "Hi, I'm Marcelo Reis",
  "Front-End Developer",
  "WebDesigner Enthusiast",
  "And a Javascript Lover",
];

export default function Index() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <Head
      title="MarcelReis FrontEnd Developer"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typescript, jQuery, Backbone e SASS"
    >
      <HeroHeader height="66">
        <TypedSentences sentences={SENTENCES} speed={50} />
      </HeroHeader>
      <Section>
        <Typography dash variant="h3" as="h2">
          Sobre
        </Typography>
        <Typography variant="body1" as="p" centerInMobile>
          Sou um desenvolvedor front end apaixado pelo que faz. Trabalho
          principalmente com React e Typescript, mas mexo com qualquer coisa que
          tenha Javascript (sim, Node.js). Posso ser facilmente encontrado em
          algum Meetup acontecendo em Belo Horizonte.
        </Typography>
      </Section>

      <Section>
        <Typography dash variant="h3" as="h2">
          Contato
        </Typography>
        <Contact />
      </Section>
    </Head>
  );
}
