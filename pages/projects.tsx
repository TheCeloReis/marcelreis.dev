import React, { useEffect } from "react";

import MainLayout from "../components/layout";

import { logPageView } from "../utils/analytics";

import Section from "../components/base/section";
import { H1 } from "../components/base/typography";
import { Card } from "../components/base/card";
import { ProjectType } from "../types/projetc";
import { getProjects } from "../utils/getContent";
import { CardContainer } from "../components/pages/cardContainer";

type PropsType = {
	projects: ProjectType[];
};

function Projects(props: PropsType) {
	useEffect(() => {
		logPageView();
	}, []);

	return (
		<MainLayout
			title="Projetos - MarcelReis"
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		>
			<Section>
				<H1>Projetos</H1>
				<CardContainer>
					{props.projects.map(project => {
						return (
							<Card
								key={project.attributes.url}
								overlayText={project.attributes.title}
								title={project.attributes.description}
								url={project.attributes.url}
								img200={project.attributes.thumbnail}
								link={{
									href: "/projects/[project]",
									as: "/projects/" + project.attributes.url,
									title: "INFO"
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
		projects: getProjects()
	};
};

export default Projects;
