import React from "react";

import * as S from "./RecentWork.styled";

type ProjectType = Record<"title" | "description" | "link" | "image", string>;

const Project = (props: ProjectType) => (
  <S.Figure>
    <S.Image src={props.image} alt="Letras Academy" />
    <S.Overlay />
    <S.FigureCaption>
      <S.Description>{props.description}</S.Description>
      <S.Button target="_blank" href={props.link}>
        Website {">"}
      </S.Button>
    </S.FigureCaption>
  </S.Figure>
);

const projects: ProjectType[] = [
  {
    title: "Letras Academy",
    description:
      "O Letras Academy está sendo criado pelo Letras para ajudar a aprender inglês e outros idiomas com música.",
    link: "https://letras.com/academy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marcelreis-dev.appspot.com/o/academy-thumb%402x.png?alt=media&token=e084adc5-2d98-4a69-b723-2e4450cabc2f",
  },
  {
    title: "Letras.com",
    description:
      "O site de música mais acessado pelos brasileiros oferece letras, traduções, cifras e o melhor player para ouvir músicas e assistir clipes com legenda.",
    link: "https://letras.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marcelreis-dev.appspot.com/o/letras-thumb%402x.png?alt=media&token=61dcc38b-7c46-47cc-b384-f8ea94bdd109",
  },
  {
    title: "Ouvir Música",
    description:
      "Ouça músicas grátis no maior acervo do Brasil. São quase 2 milhões de canções e milhares de playlists para assistir com vídeos e legendas!",
    link: "https://ouvirmusica.com.br",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marcelreis-dev.appspot.com/o/om-thumb%402x.png?alt=media&token=34044f85-7c8c-48bc-b3cf-6713357d32f0",
  },
];

function RecentWork() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Trabalhos recentes</S.Title>
        <S.Subtitle>
          Alguns projetos que contribui recentemente, quer saber mais?{" "}
          <S.Link href="mailto:oi@marcelreis.dev" target="_blank">
            Entre em contato
          </S.Link>
        </S.Subtitle>
      </S.Header>

      <S.ProjectGrid>
        {projects.map((project) => (
          <Project {...project} key={project.link} />
        ))}
      </S.ProjectGrid>
    </S.Container>
  );
}

export default RecentWork;
