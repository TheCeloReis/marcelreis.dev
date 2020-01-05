import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
	user-select: none;
	font-size: 2rem;
	line-height: 2rem;
	text-align: center;
	cursor: default;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 700;
	color: ${(props: any) => props.theme.color.contrast};

	span {
		padding: 1rem;
		position: absolute;
		right: 50%;
		transform: translateX(50%);
	}

	@media screen and (min-width: 768px) {
		width: 67%;
		div {
			position: relative;
			border: solid ${(props: any) => props.theme.color.contrast} 2px;
			font-size: 1rem;
			height: 3rem;
			width: 3rem;
			cursor: default;
			pointer-events: none;
			margin: 0.5rem 1rem;
		}
		span {
			position: absolute;
			bottom: 0.25rem;
			right: 0.25rem;
			line-height: 1.125rem;
			font-size: 1.125rem;
			padding: 0;
			transform: translateX(0);
		}
	}
`;

export default function Logo() {
	return (
		<Container>
			<div>
				<Link href="/">
					<span>MR</span>
				</Link>
			</div>
		</Container>
	);
}
