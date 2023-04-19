import React from "react";

import "../../style/home/howtoget.style.css";
import img0 from "../../assets/home/0.jpg";
import img1 from "../../assets/home/1.jpg";
import img2 from "../../assets/home/2.jpg";
import img3 from "../../assets/home/3.jpg";
import img4 from "../../assets/home/4.jpg";
import * as contents from "../../utils/content.collections";


const HowToGetComponent = (props) => {

  var socialmediaurls = contents.SOCIALMEDIAURL;
  const isTrue = (index) => {
    if (window.innerWidth > 450) return index % 2 == 0 ? true : false;
    else return true;
  };

  const img_arr = [img0, img1, img2, img3, img4]

  const getMediaUrl = (media) => {
    var filteredItems = socialmediaurls.find((item) => item.media === media);
    return filteredItems.url;
  };

  const redirectToSocialMedia = (media) => {
    window.open(getMediaUrl(media), '_blank');
  }
  const eventRouter = (path) => {
    console.log(path);
    props.setPathInfo(path)
    let inputs = document.getElementById('menu-btn');
    inputs.checked = false;
    return true
  }

  return (
    <div>
      <div className="howtoget">
        <h3 className="howtogettitle">How to get Zeke ?</h3>
        <center>
          <p>Fly the Zeke way!!! How we help you to make the journey easy.</p>
        </center>
        <br /><br />
        {contents.HOW_TO_GET_ZEKE.map((data, index) =>

          <div className="countryBody">

            <section class="about section bd-container" id="about">
              <div class="about__container  bd-grid">
                <div class="eclipsecurvecut">
                  <img src={img_arr[index]} alt="" class="about__img eclipsecurvecutinside" />
                </div>
                <div class="about__data">
                  {/* <span class="section-subtitle about__initial">About us</span> */}
                  <h2 class="section-title about__initial">{data.head}</h2>
                  <p class="about__description">{data.subhead}</p>
                  <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get In Touch With Us</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} class="cs_button">Just Whatsapp</a></div>
                  <div class="btn_wrap " style={{ margin:"3%", display:"flex", justifyContent:"center"}}>
                  <span className=" test_btn span_share">Share</span>
                  <div class=" socialmedia_btns">
                    <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                    <i onClick={(e) => redirectToSocialMedia("whatsapp")} class="icons_btns fab fa-whatsapp"></i>
                    <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                    <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                  </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}
        {/* {window.innerWidth > 450 ? (
          <div className="howtoget_contentdiv">
            {contents.HOW_TO_GET_ZEKE.map((data, index) =>
              data.firstposition ? (
                <div class="blog-card borderanimation item scrollFade">
                  <div class="meta">
                    <div
                      class="photo"
                      style={{ backgroundImage: `url(${img_arr[index]})` }}
                    ></div>
                    <ul class="details"></ul>
                  </div>
                  <div class="description ">
                    <h1>{data.head}</h1>
                    <p> {data.subhead}</p>
                    <div style={{ display: "flex", justifyContent: "right" }}>
                      <div class=" btn_wrap">
                        <span className=" test_btn span_share">Share</span>
                        <div class="socialmedia_btns">
                          <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                          <i onClick={(e) => redirectToSocialMedia("whatsapp")} class="icons_btns fab fa-whatsapp"></i>
                          <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                          <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="blog-card borderanimation item scrollFade">
                  <div class="description">
                    <h1>{data.head}</h1>
                    <p> {data.subhead}</p>
                    <div style={{ display: "flex", justifyContent: "left" }}>
                      <div class="btn_wrap">
                        <span className="span_share">Share</span>
                        <div class="socialmedia_btns">
                          <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                          <i onClick={(e) => redirectToSocialMedia("whatsapp")} class="icons_btns fab fa-whatsapp"></i>
                          <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                          <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="meta ">
                    <div
                      class="photo "
                      style={{ backgroundImage: `url(${img_arr[index]})` }}
                    ></div>
                    <ul class="details"></ul>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="howtoget_contentdiv">
            {contents.HOW_TO_GET_ZEKE.map((data, index) => (
              <div class="blog-card" style={{borderRadius:"1px 150px"}}>
                <div class="meta item scrollFade">
                  <div
                    class="photo"
                    style={{ backgroundImage: `url(${img_arr[index]})` }}
                  ></div>
                  <ul class="details"></ul>
                </div>
                <div class="description item scrollFade">
                  <h1>{data.head}</h1>
                  <p> {data.subhead}</p>
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <div class="btn_wrap">
                      <span className="span_share">Share</span>
                      <div class="socialmedia_btns">
                        <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                        <i onClick={(e) => redirectToSocialMedia("whatsapp")} class="icons_btns fab fa-whatsapp"></i>
                        <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                        <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default HowToGetComponent;
