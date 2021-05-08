import React from "react";
import { Github } from "@styled-icons/fa-brands/Github";

import * as S from "./Project.styled";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Title>Personal Projects</S.Title>

        <S.Row>
          <S.ImgContainer bottom>
            <img src="/img/home__study.svg" alt="" />
          </S.ImgContainer>

          <S.List>
            {projects.map((project) => (
              <S.ListItem key={project.uri}>
                <S.ProjectTitle>{project.name}</S.ProjectTitle>

                <S.ProjectDescription>
                  {project.description}
                </S.ProjectDescription>

                <S.ProjectFooter>
                  <S.Button href={project.website} target="_blank">
                    See Live
                  </S.Button>

                  <S.IconLink
                    href={project.github}
                    title="Github"
                    target="_blank"
                  >
                    <Github size="32px" aria-label="Github" />
                  </S.IconLink>
                </S.ProjectFooter>
              </S.ListItem>
            ))}
          </S.List>
        </S.Row>
      </S.Container>
    </S.Section>
  );
};

export default Projects;
