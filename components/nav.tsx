import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Menu } from "styled-icons/material/Menu";

import styled from "styled-components";

const NavBackground = styled.nav`
  padding: 1rem;
  height: 4rem;
  background-color: #f7e019;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NavContainer = styled.div`
  @media screen and (min-width: 768px) {
    grid-template-columns: 4rem repeat(3, calc(33.33% - 0.5rem));
  }
  grid-template-columns: 2rem auto;
  grid-template-rows: 2rem;
  margin: auto;
  max-width: 1000px;
  display: grid;
  column-gap: 0.75rem;
`;
const NavItem = styled.div`
  height: 2rem;
  margin: auto;
  display: none;
  transition: 0.6s;
  border-bottom: 0.25rem solid transparent;
  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
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

const Initials = styled.h1`
  @media screen and (min-width: 768px) {
    transform: translate(0px, -0.5rem);
    border: solid black 0.25rem;
  }
  transform: translate(-25px, 0);
  width: 4rem;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
  margin: auto;
  cursor: default;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
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
        <Initials>MR</Initials>
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
      </NavContainer>
    </NavBackground>
  );
}
