import React, { useState } from "react";
import Link from "next/link";

import * as S from "./nav.style";

import { SliderButton } from "../../base/buttons/sliderButton";

type PropsType = {
	toogleDarkMode: () => void;
};

export default function Nav(props: PropsType) {
	const [activeNavbar, setActiveNavbar] = useState(false);

	const closeNavbar = () => {
		if (activeNavbar) {
			setActiveNavbar(false);
			document.body.style.overflow = "auto";
		}
	};

	const toggleNavbar = () => {
		setActiveNavbar(!activeNavbar);
		document.body.style.overflow = activeNavbar ? "auto" : "hidden";
	};

	return (
		<>
			<S.Background>
				<S.Container>
					<S.MenuIcon size={64} onClick={toggleNavbar} />
					<S.LogoContainer {...props}>
						<div>
							<Link href="/">
								<span>MR</span>
							</Link>
						</div>
					</S.LogoContainer>
					<S.List simple horizontal active={activeNavbar}>
						<S.Item onClick={closeNavbar}>
							<Link href="/">
								<a>home</a>
							</Link>
						</S.Item>
						<S.Item onClick={closeNavbar}>
							<Link href="/projects">
								<a>projects</a>
							</Link>
						</S.Item>
						<S.Item onClick={closeNavbar}>
							<Link href="/">
								<a>blog</a>
							</Link>
						</S.Item>
					</S.List>
					<SliderButton active={true} onClick={props.toogleDarkMode}>
						<S.StyledMoon size="32px" />
						<S.StyledSun size="32px" />
					</SliderButton>
				</S.Container>
			</S.Background>
			<div style={{ height: "4rem" }} />
		</>
	);
}
