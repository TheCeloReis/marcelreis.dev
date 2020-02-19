import styled from "styled-components";
import Section from "../../base/section";
import { Typography } from "../../base/typography";

export const Container = styled(Section)`
  cursor: pointer;
  transition: 0.3s all linear;

  ${({ theme }) => theme.media.greaterThan.medium} {
    :hover {
      box-shadow: ${({ theme }) => theme.boxShadow[2]};
      transform: scale(1.005);
    }
  }

  ${Typography} {
    :nth-child(2) {
      margin-bottom: 8px;
    }
    :nth-child(3) {
      margin-bottom: 8px;
    }
  }
`;
