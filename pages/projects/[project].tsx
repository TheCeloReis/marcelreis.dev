import React from "react";
import { NextPageContext } from "next";
import { getProjects } from "../../utils/getContent";
import { ProjectType } from "../../types/projetc";

import Router from "next/router";

type PropsType = {
	project: ProjectType | undefined;
	query: string;
};

const Post = (props: PropsType) => {
	console.log("props :", props);

	if (!props.project && process.browser) {
		Router.push("/projects");
	}

	if (!props.project) {
		return <></>;
	}

	return <p>Post: {props.project.attributes.title}</p>;
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
