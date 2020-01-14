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
		color: inherit;
		text-decoration: none;
	}

	button {
		outline: none;
		border: none;
		cursor: pointer;
	}

	/* PAGE TRANSITION */
	.pt-enter {
		.pt-backdrop {
			transform: translateY(0);
		}
	}
	.pt-enter-active {
		.pt-backdrop {
			transform: translateY(-100%);
		}
	}
	.pt-exit {
		.pt-backdrop {
			transform: translateY(-100%);
		}
	}
	.pt-exit-active {
		.pt-backdrop {
			transform: translateY(0);
		}
	}
`;

const baseTheme = {
	boxShadow: [
		"none",
		"rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
	],
	color: {
		gray: [
			"#fafafa",
			"#f5f5f5",
			"#eeeeee",
			"#e0e0e0",
			"#bdbdbd",
			"#9e9e9e",
			"#757575",
			"#616161",
			"#424242",
			"#212121"
		]
	}
};

export const jsTheme = {
	...baseTheme,
	darkTheme: false,
	color: {
		...baseTheme.color,
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

export const tsTheme = {
	...baseTheme,
	darkTheme: true,
	color: {
		...baseTheme.color,
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
