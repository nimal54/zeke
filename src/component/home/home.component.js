import React from "react";

import "../../style/home/home.style.css";

import * as contents from "../../utils/content.collections";
import { Divider, Switch } from "@mui/material";
import HeroComponent from "./hero.component";
import BenefitsComponent from "./benefits.component";
import HowToGetComponent from "./howtoget.component";
import PartTimeCalculator from "./parttimecalculator.component";
import SOPComponent from "./sop.component";

const HomeComponent = () => {
  return (
    <div>
      {/* hero content  */}
      <HeroComponent />

      {/* benefits content */}
      <BenefitsComponent />

      {/* SOP  */}
      <SOPComponent />


      {/* how to get  */}
      <HowToGetComponent />

       {/* part time calculator  */}
       <PartTimeCalculator />

       
    </div>
  );
};

export default HomeComponent;
