import React, { useState } from "react";
import styled from "styled-components";

import { Toolbox } from "styled-icons/fa-solid/Toolbox";
import { Jquery } from "styled-icons/boxicons-logos/Jquery";
import { Css3 } from "styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "styled-icons/boxicons-logos/ReactLogo";

import { outOfBox } from "../../theme/keyframes";

const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const SkillsRow: any = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	width: 100%;
	height: 0;
	padding-bottom: ${(props: any) => (props.active ? "calc(33.33% + 6rem)" : 0)};
	transition: 2s ease;
`;

const Skill: any = styled.li`
	position: absolute;
	top: 160px;
	left: 33.33%;
	width: 33.33%;
	height: auto;
	text-align: center;
	z-index: ${(props: any) => 3 - props.order};

	transform: ${(props: any) => {
		return props.order === 0
			? "translate(-100%, 0)"
			: props.order === 1
				? "translate(0%, 0)"
				: props.order === 2
					? "translate(100%, 0)"
					: 0;
	}};

	animation-name: ${(props: any) => outOfBox(props.order)};
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-play-state: ${(props: any) => (props.open ? "running" : "paused")};

	h4 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		font-size: 1rem;
	}
`;

const IconContainer: any = styled.div`
	position: relative;
	height: 0;
	width: ${(props: any) => props.relativeWidth}%;
	padding-bottom: ${(props: any) => props.relativeWidth}%;
	margin: 0 auto;

	div {
		position: absolute;
	}
`;

const ToolboxButton = styled.button`
	margin: 0 auto 3.5rem auto;
	height: 128px;
	background: ${(props: any) => props.theme.color.primary};
	border-radius: 64px;
	z-index: 10;

	transform: translate(-4px, -4px);
	box-shadow: 4px 8px 6px #888888;
	transition: 0.3s ease;

	&:hover {
		transform: translate(0px, 0px);
		box-shadow: none;
		background: ${(props: any) => props.theme.color.primaryD};

		svg {
			color: ${(props: any) => props.theme.color.contrastL};
		}
	}
`;

const ToolboxIcon = styled(Toolbox)`
	color: ${(props: any) => props.theme.color.contrast};
	padding: 2rem;
`;
const ReactIcon = styled(ReactLogo)`
	color: #61dafb;
`;
const CssIcon = styled(Css3)`
	color: #379ad6;
`;
const JQueryIcon = styled(Jquery)`
	color: #21609b;
`;

export default function Toolbox2() {
	const [openReact, setOpenReact] = useState(false);
	const [openCss, setOpenCss] = useState(false);
	const [openJquery, setOpenJquery] = useState(false);
	const [startAnimation, setStartAnimation] = useState(false);

	const playAnimation = () => {
		setStartAnimation(true);

		setTimeout(() => {
			setOpenReact(true);
		}, 300);

		setTimeout(() => {
			setOpenCss(true);
		}, 600);

		setTimeout(() => {
			setOpenJquery(true);
		}, 900);
	};

	return (
		<Container>
			<ToolboxButton>
				<ToolboxIcon size="128" onClick={playAnimation} />
			</ToolboxButton>

			<SkillsRow active={startAnimation}>
				<Skill order={0} open={openReact}>
					<IconContainer relativeWidth={100}>
						<div>
							<ReactIcon size={"100%"} />
						</div>
					</IconContainer>
					<div>
						<h4>React</h4>
						<ul>
							<li>Hooks</li>
							<li>Redux</li>
							<li>Router</li>
						</ul>
					</div>
				</Skill>

				<Skill order={1} open={openCss}>
					<IconContainer relativeWidth={100}>
						<div>
							<CssIcon size={"100%"} />
						</div>
					</IconContainer>
					<div>
						<h4>CSS3</h4>
						<ul>
							<li>Flexbox</li>
							<li>Animations</li>
							<li>Sass</li>
						</ul>
					</div>
				</Skill>

				<Skill order={2} open={openJquery}>
					<IconContainer relativeWidth={100}>
						<div>
							<JQueryIcon size={"100%"} />
						</div>
					</IconContainer>
					<div>
						<h4>jQuery</h4>
						<ul>
							<li>BackBone</li>
							<li>Lodash</li>
							<li>Resiliência</li>
						</ul>
					</div>
				</Skill>
			</SkillsRow>
		</Container>
	);
}
