import React from "react";
import { useRouter } from "next/router";

const Post = () => {
	const router = useRouter();
	const { project } = router.query;

	return <p>Post: {project}</p>;
};

export default Post;
