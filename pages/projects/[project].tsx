import React from "react";
import { NextPageContext } from "next";

type PropsType = {
	project: string;
};

const Post = (props: PropsType) => {
	return <p>Post: {props.project}</p>;
};

Post.getInitialProps = (context: NextPageContext) => {
	return {
		project: context.query.project
	};
};

export default Post;
