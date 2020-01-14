import React, { useEffect } from "react";
import NextHead from "next/head";

import { initGA } from "../../utils/analytics";

import { jsTheme } from "../../theme";

type PropsType = {
	title: string;
	description: string;
	children?: any;
};

export default function MainLayout(props: PropsType) {
	useEffect(() => {
		if (!(window as any).GA_INITIALIZED) {
			initGA();
			(window as any).GA_INITIALIZED = true;
		}
	}, []);

	return (
		<>
			<NextHead>
				<link rel="icon" href="static/img/icon.png" type="image/x-icon" />
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap"
					as="style"
				/>
				<title>{props.title}</title>
				<link rel="preconnect" href="https://www.google-analytics.com"></link>
				<meta name="theme-color" content={jsTheme.color.primary} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={props.description} />
			</NextHead>
			{props.children}
		</>
	);
}
