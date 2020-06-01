import React from "react";

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
        <div />
      </a>
      <a
        className={styles.button}
        title="Github"
        href="https://github.com/marcelreis"
      >
        Github
        <div />
      </a>
      <a
        className={styles.button}
        title="Twitter"
        href="https://twitter.com/_marcelreis"
      >
        Twitter
        <div />
      </a>
    </footer>
  );
};

export default Footer;
