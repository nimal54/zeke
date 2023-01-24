import React from "react";

import "../../style/home/home.style.css";

import * as contents from "../../utils/content.collections";
import { Divider, Switch } from "@mui/material";
import HeroComponent from "./hero.component";
import BenefitsComponent from "./benefits.component";
import HowToGetComponent from "./howtoget.component";
import PartTimeCalculator from "./parttimecalculator.component";
import SOPComponent from "./sop.component";
import BlogBannerComponent from "./blogbanner.component";
import CountryListBannerComponent from "../country/countryListbanner.component"


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

      {/* CountryListBannerComponent */}
      <CountryListBannerComponent />

      {/* part time calculator  */}
      <PartTimeCalculator />

      {/* blog banner  */}
      <BlogBannerComponent />




    </div>
  );
};

export default HomeComponent;
