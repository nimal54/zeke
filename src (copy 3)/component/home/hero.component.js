import React, { useEffect, useState } from "react";

import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.png";

import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";

import * as contents from "../../utils/content.collections";

const HeroComponent = () => {
  var headingIndex = 0;
  var arrayLength = contents.HERO_HEADINGS.length;
  headingIndex = Math.floor(Math.random() * arrayLength);

  {
    /* hero content  */
  }
  return (
    <div class="flex" style={{ height: "700px" }}>
      <div className="headers">
        <h2>Zeke international</h2>
        <div className="headers_button">
          <a>About</a>
          <a>Contact Us</a>
          <a>Blog</a>
        </div>
      </div>
      <Sheet
        variant="plain"
        sx={{
          borderRadius: "none",
          objectFit: "cover",
        }}
      >
        <AspectRatio>
          <img
            style={{
              objectFit: "cover",
              overflow: "hidden",
              width: "100%",
              height: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={banner}
            alt="zeke international image 1"
          />
        </AspectRatio>
      </Sheet>
      <div className="hero_heading">
        <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
      </div>
    </div>
  );
};
export default HeroComponent;
