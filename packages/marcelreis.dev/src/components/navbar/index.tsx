import React from "react";
import Link from "next/link";

import styles from "./.module.scss";

const Navbar = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/[lang]/home" as={`/home`}>
            <a className={styles.logoText}>MR</a>
          </Link>
        </div>

        <div className={`${styles.navItem}`}>
          <Link href="/[lang]/blog" as={`/blog`}>
            <a>blog</a>
          </Link>
        </div>

        <div className={`${styles.navItem}`}>
          <Link href="/[lang]/labs" as={`/labs`}>
            <a>labs</a>
          </Link>
        </div>

        <div className={`${styles.navItem}`}>
          <Link href="/[lang]/about" as={`/about`}>
            <a>about</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
