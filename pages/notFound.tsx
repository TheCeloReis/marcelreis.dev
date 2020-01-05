import React, { useEffect } from "react";

import MainLayout from "../components/layout/main";

import { logPageView } from "../utils/analytics";

export default function index() {
	useEffect(() => {
		logPageView();
	}, []);

	return (
		<MainLayout
			title="MarcelReis FrontEnd Developer"
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		></MainLayout>
	);
}
