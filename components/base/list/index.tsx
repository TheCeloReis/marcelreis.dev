import styled from "styled-components";

export const Ul: any = styled.ul<{ simple: boolean; horizontal: boolean }>`
	list-style: ${props => (props.simple ? "none" : "")};
	padding: ${props => (props.simple ? "0" : "")};
	margin: ${props => (props.simple ? "0" : "")};

	${props =>
		props.horizontal ? "" : "li:not(:last-of-type) { margin-bottom: 0.5rem; }"};

	a {
		color: ${({ theme }) => theme.colors.contrast[1]};
	}
`;
