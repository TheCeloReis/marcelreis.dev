import React from "react";

import { Linkedin, Twitter, Github } from "@styled-icons/boxicons-logos";

import styles from "./.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.button}
        title="Linkedin"
        href="https://linkedin.com/in/marcelreis"
      >
        Linkedin
        <Linkedin size={"36px"} />
      </a>
      <a
        className={styles.button}
        title="Github"
        href="https://github.com/marcelreis"
      >
        Github
        <Github size={"36px"} />
      </a>
      <a
        className={styles.button}
        title="Twitter"
        href="https://twitter.com/_marcelreis"
      >
        Twitter
        <Twitter size={"36px"} />
      </a>
    </footer>
  );
};

export default Footer;
