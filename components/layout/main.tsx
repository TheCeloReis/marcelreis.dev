import React, { useEffect, useState } from "react";
import NextHead from "next/head";

import { initGA } from "../../utils/analytics";

import { GlobalStyle } from "../../theme";
import { ThemeProvider } from "styled-components";
import { themes } from "../../theme";

import Nav from "../modules/nav";
import Footer from "../modules/footer";

type PropsType = {
	title: string;
	description: string;
	children?: any;
};

export default function MainLayout(props: PropsType) {
	const [theme, setTheme] = useState(1);

	const toggleTheme = () => setTheme(Number(!theme));

	useEffect(() => {
		if (!(window as any).GA_INITIALIZED) {
			initGA();
			(window as any).GA_INITIALIZED = true;
		}

		const currentTheme = window.localStorage.getItem("theme");
		if (process.browser && currentTheme !== null) {
			const themeNumber = parseInt(currentTheme);
			if (!isNaN(themeNumber) && themeNumber !== theme) {
				setTheme(themeNumber);
			}
		}
	}, [theme]);

	return (
		<>
			<NextHead>
				<link rel="icon" href="static/icon.png" type="image/x-icon" />
				<link
					href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
				<title>{props.title}</title>
				<meta name="theme-color" content={themes[1].color.primary} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={props.description} />
			</NextHead>
			<ThemeProvider theme={themes[1]}>
				<>
					<Nav />
					{props.children}
					<Footer />
				</>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}
