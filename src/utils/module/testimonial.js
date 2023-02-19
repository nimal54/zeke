import React, { useState } from "react";
import "../../style/utils/testimonial.style.css";
import * as contents from "../../utils/content.collections";
import img1 from "../../assets/testimonial/avatar3.png";
import img2 from "../../assets/testimonial/amal.png";
import img3 from "../../assets/testimonial/diya.png";
import img4 from "../../assets/testimonial/jovin.png";
import img5 from "../../assets/testimonial/tony.png";
import img6 from "../../assets/testimonial/justin.png";


const Testimonial = () => {
  const arr_img = [img1, img2, img3, img4, img5, img6];
  const [testimonial_index, setTestimonial_index] = useState(1);

  const changeTestimonialIndex = (isIncrement) => {
    if (isIncrement) {
      var temp = testimonial_index;
      temp = testimonial_index + 1 < 6 ? testimonial_index + 1 : 1;
      setTestimonial_index(temp);
    } else {
      var temp = testimonial_index;
      temp = testimonial_index - 1 > 0 ? testimonial_index - 1 : 5;
      setTestimonial_index(temp);
    }
  };

  return (
    <section class="testimonial text-center ">
      <div class="container">
        <div class="heading white-heading item scrollFade">Testimonial</div>
        <div
          id="testimonial4"
          class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div class="carousel-inner item scrollFade" role="listbox">
            <div class="carousel-item item scrollFade">
              <div class="testimonial4_slide">
                <img
                  src={arr_img[testimonial_index]}
                  class="img-circle img-responsive"
                />
                <p>{contents.TESTIMONIAL_CONTENT[testimonial_index].content}</p>
                <h4>{contents.TESTIMONIAL_CONTENT[testimonial_index].client}</h4>
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "space-evenly", display: "flex" }}>
            <div
              onClick={(e) => {
                changeTestimonialIndex(false);
              }}
            >
              <i class="arrow left"></i>
            </div>
            <div
              onClick={(e) => {
                changeTestimonialIndex(true);
              }}
            >
              <i class="arrow right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
