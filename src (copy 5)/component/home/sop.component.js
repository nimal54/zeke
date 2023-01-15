import React from "react";

import "../../style/home/sop.style.css";

const SOPComponent = () => {
  return (
    <div className="screen">
      <div className="innerscreen">
        <h2>It’s okay! We’ve it all sorted!</h2>
        <small>
          We help you choose the right course, in the right college/university!
          Doing it right is what we do!
        </small>
        <div class="login">
          <input type="text" placeholder="Country"></input>
          <input type="text" placeholder="Course"></input>
          <input type="text" placeholder="Intake"></input>
        </div>
        <div className="screen_meetus">
          <div className="meetus">
            <button>Join with Gmail</button>
            <button>Join with Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPComponent;
