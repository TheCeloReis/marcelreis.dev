import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;

	height: calc(100vh - 4rem);
	background-color: #171717;
`;

export const Header = styled.div`
	${({ theme }) => theme.media.greaterThan.medium} {
		font-size: 3rem;
		max-width: 800px;
	}

	text-align: center;
`;
