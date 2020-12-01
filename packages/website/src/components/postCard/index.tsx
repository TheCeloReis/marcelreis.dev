import React from "react";

import styles from "./.module.scss";

import Link from "next/link";
import { ChipContainer, Chip } from "components/chip";

import Card from "uiKit/card";

type PostCardType = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  img?: {
    src: string;
    alt: string;
  };
};
export const PostCard = (props: PostCardType) => (
  <Link href={"/[lang]/blog/[post]"} as={props.url}>
    <a>
      <article>
        <Card className={styles.postContainer}>
          <div className={styles.imgContainer}>
            <img {...props.img} alt="" loading="lazy" />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
          </div>
          <ChipContainer>
            {props.tags.map((tag: string, index: number) => (
              <Chip key={index}>{tag}</Chip>
            ))}
          </ChipContainer>
        </Card>
      </article>
    </a>
  </Link>
);
