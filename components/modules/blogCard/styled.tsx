import styled from "styled-components";
import Section from "../../base/section";
import { Typography } from "../../base/typography";

export const Container = styled(Section)`
  ${Typography} {
    :nth-child(2) {
      margin-bottom: 8px;
    }
    :nth-child(3) {
      margin-bottom: 8px;
    }
  }
`;
