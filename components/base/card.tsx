import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	padding-top: 100%;
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: 0.3s ease;
	background-color: ${({ theme }) => theme.color.primaryL}77;
	user-select: none;

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: ${({ theme }) => theme.color.contrastH};
		font-weight: bold;
		font-size: 1.25rem;
	}
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;

	:hover {
		${Overlay} {
			opacity: 1;
		}
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-color: ${({ theme }) => theme.color.gray300};
`;

export default function Card() {
	const [num1, num2] = [
		Math.floor(Math.random() * 10) + 290,
		Math.floor(Math.random() * 10) + 290
	];

	const src = `https://placekitten.com/${num1}/${num2}`;

	return (
		<Container>
			<ImageContainer>
				<Image src={src} alt="cat" />
				<Overlay>
					<span>{num1}</span>
				</Overlay>
			</ImageContainer>
		</Container>
	);
}
