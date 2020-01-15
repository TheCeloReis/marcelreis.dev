import styled from "styled-components";

export const BackdropTransition = styled.div`
	transform: translateY(-100%);
	transition: 300ms;
	transition-timing-function: ease;
	transition-property: transform;
	z-index: 80;
	background-color: ${({ theme }) => theme.colors.base[1]};
	border-bottom: solid 2px ${({ theme }) => theme.colors.base[5]};
	position: fixed;
	width: 100%;
	height: calc(100vh - 64px);
`;
