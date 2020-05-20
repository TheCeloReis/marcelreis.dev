import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;

export const Container = styled.div`
  margin: auto;
  height: 64px;
  width: 100%;
  max-width: 800px;

  padding: var(--spacing-1) var(--spacing-3);

  display: grid;
  justify-content: flex-end;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: var(--spacing-3);
`;

export const Nav = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const NavItem = styled.div`
  color: var(--white);
  font-size: var(--heading-5);
  cursor: pointer;
  align-self: center;
`;
