import styled, { css } from "styled-components";

type PropsType = {
	variant: "h1" | "h2" | "h3" | "body1";
	dash?: boolean;
};

export const Typography = styled.span<PropsType>`
	display: inline-block;

  ${({ variant }) => {
		if (["h1", "h2", "h3"].includes(variant)) {
			return "margin-top: 1rem";
		}

		return "margin-top: 0.5rem;";
	}}

	${({ variant }) => {
		switch (variant) {
			case "h1": {
				return css`
					font-size: 1.75rem;
					letter-spacing: 8px;
				`;
			}
			case "h2": {
				return css`
					letter-spacing: 4px;
					font-size: 1.5rem;
				`;
			}
			case "h3": {
				return css`
					font-weight: normal;
					font-size: 1.25rem;
				`;
			}
			case "body1": {
				return css``;
			}

			default:
				return "";
		}
	}}

	${({ dash }) =>
		dash
			? css`
					position: relative;
					margin-left: auto;
					margin-right: auto;
					text-align: center;
					margin-bottom: 1.5em;

					::after {
						content: "";
						display: block;
						position: absolute;
						left: 12.5%;
						height: 4px;
						width: 75%;
						margin-top: 0.5em;
						background-color: ${({ theme }) => theme.colors.main[5]};
					}
			  `
			: ""}
`;
