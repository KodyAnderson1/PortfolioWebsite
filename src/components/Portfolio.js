import React from "react";
import gradeCalculator from "../images/grade-calculator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { GradeTrackerModal } from "./PortfolioModals/GradeTracker";
import { PortfolioWebsiteModal } from "./PortfolioModals/PortfolioWebSite";
import { TrainReservationsModal } from "./PortfolioModals/TrainReservations";
import { NoWestCollectiveModal } from "./PortfolioModals/NoWestCollective";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row">
          <GradeTrackerModal />
          <PortfolioWebsiteModal />
          <TrainReservationsModal />
          <NoWestCollectiveModal />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
