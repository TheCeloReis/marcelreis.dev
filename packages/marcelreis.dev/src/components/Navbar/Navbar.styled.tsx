import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  background-color: var(--white);
  border-radius: 0 0 16px 16px;
`;
