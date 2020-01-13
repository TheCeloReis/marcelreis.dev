import React from "react";
import { ThemeProvider } from "styled-components";

import { jsTheme, GlobalStyle } from "../theme";

import Nav from "../components/modules/nav";
import Footer from "../components/modules/footer";

function MyApp({ Component, pageProps }: any) {
	return (
		<ThemeProvider theme={jsTheme}>
			<Nav />
			<Component {...pageProps} />
			<Footer />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default MyApp;
