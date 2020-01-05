import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.primaryD};
	color: ${({ theme }) => theme.color.contrast};
	height: 48px;
	font-weight: bold;
	padding: 8px;
	border-radius: 4px;
`;
