import styled from "styled-components";

export const Background = styled.div<{ as: any }>`
  max-width: 800px;
  margin: auto;
  padding: var(--spacing-3);
  line-height: 1.5;

  h1 {
    font-size: var(--heading-3);
  }
  h2 {
    font-size: var(--heading-4);
  }
  h3 {
    font-size: var(--heading-5);
  }
`;
