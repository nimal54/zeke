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

const App = () => {
  const [pathInfo, setPathInfo] = useState("home");



  return (


    <div>
      {pathInfo === "home" ? (
        <div>
          <HeaderPage setPathInfo={setPathInfo} />
          <HomePage />
          <Testimonial />
          <FooterPage />
        </div>
      ) : pathInfo === "about" ? (
        <div>
          <HeaderPage setPathInfo={setPathInfo} />
          <AboutPage />
          <FooterPage />
        </div>
      ) : pathInfo === "contact" ? (
        <div>
          <HeaderPage setPathInfo={setPathInfo} />
          <ContactPage />
          <FooterPage />
        </div>
      ) : pathInfo === "blog" ? (
        <div>
          <HeaderPage setPathInfo={setPathInfo} />
          <BlogPage />
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




// </div>
    // <Router>
    //   <HeaderPage />
    //   <Divider />
    //   <Routes>
    //     <Route exact path="/" element={<HomePage />}></Route>
    //     <Route exact path="/about" element={<AboutPage />}></Route>
    //     <Route exact path="/contact" element={<ContactPage />}></Route>
    //   </Routes>
    //   <FooterPage />
    // </Router>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HeaderPage />}>
    //       <Route path="/home" element={<HomePage />} />
    //       <Route path="/about" element={<AboutPage />} />
    //       <Route path="/contact" element={<ContactPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>