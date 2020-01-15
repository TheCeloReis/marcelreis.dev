import React from "react";

import * as S from "./styled";

import { Web } from "styled-icons/material/Web";
import { Github } from "styled-icons/boxicons-logos/Github";

type PropsType = {
	github?: string;
	website?: string;
};

export default function ProjectLinks(props: PropsType) {
	if (!props.github && !props.website) {
		return <></>;
	}

	return (
		<S.Container>
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
		</S.Container>
	);
}
