import React from "react";
import HeaderComponent from "../component/header/header.component";

const HeaderPage = (props) => {
  return <HeaderComponent setPathInfo={props.setPathInfo}/>;
};

export default HeaderPage;
