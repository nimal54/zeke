import React, { useEffect, useState } from "react";

import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.png";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import * as contents from "../../utils/content.collections";

const HomeComponent = () => {

  var headingIndex = 0;
  // var arrayLength = contents.HERO_HEADINGS.length;
  // headingIndex = Math.floor(Math.random() * arrayLength);

  return (
    <div>
      {/* hero content  */}
      <div class="flex">
        <img
          style={{
            height: window.innerHeight / 2,
            objectFit: "cover",
            width: window.innerWidth,
          }}
          src={banner}
          alt="zeke international image 1"
        />
        <div className="hero_heading">
          <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
        </div>
      </div>

      {/* benefits content */}
      <div></div>
    </div>
  );
};

export default HomeComponent;
