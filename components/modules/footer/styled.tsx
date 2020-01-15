import styled from "styled-components";

export const Container = styled.footer`
	width: 100%;
	height: 3rem;
	background-color: ${({ theme }) => theme.colors.main[5]};
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 0;

	svg {
		color: ${({ theme }) => theme.colors.contrast[1]};
		transition: 0.3s;
		margin: 0.5rem 2rem;
		:hover {
			color: ${({ theme }) => theme.colors.gray[5]};
		}
	}
`;
