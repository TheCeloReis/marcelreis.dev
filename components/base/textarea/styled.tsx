import styled from "styled-components";

export const Autosized = styled.textarea`
	width: 100%;
	resize: none;
	border: 1px solid ${({ theme }) => theme.colors.base[5]};
	border-radius: 4px;
	padding: 8px;
`;
