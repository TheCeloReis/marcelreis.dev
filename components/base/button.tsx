import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.main[5]};
	color: ${({ theme }) => theme.colors.contrast[1]};
	height: 48px;
	font-weight: bold;
	padding: 8px;
	border-radius: 4px;
`;
