import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { langEnum } from "../utils/lang";
import { ProjectData } from "../types/content";

const PROJECT_FILES: { [key in langEnum]?: string[] } = {};

(function initProjectFiles() {
  const langDirs = fs.readdirSync(path.join(process.cwd(), "./content/"));
  langDirs.forEach((lang: langEnum): void => {
    const dir = path.join(process.cwd(), `./content/${lang}/projects/`);
    PROJECT_FILES[lang] = fs.readdirSync(dir);
  });
})();

function loadProject(lang: langEnum, slug: string): ProjectType {
  const file = fs.readFileSync(
    path.join(process.cwd(), `./content/${lang}/projects/${slug}`)
  );
  const matterPost = matter(file);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: ProjectData = matterPost.data as any;

  return {
    ...data,
    url: slug,
    markdown: matterPost.content,
  };
}

export type ProjectType = ProjectData & {
  url: string;
  markdown: string;
};

export function getProjects(lang: langEnum): ProjectType[] {
  return PROJECT_FILES[lang].map((file) => loadProject(lang, file));
}
