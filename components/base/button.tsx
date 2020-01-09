import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.contrastH};
	height: 48px;
	font-weight: bold;
	padding: 8px;
	border-radius: 4px;
`;
