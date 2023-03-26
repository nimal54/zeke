import React from "react";
import earn_illustration from "../../assets/home/earn.jpg";
import "../../style/blog/blog.style.css";

import n1 from "../../assets/blogs_content/1.pdf";
import n2 from "../../assets/blogs_content/2.pdf";
import n3 from "../../assets/blogs_content/3.pdf";
import n4 from "../../assets/blogs_content/4.pdf";
import n5 from "../../assets/blogs_content/5.pdf";
import n6 from "../../assets/blogs_content/6.pdf";
import n7 from "../../assets/blogs_content/7.pdf";
import n8 from "../../assets/blogs_content/8.pdf";


var params = "#toolbar=0&navpanes=0&scrollbar=0&embedded=0"
const NewsComponent = () => {
  const newsCardWidth = "300px"
  const newsCardHeight = "300px"

  return (
    <React.Fragment>
      <div className="blogMainFrame" >
        <center><h2>News And Updates !</h2></center>
        <div className="news-card-body" style={{ display: "flex", padding: "30px", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div className="news-card-body" >
            <embed src={n1 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n2 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n3 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n4 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n5 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n6 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>
          <div className="news-card-body" >
            <embed src={n7 + params} width={newsCardWidth} height={newsCardHeight} />
          </div>

        </div>

      </div>
    </React.Fragment>
  );
};

export default NewsComponent;




{/* <embed  tyle={{scrollbarColor:"yellow"}} src="https://docs.google.com/viewer?url=http://www.africau.edu/images/default/sample.pdf&embedded=true&navpanes=false&scrollbar=false"  
     title="W3Schools Free Online Web Tutorials"  frameborder="0" height="400px" width="40%"></embed> */}



{/* <embed type="application/pdf" 
  src="http://www.africau.edu/images/default/sample.pdf#toolbar=0&navpanes=0&scrollbar=0&embedded=1"
  width="40%" height="300" /> */}