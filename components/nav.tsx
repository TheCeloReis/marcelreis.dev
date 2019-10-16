import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Menu } from "styled-icons/material/Menu";

import styled from "styled-components";

const NavBackground = styled.nav`
  height: 4rem;
  background-color: #f7e019;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NavContainer = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
  max-width: 800px;
  @media screen and (min-width: 768px) {
  }
`;

const NavList = styled.li`
  display: flex;
  height: 100%;
  width: 33%;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`;

const NavItem = styled.ul`
  height: 1.75rem;
  display: none;
  transition: 0.6s;
  border-bottom: 0.25rem solid transparent;

  @media screen and (min-width: 768px) {
    margin: 0;
    display: block;
    font-weight: 700;
    font-size: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: lowercase;
  }

  &::after {
    content: " ";
    display: block;
    margin-top: 0.5rem;
    width: 100%;
    transform: scaleX(0);
    height: 0.25rem;
    background-color: #000;
    transition: 0.3s;
    transition-timing-function: ease;
  }
  :hover ::after {
    transform: scaleX(1.1);
    transition: 0.3s;
  }
`;

const Initials = styled.div`
  @media screen and (min-width: 768px) {
    border: solid black 2px;
    font-size: 1rem;
    height: 3rem;
    width: 3rem;
    position: relative;
    margin-left: 1rem;
    cursor: default;
    pointer-events: none;
  }
  transform: translate(-25px, 0);
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  margin: auto;
  cursor: default;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;

  span {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    line-height: 1.125rem;
    font-size: 1.125rem;
  }
`;
const MenuIcon = styled(Menu)`
  color: #000;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function nav() {
  return (
    <NavBackground>
      <NavContainer>
        <MenuIcon size={32} />
        <Initials>
          <span>MR</span>
        </Initials>
        <NavList>
          <NavItem>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <a>Projetos</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <a>Blog</a>
            </Link>
          </NavItem>
        </NavList>
      </NavContainer>
    </NavBackground>
  );
}
