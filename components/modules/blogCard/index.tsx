import React from "react";

import * as S from "./styled";
import { Typography } from "../../base/typography";
import { TagList } from "../../base/taglist";

export const BlogCard = () => {
  return (
    <S.Container>
      <Typography variant="subtitle1" as="p" centerInMobile>
        23 de agosto de 2019
      </Typography>

      <Typography variant="h4" as="h2" centerInMobile>
        Post Legal
      </Typography>
      <Typography variant="body1" as="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quos
        corrupti assumenda maxime nobis tempora suscipit excepturi molestiae ab
        earum, ipsam provident et repellendus voluptatum perspiciatis pariatur
        nemo! Sint, quia!
      </Typography>
      <TagList tags={["Typescript", "React", "Next.js"]} />
    </S.Container>
  );
};
