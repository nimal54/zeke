import React from "react";

import "../../style/home/home.style.css";

import * as contents from "../../utils/content.collections";
import HeroComponent from "./hero.component";
import BenefitsComponent from "./benefits.component"

const HomeComponent = () => {
  return (
    <div style={{ maxWidth: window.innerWidth }}>
      {/* hero content  */}
      <HeroComponent />
      <BenefitsComponent/>
      {/* benefits content */}

    </div>
  );
};

export default HomeComponent;
