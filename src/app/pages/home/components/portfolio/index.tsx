import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div id="portfolio" className={style.container}>
      <div className={style.secondContent}>
        <div className={style.secondContentImageSection}>
          <div className={style.devServiceImage}>
            <Image
              src="/png/about/development.jpg"
              alt="meeting"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <div className={style.secondContentBody}>
          <div className={style.secondBodySection}>
            <div className={style.title}>
              Choose Caploitte - Your Partner for Next-Level Software Solutions
            </div>
            <div className={style.body}>
              Are you seeking a software company that can bring fresh ideas,
              innovative solutions, and a personalized approach to your
              business? Look no further than Caploitte. As a new software
              company, we offer unique advantages that set us apart and make us
              an ideal choice for your software needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
