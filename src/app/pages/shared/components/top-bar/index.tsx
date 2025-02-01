"use client";
import { useSidebar } from "../../../../context/SidebarContext";
import React from "react";
import styles from "./index.module.scss";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";

const TopBar = () => {
  const { showSidePanel, toggleSidePanel } = useSidebar();
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
    <div>
      <div className={styles.mobileView}>
        <div
          className={`${styles.mobileTobBar} ${
            isScrolled ? styles.scrolled : ""
          }`}
        >
          <div>
            <Image
              src="/png/home-top-bar.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div>
            {showSidePanel ? (
              <div onClick={toggleSidePanel}>
                <Image
                  src="/png/hide-side-panel.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <div onClick={toggleSidePanel}>
                <Image
                  src="/png/show-side-panel.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.webView}>
        <nav
          className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        >
          <div className={styles.leftSide}>
            <ul className={styles.navLinksLeft}>
              <li
                className={styles.link}
                onClick={() => navigationHandler("home")}
              >
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
      </div>
    </div>
  );
};

export default TopBar;
