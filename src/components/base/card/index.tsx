import styled from "styled-components";
import { Chip } from "../chips";

export const Card = styled.div`
  width: 100%;
  border-radius: var(--spacing-1);
  border: 1px solid var(--base);
  padding: var(--spacing-3);

  &,
  ${Chip} {
    transition: border-color 0.3s ease 0.2s, transform 0.3s ease 0.2s;
  }

  :hover {
    transition-delay: 0s;
    border-color: var(--contrast-low);
    transform: translateY(-4px);

    ${Chip} {
      border-color: var(--contrast-low);
    }
  }
`;
