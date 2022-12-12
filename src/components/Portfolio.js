import React from "react";
import { GradeTrackerModal } from "./PortfolioModals/GradeTracker";
import { PortfolioWebsiteModal } from "./PortfolioModals/PortfolioWebSite";
import { TrainReservationsModal } from "./PortfolioModals/TrainReservations";
// import { NoWestCollectiveModal } from "./PortfolioModals/NoWestCollective";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">portfolio</h1>
          <div className="image-box-wrapper row">
            <GradeTrackerModal />
            <PortfolioWebsiteModal />
            <TrainReservationsModal />
            {/* <NoWestCollectiveModal /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
