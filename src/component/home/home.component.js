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
import HeaderAndHeroComponent from "./header.and.herocomponent"


const HomeComponent = (props) => {


  var socialmediaurls = contents.SOCIALMEDIAURL;

  const getMediaUrl = (media) => {
    var filteredItems = socialmediaurls.find((item) => item.media === media);
    return filteredItems.url;
  };

  const redirectToSocialMedia = (media) => {
    window.open(getMediaUrl(media), '_blank');
  }


  return (
    <center>
      {/* benefits content */}
      <BenefitsComponent />
      <div>
        <ul class="sideButtonBar">
          <li class="btn_nav_item">
            <a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="btn_nav_link">
              <i class="fa fa-whatsapp"></i>
              {/* <span class="title">Home</span> */}
            </a>
          </li>
        </ul>
      </div>
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




    </center>
  );
};

export default HomeComponent;
