import React from "react";

import "../../style/home/home.style.css";

import * as contents from "../../utils/content.collections";
import { Divider, Switch } from "@mui/material";
import HeroComponent from "./hero.component";
import BenefitsComponent from "./benefits.component";
import HowToGetComponent from "./howtoget.component";
const HomeComponent = () => {
  return (
    <div>
      {/* hero content  */}
      <HeroComponent />
      
      <Divider/>
      {/* benefits content */}
      <BenefitsComponent />

      {/* how to get  */}
      <HowToGetComponent />
    </div>
  );
};

export default HomeComponent;
