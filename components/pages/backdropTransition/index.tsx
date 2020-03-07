import styled from "styled-components";

export const BackdropTransition = styled.div`
  transition: 300ms;
  transition-timing-function: ease;
  transition-property: height;
  z-index: 120;
  background-color: ${({ theme }) => theme.colors.base[1]};
  position: fixed;
  top: 64px;
  width: 100%;
  height: 0;
`;
