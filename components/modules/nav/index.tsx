import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "styled-icons/material/Menu";

import styled from "styled-components";
import Logo from "./logo";

const NavBackground: any = styled.nav`
	position: fixed;
	z-index: 100;
	width: 100%;
	height: 4rem;
	background-color: ${(props: any) => props.theme.color.primary};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NavContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	margin: auto;
	max-width: 800px;
	@media screen and (min-width: 768px) {
	}
`;

const NavList: any = styled.ul`
	position: absolute;
	top: 4rem;
	width: 100%;
	height: 100vh;
	display: flex;

	@media screen and (max-width: 767px) {
		right: 100%;
		flex-direction: column;
		transform: ${(props: any) =>
			props.active ? "translateX(100%)" : "translateX(0%)"};
		background-color: ${(props: any) => props.theme.color.gray900};
		transition: transform 0.6s ease;
	}
	@media screen and (min-width: 768px) {
		position: static;
		height: 100%;
		width: 33%;
		justify-content: space-between;
		align-items: center;
		padding-right: 1rem;
	}
`;

const NavItem = styled.li`
	height: 1.75rem;
	transition: transform ease 0.6s;
	border-bottom: 0.25rem solid transparent;
	display: block;
	font-weight: 700;
	font-size: 1.25rem;
	font-family: Arial, Helvetica, sans-serif;
	text-transform: lowercase;
	text-align: center;

	&::after {
		content: " ";
		display: block;
		width: 100%;
		background-color: ${(props: any) => props.theme.color.contrast};
		margin-top: 0.5rem;
	}

	@media screen and (max-width: 767px) {
		width: 100%;
		padding: 3rem;
		a {
			color: #fff;
		}
		&::after {
			height: 0.125rem;
			background-color: #fff;
		}
	}

	@media screen and (min-width: 768px) {
		margin: 0;

		a {
			color: ${(props: any) => props.theme.color.contrast};
		}

		&::after {
			height: 0.25rem;
			transform: scaleX(0);
			transition: transform 0.3s ease;
		}
		:hover ::after {
			transform: scaleX(1.1);
			transition: transform 0.3s ease;
		}
	}
`;

const MenuIcon = styled(Menu)`
	color: ${(props: any) => props.theme.color.contrast};
	padding: 1rem;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default function nav() {
	const [activeNavbar, setActiveNavbar] = useState(false);

	const toggleNavbar = () => {
		setActiveNavbar(!activeNavbar);
		document.body.style.overflow = activeNavbar ? "auto" : "hidden";
	};

	return (
		<>
			<NavBackground>
				<NavContainer>
					<MenuIcon size={64} onClick={toggleNavbar} />
					<Logo />
					<NavList active={activeNavbar}>
						<NavItem>
							<Link href="/">
								<a>Sobre</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/projects">
								<a>Projetos</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</NavItem>
					</NavList>
				</NavContainer>
			</NavBackground>
			<div style={{ height: "4rem" }} />
		</>
	);
}
