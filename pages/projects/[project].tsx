import React from "react";
import { NextPageContext } from "next";
import { ProjectType } from "../../types/projetc";

import Redirect from "../../utils/redirect";
import { getProjects } from "../../utils/getContent";
import Head from "../../components/layout";
import { Typography } from "../../components/base/typography";
import { Content } from "../../components/base/content";
import ProjectLinks from "../../components/modules/projectLinks";
import SideSection from "../../components/modules/sideSection";
import { Header, StyledSection } from "../../components/pages/projectSection";

type PropsType = {
	project: ProjectType | undefined;
	links: {
		title: string;
		href: string;
		as: string;
	}[];
	query: string;
};

const Post = (props: PropsType) => {
	if (!props.project) {
		return <Redirect path="/projects" />;
	}

	return (
		<Head
			title={props.project.attributes.title}
			description={props.project.attributes.description}
		>
			<StyledSection>
				<main>
					<Typography dash variant="h1" as="h1">
						{props.project.attributes.title}
					</Typography>

					<Header>
						<img
							src={props.project.attributes.thumbnail}
							alt={"Capura de tela do " + props.project.attributes.title}
							style={{ margin: "auto" }}
						/>

						<div>
							<p>{props.project.attributes.description}</p>
							<ProjectLinks
								github={props.project.attributes.github}
								website={props.project.attributes.website}
							/>
						</div>
					</Header>

					<Content dangerouslySetInnerHTML={{ __html: props.project.html }} />
				</main>
				<SideSection title="Outros Projetos" links={props.links} />
			</StyledSection>
		</Head>
	);
};

Post.getInitialProps = (context: NextPageContext) => {
	const project = getProjects().find(
		project => project.attributes.url === context.query.project
	);

	const links = getProjects().map(project => {
		return {
			title: project.attributes.title,
			href: "/projects/[project]",
			as: "/projects/" + project.attributes.url
		};
	});

	return {
		project,
		links
	};
};

export default Post;
