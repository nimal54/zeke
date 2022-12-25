import React, { useEffect, useState } from "react";

import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.png";

import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";

import * as contents from "../../utils/content.collections";

const slidebar_config = () => {
  // className={`${isSlideBar ? 'selected' : ''}`}
};

const HeroComponent = () => {
  var headingIndex = 0;
  var arrayLength = contents.HERO_HEADINGS.length;
  headingIndex = Math.floor(Math.random() * arrayLength);

  const [isSlideBar, setIsSlideBar] = useState(false);

  {
    /* hero content  */
  }
  return (
    <div>
      {/* headers  */}
      <div className="headers">
        <h2>Zeke international</h2>

        <div className="header_buttons">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
          <a href="#">Login</a>
          <a href="#">Join With us</a>
        </div>

        <div className="header_buttons_mob">
          <a>
            <i onClick={() => setIsSlideBar(true)} class="fa fa-bars"></i>
          </a>
        </div>
        <div
          id="myNav"
          style={{ display: isSlideBar ? "block" : "none" }}
          className={`${isSlideBar ? "overlay" : ""}`}
        >
          <a
            href="javascript:void(0)"
            class="closebtn"
            onClick={() => setIsSlideBar(false)}
          >
            &times;
          </a>
          <div
            style={{ display: isSlideBar ? "block" : "none" }}
            className={`${isSlideBar ? "overlay-content" : ""}`}
          >
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
            <a href="#">Login</a>
            <a href="#">Join With us</a>
          </div>
        </div>
      </div>

      {/* <div style={{ height: window.innerWidth / 2.5, overflow: "hidden", backgroundSize:'cover' }}>
        <img style={{ width: "100%", objectFit: "cover" }} src={banner}></img>
        <div className="hero_heading">
          <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
        </div>
      </div> */}

      {/* <div class="test2" style={{ height: window.innerWidth / 2.5, overflow: "hidden", backgroundSize:'cover' }}>
      <img style={{ width: "100%", objectFit: "cover" }} src={banner}></img>
        <p>Text with some translucent background thing</p>
      </div> */}
      {/* hero  */}
      <div
        className="hero_content"
        style={{
          width: window.innerWidth,
          height: window.innerWidth / 2.5,
        }}
      >
        <img style={{ width: "100%", objectFit: "cover" }} src={banner}></img>
        <div className="hero_heading">
          <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;
