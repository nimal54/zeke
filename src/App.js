import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import AboutPage from "./page/about.page";
import ContactPage from "./page/contact.page";
import Newsletters from "./utils/module/newsletters";
import Testimonial from "./utils/module/testimonial";
import HeaderPage from "./page/header.page";
import BlogPage from "./page/blog.page"
import { Divider } from "@mui/material";
import CountryListBannerComponent from "./component/country/countryListbanner.component";
import HeaderAndHeroComponent from "./component/home/header.and.herocomponent";
import NewsPage from "./page/news.page";

const App = () => {
  const [pathInfo, setPathInfo] = useState("home");



  return (


    <div>
      {pathInfo === "home" ? (
        <div>
          {/* hero content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <HomePage pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <Testimonial />
          <FooterPage />
        </div>
      ) : pathInfo === "about" ? (
        <div>
          {/* ab out content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <AboutPage pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <FooterPage />
        </div>
      ) : pathInfo === "contact" ? (
        <div>
          {/* cntcat content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <ContactPage pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <FooterPage />
        </div>
      ) : pathInfo === "blog" ? (
        <div>
          {/* blog content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <BlogPage pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <div style={{bottom:'0', position:"absolute"}}>
            <FooterPage /></div>
        </div>
      ) : pathInfo === "news" ? (
        <div>
          {/* news content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <NewsPage pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <FooterPage />
        </div>
      ) : (
        <div>
          <center>
            <medium className="bounsing_errormsg">Thanks for choosing <span style={{ color: "blue", fontWeight: "bold" }}>Zeke</span> !!! <br />Please check url</medium>
          </center>
        </div>
      )}
    </div>
  );
};
export default App;
