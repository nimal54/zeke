import React from "react";

import "../../style/home/howtoget.style.css";
import img10 from "../../assets/home/0.jpg";
import img11 from "../../assets/home/1.jpg";
import * as contents from "../../utils/content.collections";

const HowToGetComponent = () => {
  // /HOW_TO_GET_ZEKE

  const isTrue = (index) => {
    if (window.innerWidth > 400) return index % 2 == 0 ? true : false;
    else return true;
  };

  return (
    <div>
      <div className="howtoget">
        <h2>How to get Zeke ?</h2>
        <p>This is our journey to make your journey easy!!!</p>
        <div className="howtoget_contentdiv">
        {contents.HOW_TO_GET_ZEKE.map((data, index) =>
        isTrue(index) ? (
          <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{backgroundImage: `url(${img10})`}}></div>
              <ul class="details"></ul>
            </div>
            <div class="description">
              <h1>{data.head}</h1>
              <p> {data.subhead}</p>
              <p class="read-more">
                <a href="#">Join Us</a>
              </p>
            </div>
          </div>
        ) : (
          <div class="blog-card">
            <div class="description">
              <h1>{data.head}</h1>
              <p> {data.subhead}</p>
              <p class="read-more">
                <a href="#">Join Us</a>
              </p>
            </div>
            <div class="meta">
              <div class="photo"></div>
              <ul class="details"></ul>
            </div>
          </div>
        )
      )}
      {/* {contents.HOW_TO_GET_ZEKE.map((data, index) =>
          (

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style={{
                  backgroundImage:
                    index === 0 ? `url(${img10})`
                      : index === 1 ? `url(${img11}`
                        : index === 2 ? `url(${img10}`
                          : index === 2 ? `url(${img11}`
                            : index === 2 ? `url(${img10}` : `url(${img11})`
                }}>
                  <div>
                    <h3 className="cover_title">{data.head}</h3>
                  </div>
                </div>
                <div class="flip-card-back">
                  <h1>{data.head}</h1>
                  <p>{data.subhead}</p>
                </div>
              </div>
            </div>
          ))
          } */}
        </div>
      </div>
    </div>
  );
};

export default HowToGetComponent;


