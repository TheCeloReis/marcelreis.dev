import React from "react";

import styles from "./.module.scss";

import { ProjectType } from "src/cms/projects";

import Card from "components/card";
import { ChipContainer, Chip } from "components/chip";

type PropsType = {
  projects: ProjectType[];
};
const ProjectShowcase = ({ projects }: PropsType) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Card key={project.url}>
          <h2 className={styles.title}>{project.title}</h2>
          <p>{project.description}</p>
          <ChipContainer>
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ChipContainer>
          {project.github && <div>{project.github}</div>}
          {project.website && <div>{project.website}</div>}
        </Card>
      ))}
    </div>
  );
};

export default ProjectShowcase;
