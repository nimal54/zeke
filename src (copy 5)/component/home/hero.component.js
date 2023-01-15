import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.jpg";


import * as contents from "../../utils/content.collections";


const HeroComponent = () => {
  var headingIndex = 0;
  var arrayLength = contents.HERO_HEADINGS.length;
  headingIndex = Math.floor(Math.random() * arrayLength);

  const [isSlideBar, setIsSlideBar] = useState(false);


  const sendEmail=()=>{
    var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=nimalviju@gmail.com&cc=nvpublic54@gmail.com&su=SUBJECT&body=BODY"
    window.open(emailrequest, '_blank');
  }

  return (
    <div>
      <div
        class="hero-image"
        style={{
          height: window.innerHeight / 1.3,
          backgroundImage: `url(${banner})`,
        }}
      >
        <div class="hero-text">
          <h1 className="typewriter">{contents.HERO_HEADINGS[headingIndex]}</h1>
          <p>{contents.SUBLINES}</p>
          <div className="joinus">
            <button  onClick={(e) => sendEmail()}  >Join with Gmail</button>
            <button>Join with Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export  default HeroComponent;

