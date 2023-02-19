import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../../style/home/home.style.css";
import banner from "../../assets/home/heroImage.jpg";

import * as contents from "../../utils/content.collections";
import HeaderComponent from "../header/header.component";


// import * as contents from "../../utils/content.collections";


const HeroComponent = () => {
  var headingIndex = 0;
  var arrayLength = contents.HERO_HEADINGS.length;
  headingIndex = Math.floor(Math.random() * arrayLength);

  const [isSlideBar, setIsSlideBar] = useState(false);

  const receiverEmail = ""
  const ccReceiverEmail = ""
  const bccReceiverEmail = ""
  const emailSubject = "Enqiury"
  const emailBody = "Hello Zeke, I like to know more about you. please reach out me asap!!!"

  const sendEmail = () => {
    var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=" + receiverEmail + "&cc=" + ccReceiverEmail + "&su=" + emailSubject + "&body=" + emailBody
    window.open(emailrequest, '_blank');
  }

  const sendToWhatsapp = () => {
    var sendTo = "+916282345242"
    var messageBody = "Hello Zeke, I like to know more about you. please reach out me asap!!! "
    var sendRequest = "https://wa.me/" + sendTo + "/?text=" + messageBody
    window.open(sendRequest, '_blank')
  }

  const clicking = () =>{
    let path  = window.location.pathname;
console.log(path);
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
          {/* <button onClick={((e)=>clicking())}></button> */}
          <div className="joinus">
            <button onClick={(e) => sendEmail()}  >Join with Gmail</button>
            <button onClick={(e) => sendToWhatsapp()}>Join with Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;

