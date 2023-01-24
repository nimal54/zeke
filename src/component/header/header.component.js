import React, { useEffect, useState } from "react";

import "../../style/header/header.style.css";

function HeaderComponent(props) {
  const [slidebar, setSlidebar] = useState(false);
  const [slidebarWidth, setSlidebarWidth] = useState("0%")


  const eventRouter = (path) => {
    console.log(path);
    props.setPathInfo(path)
    setSlidebar(slidebar ? false : true)
  }

  return (
    <div>
      <div
        id="mySidenav"
        style={{ width: slidebar ? "100%" : "0%" }}
        class="sidenav"
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={(e) => setSlidebar(slidebar ? false : true)}
        >
          &times;
        </a>
        <a onClick={(e) => eventRouter("home")}>Home</a>
        <a onClick={(e) => eventRouter("about")} >About</a>
        <a onClick={(e) => eventRouter("blog")} >Blogs</a>
        <a onClick={(e) => eventRouter("contact")}>Contact</a>
      </div>
      <h1 href="#" className="logo">
        <span
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setSlidebar(slidebar ? false : true)}
        >
          &nbsp;&nbsp;&#9776; &nbsp;&nbsp;
        </span>
        Zeke international
      </h1>
    </div>
  );
}

export default HeaderComponent;
