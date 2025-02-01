"use client";

import React from "react";
import styles from "./index.module.css";
import CallIcon from "@mui/icons-material/Call";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navigationHandler = (navigation: string) => {
    const section = document.getElementById(navigation);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.leftSide}>
        <ul className={styles.navLinksLeft}>
          <li className={styles.link} onClick={() => navigationHandler("home")}>
            Home
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <ul className={styles.navLinksRight}>
          <li
            className={styles.callNavigationLink}
            onClick={() => navigationHandler("our-office")}
          >
            <CallIcon />
          </li>
          <li
            className={styles.link}
            onClick={() => navigationHandler("our-service")}
          >
            Our Service
          </li>
          <li
            className={styles.link}
            onClick={() => navigationHandler("about-us")}
          >
            About Us
          </li>
          <li
            className={styles.link}
            onClick={() => navigationHandler("portfolio")}
          >
            Portfolio
          </li>
          <li
            className={styles.btnTalkToUs}
            onClick={() => navigationHandler("talk-to-us")}
          >
            Talk to Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
