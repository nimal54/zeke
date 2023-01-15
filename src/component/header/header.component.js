import React, { useEffect, useState } from "react";

import "../../style/header/header.style.css";

function HeaderComponent() {
  const [slidebar, setSlidebar] = useState(false);

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
          onClick={() => setSlidebar(slidebar ? false : true)}
        >
          &times;
        </a>
        <a  href="/home">Home</a>
        <a href="/about">About</a>
        {/* <a href="/blog">Blogs</a> */}
        <a href="/contact">Contact</a>
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
