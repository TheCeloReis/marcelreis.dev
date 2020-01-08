import React from "react";
import { NextPageContext } from "next";
import { ProjectType } from "../../types/projetc";

import Redirect from "../../components/base/redirect";
import { getProjects } from "../../utils/getContent";
import Head from "../../components/layout/main";
import { H1 } from "../../components/base/titles";
import Section from "../../components/base/section";

type PropsType = {
	project: ProjectType | undefined;
	query: string;
};

const Post = (props: PropsType) => {
	if (!props.project) {
		return <Redirect path="/projects" />;
	}

	return (
		<Head
			title={props.project.attributes.title}
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		>
			<Section>
				<H1>{props.project.attributes.title}</H1>
				<div dangerouslySetInnerHTML={{ __html: props.project.html }}></div>
			</Section>
		</Head>
	);
};

Post.getInitialProps = (context: NextPageContext) => {
	const project = getProjects().find(
		project => project.attributes.url === context.query.project
	);

	return {
		project: project
	};
};

export default Post;
