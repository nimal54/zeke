import React, { useState } from "react";

import "../../style/contact/contact.style.css";
import * as contents from "../../utils/content.collections";

const ContactComponent = () => {

  const [data, setData] = useState({ name: "", email: "", phone: "", country: "", course: "" })

  const sendEmail = () => {
    // if (validation()) {
    var receiverEmail = ""
    var ccReceiverEmail = ""
    var bccReceiverEmail = ""
    var emailSubject = "Enqiury"
    var emailBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nName : " + data.name + "\n please reach out me asap!!! "
    var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=" + receiverEmail + "&cc=" + ccReceiverEmail + "&su=" + emailSubject + "&body=" + emailBody
    window.open(emailrequest, '_blank');
    // }
  }


  var socialmediaurls = contents.SOCIALMEDIAURL;

  const getMediaUrl = (media) => {
    var filteredItems = socialmediaurls.find((item) => item.media === media);
    return filteredItems.url;
  };

  const redirectToSocialMedia = (media) => {
    window.open(getMediaUrl(media), '_blank');
  }

  const sendToWhatsapp = () => {
    // if (validation()) {
    var sendTo = "+916282345242"
    var messageBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nName : " + data.name + "\n please reach out me asap!!! "
    var sendRequest = "https://wa.me/" + sendTo + "/?text=" + messageBody
    window.open(sendRequest, '_blank')
    // }
  }

  // const validation = () => {
  //   if (data.country === "" && data.course === "" && data.intake === "") {
  //     setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter valid inputs..." })
  //     return false;
  //   } else if (data.country === "") {
  //     setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your country ..." })
  //     return false;
  //   } else if (data.course === "") {
  //     setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your course ..." })
  //     return false;
  //   } else if (data.intake === "") {
  //     setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your intake ..." })
  //     return false;
  //   } else if (data.country != "" || data.course != "" || data.intake != "") {
  //     setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "" })
  //     return true;
  //   }
  // }

  const saveInputDataToData = (feild, inputValue) => {
    var temp = {};
    temp = {
      country: feild === "country" ? inputValue : data.country,
      course: feild === "course" ? inputValue : data.course,
      name: feild === "name" ? inputValue : data.name,
      phone: feild === "phone" ? inputValue : data.phone,
      email: feild === "email" ? inputValue : data.email
    }
    setData(temp)
  }




  return (
    <div class=" paddingb4">
      <center style={{ paddingBottom: "4%", paddingInline: "3%" }}>
        <h2> Contact <span> Us </span> </h2>
        <medium>
          <var>We’re here near you just a tap away. Dial us, Mail Us or even letters will do!.</var>
        </medium>
      </center>
      <div class="contact_container paddingb4">
        <div className="contact_heading paddingb4">

          <div class="contact_info">
            <div class="contact_info_title paddingb4" >
              <h3>Contact detail</h3>
              <div className="smallDiv" >
                <br />
                <h4>Address</h4>
                <small>First Floor, Chittezhath Tower,Thammanam - Pullepady Road, CBI Junction,Kathrikadavu, Kochi, Kerala 682017</small>
              </div>
              <div className="smallDiv">
                {/* <br /> */}
                <h4>Phone</h4>
                <small>+91 6282345242, +91 85904833667</small>
              </div>
              <div className="smallDiv paddingb4">
                {/* <br /> */}
                <h4>Email</h4>
                <small>info@zekeinternational.com</small>
              </div>
            </div>

            <div class="social-menu paddingb4">
              <ul>
                <li><a onClick={(e) => redirectToSocialMedia("facebook")} target="blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("instargam")} target="blank"><i class="fab fa-instagram"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("linkedin")} target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a onClick={(e) => redirectToSocialMedia("whatsapp")}><i class="fab fa-whatsapp" target="blank"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact_form paddingb4">
          {/* <div className="contact_sendButton"> */}
          <center><p style={{ color: "darkgoldenrod" }}>Fill in to fulfil your abroad dreams!!!</p></center>
          <hr />
          {/* </div> */}
          <div className="contact_form_innner paddingb4">
            <input value={data.name} onChange={(e) => saveInputDataToData("name", e.target.value)} type="text" placeholder="Name"></input>
            <input value={data.email} onChange={(e) => saveInputDataToData("email", e.target.value)} type="text" placeholder="Email"></input>
            <input value={data.phone} onChange={(e) => saveInputDataToData("phone", e.target.value)} type="text" placeholder="Phone"></input>
            <input value={data.country} onChange={(e) => saveInputDataToData("country", e.target.value)} type="text" placeholder="Prefer Country"></input>
            <input value={data.course} onChange={(e) => saveInputDataToData("course", e.target.value)} type="text" placeholder="Prefer Course"></input>
            <button className=" btn_snd cnt_btn" onClick={(e) => sendEmail()}  >Drop a mail</button>
            <button className="btn_snd" onClick={(e) => sendToWhatsapp()}>Just Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;


