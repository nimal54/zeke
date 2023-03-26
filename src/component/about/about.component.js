import React from "react";
import "../../style/about/about.style.css";
import about_illustration from "../../assets/about/about_illustration.jpg";

const AboutComponent = () => {
  return (
    <React.Fragment>
      <div className="about_main_div">
        {window.innerWidth < 800 ? (
          <div className="about_session2">
            <img src={about_illustration}></img>
          </div>
        ) : (
          ""
        )}
        <div
          className="about_session1"
          style={{ width: window.innerWidth > 400 ? "62%" : "100%" }}
        >
          <h1>About Us</h1>
          <p>
            Hi there! Are you ready for the new adventure you’re gonna make?
            First thing first, let’s get to know each other
          </p>
          <h2>A little something about us...</h2>
          <p>
            Yes! We are a bunch of passionate boys who have made the decision to
            embark on a new journey by assisting students in making their
            migration simple and fun. The inspiration for this ambitious project
            was derived from a modest amount of prior experience in the field.
            We are aware of the concerns and questions that students have during
            the admission process. After so many thoughts and discussions, Zeke
            happened.
            <br /> One of the biggest decisions one makes in their lifetime is
            deciding to go abroad. It takes a lot of bravery and confidence to
            pack your bags and travel to a foreign country. That’s where we
            started wondering travelling is a soothing experience but why is
            this getting difficult? Perhaps because their future is at stake on
            this voyage. We wanted every one of our students to board that
            flight happily and not hesitantly. We are here making an effort to
            make the migration delightful and not doubtful. The majority of
            students are unsure about which major to pursue or which university
            to enrol in. Zeke finally shines at this point!
          </p>
          <h3>We are here for...</h3>
          <p>
            We offer to counsel students who come to us, so that they can choose
            their future abroad. From various tests and classes, we will give
            them the courses that match their profile and which also get easy
            visa approval. We help with the writing of concise and comprehensive
            SOPs, which have never been rejected to date. So once you're here,
            you'll cheerfully end up abroad!
          </p>

          <h2>Reasons to stay here...</h2>
          <ul>
            <li>
              Everything is online! You don't have to wander from office to
              office with papers and files. Doubts, concerns and anything can be
              sorted in the comfort of your home.
            </li>
            <li>
              Under our wing, you will only ever select the course that best
              suits you.
            </li>
            <li>
              It’s a little worrisome when it comes to money, that is why you
              don’t have to pay anything to us. You’ll be paying the fees
              directly to the college/university.
            </li>
            <li>We are agents that make your moving process easy.</li>
            <li>
              5. Anybody can contact us, students, parents even neighbours (yeah
              right).
            </li>
          </ul>

          <h2>
            So that is what we are, and if you don’t mind,{" "}
            <strong style={{color:"#1abc9c"}}>Can we help you?</strong>
          </h2>
        </div>

        {window.innerWidth > 800 ? (
          <div className="about_session2">
            <img src={about_illustration}></img>
          </div>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default AboutComponent;
