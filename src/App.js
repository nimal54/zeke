import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import AboutPage from "./page/about.page";
import ContactPage from "./page/contact.page";
import Newsletters from "./utils/module/newsletters";
import Testimonial from "./utils/module/testimonial";
import HeaderPage from "./page/header.page";
import { Divider } from "@mui/material";

const App = () => {
  const [pathInfo, setPathInfo] = useState("home");

  useEffect(() => {
    let path = window.location.pathname;
    if (path.includes("home")) {
      setPathInfo("home")
    } else if (path.includes("about")) {
      setPathInfo("about")
    } else if (path.includes("contact")) {
      setPathInfo("contact")
    } else {
      setPathInfo("")
    }
  }, [])

  return (
    // <div>
    //   <HeaderPage/>
    //   <Divider/>
    //   <HomePage/>

    //   <AboutPage />
    //   <ContactPage />
    //   <Newsletters/>
    //   <Testimonial/>
    //   <FooterPage/>

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
    <div>
      {pathInfo === "home" ? (
        <div>
          <HeaderPage />
          <HomePage />
          <FooterPage />
        </div>
      ) : pathInfo === "about" ? (
        <div>
          <HeaderPage />
          <AboutPage />
          <FooterPage />
        </div>
      ) : pathInfo === "contact" ? (
        <div>
          <HeaderPage />
          <ContactPage />
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
