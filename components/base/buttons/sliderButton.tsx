import React, { ReactChild } from "react";
import styled from "styled-components";
import { Button } from "./button";

const StyledButton = styled(Button)<{ active: boolean }>`
	width: 48px;
	background-color: ${({ theme }) => theme.colors.main[3]};
	border-radius: 4px;
	box-shadow: ${({ theme }) => theme.boxShadow[1]};

	> div {
		width: 32px;
		overflow: hidden;

		> div {
			width: 64px;
			transform: translateX(${({ active }) => (active ? "0px" : "-32px")});
			transition: 0.3s ease;
		}
	}
`;

type PropsType = {
	onClick: () => void;
	children: [ReactChild, ReactChild];
	active: boolean;
};

export const SliderButton = (props: PropsType) => {
	return (
		<StyledButton onClick={props.onClick} active={props.active}>
			<div>
				<div>{props.children}</div>
			</div>
		</StyledButton>
	);
};
