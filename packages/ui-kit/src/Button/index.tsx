import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
`;

const Button = (props: PropsWithChildren<{}>) => {
  return <StyledButton>1 -{props.children}</StyledButton>;
};
export default Button;
