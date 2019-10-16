import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "styled-icons/material/Menu";

import styled from "styled-components";

const NavBackground = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 4rem;
  background-color: #f7e019;
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

const NavList: any = styled.li`
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
    background-color: #222;
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

const NavItem = styled.ul`
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
    background-color: #000;
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
      background-color: #eee;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;

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

const Initials = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: default;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;

  span {
    padding: 1rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (min-width: 768px) {
    width: 67%;
    div {
      position: relative;
      border: solid black 2px;
      font-size: 1rem;
      height: 3rem;
      width: 3rem;
      cursor: default;
      pointer-events: none;
      margin: 0.5rem 1rem;
    }

    span {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
      line-height: 1.125rem;
      font-size: 1.125rem;
      padding: 0;
      transform: translateX(0);
    }
  }
`;

const NavSpace = styled.div`
  height: 4rem;
`;

const MenuIcon = styled(Menu)`
  color: #000;
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
          <Initials>
            <div>
              <span>MR</span>
            </div>
          </Initials>
          <NavList active={activeNavbar}>
            <NavItem>
              <Link href="/">
                <a>Sobre</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <a>Projetos</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </NavItem>
          </NavList>
        </NavContainer>
      </NavBackground>
      <NavSpace />
    </>
  );
}
