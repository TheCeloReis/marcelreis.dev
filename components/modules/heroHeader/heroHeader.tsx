import React, { ReactChild } from "react";

import * as S from "./styled";

type PropsType = {
	children: ReactChild;
};

export default function HeroHeader(props: PropsType) {
	return (
		<S.Background>
			<S.Header>{props.children}</S.Header>
		</S.Background>
	);
}
