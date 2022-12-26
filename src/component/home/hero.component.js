import React, { useEffect, useState } from "react";

import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.jpg";

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

  return (
    <div>
      <nav className="navbar">
        <h1 href="#" className="logo">
          Zeke international
        </h1>
        <input type="checkbox" id="toggler"></input>
        <label for="toggler">
          <i className="gg-menu"></i>
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        class="hero-image"
        style={{
          height: window.innerHeight / 1.3,
          backgroundImage: `url(${banner})`,
        }}
      >
        <div class="hero-text">
          <h1>{contents.HERO_HEADINGS[headingIndex]}</h1>
          <p>{contents.SUBLINES} - {window.innerWidth} / {window.innerHeight}</p>
          <div className="joinus">
            <button>Join with Gmail</button>
            <button>Join with Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;
