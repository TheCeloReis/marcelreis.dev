import React from "react";
import styled from "styled-components";

const Background = styled.section`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.color.base};
	justify-content: center;

	:only-of-type {
		@media screen and (max-width: 599px) {
			min-height: calc(100vh - 7rem);
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	max-width: 800px;
	width: 100%;
	background-color: ${({ theme }) => theme.color.baseL};

	@media screen and (min-width: 600px) {
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		margin: 2rem 1rem 2rem 1rem;
	}
`;

type PropsType = {
	children?: any;
};

export default function Section(props: PropsType) {
	return (
		<Background>
			<Container {...props} />
		</Background>
	);
}
