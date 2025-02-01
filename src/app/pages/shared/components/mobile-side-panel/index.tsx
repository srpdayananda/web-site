"use client";
import { useSidebar } from "../../../../context/SidebarContext";
import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const MobileSidePanel = () => {
  const { showSidePanel, toggleSidePanel } = useSidebar();

  const navigationHandler = (navigation: string) => {
    const section = document.getElementById(navigation);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleSidePanel();
    }
  };

  return (
    <div className={style.mobileView}>
      {showSidePanel && (
        <div className={style.container}>
          <div className={style.logoSection}>
            <div className={style.logo}>
              <Image
                src="/png/home-top-bar.png"
                alt="logo"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className={style.logoName}>Home</div>
              <div className={style.logoText}>ENGINEERED FOR EXCELLENCE</div>
            </div>
          </div>
          <div className={style.navBarSection}>
            <div
              className={style.navbar}
              onClick={() => navigationHandler("about-us")}
            >
              <div>
                <Image
                  src="/png/about-us.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
              <div>About us</div>
            </div>
            <div
              className={style.navbar}
              onClick={() => navigationHandler("our-service")}
            >
              <div>
                <Image
                  src="/png/our-services.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
              <div>Our services</div>
            </div>
            <div
              className={style.navbar}
              onClick={() => navigationHandler("portfolio")}
            >
              <div>
                <Image
                  src="/png/portfolio.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
              <div>Portfolio</div>
            </div>
            <div
              className={style.navbar}
              onClick={() => navigationHandler("talk-to-us")}
            >
              <div>
                <Image
                  src="/png/talk-to-us.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
              <div>Talk to us</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidePanel;
