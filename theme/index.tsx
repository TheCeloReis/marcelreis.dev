import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${styledNormalize}

	#__next {
		min-height: 100vh;
		color: ${({ theme }: any) => theme.color.contrast};
		background-color: ${({ theme }: any) => theme.color.base};
		position: relative;
	}
		
	* {
		font-family: "Roboto", Arial, Helvetica, sans-serif;
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	li,
	p,
	div,
	span,
	button,
	body {
		padding: 0;
		margin: 0;
	}
	a {
		color: #000;
		text-decoration: none;
	}

	button {
		outline: none;
		border: none;
		cursor: pointer;
	}
`;

const commonColors = {
	gray50: "#fafafa",
	gray100: "#f5f5f5",
	gray200: "#eeeeee",
	gray300: "#e0e0e0",
	gray400: "#bdbdbd",
	gray500: "#9e9e9e",
	gray600: "#757575",
	gray700: "#616161",
	gray800: "#424242",
	gray900: "#212121"
};
const commonTheme = {
	boxShadow: [
		"none",
		"rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
	]
};
const jsTheme = {
	...commonTheme,
	darkTheme: false,
	color: {
		...commonColors,
		primaryL: "#F8E542",
		primary: "#F7E019",
		primaryD: "#CBB815",

		contrastH: "#111",
		contrast: "#242124",
		contrastL: "#333",

		baseL: "#fff",
		base: "#eee",
		baseD: "#ddd"
	}
};
const tsTheme = {
	...commonTheme,
	darkTheme: true,
	color: {
		...commonColors,
		primaryL: "#2E92D5",
		primary: "#007ACC",
		primaryD: "#0064A7",

		contrastH: "#fff",
		contrast: "#eee",
		contrastL: "#ddd",

		baseL: "#333",
		base: "#242124",
		baseD: "#111"
	}
};
export const themes = [jsTheme, tsTheme];
