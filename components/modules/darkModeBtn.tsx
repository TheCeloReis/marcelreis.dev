import React from "react";
import { Button } from "../base/button";

import { Moon } from "styled-icons/boxicons-solid/Moon";
import { Sun } from "styled-icons/boxicons-solid/Sun";
import styled from "styled-components";

const StyledButton = styled(Button)`
	width: 48px;

	> div {
		width: 32px;
		overflow: hidden;
		> div {
			width: 64px;

			transform: translateX(${({ theme }) => (theme.darkTheme ? 0 : "-32px")});
			transition: 0.3s ease;
		}
	}
`;

type PropsType = {
	toogleTheme: () => void;
};

export default function DarkModeBtn(props: PropsType) {
	return (
		<StyledButton onClick={props.toogleTheme}>
			<div>
				<div>
					<Moon size="32" />
					<Sun size="32" />
				</div>
			</div>
		</StyledButton>
	);
}
