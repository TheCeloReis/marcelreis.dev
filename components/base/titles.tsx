import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: 6.75rem;
`;

const SectionTitle = styled.h2`
  height: 2.5rem;
  margin: 2rem auto;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  transition: 2s;
  justify-self: center;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.25rem;
    margin-top: 0.5rem;
    background-color: #f7e019;
    transition: 0.6s ease;
  }

  :hover ::after {
    transition: 0.3s ease;
    transform: scaleX(1.1);
  }
`;

export const SectionHeader = (props: any) => {
  return (
    <ContainerHeader>
      <SectionTitle>{props.children}</SectionTitle>
    </ContainerHeader>
  );
};
