/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require("glob");
const path = require("path");
const fs = require("fs");

const parseMarkdown = require("front-matter-markdown");

function getProjects() {
  const markdownFiles = [];

  glob.sync("./content/projects/*.md").forEach(file => {
    const parsed = parseMarkdown(fs.readFileSync(path.resolve(file), "utf8"));
    markdownFiles.push(parsed);
  });

  return markdownFiles;
}

function getProjectRoutes() {
  const projects = getProjects();
  const routes = {};

  projects.forEach(project => {
    const routePath = "/projects/" + project.url;

    routes[routePath] = {
      page: "/projects/[project]",
      query: {
        project: project.url,
      },
    };
  });

  return routes;
}

module.exports = {
  getProjects: getProjectRoutes,
};
