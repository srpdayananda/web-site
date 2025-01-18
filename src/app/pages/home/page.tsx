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
    <>
      <MainContent />
      <OurServices />
      <AboutUs />
      <Portfolio />
      <TalkToUs />
      <OurOffice />
    </>
  );
};

export default Home;
