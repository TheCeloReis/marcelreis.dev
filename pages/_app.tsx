import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";

import { jsTheme, GlobalStyle } from "../theme";

import Nav from "../components/modules/nav";
import Footer from "../components/modules/footer";

const BackdropTransition = styled.div`
	transform: translateY(-100%);
	transition: 300ms;
	transition-timing-function: ease;
	transition-property: transform;
	z-index: 80;
	background-color: ${(props: any) => props.theme.color.contrast};
	position: fixed;
	width: 100%;
	height: calc(100vh - 64px);
`;

function App({ Component, pageProps, router }: any) {
	return (
		<ThemeProvider theme={jsTheme}>
			<Nav />
			<PageTransition timeout={300} classNames="pt" skipInitialTransition>
				<>
					<BackdropTransition className="pt-backdrop" />
					<Component {...pageProps} key={router.route} />
				</>
			</PageTransition>
			<Footer />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
