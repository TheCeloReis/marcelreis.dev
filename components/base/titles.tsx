import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: 6.75rem;
`;

const SectionTitle = styled.h2`
  height: 1.5rem;
  margin: 2rem auto;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 0.25rem solid #f7e019;
  transition: 2s;
  justify-self: center;

  :hover {
    transform: scale(1.1);
  }
`;

export const SectionHeader = (props: any) => {
  return (
    <ContainerHeader>
      <SectionTitle>{props.children}</SectionTitle>
    </ContainerHeader>
  );
};
