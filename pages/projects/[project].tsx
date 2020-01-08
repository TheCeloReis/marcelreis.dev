import React from "react";
import { NextPageContext } from "next";

import Router from "next/router";

type PropsType = {
	project: string;
};

const Post = (props: PropsType) => {
	if (!props.project) {
		Router.push("/projects");
	}

	return <p>Post: {props.project}</p>;
};

Post.getInitialProps = (context: NextPageContext) => {
	return {
		project: context.query.project
	};
};

export default Post;
