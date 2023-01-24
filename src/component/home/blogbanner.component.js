import React from "react";
import "../../style/utils/newsletter.style.css"

const BlogBannerComponent = () => {
    return (
        <center>
            <section class="newsletter" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                <h1 style={{color:"white"}}>Are you Ready to explore!!!</h1>
                <div className="meetus" style={{justifyContent:"center", width:"100%"}}>
                    <button onClick={(e) => ""}  >Click here</button>
                </div>
            </section>
        </center>
    )
}

export default BlogBannerComponent;