import styled from "styled-components";

import { Moon } from "styled-icons/boxicons-solid/Moon";
import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Menu } from "styled-icons/material/Menu";

import { Ul } from "../../../base/list";

export const Background: any = styled.nav`
	position: fixed;
	z-index: 100;
	width: 100%;
	height: 4rem;
	transition: background-color 0.3s;
	background-color: ${({ theme }) => theme.colors.main[5]};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	margin: auto;
	max-width: 800px;

	button:last-of-type {
		position: absolute;
		top: 8px;
		right: 8px;
	}
`;

export const List = styled(Ul)<{ active: boolean }>`
	position: absolute;
	top: 4rem;
	width: 100%;
	height: 100vh;
	display: flex;

	@media screen and (max-width: 767px) {
		position: fixed;
		right: 100%;
		flex-direction: column;
		transform: ${props =>
			props.active ? "translateX(100%)" : "translateX(0%)"};

		background-color: ${({ theme }) => theme.colors.gray[8]};
		transition: transform 0.3s ease;
	}
	@media screen and (min-width: 768px) {
		position: static;
		padding-right: 72px;
		height: 100%;
		width: 40%;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Item = styled.li`
	height: 1.75rem;
	transition: transform ease 0.6s;
	text-align: center;
	display: block;
	font-weight: 700;
	font-size: 1.25rem;

	&::after {
		content: " ";
		display: block;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.contrast[3]};
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
			transition: color 0.3s;
			color: ${({ theme }) => theme.colors.contrast[3]};
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

export const MenuIcon = styled(Menu)`
	transition: color 0.3s;
	color: ${({ theme }) => theme.colors.contrast[3]};
	padding: 1rem;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
export const StyledMoon = styled(Moon)`
	color: ${({ theme }) => theme.colors.gray[0]};
`;
export const StyledSun = styled(Sun)`
	color: ${({ theme }) => theme.colors.gray[9]};
`;
