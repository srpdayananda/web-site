import { FC } from "react";
import React from "react";

import MainContent from "./components/main-content";
import AboutUs from "./components/about-us";
import OurServices from "./components/our-services";
import Portfolio from "./components/portfolio";
import TalkToUs from "./components/talk-to-us";
import OurOffice from "./components/our-office";

const Home: FC = () => {
  return (
    <div>
      <div id="home">
        <MainContent />
      </div>
      <div id="our-services">
        <OurServices />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="talk-to-us">
        <TalkToUs />
      </div>
      <div id="our-office">
        <OurOffice />
      </div>
    </div>
  );
};

export default Home;
