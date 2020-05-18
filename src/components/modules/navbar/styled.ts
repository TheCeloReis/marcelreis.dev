import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;

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
  border-radius: 50%;
  background: var(--gray-9);
`;

export const NavItem = styled.div`
  color: var(--white);
  font-size: var(--heading-5);
  cursor: pointer;
  align-self: center;
`;
