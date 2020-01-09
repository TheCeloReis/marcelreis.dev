import { ProjectType } from "../types/projetc";

export function getProjects() {
	const markdownContext = require.context("Content/projects", false, /\.md$/);
	const markdownFiles: ProjectType[] = markdownContext
		.keys()
		.map(filename => markdownContext(filename));

	return markdownFiles;
}
