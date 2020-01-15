import React, { useState, useEffect } from "react";

import * as S from "./styled";
import { Ul } from "../../base/list";

export default function Toolbox2() {
	const [startAnimation, setStartAnimation] = useState(false);

	const playAnimation = () => {
		setStartAnimation(true);
	};

	useEffect(() => {
		setStartAnimation(false);
	}, []);

	return (
		<S.Container>
			<S.ToolboxButton>
				<S.ToolboxIcon size="128" onClick={playAnimation} role="img">
					<title>Toolbox</title>
				</S.ToolboxIcon>
				Veja
			</S.ToolboxButton>

			<S.SkillsRow active={startAnimation}>
				<S.Skill order={0} open={startAnimation}>
					<S.IconContainer relativeWidth={100}>
						<div>
							<S.ReactIcon size={"100%"} />
						</div>
					</S.IconContainer>
					<div>
						<p>React</p>
						<Ul simple>
							<li>Hooks</li>
							<li>Redux</li>
							<li>Router</li>
						</Ul>
					</div>
				</S.Skill>

				<S.Skill order={1} open={startAnimation}>
					<S.IconContainer relativeWidth={100}>
						<div>
							<S.CssIcon size={"100%"} />
						</div>
					</S.IconContainer>
					<div>
						<p>CSS3</p>
						<Ul simple>
							<li>Flexbox</li>
							<li>CSS in JS</li>
							<li>Sass</li>
						</Ul>
					</div>
				</S.Skill>

				<S.Skill order={2} open={startAnimation}>
					<S.IconContainer relativeWidth={100}>
						<div>
							<S.JQueryIcon size={"100%"} />
						</div>
					</S.IconContainer>
					<div>
						<p>jQuery</p>
						<Ul simple>
							<li>BackBone</li>
							<li>Lodash</li>
							<li>Resiliência</li>
						</Ul>
					</div>
				</S.Skill>
			</S.SkillsRow>
		</S.Container>
	);
}
