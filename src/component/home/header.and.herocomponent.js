import React, { useEffect, useState } from "react";
import "../../style/home/header.and.hero.style.css";
import * as constants from "../../utils/system.constant";
import * as contents from "../../utils/content.collections";


// import img10 from "../../assets/home/heroImage.jpg";
import img10 from "../../assets/hero_img.png";
import zi_logo from "../../assets/zi_logo.png"

const HeaderAndHeroComponent = (props) => {


    var headingIndex = 1;
    var arrayLength = contents.HERO_HEADINGS.length;
    headingIndex = Math.floor(Math.random() * arrayLength);

    const receiverEmail = ""
    const ccReceiverEmail = ""
    const bccReceiverEmail = ""
    const emailSubject = "Enqiury"
    const emailBody = "Hello Zeke, I like to know more about you. please reach out me asap!!!"



    const eventRouter = (path) => {
        console.log(path);
        props.setPathInfo(path)
        let inputs = document.getElementById('menu-btn');
        inputs.checked = false;
        return true
    }

    const sendEmail = () => {
        var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=" + receiverEmail + "&cc=" + ccReceiverEmail + "&su=" + emailSubject + "&body=" + emailBody
        window.open(emailrequest, '_blank');
    }

    const sendToWhatsapp = () => {
        var sendTo = "+919656119814"
        var messageBody = "Hello Zeke, I like to know more about you. please reach out me asap!!! "
        var sendRequest = "https://wa.me/" + sendTo + "/?text=" + messageBody
        window.open(sendRequest, '_blank')
    }

    return (

        <div>
            <header class="main-header">
                <div class="logo">
                    <img src={zi_logo} style={{width:"30px", height:"30px"}}></img>
                    <p>{constants.COMPANY_NAME}<br/><span style={{fontWeight:"400", fontSize:"small",textAlign:"right"}}>A Go Getters Hub</span></p>
                </div>

                <input type="checkbox" class="menu-btn" id="menu-btn" />
                <label for="menu-btn" class="menu-icon">
                    <span class="menu-icon__line"></span>
                </label>

                <ul class="nav-links">
                    <li class="nav-link">
                        <a onClick={(e) => eventRouter("home")}>Home</a>
                    </li>
                    <li class="nav-link">
                        <a onClick={(e) => eventRouter("about")}>About</a>
                    </li>
                    <li class="nav-link">
                        <a onClick={(e) => eventRouter("blog")}>Blogs</a>
                    </li>
                    <li class="nav-link">
                        <a onClick={(e) => eventRouter("contact")}>Contact</a>
                    </li>
                </ul>
            </header>
            {props.pathInfo === "home" ?
                (
                        <div class="temp" style={{ backgroundImage: `url(${img10})` }}>

                            <div className="hero-text">
                                <h1 className="typewriter">{contents.HERO_HEADINGS[headingIndex]}</h1>
                                <p>{contents.SUBLINES}</p>
                                <div className="joinus">
                                    <button onClick={(e) => sendEmail()}  >Join with Gmail</button>
                                    <button onClick={(e) => sendToWhatsapp()}>Join with Whatsapp</button>
                                </div>
                            </div>
                        </div>
                )
                :
                <div style={{ paddingBottom: "5%" }}>
                    <p>&nbsp;</p>
                </div>
            }


        </div>



    )
}

export default HeaderAndHeroComponent