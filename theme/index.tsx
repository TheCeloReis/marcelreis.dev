import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${styledNormalize}

	#__next {
		min-height: 100vh;
		background-color: #eee;
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
	ul,
	ol,
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
	ul, ol {
		list-style-type: none;
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
const jsTheme = {
	color: {
		...commonColors,
		primaryL: "#F8E542",
		primary: "#F7E019",
		primaryD: "#CBB815",

		contrastH: "#000",
		contrast: "#242124",
		contrastL: "#333"
	}
};
const tsTheme = {
	color: {
		...commonColors,
		primaryL: "#2E92D5",
		primary: "#007ACC",
		primaryD: "#0064A7",

		contrastH: "#fff",
		contrast: "#eee",
		contrastL: "#ddd"
	}
};
export const themes = [jsTheme, tsTheme];
