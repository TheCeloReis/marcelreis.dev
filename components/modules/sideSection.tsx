import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Ul } from "../base/list";

const Container = styled.div`
	display: grid;
`;

type PropsType = {
	title: string;
	links: {
		title: string;
		href: string;
		as: string;
	}[];
};

export default function SideSection(props: PropsType) {
	return (
		<Container>
			<span>{props.title}</span>
			<Ul simple>
				{props.links.map(link => {
					return (
						<li key={link.as}>
							<Link href={link.href} as={link.as}>
								<a>{link.title}</a>
							</Link>
						</li>
					);
				})}
			</Ul>
		</Container>
	);
}
