import { ProjectType } from "../types/projetc";

const pageContext = require.context("content/pages", false, /\.json$/);

export function getProjects() {
  const markdownContext = require.context("content/projects", false, /\.md$/);
  const markdownFiles: ProjectType[] = markdownContext
    .keys()
    .map(filename => markdownContext(filename));

  return markdownFiles;
}

export function getPage() {
  const page = pageContext.keys().find(page => page.includes("index"));

  return !page ? undefined : pageContext(page);
}
