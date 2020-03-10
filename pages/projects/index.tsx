import React from "react";
import { NextRouter } from "next/router";

import MainLayout from "../../components/layout";

import Section from "../../components/base/section";
import { Typography } from "../../components/base/typography";
import { Card } from "../../components/base/card";
import { ProjectType } from "../../types/projetc";
import { getProjects } from "../../utils/getContent";
import { CardContainer } from "../../components/pages/cardContainer";

type PropsType = {
  projects: ProjectType[];
  router: NextRouter;
};

function Projects(props: PropsType) {
  if (process.env.NODE_ENV !== "development") {
    props.router.replace("/under-development");
    return;
  }

  return (
    <MainLayout
      title="Projetos - MarcelReis"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
    >
      <Section>
        <Typography dash variant="h3" as="h1">
          Projetos
        </Typography>
        <CardContainer>
          {props.projects.map(project => {
            return (
              <Card
                key={project.attributes.url}
                overlayText={project.attributes.title}
                title={project.attributes.description}
                img200={project.attributes.thumbnail}
                link={{
                  href: "/projects/[project]",
                  as: "/projects/" + project.attributes.url,
                  title: "INFO",
                }}
              />
            );
          })}
        </CardContainer>
      </Section>
    </MainLayout>
  );
}

Projects.getInitialProps = () => {
  return {
    projects: getProjects(),
  };
};

export default Projects;
