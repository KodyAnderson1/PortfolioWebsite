import React from "react";
import { GradeTrackerModal } from "./ProjectModals/GradeTracker";
import { PortfolioWebsiteModal } from "./ProjectModals/PortfolioWebSite";
import { TrainReservationsModal } from "./ProjectModals/TrainReservations";
import { TaskifyModal } from "./ProjectModals/taskify";
// import { NoWestCollectiveModal } from "./PortfolioModals/NoWestCollective";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Projects</h1>
          <div className="image-box-wrapper row">
            <GradeTrackerModal />
            <PortfolioWebsiteModal />
            <TrainReservationsModal />
            <TaskifyModal />
            {/* <NoWestCollectiveModal /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
