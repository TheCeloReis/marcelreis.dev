import React, { useEffect } from "react";

import MainLayout from "../components/layout/main";

import { logPageView } from "../utils/analytics";

import Section from "../components/base/section";
import { H1 } from "../components/base/typography";

export default function Error() {
	useEffect(() => {
		logPageView();
	}, []);

	return (
		<MainLayout
			title="MarcelReis FrontEnd Developer"
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		>
			<Section>
				<H1>Página não encontrada</H1>
			</Section>
		</MainLayout>
	);
}
