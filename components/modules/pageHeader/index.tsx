import styled from "styled-components";

import { Typography } from "../../base/typography";

export const PageHeader = styled.div`
  color: #000;
  margin: 24px 0;

  ${Typography} {
    :first-child {
      margin-bottom: 16px;
    }

    color: white;
  }
`;
