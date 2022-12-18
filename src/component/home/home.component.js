import React from "react";

import "../../style/home/home.style.css";

import * as contents from "../../utils/content.collections";
import HeroComponent from "./hero.component";
import BenefitsComponent from "./benefits.component";
import HowToGetComponent from "./howtoget.component"
const HomeComponent = () => {
  return (
    <div style={{ maxWidth: window.innerWidth }}>
      {/* hero content  */}
      <HeroComponent />

      {/* benefits content */}
      <BenefitsComponent />

      {/* how to get  */}
      <HowToGetComponent/>
    </div>
  );
};

export default HomeComponent;
