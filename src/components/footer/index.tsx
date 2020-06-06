import React from "react";

import { Linkedin, GitHub, Twitter } from "components/icons";
import { Waves } from "components/waves";

import styles from "./.module.scss";
import typographyStyles from "styles/typography.module.scss";

const Footer = () => {
  return (
    <>
      <Waves className={styles.waves} />
      <footer className={`${styles.footer}`}>
        <h4 className={typographyStyles.heading_3}>Contact Me</h4>
        <div className={styles.socialLinks}>
          <a title="Linkedin" href="https://linkedin.com/in/marcelreis">
            <Linkedin />
          </a>
          <a title="Github" href="https://github.com/marcelreis">
            <GitHub />
          </a>
          <a title="Twitter" href="https://twitter.com/_marcelreis">
            <Twitter />
          </a>
        </div>
        <small className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}, Marcelo Reis
        </small>
      </footer>
    </>
  );
};

export default Footer;
