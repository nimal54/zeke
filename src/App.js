import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import AboutPage from "./page/about.page";
import ContactPage from "./page/contact.page";

const App = () => {
  return (
    // <div> <AboutPage /> <FooterPage /></div>
    // <div> <AboutPage /></div>
    <Router>
    <Routes>
      <Route exact path="/" element={ <div> <HomePage /> <FooterPage /></div> }></Route>
      <Route exact path="zekeinternational/about" element={ <div> <AboutPage /> <FooterPage /></div>} ></Route>
      <Route exact path="zekeinternational/contact" element={<div> <ContactPage /> <FooterPage /></div>}></Route>
    </Routes>
  </Router>
  );
};
export default App;
