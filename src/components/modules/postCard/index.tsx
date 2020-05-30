import React from "react";
import Link from "next/link";

import { Card } from "../../base/card";
import { Heading4, Body1 } from "../../base/typography";
import { ChipContainer, Chip } from "../../base/chips";

import styles from "./.module.scss";

type PropsType = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const PostCard = (props: PropsType) => {
  return (
    <Card>
      <Link href={"/[lang]/blog/[post]"} as={props.url}>
        <a>
          <div className={styles.postsContainers}>
            <Heading4 as="h2">{props.title}</Heading4>
            <Body1 as="p">{props.description}</Body1>
            <ChipContainer>
              {props.tags.map((tag: string, index: number) => (
                <Chip key={index}>{tag}</Chip>
              ))}
            </ChipContainer>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default PostCard;
