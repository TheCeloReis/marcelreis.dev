import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${styledNormalize}

	#__next {
		min-height: 100vh;
		color: ${({ theme }) => theme.colors.contrast[3]};
		background-color: ${({ theme }) => theme.colors.base[5]};
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
