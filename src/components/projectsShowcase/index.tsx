import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

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
        <Card className={styles.card} key={project.url}>
          <header className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            {project.github && (
              <div>
                <a className={styles.icon} href={project.github}>
                  <FaGithub />
                </a>
              </div>
            )}

            {project.website && (
              <div>
                <a className={styles.icon} href={project.website}>
                  <FiGlobe />
                </a>
              </div>
            )}
          </header>
          <p>{project.description}</p>
          <ChipContainer>
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ChipContainer>
        </Card>
      ))}
    </div>
  );
};

export default ProjectShowcase;
