import { Waves as BaseWaves } from "../components/Waves/Waves";
import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  margin-top: 72px;
  background: var(--green);
`;

export const Waves = styled(BaseWaves)`
  position: absolute;
  top: -64px;

  path {
    fill: var(--green);
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: var(--spacing-3);
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-5);
  color: var(--white);
  margin: var(--spacing-4) 0 var(--spacing-3);

  a {
    transition: transform 200ms ease;
  }

  a:hover,
  a:focus {
    color: var(--gray-5);
    transform: scale(1.1);
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: var(--white);
  font-weight: bold;
`;
