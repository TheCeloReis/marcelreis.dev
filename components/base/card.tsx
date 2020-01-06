import React from "react";
import styled from "styled-components";
import { Button } from "./button";

const Container = styled.div`
	position: relative;
	padding-top: 100%;
`;
const StyledButton = styled(Button)`
	position: absolute;
	width: 50%;
	bottom: -48px;
	left: 25%;

	border-radius: 8px 8px 0 0;
	background-color: ${({ theme }) => theme.color.baseL};

	a {
		color: inherit;
	}
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: 0.3s ease;
	background-color: ${({ theme }) => theme.color.primaryL}d0;
	user-select: none;

	span {
		position: absolute;
		text-align: center;
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
	overflow: hidden;
	position: absolute;
	top: 0;

	:hover {
		${Overlay} {
			opacity: 1;
		}
		${StyledButton} {
			transform: translateY(-100%);
			transition: 0.3s ease;
			transition-delay: 0.3s;
		}
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-color: ${({ theme }) => theme.color.gray300};
`;

type PropsType = {
	overlayText: string;

	title: string;
	url: string;

	img200: string;
};

export default function Card(props: PropsType) {
	return (
		<Container>
			<ImageContainer>
				<Image
					src={props.img200}
					title={props.title}
					alt={`Tela do ${props.overlayText}`}
				/>
				<Overlay>
					<span>{props.overlayText}</span>
				</Overlay>
				<StyledButton>
					<a href={props.url} target="_blank" rel="noopener noreferrer">
						MAIS
					</a>
				</StyledButton>
			</ImageContainer>
		</Container>
	);
}
