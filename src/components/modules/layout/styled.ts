import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0 }
  75% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div<{ variant?: string }>`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);
  padding-top: ${({ variant }) => (variant === "hero" ? "100vh" : "72px")};
  padding-bottom: 50px;
  animation: ${fadeIn} 1s ease-out 1;
`;
