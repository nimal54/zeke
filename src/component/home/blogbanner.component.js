import React from "react";
import "../../style/utils/newsletter.style.css"

import img10 from "../../assets/home/bannerblogImg.jpeg";

const BlogBannerComponent = () => {
    return (
        <center>

            <section class="newsletter item scrollFade" style={{ display: "flex", flexDirection: "column",backgroundPosition:"center", flexWrap: "wrap", backgroundImage: `url(${img10})`,height:"250px", backgroundSize:"cover", backgroundRepeat:'no-repeat' }}>
                <div>
                    <h1 style={{ color: "white" }}>Begin your journey with us !!!</h1>
                    <div className="meetus" style={{ justifyContent: "center", width: "100%" }}>
                        <button onClick={(e) => ""}  >Click here</button>
                    </div>
                </div>
            </section>

        </center>
    )
}

export default BlogBannerComponent;