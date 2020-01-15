import React from "react";
import Link from "next/link";

import * as S from "./styled";

type PropsType = {
	overlayText: string;
	title: string;
	url: string;
	img200: string;

	link?: {
		href: string;
		as?: string;
		title: string;
	};

	button?: {
		title: string;
		onClick: () => void;
	};
};

export default function Card(props: PropsType) {
	return (
		<S.Container>
			<S.ImageContainer>
				<S.Image
					src={props.img200}
					title={props.title}
					alt={`${props.overlayText}`}
				/>

				{props.overlayText ? (
					<S.Overlay>
						<span>{props.overlayText}</span>
					</S.Overlay>
				) : (
					""
				)}

				{props.link ? (
					<Link href={props.link?.href} as={"/projects/" + props.url}>
						<S.StyledButton>
							<a>{props.link.title}</a>
						</S.StyledButton>
					</Link>
				) : props.button ? (
					<S.StyledButton onClick={props.button.onClick}>
						{props.button.title}
					</S.StyledButton>
				) : (
					""
				)}
			</S.ImageContainer>
		</S.Container>
	);
}
