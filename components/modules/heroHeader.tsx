import React, { ReactChild, Props } from "react";
import styled from "styled-components";

const Background = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;

	height: calc(100vh - 4rem);
	background-color: #171717;
`;

const Header = styled.div`
	@media screen and (min-width: 600px) {
		font-size: 3rem;
		max-width: 800px;
	}
	font-size: 1.5rem;
	text-align: center;
`;

type PropsType = {
	children: ReactChild;
};

export default function HeroHeader(props: PropsType) {
	return (
		<Background>
			<Header>{props.children}</Header>
		</Background>
	);
}
