import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

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
import CountryPage from "./page/country.page";

const App = () => {
  const [pathInfo, setPathInfo] = useState("home");


  const topFunction = (media) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [selectedCountry, setSelectedCountry] = useState('CANADA')

  return (


    <div>
      <button onClick={(e) => topFunction()}  className="scrollToTopBtn" id="scrollToTopBtn" title="Go to top"><i class="fas fa-angle-up" style={{fontSize:"x-large"}}></i></button>
      {pathInfo === "home" ? (
        <div>
          {/* hero content  */}
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <HomePage setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} pathInfo={pathInfo} setPathInfo={setPathInfo} />
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
          {/* <div style={{bottom:'0', position:"absolute"}}> */}
            <FooterPage />
        {/* </div> */}
        </div>
      ) : pathInfo === "country" ? (
        <div>
          <HeaderAndHeroComponent pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <CountryPage selectedCountry={selectedCountry} pathInfo={pathInfo} setPathInfo={setPathInfo} />
          <FooterPage />
        </div>
      ) :(
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
