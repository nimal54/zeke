import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <React.Fragment>
      {/* <HeaderPage /> */}
      {/* <Divider/> */}
      <HomePage/>
      
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="*" component={HomePage} />
      </Switch> */}
      {/* <FooterPage /> */}
    </React.Fragment>
  );
};
export default App;
