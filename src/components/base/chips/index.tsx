import styled from "styled-components";

export const Chip = styled.span`
  padding: var(--spacing-0) var(--spacing-2);
  border: 1px solid var(--base-low);
  font-size: var(--small-text);
  border-radius: var(--spacing-3);
`;

export const ChipContainer = styled.div`
  display: flex;
  overflow: hidden;
  > ${Chip} {
    margin-right: var(--spacing-2);
  }
`;
