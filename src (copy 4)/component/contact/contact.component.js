import React from "react";

import "../../style/contact/contact.style.css";

const ContactComponent = () => {
  return (
    <div class="contact_container">
      <div className="contact_heading">
        <h2>
          Contact
          <span> Us </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="contact_info">
          <div class="contact_info_title">
            <h3>Contact detail</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          <div class="social-menu paddingb4" style={{display:'flex', justifyContent:"space-around"}}>
            <div className="smallDiv">
              <h3>Phone</h3>
              <p>+91 9876543211</p>
            </div>
            <div className="smallDiv">
              <h3>Email</h3>
              <p>zeke@hello.com</p>
            </div>
          </div>
          <div class="social-menu">
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
        <p>Mail your musings!</p>
        {/* </div> */}
        <div className="contact_form_innner paddingb4">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Phone"></input>
          <input type="text" placeholder="Prefer Country"></input>
          <input type="text" placeholder="Prefer Course"></input>
          <button className="btn_snd">Join with Gmail</button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
