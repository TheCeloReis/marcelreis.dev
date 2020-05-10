import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  margin: auto;
  width: 100%;
  background-color: #c2c921;
`;

export const Container = styled.div`
  max-width: 960px;
  justify-content: center;
  height: 48px;
  margin: auto;
  display: flex;
`;

export const Button = styled.a`
  width: 48px;
  height: 48px;
  padding: 8px;
  margin: 0 16px;
  color: #fff;

  transition: color 0.2s ease, transform 0.2s ease;

  :hover {
    color: #eee;
    transform: scale(1.1) translateY(-8px);
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;
