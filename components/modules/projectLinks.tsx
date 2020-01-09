import React from "react";
import styled from "styled-components";

import { Web } from "styled-icons/material/Web";
import { Github } from "styled-icons/boxicons-logos/Github";

const Container = styled.div`
	display: grid;
	grid-template-rows: 32px;
	grid-template-columns: repeat(3, 32px);
	column-gap: 16px;
`;

type PropsType = {
	github?: string;
	website?: string;
};

export default function ProjectLinks(props: PropsType) {
	if (!props.github && !props.website) {
		return <></>;
	}

	return (
		<Container>
			{props.github ? (
				<a href={props.github}>
					<Github size="32px" role="img">
						<title>Github Logo</title>
					</Github>
				</a>
			) : (
				""
			)}

			{props.website ? (
				<a href={props.website}>
					<Web size="32px" role="img">
						<title>Internet Symbol</title>
					</Web>
				</a>
			) : (
				""
			)}
		</Container>
	);
}
