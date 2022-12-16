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
<div></div>
  );
};
export default HeroComponent;

{
  /* <div class="flex" style={{height: window.innerHeight/2}}>
<Sheet
  variant="plain"
  sx={{
    width: window.innerWidth,
    height: window.innerHeight/1.2,
    borderRadius: "none",
    objectFit:'fill',
    justifyContent:'center'
  }}
>
  <AspectRatio>
    <img
      style={{
        objectFit: "cover",
        overflow: "hidden",
      }}
      src={banner}
      alt="zeke international image 1"
    />
  </AspectRatio>
</Sheet>
<div className="hero_heading">
  <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
</div>
</div> */
}
