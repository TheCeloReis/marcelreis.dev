import React from "react";
import Link from "next/link";

import styles from "./.module.scss";
import cardStyles from "styles/card.module.scss";
import chipStyles from "styles/chip.module.scss";
import typographyStyles from "styles/typography.module.scss";

type PropsType = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const PostCard = (props: PropsType) => {
  return (
    <div className={cardStyles.card}>
      <Link href={"/[lang]/blog/[post]"} as={props.url}>
        <a>
          <div className={styles.postsContainers}>
            <h2 className={typographyStyles.heading_4}>{props.title}</h2>
            <p className={typographyStyles.body_1}>{props.description}</p>
            <div className={chipStyles.container}>
              {props.tags.map((tag: string, index: number) => (
                <div className={chipStyles.chip} key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
