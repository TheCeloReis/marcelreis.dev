import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0 }
  75% { opacity: 0 }
  100% { opacity: 1 }
`;

type PropsType = {
  variant?: "blog" | "hero";
};
export const Layout = styled.div<PropsType>`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);
  padding: ${({ variant }) => (variant === "hero" ? "100vh" : "72px")}
    var(--spacing-3) var(--spacing-6) var(--spacing-3);
  animation: ${fadeIn} 1s ease-out 1;
`;

export default Layout;
