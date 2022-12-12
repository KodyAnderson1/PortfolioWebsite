import React from "react";
import headshot from "../images/headshot.jpg";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrapper mb-5">
              <img className="profile-img" src={headshot} alt="author's headshot" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h2 className="about-heading">About Me</h2>
            <p>
              My Name is Kody Anderson. I am a senior at The University of West Florida (UWF) and am
              graduating in December 2023. I am majoring in Software Design & Development with a
              minor in Computer Science and a Cybersecurity certificate. My overall UWF GPA is{" "}
              <b>3.69</b>, with a major GPA of <b>3.94</b>.
            </p>
            <p>
              This previous semester (Fall 2022), I took Data Structures & Algorithms I, where we
              extensively utilized Github and test-driven development. Software Engineering I, where
              we used SCRUM, Github, and Trello. Advanced Computer Programming, where we learned
              about Java network programming, programming utilizing relational databases, and
              multithreading. I also took Client-Side Programming, where we used Javascript with
              React and bootstrap (and Firebase).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
