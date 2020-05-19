import styled from "styled-components";

export const Typography = styled.span`
  margin: 0;
  font-weight: 400;
`;

export const Heading1 = styled(Typography)`
  font-size: var(--heading-1);
`;

export const Heading2 = styled(Typography)`
  font-size: var(--heading-2);
`;

export const Heading3 = styled(Typography)`
  font-size: var(--heading-3);
  font-weight: 600;
`;

export const Heading4 = styled(Typography)`
  font-size: var(--heading-4);
  font-weight: 600;
`;

export const Heading5 = styled(Typography)`
  font-size: var(--heading-5);
`;

export const Body1 = styled(Typography)`
  font-size: var(--base-text);
`;
