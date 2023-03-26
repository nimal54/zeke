import React from "react";
import earn_illustration from "../../assets/home/earn.jpg";
import "../../style/blog/blog.style.css";

import img10 from "../../assets/home/0.jpg";
import * as contents from "../../utils/content.collections";

const BlogComponent = () => {


  return (
    <React.Fragment>
      <div className="blogMainFrame" >
        <center><h2>Read. Learn. Repeat!</h2></center>
        {contents.BLOGCONTENT.map((data, index) =>
          <section class="blog_container">
            <div class="blog_card-container">
              <div
                class="blog_card-image"
                style={{ backgroundImage: `url(${img10})` }}

              ></div>
              <div class="blog_card-body">
                <span class="blog_card-badge blog_card-badge-purple">{data.media}</span>
                <h1>
                  {data.heading}
                </h1>
                <p class="blog_card-subtitle">
                  {data.paragraph}
                </p>
              </div>
              <div className="blog_card-body" style={{ alignItems: "end" }}>
                <span onClick={(e) => window.open(data.redirectingurl, '_blank')} class="blog_card-badge blog_card-badge-cyan">Read More</span>
              </div>

            </div>
          </section>
        )}

      </div>


    </React.Fragment>
  );
};

export default BlogComponent;