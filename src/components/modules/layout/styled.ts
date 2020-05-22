import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Layout = styled.div<{ tallSpacing?: boolean }>`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);
  padding-top: ${({ tallSpacing }) => (tallSpacing ? "80vh" : "72px")};
  padding-bottom: 50px;

  animation: ${fadeIn} 0.5s ease-out 1;
`;
