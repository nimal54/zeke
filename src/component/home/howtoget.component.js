import React from "react";

import "../../style/home/howtoget.style.css";
import img10 from "../../assets/home/0.jpg";
import img11 from "../../assets/home/1.jpg";
import * as contents from "../../utils/content.collections";

const HowToGetComponent = () => {

  var socialmediaurls = contents.SOCIALMEDIAURL;
  const isTrue = (index) => {
    if (window.innerWidth > 450) return index % 2 == 0 ? true : false;
    else return true;
  };

  const getMediaUrl = (media) => {
    var filteredItems = socialmediaurls.find((item) => item.media === media);
    return filteredItems.url;
  };

  const redirectToSocialMedia = (media) => {
    window.open(getMediaUrl(media), '_blank');
  }

  return (
    <div>
      <div className="howtoget">
        <h3 className="howtogettitle ">How to get Zeke ?</h3>
        <center>
          <h4>Fly the Zeke way!!! How we help you to make the journey easy.</h4>
        </center>
        <br/><br/>

        {window.innerWidth > 450 ? (
          <div className="howtoget_contentdiv">
            {contents.HOW_TO_GET_ZEKE.map((data, index) =>
              data.firstposition ? (
                <div class="blog-card">
                  <div class="meta">
                    <div
                      class="photo"
                      style={{ backgroundImage: `url(${img10})` }}
                    ></div>
                    <ul class="details"></ul>
                  </div>
                  <div class="description">
                    <h1>{data.head}</h1>
                    <p> {data.subhead}</p>
                    <div style={{ display: "flex", justifyContent: "right" }}>
                      <div class=" btn_wrap">
                        <span className=" test_btn span_share">Share</span>
                        <div class="socialmedia_btns">
                          <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                          <i onClick={(e) => redirectToSocialMedia("twitter")} class="icons_btns fab fa-whatsapp"></i>
                          <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                          <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="blog-card">
                  <div class="description">
                    <h1>{data.head}</h1>
                    <p> {data.subhead}</p>
                    <div style={{ display: "flex", justifyContent: "left" }}>
                      <div class="btn_wrap">
                        <span className="span_share">Share</span>
                        <div class="socialmedia_btns">
                          <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                          <i onClick={(e) => redirectToSocialMedia("twitter")} class="icons_btns fab fa-twitter"></i>
                          <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                          <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="meta">
                    <div
                      class="photo"
                      style={{ backgroundImage: `url(${img11})` }}
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
              <div class="blog-card">
                <div class="meta">
                  <div
                    class="photo"
                    style={{ backgroundImage: `url(${img11})` }}
                  ></div>
                  <ul class="details"></ul>
                </div>
                <div class="description">
                  <h1>{data.head}</h1>
                  <p> {data.subhead}</p>
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <div class="btn_wrap">
                      <span className="span_share">Share</span>
                      <div class="socialmedia_btns">
                        <i onClick={(e) => redirectToSocialMedia("facebook")} class="icons_btns fab fa-facebook-f"></i>
                        <i onClick={(e) => redirectToSocialMedia("twitter")} class="icons_btns fab fa-twitter"></i>
                        <i onClick={(e) => redirectToSocialMedia("instargam")} class="icons_btns fab fa-instagram"></i>
                        <i onClick={(e) => redirectToSocialMedia("linkedin")} class="icons_btns fab fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HowToGetComponent;
