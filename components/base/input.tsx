import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	height: 48px;
	padding: 8px;
	border: 1px solid ${({ theme }) => theme.color.baseD};

	border-radius: 4px;
`;
