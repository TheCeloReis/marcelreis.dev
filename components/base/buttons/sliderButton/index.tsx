import React, { ReactChild } from "react";

import * as S from "./styled";

type PropsType = {
	onClick: () => void;
	children: [ReactChild, ReactChild];
	active: boolean;
};

export const SliderButton = (props: PropsType) => {
	return (
		<S.StyledButton onClick={props.onClick} active={props.active}>
			<div>
				<div>{props.children}</div>
			</div>
		</S.StyledButton>
	);
};
