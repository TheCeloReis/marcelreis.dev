import styled from "styled-components";
import Section from "../../base/section";
import { Content } from "../../base/content";

export const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 200px;
  }

  ${Content} {
    margin-top: 32px;
  }

  main {
    display: flex;
    flex-direction: column;
  }
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 32px;

  ${({ theme }) => theme.media.greaterThan.medium} {
    grid-template-columns: 200px auto;
  }

  ${({ theme }) => theme.media.lessThan.medium} {
    > div:first-of-type {
      margin: auto;
      width: 200px;
    }
  }
`;
