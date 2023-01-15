import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import AboutPage from "./page/about.page";
import ContactPage from "./page/contact.page";
import Newsletters from "./utils/module/newsletters";
import Testimonial from "./utils/module/testimonial"
import HeaderPage from "./page/header.page";
import { Divider } from "@mui/material";

const App = () => {
  return (
    <div>
      <HeaderPage/>
      <Divider/>
      <HomePage/>
      
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      <Newsletters/>
      <Testimonial/>
      <FooterPage/>

    </div>
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
  );
};
export default App;
