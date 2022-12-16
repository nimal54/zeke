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

  return (
    <div
      className="stepbystep"
      style={{ textAlign: "center", maxHeight: window.innerWidth / 2 }}
    >
      <h2 style={{ color: "#0B2742" }}>Step by step to your dreams!</h2>
      <p>This is our journey to make your journey easy!!!</p>
      <div>
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
            <h2>Step 1</h2>
            <button onClick={() => onClickCard()} className="button">
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
            <h2>Step 2</h2>
            <button onClick={() => onClickCard()} className="button">
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
            <h2>Step 3</h2>
            <button onClick={() => onClickCard()} className="button">
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
            <h2>Step 4</h2>
            <button onClick={() => onClickCard()} className="button">
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
            <h2>Step 5</h2>
            <button onClick={() => onClickCard()} className="button">
              More
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
