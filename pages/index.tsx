import React, { useEffect } from "react";

import Head from "../components/layout/main";
import TypedSentences from "../components/base/typedSentences";
import { logPageView } from "../utils/analytics";

import HeroHeader from "../components/modules/heroHeader";
import Section from "../components/base/section";
import { H1 } from "../components/base/titles";
import Contact from "../components/modules/contact";

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
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
					pariatur iste voluptas porro laborum totam voluptate molestias, ipsum
					itaque quam corrupti voluptates fugiat, esse dignissimos debitis nam,
					nostrum accusantium quibusdam!
				</p>
			</Section>

			<Section>
				<H1>Contato</H1>
				<Contact />
			</Section>
		</Head>
	);
}
