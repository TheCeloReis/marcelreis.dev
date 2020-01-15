import React, { useEffect } from "react";

import Head from "../components/layout/main";
import TypedSentences from "../components/modules/typedSentences";
import { logPageView } from "../utils/analytics";

import HeroHeader from "../components/modules/heroHeader/heroHeader";
import Section from "../components/base/section";
import { H1 } from "../components/base/titles";
import Contact from "../components/modules/contact";
import Toolbox from "../components/modules/toolbox";

const SENTENCES = [
	"Oi, eu sou Marcelo Reis",
	"Front-End Developer no Letras",
	"WebDesigner Entusiasta nas horas vagas",
	"E amante do Javascript e Typescript"
];

export default function Index() {
	useEffect(() => {
		logPageView();
	}, []);

	return (
		<Head
			title="MarcelReis FrontEnd Developer"
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		>
			<HeroHeader>
				<TypedSentences sentences={SENTENCES} speed={50} />
			</HeroHeader>

			<Section>
				<H1>Sobre</H1>
				<p>
					Sou um estudante de Sistemas de Informação com uma trajetória bem
					curiosa. Apaixonado pelo Front-end e por JavaScript em seus diversos
					flavours, procuro sempre estar atento as novidades. Membro de diversos
					grupos de desenvolvedores em BH, acredito no poder das comunidades.
				</p>
			</Section>

			<Section>
				<H1>Skills</H1>
				<Toolbox />
			</Section>

			<Section>
				<H1>Contato</H1>
				<Contact />
			</Section>
		</Head>
	);
}
