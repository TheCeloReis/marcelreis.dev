import React from "react";
import Link from "next/link";

import * as S from "./styled";

import { Ul } from "../../base/list";

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
		<S.Container>
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
		</S.Container>
	);
}
