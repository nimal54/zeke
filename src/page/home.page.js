import React from "react";
import HomeComponent from "../component/home/home.component"

const HomePage = (props) => {
    return <HomeComponent pathInfo={props.pathInfo} setPathInfo={props.setPathInfo} />

}

export default HomePage