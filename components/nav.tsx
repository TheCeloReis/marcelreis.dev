import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Menu } from "styled-icons/material/Menu";

import styled from "styled-components";

const NavBackground = styled.nav`
  padding: 0.75rem 1rem 1.25rem 1rem;
  height: 2rem;
  background-color: #f7e019;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NavContainer = styled.div`
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, calc(33.33% - 0.5rem));
  }
  grid-template-columns: 2rem auto;
  margin: auto;
  max-width: 1000px;
  display: grid;
  column-gap: 0.75rem;
`;
const NavItem = styled.div`
  height: 2rem;
  margin: auto;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const Initials = styled.h1`
  @media screen and (min-width: 768px) {
    display: none;
  }
  transform: translateX(-25px);
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 2rem;
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
            <a>About</a>
          </Link>
        </NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </NavContainer>
    </NavBackground>
  );
}
