import React, { useState } from "react";

import "../../style/contact/contact.style.css";

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
    <div>
      <center style={{ paddingBottom: "2%" }}>
        <h2>
          Contact
          <span> Us </span>
        </h2>
        <medium>
          We’re here near you just a tap away. Dial us, Mail Us or even letters will do!.
        </medium>
      </center>
      <div class="contact_container">
        <div className="contact_heading">

          <div class="contact_info">
            <div class="contact_info_title">
              <h3>Contact detail</h3>
              {/* <p>
                
              </p> */}
              <div className="smallDiv">
                <br/>
                <h4>Address</h4>
                <p>+91 6282345242, +91 8590483366</p>
              </div>
            </div>
            <div class="social-menu-incontact paddingb4" style={{ display: 'flex', justifyContent: "space-around" }}>
              <div className="smallDiv">
                <h3>Phone</h3>
                <p>+91 6282345242, +91 8590483366</p>
              </div>
              <div className="smallDiv">
                <h3>Email</h3>
                <p>info@zekeinternational.com</p>
              </div>
            </div>
            <div class="social-menu-incontact">
              <ul>
                <li>
                  <a href="#" target="blank">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact_form">
          {/* <div className="contact_sendButton"> */}
          <center><p style={{color:"darkgoldenrod"}}>Fill in to fulfil your abroad dreams!!!</p></center>
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


