import styled, { css } from "styled-components";

type PropsType = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  dash?: boolean;
};

export const Typography = styled.span<PropsType>`
  display: inline-block;
  margin: 0;

  ${({ theme }) => theme.media.lessThan.small} {
    text-align: center;
  }

  ${({ variant }) => {
    switch (variant) {
      case "h1": {
        return css`
          font-size: 6rem;
          letter-spacing: -1.5;
          font-weight: light;
        `;
      }
      case "h2": {
        return css`
          font-size: 3.75rem;
          letter-spacing: -0.5;
          font-weight: light;
        `;
      }
      case "h3": {
        return css`
          font-size: 3rem;
          letter-spacing: 0;
          font-weight: normal;
        `;
      }
      case "h4": {
        return css`
          font-size: 2.125rem;
          letter-spacing: 0.25;
          font-weight: normal;
        `;
      }
      case "h5": {
        return css`
          font-size: 1.5rem;
          letter-spacing: 0;
          font-weight: normal;
        `;
      }
      case "h6": {
        return css`
          font-size: 1.25rem;
          letter-spacing: 0.15;
          font-weight: normal;
        `;
      }
      case "subtitle1": {
        return css`
          font-size: 1rem;
          letter-spacing: 0.15;
          font-weight: normal;
        `;
      }
      case "subtitle2": {
        return css`
          font-size: 0.875rem;
          letter-spacing: 0.1;
          font-weight: normal;
        `;
      }
      case "body1": {
        return css`
          font-size: 1rem;
          letter-spacing: 0.5;
          font-weight: normal;
          line-height: 1.5;
        `;
      }
      case "body2": {
        return css`
          font-size: 0.875rem;
          letter-spacing: 0.25;
          font-weight: normal;
          line-height: 1.25;
        `;
      }

      default:
        return "";
    }
  }}

  ${({ dash }) =>
    dash
      ? css`
          position: relative;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          margin-bottom: 1.5em;

          ::after {
            content: "";
            display: block;
            position: absolute;
            left: 12.5%;
            height: 4px;
            width: 75%;
            margin-top: 0.5em;
            background-color: ${({ theme }) => theme.colors.main[5]};
          }
        `
      : ""}
`;
