import React from "react";
import gradeCalculator from "../images/grade-calculator.png";
import trainReservations from "../images/train-reservations.png";
import portfolioWebsite from "../images/portfolio-website.png";
//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row">
          <div
            className="portfolio-image-box col d-flex justify-content-center"
            onClick={(e) => window.open("https://grade-calculator-uwf.web.app/courses")}>
            <img
              className="portfolio-image"
              src={gradeCalculator}
              alt="Grade Tracker Project with React and Bootstrap and firebase"
            />

            <div className="overflow"></div>
            {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
          </div>
          {/*  */}
          <div className="portfolio-image-box col d-flex justify-content-center">
            <img
              src={portfolioWebsite}
              alt="Portfolio website with React and Bootstrap"
              className="portfolio-image"
            />
            <div className="overflow"></div>
            {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
          </div>
          {/*  */}
          <div className="portfolio-image-box col d-flex justify-content-center">
            <img
              src={trainReservations}
              alt="Train Reservation Project with Java and Java Swing"
              className="portfolio-image"
            />
            <div className="overflow"></div>
            {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
          </div>
          {/*  */}
          <div className="portfolio-image-box col d-flex justify-content-center">
            <img
              src={gradeCalculator}
              alt="UWF Club website with React and TailWind"
              className="portfolio-image"
            />
            <div className="overflow"></div>
            {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
