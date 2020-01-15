import styled from "styled-components";
import Section from "../../base/section";
import { Content } from "../../base/content";

export const StyledSection = styled(Section)`
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
export const Header = styled.div`
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
