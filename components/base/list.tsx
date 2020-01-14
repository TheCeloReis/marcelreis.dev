import styled from "styled-components";

export const Ul: any = styled.ul`
	list-style: ${(props: any) => (props.simple ? "none" : "")};
	padding: ${(props: any) => (props.simple ? "0" : "")};
	margin: ${(props: any) => (props.simple ? "0" : "")};

	li:not(:last-of-type) {
		margin-bottom: 0.5rem;
	}
`;
