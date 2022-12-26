import React from "react";

import "../../style/home/howtoget.style.css";
import img11 from '../../assets/home/hm1.jpg'
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
      </div>
      {contents.HOW_TO_GET_ZEKE.map((data, index) =>
        isTrue(index) ? (
          <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{backgroundImage: `url(${img11})`}}></div>
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
              <div class="photo" style={{backgroundImage: `url(${img11})`}}></div>
              <ul class="details"></ul>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HowToGetComponent;
