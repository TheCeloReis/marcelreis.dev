import React, { useEffect, useState } from "react";

import Head from "../components/layout/main";
import TypedSentences from "../components/base/typedSentences";
import { logPageView } from "../utils/analytics";

import HeroHeader from "../components/modules/heroHeader";

const SENTENCES = [
	"Oi, eu sou Marcelo Reis",
	"Front-End Developer no Letras",
	"WebDesigner Entusiasta nas horas vagas",
	"E amante do Javascript e Typescript"
];

export default function index() {
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
		</Head>
	);
}
