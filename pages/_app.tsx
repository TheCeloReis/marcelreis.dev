import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";

import Nav from "../components/modules/nav";
import Footer from "../components/modules/footer";
import JsTheme from "../theme/jsTheme";
import { GlobalStyle } from "../theme";

const BackdropTransition = styled.div`
	transform: translateY(-100%);
	transition: 300ms;
	transition-timing-function: ease;
	transition-property: transform;
	z-index: 80;
	background-color: ${({ theme }) => theme.colors.base[5]};
	border-bottom: solid 2px ${({ theme }) => theme.colors.base[5]};
	position: fixed;
	width: 100%;
	height: calc(100vh - 64px);
`;

function App({ Component, pageProps, router }: any) {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const isDarkMode =
			window.localStorage.getItem("darkMode") === "1" ? true : false;
		setDarkMode(isDarkMode);
	}, []);

	const toggleDarkMode = () => {
		const isDarkMode =
			window.localStorage.getItem("darkMode") === "1" ? true : false;

		window.localStorage.setItem("darkMode", !isDarkMode ? "1" : "0");
		setDarkMode(!isDarkMode);
	};

	return (
		<ThemeProvider theme={darkMode ? JsTheme : JsTheme}>
			<Nav toogleDarkMode={toggleDarkMode} />
			<PageTransition timeout={400} classNames="pt" skipInitialTransition>
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
