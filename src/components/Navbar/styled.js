import styled from "styled-components";

import { Link } from "gatsby";

export const Photo = styled.div`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  background-color: #ddd;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  padding: 6px 16px;
  transition: transform 0.2s ease;

  :hover {
    color: #eee;
    transform: scale(1.1) translateY(-4px);
  }
`;
