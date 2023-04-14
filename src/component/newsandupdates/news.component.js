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
  const newsCardWidth = "50%"
  const newsCardHeight = "2000px"

  return (
    <React.Fragment>
      <div style={{ overflow: "scroll" }} >
        <center><h2>News And Updates !</h2></center>

        <div style={{ display: "flex", margin: "20px", gap: "20px", height: "500px", justifyContent: "space-between", flexWrap: "wrap", flexDirection: "row" }}>




          <div style={{ width: "550px" }}>
            <embed src={n1 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n2 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n3 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n4 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n5 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n6 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n7 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n8 + params} width="100%" height="100%" />
          </div>
          <div style={{ width: "550px" }}>
            <embed src={n4 + params} width="100%" height="100%" />
          </div>

        </div>



        {/* <div className="news-card-body" >
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
          </div> */}

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