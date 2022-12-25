import React, { useState } from "react";

import "../../style/home/benefits.style.css";

import * as contents from "../../utils/content.collections";

const BenefitsComponent = () => {
  const [currentCardId, setCurrentCardId] = useState(1);

  const onClickCard = () => {
    var temp = currentCardId + 1;
    if (temp == 6) {
      temp = 1;
    }
    setCurrentCardId(temp);
  };

  const findPercentage = () => {
    var id = currentCardId;
    if (id == 1) return 20;
    else if (id == 2) return 40;
    else if (id == 3) return 60;
    else if (id == 4) return 80;
    else if (id == 5) return 100;
    else return 1;
  };

  return (
    <div className="stepbystep" style={{ textAlign: "center" }}>
      <h2>
        Step by step to your dreams!{window.innerWidth}-{window.innerHeight}
      </h2>
      <p>This is our journey to make your journey easy!!!</p>
      <progress
        id="file"
        style={{ width: "70%", height: "8px", accentColor: "#4caf50" }}
        value={findPercentage()}
        max="100"
      >
        {" "}
        {currentCardId}{" "}
      </progress>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {currentCardId >= 1 ? <h6> 1</h6> : ""}
        {currentCardId >= 2 ? <h6> 2</h6> : ""}
        {currentCardId >= 3 ? <h6> 3</h6> : ""}
        {currentCardId >= 4 ? <h6> 4</h6> : ""}
        {currentCardId >= 5 ? <h6> 5</h6> : ""}
      </div>

      <div className="cardsContainer">
        <ul class="cards">
          <li
            class={
              currentCardId == 1
                ? "card card--current "
                : "card card--out card--next"
            }
          >
            <h3>
              First, we'll get the paperwork from the students. We will compile
              a list of the programmes and universities that best fit your
              profile after thorough research and analysis. The student can
              select their preferred institution from the list of colleges and
              begin the admissions process by paying the required application
              cost.
            </h3>
            <button onClick={() => onClickCard()} className="morebutton">
              More
            </button>
          </li>

          <li
            class={
              currentCardId == 2
                ? "card card--current "
                : "card card--out card--next"
            }
          >
            <h3>
              The college will deliver an offer letter between five to thirty
              days. On alternate days, we will email information on the status
              of the application. After receiving the offer letter, the
              candidate must immediately prepay the college fees. The student
              must have a medical examination after paying fees, and we will
              assist in setting up an appointment.
            </h3>
            <button onClick={() => onClickCard()} className="morebutton">
              More
            </button>
          </li>

          <li
            class={
              currentCardId == 3
                ? "card card--current "
                : "card card--out card--next"
            }
          >
            <h3>
              We will assist the student in opening a bank account in the
              country where they want to relocate because they will need one
              there. The candidate will be given the bank account information,
              to which they must transfer the funds for any necessary costs.
            </h3>
            <button onClick={() => onClickCard()} className="morebutton">
              More
            </button>
          </li>

          <li
            class={
              currentCardId == 4
                ? "card card--current "
                : "card card--out card--next"
            }
          >
            <h3>
              Next step would be preparing financial documents and preparing an
              SOP. We'll go over the SOP the student-produced and also offer
              writing assistance for one.
            </h3>
            <button onClick={() => onClickCard()} className="morebutton">
              More
            </button>
          </li>

          <li
            class={
              currentCardId == 5
                ? "card card--current "
                : "card card--out card--next"
            }
          >
            <h3>
              We will start the visa application process using all the data and
              information gathered. Within two to three days of applying for a
              visa, one must undergo a biometric examination. There will be a
              waiting period for getting the approval after which the passport
              will then be sent for visa stamping. We will assist with all
              travel procedures after gaining visa clearance.
            </h3>
            <button onClick={() => onClickCard()} className="morebutton">
              More
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
