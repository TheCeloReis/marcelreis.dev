import styled from "styled-components";

import { Button } from "../../base/buttons/button";

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	column-gap: 16px;
	row-gap: 16px;
	grid-template-areas:
		"name"
		"email"
		"message"
		"button";

	${({ theme }) => theme.media.greaterThan.medium} {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"name email"
			"message message"
			"button button";
	}
`;

export const Label = styled.label`
	span {
		line-height: 1.5;
	}
`;
export const NameLabel = styled(Label)`
	grid-area: name;
`;
export const EmailLabel = styled(Label)`
	grid-area: email;
`;
export const MessageLabel = styled(Label)`
	grid-area: message;
`;
export const StyledButton = styled(Button)`
	grid-area: button;
`;
