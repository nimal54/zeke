import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HeaderPage from "./page/header.page";
import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import AboutPage from "./page/about.page";

import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ContactPage from "./page/contact.page";
import { Divider, Switch } from "@mui/material";

const App = () => {
  return (
    <Router>
      {/* <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
        </Routes>
        <FooterPage/>
      {/* </div> */}
    </Router>
  );
};
export default App;
