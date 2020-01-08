import React from "react";
import { NextPageContext } from "next";
import { ProjectType } from "../../types/projetc";

import Redirect from "../../components/base/redirect";
import { getProjects } from "../../utils/getContent";
import Head from "../../components/layout/main";
import { H1 } from "../../components/base/titles";
import Section from "../../components/base/section";
import { Content } from "../../components/base/content";
import styled from "styled-components";
import ProjectLinks from "../../components/modules/projectLinks";
import Link from "next/link";

const StyledSection = styled(Section)`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 16px;

	@media only screen and (min-width: 600px) {
		grid-template-columns: 1fr 200px;
	}

	${Content} {
		margin-top: 32px;
	}
`;
const Header = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;

	@media only screen and (min-width: 600px) {
		grid-template-columns: 1fr 300px;
	}

	p {
		margin-bottom: 16px;
	}
`;

type PropsType = {
	project: ProjectType | undefined;
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
					<H1>{props.project.attributes.title}</H1>

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
				<div>
					<p>Outros Projetos</p>
					<ul>
						{getProjects().map(project => {
							return (
								<li key={project.attributes.url}>
									<Link href={"/projects/" + project.attributes.url}>
										<a>{project.attributes.title}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</StyledSection>
		</Head>
	);
};

Post.getInitialProps = (context: NextPageContext) => {
	const project = getProjects().find(
		project => project.attributes.url === context.query.project
	);

	return {
		project: project
	};
};

export default Post;
